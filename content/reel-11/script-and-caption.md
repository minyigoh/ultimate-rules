# Reel 11 — "Tie goes to the offence"

**Status:** Content pending review
**Script drafted:** 2026-08-13 (daily-reel-render) · **Rendered:** 2026-08-14 (v1, 28.3s)
**Queued:** 2026-08-16 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (12.3)
**Source lesson:** `content/lessons-1.json` → `simultaneous`

---

## Video — `reel11-tie-goes-to-the-offence.mp4` (1080×1920, 30fps)

Seven scenes. Shorter than the usual nine because this lesson rests on a single
one-sentence rule — see the note at the bottom about that. Text elements fade in
staggered within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Tie goes to the offence" · kicker BEGINNER · LESSON 11 / 75 |
| 2 | #1 SIMULTANEOUS MEANS OFFENCE | "Both of you caught it. It's theirs." · footer cites 12.3 |
| 3 | Rules detail | Verbatim 12.3 |
| 4 | #2 NOT A "WHO HAD MORE" CALL | "There is no percentage to argue about." · footer cites 12.3 |
| 5 | #3 IT HAS TO BE GENUINE | "First hands wins. A tie is rarer than it feels." · footer cites 12.3 |
| 6 | FIELD TIP | "Ask 'did you have it first?'" — not "whose is it?" |
| 7 | Closing | "Lesson 11 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~26s)

- Hook: "You both caught it at the same time. Who gets it?"
- Explanation: "The offence. If an offensive and a defensive player catch the disc simultaneously, the offence retains possession. That's the whole rule — one sentence, no subclauses, no judgement about who had more of it."
- Example: "The word doing the work is 'simultaneously'. If you got two hands on it first and the defender arrived onto your hands a beat later, that isn't a tie — that's your catch, and it was always your catch. The tie-breaker only applies when it genuinely was a tie, which is rarer than it feels in the moment."
- CTA: "Lesson 11 of 75 — new lesson daily."

## Instagram caption

You both came down holding it. Who gets it?

The offence. If an offensive and a defensive player catch the disc simultaneously, the offence retains possession — that's the entire rule, one sentence long.

What trips people up is the word "simultaneously". It is not a question of who had more of the disc, or whose grip was better. If you got hands on it first and the defender arrived a beat later, it was never a tie at all — it was your catch. The rule only decides the genuine dead heat, which happens far less often than it feels like on the field.

So the honest question on the ground isn't "whose is it?" It's "did you have it first?" Say what you saw, listen to what they saw, and restart quickly.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

you both caught it. offence keeps it. that's the whole rule 🥏

but "simultaneously" is doing a lot of work there — if you had hands on it first, it was never a tie

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Built 2026-08-14 exactly as approved:** seven scenes, one 12.3 detail card,
  the three topic scenes all footing 12.3. The script cleared review with no
  note attached, so I took the version on the page rather than either of the
  alternatives below. 28.3s. If the repeated footer bothers you on watching it,
  reject the content and say which alternative you want.
- **One-rule lesson — worth a decision before this renders.** 12.3 is a single
  sentence and the lesson's `rules` array carries nothing else, so all three
  topic scenes foot to the same citation. Seven scenes projects to roughly 29s,
  which is fine, but the repeated footer is visible. Two ways out if you'd
  rather not have it: cut to five scenes and accept a ~24s reel, or let scene 3
  also show 12.1 (the definition of a catch, already used in Lesson 8) as
  context. I have not added 12.1 on my own initiative — it isn't in this
  lesson's brief and re-citing an earlier lesson's rule is your call, not mine.
- The example beat is the actual teaching point. "Simultaneous" gets stretched
  in real games to mean "contested", and the rule doesn't say that.
- Pairs naturally with Lesson 8 ("A catch and possession are not the same
  thing"), which established what a catch even is.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
