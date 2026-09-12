import textwrap

BG = "#0F1712"
ORANGE = "#E24A12"
CREAM = "#F1F3EE"
FONT = "Liberation Sans"

W, H = 1080, 1350
MARGIN = 90
AVAIL_W = W - 2*MARGIN

def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
             .replace('"', "&quot;"))

# ImageMagick 6 lowers each <text> element into an MVG `text x,y "..."`
# primitive whose payload is itself double-quoted, so a double-quote that lands
# against either delimiter is silently dropped. Quotes in the middle survive.
# The <tspan> gives the reader a child element to lower instead, so the quote
# is no longer adjacent to a delimiter and renders.
#
# The leading half of this came from reel-21, which shipped `Violation" is a
# legal` with the opening quote missing (Min-Yi, 2026-08-24). **The trailing
# half is new, found here on 2026-09-02** while proofing this deck: slide 3's
# takeaway wrapped so its last line was `hand."` and the closing quote vanished
# from the PNG while sitting correctly in the SVG. Measured on all four cases:
#
#   bare `hand."`            -> trailing quote dropped
#   bare `"Contest" x`       -> leading quote dropped   (the known reel-21 case)
#   bare `"a b."`            -> BOTH dropped
#   bare `say "hi" now`      -> fine
#   the same three in <tspan> -> all quotes survive
#
# So the condition is startswith OR endswith, not startswith alone.
# content/reel-*/render_v3.py still carry the startswith-only version and want
# the same edit; see the note in this deck's caption.md.
def _payload(s):
    t = esc(s)
    if t.startswith("&quot;") or t.endswith("&quot;"):
        return f"<tspan>{t}</tspan>"
    return t

def bold(x, y, text, size, color, anchor="start", sw=2.6):
    return (f'<text x="{x}" y="{y}" font-family="{FONT}" font-weight="bold" font-size="{size}" '
            f'fill="{color}" stroke="{color}" stroke-width="{sw}" stroke-linejoin="round" text-anchor="{anchor}">{_payload(text)}</text>')

def reg(x, y, text, size, color, anchor="start", opacity=1):
    return (f'<text x="{x}" y="{y}" font-family="{FONT}" font-weight="normal" font-size="{size}" '
            f'fill="{color}" opacity="{opacity}" text-anchor="{anchor}">{_payload(text)}</text>')

def tracked(s, gap=" "):
    return gap.join(list(s))

def wrap_lines(text, font_size, avail=AVAIL_W, ratio=0.54):
    max_chars = max(6, int(avail / (ratio*font_size)))
    return textwrap.wrap(text, max_chars, break_long_words=False)

def mini_icon(cx, cy, scale=1.0, color=ORANGE):
    rx1, ry1 = 34*scale, 17*scale
    rx2, ry2 = 19*scale, 9*scale
    cy2 = cy - 3*scale
    return (f'<ellipse cx="{cx}" cy="{cy}" rx="{rx1:.1f}" ry="{ry1:.1f}" fill="none" stroke="{color}" stroke-width="{4*scale:.1f}"/>'
            f'<ellipse cx="{cx}" cy="{cy2:.1f}" rx="{rx2:.1f}" ry="{ry2:.1f}" fill="none" stroke="{color}" stroke-width="{2.6*scale:.1f}" opacity="0.55"/>')

def pillar_tag(label="RULES"):
    # small bordered pill, top-right corner, above the header row
    tw = len(label) * 15 + 4
    pad = 20
    rect_w = tw + pad*2
    rect_h = 46
    x2 = W - MARGIN
    x1 = x2 - rect_w
    y1 = 46
    cx_text = x1 + rect_w/2
    cy_text = y1 + rect_h/2 + 8
    return (f'<rect x="{x1}" y="{y1}" width="{rect_w}" height="{rect_h}" rx="23" fill="none" stroke="{ORANGE}" stroke-width="2.5"/>'
            + bold(cx_text, cy_text, label, 22, ORANGE, anchor="middle", sw=1.0))

