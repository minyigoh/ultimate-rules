"""Build the Learn Ultimate Frisbee site from the template + parsed rules + authored lessons.

Usage:  python build.py
Output: docs/  — a static site ready for GitHub Pages, and openable straight
                 off disk. index.html is fully self-contained; the manifest,
                 service worker and icons are what make it installable and
                 usable offline on a phone.

The folder is named docs/ because GitHub Pages can only publish from a repo
root or from /docs — no other directory name works without a build action.
"""
import json, math, os, struct, sys, urllib.parse, zlib

HERE = os.path.dirname(os.path.abspath(__file__))
CONTENT = os.path.join(HERE, "content")
DIST = os.path.join(HERE, "docs")

TITLE = "Learn Ultimate Frisbee — the rules, five minutes a day"
DESC = ("Every rule of ultimate frisbee in plain English, one short lesson a day, "
        "and a search bar that understands what beginners actually type.")
ACCENT = (226, 74, 18)      # --accent, light theme
GROUND = (15, 23, 18)       # --ground, dark theme


# ------------------------------------------------------------------ icons
def write_png(path, size, bg, fg, ss=3):
    """A flat disc mark, drawn at ss× and box-filtered down. No dependencies."""
    big = size * ss
    cx = cy = big / 2.0
    outer_rx, outer_ry = big * 0.42, big * 0.215
    stroke = big * 0.052
    in_rx, in_ry = outer_rx - stroke, outer_ry - stroke
    rim_rx, rim_ry = outer_rx * 0.55, outer_ry * 0.52
    rim_s = big * 0.030

    def on_ring(x, y, rx, ry, w):
        if rx - w <= 0 or ry - w <= 0:
            return False
        dx, dy = x - cx, y - cy
        outside_in = (dx / (rx - w)) ** 2 + (dy / (ry - w)) ** 2 > 1.0
        inside_out = (dx / rx) ** 2 + (dy / ry) ** 2 <= 1.0
        return outside_in and inside_out

    # supersampled coverage per output pixel
    cov = [[0] * size for _ in range(size)]
    for by in range(big):
        for bx in range(big):
            if on_ring(bx + .5, by + .5, outer_rx, outer_ry, stroke) or \
               on_ring(bx + .5, by + .5, rim_rx, rim_ry, rim_s):
                cov[by // ss][bx // ss] += 1
    n = float(ss * ss)

    raw = bytearray()
    for y in range(size):
        raw.append(0)  # filter type 0
        for x in range(size):
            a = cov[y][x] / n
            for c in range(3):
                raw.append(int(round(bg[c] * (1 - a) + fg[c] * a)))
            raw.append(255)

    def chunk(tag, data):
        return (struct.pack(">I", len(data)) + tag + data
                + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF))

    png = (b"\x89PNG\r\n\x1a\n"
           + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0))
           + chunk(b"IDAT", zlib.compress(bytes(raw), 9))
           + chunk(b"IEND", b""))
    with open(path, "wb") as f:
        f.write(png)


# single-quoted inside the SVG, then percent-encoded, so nothing can break out
# of the double-quoted href attribute it gets embedded in
_FAVICON_SVG = (
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>"
    "<rect width='24' height='24' rx='5' fill='#0F1712'/>"
    "<ellipse cx='12' cy='12' rx='8.4' ry='4.3' fill='none' stroke='#FF6B33' stroke-width='1.9'/>"
    "<ellipse cx='12' cy='11.3' rx='4.6' ry='2.2' fill='none' stroke='#FF6B33'"
    " stroke-width='1.2' opacity='.55'/></svg>"
)
FAVICON_SVG = urllib.parse.quote(_FAVICON_SVG, safe="'=:/.,-")


# ------------------------------------------------------------------ head
HEAD = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="{desc}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#F1F3EE" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0F1712" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Learn Ultimate Frisbee">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,{favicon}">
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="manifest" href="manifest.webmanifest">
</head>
<body>
"""

FOOT = """
<script>
if ("serviceWorker" in navigator && location.protocol === "https:") {
  addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
</script>
</body>
</html>
"""

MANIFEST = {
    "name": "Learn Ultimate Frisbee",
    "short_name": "Learn UF",
    "description": DESC,
    "start_url": ".",
    "scope": ".",
    "display": "standalone",
    "orientation": "portrait-primary",
    "background_color": "#0F1712",
    "theme_color": "#0F1712",
    "icons": [
        {"src": "icon-180.png", "sizes": "180x180", "type": "image/png"},
        {"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
        {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
    ],
}

# Cache-first: the whole site is one file, so once it's cached the page works
# on a field with no signal. VERSION must change for clients to pick up a build.
SW = """const VERSION = "learn-ultimate-{version}";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest",
                "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {{
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
}});

