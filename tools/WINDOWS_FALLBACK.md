# Building when the sandbox is down

The render sandbox failed to mount on 2026-09-08, 09-09 and 09-10. On each of
those mornings the build had to be reconstructed by hand against a same-day
deadline. `tools/win_render.py` is that reconstruction, committed.

This is a **fallback**. When the sandbox is healthy, use it — it is the
environment every gate in the pipeline was written against.

---

## Running it

Start here, which asks what is actually waiting to be built:

```bat
python tools\win_render.py --list
```

Then build all of it in one go, in post order:

```bat
python tools\win_render.py --all
```

Or name a single post:

```bat
python tools\win_render.py reel-38
python tools\win_render.py carousel-post-7
```

It builds in a scratch tree outside the repo, runs the gates, and copies the
finished assets into `content/<post>/`.

Useful flags:

| flag | what it does |
|---|---|
| `--list` | show what `--all` would build, and what it would skip and why |
| `--all` | build every approved post that has no cut yet |
| `--no-install` | build and gate, but do not copy anything into `content/` |
| `--keep` | leave the scratch tree so you can look at the frames |
| `--verify-renderer` | re-run the fidelity check described below, and stop |

It exits non-zero if any gate fails, so it is safe to put in a batch file.

**What `--all` will not touch.** It reads `review-state.json` and takes a post
only when the script track is approved, the content track is waiting on a build,
and the approval was stamped against the script version on disk. A post whose
script was redrafted after approval is skipped by name, with the reason, because
the approval is stale and the render flip would be refused anyway. So is a post
with no render script authored yet. Both show up in `--list`, so a quiet
`--list` output means the queue is genuinely empty rather than that something
went unnoticed.

## What it needs on the machine

- **Python with Pillow and numpy.** Already present.
- **Chrome or Edge.** Both are installed. Override with `LU_BROWSER`.
- **ffmpeg**, for reels only. There is no ffmpeg installed here; the tool falls
  back to the build bundled inside the Ukeysoft converter. That is fragile — if
  you ever uninstall that app the reel path stops working. Installing a real
  ffmpeg and putting it on PATH is the durable fix, and the tool prefers PATH
  over any bundled copy. Override with `FFMPEG`.

## What it does not do

It does not touch `data.js`, `calendar.md`, `review-state.json` or the additions
queue, and it does not commit or push. Recording state means writing the
`changed` line and the notes against what the gates actually said, which is a
judgement call every time. So the run ends and you still do:

1. `social/dashboard/data.js` — the rendered fields, and
   `review.content = in-review`.
2. `content/_pending_additions.json` — the render flip, with
   `builtFromScriptRev` matching the version the desk approved.
3. `tools\sync.bat`.

---

## The three substitutions, and why they are safe

Three pieces of the documented pipeline do not exist on Windows. None is faked.

**ImageMagick becomes headless Chrome.** `convert` is not installed, and on
Windows `convert` resolves to the system FAT-to-NTFS utility, which must never
run. The SVGs go through an HTML wrapper that pins them to exact pixel
dimensions, then a headless screenshot.

The wrapper is load-bearing. Handing the SVG to the browser as a top-level
document lets the viewport scale it: on carousel-post-5 that moved text by up to
3 rows and 8 columns. With the wrapper, the same eight slides come back with
zero row shift, at most one pixel of column shift, and a mean absolute
difference of 2.06–2.79 of 255 against their shipped ImageMagick PNGs. That is
glyph antialiasing and nothing else.

`--verify-renderer` re-runs exactly that comparison. carousel-post-5 is the
reference because both its SVGs and the ImageMagick PNGs built from them are
committed, so it is a real before-and-after rather than a self-comparison. Run
it after a browser update, or any time the output looks off.

**Liberation Sans becomes Arial.** Liberation is not installed on Windows. Arial
is metric-compatible with it — identical advance widths — so `fit_kicker`,
`fit_body` and `check_layout` all take the same decisions. Only the scratch copy
of the render script is repointed; the committed copy keeps the Liberation path,
so a sandbox run reproduces it unchanged. `check_layout.py` picks Arial up on
its own when Liberation is absent, so it now runs on Windows directly too.

Both reel-37 and carousel-post-6 reproduced the sandbox's own dry-measure
numbers to the pixel under this substitution.

**ffmpeg is discovered rather than assumed.** `encode.py`'s arguments are never
touched — same rawvideo input, libx264 at crf 19, yuv420p, faststart. Only the
executable path is resolved.

---

## The subpixel trap

Headless Chrome defaults to LCD subpixel text antialiasing, which puts faint red
and blue fringes on every glyph. By eye it is nearly invisible. It is not
harmless: those fringes are red-dominant pixels, so `check_dull` reads a band of
cream body copy as dimmed orange. On reel-37 it reported a 6.07s sustained
dull-orange run on a cut that was otherwise perfect.

The tool passes `--disable-lcd-text`, `--disable-font-subpixel-positioning` and
`--force-color-profile=srgb`, and then measures the result: it counts
blue-dominant pixels, which nothing in the palette can produce, and refuses to
continue above 0.02% of the frame. A clean render measures 0.0000%; the fringed
one measured 0.5253%.

If a future Chrome stops honouring those flags, the build stops with that
message rather than shipping fringed frames.

Nothing already published carries this defect. Both carousel-post-6 and
reel-37 were built through a canvas path that used grayscale antialiasing, and
both measure 0.0000%.
