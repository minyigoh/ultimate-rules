import textwrap

BG = "#0F1712"
ORANGE = "#E24A12"
CREAM = "#F1F3EE"
FONT = "Liberation Sans"

W = H = 1080
CX, CY = 540, 540

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

def mini_icon(cx, cy, scale=1.0, color=ORANGE):
    rx1, ry1 = 34*scale, 17*scale
    rx2, ry2 = 19*scale, 9*scale
    cy2 = cy - 3*scale
    return (f'<ellipse cx="{cx}" cy="{cy}" rx="{rx1:.1f}" ry="{ry1:.1f}" fill="none" stroke="{color}" stroke-width="{4*scale:.1f}"/>'
            f'<ellipse cx="{cx}" cy="{cy2:.1f}" rx="{rx2:.1f}" ry="{ry2:.1f}" fill="none" stroke="{color}" stroke-width="{2.6*scale:.1f}" opacity="0.55"/>')

def base(body):
    return f'''<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
<rect width="{W}" height="{H}" fill="{BG}"/>
{body}
</svg>'''

def cover_slide(label):
    b = []
    # logo icon, centered, vertically balanced for circle crop
    b.append(mini_icon(CX, 420, scale=2.4, color=ORANGE))
    # smaller brand name below icon
    b.append(bold(CX, 520, "Learn Ultimate Frisbee", 30, CREAM, anchor="middle", sw=1.3))
    # thin divider
    b.append(f'<line x1="{CX-90}" y1="562" x2="{CX+90}" y2="562" stroke="{CREAM}" stroke-width="2" opacity="0.2"/>')
    # big category label, orange
    b.append(bold(CX, 700, label.upper(), 140, ORANGE, anchor="middle", sw=4.2))
    return base("\n".join(b))

labels = ["Rules", "Strategy", "Mindset", "Training"]
for label in labels:
    svg = cover_slide(label)
    with open(f"/tmp/hl/highlight_{label.lower()}.svg", "w") as f:
        f.write(svg)
print("done")
