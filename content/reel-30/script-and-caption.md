# Reel 30 — Blocking fouls

**Status:** Content pending review (v2)
**Script drafted:** 2026-09-01 · **Redrafted:** 2026-09-04 · **Script approved:** 2026-09-03T23:48Z (desk) · **Rendered:** 2026-09-04 (v2, daily-reel-render)
**Queued:** 2026-09-04 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (12.5, 17.4.1, 12.9)
**Source lesson:** `content/lessons-2.json` → `blocking-foul`

Lesson 28 was contact that stops a catch, lesson 29 contact that takes a catch
away. This one isn't about the disc at all — it's about the ground you stand
on. Third of the four named foul types (28 receiving, 29 strip, 30 blocking,
31 force-out), and the one that most often gets defended with "but I was there
first".

**v2 corrects an overstatement.** v1's scene 6 headline read "You cannot box
out." That is broader than 12.9, which bans **extended arms or legs**, not
holding a position with your body — and 12.5, already carded two scenes
earlier, grants that position outright. Min-Yi rejected the cut for it three
times: *"We can box out in ultimate using body. Just not using arms."* The
redraft says what the rule says. Nothing else about the reel changes: same
three rules, same nine scenes, same order.

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
| 6 | #3 ARMS AND LEGS ARE NOT POSITION | "You can box out — just not with your arms." · footer cites 12.9 |
| 7 | Rules detail | Verbatim 12.9 |
| 8 | FIELD TIP | "Box out with your body, not your arms." |
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
- **Measured at render (2026-09-01):** every prediction above held. Scene 2's
  kicker at 887px and scene 4's at 871px both stayed at 34px; scene 6's at
  951px auto-fit to 32px. All three bodies rendered at the standard 36px, and
  all three main scenes ended at max_y 1192 of 1310 with no collisions.
- Detail cards are uncrowded: 12.5 ends at max_y 716, 17.4.1 at 866 and 12.9 at
  566, all against 1310. No split, no trimming — 17.4.1 is carded whole despite
  being the longest rule text in the reel at 346 characters.

**The two slides v2 changes**, recorded so the rebuild is reproducible. Both
were re-measured 2026-09-04 and neither changes the reel's layout profile:

- Scene 6 — headline "You can box out — just not with your arms."; body
  "Position is where your body is, not how far you can reach. Standing your
  ground between an opponent and the disc is legal — 12.5 already said the
  space is yours. What 12.9 bans is using extended arms or legs to obstruct
  them. Normal running and jumping is not extended; an arm across someone's
  chest is." Kicker unchanged and still auto-fits to 32px at 895 of 900px; the
  headline stays two lines; the body auto-fits to 33px over seven lines and
  ends at max_y 1192, same as v1.
- Scene 8 (field tip) — headline "Box out with your body, not your arms.";
  body "Sealing someone behind an extended arm is basketball defence, and 12.9
  names it. Holding a legal position with your body is not the same thing and
  is not a foul. Keep your arms in, take the ground with your feet, and there
  is nothing to argue about afterwards." Two-line headline, six-line body,
  ends at max_y 1062. No citation footer, as before.

Scenes 1–5, 7 and 9 are untouched and re-render identically: no rules card,
rule number or rule text moves.

**Measured at rebuild, 2026-09-04.** Nine scenes, exact CFR via `encode.py`,
**29.50s** — the same as v1, since no line count moved. Layout check **0
problems, no collisions**: main scenes at max_y 1192, 1192 and 1192 of 1310,
detail cards at 604, 754 and 454, field tip 1062, cover 1210, closing 900.
Scene 6's kicker still auto-fits to 32px and its body to 33px, exactly as
predicted. `check_dull.py`: longest sustained run **0.20s** against a 0.45s
threshold. 12.5, 17.4.1 and 12.9 re-verified character-for-character against
`rules.json`.

**The "only two scenes changed" claim was verified, not assumed.** The v1 copy
was re-rendered in parallel and the two frame sets compared pixel by pixel: of
34 states, exactly 5 differ — three on scene 6 and two on scene 8. Everything
else is pixel-identical to the rejected cut.

