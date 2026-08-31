# Reel 30 — Blocking fouls

**Status:** Pending review
**Script drafted:** 2026-09-01 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-04 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (12.5, 17.4.1, 12.9)
**Source lesson:** `content/lessons-2.json` → `blocking-foul`

Lesson 28 was contact that stops a catch, lesson 29 contact that takes a catch
away. This one isn't about the disc at all — it's about the ground you stand
on. Third of the four named foul types (28 receiving, 29 strip, 30 blocking,
31 force-out), and the one that most often gets defended with "but I was there
first".

---

## Video — `reel30-blocking-fouls.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 20, 21, 22, 23, 25, 26, 27 and 28. The lesson
cites three rules, so three pairs.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Blocking fouls · kicker BEGINNER · LESSON 30 / 75 |
| 2 | #1 EMPTY SPACE IS YOURS TO TAKE | "Two conditions come attached." · footer cites 12.5 |
| 3 | Rules detail | Verbatim 12.5 |
| 4 | #2 NOT A SPACE THEY CAN'T AVOID | "First by a fraction still isn't first." · footer cites 17.4.1 |
| 5 | Rules detail | Verbatim 17.4.1 |
| 6 | #3 ARMS AND LEGS ARE NOT POSITION | "You cannot box out." · footer cites 12.9 |
| 7 | Rules detail | Verbatim 12.9 |
| 8 | FIELD TIP | "Boxing out is a habit from another sport." |
| 9 | Closing | "Lesson 30 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Order is 12.5 → 17.4.1 → 12.9, not the lesson's array order.** The lesson
lists 17.4.1 first because that is the foul it is named for, but the reel has
to grant the permission before it can draw the limit: 12.5 says the space is
yours, 17.4.1 says which space isn't, and 12.9 closes the loophole of using
your limbs instead of your position. Leading with 17.4.1 would make the whole
reel sound like defence is illegal.

**17.4 is a heading stem** ("Blocking Fouls:") and is *not* carded — same call
as 17.2 in reel 28 and 17.3 in reel 29. Its child stands alone as a complete
sentence: 17.4.1 begins "A Blocking Foul occurs when…", so the stem would only
look like a fourth citation and add nothing.

**17.4's annotation is not carded either, and must not be paraphrased onto a
scene.** It is the richest annotation in the chapter — the "if a tree suddenly
materialized in this space" test, recklessness, who is guilty when two players
reserve the same space. All of it is commentary, none of it is rule text, and
the reel cites rule text only. Scene 4's body may explain the expected-position
test in plain English because 17.4.1 states it; it may not import the tree.

**Two things the script deliberately does not claim:**

- **17.4.1 requires "non-minor contact".** Lesson 27 already taught that minor
  contact is not a foul, and this rule carries the same qualifier. Scene 4's
  body says "can't avoid", and the card underneath supplies the rest — do not
  let the spoken script imply that any contact at all makes it a block.
- **The remedy is deferred, not stated.** 17.4.1 ends "treated as either a
  receiving foul or an indirect foul, whichever is applicable", which depends
  on machinery lesson 30 hasn't covered. The card carries that sentence
  verbatim; the script does not try to explain it. Indirect fouls get their own
  lesson later.

**Layout, measured with `fit_kicker()` / `fit_body()` before drafting:**

- Scene 2's kicker `#1   EMPTY SPACE IS YOURS TO TAKE` measures 887 of the
  900px column at the standard 34px — the second-widest ever drafted, behind
  reel-25's 893px. It fits, but there is no room to lengthen it in review.
- Scene 4's `#2   NOT A SPACE THEY CAN'T AVOID` sits at 871px, also standard.
- Scene 6's `#3   ARMS AND LEGS ARE NOT POSITION` needs `fit_kicker()`: it
  renders at 32px (895px). Expected, not a defect.
- All three bodies fit at the standard 36px, last baselines at 1040, 962 and
  934 against the 1090 limit.
- Detail cards are uncrowded: 12.5 ends at max_y 716, 17.4.1 at 866 and 12.9 at
  566, all against 1310. No split, no trimming — 17.4.1 is carded whole despite
  being the longest rule text in the reel at 346 characters.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29.5s)

