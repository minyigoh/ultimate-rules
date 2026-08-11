# Reel 8 — "A catch and possession are not the same thing"

**Status:** Pending review
**Script drafted:** 2026-08-11 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-13 (see `content/calendar.md`)
**Difficulty:** Intermediate
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (12.1, 12.1.1, 13.1.1.1)
**Source lesson:** `content/lessons-1.json` → `catch-vs-possession`

---

## Video — `reel8-a-catch-and-possession-are-not-the-same-thing.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as the earlier reels. Text elements fade in staggered
within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "A catch and possession are not the same thing" · kicker INTERMEDIATE · LESSON 8 / 75 |
| 2 | #1 THE CATCH | "Trapped between two body parts." · footer cites 12.1 |
| 3 | Rules detail | Verbatim 12.1 |
| 4 | #2 THEN THE LANDING | "Hold it through the ground." · footer cites 12.1.1 |
| 5 | Rules detail | Verbatim 12.1.1 |
| 6 | #3 THE DISC MAY TOUCH GRASS | "Keep the catch and it's still yours." · footer cites 13.1.1.1 |
| 7 | Rules detail | Verbatim 13.1.1.1 |
| 8 | FIELD TIP | "Squeeze through the landing" — the catch isn't finished until you've stopped moving |
| 9 | Closing | "Lesson 8 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~25s)

- Hook: "You caught it. That doesn't mean you have it."
- Explanation: "A catch is one moment: a non-spinning disc trapped between two body parts. Possession is everything after it — keeping hold through the landing, the slide, and any contact that came with the catch."
- Example: "Dive, catch it, hit the ground, and it pops out — that's a turnover, because possession never happened. But if the disc scrapes the grass and you never lose the catch, play on."
- CTA: "Lesson 8 of 75 — new lesson daily."

## Instagram caption

You caught it. That doesn't mean you have it.

A catch is one moment — a non-spinning disc trapped between two body parts. Possession is what comes after: holding on through the landing and everything that comes with it. Dive, catch, hit the ground, pop it out, and it's a turnover. Let the disc scrape the grass without ever losing the catch, and it's still yours.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

the disc touched the ground and it's somehow still your point 🥏

catch and possession are two different things and the gap between them is where the turnovers live

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- 13.1.1.1 is a continuation clause — it reads mid-sentence off 13.1.1. On the
  citation card it still stands alone as written; do not stitch the two into a
  new sentence.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
