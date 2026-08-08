# Reel 6 — "The field, and why the lines are out"

**Status:** Content pending review
**Script approved:** 2026-08-06 (batch) · **Rendered:** 2026-08-08
**Queued:** 2026-08-11 (see `content/calendar.md`)
**Difficulty:** Never played
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (2.1, 2.2, 2.3, 2.4, 11.1)
**Source lesson:** `content/lessons-1.json` → `the-field`

---

## Video — `reel6-the-field-why-lines-are-out.mp4` (1080×1920, 40.7s, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as the earlier reels. Text elements fade in staggered
within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "The field, and why the lines are out" · kicker NEVER PLAYED BEFORE · LESSON 6 / 75 |
| 2 | #1 THE LAYOUT | "100m long. 37m wide." · footer cites 2.1 · 2.2 |
| 3 | Rules detail | Verbatim 2.1 + 2.2 |
| 4 | #2 THE LINES ARE OUT | "Stand on one, you're out." · footer cites 2.3 · 11.1 |
| 5 | Rules detail | Verbatim 2.3 + 11.1 |
| 6 | #3 THE GOAL LINE'S DIFFERENT | "It belongs to the middle." · footer cites 2.4 |
| 7 | Rules detail | Verbatim 2.4 |
| 8 | FIELD TIP | "Look down near the line" — toeing the line is out, not in |
| 9 | Closing | "Lesson 6 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `concat_build.py` → ffmpeg concat.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~20s)

- Hook: "One detail here trips up almost every new player."
- Explanation: "Full field: 100m long, 37m wide, with an 18m end zone at each end. The sidelines and end lines are NOT part of the field — stand on one and you're out. The goal line, though, belongs to the central zone, not the end zone."
- Example: "Catch near the sideline? Look down. Toeing the line is out — the opposite of most sports."
- CTA: "Lesson 6 of 75 — link in bio for the full curriculum."

## Instagram caption

The lines are out. All of them.

Sidelines, end lines — not part of the field. Stand on one and you're out of bounds, which is the opposite of how most sports draw their boundaries. The goal line's different: it belongs to the central zone.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee for the next lesson.

## TikTok caption

the lines on an ultimate field are OUT, not in, and it trips up everyone once

here's the field layout in 20 seconds 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
