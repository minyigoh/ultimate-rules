# Daily render task — prompt of record

This is the prompt behind the daily Cowork scheduled task. Kept here so it is
version-controlled and reviewable alongside the pipeline it drives; edit here
first, then paste into the task.

---

## Read this first: what this sandbox cannot do

The scheduled-task sandbox is **not** the same environment as an interactive
Cowork chat. Measured on 2026-08-10:

- **No outbound network.** No DNS for `github.com`; the HTTP proxy reaches only
  Anthropic hosts. `git pull` and `git push` **cannot work here.** Interactive
  chat sessions *do* have network — that asymmetry is why the repo history
  shows successful pulls from `minyigoh` but never from `daily-reel-render`.
- **No file deletion.** The workspace mount allows create and write but not
  unlink. So stale `v4/` frames can never be cleared in place, and
  `social/dashboard/build_desk.py` fails outright (it opens with
  `shutil.rmtree`).
- **`mcp__workspace__web_fetch` does work**, including
  `raw.githubusercontent.com`. That is the only way this run can see the truth.

On 2026-08-08–10 these limits silently produced three days of wrong output: the
run read a checkout frozen days earlier, found nothing to do, and reported a
clean queue while three rejected reels sat unbuilt. Everything below exists to
make that impossible to repeat.

---

## Step 0 — Establish authoritative state. Non-negotiable.

Before reading anything local, fetch both of these over `web_fetch`:

- `.../main/content/calendar.md?cb=<timestamp>`
- `.../main/content/review-state.json?cb=<timestamp>`

on `https://raw.githubusercontent.com/minyigoh/ultimate-rules`.

**The `?cb=` cache-buster is required, not decorative.** raw.githubusercontent
is CDN-cached for several minutes and will happily serve you a copy from before
the Worker's most recent commit — which is the exact failure mode this step
exists to prevent. Use a fresh value each run (e.g. `?cb=20260810T0310`).
Verified on 2026-08-10: the bare URL returned a state three commits old while
the cache-busted URL returned current.

**The GitHub copy is the truth. The local checkout is a cache and is very
likely stale** — Min-Yi approves and rejects from the Content Desk during the
day and a Cloudflare Worker commits those decisions straight to `main`.

Then:

- Diff the two. If they differ, say so explicitly in your report and work from
  the GitHub copy.
- **If `web_fetch` fails for either file, STOP.** Do not build, do not
  regenerate, and do not report on queue health — you cannot see the queue.
  Report the fetch failure as the entire result of the run. Never let "I could
  not check" turn into "there is nothing to do."
- Never conclude "nothing to build" from local files alone.

Read `content/CONTENT_REVIEW.md` for the two-gate approval process, status
vocabulary and feedback format.

## Step 1 — Build the worklists

From the **authoritative** calendar, process every matching row this run:

- **New builds:** every row at "Script approved" with no rendered asset in a
  matching `content/reel-N/` or `content/carousel-post-N/`. Build ahead of the
  post date — buffer for a review round trip is expected.
- **Regenerations:** every row at "Content rejected — regenerate". Feedback is
  in that post's `feedback.md`; work the latest round with no `Regenerated:`
  line. Note that the desk appends a fresh round per rejection, so the same
  complaint can appear two or three times — address it once and say which
  rounds you covered.

If both lists are genuinely empty *after* a successful Step 0, skip to Step 7
and report.

## Step 2 — Locate approved copy (new builds only)

- Use `content/reel-N/script-and-caption.md` if it exists.
- Otherwise pull the matching topic section from `content/pending-review/`
  (e.g. `week-1-reels.md`) and create the per-post file following
  `content/reel-1/script-and-caption.md`'s structure exactly. N = next unused
  number for that content type.

**Never invent, edit or paraphrase script/caption copy.** If a queued topic has
no approved copy anywhere, skip the row and flag that it needs batch approval.

## Step 3 — Build reels

