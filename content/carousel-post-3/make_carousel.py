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

def bold(x, y, text, size, color, anchor="start", sw=2.6):
    return (f'<text x="{x}" y="{y}" font-family="{FONT}" font-weight="bold" font-size="{size}" '
            f'fill="{color}" stroke="{color}" stroke-width="{sw}" stroke-linejoin="round" text-anchor="{anchor}">{esc(text)}</text>')

def reg(x, y, text, size, color, anchor="start", opacity=1):
    return (f'<text x="{x}" y="{y}" font-family="{FONT}" font-weight="normal" font-size="{size}" '
            f'fill="{color}" opacity="{opacity}" text-anchor="{anchor}">{esc(text)}</text>')

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
    y2 = y1 + rect_h
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

TOTAL = 9

def rule_slide(no, kicker, headline, body_text, rules, index=None):
    b = [header(no, TOTAL)]
    kicker_text = (f"#{index}   " + tracked(kicker)) if index else tracked(kicker)
    b.append(bold(MARGIN, 510, kicker_text, 34, ORANGE, sw=1.6))
    y = 610
    for line in wrap_lines(headline, 66, ratio=0.56):
        b.append(bold(MARGIN, y, line, 66, CREAM, sw=3.0))
        y += 78
    y += 46
    for line in wrap_lines(body_text, 36):
        b.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.8))
        y += 50
    cy = H-200
    b.append(bold(MARGIN, cy, "WFDF Rules of Ultimate 2025–2028", 26, ORANGE, sw=1.4))
    numbers_line = "  ·  ".join(rules)
    b.append(bold(MARGIN, cy+42, numbers_line, 26, CREAM, sw=1.4))
    return base("\n".join(b))


def cover_slide():
    body = [header(1, TOTAL)]
    body.append(bold(MARGIN, 470, tracked("THIS WEEK"), 32, ORANGE, sw=1.4))
    y = 600
    for line in ["Week two: seven", "more lessons"]:
        body.append(bold(MARGIN, y, line, 96, CREAM, sw=3.2))
        y += 108
    y += 40
    sub = "Everything the daily reels covered, 13\u201319 August."
    for line in wrap_lines(sub, 36):
        body.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.75))
        y += 48
    body.append(bold(MARGIN, H-140, "SWIPE  \u2192", 34, ORANGE, sw=1.6))
    return base("\n".join(body))

def closing_slide():
    b = [header(TOTAL, TOTAL)]
    y = 520
    for line in ["That's fourteen", "of seventy-five."]:
        b.append(bold(MARGIN, y, line, 90, CREAM, sw=3.2))
        y += 102
    y += 40
    sub = "Seven more next Thursday \u2014 one lesson a day, the full breakdown is linked in bio."
    for line in wrap_lines(sub, 36):
        b.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.8))
        y += 48
    y += 40
    b.append(bold(MARGIN, y, "Follow @learn.ultimatefrisbee", 38, ORANGE, sw=1.8))
    return base("\n".join(b))

# ---- the week being recapped: lessons 8-14, the second contiguous block of ----
# seven, following carousel-post-2's lessons 1-7. Reels posted 2026-08-13 to
# 2026-08-19. The window is lesson numbers, not a date range (Min-Yi, 2026-08-17).
# Takeaways condensed from each lesson's `field` line in content/lessons-1.json,
# with slide 7 drawn from reel 13's example beat instead -- see caption.md notes.
# Recap slides cite rule numbers only -- no rule text, by design (see
# content/CAROUSEL_TEMPLATE.md).
recaps = [
    (8, "A catch and possession are not the same thing",
     "On a diving catch, the priority is squeezing through the landing. The catch isn\u2019t finished until you\u2019ve stopped moving.",
     ["12.1", "12.1.1", "13.1.1.1"]),
    (9, "Where your feet have to be",
     "Sprinting for a disc near the sideline? Catch it before your foot lands, not after.",
     ["11.3", "11.3.1", "11.3.2", "11.4"]),
    (10, "You\u2019re allowed to leave the field",
     "Chase discs that look like they\u2019re drifting out. Curving them back in is a real throw, not an accident.",
     ["11.6", "11.7", "11.2"]),
    (11, "Caught at the same time? Offence keeps it.",
     "If you both come down with it, the honest question is \u201cdid you have it first?\u201d \u2014 not \u201cwhose is it?\u201d",
     ["12.3"]),
    (12, "What actually counts as a goal",
     "Don\u2019t celebrate until you\u2019ve stopped moving with the disc still in your hands. That\u2019s when the goal is scored.",
     ["14.1", "14.1.1", "14.1.2", "14.4"]),
    (13, "Caught it past the end zone? Walk it back.",
     "Not a turnover and not a do-over \u2014 walk to the nearest point on the goal line and set your pivot there.",
     ["14.3", "11.3.2.1"]),
    (14, "Slowing down after the catch",
     "Decelerate in a straight line. Drifting sideways as you slow is the travel most beginners commit without realising.",
     ["18.2.1", "18.2.4.1"]),
]

SLUGS = {8: "catch_possession", 9: "feet", 10: "leaving_the_field",
         11: "simultaneous_catch", 12: "goals", 13: "past_the_end_zone",
         14: "slowing_down"}

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