def header(slide_no, total, pillar="RULES"):
    parts = [pillar_tag(pillar)]
    parts.append(mini_icon(MARGIN+34, 150, scale=1.0))
    parts.append(bold(MARGIN+80, 162, "Learn Ultimate Frisbee", 24, CREAM, sw=1.0))
    parts.append(reg(W-MARGIN, 162, f"{slide_no} / {total}", 24, CREAM, anchor="end", opacity=0.5))
    parts.append(f'<line x1="{MARGIN}" y1="208" x2="{W-MARGIN}" y2="208" stroke="{CREAM}" stroke-width="2" opacity="0.15"/>')
    return "\n".join(parts)

def base(body):
    return f'''<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
<rect width="{W}" height="{H}" fill="{BG}"/>
{body}
</svg>'''

# Nine: a full block of seven lessons plus cover and closing, the shape of
# carousels 2, 3 and 4. carousel-post-5 was eight and this deck's own v1 was
# seven; both were short blocks. The header's `n / TOTAL` counter and the
# closing slide number both key off this constant.
TOTAL = 9

# ---- body auto-fit, the carousel twin of fit_body() in render_v3.py ----
# The citation footer sits at a fixed y (H-200), so a takeaway that wraps to
# one line too many lands on top of it rather than pushing it down. That is
# what reel-18 v1 shipped. Shrink the type, never the approved words.
BODY_SIZE = 36
BODY_LINE_H = 50
BODY_FLOOR = 0.80
CITE_Y = H - 200
BODY_LIMIT = CITE_Y - 60

_FONT_FILE = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

def fit_body(text, y_start, size=BODY_SIZE, line_h=BODY_LINE_H,
             limit=BODY_LIMIT, floor=BODY_FLOOR):
    lo = max(1, int(round(size * floor)))
    s = size
    while True:
        lh = max(1, int(round(line_h * s / size)))
        lines = wrap_lines(text, s)
        last = y_start + (len(lines) - 1) * lh
        if last <= limit or s <= lo:
            break
        s -= 1
    if last > limit:
        raise SystemExit(
            f"takeaway too long: {text[:70]!r}...\n"
            f"  {len(lines)} lines at the {lo}px floor end at y={last:.0f}; "
            f"the citation needs everything above {limit}.")
    return s, lh, lines

def rule_slide(no, kicker, headline, body_text, rules, index=None):
    b = [header(no, TOTAL)]
    kicker_text = (f"#{index}   " + tracked(kicker)) if index else tracked(kicker)
    b.append(bold(MARGIN, 510, kicker_text, 34, ORANGE, sw=1.6))
    y = 610
    for line in wrap_lines(headline, 66, ratio=0.56):
        b.append(bold(MARGIN, y, line, 66, CREAM, sw=3.0))
        y += 78
    y += 46
    bs, blh, blines = fit_body(body_text, y)
    for line in blines:
        b.append(reg(MARGIN, y, line, bs, CREAM, opacity=0.8))
        y += blh
    cy = CITE_Y
    b.append(bold(MARGIN, cy, "WFDF Rules of Ultimate 2025–2028", 26, ORANGE, sw=1.4))
    numbers_line = "  ·  ".join(rules)
    b.append(bold(MARGIN, cy+42, numbers_line, 26, CREAM, sw=1.4))
    return base("\n".join(b))




def cover_slide():
    body = [header(1, TOTAL)]
    body.append(bold(MARGIN, 470, tracked("THIS WEEK"), 32, ORANGE, sw=1.4))
    y = 600
    for line in ["Week six: stopping", "and starting"]:
        body.append(bold(MARGIN, y, line, 96, CREAM, sw=3.2))
        y += 108
    y += 40
    sub = "This week's seven lessons — everything the daily reels covered, 10–16 September."
    for line in wrap_lines(sub, 36):
        body.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.75))
        y += 48
    body.append(bold(MARGIN, H-140, "SWIPE  →", 34, ORANGE, sw=1.6))
    return base("\n".join(body))

