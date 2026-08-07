# Reel 1 — "The whole game in one paragraph"

**Status:** Posted — 2026-08-06
**Script approved:** 2026-08-06 · **Rendered:** 2026-08-06 · **Content approved:** 2026-08-06
**Queued:** 2026-08-06 (see `content/calendar.md`)
**Difficulty:** Never played
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (4.1, 14.1, 18.2.2, 13.1)
**Source lesson:** `content/lessons-1.json` → `the-game`

---

## Video — `reel1-lesson1.mp4` (1080×1920, 40.9s, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as the carousel (topic slide → rules-detail slide). Text
elements fade in staggered within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "The whole game in one paragraph" · kicker NEVER PLAYED BEFORE · LESSON 1 / 75 |
| 2 | #1 THE OBJECTIVE | "Two teams. One end zone." · footer cites 4.1 · 14.1 |
| 3 | Rules detail | Verbatim 4.1, 14.1 + 14.1.1 |
| 4 | #2 THE THROW | "Catch, plant, throw." · footer cites 18.2.2 |
| 5 | Rules detail | Verbatim 18.2.2 |
| 6 | #3 THE FLIP | "Drop it and it's theirs." · footer cites 13.1 |
| 7 | Rules detail | Verbatim 13.1 + 13.1.1 + 13.1.2 |
| 8 | FIELD TIP | "Look up first" — ten seconds is longer than it feels |
| 9 | Closing | "Lesson 1 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `concat_build.py` → ffmpeg concat.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Instagram caption

The whole game in one paragraph, if nobody's explained it to you yet.

Two teams of seven, one objective: catch it in the end zone. No running with the disc — catch, plant, throw. Miss and possession flips instantly, no whistle.

Rule text: WFDF Rules of Ultimate 2025–2028. Full lesson-by-lesson breakdown in bio.

Follow @learn.ultimatefrisbee — one rule a day, five minutes at a time.

## TikTok caption

got invited to pickup ultimate and nobody explained the actual game to you

here's the whole thing in 25 seconds 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
