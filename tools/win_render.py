"""Build a reel or a carousel on Windows when the render sandbox will not mount.

Why this exists
---------------
The sandbox failed to mount on 2026-09-08, 09-09 and 09-10, and each of those
days the render had to be reconstructed by hand against a deadline. This is that
reconstruction, committed, so a blocked morning costs one command instead of an
afternoon. It is a *fallback*: when the sandbox is healthy, use it, because it is
the environment every gate was written against.

What it substitutes, and why each substitution is safe
------------------------------------------------------
Three pieces of the documented pipeline are missing on Windows. None of them is
faked -- each is replaced by something measured against shipped output.

1. **ImageMagick -> headless Chrome/Edge.** `convert` is not installed, and
   `convert` on Windows resolves to the system FAT-to-NTFS utility, which must
   never be invoked. The SVGs are rasterised by whichever Chromium is on the
   machine, through an HTML wrapper that pins the SVG to exact pixel dimensions.
   The wrapper is not cosmetic: loading an SVG as a top-level document lets the
   viewport scale it, which on carousel-post-5 moved text by up to 3 rows and 8
   columns. With the wrapper, the same eight slides come back with zero row
   shift, at most one pixel of column shift, and a mean absolute difference of
   2.06-2.79 of 255 against their shipped ImageMagick PNGs -- glyph antialiasing
   and nothing else. `verify_renderer()` below re-runs that comparison on demand.

2. **Liberation Sans -> Arial.** Liberation is not installed on Windows. Arial is
   metric-compatible with it, so advance widths are identical and `fit_kicker`,
   `fit_body` and `check_layout` all take the same decisions. Only the scratch
   copy of the render script is repointed; the committed copy keeps the
   Liberation path so a sandbox run reproduces it unchanged.

3. **A discovered ffmpeg.** encode.py's arguments are never touched -- same
   rawvideo input, libx264 at crf 19, yuv420p, faststart -- only the executable
   is resolved. Set FFMPEG to override the search.

What it does NOT do
-------------------
It does not write `data.js`, `calendar.md`, `review-state.json`, or the additions
queue, and it does not commit or push. Recording state means writing prose -- the
`changed` line, the notes -- against what the gates actually said, and that is a
judgement call per run. Build here, then record, then `tools\\sync.bat`.

Usage
-----
    python tools/win_render.py reel-38
    python tools/win_render.py carousel-post-7
    python tools/win_render.py reel-38 --keep       # leave the scratch tree
    python tools/win_render.py reel-38 --no-install # build but don't copy back
    python tools/win_render.py --verify-renderer    # re-run the fidelity check
"""
import argparse
import glob
import json
import os
import re
import runpy
import shutil
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(REPO, "content")
BG = "#0F1712"

REEL_W, REEL_H = 1080, 1920
CAROUSEL_W, CAROUSEL_H = 2250, 2812      # 1080x1350 * 2.083, per Step 5

# Blue-dominant pixels as a share of the frame. Clean renders measure 0.0000%;
# an LCD-subpixel render of the same frame measured 0.5253%.
FRINGE_LIMIT = 0.02

LIBERATION_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
ARIAL_BOLD = "C:/Windows/Fonts/arialbd.ttf"

BROWSERS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]

# ffmpeg is not installed on this machine. These are builds that ship inside
# apps the user already has; the search is ordered newest-known-first. Prefer a
# real install if one ever appears -- PATH is checked before any of these.
FFMPEG_FALLBACKS = [
    r"C:\Users\{user}\AppData\Local\Programs\Ukeysoft Apple Music Converter\resources\ffmpeg.exe",
    r"C:\Program Files\TuneFab Apple Music Converter\ffmpeg.exe",
]


def die(msg):
    raise SystemExit("win_render: " + msg)


