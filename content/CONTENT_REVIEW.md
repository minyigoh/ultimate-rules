# Content review process

Two separate approval gates, not one — don't collapse them. **Both are worked
from the Content Desk.** Nothing is approved in chat any more.

1. **Script approval** — the daily render task drafts a script and captions and
   puts them at **Pending review**. You read the words on the desk and approve,
   ask for changes, or reject. Status moves to **Script approved**.
2. **Content approval** — once the render builds the actual reel video or
   carousel images from an approved script, you review the *rendered asset
   itself* (not the words — the finished visual) and either approve it or send
   it back. Status moves to **Content pending review**, then to either **Ready
   to post** or **Content rejected — regenerate**.

Nothing posts without clearing both gates. The render task writes drafts and
renders cuts; it never sets an approved status on either track.

**An approval is a stamp on a version, not a flag on the post.** Every decision
records which draft of the words, or which cut, it was made about. When the task
redrafts a script or renders a new cut, any decision stamped against the old
version is withdrawn automatically: the desk flips that track back to
**Redrafted — review again** / **New cut — review again**, un-presses the button,
and drops the old decision into the track's history where you can still read it.

This is not a nicety. Before it existed, on 2026-09-04, reel-32's script was
approved at 07:23 against v1, redrafted at 07:26, and rendered from v2 at
07:44 — and the desk showed a green "Script approved" the whole time, for words
that had never been read. See "The render gate" below.

## Where scripts come from

The daily task keeps **three days of calendar coverage** — every date from
tomorrow through tomorrow + 2 has a post row. It fills gaps automatically, in
curriculum order from `content/lessons-{1,2,3}.json`, so there is no longer a
weekly batch to sit down and write.

Every day gets a reel. **Thursdays also get a weekly recap carousel** — cover,
one slide per lesson in the block, closing. The block is the next seven
lessons in curriculum order that haven't been recapped yet and have already
posted (1–7, then 8–14, then 15–21), so every lesson is recapped exactly once.
The recap doesn't consume a lesson number and introduces nothing new; it's the
week's index back to the reels. So Thursdays put two posts in your queue, not
one.

`content/pending-review/week-1-reels.md` is kept as history. Nothing new is
written there — drafts go straight to `content/reel-N/script-and-caption.md`.

In steady state that's about one new script a day waiting on you. If drafts
start piling up past five, the task will say so in its report rather than keep
writing into a queue nobody is reading.

## Status vocabulary (`content/calendar.md`)

| Status | Meaning | Set by |
|---|---|---|
| Pending review | Script drafted, waiting on your read | `daily-reel-render` |
| Pending review — changes requested | You asked for wording changes; task will redraft | You, on the desk |
| Rejected | Topic killed; task will not redraft it | You, on the desk |
| Script approved | Script/caption approved, not yet rendered | You, on the desk |
| Content pending review | Rendered reel/carousel exists, waiting on your review | `daily-reel-render` |
| Content rejected — regenerate | You rejected the render; feedback logged | You, on the desk |
| Ready to post | You approved the render; it's postable | You, on the desk |
| Posted | You've marked it posted | You, on the desk |

## How to approve or reject

Open the Content Desk, pick the post, and use the two track panels. Each
decision syncs through the Cloudflare Worker, which commits it straight to
`main` across `content/calendar.md` and `content/review-state.json` — so a
decision made on your phone shows up on your PC, and the next scheduled render
sees it.

Every post carries one line at the top saying what it is waiting for, in the
imperative, and the queue repeats it as a single word on the card — **Read
script**, **Watch cut**, **Re-read script**, **Post it**, or a greyed
**Rendering** / **Redrafting** when the ball is in the task's court. The
**Needs you** filter and counter show only the posts blocked on a decision. If a
card doesn't say you need to do something, you don't.

**Script track** — Needs review → Approve / Ask for changes / Reject. The note
box is where you leave line edits, tone notes, or a rule that needs re-checking.

- **Approve** → status **Script approved**. The next daily run renders it.
- **Ask for changes** → the next daily run rewrites that script against your
  note, archives the old copy as `script-and-caption.vN.md`, logs the round in
  `content/<folder>/script-feedback.md`, and puts it back at **Pending review**.
- **Reject** → the topic is dropped. The task will not redraft it, and will
  pull the next lesson in curriculum order to cover that date instead.

**Content track** — three buttons, because "send it back" is two different asks
and they go to different places:

- **Approve — ready to post** → status **Ready to post**.
- **Send back — rebuild it** → the *build* is wrong: pacing, layout, a collision,
  the wrong take. The words stay approved. Logs a round in
  `content/<folder>/feedback.md`; the next daily render picks it up
  automatically.
- **Send back — wrong words** → the *copy* is wrong. This fails the cut **and**
  reopens the script gate in one commit, and your note goes to
  `content/<folder>/script-feedback.md`, which is the track that has to act on
  it. Requires a note — the note is what gets rewritten. Nothing re-renders
  until the redraft clears gate 1.

  Use this whenever what you want is different *words*. Before this button
  existed the only way to say it was Reject, which says "build it again", and
  the render task had to infer the rest from your note.

