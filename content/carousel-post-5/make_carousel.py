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

# Eight, not nine. This is the first recap that isn't a full block of seven --
# lesson 28's reel had not posted, so the block is 22-27 and slide 8 is the
# closing. The header's `n / TOTAL` counter and the closing slide number both
# key off this constant.
TOTAL = 8

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
    # Back to the standard 96px: "Week four: contact," measures 889 of the
    # 900px column, so unlike carousel-post-4 this cover does not need the
    # type shrunk. No room to lengthen it in review, though.
    for line in ["Week four: contact,", "and who decides"]:
        body.append(bold(MARGIN, y, line, 96, CREAM, sw=3.2))
        y += 108
    y += 40
    # The cover states the short block on its face -- six, not seven -- so a
    # reader who counts is not left wondering. Per the recap rule in
    # content/DAILY_RENDER_TASK.md Step 1.
    sub = "This week's six lessons — everything the daily reels covered, 27 August – 1 September."
    for line in wrap_lines(sub, 36):
        body.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.75))
        y += 48
    body.append(bold(MARGIN, H-140, "SWIPE  →", 34, ORANGE, sw=1.6))
    return base("\n".join(body))

def closing_slide():
    b = [header(TOTAL, TOTAL)]
    y = 520
    # Twenty-seven, not twenty-eight: a recap consumes no lesson number, and
    # lesson 28's reel has not posted. "More next Thursday" rather than "Seven
    # more" -- next week's block is 28-34 and the number is not promised in
    # advance.
    for line in ["That's twenty-seven", "of seventy-five."]:
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

# ---- the week being recapped: lessons 22-27 ----
# The fourth block, following carousel-post-4's 15-21, carousel-post-3's 8-14
# and carousel-post-2's 1-7. The window is lesson numbers, not a date range
# (Min-Yi, 2026-08-17). Six rather than seven because lesson 28's reel was
# rejected on the content track and has not posted -- a lesson is only
# eligible once its reel has actually gone out. Lesson 28 is not lost: it
# opens carousel-post-6, whose block is 28-34.
#
# Takeaways are each lesson's `field` line from content/lessons-2.json,
# verbatim. Footers carry the rule numbers that lesson's reel actually carded,
# with heading stems (1.3, 1.5) dropped -- same trim as carousel-post-4.
# Recap slides cite rule numbers only, never rule text, by design (see
# content/CAROUSEL_TEMPLATE.md).
recaps = [
    (22, "Who is allowed to make which call",
     "Watching from the sideline? You have no calls. You can offer perspective if asked, and that's genuinely valuable.",
     ["15.4", "15.5", "15.5.1", "15.6", "1.10"]),
    (23, '"Contest" — disagreeing properly',
     'Be ready to say the objective evidence for your view in one sentence: "I saw your pivot foot lift while the disc was still in your hand."',
     ["15.10", "13.3", "1.3.4"]),
    (24, "Changing your mind is a rule, not a weakness",
     '"Retracted, my bad" takes two seconds and resolves more disputes than any amount of arguing.',
     ["15.11", "1.5.1"]),
    (25, "The duty to avoid contact",
     "This is what makes a non-contact sport playable at speed. Bid hard, but into space you're sure is empty.",
     ["12.6", "12.6.1", "12.6.2", "12.6.3"]),
    (26, "Who initiated the contact?",
     'Instead of "you fouled me", try "where were you when I got there?" It\'s the actual question.',
     ["12.7", "12.7.1", "12.7.2", "12.7.3", "12.4"]),
    (27, "Not every touch is a foul",
     "If it didn't change what happened and nobody's hurt, let it go. Consistently over-calling is itself a Spirit breach.",
     ["12.8", "15.1", "1.3.10"]),
]

SLUGS = {22: "who_calls_what", 23: "contest", 24: "retracted",
         25: "avoid_contact", 26: "who_initiated", 27: "not_every_touch"}

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