def find_browser():
    override = os.environ.get("LU_BROWSER")
    if override:
        if not os.path.isfile(override):
            die("LU_BROWSER is set but %s does not exist" % override)
        return override
    for p in BROWSERS:
        if os.path.isfile(p):
            return p
    die("no Chrome or Edge found. Set LU_BROWSER to a Chromium executable.")


def find_ffmpeg():
    override = os.environ.get("FFMPEG")
    if override:
        if not os.path.isfile(override):
            die("FFMPEG is set but %s does not exist" % override)
        return override
    on_path = shutil.which("ffmpeg")
    if on_path:
        return on_path
    user = os.environ.get("USERNAME", "")
    for p in FFMPEG_FALLBACKS:
        p = p.format(user=user)
        if os.path.isfile(p):
            return p
    die("no ffmpeg found. Install one, or set FFMPEG to an ffmpeg.exe.")


def font_file():
    """The bold face check_layout and the render scripts measure with."""
    if os.path.isfile(LIBERATION_BOLD):
        return LIBERATION_BOLD, False
    if os.path.isfile(ARIAL_BOLD):
        return ARIAL_BOLD, True
    die("neither Liberation Sans nor Arial is installed; cannot measure layout.")


# ---------------------------------------------------------------- rasterising

def _wrapper_html(svg_text, w, h):
    """Pin the SVG to exact pixel dimensions inside a zero-margin page.

    Without the explicit width/height and the margin reset, the viewport scales
    the drawing and every measurement in check_layout stops describing the PNG.
    """
    svg = svg_text.replace(
        'font-family="Liberation Sans"',
        'font-family="Liberation Sans, Arial, Helvetica, sans-serif"')
    svg = re.sub(r"<svg ", '<svg width="%d" height="%d" ' % (w, h), svg, count=1)
    return ("<!doctype html><meta charset=\"utf-8\">"
            "<style>html,body{margin:0;padding:0;overflow:hidden;background:%s}"
            "svg{display:block}</style>%s" % (BG, svg))


def rasterise(svg_paths, png_dir, w, h, workdir, browser, jobs=4):
    """SVG -> PNG at exactly w x h, standing in for `convert -resize WxH!`."""
    # Absolute throughout: the browser resolves --screenshot and the page URL
    # against its own working directory, not ours.
    png_dir = os.path.abspath(png_dir)
    workdir = os.path.abspath(workdir)
    os.makedirs(png_dir, exist_ok=True)
    html_dir = os.path.join(workdir, "_wrap")
    os.makedirs(html_dir, exist_ok=True)

    def one(i_svg):
        i, svg = i_svg
        svg = os.path.abspath(svg)
        stem = os.path.splitext(os.path.basename(svg))[0]
        html = os.path.join(html_dir, stem + ".html")
        with open(html, "w", encoding="utf-8") as fh:
            fh.write(_wrapper_html(open(svg, encoding="utf-8").read(), w, h))
        png = os.path.join(png_dir, stem + ".png")
        # One profile per worker: concurrent headless runs sharing a user-data-dir
        # fight over the lock and some of them silently write nothing.
        prof = os.path.join(workdir, "_prof%d" % (i % jobs))
        r = subprocess.run(
            [browser, "--headless=new", "--disable-gpu", "--no-sandbox",
             "--hide-scrollbars", "--force-device-scale-factor=1",
             # Grayscale text antialiasing, not LCD subpixel. Without this every
             # glyph gets red and blue fringes; they are barely visible by eye but
             # they are red-dominant pixels, so check_dull reads a whole band of
             # cream body text as dim orange and fails a clean cut. Caught on
             # reel-37 on 2026-09-10: a 6.07s "sustained dull-orange run" that was
             # nothing but subpixel fringing on the body copy.
             "--disable-lcd-text", "--disable-font-subpixel-positioning",
             "--force-color-profile=srgb",
             "--user-data-dir=" + prof, "--window-size=%d,%d" % (w, h),
             "--screenshot=" + png, html],
            capture_output=True)
        if not os.path.isfile(png):
            die("headless render produced nothing for %s\n%s"
                % (stem, r.stderr.decode("utf-8", "replace")[:400]))
        return png

    with ThreadPoolExecutor(max_workers=jobs) as ex:
        out = list(ex.map(one, enumerate(sorted(svg_paths))))
    worst = max((_fringe_pct(p), p) for p in out)
    if worst[0] > FRINGE_LIMIT:
        die("subpixel text antialiasing is back: %.3f%% blue-fringed pixels in %s "
            "(limit %.3f%%). The palette is orange, cream and dark green, so a "
            "blue-dominant pixel can only be an LCD-text fringe. Check that this "
            "browser still honours --disable-lcd-text."
            % (worst[0], os.path.basename(worst[1]), FRINGE_LIMIT))
    print("  rasterised %d frame(s) at %dx%d, worst colour fringing %.3f%%"
          % (len(out), w, h, worst[0]))
    return out


