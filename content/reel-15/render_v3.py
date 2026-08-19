import textwrap, os, json, subprocess

# ---- carousel constants, copied verbatim from content/carousel-post-1/make_carousel.py ----
BG = "#0F1712"; ORANGE = "#E24A12"; CREAM = "#F1F3EE"; FONT = "Liberation Sans"
W, H = 1080, 1350
MARGIN = 90
AVAIL_W = W - 2*MARGIN
VW, VH = 1080, 1920
Y_OFFSET = (VH - H) / 2

RULES_JSON = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "rules.json")
_r = json.load(open(RULES_JSON, encoding="utf-8"))
RULE = {r["num"]: r for r in _r["rules"]}

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
    text = " ".join(text.split())
    max_chars = max(6, int(avail / (ratio*font_size)))
    return textwrap.wrap(text, max_chars, break_long_words=False)

def mini_icon(cx, cy, scale=1.0, color=ORANGE):
    rx1, ry1 = 34*scale, 17*scale
    rx2, ry2 = 19*scale, 9*scale
    cy2 = cy - 3*scale
    return (f'<ellipse cx="{cx}" cy="{cy}" rx="{rx1:.1f}" ry="{ry1:.1f}" fill="none" stroke="{color}" stroke-width="{4*scale:.1f}"/>'
            f'<ellipse cx="{cx}" cy="{cy2:.1f}" rx="{rx2:.1f}" ry="{ry2:.1f}" fill="none" stroke="{color}" stroke-width="{2.6*scale:.1f}" opacity="0.55"/>')

def pillar_tag(label="RULES"):
    tw = len(label) * 15 + 4
    pad = 20
    rect_w = tw + pad*2; rect_h = 46
    x1 = (W - MARGIN) - rect_w; y1 = 46
    return (f'<rect x="{x1}" y="{y1}" width="{rect_w}" height="{rect_h}" rx="23" fill="none" stroke="{ORANGE}" stroke-width="2.5"/>'
            + bold(x1 + rect_w/2, y1 + rect_h/2 + 8, label, 22, ORANGE, anchor="middle", sw=1.0))

def header(slide_no, total, pillar="RULES"):
    parts = [pillar_tag(pillar)]
    parts.append(mini_icon(MARGIN+34, 150, scale=1.0))
    parts.append(bold(MARGIN+80, 162, "Learn Ultimate Frisbee", 24, CREAM, sw=1.0))
    parts.append(reg(W-MARGIN, 162, f"{slide_no} / {total}", 24, CREAM, anchor="end", opacity=0.5))
    parts.append(f'<line x1="{MARGIN}" y1="208" x2="{W-MARGIN}" y2="208" stroke="{CREAM}" stroke-width="2" opacity="0.15"/>')
    return "\n".join(parts)

def base(body):
    return (f'<svg viewBox="0 0 {VW} {VH}" xmlns="http://www.w3.org/2000/svg">'
            f'<rect width="{VW}" height="{VH}" fill="{BG}"/>'
            f'<g transform="translate(0,{Y_OFFSET})">'
            f'<rect width="{W}" height="{H}" fill="{BG}"/>{body}</g></svg>')

TOTAL = 8

# ---------------- scene builders ----------------
def g_cover(no, kicker, title, hook, lesson_no, size=84):
    groups = [[header(no, TOTAL)]]
    groups.append([bold(MARGIN, 470, tracked(kicker), 32, ORANGE, sw=1.4)])
    y = 600; head = []
    lines = wrap_lines(title, size, ratio=0.56)
    line_h = int(size*1.14)
    for line in lines:
        head.append(bold(MARGIN, y, line, size, CREAM, sw=3.2)); y += line_h
    groups.append(head)
    y += 40; sub = []
    for line in wrap_lines(hook, 36):
        sub.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.75)); y += 48
    groups.append(sub)
    groups.append([bold(MARGIN, H-140, f"LESSON {lesson_no} / 75", 34, ORANGE, sw=1.6)])
    return groups

