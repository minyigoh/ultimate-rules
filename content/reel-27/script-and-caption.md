# Reel 27 — Not every touch is a foul

**Status:** Pending review
**Script drafted:** 2026-08-29 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-01 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (12.8, 15.1, 1.3, 1.3.10)
**Source lesson:** `content/lessons-2.json` → `minor-contact`

Lesson 25 gave the duty to avoid contact. Lesson 26 defined who initiated it.
Both of those could easily leave a beginner thinking every brush of an arm is a
foul waiting to be called. This one is the carve-out: the rules build in
tolerance deliberately, and say so in one sentence.

---

## Video — `reel27-not-every-touch.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard three-pair shape, same as reels 16, 18, 20,
21, 22, 23, 25 and 26.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Not every touch is a foul · kicker BEGINNER · LESSON 27 / 75 |
| 2 | #1 THE TOLERANCE IS DELIBERATE | "Two people going to one point will sometimes touch." · footer cites 12.8 |
| 3 | Rules detail | Verbatim 12.8 |
| 4 | #2 A FOUL NEEDS MORE THAN CONTACT | "The word doing the work is 'non-minor'." · footer cites 15.1 |
| 5 | Rules detail | Verbatim 15.1 |
| 6 | #3 DID IT ACTUALLY CHANGE ANYTHING? | "The call has a threshold, and it isn't 'I felt that'." · footer cites 1.3, 1.3.10 |
| 7 | Rules detail | Verbatim 1.3 + 1.3.10 |
| 8 | FIELD TIP | "If it didn't change what happened and nobody's hurt, let it go." |
| 9 | Closing | "Lesson 27 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**1.3 is a stem, not a sentence**, and 1.3.10 is one of its limbs. 1.3 ends
"Players must:" and 1.3.10 begins lowercase with "only make a call where…", so
carded alone it reads as a fragment with no subject. Scene 7 therefore carries
1.3 and 1.3.10 together, exactly as reel 23 did with 1.3 + 1.3.4 — same parent,
same reason. The lesson's `rules` array lists 1.3.10; 1.3 is on screen only as
the grammar its own child requires, not as an extra citation.

**All three of the lesson's rule numbers are used.** Nothing else is cited.

**Kickers:** the longest is `#3 DID IT ACTUALLY CHANGE ANYTHING?` — near the
top of the 900px column, so this is the most likely reel yet to engage
`fit_kicker()`. Let it shrink; do not shorten it.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "You brushed arms going for the same disc. That's not a foul, and the rulebook says so in one sentence."
- Explanation: "Some minor contact may occur as two or more players move towards a single point simultaneously. Minor contact should be minimized — but it is not considered a foul. That is written down as a rule, not offered as a courtesy. The tolerance is deliberate, because two people running hard to one spot is the sport working correctly, not breaking."
- Example: "So what makes it a foul? One word. A breach of the rules due to non-minor contact between opposing players is a foul. Non-minor. Brushing shoulders on the way to a disc you caught cleanly anyway does not clear that bar. And there is a second filter on top: only make a call where the breach is significant enough to make a difference to the outcome of the action, or where a player's safety is at risk. Those are the two gates — did it change what happened, or did it put someone at risk?"
- CTA: "Lesson 27 of 75 — new lesson daily."

## Instagram caption

You brushed arms going for the same disc. That's not a foul, and the rulebook says so in one sentence.

**The tolerance is written in on purpose.** Some minor contact may occur as two or more players move towards a single point simultaneously. Minor contact should be minimized — but it is not considered a foul. That is a rule, not a courtesy someone is extending to you. Two people running hard to the same spot is the sport working correctly.

**What turns contact into a foul is one word: non-minor.** A breach of the rules due to non-minor contact between two or more opposing players is a foul. So "there was contact" is never the whole argument — it's the start of one. If you brushed shoulders and caught it cleanly anyway, nothing crossed that line.

**And there's a second gate, from the Spirit rules.** Only make a call where the breach is significant enough to make a difference to the outcome of the action, or where a player's safety is at risk. Two questions, then: did it change what happened, and is anyone hurt? If both answers are no, there's nothing to call.

This is the balance the previous two lessons were building toward. You must try to avoid contact (12.6), and the rules define who initiated it when it happens (12.7) — but they also refuse to turn every incidental touch into a stoppage. Consistently over-calling is itself a Spirit breach, and it's the fastest way to make a game unpleasant for everyone on it.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

you brushed arms going for the same disc. not a foul 🥏

and it's not a favour someone's doing you — it's written down

"Some minor contact may occur as two or more players move towards a single point simultaneously. Minor contact should be minimized but is not considered a foul."

what makes it a foul is one word: NON-MINOR. a breach due to non-minor contact between opposing players is a foul

so "there was contact" isn't the argument. it's the start of one

second gate, from the spirit rules: only make a call where the breach is significant enough to change the outcome of the action, or where someone's safety is at risk

two questions. did it change what happened? is anyone hurt? both no = nothing to call

over-calling is itself a spirit breach

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(12.8, 15.1, 1.3, 1.3.10).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the same shape
  as reels 16, 18, 20, 21, 22, 23, 25 and 26.
- **This closes the contact run's setup.** 25 is the duty, 26 is who initiated
  it, 27 is the carve-out. Lessons 28–31 are the named foul types — receiving,
  strip, blocking, force-out — and each gets its own reel, so scene 4 must stay
  on the definition of a foul and not start listing them.
- **Do not soften "minimized" into "avoided".** The rule says minor contact
  *should be minimized* and separately that it *is not a foul*. The `-z-`
  spelling is the rulebook's own; keep it wherever the rule's wording is being
  reproduced, even though the surrounding copy is otherwise British. Those are two
  different claims and the reel needs both, or it reads as "contact is fine",
  which is the opposite of lesson 25.
- **The second gate is a Spirit rule, not a contact rule.** It applies to every
  call in the game, not just contact ones. Worth one line in the caption, but
  the scene 6 body should keep it anchored to this lesson rather than
  generalising.
- **`1.3.10` carries a curly apostrophe** in "player's" — that is what
  `rules.json` holds, and `rt()` will emit it. Do not normalise it to a straight
  quote; the card is verbatim or it isn't a citation.
- **Watch the scene 6 kicker.** `#3 DID IT ACTUALLY CHANGE ANYTHING?` is long
  for the 900px column. If it trips `fit_kicker()`, let the type shrink — never
  reword it to fit.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
