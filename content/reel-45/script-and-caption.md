# Reel 45 — Live play and dead play

**Status:** Pending review
**Script drafted:** 2026-09-12 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-19 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (8.1, 8.1.1, 8.1.2, 8.1.3, 8.1.4, 8.2, 8.3)
**Source lesson:** `content/lessons-3.json` → `dead-play`

Last of the four-reel turnover block, and the one that frames the other three.
Reels 42–44 all describe things that happen while the disc is being walked to
the pivot — which is precisely a window of dead play. This reel names the
window.

---

## Video — `reel45-dead-play.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36, 38, 39, 40, 41, 42, 43
and 44.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Live play and dead play · kicker BEGINNER · LESSON 45 / 75 |
| 2 | #1 DEAD BEFORE THE PULL | "Two windows where nothing can be turned over." · footer cites 8.1 · 8.1.1 · 8.1.2 |
| 3 | Rules detail | Verbatim 8.1 as block lead, with 8.1.1 and 8.1.2 sub-numbered beneath it |
| 4 | #2 DEAD AFTER A CALL | "And two more, both of them after something has gone wrong." · footer cites 8.1 · 8.1.3 · 8.1.4 |
| 5 | Rules detail | Verbatim 8.1 as block lead again, with 8.1.3 and 8.1.4 sub-numbered beneath it |
| 6 | #3 LIVE, AND ONE LIMIT | "Everything else is live — and you still cannot hand it over." · footer cites 8.2 · 8.3 |
| 7 | Rules detail | Verbatim 8.2 and 8.3, two blocks |
| 8 | FIELD TIP | "Dead play is your thinking time. Use the walk to pick your first throw." |
| 9 | Closing | "Lesson 45 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### FLAGGED: 8.1's block lead is carded twice, and that is new

- **8.1 reads `Play is 'dead', and no turnover is possible:`** — a colon stem
  with four sub-items, and all four are fragments that begin mid-sentence
  ("After the start of a point, until the pull is released;"). None of them
  reads without the lead.
- **Putting all five on one card would be a five-block card**, unprecedented in
  this run — the heaviest ever shipped is reel-32's three-block card at max_y
  1026 of 1310. Five blocks would very likely collide with the citation footer,
  which is the exact defect reel-18 v1 was rejected for, and `fit_body()`'s 80%
  floor would probably refuse it outright.
- **So the four sub-items are split across two pairs, with the 8.1 lead
  repeated on both cards.** Every fragment keeps the sentence it belongs to,
  nothing is truncated, and no card exceeds three blocks. The cost is that the
  same eight words appear twice in the reel, about nine seconds apart.
- **This has not been done before and it is a judgement call, not a rule.**
  The alternatives were worse: a five-block card that probably will not fit, or
  carding 8.1.3 and 8.1.4 as bare fragments with no lead, which puts
  ungrammatical text on screen. **If the repetition reads badly at the script
  gate, say so** — the fallback is an eleven-scene reel with 8.1 + 8.1.1 +
  8.1.2 + 8.1.3 + 8.1.4 spread over four pairs, still one lead per card.
- Every rule carded is in the lesson's `rules` array, and every footer cites
  only what its own card quotes. 8.1 appears in two footers because it appears
  on two cards.

### What the three cards do

1. **8.1 + 8.1.1 + 8.1.2 — the two windows before anything has gone wrong.**
   The start of a point until the pull leaves the hand, and the walk to the
   pivot after a pull or a turnover. These are the ones reels 42–44 have been
   describing without naming.
2. **8.1 + 8.1.3 + 8.1.4 — the two after something has.** After a call or any
   stoppage until the check, and after the disc hits the ground until somebody
   establishes possession.
3. **8.2 and 8.3 — the boundary and the one restriction.** Everything not dead
   is live. And during dead play the thrower may not transfer the disc to
   another player — the rule that makes "you take it, you're closer" illegal.

**Layout — NOT DRY-MEASURED in the sandbox. Kickers and captions measured in
the browser.**

Sixth consecutive mount failure on 2026-09-12, same Plan9 `share "c" which is
not mounted` error as 09-08 onwards. `check_layout.py`, `check_caption.py` and
`node --check` could not be run.

- **Kickers**, all three at or under 22 characters: `#1 DEAD BEFORE THE PULL`,
  `#2 DEAD AFTER A CALL`, `#3 LIVE, AND ONE LIMIT`. All within one character of
  reel-41's widest (`#1 CONTACT OFF THE DISC`, 654.9px of 900px in Chrome at
  34px Arial Bold), so `fit_kicker()` is not expected to engage. Verify at
  render time.
- **This is the lightest reel of the batch by word count.** Scene 3 is 39 words
  over three blocks, scene 5 is 41 over three, scene 7 is 25 over two. All three
  are lighter than reel-32's three-block card. `fit_body()` is not expected to
  engage on any of them, but the three-block cards each carry three number
  lines, which cost vertical space out of proportion to their word count — so
  **measure, do not assume.**

**The four slide bodies the estimates above assume**, recorded here so the
render is reproducible rather than re-derived from the beats:

- Scene 2 — "Dead play means no turnover is possible. Nothing you do can lose
  you the disc. There are four windows and the first two happen before anything
  has gone wrong: from the start of a point until the pull is released, and
  while the disc is being carried to the pivot spot after a pull or a turnover."
- Scene 4 — "The other two happen after something has. After any call or
  stoppage, play is dead until the disc is checked in. And after the disc hits
  the ground, it is dead until somebody actually establishes possession. That
  last one is why a bobbled pick-up is not a turnover."
