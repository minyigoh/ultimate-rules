# Reel 43 — Turnover in your own end zone: you choose

**Status:** Pending review
**Script drafted:** 2026-09-12 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-17 (see `content/calendar.md`) — posts alongside carousel-post-7
**Difficulty:** Intermediate
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (13.11, 13.11.1, 13.11.2, 13.11.2.1, 13.11.3)
**Source lesson:** `content/lessons-3.json` → `own-end-zone`

Reel 42 gave the three ordinary turnover spots. This is the fourth case, and
the only one where the rulebook hands you a decision instead of a location.
Running them back to back is deliberate — 13.11 only makes sense once 13.9 and
13.10 have established that the spot is normally fixed.

---

## Video — `reel43-own-end-zone.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36, 38, 39, 40, 41 and 42.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Turnover in your own end zone: you choose · kicker INTERMEDIATE · LESSON 43 / 75 |
| 2 | #1 YOU GET A CHOICE | "Two legal places to put the pivot, and it is yours to pick." · footer cites 13.11 · 13.11.1 · 13.11.2 |
| 3 | Rules detail | Verbatim 13.11 as block lead, with 13.11.1 and 13.11.2 sub-numbered beneath it |
| 4 | #2 THE ARM SIGNAL | "One arm straight up, before you touch the disc." · footer cites 13.11.2.1 |
| 5 | Rules detail | Verbatim 13.11.2.1, one block |
| 6 | #3 YOU CANNOT UNDO IT | "The moment you move, stay, fake or signal, you have chosen." · footer cites 13.11.3 |
| 7 | Rules detail | Verbatim 13.11.3, one block |
| 8 | FIELD TIP | "Decide before you pick it up, not after." |
| 9 | Closing | "Lesson 43 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### One block lead, no departures

- **13.11 is carded as a block lead with 13.11.1 and 13.11.2 sub-numbered
  beneath it.** It ends in a colon and both sub-items are sentence fragments
  ("at the turnover location, by staying…"), so neither reads without it. This
  is the reel-36 shape, not the reel-34 shape: 13.11 is itself in the lesson's
  `rules` array, so the scene-2 footer cites it alongside its two children
  rather than omitting it.
- **13.11.2.1 and 13.11.3 are complete sentences** and are each carded whole on
  their own card.
- **Every rule carded is in the lesson's `rules` array**, and every footer cites
  only what its own card quotes. Nothing is dropped and nothing is added.

### What the three cards do

1. **13.11 + 13.11.1 + 13.11.2 — the choice itself.** Stay deep and throw from
   where the disc is, or walk it out to the nearest point on the goal line.
   Both are legal; the rulebook is explicit that the thrower picks.
2. **13.11.2.1 — the signal.** One arm fully extended above the head, *before*
   picking up the disc. Small rule, disproportionately useful: it tells seven
   team-mates what is about to happen while you are still jogging to the disc.
3. **13.11.3 — the commitment.** Four actions lock the choice in — moving,
   staying, faking a pass, or signalling — and none of them can be reversed.
   This is the half that gets people, because three of the four are things you
   might do without meaning to decide anything.

**Layout — NOT DRY-MEASURED in the sandbox. Kickers and captions measured in
the browser.**

Sixth consecutive mount failure on 2026-09-12, same Plan9 `share "c" which is
not mounted` error as 09-08 onwards. `check_layout.py`, `check_caption.py` and
`node --check` could not be run.

- **Kickers**, all three at or under 21 characters: `#1 YOU GET A CHOICE`,
  `#2 THE ARM SIGNAL`, `#3 YOU CANNOT UNDO IT`. All shorter than reel-41's
  widest (`#1 CONTACT OFF THE DISC`, 654.9px of 900px in Chrome at 34px Arial
  Bold), so `fit_kicker()` is not expected to engage. Verify at render time.
- **Scene 3 is the card to watch** — three blocks, but light ones: 13.11 is 19
  words, 13.11.1 is 13, 13.11.2 is 16, 48 words total plus three number lines.
  That is materially lighter than reel-32's three-block card, which measured
  max_y 1026 of 1310, so it should land comfortably. `fit_body()` may engage;
  let it. **If it trips the 80% floor, drop 13.11.2.1's pair and promote 13.11.2
  to its own card — do not reword.**
- Scenes 5 and 7 are single blocks, 21 and 26 words. No risk.

**The four slide bodies the estimates above assume**, recorded here so the
render is reproducible rather than re-derived from the beats:

- Scene 2 — "The disc turns over in the end zone you are defending. Almost
  everywhere else on the field the spot is fixed, but here you get two legal
  options. Throw from where the disc is, or take it out to the nearest point on
  the goal line. Nobody gets to choose for you, and neither option is the
  default."
- Scene 4 — "If you want the goal line, you can say so without saying anything.
  One arm fully extended above your head, before you pick the disc up. Your
  team-mates can read it from forty metres away and start moving while you are
  still jogging to the disc."
- Scene 6 — "Four things commit you, and three of them are things you might do
  without meaning to. Moving off the spot. Staying on it. Faking a pass.
  Signalling the goal line. Once you have done any of them, that is your
  choice, and the rules do not let you take it back."