**Render into a scratch directory under `/tmp`, never into the repo's `v4/`.**
This sandbox cannot delete, so a repo-side `v4/` accumulates stale frames from
previous runs and `blend.py` skips any transition frame that already exists
(`if not os.path.exists(f)`). Copy `render_v3.py`, `blend.py` and `encode.py`
into `/tmp/work/reel-N/`, along with `rules.json` at the parent level, build
there, and copy only the finished `.mp4` back into the repo.

- Edit **only** the `SCENES` list: cover (hook), alternating topic-explainer /
  rules-detail pairs, a field-tip scene, and a closing scene ("Lesson N of 75" +
  "Follow @learn.ultimatefrisbee").
- Rule numbers come from the lesson's `rules` array in
  `content/lessons-{1,2,3}.json`; rule **text** is pulled programmatically from
  `content/rules.json` (`RULE[num]["text"]`). Never hand-type or paraphrase it.
- Do not change any shared constant — MARGIN, 1080×1350 letterboxed into
  1080×1920, font sizes, `mini_icon`, `#0F1712`/`#E24A12`/`#F1F3EE`, header
  layout. These come from `content/carousel-post-1/make_carousel.py` and must
  stay pixel-identical across every asset.
- Sub-rule numbers (e.g. "14.1.1") render on their own line in the same orange
  bold 22px as the parent "RULE X.X · CHAPTER" label — follow `g_detail()`.
- **Do not hand-tune the per-scene durations in `SCENES`.** The `retime()` /
  `fit()` pass rewrites them (see `content/REEL_TIMING.md`). Leave any plausible
  placeholder. If the printed projection lands outside ~28–33s, drop a topic
  block rather than editing constants.
- `IN_SCENE` and `BETWEEN` must stay identical across `render_v3.py`,
  `blend.py` and `encode.py`.

### Encoding — use `encode.py`, never a raw concat command

Run `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.

Do **not** encode with `-f concat -i concat.txt -vf fps=30`. The concat demuxer
quantises every `duration` onto a 0.04s grid (image2's 25fps default), so
adjacent entries collide on identical timestamps and a 50%-opacity crossfade
frame inherits the finished slide's read time. That is the "orange text looks
dull until just before the page flips" bug rejected on reels 5–7.
`encode.py` sidesteps demuxer timing entirely by emitting exact CFR — each
frame repeated `round(duration*30)` times. `concat_build.py` is retained only
for reference.

Save as `content/reel-N/reelN-<slug>.mp4` — no dash between "reel" and the
number.

## Step 4 — Build carousels

Same principle, static slides. Copy `content/carousel-post-1/make_carousel.py`
into `/tmp`, adapt only topic content — headlines, slide count, rule citations —
per `content/CAROUSEL_TEMPLATE.md` (cover → optional context/diagram slides →
numbered topic/rules-detail pairs → closing). Visual system stays
pixel-identical. Rule text verbatim from `rules.json`. Render SVG→PNG with
`convert -background "#0F1712" in.svg -resize <2.083x>! out.png`. Save as
`NN_description.png` plus a `caption.md` following carousel-post-1's structure.

## Step 5 — Verify before you believe it

A file existing is not evidence it is correct. For every asset you built or
regenerated:

- Confirm duration lands in ~28–33s.
- **Measure, don't eyeball.** Sample frames and check that no orange element
  sits below ~R200 for more than ~0.45s consecutively (anything longer is a
  stuck crossfade, not the intended 0.4s scene blend). Isolate elements by row
  band — a whole-frame maximum will always read full because of the header
  logo, which is exactly how this bug survived earlier checks.
- If a regeneration does not measurably improve on the cut it replaces, do not
  ship it. Report the measurement and stop.

### Feedback you must NOT act on

If feedback needs different *words* — a new hook, reworded caption, different
example — leave the row at "Content rejected — regenerate", change nothing, and
flag that it is blocked on a copy fix from Min-Yi. Only visual/rendering
execution is yours to change.

Before overwriting an asset, archive the current version alongside it with the
next unused `.vN` suffix. The unsuffixed filename always holds the newest cut.
Append `Regenerated: <today> (daily-reel-render)` to the feedback round you
addressed, plus a one-line cause note.

## Step 6 — Record state in all three places

**6a. `content/calendar.md`** — rows you built or successfully regenerated go to
"Content pending review". Never set "Ready to post" or "Posted" — those are
Min-Yi's alone. Rows blocked on copy keep their existing status.

**6b. `content/review-state.json`** — read, modify only your posts' keys, write
back. **Never overwrite wholesale**; it also holds desk approvals. For each post
rendered:

```json
"reel-3": {"content": {"status": "in-review", "note": "", "tags": [],
                       "updatedAt": "<ISO 8601 UTC>"}}