def g_main(no, kicker, headline, body_text, rules, index):
    groups = [[header(no, TOTAL)]]
    groups.append([bold(MARGIN, 510, f"#{index}   " + tracked(kicker), 34, ORANGE, sw=1.6)])
    y = 610; head = []
    for line in wrap_lines(headline, 66, ratio=0.56):
        head.append(bold(MARGIN, y, line, 66, CREAM, sw=3.0)); y += 78
    groups.append(head)
    y += 46; body = []
    for line in wrap_lines(body_text, 36):
        body.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.8)); y += 50
    groups.append(body)
    cy = H-200
    groups.append([bold(MARGIN, cy, "WFDF Rules of Ultimate 2025–2028", 26, ORANGE, sw=1.4),
                   bold(MARGIN, cy+42, "  ·  ".join(rules), 26, CREAM, sw=1.4)])
    return groups

def g_detail(no, blocks):
    groups = [[header(no, TOTAL)]]
    y = 280
    for rule_no, items in blocks:
        blk = []
        chap = RULE[rule_no]["chapterTitle"].upper()
        for line in wrap_lines(f"RULE {rule_no}  ·  {chap}", 22, ratio=0.5):
            blk.append(bold(MARGIN, y, line, 22, ORANGE, sw=1.0)); y += 32
        y += 42
        for item in items:
            if isinstance(item, tuple):
                sub_no, t = item
                blk.append(bold(MARGIN, y, sub_no, 22, ORANGE, sw=1.0)); y += 32
                y += 14
            else:
                t = item
            for line in wrap_lines(t, 38, ratio=0.55):
                blk.append(reg(MARGIN, y, line, 38, CREAM, opacity=0.92)); y += 50
            y += 22
        y += 40
        groups.append(blk)
    return groups

def g_tip(no, headline, body_text):
    groups = [[header(no, TOTAL)]]
    groups.append([bold(MARGIN, 510, tracked("FIELD TIP"), 34, ORANGE, sw=1.6)])
    y = 610; head = []
    for line in wrap_lines(headline, 66, ratio=0.56):
        head.append(bold(MARGIN, y, line, 66, CREAM, sw=3.0)); y += 78
    groups.append(head)
    y += 46; body = []
    for line in wrap_lines(body_text, 36):
        body.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.8)); y += 50
    groups.append(body)
    return groups

def g_closing(no, lesson_no):
    groups = [[header(no, TOTAL)]]
    y = 520; head = []
    for line in [f"Lesson {lesson_no}", "of 75."]:
        head.append(bold(MARGIN, y, line, 90, CREAM, sw=3.2)); y += 102
    groups.append(head)
    y += 40; sub = []
    for line in wrap_lines("One rule a day, five minutes at a time — the full breakdown is linked in bio.", 36):
        sub.append(reg(MARGIN, y, line, 36, CREAM, opacity=0.8)); y += 48
    groups.append(sub)
    y += 40
    groups.append([bold(MARGIN, y, "Follow @learn.ultimatefrisbee", 38, ORANGE, sw=1.8)])
    return groups

# ---------------- verbatim rule text (pulled from content/rules.json) ----------------
def rt(n): return RULE[n]["text"]

SCENES = [
    ('cover', g_cover(1, 'BEGINNER', "Throwing on the run: the two-contact allowance", "You can release a pass without ever stopping. There are exactly two conditions.", 15, size=76), [0.35, 0.55, 0.85, 1.05, 0.6]),
    ('nopivot', g_main(2, 'NO PIVOT REQUIRED', "You can catch it and throw it without ever stopping.", "Catch the disc while running or jumping and you may release a pass without attempting to reduce speed and without establishing a pivot point at all. The rulebook writes this exception directly underneath the obligation to slow down.", ['18.2.1.1'], 1), [0.3, 0.45, 0.7, 1.5, 0.8]),
    ('nopivot_r', g_detail(3, [('18.2.1.1', [rt('18.2.1.1'), ('18.2.1.1.1', rt('18.2.1.1.1')), ('18.2.1.1.2', rt('18.2.1.1.2'))])]), [0.3, 2.0]),
    ('contacts', g_main(4, 'TWO EXTRA CONTACTS, MAX', "Catch, one, two — and the disc is already gone.", "Count the contacts rather than estimating them. You catch it in the air, land on your left, that is one, land on your right, that is two, and the pass has to already be released.", ['18.2.1.1'], 2), [0.3, 0.45, 0.7, 1.5, 0.8]),
    ('travel', g_main(5, "OTHERWISE IT'S A TRAVEL", "Miss either condition and the allowance is off.", "It is a package: both conditions, or neither. Break one of them and releasing the pass is named in the rulebook as a travel infraction by number, rather than left to interpretation.", ['18.2.4.2'], 3), [0.3, 0.45, 0.7, 1.5, 0.8]),
    ('travel_r', g_detail(6, [('18.2.4', [rt('18.2.4'), ('18.2.4.2', rt('18.2.4.2'))])]), [0.3, 2.0]),
    ('tip', g_tip(7, "Count the contacts, don't estimate them", "Catch airborne, land left, land right, gone. The direction half is the one people lose — curving inside to open a better lane breaks the allowance even if you released on contact two."), [0.3, 0.45, 0.7, 1.7]),
    ('close', g_closing(8, 15), [0.3, 0.8, 1.0, 1.4]),
]

