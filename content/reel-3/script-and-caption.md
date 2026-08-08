# Reel 3 — "Ten seconds: the stall count"

**Status:** Content pending review
**Script approved:** 2026-08-06 (batch) · **Rendered:** 2026-08-08
**Queued:** 2026-08-08 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (9.1, 9.3, 9.4, 13.2.2)
**Source lesson:** `content/lessons-1.json` → `stall-count`

---

## Video — `reel3-ten-seconds-stall-count.mp4` (1080×1920, 39.1s, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as reels 1–2. Text elements fade in staggered within each
scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Ten seconds: the stall count" · kicker BEGINNER · LESSON 3 / 75 |
| 2 | #1 THE COUNT | "Stalling one, two, three…" · footer cites 9.1 |
| 3 | Rules detail | Verbatim 9.1 |
| 4 | #2 THE STALL-OUT | "Gone before ten starts." · footer cites 13.2.2 |
| 5 | Rules detail | Verbatim 13.2.2 |
| 6 | #3 STAYING LEGAL | "Drift or swap, it resets." · footer cites 9.3 · 9.4 |
| 7 | Rules detail | Verbatim 9.3 + 9.4 |
| 8 | FIELD TIP | "Count along, call it" — count along in your head, call "fast count" if it's rushed |
| 9 | Closing | "Lesson 3 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `concat_build.py` → ffmpeg concat.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~25s)

- Hook: "There's a clock in ultimate that only exists when someone says it out loud."
- Explanation: "Your defender counts you down: 'Stalling one, two, three…' up to ten, each number at least a second apart. If they start saying 'ten' before you release, it's a turnover. Gone before the word starts — not before it finishes."
- Example: "Count along in your head. If their count sounds too fast, just say 'fast count' — a normal call, not a confrontation."
- CTA: "Lesson 3 of 75. Tomorrow: the five ways you can lose the disc."

## Instagram caption

The stall count only exists because someone's saying it out loud.

Your marker counts to ten, a second apart each number. Release before they start "ten" and you're fine — the wording matters more than people think.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one rule a day.

## TikTok caption

the stall count rule that decides way more games than people realize

it's about when they START saying ten, not when they finish 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
