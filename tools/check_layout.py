"""Layout guard for the reel pipeline.

render_v3.py lays text out with hard-coded y-cursors and a character-count
wrapper, so a longer headline or an extra rule block silently runs off the
1080x1350 card instead of failing. This measures the finished SVG of every
scene with the real font metrics and reports anything that leaves the
margins, so overflow is caught before the 1,800-frame render rather than by
eye afterwards.

It also checks for *collisions*. Staying inside the margins is not the same as
being readable: on reel-18 the body block grew to six lines and its last line
landed on top of the "WFDF Rules of Ultimate 2025-2028" citation, which sits at
a fixed y. Every element was inside the card, so the margin check passed and
reported "clean at 1192 of 1310px" while the citation was unreadable. Min-Yi
rejected it on 2026-08-22 ("The WFDF reference is blocking the content").
Overlap is measured on real ink boxes (PIL getbbox with a baseline anchor),
expanded by half the stroke width, so it catches exactly that case.
"""
import glob
import re
import sys

from PIL import ImageFont

W, H, MARGIN = 1080, 1350, 90
LEFT, RIGHT = MARGIN, W - MARGIN
BOT = H - 40

FONTS = {
    "bold": "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    "normal": "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
}
_cache = {}


def font(weight, size):
    key = (weight, int(size))
    if key not in _cache:
        _cache[key] = ImageFont.truetype(FONTS[weight], int(size))
    return _cache[key]


TEXT_RE = re.compile(
    r'<text x="([\d.]+)" y="([\d.]+)"[^>]*?font-weight="(\w+)" font-size="([\d.]+)"'
    r'[^>]*?text-anchor="(\w+)"[^>]*?>(.*?)</text>',
    re.S,
)
STROKE_RE = re.compile(r'stroke-width="([\d.]+)"')

# Two ink boxes have to overlap by more than this in BOTH axes before it counts.
# Antialiasing and the round stroke join make a pixel or two of contact normal
# and invisible; 2px is comfortably below anything legible-looking.
COLLIDE_TOL = 2.0


def unescape(s):
    return (s.replace("&quot;", '"').replace("&gt;", ">")
             .replace("&lt;", "<").replace("&amp;", "&"))


def ink_box(x, y, weight, size, anchor, text, stroke):
    """Ink bounding box in card coordinates, expanded by half the stroke."""
    f = font(weight, size)
    w = f.getlength(text)
    x0 = x - w if anchor == "end" else (x - w / 2 if anchor == "middle" else x)
    # getbbox with a baseline anchor gives ink extents relative to (0, baseline),
    # which is what the SVG y attribute actually is.
    bx0, by0, bx1, by1 = f.getbbox(text, anchor="ls")
    pad = stroke / 2.0
    return (x0 + bx0 - pad, y + by0 - pad, x0 + bx1 + pad, y + by1 + pad)


def collisions(boxes):
    """Pairs of ink boxes that overlap in both axes by more than the tolerance."""
    out = []
    for i in range(len(boxes)):
        ax0, ay0, ax1, ay1, atext = boxes[i]
        for j in range(i + 1, len(boxes)):
            bx0, by0, bx1, by1, btext = boxes[j]
            ox = min(ax1, bx1) - max(ax0, bx0)
            oy = min(ay1, by1) - max(ay0, by0)
            if ox > COLLIDE_TOL and oy > COLLIDE_TOL:
                out.append((ox, oy, atext, btext))
    return out


def check(path):
    svg = open(path, encoding="utf-8").read()
    problems, max_y, max_x = [], 0, 0
    boxes = []
    for m in TEXT_RE.finditer(svg):
        x, y, weight, size, anchor, body = m.groups()
        x, y, size = float(x), float(y), float(size)
        text = unescape(body)
        sw = STROKE_RE.search(m.group(0))
        stroke = float(sw.group(1)) if sw else 0.0
        w = font(weight, size).getlength(text)
        x0 = x - w if anchor == "end" else (x - w / 2 if anchor == "middle" else x)
        x1 = x0 + w
        max_y, max_x = max(max_y, y), max(max_x, x1)
        if x1 > RIGHT + 0.5:
            problems.append(f"    x-overflow {x1 - RIGHT:6.1f}px  {size:.0f}px  {text[:60]!r}")
        if x0 < LEFT - 0.5:
            problems.append(f"    x-underflow {LEFT - x0:5.1f}px  {text[:60]!r}")
        if y > BOT:
            problems.append(f"    y-overflow  {y - BOT:6.1f}px  {text[:60]!r}")
        if text.strip():
            bx = ink_box(x, y, weight, size, anchor, text, stroke)
            boxes.append((bx[0], bx[1], bx[2], bx[3], text))
    for ox, oy, a, b in collisions(boxes):
        problems.append(
            f"    collision   {oy:6.1f}px vertical, {ox:.0f}px horizontal\n"
            f"                {a[:56]!r}\n"
            f"                {b[:56]!r}")
    return max_y, max_x, problems


def main(pattern="v4/svg/*.svg"):
    files = sorted(glob.glob(pattern))
    if not files:
        raise SystemExit(f"no SVGs matched {pattern}")
    # Only the last state of each scene matters: states are cumulative, so it
    # carries every element the earlier ones had.
    last = {}
    for f in files:
        last[re.sub(r"_\d+\.svg$", "", f)] = f
    bad = 0
    for scene in sorted(last):
        f = last[scene]
        max_y, max_x, problems = check(f)
        flag = "FAIL" if problems else "ok  "
        print(f"{flag} {f.split('/')[-1]:34} max_y={max_y:7.1f}/{BOT}  max_x={max_x:6.1f}/{RIGHT}")
        for p in problems:
            print(p)
        bad += len(problems)
    print(f"\n{len(last)} scenes checked, {bad} problem(s)")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(*sys.argv[1:]))