self.addEventListener("activate", e => {{
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
}});

self.addEventListener("fetch", e => {{
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // The shared lesson counter lives on another origin. Leave it alone: caching
  // it would freeze the number, and the offline fallback below would hand a
  // JSON fetch a page of HTML.
  if (url.origin !== location.origin) return;
  // /desk/ is the private content dashboard, not part of the offline lesson
  // site. Leave it to the network so edits show up instead of being pinned to
  // whatever version happened to be cached first.
  if (url.pathname.includes("/desk/")) return;
  e.respondWith(
    caches.match(e.request, {{ ignoreSearch: true }}).then(hit => hit || fetch(e.request)
      .then(res => {{
        if (res.ok) {{
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy));
        }}
        return res;
      }})
      .catch(() => caches.match("./index.html")))
  );
}});
"""


HEADERS = """/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/
  Cache-Control: public, max-age=0, must-revalidate

/index.html
  Cache-Control: public, max-age=0, must-revalidate

/sw.js
  Cache-Control: public, max-age=0, must-revalidate

/manifest.webmanifest
  Cache-Control: public, max-age=0, must-revalidate

/desk/*
  X-Robots-Tag: noindex, nofollow
"""


# ------------------------------------------------------------------ build
def load(name):
    with open(os.path.join(CONTENT, name), encoding="utf-8") as f:
        return json.load(f)


def _pose(kfs, t):
    if t <= kfs[0]["t"]:
        a = kfs[0]
        return a["x"], a["y"], a.get("face", 0)
    if t >= kfs[-1]["t"]:
        a = kfs[-1]
        return a["x"], a["y"], a.get("face", 0)
    for a, b in zip(kfs, kfs[1:]):
        if a["t"] <= t <= b["t"]:
            f = 0 if b["t"] == a["t"] else (t - a["t"]) / (b["t"] - a["t"])
            fa, fb = a.get("face", 0), b.get("face", 0)
            df = ((fb - fa + 540) % 360) - 180
            return (a["x"] + (b["x"] - a["x"]) * f,
                    a["y"] + (b["y"] - a["y"]) * f, fa + df * f)
    return kfs[-1]["x"], kfs[-1]["y"], kfs[-1].get("face", 0)


def check_pivot_side(sid, v):
    """A right-handed thrower pivots on the left foot. If a pose puts the pivot
    on the other side of the body, the renderer has to reach that leg across
    the torso and the legs visibly cross — so fail the build instead."""
    for a in v["actors"]:
        if "pivot" not in a or a.get("pivotSwitch"):
            continue
        want_negative = a.get("hand", "r") != "l"
        for i in range(41):
            t = v["duration"] * i / 40
            bx, by, face = _pose(a["keyframes"], t)
            px, py, _ = _pose(a["pivot"], t)
            r = math.radians(-face)
            ly = (px - bx) * math.sin(r) + (py - by) * math.cos(r)
            if abs(ly) > 1e-6 and (ly < 0) != want_negative:
                side = "left" if want_negative else "right"
                sys.exit(f"scene '{sid}/{v['id']}' actor '{a['id']}': at t={t:.2f} the pivot "
                         f"is on the wrong side of the body (should be the {side} foot); "
                         f"the legs would cross")


def main():
    rules = load("rules.json")
    extras = load("extras.json")
    scenes = load("scenes.json")
    lessons = []
    for n in (1, 2, 3):
        lessons += load(f"lessons-{n}.json")

    ids = [l["id"] for l in lessons]
    dupes = sorted({i for i in ids if ids.count(i) > 1})
    if dupes:
        sys.exit(f"duplicate lesson ids: {dupes}")

    known = {r["num"] for r in rules["rules"]}
    missing = set()
    for l in lessons:
        missing |= {n for n in l["rules"] if n not in known}
    for s in extras["situations"] + extras["basics"]:
        missing |= {n for n in s.get("rules", []) if n not in known}
    if missing:
        sys.exit(f"content references rule numbers that don't exist: {sorted(missing)}")

    for l in lessons:
        q = l["quiz"]
        if not (0 <= q["correct"] < len(q["options"])):
            sys.exit(f"lesson {l['id']}: quiz correct index out of range")
        if "scene" in l and l["scene"] not in scenes:
            sys.exit(f"lesson {l['id']} references unknown scene '{l['scene']}'")

    n_variants = 0
    for sid, sc in scenes.items():
        if not sc.get("variants"):
            sys.exit(f"scene '{sid}' has no variants")
        seen = set()
        for v in sc["variants"]:
            n_variants += 1
            if v["id"] in seen:
                sys.exit(f"scene '{sid}' has duplicate variant id '{v['id']}'")
            seen.add(v["id"])
            if v["verdict"] not in ("legal", "illegal", "note"):
                sys.exit(f"scene '{sid}/{v['id']}' has unknown verdict '{v['verdict']}'")
            if sc["mode"] == "field" and "focus" not in v:
                sys.exit(f"scene '{sid}/{v['id']}' is field mode but has no focus rect")
            if sc["mode"] == "closeup" and "world" not in v:
                sys.exit(f"scene '{sid}/{v['id']}' is closeup mode but has no world extent")
            if not v.get("actors"):
                sys.exit(f"scene '{sid}/{v['id']}' has no actors")
            for a in v["actors"]:
                for track in ("keyframes", "pivot"):
                    kfs = a.get(track)
                    if not kfs:
                        continue
                    ts = [k["t"] for k in kfs]
                    if ts != sorted(ts):
                        sys.exit(f"scene '{sid}/{v['id']}' actor '{a['id']}': {track} times out of order")
                    if ts[-1] > v["duration"] + 1e-9:
                        sys.exit(f"scene '{sid}/{v['id']}' actor '{a['id']}': {track} runs past duration")
            for c in v["captions"]:
                if c["t"] > v["duration"] + 1e-9:
                    sys.exit(f"scene '{sid}/{v['id']}': caption at t={c['t']} is past duration")
            check_pivot_side(sid, v)

    data = {
        "rules": rules["rules"],
        "chapters": rules["chapters"],
        "definitions": rules["definitions"],
        "lessons": lessons,
        "basics": extras["basics"],
        "situations": extras["situations"],
        "synonyms": extras["synonyms"],
        "scenes": scenes,
    }

    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    # stop the inlined JSON from being able to terminate the <script> block
    payload = payload.replace("</", "<\\/")

    with open(os.path.join(HERE, "src", "template.html"), encoding="utf-8") as f:
        tpl = f.read()
    if "/*__DATA__*/" not in tpl:
        sys.exit("template is missing the /*__DATA__*/ placeholder")

    body = tpl.replace("/*__DATA__*/", payload)
    page = HEAD.format(title=TITLE, desc=DESC, favicon=FAVICON_SVG) + body + FOOT

    os.makedirs(DIST, exist_ok=True)
    dest = os.path.join(DIST, "index.html")
    with open(dest, "w", encoding="utf-8") as f:
        f.write(page)

    version = format(zlib.crc32(page.encode("utf-8")) & 0xFFFFFFFF, "08x")
    with open(os.path.join(DIST, "sw.js"), "w", encoding="utf-8") as f:
        f.write(SW.format(version=version))
    with open(os.path.join(DIST, "manifest.webmanifest"), "w", encoding="utf-8") as f:
        json.dump(MANIFEST, f, indent=2)
    # tell GitHub Pages to serve the files as-is
    open(os.path.join(DIST, ".nojekyll"), "w").close()
    # read by Cloudflare Pages, ignored by GitHub Pages. index.html and the
    # service worker must not be held in an edge cache or a build can take a
    # day to reach anyone; the icons never change within a build.
    with open(os.path.join(DIST, "_headers"), "w", encoding="utf-8") as f:
        f.write(HEADERS)

    for size in (180, 192, 512):
        write_png(os.path.join(DIST, f"icon-{size}.png"), size, GROUND, ACCENT)

    print(f"built {DIST}")
    print(f"  {len(data['rules'])} rules, {len(data['chapters'])} chapters, "
          f"{len(data['definitions'])} definitions")
    print(f"  {len(lessons)} daily lessons, {len(data['situations'])} common questions")
    print(f"  {len(scenes)} animated scenes, {n_variants} scenario variants")
    print(f"  index.html {os.path.getsize(dest)/1024:.0f} KB  ·  sw version {version}")


if __name__ == "__main__":
    main()