def _fringe_pct(png):
    """Share of blue-dominant pixels: the signature of LCD subpixel text.

    Nothing in the brand palette is blue-dominant, so on a clean render this is
    0.0000%. With subpixel antialiasing on it was 0.5253% -- small enough to miss
    by eye, large enough to make check_dull read cream body copy as dim orange.
    """
    import numpy as np
    from PIL import Image
    a = np.asarray(Image.open(png).convert("RGB")).astype(int)
    return float(100.0 * ((a[:, :, 2] > a[:, :, 0] + 20).sum()) / a[:, :, 0].size)


def verify_renderer(browser):
    """Diff a headless render of carousel-post-5 against its shipped PNGs.

    carousel-post-5 is the reference because its SVGs and the ImageMagick PNGs
    built from them are both committed, so this is a real before/after and not a
    self-comparison. Run it after a browser update, or whenever the output looks
    off.
    """
    from PIL import Image, ImageChops
    ref = os.path.join(CONTENT, "carousel-post-5")
    svgs = sorted(glob.glob(os.path.join(ref, "*.svg")))
    if not svgs:
        die("carousel-post-5 has no SVGs to verify against")
    tmp = tempfile.mkdtemp(prefix="lu-verify-")
    try:
        rasterise(svgs, os.path.join(tmp, "png"), CAROUSEL_W, CAROUSEL_H, tmp, browser)
        worst_mean = worst_shift = 0
        print("  %-34s %8s %9s %9s" % ("slide", "meanAbs", "rowShift", "colShift"))
        for svg in svgs:
            stem = os.path.splitext(os.path.basename(svg))[0]
            a = Image.open(os.path.join(ref, stem + ".png")).convert("RGB")
            b = Image.open(os.path.join(tmp, "png", stem + ".png")).convert("RGB")
            if a.size != b.size:
                die("size mismatch on %s: %s vs %s" % (stem, a.size, b.size))
            h = ImageChops.difference(a, b).convert("L").histogram()
            n = sum(h)
            mean = sum(i * c for i, c in enumerate(h)) / n
            rs, cs = _shifts(a, b)
            worst_mean = max(worst_mean, mean)
            worst_shift = max(worst_shift, abs(rs), abs(cs))
            print("  %-34s %8.2f %9d %9d" % (stem[:34], mean, rs, cs))
        ok = worst_mean < 4.0 and worst_shift <= 1
        print("  %s  worst meanAbs %.2f of 255, worst shift %d px"
              % ("PASS" if ok else "FAIL", worst_mean, worst_shift))
        return 0 if ok else 1
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def _shifts(a, b, span=8):
    """Best row and column alignment between two images, in pixels."""
    import numpy as np
    ia = (np.asarray(a.convert("L"), dtype=np.int16) > 60).astype(np.int32)
    ib = (np.asarray(b.convert("L"), dtype=np.int16) > 60).astype(np.int32)

    def best(x, y):
        x = x - x.mean()
        y = y - y.mean()
        return max(range(-span, span + 1), key=lambda s: float(np.dot(x, np.roll(y, s))))

    return best(ia.sum(1), ib.sum(1)), best(ia.sum(0), ib.sum(0))


