"""
Learn Ultimate Frisbee — "Hook post" format, sample 1 (v2).
Topic: WFDF 12.6.1 — "Making a play for the disc" is not a valid excuse.

Built on content/carousel-post-1/make_carousel.py: identical palette, font,
margins, header row, two-ellipse logo mark, citation footer, and
carousel-post-3's closing_slide() layout verbatim.

v2 changes (Min-Yi, 2026-08-20):
  - No CC BY 4.0 reference anywhere. Attribution is the rules edition only.
  - Closing CTA matches the canonical closing slide: no logo mark, handle is
    @learn.ultimatefrisbee.
  - Diagrams dropped the legend column. Every mark is now labelled in plain
    English on the plate itself — "PLAYER A / GOT THERE FIRST", "CONTACT /
    B INITIATED IT" — so nothing needs a key to decode.

One deliberate deviation from the template helpers: text elements carry
xml:space="preserve" so the letter-spaced kickers keep their word gaps
(XML collapses runs of whitespace otherwise).
"""
import textwrap, math, os

# ---------------------------------------------------------------- template
BG = "#0F1712"
ORANGE = "#E24A12"
CREAM = "#F1F3EE"
FONT = "Liberation Sans"

W, H = 1080, 1350
MARGIN = 90
AVAIL_W = W - 2 * MARGIN
TOTAL = 5


def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
             .replace('"', "&quot;"))


def bold(x, y, text, size, color, anchor="start", sw=2.6, opacity=1):
    return (f'<text xml:space="preserve" x="{x}" y="{y}" font-family="{FONT}" font-weight="bold" '
            f'font-size="{size}" fill="{color}" fill-opacity="{opacity}" stroke="{color}" '
            f'stroke-opacity="{opacity}" stroke-width="{sw}" stroke-linejoin="round" '
            f'text-anchor="{anchor}">{esc(text)}</text>')


def reg(x, y, text, size, color, anchor="start", opacity=1):
    return (f'<text xml:space="preserve" x="{x}" y="{y}" font-family="{FONT}" font-weight="normal" '
            f'font-size="{size}" fill="{color}" opacity="{opacity}" '
            f'text-anchor="{anchor}">{esc(text)}</text>')


def tracked(s, gap=" "):
    return gap.join(list(s))


def wrap_lines(text, font_size, avail=AVAIL_W, ratio=0.54):
    max_chars = max(6, int(avail / (ratio * font_size)))
    return textwrap.wrap(text, max_chars, break_long_words=False)


def mini_icon(cx, cy, scale=1.0, color=ORANGE):
    rx1, ry1 = 34 * scale, 17 * scale
    rx2, ry2 = 19 * scale, 9 * scale
    cy2 = cy - 3 * scale
    return (f'<ellipse cx="{cx}" cy="{cy}" rx="{rx1:.1f}" ry="{ry1:.1f}" fill="none" stroke="{color}" stroke-width="{4*scale:.1f}"/>'
            f'<ellipse cx="{cx}" cy="{cy2:.1f}" rx="{rx2:.1f}" ry="{ry2:.1f}" fill="none" stroke="{color}" stroke-width="{2.6*scale:.1f}" opacity="0.55"/>')


def pillar_tag(label="RULES"):
    rect_w, rect_h = len(label) * 15 + 4 + 40, 46
    x1, y1 = (W - MARGIN) - rect_w, 46
    return (f'<rect x="{x1}" y="{y1}" width="{rect_w}" height="{rect_h}" rx="23" fill="none" stroke="{ORANGE}" stroke-width="2.5"/>'
            + bold(x1 + rect_w / 2, y1 + rect_h / 2 + 8, label, 22, ORANGE, anchor="middle", sw=1.0))


def header(slide_no, total=TOTAL, pillar="RULES"):
    return "\n".join([
        pillar_tag(pillar),
        mini_icon(MARGIN + 34, 150, scale=1.0),
        bold(MARGIN + 80, 162, "Learn Ultimate Frisbee", 24, CREAM, sw=1.0),
        reg(W - MARGIN, 162, f"{slide_no} / {total}", 24, CREAM, anchor="end", opacity=0.5),
        f'<line x1="{MARGIN}" y1="208" x2="{W-MARGIN}" y2="208" stroke="{CREAM}" stroke-width="2" opacity="0.15"/>',
    ])


