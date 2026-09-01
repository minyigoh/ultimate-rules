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

# ImageMagick 6's internal SVG reader lowers each <text> element into an MVG
# `text x,y "..."` primitive, where the payload is itself double-quoted. A
# double-quote that lands at the *start* of the element's character data
# collides with that opening delimiter and is swallowed -- the glyph simply
# never renders. Quotes anywhere else in the string are unaffected, which is
# why this went unnoticed until a wrap put one first: reel-21 scene 6 shipped
# as  Violation" is a legal  and Min-Yi rejected it on 2026-08-24 ("a typo
# without the opening \" for the Violation").
#
# Wrapping the payload in a <tspan> gives the reader a child element to lower
# instead, so the quote is no longer the first thing after the delimiter and
# survives. Verified against the five alternatives on 2026-08-25: &#34; fails
# identically (the entity is resolved before MVG is built), a leading
# zero-width space works but leaves an invisible character in the copy, and
# curly quotes work but change the approved glyph. The <tspan> changes neither.
#
# Applied only when the text actually starts with a quote, so every other
# element in every other asset emits byte-identical SVG to what has shipped.
# 2026-09-02: the same collision happens at the *closing* delimiter. A payload
# ending in a double quote loses it too, and a payload that both starts and
# ends with one loses both. Found while proofing carousel-post-5, whose slide 3
# wrapped to a last line of `hand."` and rendered `hand.` -- correct in the SVG,
# missing in the PNG. Measured: bare `hand."` drops it, bare `"a b."` drops
# both, `say "hi" now` is fine, and the <tspan> fixes all of them. So the
# condition is startswith OR endswith.
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

TOTAL = 9

# ---------------- scene builders ----------------
# ---------------- kicker auto-fit ----------------
# The kicker is a tracked (letter-spaced) label, so it grows about twice as
# fast per character as normal text, and it is the one element in g_main that
# never wraps. Rather than let it run off the card -- or quietly reword an
# approved script, which is worse -- shrink the label to fit, down to a floor.
# Below the floor the render fails and asks for shorter wording, because a
# kicker much smaller than standard stops reading as the same element.
#
# Per-scene sizing, floor 80% of standard; approved by Min-Yi 2026-08-20.
# No kicker in reels 1-17 needs this -- the widest ever shipped is reel-11's
# "SIMULTANEOUS MEANS OFFENCE" at 873 of the 900px column -- so it is a no-op
# on the back catalogue and only engages on new, longer wording.
KICKER_SIZE = 34
KICKER_FLOOR = 0.80
_FONT_FILE = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
_fonts = {}

def _measure(text, size):
    from PIL import ImageFont
    if size not in _fonts:
        _fonts[size] = ImageFont.truetype(_FONT_FILE, size)
    return _fonts[size].getlength(text)

def fit_kicker(text, size=KICKER_SIZE, avail=AVAIL_W, floor=KICKER_FLOOR):
    """Largest integer size <= `size` whose rendered width fits `avail`."""
    lo = max(1, int(size * floor))
    s = size
    while s > lo and _measure(text, s) > avail:
        s -= 1
    if _measure(text, s) > avail:
        raise SystemExit(
            f"kicker too long: {text!r}\n"
            f"  needs {_measure(text, s):.0f}px at the {lo}px floor "
            f"({floor:.0%} of {size}px); the column is {avail}px.\n"
            f"  Shorten the kicker, or raise KICKER_FLOOR deliberately.")
    return s


def g_cover(no, kicker, title, hook, lesson_no, size=84):
    groups = [[header(no, TOTAL)]]
    klabel = tracked(kicker)
    ks = fit_kicker(klabel, size=32)
    groups.append([bold(MARGIN, 470, klabel, ks, ORANGE, sw=round(1.4*ks/32, 2))])
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

