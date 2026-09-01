# Reel 29 — Strip fouls

**Status:** Content pending review
**Script drafted:** 2026-08-31 · **Rendered:** 2026-09-01 (daily-reel-render)
**Queued:** 2026-09-03 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (17.3.1, 17.3.2)
**Source lesson:** `content/lessons-2.json` → `strip`

Lesson 28 covered the foul that stops you catching it. This is the one that
happens *after* you already have. It's the second of the four named foul types
(28 receiving, 29 strip, 30 blocking, 31 force-out), and it's the only one in
the set that can award a goal off a disc you didn't end up holding.

---

## Video — `reel29-strip-fouls.mp4` (1080×1920, 30fps)

Seven scenes — cover, two topic/rules-detail pairs, field tip, closing. The
two-pair shape, same as reels 11, 13, 14, 17, 19 and 24. The lesson cites two
rules, so two pairs.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Strip fouls · kicker BEGINNER · LESSON 29 / 75 |
| 2 | #1 YOU HAD IT, AND IT CAME OUT | "A strip is a foul that costs you a catch you'd already made." · footer cites 17.3.1 |
| 3 | Rules detail | Verbatim 17.3.1 |
| 4 | #2 IF IT WOULD HAVE BEEN A GOAL | "You get the goal, not the disc." · footer cites 17.3.2 |
| 5 | Rules detail | Verbatim 17.3.2 |
| 6 | FIELD TIP | "Say \"strip\", not just \"foul\"." |
| 7 | Closing | "Lesson 29 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**17.3 is a heading stem** ("Strip Fouls:") and is *not* carded — same call as
17.2 in reel 28. Its child stands alone as a complete sentence: 17.3.1 begins
"A Strip Foul occurs when…", so the stem would only look like a third citation
and add nothing the card needs.

**Both of the lesson's rule numbers are used. Nothing else is cited.** In
particular, **the non-goal remedy is spoken but not carded.** When the catch
wouldn't have been a goal, what applies is the ordinary receiving-foul remedy
from lesson 28 — possession at the spot, restart with a check — which lives in
17.2.2 and is *not* in this lesson's `rules` array. Scene 4's body may refer
back to lesson 28 in plain English, exactly as reel 27 referred back to 25 and
26, but 17.2.2 must not appear in a footer or on a card. Adding it would
quietly change what this lesson claims to cover.

**Layout, measured against `fit_kicker()` / `fit_body()` before drafting:**

- Widest kicker is scene 4's `#2   IF IT WOULD HAVE BEEN A GOAL` — comfortably
  inside the standard 34px. Scene 2's `#1   YOU HAD IT, AND IT CAME OUT` is
  shorter still. Neither should engage `fit_kicker()`.
- **Measured at render (2026-09-01):** 870px and 823px of the 900px column,
  both at the standard 34px. `fit_kicker()` not engaged, as predicted.
- Both rule texts are short (139 and 95 characters), so scenes 3 and 5 are the
  least crowded detail cards in the recent run — no split, no trimming.
  **Confirmed:** scene 3 ends at max_y 504 of 1310 and scene 5 at 454, the two
  emptiest cards in the run. Neither was split or trimmed.
- Keep the bodies to roughly 200–230 characters. Two bodies in this week's
  reels landed on the 29px `fit_body()` floor at ~275 characters before being
  tightened; the house norm is 32–36px.
  **As built:** scene 2's body is 237 characters and auto-fits to 34px over
  five lines; scene 4's is 249 and stays at the standard 36px over six. Both
  well clear of the 29px floor.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "You caught it. Contact knocked it out of your hands. That is a specific foul with a specific name, and it is not the same as being fouled on the catch."
- Explanation: "A strip foul occurs when an opponent fouls a player and that causes the player to drop a disc they caught, or to lose possession of the disc. The key word is caught. Lesson 28's receiving foul is contact that stops you completing the catch. A strip is contact that takes away a catch you had already completed — the disc was yours, and the foul is why it isn't any more."
- Example: "Which is why the reward is different. If the reception would have otherwise been a goal, and the foul is accepted, a goal is awarded. Not the disc on the goal line. The goal. Because you had already caught it in the end zone, and the only reason you're not celebrating is the contact. Anywhere else on the field, it resolves like any other receiving foul — you keep it where it happened, and play restarts with a check."
- CTA: "Lesson 29 of 75 — new lesson daily."

## Instagram caption

You caught it. Contact knocked it out of your hands. That's a specific foul with a specific name, and it isn't the same as being fouled on the catch.

**The word doing the work is "caught".** A Strip Foul occurs when an opponent fouls a player and that causes the player to drop a disc they caught or to lose possession of the disc. Yesterday's receiving foul is contact that stops you completing a catch. A strip is contact that takes away a catch you had already completed. The disc was yours, and the foul is the reason it isn't any more.

**And that's why the reward is bigger.** If the reception would have otherwise been a goal, and the foul is accepted, a goal is awarded. Not possession on the goal line — the goal. You had already caught it in the end zone; the only thing standing between you and a point on the board was contact that shouldn't have happened.

**Anywhere else on the field, it resolves the ordinary way.** You keep possession where it happened, and play restarts with a check — the same remedy lesson 28 covered.

Worth being precise about the name when you call it. "Foul" and "strip" lead to different outcomes, and the person you're calling it on can't agree to something they haven't understood.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

you caught it. contact knocked it out. that's not the same foul as being hit on the catch 🥏

it has its own name: STRIP

"A Strip Foul occurs when an opponent fouls a player and that causes the player to drop a disc they caught or to lose possession of the disc."

the word doing the work is CAUGHT

receiving foul = contact stops you completing the catch
strip = contact takes away a catch you'd already completed

and the reward is bigger:

"If the reception would have otherwise been a goal, and the foul is accepted, a goal is awarded."

not the disc on the goal line. the GOAL. you'd already caught it in the end zone

anywhere else on the field? possession where it happened, restart with a check — same as lesson 28

so say "strip", not just "foul". different words, different outcome

lesson 29 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(17.3.1, 17.3.2).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Seven scenes.** Two rule cards, so two topic/rules pairs — the same shape as
  reels 11, 13, 14, 17, 19 and 24, and one pair shorter than 25–28.
- **The whole lesson hinges on one word: *caught*.** Scene 2 must land that the
  catch was already complete, because that single fact is what separates this
  from lesson 28 and what justifies the bigger remedy in scene 4. If a viewer
  comes away thinking a strip is just "a hard foul on a catch", the reel failed.
- **Do not let scene 4 imply the goal is the *only* outcome.** 17.3.2 is
  conditional — "if the reception would have otherwise been a goal". Most strips
  happen in the middle of the field and resolve like any other receiving foul.
  The body needs both halves or it overstates the rule.
- **Do not card 17.2.2.** The non-goal remedy is lesson 28's rule, referred to in
  prose only. See the citation note above.
- **17.3.1 says "a disc they caught", not "a disc they had caught".** Keep the
  rulebook's wording wherever the rule is being reproduced, including in the
  captions where it is block-quoted.
- **Next up is lesson 30, blocking fouls (17.4.1)** — a single long rule. Don't
  pre-empt it here; scene 4 stays on this foul's remedy.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
