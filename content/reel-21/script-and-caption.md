# Reel 21 — "Foul, infraction, violation — what's the difference?"

**Status:** Pending review
**Script drafted:** 2026-08-23 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-26 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.1, 15.2, 15.3, 15.6)
**Source lesson:** `content/lessons-2.json` → `three-breaches`

First lesson of the calls block. Lessons 17–20 taught four specific marking
breaches; this one steps back and explains the vocabulary those breaches
belong to. It is the lesson that makes every earlier "this doesn't stop play"
aside make sense, and it is the prerequisite for lesson 22, which covers who
is allowed to make which call.

---

## Video — `reel21-foul-infraction-violation.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard three-pair shape, same as reels 16, 18
and 20.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Foul, infraction, violation — what's the difference?" · kicker BEGINNER · LESSON 21 / 75 |
| 2 | #1 A FOUL IS CONTACT | "If nobody touched anybody, it isn't a foul." · footer cites 15.1 |
| 3 | Rules detail | Verbatim 15.1 |
| 4 | #2 PLAY KEEPS GOING | "Infractions are marking and travel breaches — and they don't stop play." · footer cites 15.2 |
| 5 | Rules detail | Verbatim 15.2 |
| 6 | #3 EVERYTHING ELSE | "Every other breach is a violation, and \"Violation\" is a legal call on its own." · footer cites 15.3, 15.6 |
| 7 | Rules detail | Verbatim 15.3 + 15.6 |
| 8 | FIELD TIP | "Hear a call you don't recognise? Stop — unless it was travel or a marking call" |
| 9 | Closing | "Lesson 21 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scenes 3 and 5 are single-rule cards. 15.1 and 15.2 are each one complete
sentence with their own subject, so neither needs a parent stem the way the
18.1.1 children did on reels 17–20. Scene 7 carries 15.3 and 15.6 together
because 15.3 ("Every other breach of the rules is a violation.") is a
definition with no consequence attached, and 15.6 is the sentence that gives
it one.

**Kickers:** 18–20 characters each, well inside the 900px column at the
standard 34px. Nothing here engages `fit_kicker()`.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "Foul, infraction, violation. Three words that get used as if they mean the same thing, and one of them is the reason play sometimes doesn't stop."
- Explanation: "A foul is contact — non-minor contact between players on opposing teams. An infraction is narrower than most people assume: marking breaches and travel, and nothing else. A violation is every other breach of the rules."
- Example: "The difference you feel on the field is what happens next. Infractions don't stop play — the rulebook says so in the same sentence that defines them. Someone calls travel, the disc keeps moving. A foul or a violation stops everything until it's sorted out. And if you can see something is wrong but can't name it, any opposing player can just call \"Violation\" — that's a legitimate call by itself."
- CTA: "Lesson 21 of 75 — new lesson daily."

## Instagram caption

Foul, infraction, violation. Three words used as if they're interchangeable, and one of them is the reason play sometimes doesn't stop.

**A foul is contact.** Specifically, a breach caused by non-minor contact between two or more opposing players. That's the whole definition. Contact between teammates isn't a foul. Something unfair that nobody touched anybody over isn't a foul either — it's one of the other two.

**An infraction is much narrower than people assume.** It is a marking breach or a travel breach. That's it, and that short list is doing a lot of work, because the same sentence that defines an infraction also says infractions do not stop play. This is why "travel" gets shouted and the disc keeps moving, and why a fast count or a disc space call is fixed on the fly instead of resetting the point.

**A violation is everything else.** Every other breach of the rules falls here — and any opposing player may claim one, by naming it or simply by calling "Violation".

**Which makes that last part the most useful thing in this lesson.** You don't need the right word to make a correct call. If you can see a breach and can't name it, "Violation" is a legal call in itself. Knowing the vocabulary is worth having; not knowing it is not a reason to say nothing.

The one to memorise: everything stops except marking calls and travel.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

foul, infraction, violation — not the same thing 🥏

foul = non-minor contact between opposing players

infraction = marking breach or travel. ONLY those two. and infractions don't stop play

violation = every other breach. any opposing player can call it

can't name what you just saw? "Violation" is a legal call on its own

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three definitions, so three topic/rules pairs — the same
  shape as reels 16, 18 and 20.
- **"Fouls and violations stop play" is the lesson's framing, and it is not a
  single quotable sentence.** What the rulebook states outright is the
  negative: 15.2 says infractions do not stop play. 15.7 then describes how
  players must communicate a stoppage "when a foul or violation call is made
  that stops play". So the asymmetry is real and the reel teaches it, but only
  15.2's half is carded — nothing on a citation card claims more than the text
  it quotes. 15.7 is not in the lesson's `rules` array and stays uncarded.
- **15.4 and 15.5 are deliberately absent.** Who may claim a foul (15.4) and
  who may claim an infraction (15.5) are lesson 22's subject. 15.6 appears
  here only because it is what gives 15.3 its consequence, and because the
  "or 'Violation'" clause is the lesson's practical payoff.
- **Scene 6's headline uses a quoted word.** "Violation" appears in quotes in
  the rule text itself, and the card renders it the same way; the SVG needs
  `xml:space="preserve"` on the tracked kicker as usual, but the headline is
  ordinary body-weight text.
- **No sub-rule children on any card**, a first since reel 13 — 15.1, 15.2,
  15.3 and 15.6 are all leaf rules with no numbered children in `rules.json`.
  Expect shorter rules cards and correspondingly more room; `fit_body()`
  should leave every scene at the standard 36px.
- **The field tip is the lesson's own `field` line, trimmed.** "If you hear a
  call and don't know what it is, stop — except for travel and marking calls,
  which never stop play."
- No growth/reach claims in either caption.
- **Thursday 2026-08-27 is due a recap carousel** covering the next
  un-recapped block, lessons 15–21. As of this draft, lessons 15–17 have
  posted and 18–20 are queued at "Ready to post"; lesson 21 is this draft and
  will not have posted by the 27th. Per Step 1 the recap covers only lessons
  whose reels have actually posted, so expect a short recap — likely lessons
  15–20 — with the remainder rolling into the next block.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
