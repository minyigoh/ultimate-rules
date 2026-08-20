"""Layout guard for the reel pipeline.

render_v3.py lays text out with hard-coded y-cursors and a character-count
wrapper, so a longer headline or an extra rule block silently runs off the
1080x1350 card instead of failing. This measures the finished SVG of every
scene with the real font metrics and reports anything that leaves the
margins, so overflow is caught before the 1,800-frame render rather than by
eye afterwards.
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


def unescape(s):
    return (s.replace("&quot;", '"').replace("&gt;", ">")
             .replace("&lt;", "<").replace("&amp;", "&"))


def check(path):
    svg = open(path, encoding="utf-8").read()
    problems, max_y, max_x = [], 0, 0
    for x, y, weight, size, anchor, body in TEXT_RE.findall(svg):
        x, y, size = float(x), float(y), float(size)
        text = unescape(body)
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