```

Maintain a `revisions` array, newest last, one entry per cut. The last entry's
`file` is the unsuffixed primary; earlier entries point at their `.vN`
archives — update an older entry's `file` when it gets archived. `changed` must
state concretely what differs ("Retimed to the house rhythm; 39.1s to 30.0s"),
never "regenerated per feedback".

**6c. `social/dashboard/data.js`** — for each post rendered set `folder`,
`video`, `typeDetail`, `duration`, `source`, `scenes`, and
`review.content = {status: 'in-review', on: '<today>'}`; drop stale `notes`
saying the video is still to render. Plain JavaScript — a syntax error breaks
the whole desk. Check it parses (`node --check`) and if its structure doesn't
match, leave it alone and flag it.

**6d. Rebuild the desk** — `python social/dashboard/build_desk.py`. **This will
fail in this sandbox** (`shutil.rmtree` → PermissionError). That is expected;
it runs from `tools/sync.bat` in Step 7 instead. Do not try to work around it.

## Step 7 — Publish (you cannot do this alone)

You have no network. Do not fake success and do not silently skip this.

1. Write the commit message to `_commit_msg.txt` in the repo root — subject on
   line 1, blank line, then body.
2. Report, in the first line of your output, that **a push is required** and
   that Min-Yi should double-click `tools\sync.bat`. That script clears stale
   git locks, pulls with rebase, rebuilds the desk, stages the explicit paths
   only, commits with your message, rebases again and pushes.
3. If you are running inside an interactive chat rather than the schedule, you
   may instead drive `tools\sync.bat` yourself via File Explorer with
   computer-use, then read `tools\_last_sync.log` and report the resulting SHA.

**Never `git add content` wholesale and never commit `v4/`** — one run's frames
are ~1,800 files and 116 MB. `.gitignore` covers them; explicit paths keep it
that way.

Until `tools\sync.bat` runs, nothing you built is visible to GitHub or the
Content Desk. A render nobody can see is the same as no render.

## Step 8 — Report

State plainly: what was built, what was regenerated (with the feedback each
addressed and the before/after measurement), what is blocked on a copy fix,
what now sits in "Content pending review", and **whether the push has
happened** — SHA if yes, "PUSH REQUIRED" if not.

Also flag if either is true:

- Fewer than 2 rows are "Ready to post" — the queue is running low.
- Zero rows are in "Script approved", "Content pending review" or "Content
  rejected — regenerate" — the pipeline is empty and a new batch of 7 needs
  script approval, pulled in curriculum order from the lessons JSONs and
  formatted like `content/pending-review/week-1-reels.md`. Do not draft it
  yourself; new copy needs her approval first.

## Constraints

- Never post to any social platform — there is no posting integration.
- Never mark anything "Ready to post" or "Posted".
- Never invent, edit or paraphrase script/caption copy.
- Never commit intermediate render output; never `git add` a whole directory.
- Never overwrite `review-state.json` wholesale.
- Every rules card quotes WFDF text verbatim from `rules.json`, with the
  "WFDF Rules of Ultimate 2025–2028" + rule-number footer.
- No growth, reach or virality promises anywhere.
- Never report a healthy queue you did not actually verify against GitHub.
- This run is non-interactive — do not wait for confirmation, but do not skip a
  constraint to move faster.