def citation(rules, y=H - 200):
    return "\n".join([
        bold(MARGIN, y, "WFDF Rules of Ultimate 2025–2028", 26, ORANGE, sw=1.4),
        bold(MARGIN, y + 42, "  ·  ".join(rules), 26, CREAM, sw=1.4),
    ])


def base(body):
    return f'''<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
<rect width="{W}" height="{H}" fill="{BG}"/>
{body}
</svg>'''


# ------------------------------------------------------- plate primitives
def lattice(x0, y0, x1, y1, step=34, r=1.4, opacity=0.10, color=CREAM):
    out = []
    y = y0
    while y <= y1 + 0.1:
        x = x0
        while x <= x1 + 0.1:
            out.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{r}" fill="{color}" opacity="{opacity}"/>')
            x += step
        y += step
    return "".join(out)


def measure_rule(x0, x1, y, step=34, minor=6, major=13, every=5, opacity=0.26):
    out = [f'<line x1="{x0}" y1="{y}" x2="{x1}" y2="{y}" stroke="{CREAM}" stroke-width="1.6" opacity="{opacity*0.7:.2f}"/>']
    i, x = 0, x0
    while x <= x1 + 0.1:
        ln = major if i % every == 0 else minor
        out.append(f'<line x1="{x:.0f}" y1="{y}" x2="{x:.0f}" y2="{y-ln}" stroke="{CREAM}" '
                   f'stroke-width="1.6" opacity="{opacity}"/>')
        x += step
        i += 1
    return "".join(out)


def player(cx, cy, letter, color, title, sub, tx, ty, r=19, fs=22, anchor="start"):
    """A player marker plus its plain-English name, drawn together so the mark
    is never something the reader has to look up."""
    return "\n".join([
        f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r}" fill="{BG}" stroke="{color}" stroke-width="2.8"/>',
        bold(cx, cy + fs * 0.35, letter, fs, color, anchor="middle", sw=0.8),
        bold(tx, ty, title, 24, CREAM, sw=1.1, anchor=anchor),
        reg(tx, ty + 30, sub, 20, CREAM, opacity=0.6, anchor=anchor),
    ])


def burst(cx, cy, radii, color=ORANGE, ops=(0.9, 0.45, 0.2), sws=(2.6, 2.0, 1.5)):
    return "".join(
        f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r:.1f}" fill="none" stroke="{color}" '
        f'stroke-width="{sw}" opacity="{op}"/>'
        for r, op, sw in zip(radii, ops, sws))


def ground(x0, x1, y, color=CREAM, opacity=0.42, hatch=22):
    """A ground plane seen edge-on: the line, plus section hatching beneath it."""
    out = [f'<line x1="{x0}" y1="{y}" x2="{x1}" y2="{y}" stroke="{color}" stroke-width="2" opacity="{opacity}"/>']
    x = x0 + 10
    while x <= x1:
        out.append(f'<line x1="{x:.0f}" y1="{y}" x2="{x-7:.0f}" y2="{y+8}" stroke="{color}" '
                   f'stroke-width="1.4" opacity="{opacity*0.45:.2f}"/>')
        x += hatch
    return "".join(out)


def qpath(p0, c, p1, color, sw=3.0, dash=None, opacity=1.0):
    d = f'M {p0[0]:.1f} {p0[1]:.1f} Q {c[0]:.1f} {c[1]:.1f} {p1[0]:.1f} {p1[1]:.1f}'
    da = f' stroke-dasharray="{dash}" stroke-linecap="round"' if dash else ''
    return f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{sw}" opacity="{opacity}"{da}/>'


def arrow_head(x, y, angle, color, size=15, sw=3.0, opacity=1.0):
    a1, a2 = angle + math.radians(150), angle - math.radians(150)
    return (f'<path d="M {x + size*math.cos(a1):.1f} {y + size*math.sin(a1):.1f} '
            f'L {x:.1f} {y:.1f} L {x + size*math.cos(a2):.1f} {y + size*math.sin(a2):.1f}" '
            f'fill="none" stroke="{color}" stroke-width="{sw}" stroke-linecap="round" '
            f'stroke-linejoin="round" opacity="{opacity}"/>')


