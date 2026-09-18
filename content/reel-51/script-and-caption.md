# Reel 51 — "Technical stoppages and blood"

**Status:** Pending review
**Script drafted:** 2026-09-18 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-25 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (19.2.1, 19.2.1.1, 19.2.1.2, 19.2.2)
**Source lesson:** `content/lessons-3.json` → `technical-stoppage`

Fourth reel of the stoppages block and the second appearance of chapter 19.
Reel 50 covered the injury stoppage — the stop that happens *to* you. This is
the other half of 19.2: the stop anybody can call, for a danger nobody has been
hurt by yet. The two are deliberately adjacent and the copy leans on that:
scene 4 names the seventy-second wound clock as costing "what an injury costs",
which is a rule reel 50 has already taught and this one does not re-teach.

**One rule in the lesson's array is deliberately not carded — see "The rule
this reel does not quote" below. It needs a decision at the script gate.**

---

## Video — `reel51-technical-stoppages.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–50.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Technical stoppages and blood" · kicker BEGINNER · LESSON 51 / 75 |
| 2 | #1 ANYONE CAN CALL IT | "You don't need the disc to stop the game." · footer cites 19.2.1 · 19.2.1.1 |
| 3 | Rules detail | Verbatim 19.2.1, then 19.2.1.1 |
| 4 | #2 BLOOD HAS A CLOCK | "An open wound gets seventy seconds." · footer cites 19.2.1.2 |
| 5 | Rules detail | Verbatim 19.2.1.2 |
| 6 | #3 A WRECKED DISC COUNTS | "The same call fixes broken kit." · footer cites 19.2.2 |
| 7 | Rules detail | Verbatim 19.2.2 |
| 8 | FIELD TIP | "This one call is not about advantage." |
| 9 | Closing | "Lesson 51 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes.

### What the three cards do

1. **19.2.1 + 19.2.1.1 — who calls it.** The pair is the point. 19.2.1 gives
   the call to *any* player who recognises the condition, which is the opposite
   of the injury stoppage in reel 50, where the call belongs to the hurt
   player's own team. 19.2.1.1 widens it past the players entirely, to
   team-mates, coaches and officials. Carding the first alone would leave the
   sideline out of a rule that names it.
2. **19.2.1.2 — the seventy-second clock.** A single-rule card, because the
   number is the whole lesson and pairing it with anything dilutes it. The
   substitution-or-time-out fork at the end of it is the same fork reel 50
   carded from 19.1.2, and the copy points at that rather than re-explaining it.
3. **19.2.2 — the damaged disc.** Also a single-rule card. It is the one
   technical stoppage that is not about safety at all, and it is the only one
   restricted to a particular player: the thrower. Both of those are easy to
   miss if it shares a card.

### The rule this reel does not quote

**19.2.3 is in the lesson's `rules` array and is not carded, not quoted and not
in the attribution line.** Its text in `rules.json` is a lead-in that ends in a
colon — "After a technical stoppage called while the disc is in the air, or if
play has continued unknowingly:" — and it is a complete sentence only when
followed by 19.2.3.1 and 19.2.3.2, which resolve it into "did the call affect
the play or not". Those two sub-rules are **not** in this lesson's `rules`
array, and Step 1 says rule numbers come from that array.

So the options were: card a colon-terminated fragment that answers nothing, or
reach outside the array. Neither is this run's call to make, so the reel ships
covering the four rules that stand alone, and the question goes to the script
gate:

> **For Min-Yi:** 19.2.3 needs 19.2.3.1 and 19.2.3.2 to mean anything. Either
> add those two numbers to `technical-stoppage.rules` in
> `content/lessons-3.json` and this reel grows a fourth card (a natural pair —
> "did it affect the play?" is the same shape as reel 41's indirect-foul
> continuation), or leave 19.2.3 out of the reel permanently and drop it from
> the lesson's array so it stops reading as an omission. **Request changes with
> which you want.** Nothing here is invented either way — both sub-rules exist
> verbatim in `rules.json`; they are simply outside what this lesson currently
> declares.