**One decision, however many times you send it.** The desk syncs as you type, so
a single rejection used to arrive at the repo three or four times and become
three or four identical rounds in `feedback.md` — that is exactly what happened
to reel-30 on 2026-09-04. Same track, same version, same status is now treated
as the same decision and updated in place. Change your mind, or judge a new
version, and it logs separately.

**Decision history.** Every decision is kept under its track on the desk —
status, version, note, tags, date — with superseded versions struck through.
Nothing is overwritten and nothing is lost when a decision is withdrawn.

## The render gate

A cut is only built from words you approved. The task declares which script
version it built from, and `tools/apply_additions.py` refuses to put the cut in
front of you if that isn't the version the desk signed off — the post stays at
gate 1 and the run's log says why.

Cost: a redraft waits for your approval before it renders, so a same-day
turnaround becomes a next-day one. That is the trade, and it is the right way
round: the alternative is what happened to reel-32, where a reel was built,
timed, layout-checked and put in front of you as finished work on the strength
of words nobody had read.

## Posting a cleared cut

Once the content track is approved, a three-step bar pins itself to the bottom
of the post — fixed to the screen on a phone, so it is reachable at any scroll
depth and none of this needs the page moved:

1. **Save video** — share sheet, straight to the camera roll.
2. **Copy IG / Copy TikTok** — do this *before* switching apps. The clipboard
   survives the reel editor and the music picker, so the caption is a
   long-press away when the app finally asks for it. This is the step that
   used to mean a second trip back to the desk. Every post carries two
   captions and they are not interchangeable, so the **IG / TikTok** toggle in
   the corner of the bar names the one it will take; the button and the hint
   both say which. The choice sticks per device, and copying from either
   caption card lower down sets it too. Switch platform after copying and step
   2 opens again — the clipboard is holding the other one's words.
3. **Mark posted** — tap it when you come back.

Each step ticks off as you do it and the ticks survive a reload, because the
desk is usually evicted from memory while Instagram is in the foreground. The
bar disappears once the post is marked, and resets if the cut is later sent
back for a re-render.

## Feedback file formats

Rendered-content rounds, `content/<folder>/feedback.md`. The header names the
cut the round is about, so a round can never be read against the wrong version:

```
## Round 1 — 2026-08-09 — REJECTED (cut v1)
Pacing on scene 3 is too fast, the rule text disappears before it's readable.
Regenerated: 2026-08-10 (daily-reel-render)

## Round 2 — 2026-08-10 — APPROVED (cut v2)
```

Script rounds, `content/<folder>/script-feedback.md` — same shape, kept in a
separate file so a wording round and a rendering round never get confused:

```
## Round 1 — 2026-08-12 — CHANGES REQUESTED (script v1)
Hook is too abstract, lead with the situation not the principle.
Redrafted: 2026-08-13 (daily-reel-render) — new hook opens on the pickup game.
```

The Worker rewrites the last round in place while you are still typing the same
one, and only starts a new one when the decision genuinely changes. It never
touches a round the render task wrote — those have their own header shape.

## What the daily render can and can't change

**Can, on the script track:** write new scripts and captions from the lesson
JSONs, and redraft any script you've sent back — hook, wording, tone, example,
caption length, CTA.

**Can, on the content track:** timing/pacing, on-screen duration, which rule
citation is shown, layout/emphasis, scene order, visual mismatches with
`content/carousel-post-1/make_carousel.py` constants — anything about *how*
approved copy is rendered.

**Can't, ever:** invent or paraphrase rule text. Every citation card quotes
`content/rules.json` verbatim with the "WFDF Rules of Ultimate 2025–2028"
footer. It also won't act on a note that asks for something the rulebook
doesn't support — a rule number that doesn't exist, a different rulebook
edition, or any growth/reach claim. Those come back to you unchanged, with a
reason.

If a rendered cut needs different *words*, that's a script change: the task
redrafts it on the script track and it comes back through the first gate. It
won't rewrite copy and re-render in one pass — you approve words before you see
them rendered.

## Versioning

Regenerating a rejected render overwrites the primary file, but the prior
attempt is kept alongside it (e.g. `reel3-<slug>.v1.mp4`), so you can compare
before/after if you want to. Redrafted scripts version the same way
(`script-and-caption.v1.md`). The unsuffixed filename is always the newest.

Each regeneration also appends an entry to that post's `revisions` array in
`content/review-state.json`, with a one-line `changed` description and the
`builtFromScriptRev` the render gate checks. Redrafts append to
`scriptRevisions` and bump `scriptRev` the same way. The Content
Desk renders that as a revision list under the video — newest first, older ones
playable — so you can see what actually changed between rounds without opening
two files. **Save to phone always exports the latest revision**, never whichever
one you happen to be previewing.

## Applies to both formats

Reels and carousels both go through this same review gate. "Daily reel
render" drafts and builds both now — the name predates carousels joining the
daily job, and predates it doing the writing.
