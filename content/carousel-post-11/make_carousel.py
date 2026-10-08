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
# carousels 2, 3, 4, 8 and 9. carousel-post-5 was eight and carousel-post-6 was
# seven; both were short blocks. The header's `n / TOTAL` counter, the filenames
# and the closing slide number all key off this constant.
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
    # Measured at the draft gate on 2026-10-08. "Week ten: when the / rules
    # decide it" was the other candidate and was rejected on layout, not
    # editorially: its first line measures 894.4 of the 900px column at 96px,
    # 5.6px of slack, and the carousel-post-10 note is explicit that a cover
    # that close is one desk edit from overflowing. This wording measures
    # 622.4 and 410.6. Re-measure if the title is edited at the desk.
    for line in ["Week ten: the", "fine print"]:
        body.append(bold(MARGIN, y, line, 96, CREAM, sw=3.2))
        y += 108
    y += 40
    sub = "This week's seven lessons — everything the daily reels covered, 8–14 October."
    for line in wrap_lines(sub, 36):
        body.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.75))
        y += 48
    body.append(bold(MARGIN, H-140, "SWIPE  →", 34, ORANGE, sw=1.6))
    return base("\n".join(body))

def closing_slide():
    b = [header(TOTAL, TOTAL)]
    y = 520
    # Seventy, the last lesson IN THE BLOCK. Lesson 70 posts 2026-10-14, the
    # day before this deck (2026-10-15), so the count is exact on the day.
    for line in ["That's seventy", "of seventy-five."]:
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

# ---- the week being recapped: lessons 64-70 ----
# A clean contiguous seven, opening where carousel-post-10 stopped. Lesson 28
# ("Receiving fouls") is permanently skipped per Min-Yi's decision on
# 2026-09-12 and does not appear here or on any later deck.
#
# Takeaways are each lesson's `field` line, verbatim, from content/lessons-3.json.
# Footers carry that lesson's `rules` array unchanged. Both were generated by
# reading the JSON at draft time, not typed, and re-verified byte-for-byte.
recaps = [
    (64, "Three ways to turn it over by yourself",
     "A wobbly throw that comes back to you in the wind is fine if a defender touched it. If nobody did, it's yours and you've lost it.",
     ["13.2.4", "13.2.5", "18.2.4.5"]),
    (65, "No boosting, no props",
     "This includes well-meant helping hands. If you'd lift a team-mate to reach one, don't.",
     ["12.10", "13.2.6", "13.2.7", "13.7.4"]),
    (66, "When play carried on after a turnover nobody noticed",
     "If you think it hit the ground, say so straight away. Waiting to see what happens next makes it much harder to resolve.",
     ["13.12", "13.3", "15.8"]),
    (67, "Claiming space legally",
     "Under a floaty disc, move to where the disc is going, not to where your opponent wants to run.",
     ["12.5", "12.5.1", "12.4", "12.9"]),
    (68, "Contested goals",
     "If it's close, look down at your feet immediately rather than celebrating. You'll be asked, and you should know.",
     ["14.2", "14.4"]),
    (69, "The fine print on stall-outs",
     "A contested stall-out restarts the count at eight, not one. Contesting buys you very little time.",
     ["13.4.1", "13.4.2", "13.4.3", "9.5.3"]),
    (70, "Delay of game",
     "Teams must also prepare for the pull without unreasonable delay. Huddles between points have a natural limit.",
     ["10.5", "8.5.2", "8.5.2.1", "7.1.1"]),
]

SLUGS = {64: "self_turnovers", 65: "no_boosting",
         66: "unnoticed_turnover", 67: "claiming_space",
         68: "contested_goals", 69: "stall_out_detail",
         70: "delay_of_game"}

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
