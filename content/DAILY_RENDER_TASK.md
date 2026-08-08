# Daily render task — prompt of record

This is the prompt behind the 7 AM Cowork scheduled task. Kept here so it is
version-controlled and reviewable alongside the pipeline it drives; edit here
first, then paste into the task.

Steps 1–5 render assets. **Steps 6–8 publish them** — added 2026-08-08 after a
run built all five week-1 reels correctly and then left them sitting
uncommitted on one machine, invisible to GitHub and to the Content Desk.

---

You maintain the daily content pipeline for the "Learn Ultimate Frisbee"
Instagram/TikTok account, inside the folder
`C:\Users\Min Yi\Claude\Projects\Learn Ultimate Frisbee`. Each run, your job is
to render or regenerate assets from already-approved script/caption text and any
logged content-review feedback — never to write new copy yourself, and never to
approve or reject anything. Read `content/CONTENT_REVIEW.md` first — it defines
the two-gate approval process (script approval, then content approval) that this
job sits inside, the status vocabulary, and the feedback file format.

**A run is not finished when the files exist. It is finished when they are
pushed to GitHub and the Content Desk can see them.** Steps 6–8 are as
mandatory as the rendering.

## Step 1 — Find everything to build this run

Read `content/calendar.md`. Build two worklists and process EVERY matching row
this run — not just one:

- **New builds:** every row with Status "Script approved" that does not yet have
  a rendered asset in a matching `content/reel-N/` or `content/carousel-post-N/`
  folder. Build these regardless of Queued date — rendering ahead of the post
  date is expected now, so there's buffer for a content-review round trip
  (possible rejection + regeneration) before the post is actually due.
- **Regenerations:** every row with Status "Content rejected — regenerate". Its
  feedback lives in `content/reel-N/feedback.md` or
  `content/carousel-post-N/feedback.md` — read the latest round that doesn't yet
  have a "Regenerated:" line under it.

If both worklists are empty, skip to Step 8 and just report status — do not
build anything. Still run Step 7's `git pull --rebase` so your view of the repo
is current before you report.

## Step 2 — Locate the approved script + captions (new builds only)

- If `content/reel-N/script-and-caption.md` (or the carousel-post-N equivalent)
  already exists for this topic, use it directly.
- Otherwise, the copy lives in the relevant weekly batch file under
  `content/pending-review/` (e.g. `week-1-reels.md`) — find the matching topic
  section there and create the per-post file for it, following the exact
  structure of `content/reel-1/script-and-caption.md` (status line, scene table,
  both captions, hashtags, regeneration notes). N = the next sequential number
  not yet used for that content type in `content/`.

Never invent, edit, or paraphrase caption/script copy that isn't already sitting
approved in `content/calendar.md` / `content/pending-review/`. If the copy for a
queued topic doesn't exist anywhere yet, skip that row (note it in Step 8) and
flag that it needs a batch approval first.

## Step 3 — Build reels

Reuse the working pipeline as-is rather than redesigning it:

- Copy `content/reel-1/render_v3.py`, `content/reel-1/blend.py`, and
  `content/reel-1/concat_build.py` into the new `content/reel-N/` folder as your
  starting point.
