# Reel 7 — "The pull: how every point starts"

**Status:** Content pending review
**Script approved:** 2026-08-06 (batch) · **Rendered:** 2026-08-08
**Queued:** 2026-08-12 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (7.1, 7.2, 7.3, 7.4, 7.6)
**Source lesson:** `content/lessons-1.json` → `the-pull`

---

## Video — `reel7-the-pull-how-every-point-starts.mp4` (1080×1920, 40.7s, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as the earlier reels. Text elements fade in staggered
within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "The pull: how every point starts" · kicker BEGINNER · LESSON 7 / 75 |
| 2 | #1 THE THROW | "Defence throws it deep." · footer cites 7.1 |
| 3 | Rules detail | Verbatim 7.1 |
| 4 | #2 READY, THEN GO | "A raised hand starts it." · footer cites 7.2 · 7.6 |
| 5 | Rules detail | Verbatim 7.2 + 7.6 |
| 6 | #3 STAY BEHIND THE LINE | "Feet planted till it's gone." · footer cites 7.3 · 7.4 |
| 7 | Rules detail | Verbatim 7.3 + 7.4 |
| 8 | FIELD TIP | "Signal early and clearly" — half of all pull confusion is a missed signal |
| 9 | Closing | "Lesson 7 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `concat_build.py` → ffmpeg concat.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~25s)

- Hook: "It's ultimate's kickoff, and it has its own small ritual."
- Explanation: "Every point starts with the defence throwing the disc the length of the field — the pull. Before it goes, both teams raise a hand to signal ready. Offence keeps a foot on their own goal line, defence stays fully behind theirs, until the disc is released."
- Example: "Half of all pull confusion is a team that never actually signalled. Raise your hand clearly and early."
- CTA: "Lesson 7 of 75 — that's week one. New lesson daily."

## Instagram caption

Every point starts the same way: the pull.

Defence throws it the length of the field. Both teams signal ready with a raised hand first, and nobody moves until the disc actually leaves the puller's hand — not before, not on the run-up.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — that's week one of the daily rules.

## TikTok caption

ultimate's version of a kickoff, and it has its own tiny ritual

everyone's raising a hand and you had no idea why 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