# ---------------------------------------------------------------------- gates

def run_check_layout(pattern, substituted):
    """The layout gate, unmodified. It picks up Arial itself when Liberation is absent."""
    if substituted:
        print("  (measuring with Arial; metric-compatible with Liberation Sans)")
    ns = runpy.run_path(os.path.join(REPO, "tools", "check_layout.py"),
                        run_name="check_layout")
    return ns["main"](pattern)


def run_check_dull(mp4, ffmpeg):
    path = os.path.join(REPO, "tools", "check_dull.py")
    real_popen = subprocess.Popen

    class Popen(real_popen):
        def __init__(self, args, *a, **k):
            if isinstance(args, (list, tuple)) and args and args[0] == "ffmpeg":
                args = [ffmpeg] + list(args[1:])
            super().__init__(args, *a, **k)

    subprocess.Popen = Popen
    try:
        ns = runpy.run_path(path, run_name="check_dull")
        return ns["main"](mp4)
    finally:
        subprocess.Popen = real_popen


def probe(mp4, ffmpeg):
    r = subprocess.run([ffmpeg, "-hide_banner", "-i", mp4], capture_output=True)
    txt = r.stderr.decode("utf-8", "replace")
    dur = re.search(r"Duration: (\d+):(\d+):([\d.]+)", txt)
    vid = re.search(r"Video: ([^\n]+)", txt)
    secs = None
    if dur:
        secs = int(dur.group(1)) * 3600 + int(dur.group(2)) * 60 + float(dur.group(3))
    return secs, (vid.group(1).strip() if vid else "?")


# --------------------------------------------------------------------- builds

def newest_copy(name):
    """The most recent reel folder carrying `name`, by reel number."""
    found = []
    for d in glob.glob(os.path.join(CONTENT, "reel-*")):
        m = re.match(r"reel-(\d+)$", os.path.basename(d))
        if m and os.path.isfile(os.path.join(d, name)):
            found.append((int(m.group(1)), os.path.join(d, name)))
    return max(found)[1] if found else None


def _stage(post_dir, build, required, borrowable=()):
    """Copy the pipeline scripts into a scratch tree, with rules.json one level up.

    The render scripts resolve rules.json as `<script dir>/../rules.json`, so the
    layout here has to mirror content/<post>/ inside content/.

    `borrowable` scripts are taken from the newest reel that has them when the
    post folder does not -- blend.py and encode.py are identical across reels and
    a folder often has only render_v3.py authored so far.
    """
    work = os.path.join(build, "work")
    os.makedirs(work, exist_ok=True)
    shutil.copy2(os.path.join(CONTENT, "rules.json"), os.path.join(build, "rules.json"))
    borrowed = []
    for n in required:
        src = os.path.join(post_dir, n)
        if not os.path.isfile(src):
            die("%s is missing from %s. Author it before building."
                % (n, os.path.relpath(post_dir, REPO)))
        shutil.copy2(src, os.path.join(work, n))
    for n in borrowable:
        src = os.path.join(post_dir, n)
        if not os.path.isfile(src):
            src = newest_copy(n)
            if not src:
                die("no copy of %s anywhere under content/reel-*/" % n)
            borrowed.append((n, os.path.relpath(src, REPO)))
        shutil.copy2(src, os.path.join(work, n))
    for n, where in borrowed:
        print("  borrowed %s from %s" % (n, where))
    return work, [n for n, _ in borrowed]


def _repoint_font(path, font, substituted):
    if not substituted:
        return
    s = open(path, encoding="utf-8").read()
    if LIBERATION_BOLD in s:
        open(path, "w", encoding="utf-8", newline="\n").write(s.replace(LIBERATION_BOLD, font))