def qangle(p0, c, p1, t):
    mt = 1 - t
    return math.atan2(2 * mt * (c[1] - p0[1]) + 2 * t * (p1[1] - c[1]),
                      2 * mt * (c[0] - p0[0]) + 2 * t * (p1[0] - c[0]))


def vector(p0, c, p1, color, sw=3.0, dash="1 11", head=15, opacity=1.0):
    return (qpath(p0, c, p1, color, sw=sw, dash=dash, opacity=opacity)
            + arrow_head(p1[0], p1[1], qangle(p0, c, p1, 1.0), color, size=head, sw=sw, opacity=opacity))


def hair(x1, y1, x2, y2, opacity=0.15, sw=2, color=CREAM, dash=None):
    da = f' stroke-dasharray="{dash}"' if dash else ''
    return (f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{color}" '
            f'stroke-width="{sw}" opacity="{opacity}"{da}/>')


# ------------------------------------------------------------ SLIDE 1 — HOOK
def contact_plate():
    """One moment, fully labelled. No key, no decoding."""
    b = []
    PX0, PX1, PY0, PY1 = MARGIN, W - MARGIN, 566, 980

    b.append(lattice(PX0 + 6, PY0 + 8, PX1, PY1 - 20, step=34))
    b.append(measure_rule(PX0 + 6, PX1, PY1 + 6))
    b.append(reg(PX0 + 4, PY0 + 40, "VIEW FROM ABOVE", 19, CREAM, opacity=0.5))

    AX, AY = 750, 724            # player A, already standing there
    BX, BY = 300, 898            # player B, arriving
    CX, CY = 690, 776            # where they make contact
    DX, DY = 930, 596            # the disc both are playing

    # the spot A had already taken
    b.append(f'<circle cx="{AX}" cy="{AY}" r="40" fill="none" stroke="{CREAM}" '
             f'stroke-width="1.8" stroke-dasharray="1 8" stroke-linecap="round" opacity="0.35"/>')

    # B's run in, stopping short of the contact
    b.append(vector((BX, BY), (466, 936), (652, 800), ORANGE, sw=3.2, dash="1 11", head=15))

    # A is playing the disc too
    b.append(hair(792, 694, 888, 626, opacity=0.3, sw=2, dash="1 9"))
    b.append(mini_icon(DX, DY, scale=0.9, color=CREAM))
    b.append(reg(880, 602, "THE DISC", 20, CREAM, anchor="end", opacity=0.6))

    # the contact itself, named
    b.append(burst(CX, CY, (16, 26, 36)))
    b.append(hair(646, 692, 668, 748, opacity=0.55, sw=2, color=ORANGE))
    b.append(reg(636, 656, "B INITIATED IT — 12.7.1", 20, ORANGE, anchor="end", opacity=0.75))
    b.append(bold(636, 686, "CONTACT", 22, ORANGE, anchor="end", sw=1.0))

    b.append(player(AX, AY, "A", CREAM, "PLAYER A", "GOT THERE FIRST", 810, 784))
    b.append(player(BX, BY, "B", ORANGE, "PLAYER B", "ARRIVED AFTER", 256, 890, anchor="end"))
    return "\n".join(b)


def slide_hook():
    b = [header(1)]
    b.append(bold(MARGIN, 304, tracked("THE EXCUSE THAT ISN'T ONE"), 30, ORANGE, sw=1.3))
    y = 406
    for line in ["“Going for the disc”", "is not an excuse."]:
        b.append(bold(MARGIN, y, line, 76, CREAM, sw=3.2))
        y += 88
    b.append(contact_plate())
    b.append(reg(MARGIN, 1052, "The rulebook names that exact sentence — and rules it out.",
                 30, CREAM, opacity=0.72))
    b.append(citation(["12.6", "12.6.1"]))
    return base("\n".join(b))


# ----------------------------------------------------- SLIDE 2 — THE RECEIPTS
RULES = {
    "12.6": ("Receivers and Positioning",
             "All players must attempt to avoid initiating contact with other players, and there "
             "is no situation where a player may justify initiating contact."),
    "12.6.1": ("Receivers and Positioning",
               "“Making a play for the disc” is not a valid excuse for initiating contact with "
               "other players."),
    "12.8": ("Receivers and Positioning",
             "Some minor contact may occur as two or more players move towards a single point "
             "simultaneously. Minor contact should be minimized but is not considered a foul."),
}


