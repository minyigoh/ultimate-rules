# Daily render task — prompt of record

This is the prompt behind the daily Cowork scheduled task. Kept here so it is
version-controlled and reviewable alongside the pipeline it drives; edit here
first, then paste into the task.

The task drafts scripts, renders assets, and records state. It never approves
anything and never posts. Both approval gates belong to Min-Yi, and both are
worked from the Content Desk — not from chat.

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

Drafting copy needs none of that, so **Step 1 and Step 2 always work here.**
Only publishing (Step 8) is blocked.

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
- **If `web_fetch` fails for either file, STOP.** Do not draft, do not build,
  do not regenerate, and do not report on queue health — you cannot see the
  queue. Report the fetch failure as the entire result of the run. Never let
  "I could not check" turn into "there is nothing to do."
- Never conclude "nothing to do" from local files alone. In particular, never
  decide a date is already covered by reading the local calendar.

Read `content/CONTENT_REVIEW.md` for the two-gate process, status vocabulary
and feedback format.

---

## Step 1 — Top up the script queue (drafting)

**Target: every date from tomorrow through tomorrow + 2 has a post row on the
authoritative calendar.** Three days of coverage, counted from the day this run
fires.

A date counts as covered if its row exists at *any* stage — `Pending review`,
`Script approved`, `Content pending review`, `Ready to post`, `Posted`. You are
filling calendar gaps, not maintaining a fixed pile of unapproved drafts. In
steady state that is roughly one new script a day; after an outage it is
however many dates are bare.

**Every day gets a reel. Thursdays additionally get a weekly recap carousel** —
two posts, two rows, same date. A Thursday is only covered when *both* rows
exist; a Thursday holding just the reel is still a gap. Two posts sharing a
queue date is expected and handled: the Worker keys calendar rows on date +
post title, not date alone (launch day already had a carousel and a reel both
on 2026-08-06).

For each gap, in date order:

**The daily reel — pick the topic.** The next unused lesson in curriculum
order — the array order of `content/lessons-1.json`, then `-2`, then `-3`. A
lesson is used if any calendar row on the **authoritative** calendar already
carries its title. Do not skip ahead, do not reorder for variety: the account
promises "Lesson N of 75" and the numbering has to stay honest.

**The Thursday carousel — a recap, not a lesson.** It reviews the seven reels
whose post dates fall in the seven days ending that Thursday. **It does not
consume a lesson number** and never introduces new curriculum; the reels have
already taught this material and the carousel is the week's index to it.

- If fewer than seven reels fall in the window, recap what is actually there
  and say so on the cover ("This week's five lessons"). If fewer than three,
  skip the carousel entirely for that week and note why — there isn't enough
  to recap.
- Draw each entry's takeaway from that lesson's `field` line or the script's
  own example beat. Do not re-teach and do not introduce a rule the week's
  reels never cited.

**Write the copy.** Follow `content/reel-1/script-and-caption.md`'s structure
exactly — front-matter block, scene table, Instagram caption, TikTok caption,
hashtags, notes. The four script beats are hook / explanation / example / CTA.

- Draw the substance from that lesson's `hook`, `body` and `field` fields. The
  lesson JSON is the brief; the script is your writing from it.
- **Rule text on any citation card is verbatim from `content/rules.json`
  (`RULE[num]["text"]`), pulled programmatically. Never hand-typed, never
  paraphrased, in the script file or anywhere else.** Rule numbers come from
  that lesson's `rules` array.
- Voice per `social/brand-identity.md`. Plain, calm, second person. No hype.
- **Hashtags are the fixed set, every time**, not tuned per topic:
  `#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee
  #UltimateFrisbeeTips`
- Every caption carries the attribution line naming **WFDF Rules of Ultimate
  2025–2028**.
- **No growth, reach or virality claims** — not in captions, not in notes.
- CTA is "Lesson N of 75 — new lesson daily" or a close variant.