- Scene 8 (field tip) — "Decide on the walk, not at the disc. Taking it to the
  line gives your team the whole field to work with. Staying deep can catch a
  defence that has not set. Either is fine — changing your mind halfway is
  what costs you."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
In the cloud build run this works as written. On Windows, `python
tools\win_render.py reel-43` — read `tools/WINDOWS_FALLBACK.md` first.

**Take the render script from `content/reel-41/render_v3.py` or newer**, never
from reel-36 or earlier; only reels 38 onwards carry the `tracked()` word-gap
fix.

---

## Script (~30s)

- Hook: "The disc turns over in the end zone you are defending. Where do you throw from? That one is up to you."
- Explanation: "You get two options. Throw from where the disc is, or take it out to the nearest point on the goal line. And you can tell your team which one is coming before you even touch the disc — one arm straight up above your head means you are taking it to the line."
- Example: "Here is the part that catches people. Four things lock your choice in: moving off the spot, staying on it, faking a pass, or giving the signal. Three of those are things you might do without meaning to decide anything. Pick up the disc, fake a throw while you think about it, and you have just committed to throwing from there. You cannot walk it out afterwards."
- CTA: "Lesson 43 of 75 — new lesson daily."

## Instagram caption

The disc turns over in the end zone you are defending. Where do you throw from?

That one is actually up to you.

"If the turnover location is in the offence’s defending end zone, the thrower may choose where to establish a pivot point:"

"at the turnover location, by staying at the turnover location or faking a pass; or"

"at the nearest location on the goal line to the turnover location, by moving from the turnover location."

Almost everywhere else on the field the spot is fixed. Here it is a decision, and neither option is the default.

You can also tell your team which one is coming before you touch the disc:

"The intended thrower, before picking up the disc, may signal the goal line option by fully extending one arm above their head."

One arm straight up. Readable from forty metres, while you are still jogging to the disc.

Now the part that catches people:

"Immediate movement, staying at the turnover location, faking a pass, or signaling the goal line option, determines where to establish a pivot point and cannot be reversed."

Four actions commit you, and three of them are things you might do without meaning to decide anything. Pick it up, fake a throw while you think, and you have chosen to throw from there. You cannot walk it out afterwards.

So decide on the way to the disc, not at it. Taking it to the line gives you the whole field. Staying deep can catch a defence that has not set. Either is fine — changing your mind is what costs you.

Lesson 43 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (13.11, 13.11.1, 13.11.2, 13.11.2.1, 13.11.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

turnover in the end zone YOU'RE defending. where do you throw from 🥏

genuinely your call

"If the turnover location is in the offence’s defending end zone, the thrower may choose where to establish a pivot point:"

"at the turnover location, by staying at the turnover location or faking a pass; or"

"at the nearest location on the goal line to the turnover location, by moving from the turnover location."

→ everywhere else the spot is fixed. here it's a decision

and you can announce it before you touch the disc:

"The intended thrower, before picking up the disc, may signal the goal line option by fully extending one arm above their head."

one arm straight up = i'm taking it to the line ☝️

here's the trap:

"Immediate movement, staying at the turnover location, faking a pass, or signaling the goal line option, determines where to establish a pivot point and cannot be reversed."

four things commit you and three of them are accidents waiting to happen. fake a throw while you think about it and you've chosen

decide on the walk, not at the disc

lesson 43 of 75

rules from WFDF Rules of Ultimate 2025–2028 (13.11, 13.11.1, 13.11.2, 13.11.2.1, 13.11.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(13.11, 13.11.1, 13.11.2, 13.11.2.1, 13.11.3).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs. `TOTAL = 9`.
- **NOT DRY-MEASURED** — sixth consecutive sandbox mount failure. Kicker and
  caption figures were measured in the browser; body layout is an estimate and
  must be verified at render time.
- **NO DEPARTURES.** Every carded rule is in the lesson's `rules` array and
  every footer cites only what its card quotes. 13.11 is carded as a block lead
  because it ends in a colon and 13.11.1/13.11.2 are fragments; it is itself in
  the array, so the footer cites it — the reel-36 shape, not reel-34's.
- **Scene 3 carries three blocks** (48 words). Lighter than reel-32's
  three-block card. Let `fit_body()` shrink it; if it trips the 80% floor,
  promote 13.11.2 to its own card rather than rewording.
- **Keep "signaling" with one L** in 13.11.3 — it is the rulebook's spelling and
  the surrounding copy's British "signalling" is deliberate contrast, not an
  inconsistency to fix. Keep the curly apostrophe in "offence’s".
- **Do not describe the arm signal as compulsory.** 13.11.2.1 says "may signal";
  it is an option that communicates, not a requirement, and the goal-line choice
  is equally valid without it.
- **LIKELY `_payload()` case:** 13.11 ends in a colon and 13.11.1 in "; or" —
  verify the emitted PNG, not just the SVG.
- Instagram caption 1,758 characters including hashtags (79.9% of the 2,200
  limit, below the 95% warning line); TikTok 1,195 of 4,000. Both plain text and scanned clean of markdown. Measured in UTF-16
  units in the browser on 2026-09-12, since `check_caption.py` could not be run.
- Curriculum position: lesson 43 is index 9 of `content/lessons-3.json`, the
  next unused lesson after 42. It covers 2026-09-17, a Thursday, so
  carousel-post-7 posts the same day.
- No growth/reach claims in either caption.
