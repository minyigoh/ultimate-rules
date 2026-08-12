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
    for line in ["Seven lessons,", "one week"]:
        body.append(bold(MARGIN, y, line, 96, CREAM, sw=3.2))
        y += 108
    y += 40
    sub = "Everything the daily reels covered, 6\u201312 August."
    for line in wrap_lines(sub, 36):
        body.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.75))
        y += 48
    body.append(bold(MARGIN, H-140, "SWIPE  \u2192", 34, ORANGE, sw=1.6))
    return base("\n".join(body))

def closing_slide():
    b = [header(TOTAL, TOTAL)]
    y = 520
    for line in ["That's the first", "seven."]:
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

# ---- the week being recapped: lessons 1-7, posted 2026-08-06 to 2026-08-12 ----
# Takeaways condensed from each lesson's `field` line in content/lessons-1.json.
# Recap slides cite rule numbers only -- no rule text, by design (see
# content/CAROUSEL_TEMPLATE.md).
recaps = [
    (1, "The whole game in one paragraph",
     "New players freeze after catching. Don't \u2014 you have ten seconds, which is longer than it feels. Look up first.",
     ["4.1", "14.1", "18.2.2", "13.1"]),
    (2, "You can't run with the disc \u2014 but you can pivot",
     "Pick your pivot foot as you catch, then plant it. Deciding late is what causes travels.",
     ["18.2.2", "18.2.3", "18.2.3.1"]),
    (3, "Ten seconds: the stall count",
     "Count along in your head. If theirs is running faster, \u201cfast count\u201d is a normal, non-confrontational call.",
     ["9.1", "9.3", "9.4", "13.2.2"]),
    (4, "Five ways to lose the disc",
     "The moment a disc hits the ground, sprint to guard someone. Points are lost in the two seconds after a turnover.",
     ["13.1", "13.2"]),
    (5, "There are no referees. You are the referee.",
     "Only the player who was fouled can call the foul \u2014 not a team-mate on their behalf.",
     ["1.1", "1.2", "15.4", "13.3"]),
    (6, "The field, and why the lines are out",
     "Catching near the sideline, look down. Toeing the line is out, not in \u2014 the opposite of most sports.",
     ["2.1", "2.2", "2.3", "2.4", "11.1"]),
    (7, "The pull: how every point starts",
     "Raise your hand clearly and early. Half of all pull confusion is a team that never actually signalled.",
     ["7.1", "7.2", "7.3", "7.4", "7.6"]),
]

SLUGS = {1: "whole_game", 2: "pivot", 3: "stall_count", 4: "turnovers",
         5: "self_officiating", 6: "the_field", 7: "the_pull"}

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