def build_reel(post, post_dir, build, browser, ffmpeg, font, substituted):
    work, borrowed = _stage(post_dir, build, ["render_v3.py"], ["blend.py", "encode.py"])
    _repoint_font(os.path.join(work, "render_v3.py"), font, substituted)

    cwd = os.getcwd()
    os.chdir(work)
    try:
        print("  render_v3.py ...")
        real_run = subprocess.run

        def stub(args, *a, **k):
            # The only shell-out render_v3 makes is the ImageMagick rasterise,
            # which we do ourselves below. Anything else is unexpected.
            if isinstance(args, (list, tuple)) and args and args[0] == "convert":
                return subprocess.CompletedProcess(list(args), 0)
            return real_run(args, *a, **k)

        subprocess.run = stub
        try:
            runpy.run_path("render_v3.py", run_name="__main__")
        finally:
            subprocess.run = real_run

        svgs = sorted(glob.glob("v4/svg/*.svg"))
        if not svgs:
            die("render_v3.py wrote no SVGs")
        rasterise(svgs, "v4/png", REEL_W, REEL_H, work, browser)

        print("  blend.py ...")
        runpy.run_path("blend.py", run_name="__main__")

        out = _mp4_name(post, post_dir)
        print("  encode.py -> %s ..." % out)
        real_popen = subprocess.Popen

        class Popen(real_popen):
            def __init__(self, args, *a, **k):
                if isinstance(args, (list, tuple)) and args and args[0] == "ffmpeg":
                    args = [ffmpeg] + list(args[1:])
                super().__init__(args, *a, **k)

        subprocess.Popen = Popen
        try:
            ns = runpy.run_path("encode.py", run_name="encode")
            ns["main"](out, "slow")
        finally:
            subprocess.Popen = real_popen
        return os.path.abspath(out), os.path.abspath("v4/svg"), borrowed
    finally:
        os.chdir(cwd)


def _mp4_name(post, post_dir):
    """The filename the script record already committed to, if it names one."""
    md = os.path.join(post_dir, "script-and-caption.md")
    if os.path.isfile(md):
        m = re.search(r"`(" + re.escape(post.replace("-", "")) + r"[a-z0-9-]*\.mp4)`",
                      open(md, encoding="utf-8").read())
        if m:
            return m.group(1)
    die("no .mp4 filename found in %s/script-and-caption.md; the record has to "
        "name it before the render does" % post)


def build_carousel(post, post_dir, build, browser, font, substituted):
    work, _ = _stage(post_dir, build, ["make_carousel.py"])
    cwd = os.getcwd()
    os.chdir(work)
    try:
        print("  make_carousel.py ...")
        sys.argv = ["make_carousel.py", "svg"]
        runpy.run_path("make_carousel.py", run_name="__main__")
        svgs = sorted(glob.glob("svg/*.svg"))
        if not svgs:
            die("make_carousel.py wrote no SVGs")
        rasterise(svgs, "png", CAROUSEL_W, CAROUSEL_H, work, browser)
        return os.path.abspath("svg"), os.path.abspath("png")
    finally:
        os.chdir(cwd)


def archive_existing(dst):
    """Keep the cut being replaced, per Step 6: the unsuffixed name is newest."""
    if not os.path.isfile(dst):
        return None
    stem, ext = os.path.splitext(dst)
    n = 1
    while os.path.isfile("%s.v%d%s" % (stem, n, ext)):
        n += 1
    archived = "%s.v%d%s" % (stem, n, ext)
    shutil.move(dst, archived)
    return archived


# ----------------------------------------------------------------------- main