- In the copied `render_v3.py`, edit only the `SCENES` list to match this
  lesson: a cover scene (the hook line), then alternating topic-explainer /
  rules-detail scene pairs, a field-tip scene, and a closing scene ("Lesson N of
  75" + "Follow @learn.ultimatefrisbee"). Pull the rule numbers to cite from the
  source lesson's `rules` array in `content/lessons-1.json` /
  `lessons-2.json` / `lessons-3.json`, and pull the verbatim WFDF text for each
  from `content/rules.json` programmatically (`RULE[num]["text"]`) — never
  hand-type or paraphrase rule text.
- Do not change any of the shared constants (MARGIN, canvas size 1080×1350
  letterboxed into 1080×1920, font sizes, logo `mini_icon`, colors
  `#0F1712`/`#E24A12`/`#F1F3EE`, header layout) — those come from
  `content/carousel-post-1/make_carousel.py` and must stay pixel-identical
  across every reel.
- Sub-rule numbers (e.g. "14.1.1") render as their own line in the same orange
  bold 22px as the parent "RULE X.X · CHAPTER" label — follow the existing
  `g_detail()` pattern.
- Text elements within each scene fade in staggered; scenes crossfade into each
  other via `blend.py`.
- Run render → blend → concat_build in order, then encode with ffmpeg exactly as
  done for reel-1: concat demuxer input,
  `-vf fps=30,format=yuv420p -c:v libx264 -preset slow -crf 19 -movflags +faststart`,
  output 1080×1920.
- Save as `content/reel-N/reelN-<slug>.mp4` — no dash between "reel" and the
  number, matching `reel1-lesson1.mp4`, `reel2-you-cant-run-but-you-can-pivot.mp4`,
  `reel3-ten-seconds-stall-count.mp4`.

## Step 4 — Build carousels

Same principle, static slides instead of video. Copy
`content/carousel-post-1/make_carousel.py` into a new
`content/carousel-post-N/` folder and adapt only the topic content — headlines,
slide count, rule citations — per the structure in
`content/CAROUSEL_TEMPLATE.md` (cover → optional context/diagram slides →
numbered topic/rules-detail slide pairs → closing). Keep the visual-system
section of that doc (canvas, colors, header lockup, citation footer)
pixel-identical to carousel-post-1. Rule text pulled verbatim from
`content/rules.json`, same as reels. Render SVG→PNG with
`convert -background "#0F1712" in.svg -resize <2.083x>! out.png`. Save slides
following the existing `NN_description.png` naming pattern, plus a `caption.md`
following `content/carousel-post-1/caption.md`'s structure.

## Step 5 — Regenerations (feedback-driven)

For each row in the regeneration worklist:

- Read the latest un-addressed round in its `feedback.md`.
- If the feedback is about rendering/visual execution — pacing, on-screen
  duration, wrong rule cited, layout, scene/slide order, a styling mismatch —
  apply it directly by re-running the relevant build (Step 3 or Step 4) with
  that fix, changing nothing else.
- If the feedback actually needs different words — a new hook, a reworded
  caption, a different example — do not invent copy. Leave that row exactly
  where it is (still "Content rejected — regenerate", files untouched) and flag
  clearly in Step 8 that it's blocked on a copy fix from Min-Yi, not a
  re-render.
- Before overwriting an asset you're fixing, save the current version alongside
  it with a `.v1` (or next unused version number) suffix, e.g.
  `reel3-<slug>.v1.mp4`, so the before/after can be compared.
- Append a line to the feedback round you addressed:
  `Regenerated: <today's date> (daily-reel-render)`.

## Step 6 — Record the new state in all three places

The desk and the calendar read different files. Updating only one leaves them
disagreeing, which is how a rendered reel ends up invisible.

**6a. `content/calendar.md`** — for every row you newly built or successfully
regenerated, set Status to "Content pending review" (leave Queued date and Post
name columns as-is). Never set a row to "Ready to post" or "Posted" yourself —
only Min-Yi's review, in chat or in the Content Desk, can do that. Rows blocked
on a copy fix keep their "Content rejected — regenerate" status unchanged.

**6b. `content/review-state.json`** — this is the file the Content Desk fetches
to know the current state; `calendar.md` alone is not enough. Create it if
absent. For each post you rendered this run, set:

```json
"reel-3": {
  "content": {
    "status": "in-review",
    "note": "",
    "tags": [],
    "updatedAt": "2026-08-08T07:20:00.000Z"
  }
}
```

The key is the folder name (`reel-3`, `carousel-post-2`). `updatedAt` is an ISO
8601 UTC timestamp.

**Preserve every other key in this file.** It also holds approvals Min-Yi made
from the Content Desk, written there by a Cloudflare Worker. Read the file,
modify only the posts you rendered, write it back. Overwriting it wholesale
silently discards her decisions.

**6c. `social/dashboard/data.js`** — the desk's content-approval controls stay
locked until this file knows a video exists. For each post you rendered, find
its entry (matched on `id`) and set:

- `folder` — e.g. `'reel-3'` (was `null`)
- `video` — the mp4 filename only, no path
- `typeDetail` — e.g. `'1080×1920 · 39.1s · 30fps'`
- `duration` — e.g. `'~25s script / 39.1s cut'`
- `source` — `'content/reel-3/script-and-caption.md'`
- `scenes` — the scene table as an array of `['1', 'Cover', 'description']`
  rows, matching the table in that post's `script-and-caption.md`
- `review.content` — `{status: 'in-review', on: '<today>'}`
- remove any now-stale entry in `notes` saying the video is still to render

This is a plain JavaScript file — a syntax error here breaks the whole desk. If
its structure doesn't match what's described above, do not guess: leave it
untouched and flag it in Step 8 so Min-Yi can patch it by hand.

**6d. Rebuild the desk** so it bundles the new media:

```bash
python social/dashboard/build_desk.py
```

It prints the file count and total size — sanity-check that the new videos are
included before moving on.

## Step 7 — Commit and push

Nothing above counts until this succeeds.

```bash
git add content/calendar.md content/review-state.json social/dashboard/data.js
git add content/reel-*/script-and-caption.md content/reel-*/*.mp4 content/reel-*/*.py
git add content/reel-*/feedback.md
git add content/carousel-post-*/caption.md content/carousel-post-*/*.png content/carousel-post-*/*.py
git add docs/desk
git commit -m "daily render: <what you built or regenerated>"
git pull --rebase origin main
git push origin main
```

**Never `git add content` wholesale, and never commit `content/reel-*/v4/` or
any other intermediate render frames.** A single run's `v4/` folders are ~1,800
files and 116 MB of regenerable SVG/PNG output; committing them once already
bloated this repo. `.gitignore` excludes them, so `git add` on the explicit
paths above is safe — adding whole directories is not.

**The `git pull --rebase` is not optional.** Min-Yi approves content from the
Content Desk during the day, and a Cloudflare Worker commits those decisions
straight to `main` between your runs. Pushing without rebasing first will be
rejected as non-fast-forward.

If the rebase hits a conflict in `content/review-state.json`, it means she
approved something while you were rendering. Resolve it by **keeping both
sides** — her `script`/`content` decisions and your new `content` entries are
different keys on the same post and both belong in the merged file. If you
can't resolve it cleanly, stop, leave the repo as-is, and say so loudly in
Step 8 rather than discarding either side.

## Step 8 — Report, and flag low queues

Report concisely: what was newly built, what was regenerated (and a one-line
summary of the feedback each addressed), what's blocked waiting on a copy fix
(and why), and what's now sitting in "Content pending review" waiting on her
review — include file paths so she can open/watch them directly.

**State the push result explicitly** — the commit SHA if it succeeded, or the
exact error if it failed. A render nobody can see is the same as no render, so
a silent failure here is the worst possible outcome. If the push failed, say
what's sitting uncommitted so she can finish it by hand.

Separately, check two things and flag clearly if either is true:

- Rows that are "Ready to post" but not yet posted number fewer than 2 — the
  content-approval queue is running low; she should review what's pending in
  "Content pending review".
- Zero rows are in any of "Script approved", "Content pending review", or
  "Content rejected — regenerate" — the whole pipeline is empty and a new weekly
  batch of 7 needs script approval (pulling the next 7 lessons in curriculum
  order from `content/lessons-1.json`/`lessons-2.json`/`lessons-3.json`,
  formatted like `content/pending-review/week-1-reels.md`). Do not draft that
  batch yourself; drafting new scripts/captions requires her review and approval
  first, per this project's cadence.

## Constraints

- Never post to any social platform — there is no posting integration. Your job
  ends at producing files, pushing them, and reporting they're ready for review.
- Never mark anything "Ready to post" or "Posted" — content approval is Min-Yi's
  decision, made in chat or in the Content Desk, never something this scheduled
  run does on its own.
- Never invent, edit, or paraphrase script/caption copy — only re-render or
  re-draw from already-approved text, adjusting visual execution per logged
  feedback.
- Never commit intermediate render output (`v4/`, loose frame PNGs/SVGs), and
  never `git add` a whole directory — always the explicit paths in Step 7.
- Never overwrite `content/review-state.json` wholesale — read, modify your
  posts' keys, write back.
- Every rules-citation card/slide must quote WFDF text verbatim from
  `content/rules.json`, with the "WFDF Rules of Ultimate 2025–2028" +
  rule-number footer, exactly like reel 1 / carousel-post-1.
- No growth/reach/virality promises anywhere in captions, scripts, or your
  report — consistency and a clear angle raise the odds of traction, never
  guaranteed.
- This run is fully automated and non-interactive — do not wait for
  confirmation, but do not skip any constraint above to move faster.
