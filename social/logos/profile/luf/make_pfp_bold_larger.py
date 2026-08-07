BG = "#0F1712"
ORANGE = "#E24A12"
CREAM = "#F1F3EE"
FONT = "Liberation Sans"

W = H = 1080
CX = 540
SCALE = 1.25
CY0 = 540  # scale-center

def scy(y):
    return CY0 + (y - CY0) * SCALE

def tracked(s, gap=" "):
    return gap.join(list(s))

tagline_words = ["FIVE", "MINUTES", "A", "DAY"]
tagline = "   ".join(tracked(w) for w in tagline_words)

def bold_text(x, y, text, size, color, sw=3.5):
    return (f'<text x="{x}" y="{y}" font-family="{FONT}" font-weight="bold" font-size="{size}" '
            f'fill="{color}" stroke="{color}" stroke-width="{sw}" stroke-linejoin="round" text-anchor="middle">{text}</text>')

svg = f'''<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
<rect width="{W}" height="{H}" fill="{BG}"/>

<ellipse cx="{CX}" cy="{scy(380):.2f}" rx="{135*SCALE:.2f}" ry="{69*SCALE:.2f}" fill="none" stroke="{ORANGE}" stroke-width="{13*SCALE:.2f}"/>
<ellipse cx="{CX}" cy="{scy(369):.2f}" rx="{74*SCALE:.2f}" ry="{36*SCALE:.2f}" fill="none" stroke="{ORANGE}" stroke-width="{9*SCALE:.2f}" opacity="0.55"/>

{bold_text(CX, f"{scy(590):.2f}", "Learn Ultimate", round(92*SCALE), CREAM, sw=3.5*SCALE)}
{bold_text(CX, f"{scy(700):.2f}", "Frisbee", round(92*SCALE), CREAM, sw=3.5*SCALE)}

{bold_text(CX, f"{scy(762):.2f}", tagline, round(29*SCALE), ORANGE, sw=1.6*SCALE)}

</svg>'''

with open("learn-ultimate-frisbee-pfp-bold.svg", "w") as f:
    f.write(svg)
print("done")