def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("post", nargs="?", help="reel-NN or carousel-post-N")
    ap.add_argument("--keep", action="store_true", help="leave the scratch tree in place")
    ap.add_argument("--no-install", action="store_true",
                    help="build but do not copy artefacts into content/")
    ap.add_argument("--verify-renderer", action="store_true",
                    help="diff a headless render of carousel-post-5 against its shipped PNGs")
    args = ap.parse_args(argv)

    browser = find_browser()
    print("browser: %s" % browser)

    if args.verify_renderer:
        return verify_renderer(browser)
    if not args.post:
        ap.error("a post id is required unless --verify-renderer is given")

    post = args.post.strip().strip("/\\")
    post_dir = os.path.join(CONTENT, post)
    if not os.path.isdir(post_dir):
        die("no such post folder: content/%s" % post)

    font, substituted = font_file()
    print("font   : %s%s" % (font, "  (standing in for Liberation Sans)" if substituted else ""))

    is_carousel = os.path.isfile(os.path.join(post_dir, "make_carousel.py"))
    is_reel = os.path.isfile(os.path.join(post_dir, "render_v3.py"))
    if is_carousel == is_reel:
        die("content/%s has %s render script; expected exactly one of "
            "make_carousel.py or render_v3.py" % (post, "both" if is_reel else "no"))

    ffmpeg = find_ffmpeg() if is_reel else None
    if ffmpeg:
        print("ffmpeg : %s" % ffmpeg)

    build = os.path.join(tempfile.gettempdir(), "lu-winrender", post)
    shutil.rmtree(build, ignore_errors=True)
    os.makedirs(build, exist_ok=True)
    print("build  : %s\n" % build)

    problems = 0
    try:
        if is_reel:
            mp4, svg_dir, borrowed = build_reel(post, post_dir, build, browser,
                                                ffmpeg, font, substituted)
            print("\ngates")
            problems += run_check_layout(os.path.join(svg_dir, "*.svg"), substituted)
            secs, stream = probe(mp4, ffmpeg)
            print("  container: %.2fs  %s" % (secs, stream))
            if not (28.0 <= secs <= 33.0):
                print("  FAIL duration %.2fs is outside the 28-33s window" % secs)
                problems += 1
            problems += run_check_dull(mp4, ffmpeg)
            installed = []
            if not args.no_install:
                dst = os.path.join(post_dir, os.path.basename(mp4))
                archived = archive_existing(dst)
                if archived:
                    print("\narchived previous cut as %s" % os.path.basename(archived))
                shutil.copy2(mp4, dst)
                installed.append(os.path.relpath(dst, REPO))
                # A reel folder is expected to carry its own blend/encode, the
                # way reel-36 does, so the borrowed copies land alongside the cut.
                for n in borrowed:
                    shutil.copy2(os.path.join(build, "work", n), os.path.join(post_dir, n))
                    installed.append(os.path.relpath(os.path.join(post_dir, n), REPO))
        else:
            svg_dir, png_dir = build_carousel(post, post_dir, build, browser, font, substituted)
            print("\ngates")
            problems += run_check_layout(os.path.join(svg_dir, "*.svg"), substituted)
            installed = []
            if not args.no_install:
                for f in sorted(glob.glob(os.path.join(svg_dir, "*.svg"))) + \
                         sorted(glob.glob(os.path.join(png_dir, "*.png"))):
                    dst = os.path.join(post_dir, os.path.basename(f))
                    shutil.copy2(f, dst)
                    installed.append(os.path.relpath(dst, REPO))

        print("\n%s" % ("BUILD OK" if problems == 0 else "BUILD FINISHED WITH %d PROBLEM(S)" % problems))
        if installed:
            print("installed %d file(s) into content/%s/" % (len(installed), post))
        if problems == 0:
            print("\nNext, by hand, because they are judgement calls:")
            print("  1. social/dashboard/data.js  - the rendered fields and "
                  "review.content = in-review")
            print("  2. content/_pending_additions.json - the render flip, with "
                  "builtFromScriptRev matching the approved script")
            print("  3. tools\\sync.bat")
        return 1 if problems else 0
    finally:
        if not args.keep:
            shutil.rmtree(build, ignore_errors=True)
        else:
            print("\nscratch kept at %s" % build)


if __name__ == "__main__":
    sys.exit(main())
