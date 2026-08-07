BG = "#0F1712"
ORANGE = "#E24A12"
CREAM = "#F1F3EE"
FONT = "Liberation Sans"

W = H = 1080
CX = 540

def tracked(s, gap=" "):
    return gap.join(list(s))

tagline_words = ["FIVE", "MINUTES", "A", "DAY"]
tagline = "   ".join(tracked(w) for w in tagline_words)

def bold_text(x, y, text, size, color, sw=3.5):
    return (f'<text x="{x}" y="{y}" font-family="{FONT}" font-weight="bold" font-size="{size}" '
            f'fill="{color}" stroke="{color}" stroke-width="{sw}" stroke-linejoin="round" text-anchor="middle">{text}</text>')

svg = f'''<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
<rect width="{W}" height="{H}" fill="{BG}"/>

<ellipse cx="{CX}" cy="380" rx="135" ry="69" fill="none" stroke="{ORANGE}" stroke-width="13"/>
<ellipse cx="{CX}" cy="369" rx="74" ry="36" fill="none" stroke="{ORANGE}" stroke-width="9" opacity="0.55"/>

{bold_text(CX, 590, "Learn Ultimate", 92, CREAM)}
{bold_text(CX, 700, "Frisbee", 92, CREAM)}

{bold_text(CX, 762, tagline, 29, ORANGE, sw=1.6)}

</svg>'''

with open("/sessions/busy-exciting-clarke/mnt/outputs/logos/profile/luf/learn-ultimate-frisbee-pfp-bold.svg", "w") as f:
    f.write(svg)
print("done")