def rule_block(num, y, size=37, lh=49):
    chap, text = RULES[num]
    out = [hair(MARGIN, y - 34, W - MARGIN, y - 34, opacity=0.14, sw=1.6),
           bold(MARGIN, y, f"RULE {num}  ·  {chap.upper()}", 21, ORANGE, sw=0.9)]
    yy = y + 52
    for line in wrap_lines(text, size, ratio=0.55):
        out.append(reg(MARGIN, yy, line, size, CREAM, opacity=0.92))
        yy += lh
    return "\n".join(out), yy - lh


def slide_receipts():
    b = [header(2)]
    b.append(bold(MARGIN, 292, tracked("THE TEXT ITSELF"), 30, ORANGE, sw=1.3))
    y = 380
    for line in ["Not interpretation.", "Not etiquette."]:
        b.append(bold(MARGIN, y, line, 64, CREAM, sw=3.0))
        y += 76
    blk, last = rule_block("12.6", 578)
    b.append(blk)
    blk2, _ = rule_block("12.6.1", last + 118)
    b.append(blk2)
    b.append(citation(["12.6", "12.6.1"]))
    return base("\n".join(b))


# -------------------------------------------------- SLIDE 3 — WHO INITIATED
def case_row(x0, y0, w, h, kind):
    """Same two players and the same marks as slide 1 — only what B did changes."""
    b = [lattice(x0 + 8, y0 + 10, x0 + w - 6, y0 + h - 8, step=28, r=1.2, opacity=0.09)]
    b.append(reg(x0 + 10, y0 + 20, "VIEW FROM THE SIDE" if kind == "leapt" else "VIEW FROM ABOVE",
                 17, CREAM, opacity=0.5))
    ax, ay = x0 + 330, y0 + 50             # A, at the contested point
    bx, by = x0 + 34, y0 + 96              # B, coming in
    cx, cy = ax - 46, ay + 18              # contact, right up against A
    tip = (x0 + 244, y0 + 78)

    if kind == "adjusted":
        # Both are running to where the disc will arrive. B leaves that line and
        # cuts into A's, so the two of them converge on the same point — the
        # contact sits ahead of BOTH players, not behind either of them.
        ax, ay = x0 + 112, y0 + 56
        bx, by = x0 + 40, y0 + 102
        cx, cy = x0 + 236, y0 + 44         # where the two runs meet
        tip = (x0 + 214, y0 + 60)
        fork = (x0 + 140, y0 + 92)
        b.append(mini_icon(x0 + 356, y0 + 30, scale=0.36, color=CREAM))
        b.append(vector((x0 + 130, y0 + 52), (x0 + 230, y0 + 44), (x0 + 330, y0 + 34),
                        CREAM, sw=2.4, dash="1 8", head=11, opacity=0.6))
        b.append(qpath((bx, by), (x0 + 90, y0 + 100), fork, ORANGE, sw=2.6, dash="1 9"))
        b.append(qpath(fork, (x0 + 220, y0 + 78), (x0 + 284, y0 + 56),
                       ORANGE, sw=2.0, dash="1 8", opacity=0.35))
        b.append(vector(fork, (x0 + 186, y0 + 80), tip, ORANGE, sw=2.6, dash="1 9", head=11))

    if kind == "late":
        # A is standing in a spot they already took; B runs straight into it
        b.append(f'<circle cx="{ax}" cy="{ay}" r="34" fill="none" stroke="{CREAM}" '
                 f'stroke-width="1.6" stroke-dasharray="1 7" stroke-linecap="round" opacity="0.42"/>')
        b.append(vector((bx, by), (x0 + 132, y0 + 96), tip, ORANGE, sw=2.6, dash="1 9", head=11))
    elif kind == "leapt":
        # B leaves the ground and comes down into A — drawn in elevation, so the
        # ground is hatched, A stands on it, and B's height is dropped to it.
        gy = y0 + h - 10
        b.append(ground(x0 + 10, x0 + w - 6, gy))
        b.append(hair(ax, ay + 16, ax, gy, opacity=0.32, sw=1.6))
        b.append(hair(x0 + 99, y0 + 46, x0 + 99, gy - 2, opacity=0.3, sw=1.8, dash="1 7"))
        b.append(vector((bx, by), (x0 + 100, y0 - 20), tip, ORANGE, sw=2.6, dash="1 9", head=11))

    b.append(burst(cx, cy, (13, 21, 29), ops=(0.9, 0.42, 0.18), sws=(2.2, 1.7, 1.3)))
    b.append(f'<circle cx="{ax}" cy="{ay}" r="16" fill="{BG}" stroke="{CREAM}" stroke-width="2.6"/>')
    b.append(bold(ax, ay + 7, "A", 19, CREAM, anchor="middle", sw=0.8))
    b.append(f'<circle cx="{bx}" cy="{by}" r="16" fill="{BG}" stroke="{ORANGE}" stroke-width="2.6"/>')
    b.append(bold(bx, by + 7, "B", 19, ORANGE, anchor="middle", sw=0.8))
    return "\n".join(b)


