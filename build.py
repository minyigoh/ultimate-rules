"""Build the Learn Ultimate site from the template + parsed rules + authored lessons.

Usage:  python build.py
Output: docs/  — a static site ready for GitHub Pages, and openable straight
                 off disk. index.html is fully self-contained; the manifest,
                 service worker and icons are what make it installable and
                 usable offline on a phone.

The folder is named docs/ because GitHub Pages can only publish from a repo
root or from /docs — no other directory name works without a build action.
"""
import json, os, struct, sys, urllib.parse, zlib

HERE = os.path.dirname(os.path.abspath(__file__))
CONTENT = os.path.join(HERE, "content")
DIST = os.path.join(HERE, "docs")

TITLE = "Learn Ultimate — the rules, five minutes a day"
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
<meta name="apple-mobile-web-app-title" content="Learn Ultimate">
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
    "name": "Learn Ultimate",
    "short_name": "Ultimate",
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
  e.respondWith(
    caches.match(e.request, {{ ignoreSearch: true }}).then(hit => hit || fetch(e.request)
      .then(res => {{
        if (res.ok && new URL(e.request.url).origin === location.origin) {{
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy));
        }}
        return res;
      }})
      .catch(() => caches.match("./index.html")))
  );
}});
"""


# ------------------------------------------------------------------ build
def load(name):
    with open(os.path.join(CONTENT, name), encoding="utf-8") as f:
        return json.load(f)


def main():
    rules = load("rules.json")
    extras = load("extras.json")
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

    data = {
        "rules": rules["rules"],
        "chapters": rules["chapters"],
        "definitions": rules["definitions"],
        "lessons": lessons,
        "basics": extras["basics"],
        "situations": extras["situations"],
        "synonyms": extras["synonyms"],
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

    for size in (180, 192, 512):
        write_png(os.path.join(DIST, f"icon-{size}.png"), size, GROUND, ACCENT)

    print(f"built {DIST}")
    print(f"  {len(data['rules'])} rules, {len(data['chapters'])} chapters, "
          f"{len(data['definitions'])} definitions")
    print(f"  {len(lessons)} daily lessons, {len(data['situations'])} common questions")
    print(f"  index.html {os.path.getsize(dest)/1024:.0f} KB  ·  sw version {version}")


if __name__ == "__main__":
    main()