Built on `content/reel-31/render_v3.py` rather than reel-30's own copy, because
reel-31's carries the 2026-09-02 `_payload()` widening (the closing-delimiter
case). No line in this reel ends with a double quote, so it is a no-op here —
which is what the pixel comparison proves.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29.5s)

- Hook: "You got to the spot first, they ran into you, and you think that settles it. It doesn't. Being there first is not the test."
- Explanation: "Start with what you are allowed. Every player is entitled to occupy any position on the field not occupied by any opposing player — provided they do not initiate contact taking it, and are not moving in a reckless or dangerously aggressive manner. So the space is genuinely yours. The limit is what the space costs the other player. A blocking foul occurs when a player takes a position that an opponent moving in a legal manner will be unable to avoid, taking into account that opponent's expected position based on their established speed and direction."
- Example: "Expected position is the whole thing. A cutter at full speed has already committed to the next few metres. Step into that line at the last instant and it doesn't matter that you technically arrived a fraction earlier — they could not have avoided you, so it's your foul. And there is one more limit — on your limbs, not on your position. Holding a spot with your body is fine; that is the permission we started with. What you may not do is use extended arms or legs to obstruct the movement of opposing players. Normal running and jumping isn't extended. An arm out to hold someone off a cut is."
- CTA: "Lesson 30 of 75 — new lesson daily."

## Instagram caption

You got to the spot first. They ran into you. You think that settles it — and it doesn't, because being there first is not the test.

**Start with what you're allowed.** "Every player is entitled to occupy any position on the field not occupied by any opposing player, provided that they do not initiate contact in taking such a position, and are not moving in a reckless or dangerously aggressive manner." So the space really is yours to take. Two conditions, both about how you take it.

**The limit is what the space costs the other player.** "A Blocking Foul occurs when a player takes a position that an opponent moving in a legal manner will be unable to avoid, taking into account the opponents expected position based on their established speed and direction, and non-minor contact results. This is to be treated as either a receiving foul or an indirect foul, whichever is applicable."

That last sentence points at machinery we haven't covered yet — indirect fouls get their own lesson. Ignore it for now and stay on the first half.

Expected position is the part people skip. A cutter at full speed has already committed to the next few metres — that ground is spoken for by where they are going, not by where they are. Step into it at the last instant and arriving a fraction earlier doesn't save you. They could not have avoided you. That's the foul.

**One more limit — on your limbs, not your position.** "Players may not use their extended arms or legs to obstruct the movement of opposing players."

Read that narrowly, because it is narrow. You *can* box out. Putting your body between an opponent and where they want to go is holding a position, and 12.5 already said unoccupied positions are yours to take. What the rule removes is the arm: normal running and jumping isn't "extended", but an arm across someone's chest to hold them off a cut is, and that is a foul whatever your feet are doing.

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

one more limit — on your limbs, not your position:

"Players may not use their extended arms or legs to obstruct the movement of opposing players."

read it narrowly. you CAN box out — putting your body between someone and where they want to go is just holding a position, and 12.5 already gave you that

what's out is the arm. normal running and jumping isn't "extended". an arm across someone's chest is

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
  v1 broke this on scene 6 even though scene 2 was right — one over-broad
  headline was enough to undo it.
- **Do not import 17.4's annotation.** The tree test is memorable and it is
  commentary, not rule text. See the citation note above.
- **The field tip cites no rule number.** Scene 8 has no citation footer, and
  the point it makes — box out with your body, keep your arms in — is covered
  by 12.9 on scene 7 and 12.5 on scene 3.
- **Do not write "you cannot box out" anywhere, in any version.** It is the
  defect v1 was rejected for, three rounds running. 12.9 bans *extended arms or
  legs* used to obstruct; it says nothing about occupying a position with your
  body, which 12.5 expressly permits. The distinction is the whole point of
  scene 6 and it has to survive every future edit.
- **Next up is lesson 31, force-out fouls (17.5.x)** — five rule numbers, the
  densest citation set in this run. Don't pre-empt it; scene 6 stays on limbs,
  not on landing.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