Save to `content/reel-N/script-and-caption.md` (or
`content/carousel-post-N/`), where N is the next unused number **for that
content type**. Create the folder. There is no weekly batch file any more —
`content/pending-review/week-1-reels.md` stays as history and nothing new goes
in that directory.

Then register it in all three places, exactly as Step 7 describes: a new
calendar row at **`Pending review`**, a `script` entry in `review-state.json`
at `"status": "pending"`, and a new `POSTS` object in
`social/dashboard/data.js` with `review.script = {status: 'pending', on:
'<today>'}` and `review.content = {status: 'awaiting-render', on: null}`.

**A draft that isn't in `data.js` does not exist.** The desk renders its queue
from that file; a script-and-caption.md alone is invisible and will never get
approved.

**You draft. You never approve.** Never write `Script approved` — that status
only ever arrives from the desk via the Worker.

---

## Step 2 — Redraft scripts the desk sent back

Any post whose `script.status` in the authoritative `review-state.json` is
`changes` (calendar: "Pending review — changes requested") gets rewritten this
run, addressing the note Min-Yi left in that entry.

- Keep the topic, lesson number and rule citations unless her note asks
  otherwise.
- Archive the previous copy alongside as `script-and-caption.v<N>.md`, next
  unused N. The unsuffixed file is always the newest.
- Append a dated round to `content/<folder>/script-feedback.md` recording her
  note and a one-line summary of what you changed in response. Same format as
  `feedback.md`, which stays reserved for rendered-content rounds.
- Set the script track back to `"status": "pending"` in `review-state.json` and
  `data.js`, so it re-enters her review queue rather than sitting in limbo.

`script.status` of `rejected` means the topic is dead, not that it needs a
rewrite. Leave the row alone, do not redraft it, and flag it in your report —
if it was blocking a calendar date, that date is uncovered and Step 1 should
have filled it with the next lesson instead.

**What you may not redraft:** nothing. Copy is yours now. But if her note asks
for something the rules don't support — a rule that doesn't exist in
`rules.json`, a claim about reach, a citation to a different rulebook edition —
don't invent it. Leave the row at `changes`, change nothing, and say why.

---

## Step 3 — Build the render worklists

From the **authoritative** calendar, process every matching row this run:

- **New builds:** every row at "Script approved" with no rendered asset in a
  matching `content/reel-N/` or `content/carousel-post-N/`. Build ahead of the
  post date — buffer for a review round trip is expected.
- **Regenerations:** every row at "Content rejected — regenerate". Feedback is
  in that post's `feedback.md`; work the latest round with no `Regenerated:`
  line. Note that the desk appends a fresh round per rejection, so the same
  complaint can appear two or three times — address it once and say which
  rounds you covered.

Rows still at `Pending review` are **not** render work. Nothing renders until
its script clears the first gate.

If both lists are empty *after* a successful Step 0, that is a normal outcome —
you may still have drafted in Step 1. Skip to Step 7.

---

## Step 4 — Build reels

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

---

## Step 5 — Build carousels

Same principle, static slides. Copy `content/carousel-post-1/make_carousel.py`
into `/tmp`, adapt only topic content — headlines, slide count, rule citations —
per `content/CAROUSEL_TEMPLATE.md`. Visual system stays pixel-identical: reuse
that script's code as-is rather than re-deriving the layout from the brand
doc's prose. Rule text verbatim from `rules.json`. Render SVG→PNG with
`convert -background "#0F1712" in.svg -resize <2.083x>! out.png`. Save as
`NN_description.png` plus a `caption.md` following carousel-post-1's structure.

Two carousel shapes, both documented in `CAROUSEL_TEMPLATE.md`:

- **Topic carousel** (carousel-post-1) — cover → optional context/diagram
  slides → numbered topic/rules-detail pairs → closing.
- **Weekly recap** (every Thursday) — cover → one slide per reel from the past
  seven days → closing. Nine slides for a full week. Each recap slide carries
  the lesson number, the reel's title, its one-line takeaway, and that
  lesson's rule numbers in the standard citation footer.