- Hook: "You got to the spot first, they ran into you, and you think that settles it. It doesn't. Being there first is not the test."
- Explanation: "Start with what you are allowed. Every player is entitled to occupy any position on the field not occupied by any opposing player — provided they do not initiate contact taking it, and are not moving in a reckless or dangerously aggressive manner. So the space is genuinely yours. The limit is what the space costs the other player. A blocking foul occurs when a player takes a position that an opponent moving in a legal manner will be unable to avoid, taking into account that opponent's expected position based on their established speed and direction."
- Example: "Expected position is the whole thing. A cutter at full speed has already committed to the next few metres. Step into that line at the last instant and it doesn't matter that you technically arrived a fraction earlier — they could not have avoided you, so it's your foul. And the same logic covers your limbs: players may not use their extended arms or legs to obstruct the movement of opposing players. Normal running and jumping isn't extended. Putting an arm out to hold someone off a cut is."
- CTA: "Lesson 30 of 75 — new lesson daily."

## Instagram caption

You got to the spot first. They ran into you. You think that settles it — and it doesn't, because being there first is not the test.

**Start with what you're allowed.** "Every player is entitled to occupy any position on the field not occupied by any opposing player, provided that they do not initiate contact in taking such a position, and are not moving in a reckless or dangerously aggressive manner." So the space really is yours to take. Two conditions, both about how you take it.

**The limit is what the space costs the other player.** "A Blocking Foul occurs when a player takes a position that an opponent moving in a legal manner will be unable to avoid, taking into account the opponents expected position based on their established speed and direction, and non-minor contact results. This is to be treated as either a receiving foul or an indirect foul, whichever is applicable."

That last sentence points at machinery we haven't covered yet — indirect fouls get their own lesson. Ignore it for now and stay on the first half.

Expected position is the part people skip. A cutter at full speed has already committed to the next few metres — that ground is spoken for by where they are going, not by where they are. Step into it at the last instant and arriving a fraction earlier doesn't save you. They could not have avoided you. That's the foul.

**And it covers your limbs, not just your feet.** "Players may not use their extended arms or legs to obstruct the movement of opposing players." Normal running and jumping isn't "extended". An arm across someone's chest to hold them off a cut is.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

"i was there first" is not the defence you think it is 🥏

what you ARE allowed:

"Every player is entitled to occupy any position on the field not occupied by any opposing player, provided that they do not initiate contact in taking such a position, and are not moving in a reckless or dangerously aggressive manner."

the space is yours. two conditions on how you take it

the limit:

"A Blocking Foul occurs when a player takes a position that an opponent moving in a legal manner will be unable to avoid, taking into account the opponents expected position based on their established speed and direction, and non-minor contact results. This is to be treated as either a receiving foul or an indirect foul, whichever is applicable."

(that last line is machinery for a later lesson — stay on the first half)

EXPECTED POSITION is the bit everyone skips

a cutter at full speed has already committed to the next few metres. that ground is spoken for

step into it at the last instant? arriving a fraction earlier doesn't save you. they couldn't avoid you

and it's not just your feet:

"Players may not use their extended arms or legs to obstruct the movement of opposing players."

normal running and jumping isn't "extended". an arm across someone's chest is

boxing out is a basketball habit. here it's just illegal

lesson 30 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(12.5, 17.4.1, 12.9).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the same shape
  as reels 20–23 and 25–28.
- **17.4.1 carries "opponents" with no apostrophe.** That is what `rules.json`
  holds and what the source document prints, so it stays that way everywhere the
  rule is reproduced — the card, and the block quotes in both captions. The
  spoken script is not a quotation and reads "that opponent's expected
  position", which is the same word with the punctuation the sentence wants.
- **The reel must not leave a viewer thinking defence is illegal.** 12.5 comes
  first for exactly this reason. Scene 2 has to land as permission, not as a
  warning, or the whole thing reads as "don't stand anywhere near anyone".
- **Do not import 17.4's annotation.** The tree test is memorable and it is
  commentary, not rule text. See the citation note above.
- **The field tip cites no rule number.** Scene 8 has no citation footer, and
  the point it makes — boxing out is a transplanted basketball habit — is
  covered by 12.9, already carded on scene 7.
- **Next up is lesson 31, force-out fouls (17.5.x)** — five rule numbers, the
  densest citation set in this run. Don't pre-empt it; scene 6 stays on limbs,
  not on landing.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