This is the "raise it at the script gate rather than silently closing it"
instruction from `DAILY_RENDER_TASK.md`, applied to a rule rather than a lesson.

**Layout — DRY-MEASURED, 2026-09-18.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  1210 of the 1310 floor.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  `#1 ANYONE CAN CALL IT` 595.2px of the 900px column, `#2 BLOOD HAS A CLOCK`
  585.7px, `#3 A WRECKED DISC COUNTS` 708.5px. Cover `BEGINNER` 231.1px at its
  own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline and start their body at y=812.
  Scenes 2 and 6 wrap to four lines, last baseline **962**, clearance **128px**
  against the `CITE_Y - 60` limit of 1090. Scene 4 wraps to three, last baseline
  **912**, clearance **178px**.
- Scene 8's tip body ends at 1012 of the 1310 floor, 298px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards have the most room of any scene: last baselines **772** (scene 3,
  the two-rule card), **654** (scene 5) and **454** (scene 7) against the 1310
  floor. Scene 7 is the lightest rule card the account has shipped — 19.2.2 is
  89 characters — which is the cost of a single-rule card and is accepted here
  for the reason given above.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.
- **These are the emitted numbers, not estimates.** The draft run has been
  unable to dry-measure since 2026-09-08; reel 50 was the first one back and
  this is the second.

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "If you see a condition that endangers players, call \"technical\" or
  \"stop\" and play halts at once. Team-mates and coaches should be speaking up
  as well."
- Scene 4 — "That is the window to cover it or clean it up. Need longer and it
  costs what an injury costs: come off, or charge your own team a time-out."
- Scene 6 — "The thrower may stop play to replace a severely damaged disc. Same
  call, used for equipment rather than safety, and only the thrower makes it."
- Scene 8 (field tip) — "Every other call in the book is about who gained what.
  This one is not, so nobody will think less of you for stopping a point over a
  cut hand or a dog on the pitch. Make it early and make it loud."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-50/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix; only the `SCENES`
