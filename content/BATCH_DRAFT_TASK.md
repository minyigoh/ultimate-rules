# Batch-draft task — prompt of record

This is the prompt behind the scheduled batch-draft task. Kept here so it is
version-controlled and reviewable alongside the pipeline it feeds; edit here
first, then paste into the task.

Added 2026-08-09. The daily render task never writes copy, by design — and until
this task existed, nothing else did either. So when week 1's seven reels were
consumed the pipeline just stopped: zero rows at "Script approved", nothing for
the render to build, and no signal beyond one line in a status report. This task
keeps drafts flowing into the top of the funnel.

**It never approves anything.** Script approval is Min-Yi's, made in chat or in
the Content Desk. This task's output is a draft waiting on her, and nothing more.

Read `content/CONTENT_REVIEW.md` first — it defines the two gates, the status
vocabulary, and where a draft sits before it is approved.

## Step 0 — Check the runway, and stop early if there is one

Read `content/calendar.md`.

- **Runway** — rows whose Queued date is today or later and whose Status is not
  `Posted`. One post goes out per day, so that count is how many days of content
  stand between the account and an empty day.
- **Target** — 3 days. Min-Yi's stated comfort level.

Stop and report, drafting nothing, if **either** is true:

1. Runway is 3 or more.
2. Any row is already at `Pending review`. A batch is drafted and waiting on
   her; drafting another on top only doubles the pile she has to read. The
   pipeline is not short of copy in that case, only of her attention — say so.

If you stop here, **make no git writes at all**: no add, no commit, no pull, no
rebase. Read-only git (`git status`, `git log`) is fine. Most runs end at this
step — that is the design, not a failure.

## Step 1 — Pick the next lessons

The curriculum is 75 lessons in difficulty order across `content/lessons-1.json`
(16), `content/lessons-2.json` (18) and `content/lessons-3.json` (41). Read them
in that order; within a file, keep array order. That order is the syllabus — do
not reorder it to chase a topic you find more interesting.

A lesson is **already used** if its `title` appears in `content/calendar.md`'s
Post column, or as a `title` in `social/dashboard/data.js`. The next curriculum
position is the highest `lesson` number in `data.js` plus one.

Take the next **7** unused lessons. If fewer than 7 remain, take what is left and
say so plainly in Step 7 — that means the curriculum is nearly exhausted and
needs a decision from her, not an improvised eighth lesson.

## Step 2 — Draft the batch file

Write `content/pending-review/week-N-reels.md`, where N is the next unused week
number. Follow the structure of `content/pending-review/week-1-reels.md` exactly:
a header block, then one numbered section per lesson with a difficulty + rules
line, a **Script** block (Hook / Explanation / Example / CTA), an **Instagram
caption**, and a **TikTok caption**.

The header must read `(PENDING REVIEW — <today>)`. Never write `APPROVED` — that
word is hers, and week-1's header carries it only because she approved it.

Writing the copy:

- **Adapt, don't invent.** Each lesson already carries reviewed teaching copy in
  its JSON: `hook`, `body[]`, `field`, `quiz`. Your job is to compress that into
  a ~25-second spoken script in the account's voice, not to write a new lesson
  or introduce a rule interpretation that isn't in the source.
- **Rule numbers come verbatim from that lesson's `rules` array.** Never invent,
  guess, or "improve" a citation.
- **Do not quote WFDF rule text in the batch file.** The render pulls it from
  `content/rules.json` at build time, which is what keeps it verbatim. A quote
  hand-copied here is a quote that can drift.
- Voice, palette and attribution rules are in `social/brand-identity.md`. Read
  it; the captions must sound like the seven that came before, not like a
  generic caption generator.
- The CTA carries the true curriculum position — "Lesson 12 of 75", not a made-up
  number.
- **No growth, reach or virality promises** anywhere — not in captions, not in
  your report. Consistency and a clear angle raise the odds of traction, never
  guarantee it.

## Step 3 — Add the calendar rows

One row per drafted lesson in `content/calendar.md`, continuing one per day from
the last dated row. Status is `Pending review` for every one of them. Posted and
Performance columns are `—`.

Never write `Script approved`. That status means she has read and approved the
batch, and only she can set it.

Two posts must never share a Queued date unless that is genuinely intended — the
sync Worker identifies a calendar row by date **and** post title, so a duplicate
date with a near-duplicate title is the one thing that can make a desk decision
ambiguous.

## Step 4 — Add the desk entries