# ---------------- body auto-fit ----------------
# Same principle as fit_kicker, applied to the body paragraph on a g_main
# slide. The citation footer sits at a fixed y (H-200), so a body that wraps
# to one line too many does not push it down -- it lands on top of it. That is
# what reel-18 v1 shipped: six lines at 36px put the last baseline at 1140,
# nine pixels above a citation whose caps start at 1131, and the WFDF line
# became unreadable. Min-Yi rejected it on 2026-08-22 ("The WFDF reference is
# blocking the content").
#
# The fix is to shrink the type, never to reword approved copy. Line height
# scales with the size so the paragraph keeps its rhythm. The limit is the
# tightest baseline that has actually shipped clean (reels 12 and 16, at
# CITE_Y - 60); the floor is 80% of standard, matching the kicker, and below it
# the render fails loudly rather than colliding quietly.
BODY_SIZE = 36
BODY_LINE_H = 50
BODY_FLOOR = 0.80
CITE_Y = H - 200
BODY_LIMIT = CITE_Y - 60          # lowest permitted body baseline

def fit_body(text, y_start, size=BODY_SIZE, line_h=BODY_LINE_H,
             limit=BODY_LIMIT, floor=BODY_FLOOR):
    """Largest integer size <= `size` whose wrapped block clears the citation."""
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
            f"body too long: {text[:70]!r}...\n"
            f"  {len(lines)} lines at the {lo}px floor ({floor:.0%} of {size}px) "
            f"end at y={last:.0f}; the citation needs everything above {limit}.\n"
            f"  Shorten the headline, or split the point across two scenes.")
    return s, lh, lines


def g_main(no, kicker, headline, body_text, rules, index):
    groups = [[header(no, TOTAL)]]
    klabel = f"#{index}   " + tracked(kicker)
    ks = fit_kicker(klabel)
    groups.append([bold(MARGIN, 510, klabel, ks, ORANGE, sw=round(1.6*ks/34, 2))])
    y = 610; head = []
    for line in wrap_lines(headline, 66, ratio=0.56):
        head.append(bold(MARGIN, y, line, 66, CREAM, sw=3.0)); y += 78
    groups.append(head)
    y += 46; body = []
    bs, blh, blines = fit_body(body_text, y)
    for line in blines:
        body.append(reg(MARGIN, y, line, bs, CREAM, opacity=0.8)); y += blh
    groups.append(body)
    cy = CITE_Y
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
    ('cover', g_cover(1, 'BEGINNER', "Receiving fouls", "Two of you go up for the same disc and there's contact. This is the foul you'll meet first, and it has the biggest reward in the rulebook.", 28, size=84), [0.35, 0.55, 0.85, 1.05, 0.6]),
    ('window', g_main(2, 'BEFORE, WHILE OR JUST AFTER', "A receiving foul is contact on the play for the disc.", "It is non-minor contact initiated before, while, or directly after either player makes a play on the disc. The window closes at the catch: a graze on the forearm afterwards is not on its own a foul, though it should still be avoided.", ['17.2.1', '17.2.1.1'], 1), [0.3, 0.45, 0.7, 1.5, 0.8]),
    ('window_r', g_detail(3, [('17.2.1', [rt('17.2.1'), ('17.2.1.1', rt('17.2.1.1'))])]), [0.3, 2.0]),
    ('reward', g_main(4, 'EVEN IN THE END ZONE', "The reward is the disc, exactly where it happened.", "After an accepted receiving foul the fouled player gains possession at the location of the breach \u2014 even if that location is in an end zone \u2014 and play restarts with a check. Not a reset to the thrower. If the foul is contested instead, the disc does go back.", ['17.2.2'], 2), [0.3, 0.45, 0.7, 1.5, 0.8]),
    ('reward_r', g_detail(5, [('17.2.2', [rt('17.2.2')])]), [0.3, 2.0]),
    ('immediate', g_main(6, 'CALL IT IMMEDIATELY', "A foul called late is a different situation entirely.", "All of that depends on making the call in time. Calls must be made immediately after the breach is recognised \u2014 not after you have watched where the disc landed, and not after you have decided whether you would have caught it.", ['15.8'], 3), [0.3, 0.45, 0.7, 1.5, 0.8]),
    ('immediate_r', g_detail(7, [('15.8', [rt('15.8')])]), [0.3, 2.0]),
    ('tip', g_tip(8, "Call it at the moment of contact \u2014 shout and signal.", "A call is two things at once: the word and the hand signal. Downfield players will not hear you across a windy sideline, but they can see your arms \u2014 and once they see it, they echo it and the whole field stops together."), [0.3, 0.45, 0.7, 1.7]),
    ('close', g_closing(9, 28), [0.3, 0.8, 1.0, 1.4]),
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
