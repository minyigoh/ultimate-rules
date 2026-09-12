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

# The gap is a NON-BREAKING space, not a plain one, and that is the whole fix
# for the defect Min-Yi rejected reel-38 for on 2026-09-11: "The header text in
# orange doesn't have proper spacing e.g. #1WHOTOUCHESITIN should read #1 WHO
# TOUCHES IT IN".
#
# A tracked kicker encodes its word boundary as a RUN of whitespace -- the
# joiner, then the source string's own space, then the joiner again -- while a
# letter boundary is a single joiner. XML collapses runs of whitespace to one
# character, so both boundaries arrived at the rasteriser the same width and the
# words fused into one continuous tracked string. Measured in headless Chrome,
# the renderer tools/win_render.py actually uses: "#1   W H O   T O U C H E S
# I T   I N" at 34px comes back 483.6px collapsed against 559.2px intended, and
# the missing 75.6px is exactly the four word gaps.
#
# U+00A0 is not XML whitespace, so nothing collapses it, and it carries the same
# advance as U+0020 in Liberation Sans and in the metric-compatible Arial that
# win_render.py substitutes -- verified at 559.2px either way, identical to the
# same string under xml:space="preserve". So this is a whitespace-collapse fix
# and not a metric change: fit_kicker() and check_layout.py take the same
# decisions, and a single-word kicker ("BEGINNER" on every cover) emits the same
# 231.1px it always has.
#
# xml:space="preserve" is the other available fix and it is NOT used here. It
# would work in Chrome but depends on the reader honouring it, and ImageMagick
# 6's internal MSVG reader -- the sandbox path -- has never been tested for it.
# The non-breaking space needs no cooperation from either reader.
# Built from the code point, never written as a literal. The character is
# invisible in every editor and in every diff, so a literal here would be one
# stray reformat away from silently becoming U+0020 again -- with nothing on
# screen to show for it and the reel-38 rejection back in the output. Do not
# "simplify" this to a quoted space.
NBSP = chr(0xA0)
assert NBSP != " " and NBSP.isspace(), "NBSP must be U+00A0, not U+0020"


def tracked(s, gap=NBSP):
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
    # NBSP*3, not "   " -- three plain spaces are a collapsible run and the gap
    # after the index number vanished with the rest of them. Same advance width.
    klabel = f"#{index}" + NBSP*3 + tracked(kicker)
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
    ('cover', g_cover(1, 'INTERMEDIATE', "Turnover in your own end zone: you choose", "The disc turns over in the end zone you are defending. Where do you throw from? That one is up to you.", 43, size=84), [0.35, 0.55, 0.85, 1.05, 0.6]),
    ('choice', g_main(2, 'YOU GET A CHOICE', "Two legal places to put the pivot, and it is yours to pick.", "The disc turns over in the end zone you are defending. Almost everywhere else on the field the spot is fixed, but here you get two legal options. Throw from where the disc is, or take it out to the nearest point on the goal line. Nobody gets to choose for you, and neither option is the default.", ['13.11', '13.11.1', '13.11.2'], 1), [0.3, 0.45, 0.7, 1.5, 0.8]),
    ('choice_r', g_detail(3, [('13.11', [rt('13.11'), ('13.11.1', rt('13.11.1')), ('13.11.2', rt('13.11.2'))])]), [0.3, 2.0]),
    ('signal', g_main(4, 'THE ARM SIGNAL', "One arm straight up, before you touch the disc.", "If you want the goal line, you can say so without saying anything. One arm fully extended above your head, before you pick the disc up. Your team-mates can read it from forty metres away and start moving while you are still jogging to the disc.", ['13.11.2.1'], 2), [0.3, 0.45, 0.7, 1.5, 0.8]),
    ('signal_r', g_detail(5, [('13.11.2.1', [rt('13.11.2.1')])]), [0.3, 2.0]),
    ('commit', g_main(6, 'YOU CANNOT UNDO IT', "The moment you move, stay, fake or signal, you have chosen.", "Four things commit you, and three of them are things you might do without meaning to. Moving off the spot. Staying on it. Faking a pass. Signalling the goal line. Once you have done any of them, that is your choice, and the rules do not let you take it back.", ['13.11.3'], 3), [0.3, 0.45, 0.7, 1.5, 0.8]),
    ('commit_r', g_detail(7, [('13.11.3', [rt('13.11.3')])]), [0.3, 2.0]),
    ('tip', g_tip(8, "Decide before you pick it up, not after.", "Decide on the walk, not at the disc. Taking it to the line gives your team the whole field to work with. Staying deep can catch a defence that has not set. Either is fine — changing your mind halfway is what costs you."), [0.3, 0.45, 0.7, 1.7]),
    ('close', g_closing(9, 43), [0.3, 0.8, 1.0, 1.4]),
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