A recap slide is **not** a rules card: it cites rule numbers but does not quote
rule text, so there is nothing on it to paraphrase. If you find yourself
wanting to put rule text on a recap slide, you are re-teaching — cut it back to
the takeaway. The "WFDF Rules of Ultimate 2025–2028" attribution still appears
in the footer and the caption.

---

## Step 6 — Verify before you believe it

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

For every script you drafted or redrafted:

- Every rule number you cite resolves in `rules.json`, and the text on the page
  is byte-identical to it.
- The attribution line and the fixed hashtag set are present.
- No growth/reach/virality claim anywhere.
- "Lesson N of 75" matches the lesson's actual curriculum position. Reels only
  — a recap carousel has no lesson number of its own, and every lesson number
  it cites must match the reel it is recapping.

### Feedback you must NOT act on

Content-track feedback that needs different *words* is no longer a dead end —
you own the copy now. But it is still a **script** change: redraft under Step 2,
set the script track back to `pending`, and leave the content row where it is.
Do not quietly rewrite copy and re-render in the same pass; she approves words
before she sees them rendered.

Before overwriting an asset, archive the current version alongside it with the
next unused `.vN` suffix. The unsuffixed filename always holds the newest cut.
Append `Regenerated: <today> (daily-reel-render)` to the feedback round you
addressed, plus a one-line cause note.

---

## Step 7 — Record state in all three places

Everything you touched in Steps 1, 2, 4 and 5 lands here.

**7a. `content/calendar.md`**

- New drafts: append a row at **`Pending review`**, Posted `—`, Performance `—`.
  Keep rows in date order.
- Rows you built or successfully regenerated: **`Content pending review`**.
- Rows you redrafted: **`Pending review`**.
- Never set `Script approved`, `Ready to post` or `Posted` — all three are
  Min-Yi's, via the desk.

**7b. `content/review-state.json`** — read, modify only your posts' keys, write
back. **Never overwrite wholesale**; it also holds desk approvals.

```json
"reel-8": {"script":  {"status": "pending", "note": "", "tags": [],
                       "updatedAt": "<ISO 8601 UTC>"},
           "content": {"status": "awaiting-render", "note": "", "tags": [],
                       "updatedAt": "<ISO 8601 UTC>"}}
```

For each post rendered, set `content.status` to `in-review` and maintain a
`revisions` array, newest last, one entry per cut. The last entry's `file` is
the unsuffixed primary; earlier entries point at their `.vN` archives — update
an older entry's `file` when it gets archived. `changed` must state concretely
what differs ("Retimed to the house rhythm; 39.1s to 30.0s"), never
"regenerated per feedback".

**7c. `social/dashboard/data.js`** — the desk's queue. For a new draft, append a
`POSTS` object with `id`, `date`, `title`, `type`, `pillar`, `difficulty`,
`lesson`, `rules`, `folder`, `source`, `sourceLesson`, the four-beat `script`
object, `ig`, `tiktok`, `hashtags`, `notes`, `video: null`, `slides: null`,
`scenes: null`, `postedDate: null`, and `review` as above. For a post rendered,
set `video`, `typeDetail`, `duration`, `scenes` and
`review.content = {status: 'in-review', on: '<today>'}`; drop stale `notes`
saying the video is still to render.

Plain JavaScript — a syntax error breaks the whole desk. Check it parses
(`node --check`) and if its structure doesn't match what's documented here,
leave it alone and flag it.

**7d. Rebuild the desk** — `python social/dashboard/build_desk.py`. **This will
fail in this sandbox** (`shutil.rmtree` → PermissionError). That is expected; it
runs from `tools/sync.bat` in Step 8 instead. Do not try to work around it.

---

## Step 8 — Publish (you cannot do this alone)

You have no network. Do not fake success and do not silently skip this.

1. Write the commit message to `_commit_msg.txt` in the repo root — subject on
   line 1, blank line, then body.
