# Reel 31 — Force-out fouls

**Status:** Pending review
**Script drafted:** 2026-09-02 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-05 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (17.5.1, 17.5.1.1, 17.5.1.2, 17.5.2, 17.5.3)
**Source lesson:** `content/lessons-3.json` → `force-out`

The last of the four named foul types — 28 receiving, 29 strip, 30 blocking,
31 force-out — and the one that completes the set's logic. Lesson 28 was
contact that stops a catch, 29 contact that takes a completed catch away, 30
contact over ground rather than the disc. This one is contact that changed
*where the catch happened*, and the remedy is the same idea each time: the rule
gives back what the contact took.

---

## Video — `reel31-force-out-fouls.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 20–23, 25–28 and 30.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Force-out fouls · kicker BEGINNER · LESSON 31 / 75 |
| 2 | #1 THE CONTACT MOVED YOU | "The foul has to be what put you there." · footer cites 17.5.1, 17.5.1.1, 17.5.1.2 |
| 3 | Rules detail | Verbatim 17.5.1 + 17.5.1.1 + 17.5.1.2 |
| 4 | #2 IN THE END ZONE, IT'S A GOAL | "If it would have been a goal, it is a goal." · footer cites 17.5.2 |
| 5 | Rules detail | Verbatim 17.5.2 |
| 6 | #3 CONTESTED SPLITS TWO WAYS | "Contested? It depends where you ended up." · footer cites 17.5.3 |
| 7 | Rules detail | Verbatim 17.5.3 |
| 8 | FIELD TIP | "If you were going out anyway, it's just out." |
| 9 | Closing | "Lesson 31 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**17.5 is a heading stem** ("Force-out Fouls:") and is *not* carded — the same
call as 17.2 in reel 28, 17.3 in reel 29 and 17.4 in reel 30.

**17.5.1 is a stem that ends in a colon and needs both its limbs on the same
card.** "…and the contact caused the receiver:" is not a sentence on its own,
and 17.5.1.1 and 17.5.1.2 are the two ways it finishes. This is the same
handling as 12.7 in reel 26 and 1.3 in reels 23 and 27: parent and children on
one card, children on their own lines in the orange sub-number style.

**17.5.2 ends with a semicolon**, which is what `rules.json` holds and what the
source prints. It stays. Do not tidy it to a full stop — the card is a
quotation.

**Five rule numbers, the densest citation set so far**, but only three cards:
the first carries three, the other two carry one each.

**Layout — dry-rendered and measured 2026-09-02, before drafting was finalised:**

- All three kickers fit at the standard 34px: `#1   THE CONTACT MOVED YOU` at
  712 of the 900px column, `#2   IN THE END ZONE, IT'S A GOAL` at 834, and
  `#3   CONTESTED SPLITS TWO WAYS` at 826. `fit_kicker()` is not engaged.
- All three bodies render at the standard 36px, over six, five and four lines.
  `fit_body()` is not engaged.
- All three main scenes end at max_y 1192 of 1310. Layout check **0 problems,
  no collisions.**
- The detail cards are uncrowded even with the three-number block: 17.5.1 with
  both limbs lands at max_y 940, 17.5.2 at 404, 17.5.3 at 504 — all against
  1310. No split, no trimming.
- Projected duration **30.0s** on the house rhythm.
- **No leading or trailing double quotes** anywhere in this reel's copy, so the
  `_payload()` case does not arise. (See the note below — that helper was
  broadened on 2026-09-02.)

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-28/render_v3.py` is the newest copy and carries the widened
`_payload()`; start from that one, not from an older reel.

---

## Script (~30s)

- Hook: "You catch it a step inside the line, a defender bumps you, and your feet land out. Was that just out — or was it a foul that owes you something?"
- Explanation: "It's a force-out if the contact is what moved you. A force-out foul occurs when a receiver is in the process of establishing possession, and is fouled by a defensive player before establishing it, and the contact caused the receiver to catch the disc out-of-bounds instead of in-bounds, or in the central zone instead of their attacking end zone. Two ways to be moved: across the sideline, or short of the end zone."
- Example: "And the remedy matches. If you would have caught the disc in your attacking end zone, it is a goal — not the disc at the line, the point. If the call is contested, it splits on where you actually ended up: if you became out-of-bounds, the disc goes back to the thrower; otherwise it stays with you."
- CTA: "Lesson 31 of 75 — new lesson daily."

## Instagram caption

You catch it a step inside the line, a defender bumps you, and your feet land out. Was that just out — or was it a foul that owes you something?

**The test is whether the contact moved you.** "A Force-out Foul occurs when a receiver is in the process of establishing possession of the disc, and is fouled by a defensive player before subsequently establishing possession, and the contact caused the receiver:" — and then two ways to be moved: "to catch the disc out-of-bounds instead of in-bounds; or" "to catch the disc in the central zone instead of their attacking end zone."

Read those two together and the shape of the rule is clear. It isn't about contact near a line. It's about contact that changed which side of a line you finished on.

**The remedy gives back what the contact took.** "If the receiver would have caught the disc in their attacking end zone, it is a goal;" Not the disc at the goal line. The point.

**And if it's contested, the outcome splits.** "If the force-out foul is contested, the disc is returned to the thrower if the receiver became out-of-bounds, otherwise the disc stays with the receiver." So a contested force-out where you went out is a reset; a contested one where you stayed in leaves the disc with you.

That's the fourth and last of the named foul types — receiving, strip, blocking, force-out. Each one names a specific thing contact can take away, and each one hands it back.

Lesson 31 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

you catch it inside the line, get bumped, land out. just out? or a foul that owes you something 🥏

the test is whether the contact MOVED you:

"A Force-out Foul occurs when a receiver is in the process of establishing possession of the disc, and is fouled by a defensive player before subsequently establishing possession, and the contact caused the receiver:"

two ways to be moved —

"to catch the disc out-of-bounds instead of in-bounds; or"

"to catch the disc in the central zone instead of their attacking end zone."

so it's not about contact near a line. it's about contact that changed which side of the line you finished on

the reward:

"If the receiver would have caught the disc in their attacking end zone, it is a goal;"

not the disc at the line. THE POINT

contested? it splits:

"If the force-out foul is contested, the disc is returned to the thrower if the receiver became out-of-bounds, otherwise the disc stays with the receiver."

went out → back to the thrower. stayed in → it's yours

that's all four named foul types now: receiving, strip, blocking, force-out

lesson 31 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(17.5.1, 17.5.1.1, 17.5.1.2, 17.5.2, 17.5.3).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs.
- **"In the process of establishing possession" is the hinge and must not be
  simplified.** The foul has to happen *before* possession is established. Once
  you have established it and contact knocks it out, that is lesson 29's strip,
  not this. The two lessons sit either side of the same instant and the script
  must not blur them.
- **Do not say "if you were going out anyway it's still a foul".** It is the
  opposite, and it is the whole point of the field tip: the contact has to have
  *caused* the different outcome. The lesson's own `field` line says so.
- **The contested branch is worth the scene** even though reel 23 already taught
  contesting in general, because 17.5.3 is the only place in this chapter where
  a contested call resolves differently depending on the outcome rather than
  simply returning the disc.
- **No new citation on the field tip.** Scene 8 has no citation footer; the
  point it makes is contained in 17.5.1's own "the contact caused", already
  carded on scene 3.
- **`content/scenes.json` carries a `force-out` diagram** used by the website
  chapter for this lesson. Reels have no diagram scene and this one does not
  introduce it; noted only so it isn't discovered as a surprise later.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
