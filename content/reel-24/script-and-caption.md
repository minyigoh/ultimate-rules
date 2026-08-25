# Reel 24 — Changing your mind is a rule, not a weakness

**Status:** Pending review
**Script drafted:** 2026-08-26 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-29 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.11, 1.5, 1.5.1)
**Source lesson:** `content/lessons-2.json` → `retract`

The other half of lesson 23. That one covered what to do when you disagree with
a call; this one covers what to do when you were the one who got it wrong. It
closes the calls sequence: 21 gave the vocabulary, 22 gave ownership, 23 gave
the disagreement procedure, and 24 gives the exit.

---

## Video — `reel24-retracted.mp4` (1080×1920, 30fps)

Seven scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard two-pair shape, same as reels 11, 17 and 19.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Changing your mind is a rule, not a weakness · kicker BEGINNER · LESSON 24 / 75 |
| 2 | #1 SAY THE WORD | "Realise your call was wrong? Say \"Retracted\"." · footer cites 15.11 |
| 3 | Rules detail | Verbatim 15.11 |
| 4 | #2 IT'S ON THE LIST | "The rulebook names it as an example of good Spirit." · footer cites 1.5, 1.5.1 |
| 5 | Rules detail | Verbatim 1.5 + 1.5.1 |
| 6 | FIELD TIP | "\"Retracted, my bad\" takes two seconds and settles more than arguing does." |
| 7 | Closing | "Lesson 24 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 5 is a parent-plus-child card. 1.5.1 reads "retracting a call when you no
longer believe the call was correct;" — a fragment grammatically dependent on
1.5's stem, "The following actions are some examples of good Spirit:". Carded
alone it is unreadable, so 1.5 goes above it, exactly as 1.3 carries 1.3.4 on
reel 23 and 15.5 carries 15.5.1 on reel 22. **1.5 is the only rule number here
not in the lesson's `rules` array**, and it is there for grammar, not for extra
content.

**Kickers:** 11–14 characters each, comfortably inside the 900px column at the
standard 34px. Nothing here should engage `fit_kicker()`.

**Both rule cards are short** — 15.11 is two sentences, 1.5 + 1.5.1 is one line
plus a fragment. No `fit_body()` pressure expected, but run
`tools/check_layout.py` before encoding as usual.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~28s)

- Hook: "There is a formal, written-down way to say 'actually, you're right'. It takes one word."
- Explanation: "If you make a call and then work out that you were wrong — bad angle, or a team-mate had a better view — you say 'Retracted'. Play then resumes as if the breach had been caused by you, the person who made the call. So it isn't free. You give something up to take it back."
- Example: "That cost is deliberate, and it's small. In WFDF's own worked example, a marker who retracts a foul call against the thrower hands the stall count back to 'Stalling one'. A couple of seconds of count, in exchange for not standing on a call you don't believe. And the rulebook doesn't treat this as a climb-down: retracting a call you no longer believe is listed, by name, as an example of good Spirit."
- CTA: "Lesson 24 of 75 — new lesson daily."

## Instagram caption

There is a formal, written-down way to say "actually, you're right". It takes one word.

**You make a call. Then you realise you were wrong.** Bad angle, or a team-mate saw it better, or you just replayed it in your head and it doesn't hold up. The rulebook has a word waiting for you: "Retracted".

**It is not free, and that's the point.** Play resumes as if the breach had been caused by you — the player who made the call. WFDF's own annotation works the example: a marker calls a foul on the thrower, then retracts it, and the count comes back at "Stalling one". You pay a little to take it back. Small enough to always be worth it.

**Then the part people miss.** Retracting a call you no longer believe in isn't merely tolerated. It sits in the rulebook's short list of examples of good Spirit — the same list as checking in with an opponent after a contentious interaction. Changing your mind is not a hole in your game. It's named, in writing, as playing well.

Nobody has ever thought less of a player for saying "retracted, my bad". People think plenty about the player who defends a call they stopped believing in two minutes ago.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

there's a rule for saying "actually, you're right" 🥏

made a call, then realised you were wrong? say "Retracted". one word

it's not free — play resumes as if YOU caused the breach. marker retracts a foul → count comes back at "Stalling one"

small price. always worth paying

and it's not a climb-down: retracting a call you no longer believe is literally listed in the rules as an example of good Spirit

"retracted, my bad" costs you two seconds

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(15.11, 1.5, 1.5.1).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Seven scenes.** Two rule cards, so two topic/rules pairs — the same shape as
  reels 11, 17 and 19.
- **15.11's source text contains a typographic oddity**: it is written as
  `“Retracted“` — an opening curly quote on *both* sides, not a matched pair.
  That is what is in `rules.json` and therefore what goes on the card. Do not
  "fix" it; the card is byte-identical to the source or it isn't a quotation.
  It also means the card is unaffected by the `_payload()` leading-quote issue
  from reel 21, since the quote is mid-sentence.
- **The stall-count example is annotation, not rule text.** It comes from
  15.11's `ann` block in `rules.json` ("the stall count would resume at
  'Stalling 1' as per rule 9.5.1"). It belongs in the spoken script and the
  captions, where it is attributed as WFDF's worked example — **not on a rules
  card**, which quotes `text` only. 9.5.1 and 9.5.2 are deliberately not cited
  on screen; what the stall count restarts at is lesson 29's own subject.
- **Retraction is treated as an accepted breach by the retracting player**, so
  which number the count restarts at depends on whether that player was
  defending or attacking. The captions only work the marker case, which is the
  one WFDF annotates. Don't let scene 4 generalise past it.
- **This closes the calls run.** 21 vocabulary → 22 ownership → 23 contesting →
  24 retracting. Worth cross-referencing in the caption if 23 is still getting
  comments when this goes out.
- **The field tip is the lesson's own `field` line**, kept nearly verbatim:
  "'Retracted, my bad' takes two seconds and resolves more disputes than any
  amount of arguing."
- The Spirit framing is the lesson's, not an editorial addition — 1.5.1 exists
  precisely to name retraction as good Spirit, which is why the second pair is
  a chapter-1 card rather than a second chapter-15 one.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
