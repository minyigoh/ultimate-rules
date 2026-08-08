# Reel 4 — "Five ways to lose the disc"

**Status:** Content pending review
**Script approved:** 2026-08-06 (batch) · **Rendered:** 2026-08-08
**Queued:** 2026-08-09 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (13.1, 13.2)
**Source lesson:** `content/lessons-1.json` → `turnovers`

---

## Video — `reel4-five-ways-to-lose-the-disc.mp4` (1080×1920, 30.8s, 30fps)

Seven scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as reels 1–3. Text elements fade in staggered within each
scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Five ways to lose the disc" · kicker BEGINNER · LESSON 4 / 75 |
| 2 | #1 INSTANT TURNOVERS | "No whistle. It just flips." · footer cites 13.1 |
| 3 | Rules detail | Verbatim 13.1 + 13.1.1 + 13.1.2 |
| 4 | #2 STOPPED TURNOVERS | "A few flip with a pause first." · footer cites 13.2 |
| 5 | Rules detail | Verbatim 13.2 + 13.2.2 |
| 6 | FIELD TIP | "Sprint on the turn" — sprint to guard someone the moment the disc hits the ground |
| 7 | Closing | "Lesson 4 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `concat_build.py` → ffmpeg concat.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~25s)

- Hook: "Know these five and you'll stop being surprised by sudden changes of possession."
- Explanation: "Possession flips instantly, no stoppage, when: the disc hits the ground, a defender catches it, it goes out of bounds, or the pull is touched then dropped. It also flips — with a stoppage — on the stall-out or a few odd acts, like handing the disc to a teammate."
- Example: "The moment the disc hits the ground, sprint to guard someone. Points get lost in the two seconds right after a turnover."
- CTA: "Lesson 4 of 75 — follow for the rest."

## Instagram caption

Five ways to lose the disc, so you stop being surprised when possession flips.

Most turnovers happen instantly, no whistle: dropped, blocked, out of bounds. A couple happen with a stoppage first, like the stall-out. Know the difference and you'll never be the last one to react.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee for the next one.

## TikTok caption

disc hits the ground and suddenly everyone's sprinting the other way

here's every way that happens, in 25 seconds 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
