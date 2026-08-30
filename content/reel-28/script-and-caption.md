# Reel 28 — Receiving fouls

**Status:** Pending review
**Script drafted:** 2026-08-30 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-02 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (17.2.1, 17.2.1.1, 17.2.2, 15.8)
**Source lesson:** `content/lessons-3.json` → `receiving-foul`

Lessons 25–27 built the contact framework: you must try to avoid it, the rules
define who initiated it, and minor contact isn't a foul. This is the first of
the four named foul types (28 receiving, 29 strip, 30 blocking, 31 force-out),
and it's the one a beginner will meet first — contact while two people go up
for the same disc.

---

## Video — `reel28-receiving-fouls.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard three-pair shape, same as reels 16, 18, 20,
21, 22, 23, 25 and 26.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Receiving fouls · kicker BEGINNER · LESSON 28 / 75 |
| 2 | #1 BEFORE, WHILE OR JUST AFTER | "A receiving foul is contact on the play for the disc." · footer cites 17.2.1, 17.2.1.1 |
| 3 | Rules detail | Verbatim 17.2.1 + 17.2.1.1 |
| 4 | #2 EVEN IN THE END ZONE | "The reward is the disc, exactly where it happened." · footer cites 17.2.2 |
| 5 | Rules detail | Verbatim 17.2.2 |
| 6 | #3 SAY IT IMMEDIATELY | "A foul called late is a different situation entirely." · footer cites 15.8 |
| 7 | Rules detail | Verbatim 15.8 |
| 8 | FIELD TIP | "Call it at the moment of contact, out loud." |
| 9 | Closing | "Lesson 28 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**17.2 is a heading stem** ("Receiving Fouls:") and is *not* carded. Unlike
1.3 in reel 27 or 12.7 in reel 26, its child stands alone as a complete
sentence — 17.2.1 begins "A Receiving Foul occurs when…" — so the stem adds
nothing the card needs and would only look like a fourth citation.

**17.2.1.1 shares scene 3 with its parent.** It is the boundary of the same
definition — what still counts, and where it stops — so the pair reads as one
rule rather than two. All four of the lesson's rule numbers are used, and
nothing else is cited.

**Layout, measured against `fit_kicker()` / `fit_body()` before drafting:**

- Widest kicker is scene 2's `#1   BEFORE, WHILE OR JUST AFTER` at 858 of the
  900px column — inside the standard 34px, below reel-25's 893px record.
  Scenes 4 and 6 measure 644 and 573px.
- Scene 2's body auto-fits to 33px over five lines (last baseline 1074 against
  the 1090 limit); scenes 4 and 6 stay at 36px. Nothing engages either floor.
- Scene 5's card carries the longest rule text in the reel at 381 characters,
  comfortably shorter per-card than reel-23's 13.3 (314 chars over eight lines
  at 38px, max_y 704 of 1310) split across two blocks. It should not need a
  split; confirm with `tools/check_layout.py` at render time.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "Two of you go up for the same disc and there's contact. This is the foul you'll meet first, and it has the biggest reward in the rulebook."
- Explanation: "A receiving foul occurs when a player initiates non-minor contact with an opponent before, while, or directly after either player makes a play on the disc. So it isn't contact in general — it's contact on the play, inside that window. And there's a limit at the other end: contact with an opponent's arms or hands after the disc has been caught is not a sufficient basis for a foul, though it should still be avoided."
- Example: "Here's why it matters. After an accepted receiving foul the fouled player gains possession at the location of the breach, even if that location is in an end zone. Not back to the thrower — the disc, where the contact happened, and play restarts with a check. But you only get that if you call it in time: calls must be made immediately after the breach is recognised."
- CTA: "Lesson 28 of 75 — new lesson daily."

## Instagram caption

Two of you go up for the same disc and there's contact. This is the foul you'll meet first, and it has the biggest reward in the rulebook.

**A receiving foul is contact on the play, not contact in general.** A Receiving Foul occurs when a player initiates non-minor contact with an opponent before, while, or directly after, either player makes a play on the disc. That window — before, while, or directly after — is doing real work. Bumping someone in the stack on the far side of the field is a different rule.

**And it stops at the catch.** Contact with an opponent’s arms or hands, that occurs after the disc has been caught, or after the opponent can no longer make a play on the disc, is not a sufficient basis for a foul, but should be avoided. So the follow-through where your hand grazes their forearm as they bring it in isn't the call. Don't do it — but don't call it either.

**The reward is why this one matters.** After an accepted receiving foul the fouled player gains possession at the location of the breach, even if that location is in an end zone, and play restarts with a check. Read that again: in an end zone. Not a reset to the thrower — the disc, where the contact happened. If it's contested, the disc goes back to the thrower.

**All of which depends on saying it in time.** Calls must be made immediately after the breach is recognised. Not after you've watched where the disc landed, and not after you've decided whether you'd have caught it. The moment you feel it.

Lesson 28 of 75. Next up: what happens when contact knocks a disc out of hands that had already caught it.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

two of you go up for the same disc. there's contact. this is the foul you'll meet first 🥏

"A Receiving Foul occurs when a player initiates non-minor contact with an opponent before, while, or directly after, either player makes a play on the disc."

before, while, or directly after. it's contact ON THE PLAY, not contact in general

and it stops at the catch — contact with an opponent’s arms or hands after the disc has been caught "is not a sufficient basis for a foul, but should be avoided"

so the graze on the follow-through? don't do it. don't call it either

now the reward, and this is the part people don't know:

"the fouled player gains possession at the location of the breach, even if that location is in an end zone, and play restarts with a check"

IN AN END ZONE. not back to the thrower. the disc, right where it happened

contested instead? disc goes back to the thrower

one catch: "Calls must be made immediately after the breach is recognised." the moment you feel it — not after you've seen where the disc landed

lesson 28 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(17.2.1, 17.2.1.1, 17.2.2, 15.8).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the same shape
  as reels 16, 18, 20, 21, 22, 23, 25 and 26.
- **First of the four named foul types.** 28 receiving, 29 strip, 30 blocking,
  31 force-out. Scene 4 must stay on *this* foul's remedy and not start
  comparing it to the strip's, which is lesson 29's whole point.
- **Keep "non-minor".** It is the hinge that connects this lesson back to 27,
  and it is the rulebook's own word. Do not simplify it to "hard" or "real"
  contact anywhere the rule is being reproduced.
- **17.2.1.1 carries a curly apostrophe** in "opponent's", and its trailing
  parenthetical "(excluding contact related to Section 17.1 and 17.3)" is part
  of the rule. `rt()` emits both. Do not normalise the apostrophe and do not
  trim the parenthetical to save a line — shrink the type instead.
- **17.2.2's middle sentence about 14.3 and the pivot point is not explained in
  the script, and that is deliberate.** The card quotes the rule whole because
  that is what a citation is; the voiceover stays on the part a beginner needs
  (possession at the spot, even in an end zone, check to restart). Do not cut
  the sentence from the card to make the two match.
- **The contested branch is in the caption, not the reel.** "If the foul is
  contested, the disc is returned to the thrower" is on the card either way,
  since it is the same rule — but reel 23 already taught contesting, so the
  spoken script doesn't re-teach it.
- **The field tip must not cite a rule number.** Late calls are handled under
  15.9, which is not in this lesson's `rules` array, so the tip stays practical
  ("call it at the moment of contact") rather than introducing a fourth
  citation on a slide that has no citation footer.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
