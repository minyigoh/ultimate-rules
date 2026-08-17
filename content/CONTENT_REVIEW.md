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

**Script track** — Needs review → Approve / Ask for changes / Reject. The note
box is where you leave line edits, tone notes, or a rule that needs re-checking.

- **Approve** → status **Script approved**. The next daily run renders it.
- **Ask for changes** → the next daily run rewrites that script against your
  note, archives the old copy as `script-and-caption.vN.md`, logs the round in
  `content/<folder>/script-feedback.md`, and puts it back at **Pending review**.
- **Reject** → the topic is dropped. The task will not redraft it, and will
  pull the next lesson in curriculum order to cover that date instead.

**Content track** — approve the cut, or send it back with issue tags plus a
note. A send-back logs a round in `content/<folder>/feedback.md` and the next
daily render picks it up automatically — no need to ask it to.

## Feedback file formats

Rendered-content rounds, `content/<folder>/feedback.md`:

```
## Round 1 — 2026-08-09 — REJECTED
Pacing on scene 3 is too fast, the rule text disappears before it's readable.
Regenerated: 2026-08-10 (daily-reel-render)

## Round 2 — 2026-08-10 — APPROVED
```

Script rounds, `content/<folder>/script-feedback.md` — same shape, kept in a
separate file so a wording round and a rendering round never get confused:

```
## Round 1 — 2026-08-12 — CHANGES REQUESTED
Hook is too abstract, lead with the situation not the principle.
Redrafted: 2026-08-13 (daily-reel-render) — new hook opens on the pickup game.
```

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
`content/review-state.json`, with a one-line `changed` description. The Content
Desk renders that as a revision list under the video — newest first, older ones
playable — so you can see what actually changed between rounds without opening
two files. **Save to phone always exports the latest revision**, never whichever
one you happen to be previewing.

## Applies to both formats

Reels and carousels both go through this same review gate. "Daily reel
render" drafts and builds both now — the name predates carousels joining the
daily job, and predates it doing the writing.
