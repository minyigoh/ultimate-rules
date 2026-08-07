# Reel 2 — "You can't run with the disc — but you can pivot"

**Status:** Posted — 2026-08-07
**Script approved:** 2026-08-06 · **Rendered:** 2026-08-07 · **Content approved:** 2026-08-07
**Queued:** 2026-08-07 (see `content/calendar.md`)
**Difficulty:** Never played
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (18.2.2, 18.2.3, 18.2.3.1)
**Source lesson:** `content/lessons-1.json` → `no-running`

---

## Video — `reel2-you-cant-run-but-you-can-pivot.mp4` (1080×1920, 30.2s, 30fps)

Seven scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as reel 1. Text elements fade in staggered within each
scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "You can't run — but you can pivot." · kicker NEVER PLAYED BEFORE · LESSON 2 / 75 |
| 2 | #1 THE PIVOT | "One foot stays. The other roams." · footer cites 18.2.2 |
| 3 | Rules detail | Verbatim 18.2.2 |
| 4 | #2 THE GROUND | "Down doesn't mean stuck." · footer cites 18.2.3 · 18.2.3.1 |
| 5 | Rules detail | Verbatim 18.2.3 + 18.2.3.1 |
| 6 | FIELD TIP | "Pick early, commit fully" — pick your pivot foot the instant you catch |
| 7 | Closing | "Lesson 2 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `concat_build.py` → ffmpeg concat.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~25s)

- Hook: "The most misunderstood beginner rule — and the easiest one to get right."
- Explanation: "Once you catch the disc, one foot becomes your pivot. It stays planted until you release the throw. The other foot can go anywhere — step around, lunge wide, reach past a defender. Pivoting isn't a workaround, it's a real skill."
- Example: "Pick your pivot foot the instant you catch, then commit. Deciding late is what causes travels."
- CTA: "Lesson 2 of 75 — link in bio."

## Instagram caption

You can't run with the disc. You can absolutely move like you're still playing.

One foot plants as your pivot the moment you catch. The other foot goes anywhere — step, lunge, reach. Good throwers cover a lot of ground without that pivot foot ever lifting.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee for the next lesson.

## TikTok caption

"you can't run with the disc" is true and also not the full story

the pivot foot is doing more work than you think 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