list differs. `TOTAL` is 9. Copy `blend.py` and `encode.py` in from reel-46 —
they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-51` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "Somebody is bleeding, or there's a dog on the pitch. Who is allowed to stop the game? Anyone. Including you."
- Explanation: "Any player who sees a condition that endangers people calls \"technical\" or \"stop\", and play halts immediately. You don't need the disc and you don't need to be on the affected team. Team-mates and coaches on the sideline should be shouting too."
- Example: "Blood has its own clock. An open wound gets seventy seconds to be dealt with, and if that isn't enough, it costs what an injury costs — come off, or charge your own team a time-out. The same call covers a badly damaged disc, though that one belongs to the thrower alone."
- CTA: "Lesson 51 of 75 — new lesson daily."

## Instagram caption

Anyone can stop the game for a safety issue. Anyone.

Most calls in ultimate belong to somebody specific — the thrower, the marker, the player who was fouled. This one belongs to everybody.

Who can call it:

"Any player who recognises a condition that endangers players, including if a player has an open or bleeding wound, should call a technical stoppage by calling “technical” or “stop”. Play must stop immediately."

You do not need the disc, you do not need to be on the affected team, and you do not need a captain. If you can see the danger, you make the call.

And it is not only players:

"A team-mate, coach, or designated official, should actively alert players to any condition that endangers players."

Then blood, which has its own clock:

"A player who has an issue regarding an open or bleeding wound has seventy (70) seconds to effectively address the issue. If they need additional time to address the issue, they must choose either to be substituted, or to charge their own team with a time-out."

Seventy seconds to cover it or clean it up. If that is not enough, the price is the same one an injury carries: come off, or charge your own team a time-out.

The same call covers broken kit:

"The thrower may call a technical stoppage during play to replace a severely damaged disc."

That one belongs to the thrower alone, and it is the one use of a technical stoppage that has nothing to do with safety.

Here is the part worth taking away. Every other call in the rulebook is an argument about who gained what. This one is not. Nobody is going to think less of you for stopping a point over a cut hand or a dog on the pitch, so make it early and make it loud.

Lesson 51 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (19.2.1, 19.2.1.1, 19.2.1.2, 19.2.2). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

technical stoppages 🥏

most calls in ultimate belong to somebody specific — the thrower, the marker, the player who got fouled. this one belongs to everybody

who can call it:

"Any player who recognises a condition that endangers players, including if a player has an open or bleeding wound, should call a technical stoppage by calling “technical” or “stop”. Play must stop immediately."

you don't need the disc, you don't need to be on the affected team, you don't need a captain. see the danger, make the call

and it isn't only players:

"A team-mate, coach, or designated official, should actively alert players to any condition that endangers players."

then blood, which has its own clock ⏱️

"A player who has an issue regarding an open or bleeding wound has seventy (70) seconds to effectively address the issue. If they need additional time to address the issue, they must choose either to be substituted, or to charge their own team with a time-out."

seventy seconds to cover it or clean it up. not enough? same price as an injury — come off, or charge your own team a time-out

same call covers broken kit:

"The thrower may call a technical stoppage during play to replace a severely damaged disc."

that one is the thrower's alone, and it's the one technical stoppage that has nothing to do with safety

the bit worth keeping: every other call in the book is an argument about who gained what. this one isn't. nobody will think less of you for stopping a point over a cut hand or a dog on the pitch

lesson 51 of 75

rules from WFDF Rules of Ultimate 2025–2028 (19.2.1, 19.2.1.1, 19.2.1.2, 19.2.2) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (19.2.1,
19.2.1.1, 19.2.1.2, 19.2.2).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes, three topic/rules pairs.** `TOTAL = 9`. Four of the lesson's
  five rules are carded; 19.2.3 is deliberately not, and needs a decision at the
  script gate — see "The rule this reel does not quote" above.
- **DRY-MEASURED 2026-09-18** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are
  emitted, not estimated.
- **"Any player" is load-bearing, and it is the opposite of reel 50.** 19.2.1
  gives this call to anyone who recognises the condition, where the injury
  stoppage in 19.1.1 belongs to the injured player's own team. Do not
  harmonise the two at review — the difference is the reason both reels exist.
- **Seventy seconds is a quoted number, not a rounded one.** 19.2.1.2 writes it
  "seventy (70)", and the card quotes it verbatim with both forms intact.
- **Scene 4 leans on reel 50 rather than re-teaching it.** "Costs what an injury
  costs" refers to the 19.1.2 fork, which reel 50 carded and which posts
  2026-09-24, the day before this one. The dependency is one day old on the post
  date and is deliberate.
- **Do not add chapter 12 here either.** 19.2.1.2 names substitution as one of
  the two ways to buy more time; how a substitution is made is lesson 52 and
  gets its own reel.
- **Preserve the rulebook's own punctuation.** 19.2.1 carries curly doubles
  around `“technical”` and `“stop”`. All of it must survive to the PNG and to
  the caption unchanged — the caption text was generated from `rules.json`
  rather than retyped, for exactly this reason.
- Instagram caption **1,955 characters** including hashtags (88.9% of the 2,200
  limit, under the 2,090 warn line); TikTok 1,737 of 4,000. Both plain text,
  both scanned clean of markdown, both measured in UTF-16 units by
  `tools/check_caption.py`, which exits 0.
- All four carded rules are quoted in full in both captions, and all four
  numbers are in the attribution line. At 1,955 there was room; a fifth quote
  would not have fit.
- Curriculum position: lesson 51 is index 17 of `content/lessons-3.json`, the
  next unused lesson after 50. It covers 2026-09-25, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