- Scene 6 — "Everything else is live, and live is where you can lose it.
  Players are free to move during dead play unless a rule says otherwise, so it
  is not a freeze — with one restriction that surprises people. The thrower may
  not hand the disc to a team-mate during dead play. Whoever has it, throws it."
- Scene 8 (field tip) — "Dead play is your thinking time and most beginners
  waste it. The walk to the pivot is the only unhurried moment you get all
  point. Use it to look downfield and pick your first throw, so you are not
  deciding under a stall count."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
In the cloud build run this works as written. On Windows, `python
tools\win_render.py reel-45` — read `tools/WINDOWS_FALLBACK.md` first.

**Take the render script from `content/reel-41/render_v3.py` or newer**, never
from reel-36 or earlier; only reels 38 onwards carry the `tracked()` word-gap
fix.

---

## Script (~30s)

- Hook: "There are moments in a point where you literally cannot turn the disc over. Knowing which ones tells you when you can relax."
- Explanation: "Play is dead in four windows. From the start of a point until the pull is released. While the disc is being carried to the pivot spot. After any call, until the disc is checked in. And after the disc hits the ground, until somebody establishes possession. Everything else is live."
- Example: "Dead play is not a freeze — you are free to move, unless a rule says otherwise. But there is one restriction that surprises people. During dead play the thrower may not transfer the disc to another player. So jogging in after a turnover and handing it to the team-mate who is closer to the spot? Not allowed. Whoever has it, throws it."
- CTA: "Lesson 45 of 75 — new lesson daily."

## Instagram caption

There are moments in a point where you literally cannot turn the disc over.

"Play is 'dead', and no turnover is possible:"

Four windows. Two of them before anything has gone wrong:

"After the start of a point, until the pull is released;"

"When the disc must be carried to the pivot location after the pull or a turnover, until a pivot point is established;"

And two after something has:

"After a call which stops the play or any other stoppage, until the disc is checked in; or"

"After a disc hits the ground, until possession is established by the appropriate team."

That last one is why a bobbled pick-up is not a turnover. The disc was already on the ground, so there was nothing live to lose.

Everything else is live, and live is where you can lose it.

"Play that is not dead is “live”."

Dead play is not a freeze — players are free to move unless a rule says otherwise. But there is one restriction that surprises people:

"The thrower may not transfer possession of the disc during dead play to another player."

So jogging in after a turnover and handing the disc to the team-mate who is closer to the spot is not allowed. Whoever has it, throws it.

Use the window. The walk to the pivot is the only unhurried moment you get all point — look downfield and pick your first throw before the count starts.

Lesson 45 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (8.1, 8.1.1, 8.1.2, 8.1.3, 8.1.4, 8.2, 8.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

there are moments in a point where you literally cannot turn it over 🥏

"Play is 'dead', and no turnover is possible:"

four windows. two before anything goes wrong:

"After the start of a point, until the pull is released;"

"When the disc must be carried to the pivot location after the pull or a turnover, until a pivot point is established;"

two after something does:

"After a call which stops the play or any other stoppage, until the disc is checked in; or"

"After a disc hits the ground, until possession is established by the appropriate team."

← this is why a bobbled pick-up isn't a turnover. it was already on the ground

everything else is live

"Play that is not dead is “live”."

dead play isn't a freeze, you can move. but one restriction surprises everyone:

"The thrower may not transfer possession of the disc during dead play to another player."

so you can't jog in and hand it to whoever's closer to the spot 🚫 whoever has it, throws it

the walk to the pivot is your only unhurried moment all point. use it

lesson 45 of 75

rules from WFDF Rules of Ultimate 2025–2028 (8.1, 8.1.1, 8.1.2, 8.1.3, 8.1.4, 8.2, 8.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(8.1, 8.1.1, 8.1.2, 8.1.3, 8.1.4, 8.2, 8.3).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs. `TOTAL = 9`.
- **NOT DRY-MEASURED** — sixth consecutive sandbox mount failure. Caption
  figures were measured in the browser; kicker widths and body layout are
  estimates. Verify at render time.
- **FLAGGED, NEW: 8.1's block lead is carded twice**, once on scene 3 and again
  on scene 5, so that 8.1.1–8.1.4 can be split across two pairs without any
  fragment losing its lead. A single five-block card would very likely collide
  with the citation footer — reel-18 v1's rejection — and trip `fit_body()`'s
  80% floor. This is a judgement call. If the repetition reads badly, the
  fallback is four pairs at eleven scenes.
- **Preserve the rulebook's own inconsistent quote marks.** 8.1 uses straight
  single quotes around 'dead'; 8.2 uses curly double quotes around “live”. That
  is how `rules.json` has it and both must survive to the PNG unchanged.
  **LIKELY `_payload()` cases:** both, plus 8.1.1's and 8.1.3's trailing "; or".
- **Do not call dead play a freeze.** 8.1.5 says players are allowed to move
  during dead play, and the copy says so. 8.1.5 is not in the lesson's `rules`
  array and is deliberately not carded; the point is made in the scene-6 body in
  plain words, without citation, and is not presented as a quotation.
- **Do not overstate 8.3.** It bars the *thrower* transferring the disc during
  dead play. It is not a general ban on touching the disc.
- Instagram caption 1,603 characters including hashtags (72.9% of the 2,200
  limit, the shortest in this batch); TikTok 1,164 of 4,000. Both plain text and
  scanned clean of markdown. Measured in UTF-16 units in the browser on
  2026-09-12, since `check_caption.py` could not be run.
- Curriculum position: lesson 45 is index 11 of `content/lessons-3.json`, the
  next unused lesson after 44. It covers 2026-09-19, the last date in the
  widened tomorrow-through-tomorrow+6 window.
- No growth/reach claims in either caption.