def slide_cases():
    b = [header(3)]
    b.append(bold(MARGIN, 292, tracked("SO WHO FOULED?"), 30, ORANGE, sw=1.3))
    y = 380
    for line in ["Rule 12.7 answers it", "three ways."]:
        b.append(bold(MARGIN, y, line, 64, CREAM, sw=3.0))
        y += 76
    rows = [
        ("12.7.1", "late", ["B arrived after A already", "held that position."]),
        ("12.7.2", "adjusted", ["Both ran for the disc — then B", "veered into A's line."]),
        ("12.7.3", "leapt", ["Still can't agree? Whoever", "left their feet."]),
    ]
    dw, dh = 386, 122
    tx = MARGIN + dw + 44
    for i, (num, kind, cap) in enumerate(rows):
        y0 = 566 + i * 148
        b.append(hair(MARGIN, y0 - 14, W - MARGIN, y0 - 14, opacity=0.12, sw=1.6))
        b.append(case_row(MARGIN, y0, dw, dh, kind))
        b.append(bold(tx, y0 + 36, num, 24, ORANGE, sw=1.1))
        cy = y0 + 74
        for ln in cap:
            b.append(reg(tx, cy, ln, 25, CREAM, opacity=0.78))
            cy += 34
    b.append(citation(["12.7.1", "12.7.2", "12.7.3"]))
    return base("\n".join(b))


# ------------------------------------------------------------ SLIDE 4 — CAVEAT
def slide_caveat():
    b = [header(4)]
    b.append(bold(MARGIN, 292, tracked("THE PART THAT'S FAIR"), 30, ORANGE, sw=1.3))
    y = 380
    for line in ["Brushing shoulders", "isn't a foul."]:
        b.append(bold(MARGIN, y, line, 64, CREAM, sw=3.0))
        y += 76
    blk, last = rule_block("12.8", 590)
    b.append(blk)
    y = last + 100
    for line in wrap_lines("The line is drawn at initiating it — not at wanting the disc badly enough.", 31, ratio=0.54):
        b.append(reg(MARGIN, y, line, 31, CREAM, opacity=0.7))
        y += 43
    b.append(citation(["12.8"]))
    return base("\n".join(b))


# ---------------------------------------------------------- SLIDE 5 — CLOSING
def slide_close():
    """carousel-post-3's closing_slide() layout, verbatim."""
    b = [header(TOTAL)]
    y = 520
    for line in ["Nobody referees", "this but you."]:
        b.append(bold(MARGIN, y, line, 90, CREAM, sw=3.2))
        y += 102
    y += 40
    sub = ("Which is why the number matters — one rule a day, the full breakdown "
           "is linked in bio.")
    for line in wrap_lines(sub, 36):
        b.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.8))
        y += 48
    y += 40
    b.append(bold(MARGIN, y, "Follow @learn.ultimatefrisbee", 38, ORANGE, sw=1.8))
    return base("\n".join(b))


# --------------------------------------------------------------------- build
slides = {
    "01_hook": slide_hook(),
    "02_receipts": slide_receipts(),
    "03_who_initiated": slide_cases(),
    "04_caveat": slide_caveat(),
    "05_closing": slide_close(),
}

outdir = "/tmp/luf/out"
os.makedirs(outdir, exist_ok=True)
for name, svg in slides.items():
    with open(f"{outdir}/{name}.svg", "w", encoding="utf-8") as f:
        f.write(svg)
print("wrote", len(slides), "slides")
