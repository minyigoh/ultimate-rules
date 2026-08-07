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

TOTAL = 17

CHAPTER = {
    "1": "Spirit of the Game",
    "2": "Playing Field",
    "4": "Point, Goal and Game",
    "9": "Stall Count",
    "12": "Receivers and Positioning",
    "13": "Turnovers",
    "14": "Scoring",
    "15": "Calling Fouls, Infractions and Violations",
    "18": "Infractions and Violations",
}

RULE_TEXT = {
    "2.1": "The playing field is a rectangular area with dimensions and zones as shown on Figure 1, and should be essentially flat, free of obstructions and afford reasonable player safety.",
    "2.3": "The perimeter lines are not part of the playing field.",
    "2.4": "The goal lines are the lines that separate the central zone from the end zones and are part of the central zone.",
    "2.5": "The brick marks are the intersection of two (2) crossed one (1) metre lines in the central zone, located a distance equal to the length of the end zone away from each goal line, midway between the sidelines.",
    "4.1": "A game consists of a number of points. Each point ends with the scoring of a goal.",
    "4.2": "A game is finished and won by the first team to score fifteen (15) goals.",
    "14.1": "A goal is scored if an in-bounds player catches a legal pass and all their ground contact is entirely within the attacking end zone, and they establish and maintain possession.",
    "18.2.2": "The thrower may move in any direction (pivot) only by establishing and maintaining a pivot point until releasing a pass.",
    "9.1": "The marker administers a stall count on the thrower by announcing “Stalling” and then counting from one (1) to ten (10), at least one second apart.",
    "13.2.2": "A “stall-out” occurs when the thrower has not released the pass before the marker first starts to say the word “ten” in the stall count.",
    "13.1": "A turnover occurs when the disc touches the ground while not in an offensive player’s possession, a defender intercepts a pass, or the disc becomes out-of-bounds.",
    "12.6": "All players must attempt to avoid initiating contact with other players — there is no situation where a player may justify initiating contact.",
    "12.6.1": "“Making a play for the disc” is not a valid excuse for initiating contact with other players.",
    "12.8": "Minor contact may occur as players move towards a single point simultaneously. It should be minimized but is not considered a foul.",
    "1.1": "Ultimate is a non-contact, self-officiated sport. All players are responsible for administering and adhering to the rules.",
    "15.10": "If the player against whom the call was made disagrees, or thinks it is incorrect, they may call “Contest”.",
    "13.3": "If a player determines a turnover occurred, they must call it immediately. If contested, and players can’t agree, the disc returns to the last non-disputed thrower.",
}

def rule_chapter(rule_no):
    return CHAPTER[rule_no.split(".")[0]]

def cover_slide():
    body = [header(1, TOTAL)]
    kicker = tracked("NEVER PLAYED BEFORE")
    body.append(bold(MARGIN, 470, kicker, 32, ORANGE, sw=1.4))
    y = 600
    for line in ["The whole sport", "in 60 seconds"]:
        body.append(bold(MARGIN, y, line, 96, CREAM, sw=3.2))
        y += 108
    y += 40
    sub = "Six things. Read these and you can walk onto a pitch tonight without being lost."
    for line in wrap_lines(sub, 36):
        body.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.75))
        y += 48
    body.append(bold(MARGIN, H-140, "SWIPE  →", 34, ORANGE, sw=1.6))
    return base("\n".join(body))

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

def rule_detail_slide(no, rules):
    b = [header(no, TOTAL)]
    y = 280
    for rule_no in rules:
        chap = rule_chapter(rule_no)
        kicker = f"RULE {rule_no}  ·  {chap.upper()}"
        for line in wrap_lines(kicker, 22, ratio=0.5):
            b.append(bold(MARGIN, y, line, 22, ORANGE, sw=1.0))
            y += 32
        y += 42
        for line in wrap_lines(RULE_TEXT[rule_no], 38, ratio=0.55):
            b.append(reg(MARGIN, y, line, 38, CREAM, opacity=0.92))
            y += 50
        y += 56
    return base("\n".join(b))

def field_diagram(x0, y0, w, avail_h):
    # WFDF field: 100m long x 37m wide, 18m end zones each end (64m central
    # zone), brick marks 18m in from each goal line, on the central zone's
    # midline. Height-constrained so it stays legible at diagram scale.
    FIELD_L, FIELD_W = 100, 37
    scale = avail_h / FIELD_W
    fw = FIELD_L * scale
    fx0 = x0 + (w - fw) / 2
    fy0 = y0
    fy1 = y0 + avail_h
    mid_y = (fy0 + fy1) / 2
    goal_a, goal_b = fx0 + 18*scale, fx0 + 82*scale
    brick_a, brick_b = fx0 + 36*scale, fx0 + 64*scale

    parts = []
    parts.append(f'<rect x="{fx0:.1f}" y="{fy0:.1f}" width="{fw:.1f}" height="{avail_h:.1f}" rx="4" '
                 f'fill="#17211B" stroke="{CREAM}" stroke-width="2" opacity="0.95"/>')
    for gx in (goal_a, goal_b):
        parts.append(f'<line x1="{gx:.1f}" y1="{fy0:.1f}" x2="{gx:.1f}" y2="{fy1:.1f}" stroke="{ORANGE}" stroke-width="4"/>')
    for bx in (brick_a, brick_b):
        s = 8
        parts.append(f'<line x1="{bx-s:.1f}" y1="{mid_y:.1f}" x2="{bx+s:.1f}" y2="{mid_y:.1f}" stroke="{ORANGE}" stroke-width="3"/>')
        parts.append(f'<line x1="{bx:.1f}" y1="{mid_y-s:.1f}" x2="{bx:.1f}" y2="{mid_y+s:.1f}" stroke="{ORANGE}" stroke-width="3"/>')
        parts.append(reg(bx, mid_y-18, "BRICK", 14, ORANGE, anchor="middle", opacity=0.8))
    ez_l_cx, ez_r_cx = (fx0 + goal_a)/2, (fx0+fw + goal_b)/2
    parts.append(reg(ez_l_cx, mid_y+5, "END", 15, CREAM, anchor="middle", opacity=0.55))
    parts.append(reg(ez_l_cx, mid_y+24, "ZONE", 15, CREAM, anchor="middle", opacity=0.55))
    parts.append(reg(ez_r_cx, mid_y+5, "END", 15, CREAM, anchor="middle", opacity=0.55))
    parts.append(reg(ez_r_cx, mid_y+24, "ZONE", 15, CREAM, anchor="middle", opacity=0.55))
    dim_y = fy1 + 34
    parts.append(reg((fx0+goal_a)/2, dim_y, "18 m", 20, CREAM, anchor="middle", opacity=0.6))
    parts.append(reg((goal_a+goal_b)/2, dim_y, "64 m central zone", 20, CREAM, anchor="middle", opacity=0.6))
    parts.append(reg((goal_b+fx0+fw)/2, dim_y, "18 m", 20, CREAM, anchor="middle", opacity=0.6))
    return "\n".join(parts)

