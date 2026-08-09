# Content review process

Two separate approval gates, not one — don't collapse them.

1. **Script approval** (existing) — you review a weekly batch of scripts/
   captions in `content/pending-review/week-N-*.md` and approve the batch in
   chat. Status in `content/calendar.md` moves to **Script approved**. The
   batches themselves are drafted by the `batch-draft` task
   (`content/BATCH_DRAFT_TASK.md`) when the queue runs short — drafting is not
   approving, and that task can never do the second.
2. **Content approval** (new) — once the daily render builds the actual reel
   video or carousel images from an approved script, you review the
   *rendered asset itself* (not the words — the finished visual) and either
   approve it or reject it with feedback. Status moves to **Content pending
   review**, then to either **Ready to post** or **Content rejected —
   regenerate**.

Nothing posts without clearing both gates.

## Status vocabulary (`content/calendar.md`)

| Status | Meaning | Set by |
|---|---|---|
| Pending review | Script drafted, waiting on your approval | `batch-draft` |
| Script approved | Script/caption approved, not yet rendered | You, in chat, approving a weekly batch |
| Content pending review | Rendered reel/carousel exists, waiting on your review | `daily-reel-render` |
| Content rejected — regenerate | You rejected the render; feedback logged | You, in chat |
| Ready to post | You approved the render; it's postable | You, in chat |
| Posted | You've posted it and reported back numbers | You, in chat |

## How to approve or reject a rendered post

After the daily render drops a video/carousel into `content/reel-N/` or
`content/carousel-post-N/`, watch or view it, then just tell me in chat:

- **"Approve reel-3"** → I set its `content/calendar.md` status to **Ready to
  post**. Nothing else changes.
- **"Reject reel-3: <what's wrong>"** → I log your feedback in
  `content/reel-N/feedback.md` (new file if none exists, new dated round if
  one does) and set status to **Content rejected — regenerate**. The next
  daily render picks it up automatically — no need to ask it to.

The scheduled render itself never marks anything approved or rejected — that
decision is always yours, made in a normal conversation with me.

## Feedback file format

`content/reel-N/feedback.md` or `content/carousel-post-N/feedback.md`:

```
## Round 1 — 2026-08-09 — REJECTED
Pacing on scene 3 is too fast, the rule text disappears before it's readable.
Regenerated: 2026-08-10 (daily-reel-render)

## Round 2 — 2026-08-10 — APPROVED
```

## What the daily render can and can't fix from feedback

- **Can act on directly:** timing/pacing, on-screen duration, which rule
  citation is shown, layout/emphasis issues, wrong scene order, visual
  mismatches with `content/carousel-post-1/make_carousel.py` constants —
  anything about *how* already-approved copy is rendered.
- **Can't act on:** feedback that actually needs different words — a new
  hook, a reworded caption, a different example. That's a script change, and
  per this project's normal cadence, new copy needs your approval before it
  goes anywhere. If a rejection needs new copy, the render leaves the row as
  **Content rejected — regenerate** and flags it back to you instead of
  guessing at wording — you'd either hand-edit `script-and-caption.md`
  yourself or send it back through a pending-review batch.

## Versioning

Regenerating a rejected render overwrites the primary file, but the prior
attempt is kept alongside it (e.g. `reel3-<slug>.v1.mp4`), so you can compare
before/after if you want to. The unsuffixed filename is always the newest cut.

Each regeneration also appends an entry to that post's `revisions` array in
`content/review-state.json`, with a one-line `changed` description. The Content
Desk renders that as a revision list under the video — newest first, older ones
playable — so you can see what actually changed between rounds without opening
two files. **Save to phone always exports the latest revision**, never whichever
one you happen to be previewing.

## Applies to both formats

Reels and carousels both go through this same review gate. "Daily reel
render" builds both now — the name predates carousels joining the daily job.