The Content Desk renders from `social/dashboard/data.js`. A post that is not in
that file does not exist as far as the desk is concerned, so she cannot
script-approve it. For each drafted lesson append an entry in queue order:

```js
{
  id: 'reel-8',
  date: '2026-08-13',
  title: 'A catch and possession are not the same thing',
  type: 'Reel',
  typeDetail: 'Not yet rendered',
  pillar: 'Rules',
  difficulty: 'Beginner',
  lesson: 8,
  duration: null,
  rules: ['12.1', '12.1.1', '13.1.1.1'],
  review: {
    script:  {status: 'pending', on: '<today>'},
    content: {status: 'awaiting-render', on: null}
  },
  postedDate: null,
  folder: null,
  source: 'content/pending-review/week-2-reels.md',
  sourceLesson: 'content/lessons-1.json (tag: Possession)',
  video: null,
  slides: null,
  scenes: null,
  script: {hook: `…`, explanation: `…`, example: `…`, cta: `…`},
  ig: `…`,
  tiktok: `…`,
  hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
  notes: ['Drafted <today> by the batch-draft task. Awaiting script approval.']
}
```

`folder`, `video`, `scenes` and `duration` stay null — the render task fills them
in when it builds the asset (its Step 6c). `difficulty` is `'Beginner'` from
lesson 8 onward; `'Never played'` belongs to the week-1 on-ramp only.

**This is a plain JavaScript file and a syntax error here breaks the whole desk.**
Check it before going further:

```bash
node --check social/dashboard/data.js
```

If that fails, fix it or revert your edit to this file — never leave it broken.
If the file's structure doesn't match what's described above, stop editing it and
flag that in Step 7 so she can patch it by hand.

## Step 5 — Rebuild the desk

```bash
python social/dashboard/build_desk.py
```

It prints the file count and total size. The new posts carry no media, so the
size should barely move — a large jump means something was picked up that
shouldn't have been.

## Step 6 — Commit and push

```bash
git add content/calendar.md content/pending-review/week-*.md
git add social/dashboard/data.js docs/desk
git commit -m "batch draft: week N — <7 lesson titles, or a summary>"
git pull --rebase origin main
git push origin main
```

**Never `git add` a whole directory** — always the explicit paths above.

**Expect the push to fail.** This sandbox has no route to github.com; it returns
`HTTP 403 from proxy after CONNECT`. That is an environment limit, not a repo
problem, and retrying won't help. Still make the commit so the work is captured,
don't try to work around it (no new remotes, no credential changes), and report
the SHA plus the two commands needed to publish it.

**If a git command fails, make sure it did not leave a lock behind.** A pull that
is interrupted or killed part-way can leave `.git/index.lock` in place, and while
that file exists every git write in this repo fails — including every future run
of this task and of the daily render:

```bash
test -f .git/index.lock && rm -f .git/index.lock
```

Only do this when a git command of yours has just failed. If the unlink is
refused, report the full path as the first line of Step 7 and say plainly that
every future run fails until it is deleted by hand.

## Step 7 — Report

Lead with anything that blocks future runs (a surviving `.git/index.lock`, a
broken `data.js`), then:

- the runway you measured and what you decided — including "runway was 4 days,
  drafted nothing", which is a perfectly good outcome
- which lessons you drafted, by curriculum number and title
- the file paths she needs to open to review them
- the push result: the commit SHA, or the exact error and what is sitting
  uncommitted
- how many lessons remain in the curriculum after this batch

Then ask her for script approval explicitly — that is the one thing standing
between this draft and the render task being able to build it.

## Constraints

- **Never approve anything.** Never set `Script approved`, `Ready to post`, or
  `Posted`. Drafting and approving are different jobs and this task only does
  the first.
- **Never draft on top of an unreviewed batch** — see Step 0.
- **Never touch a rendered asset**, a `feedback.md`, or another post's entry in
  `content/review-state.json`. This task adds new posts; it does not revise
  existing ones.
- **Never invent rule citations or WFDF rule text.** Numbers come from the
  lesson's `rules` array; the text is pulled from `content/rules.json` by the
  render, never hand-copied.
- **Never reorder the curriculum** to pick a more appealing topic.
- Never `git add` whole directories, and never commit render intermediates.
- No growth/reach/virality promises anywhere.
- This run is fully automated and non-interactive — do not wait for
  confirmation, but do not skip any constraint above to move faster.

## Scheduling

Run it **daily, after the render task**. Step 0 makes most runs a no-op that
touches nothing, and a daily cadence means the batch is drafted the day the
runway actually dips below 3 rather than on a fixed weekday that may be four
days too late.