# ---------------- timing (see content/REEL_TIMING.md) ----------------
# House rhythm, applied over whatever per-state durations SCENES carries above:
# text arrives quickly and in sequence, then the finished slide holds long
# enough to actually read. Retiming here instead of hand-tuning every scene
# keeps all reels identical in feel and makes the rule a single edit.
STAGGER = 0.22                       # any state where text is still arriving
HOLD = {"cover": 1.5, "main": 1.6,   # the complete slide: time to read it
        "detail": 2.4, "tip": 1.6, "close": 2.0}
TARGET = 30.0                        # seconds for the finished video
IN_SCENE, BETWEEN = 0.12, 0.40       # crossfades; must match blend/concat_build

def _kind(name):
    if name in ("cover", "close", "tip"):
        return name
    return "detail" if name.endswith("_r") else "main"

def retime(name, durs):
    kind = _kind(name)
    out = [STAGGER] * len(durs)
    out[-1] = HOLD[kind]
    # A rules slide carrying more than one rule block needs each earlier block
    # readable before the next lands, or the stagger buries it.
    if kind == "detail" and len(durs) > 2:
        for i in range(1, len(durs) - 1):
            out[i] = round(HOLD["detail"] * 0.7, 2)
    return out

def fit(scenes):
    """Scale the read-holds so the finished video lands near TARGET.

    Reels run two to four topic blocks, which on a fixed rhythm alone spreads
    them over 22-35s. Only the holds scale -- the stagger stays put, since
    that is the part being kept snappy -- and the factor is clamped so rule
    text never becomes unreadable at one end or draggy at the other.
    """
    n_states = sum(len(d) for _, _, d in scenes)
    n_between = len(scenes) - 1
    trans = n_between*BETWEEN + (n_states - 1 - n_between)*IN_SCENE
    held = sum(sum(x for x in d if x != STAGGER) for _, _, d in scenes)
    fixed = sum(sum(x for x in d if x == STAGGER) for _, _, d in scenes) + trans
    if held <= 0:
        return scenes
    k = max(0.8, min(1.5, (TARGET - fixed) / held))
    return [(n, g, [x if x == STAGGER else round(x*k, 2) for x in d])
            for n, g, d in scenes]

SCENES = fit([(n, g, retime(n, d)) for n, g, d in SCENES])

os.makedirs("v4/svg", exist_ok=True); os.makedirs("v4/png", exist_ok=True)

manifest = []
for si, (name, groups, durs) in enumerate(SCENES):
    assert len(groups) == len(durs), (name, len(groups), len(durs))
    cumulative = []
    for gi, grp in enumerate(groups):
        cumulative += grp
        svg = base("\n".join(cumulative))
        p = f"v4/svg/{si:02d}_{name}_{gi}.svg"
        open(p, "w", encoding="utf-8").write(svg)
        manifest.append((f"v4/png/{si:02d}_{name}_{gi}.png", durs[gi], gi == 0, p))

for png, dur, start, svgp in manifest:
    subprocess.run(["convert", "-background", BG, svgp, "-resize", f"{VW}x{VH}!", png], check=True)

json.dump([[p, d, s] for p, d, s, _ in manifest], open("v4/manifest.json", "w"))
print("states:", len(manifest))
print("raw total:", round(sum(d for _, d, _, _ in manifest), 2), "s")

raw = sum(d for _, d, _, _ in manifest)
n_states = len(manifest)
n_between = sum(1 for _, _, s, _ in manifest if s) - 1
trans = n_between * BETWEEN + (n_states - 1 - n_between) * IN_SCENE
print(f"projected: {raw + trans:.1f}s   (house target ~30s; drop a topic block if over 33s)")