def field_slide(no):
    b = [header(no, TOTAL)]
    b.append(bold(MARGIN, 510, tracked("THE FIELD"), 34, ORANGE, sw=1.6))
    y = 610
    for line in wrap_lines("100 m long, 37 m wide", 66, ratio=0.56):
        b.append(bold(MARGIN, y, line, 66, CREAM, sw=3.0))
        y += 78
    y += 44
    diagram_h = 170
    b.append(field_diagram(MARGIN, y, AVAIL_W, diagram_h))
    y += diagram_h + 118
    caption = "The sideline isn't part of the field — step on it and you're out. Goal lines belong to the central zone."
    for line in wrap_lines(caption, 32, ratio=0.54):
        b.append(reg(MARGIN, y, line, 32, CREAM, opacity=0.75))
        y += 44
    cy = H-200
    b.append(bold(MARGIN, cy, "WFDF Rules of Ultimate 2025–2028", 26, ORANGE, sw=1.4))
    b.append(bold(MARGIN, cy+42, "2.1  ·  2.3  ·  2.4  ·  2.5", 26, CREAM, sw=1.4))
    return base("\n".join(b))

def closing_slide():
    b = [header(TOTAL, TOTAL)]
    y = 520
    for line in ["That's the whole", "sport."]:
        b.append(bold(MARGIN, y, line, 90, CREAM, sw=3.2))
        y += 102
    y += 40
    sub = "One rule a day, five minutes at a time — the full breakdown is linked in bio."
    for line in wrap_lines(sub, 36):
        b.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.8))
        y += 48
    y += 40
    b.append(bold(MARGIN, y, "Follow @learn.ultimatefrisbee", 38, ORANGE, sw=1.8))
    return base("\n".join(b))

topics = [
    ("THE POINT", "Catch it in the end zone",
     "Seven a side. You score by catching a pass inside the end zone you're attacking. First to 15 wins, half time at 8.",
     ["4.1", "4.2", "14.1"]),
    ("THE CATCH", "You can't run with it",
     "Once you catch the disc you stop and plant a pivot foot. The other foot goes anywhere. Throw in any direction.",
     ["18.2.2"]),
    ("THE CLOCK", "Ten seconds to throw",
     "The defender guarding you counts out loud, one number per second. If they start saying “ten” before you release, it’s a turnover.",
     ["9.1", "13.2.2"]),
    ("THE FLIP", "Drop it and it's theirs",
     "Incomplete pass, interception, or out-of-bounds — possession flips instantly, right where it happened. No whistle, no reset.",
     ["13.1"]),
    ("THE CONTACT", "It's a non-contact sport",
     "You must try to avoid initiating contact, and “I was going for the disc” is explicitly not an excuse. Minor brushes aren’t fouls.",
     ["12.6", "12.6.1", "12.8"]),
    ("THE DIFFERENCE", "Nobody is refereeing",
     "Players make every call themselves, including against themselves. Disagree? Say “contest,” talk it out, and the disc goes back to the thrower.",
     ["1.1", "15.10", "13.3"]),
]

slides = {}
slide_no = 1
slides[f"{slide_no:02d}_cover"] = cover_slide()
slide_no += 1

slides[f"{slide_no:02d}_the_field"] = field_slide(slide_no)
slide_no += 1

slides[f"{slide_no:02d}_the_field_rules_1"] = rule_detail_slide(slide_no, ["2.1", "2.3"])
slide_no += 1
slides[f"{slide_no:02d}_the_field_rules_2"] = rule_detail_slide(slide_no, ["2.4", "2.5"])
slide_no += 1

for idx, (kicker, headline, body_text, rules) in enumerate(topics, start=1):
    slug = kicker.lower().replace(" ", "_").replace("the_", "the_")
    slides[f"{slide_no:02d}_{slug}"] = rule_slide(slide_no, kicker, headline, body_text, rules, index=idx)
    slide_no += 1
    slides[f"{slide_no:02d}_{slug}_rules"] = rule_detail_slide(slide_no, rules)
    slide_no += 1

slides[f"{slide_no:02d}_closing"] = closing_slide()

outdir = "/tmp/gen"
for name, svg in slides.items():
    with open(f"{outdir}/{name}.svg", "w") as f:
        f.write(svg)
print("done", len(slides), list(slides.keys()))