2. Report, in the first line of your output, that **a push is required** and
   that Min-Yi should double-click `tools\sync.bat`. That script clears stale
   git locks, rebuilds the desk, stages the explicit paths only, commits with
   your message, pulls with rebase, and pushes — one pull, after the commit.

### Expect a calendar.md conflict, and know how to resolve it

`content/calendar.md` and `content/review-state.json` are the only two files
both this task and the Worker write. You rebuild them from the snapshot you
fetched in Step 0; the Worker rewrites rows every time Min-Yi approves, rejects
or marks something posted during the day. **Any desk decision made between your
Step 0 fetch and the push collides**, so a conflict on those two files is a
normal event, not a malfunction. `review-state.json` is keyed per post and
almost always auto-merges; `calendar.md` is a single table and usually does not.

The resolution rule is deterministic — put it in your report whenever a
conflict is likely:

- **Rows that already existed: the remote/desk version wins.** It reflects a
  decision Min-Yi made after your fetch, so it is newer and truer than yours.
- **Rows this run newly appended: keep the local version.** The remote has
  never seen them.

`sync.bat` stops before pushing when it lands mid-rebase and prints that rule.
`tools\finish_rebase.bat` stages the resolution, continues, and pushes.

### Two failure modes that have already bitten this pipeline

- **A `git add` pathspec that matches nothing is fatal and aborts the whole
  invocation**, silently dropping every later pattern on the same line. On
  2026-08-11 a missing `script-feedback.md` took the `.mp4` and `.py` patterns
  down with it. `sync.bat` therefore uses one `git add` per pattern. If you add
  a new file type to the pipeline, give it its own line.
- **`%ERRORLEVEL%` inside a parenthesised batch block expands at parse time**,
  so it reports a stale value. The log said `push rc=0` directly beneath a
  rejected push. `sync.bat` uses `setlocal enabledelayedexpansion` and
  `!ERRORLEVEL!`. Never trust an rc from a script that does not.
3. If you are running inside an interactive chat rather than the schedule, you
   may instead drive `tools\sync.bat` yourself via File Explorer with
   computer-use, then read `tools\_last_sync.log` and report the resulting SHA.

**Never `git add content` wholesale and never commit `v4/`** — one run's frames
are ~1,800 files and 116 MB. `.gitignore` covers them; explicit paths keep it
that way.

Until `tools\sync.bat` runs, nothing you drafted or built is visible to GitHub
or the Content Desk. **A script nobody can see cannot be approved, and the
queue stalls a day later.** This matters more now than it did when the task only
rendered: drafting is upstream of everything.

---

## Step 9 — Report

State plainly: what was drafted (topic, lesson number, date it covers), what was
redrafted and against which note, what was built, what was regenerated (with the
feedback each addressed and the before/after measurement), what now sits at
`Pending review` versus `Content pending review`, and **whether the push has
happened** — SHA if yes, "PUSH REQUIRED" if not.

Also flag if any of these is true:

- Fewer than 2 rows are "Ready to post" — the postable queue is running low.
- More than 5 rows sit at `Pending review` — drafts are piling up faster than
  they're being approved, which usually means the desk hasn't been opened in a
  few days. Say so; don't just keep drafting into the void.
- A lesson's `rules` array cites a number missing from `rules.json`.
- You have run out of lessons in `lessons-{1,2,3}.json`.

---

## Constraints

- Never post to any social platform — there is no posting integration.
- **Never approve anything.** Never mark "Script approved", "Ready to post" or
  "Posted". Both gates are Min-Yi's, worked from the Content Desk.
- Draft freely, but never invent rules text — it is quoted verbatim from
  `rules.json` or it doesn't ship.
- Never commit intermediate render output; never `git add` a whole directory.
- Never overwrite `review-state.json` wholesale.
- Every rules card quotes WFDF text verbatim, with the "WFDF Rules of Ultimate
  2025–2028" + rule-number footer.
- No growth, reach or virality promises anywhere.
- Never report a healthy queue you did not actually verify against GitHub.
- This run is non-interactive — do not wait for confirmation, but do not skip a
  constraint to move faster.
