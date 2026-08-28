# Reel 26 — Who initiated the contact?

**Status:** Pending review
**Script drafted:** 2026-08-28 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-31 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (12.7, 12.7.1, 12.7.2, 12.7.3, 12.4)
**Source lesson:** `content/lessons-2.json` → `who-initiated`

Lesson 25 established the duty — nobody may justify initiating contact. This
one answers the question that duty immediately raises: when two people collide,
which of them initiated it? The rulebook does not leave that to argument. It
defines the initiator, in two limbs, and then supplies a tiebreaker for when
neither limb settles it.

---

## Video — `reel26-who-initiated.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard three-pair shape, same as reels 16, 18, 20,
21, 22, 23 and 25.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Who initiated the contact? · kicker BEGINNER · LESSON 26 / 75 |
| 2 | #1 THEY WERE ALREADY THERE | "The initiator is usually just whoever arrived second." · footer cites 12.7, 12.7.1, 12.4 |
| 3 | Rules detail | Verbatim 12.7 + 12.7.1, then 12.4 |
| 4 | #2 OR WHOEVER CHANGED PATH | "You can also initiate contact without arriving late at all." · footer cites 12.7, 12.7.2 |
| 5 | Rules detail | Verbatim 12.7 + 12.7.2 |
| 6 | #3 IF NOBODY CAN TELL | "Genuinely unclear, and someone laid out? It's theirs." · footer cites 12.7.3 |
| 7 | Rules detail | Verbatim 12.7.3 |
| 8 | FIELD TIP | "Ask \"where were you when I got there?\"" |
| 9 | Closing | "Lesson 26 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**12.7 is a stem, not a sentence.** It ends in a colon — "the player who
initiates contact is deemed to be the player who:" — and 12.7.1 and 12.7.2 are
its two limbs, each of which is a sentence fragment on its own. So 12.7 appears
on both scene 3 and scene 5, carrying a different limb each time. That is the
same parent-repeated-across-cards shape reel 18 used for 18.1.1, and it is a
grammar requirement here, not a stylistic choice: 12.7.1 alone starts mid-clause
with "arrived at the point of contact after…" and reads as a fragment.

**12.4 rides on scene 3 as a second block** rather than getting a pair of its
own. 12.7.1 turns entirely on the opponent having "established a legitimate
position", and 12.4 is the rule that says what such a position entitles you to.
Carded together, the first limb explains itself; carded apart, scene 2 has to
paraphrase 12.4 to make 12.7.1 land, which is exactly what a rules card exists
to prevent.

**All five rule numbers come from the lesson's `rules` array.** Nothing extra is
cited on screen.

**Kickers:** the longest is `#2 OR WHOEVER CHANGED PATH` at 788px of the 900px
column, so nothing here engages `fit_kicker()`.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "Every foul argument is really one question: who got there first? The rulebook actually answers it."
- Explanation: "The player who initiates contact is defined, not debated. Limb one: the player who arrived at the point of contact after the opponent had already established a legitimate position there — and that opponent can be standing still or moving. A player in an established position is entitled to stay in it and must not be contacted."
- Example: "Limb two catches the other case, where you were there in time but changed your line: the player who adjusted their movements in a way that created unavoidable contact with an opponent who was moving legally, taking everyone's established position, speed and direction into account. And if it is genuinely unclear which of you initiated it, and one of you dived, leapt or jumped away from their position — that player is deemed to have initiated the contact. The person who left the ground carries the risk."
- CTA: "Lesson 26 of 75 — new lesson daily."

## Instagram caption

Every foul argument is really one question: who got there first? The rulebook actually answers it.

**Limb one — you arrived second.** The initiator is the player who arrived at the point of contact after the opponent had already established a legitimate position there. That opponent can be stationary *or* moving; "they were running too" doesn't undo an established position. And a player in an established position is entitled to remain in it, and must not be contacted by an opponent.

**Limb two — you were there in time, but you changed your line.** The initiator is also the player who adjusted their movements in a way that created unavoidable contact with an opponent moving legally, taking into account every player's established position, speed and direction. You can be first to the spot and still be the one who caused it.

**And the tiebreaker, which settles more arguments than either limb.** If it is unclear which player initiated contact and one of them dived, leapt or jumped away from their position, that player is deemed to have initiated it. Leaving the ground is a choice, and the rules put the uncertainty on the player who made it.

Notice what none of this asks about: intent. Nobody has to have meant it. The question is position, speed and direction — things two people can usually reconstruct together in about fifteen seconds.

So the useful sentence isn't "you fouled me". It's "where were you when I got there?"

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

every foul argument is really one question: who got there first 🥏

and the rulebook answers it instead of leaving it to whoever argues hardest

limb 1 — you arrived at the point of contact after they'd already established a legitimate position. stationary or moving, both count

limb 2 — you got there in time but adjusted your movement in a way that made contact unavoidable with someone moving legally

the tiebreaker: genuinely unclear who initiated it, and one of you dived, leapt or jumped away from their position? that player is deemed to have initiated it

nobody asks about intent. it's position, speed, direction

so don't say "you fouled me". say "where were you when I got there?"

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(12.7, 12.7.1, 12.7.2, 12.7.3, 12.4).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the same shape
  as reels 16, 18, 20, 21, 22, 23 and 25.
- **This is the second lesson in the contact run.** 25 is the duty, 26 is who
  initiated it, 27 is the minor-contact carve-out. Scene 2 should stay on the
  definition and not start naming foul types — receiving, strip, blocking and
  force-out are lessons 28 to 31 and each gets its own reel.
- **Don't let "initiated" become "at fault".** The rules define who initiated
  contact; whether that contact is a foul is a separate question the next few
  lessons answer. The word "foul" appears once in the hook, as the thing people
  argue about, and nowhere else in the spoken script.
- **Intent is deliberately absent.** Nothing in 12.7 mentions it, so nothing on
  screen does either. It is worth one line in the caption because it is the
  single most common wrong assumption about this rule, but it is a caption beat,
  not a card.
- **Scene 3 is the densest card in the reel** — 12.7 + 12.7.1, then 12.4, at an
  estimated max_y around 1050 of 1310. It should clear comfortably, but run
  `tools/check_layout.py` before believing it, and if it collides, split 12.4
  onto scene 5 rather than trimming any rule text.
- **The field tip is the lesson's own `field` line**, kept nearly verbatim:
  "Instead of 'you fouled me', try 'where were you when I got there?' It's the
  actual question."
- The cover title and the field-tip line both contain quotation marks but
  neither begins with one, so `_payload()`'s leading-quote handling is not
  engaged here. Scene 4's headline is quote-free by construction.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