def closing_slide():
    b = [header(TOTAL, TOTAL)]
    y = 520
    # Forty-two, the last lesson IN THE BLOCK. Lesson 42 posts 2026-09-16, the
    # day before this deck (2026-09-17), so the count is exact on the day.
    for line in ["That's forty-two", "of seventy-five."]:
        b.append(bold(MARGIN, y, line, 90, CREAM, sw=3.2))
        y += 102
    y += 40
    sub = "More next Thursday — one lesson a day, the full breakdown is linked in bio."
    for line in wrap_lines(sub, 36):
        b.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.8))
        y += 48
    y += 40
    b.append(bold(MARGIN, y, "Follow @learn.ultimatefrisbee", 38, ORANGE, sw=1.8))
    return base("\n".join(b))

# ---- the week being recapped: lessons 36-42 ----
# A clean contiguous seven. Lesson 28 ("Receiving fouls") is permanently
# skipped per Min-Yi's decision on 2026-09-12 ("Forget 28 permanently and go
# with 36-42 please") -- see script-and-caption.md. carousel-post-8 opens at 43.
#
# Takeaways are each lesson's `field` line, verbatim, from content/lessons-3.json.
# Footers carry that lesson's `rules` array unchanged -- slide 8 therefore
# carries 13.7 even though reel-42 itself does not card it, because a recap
# footer cites the lesson, not the reel.
recaps = [
    (36, "Continuation: when the disc is already in the air",
     "Make your call, then finish the play as if you hadn't. Stopping to argue mid-flight is how teams lose discs.",
     ["16.2", "16.2.3", "16.2.4.1", "16.2.4.2", "16.2.4.2.1"]),
    (37, '"It didn\'t affect the play"',
     '"Did that affect it?" — "No, play on." That exchange should be the most common conversation you have on the field.',
     ["16.3", "16.3.1", "16.3.2"]),
    (38, "The check: restarting play",
     "Actually look around before you check it in. Checking in while your own team is still jogging back costs you the disc.",
     ["10.6.1", "10.6.1.1", "10.6.1.2", "10.6.2", "10.4"]),
    (39, "What the stall count restarts at",
     '"Maximum n" means: the last number said, plus one — or n, whichever is lower. It never jumps you forward.',
     ["9.5.1", "9.5.2", "9.5.3", "9.5.5", "9.6.1"]),
    (40, "Picks",
     "The stall count after a pick restarts at maximum six, so the offence is barely affected. Call it when it genuinely cost you.",
     ["18.3.1", "18.3.1.1", "18.3.2", "18.3.3"]),
    (41, "Indirect fouls",
     "Most off-disc contact resolves itself. Call it when it stopped you getting somewhere you were going.",
     ["17.8.1", "17.8.1.1", "17.8.2"]),
    (42, "Where you pick the disc up after a turnover",
     "If two of you disagree about the spot, the rule is to use the midpoint between your two proposals. No argument needed.",
     ["13.7", "13.9", "13.10", "13.8", "8.5.4"]),
]

SLUGS = {36: "continuation", 37: "didnt_affect", 38: "the_check",
         39: "stall_restart", 40: "picks", 41: "indirect_fouls",
         42: "where_to_pick_up"}

slides = {}
slides["01_cover"] = cover_slide()
slide_no = 2
for lesson_no, title, takeaway, rules in recaps:
    slides[f"{slide_no:02d}_lesson{lesson_no}_{SLUGS[lesson_no]}"] = rule_slide(
        slide_no, f"LESSON {lesson_no}", title, takeaway, rules)
    slide_no += 1
slides[f"{slide_no:02d}_closing"] = closing_slide()

import os, sys
outdir = sys.argv[1] if len(sys.argv) > 1 else "."
os.makedirs(outdir, exist_ok=True)
for name, svg in slides.items():
    with open(f"{outdir}/{name}.svg", "w", encoding="utf-8") as f:
        f.write(svg)
print("done", len(slides), list(slides.keys()))
