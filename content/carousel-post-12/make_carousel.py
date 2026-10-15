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

# Seven: a short block of FIVE lessons plus cover and closing. The block is
# short because the curriculum ends at lesson 75 — 71-75 is everything left,
# not a window that happened to come up short. Step 1's rule for a short block
# applies ("recap what is actually there and say so on the cover"), the same
# shape carousel-post-6 used at seven. The header's `n / TOTAL` counter, the
# filenames and the closing slide number all key off this constant.
TOTAL = 7

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
    # Measured at the draft gate on 2026-10-15: 777.2 and 741.7 of the 900px
    # column at 96px, 122.8px of slack on the wider line. "Week eleven: the
    # end of the course" was the other candidate and the layout check rejected
    # it, not an editorial judgement — its second line measures 800.1, and the
    # carousel-post-10 note is explicit that a cover close to the edge is one
    # desk edit from overflowing. Re-measure if the title is edited at the desk.
    for line in ["Week eleven: the", "last five lessons"]:
        body.append(bold(MARGIN, y, line, 96, CREAM, sw=3.2))
        y += 108
    y += 40
    sub = "This week's five lessons — the last five in the course, from the reels of 15–19 October."
    for line in wrap_lines(sub, 36):
        body.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.75))
        y += 48
    body.append(bold(MARGIN, H-140, "SWIPE  →", 34, ORANGE, sw=1.6))
    return base("\n".join(body))

def closing_slide():
    b = [header(TOTAL, TOTAL)]
    y = 520
    # Seventy-five, the last lesson IN THE BLOCK and the last in the course.
    # Lesson 75 posts 2026-10-19, three days before this deck (2026-10-22), so
    # the count is exact on the day.
    for line in ["That's seventy-five", "of seventy-five."]:
        b.append(bold(MARGIN, y, line, 90, CREAM, sw=3.2))
        y += 102
    y += 40
    # Deliberately carries no cadence promise and no "more next Thursday".
    # Every earlier closing slide said "one lesson a day"; with the curriculum
    # finished and nothing decided to follow it, that line would promise
    # something this account cannot currently keep. reel-75's note raised the
    # same question about g_closing() in the reel path, which is a shared
    # constant and has NOT been touched. This is a per-deck string, so it is
    # written honestly here; the shared one stays a desk decision.
    sub = "All seventy-five lessons are linked in the bio, start to finish."
    for line in wrap_lines(sub, 36):
        b.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.8))
        y += 48
    y += 40
    b.append(bold(MARGIN, y, "Follow @learn.ultimatefrisbee", 38, ORANGE, sw=1.8))
    return base("\n".join(b))

# ---- the week being recapped: lessons 71-75 ----
# The final block. It opens at 71, exactly where carousel-post-11 stopped, and
# closes at 75 because 75 is the last lesson in lessons-1/-2/-3. Five, not
# seven, and that is the whole remainder rather than a truncated window — so
# the cover says "five lessons" per Step 1's short-block rule. There is no
# carousel-post-13 block to open: the curriculum is exhausted and what follows
# is a desk decision.
#
# Lesson 28 ("Receiving fouls") is permanently skipped per Min-Yi's decision on
# 2026-09-12 and does not appear here. This being the last deck, it stays
# skipped for good, which is what that decision chose.
#
# Takeaways are each lesson's `field` line, verbatim, from content/lessons-3.json.
# Footers carry that lesson's `rules` array unchanged, in array order — lesson
# 75's array reads ["1.2.1", "1.2"] and the footer keeps that order. (reel-75
# carded the two in rulebook order instead, because there the cards have to be
# *read* in an order that makes sense; a footer is a list of numbers to look up
# and the recap convention is the array untouched.)
# Both were generated by reading the JSON at draft time, not typed, and
# re-verified byte-for-byte.
recaps = [
    (71, 'Mixed division basics',
     'Most social mixed leagues run their own variant. Ask before the first pull rather than mid-point.',
     ['5.4', '6.4']),
    (72, 'Fixing your shoelace',
     "Double-knot before the game. It's the whole solution to this rule.",
     ['10.3', '19.3', '3.4']),
    (73, 'Use your hands',
     "Learn three to start: travel, foul, and stall count. They'll cover most of what you need to signal.",
     ['15.13', '15.7', '1.3.7']),
    (74, 'What clearly breaks Spirit',
     "Highly competitive play is explicitly encouraged. Spirit isn't about playing softly — it's about how you treat people while playing hard.",
     ['1.6', '1.6.5', '1.6.7', '1.7.2', '1.7.4', '1.4']),
    (75, "When the normal remedy isn't enough",
     'This is rare and deliberately so. It exists for the cases where applying the normal rule would reward cheating.',
     ['1.2.1', '1.2']),
]

SLUGS = {71: "mixed_division", 72: "shoelace_fix",
         73: "hand_signals", 74: "spirit_violations",
         75: "egregious_remedy"}

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
