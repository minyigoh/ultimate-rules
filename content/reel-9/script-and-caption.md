# Reel 9 — "Where your feet have to be"

**Status:** Content pending review
**Script drafted:** 2026-08-11 (daily-reel-render) · **Script approved:** 2026-08-11 · **Rendered:** 2026-08-12 (29.5s)
**Queued:** 2026-08-14 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (11.3, 11.3.1, 11.3.2, 11.4)
**Source lesson:** `content/lessons-1.json` → `in-bounds-feet`

---

## Video — `reel9-where-your-feet-have-to-be.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as the earlier reels. Text elements fade in staggered
within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Where your feet have to be" · kicker BEGINNER · LESSON 9 / 75 |
| 2 | #1 NO "TWO FEET IN" | "If you're not out, you're in." · footer cites 11.3 |
| 3 | Rules detail | Verbatim 11.3 |
| 4 | #2 AIRBORNE | "Your status waits for the landing." · footer cites 11.3.1 · 11.4 |
| 5 | Rules detail | Verbatim 11.3.1 + 11.4 + 11.4.1 + 11.4.2 |
| 6 | #3 MOMENTUM IS FINE | "Land in, then drift out." · footer cites 11.3.2 |
| 7 | Rules detail | Verbatim 11.3.2 |
| 8 | FIELD TIP | "Catch it before your foot lands" — near the sideline, timing beats stretching |
| 9 | Closing | "Lesson 9 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~25s)

- Hook: "Ultimate has no 'two feet in' rule. It has something simpler, and stricter."
- Explanation: "If any part of you is out-of-bounds when you touch the disc, no catch happened at all. Catch it airborne and your first contact with the ground has to be in-bounds — and the line itself is out."
- Example: "Land in-bounds, keep the catch, and momentum carrying you over the sideline costs you nothing. You walk back and set your pivot where you crossed the line."
- CTA: "Lesson 9 of 75 — new lesson daily."

## Instagram caption

Ultimate has no "two feet in" rule. It has something simpler, and stricter.

If any part of you is out-of-bounds when you touch the disc, there was no catch. Airborne, your first contact with the ground has to be in-bounds — and the line is out, not in. Land clean and keep the catch, though, and momentum carrying you over the sideline costs you nothing: walk back and set your pivot where you crossed.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

no "two feet in" here. one toe on the line and you were never in 🥏

but landing in and then running out? completely fine

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- 11.4 is a stem clause — it only reads correctly with 11.4.1 and 11.4.2 beneath
  it on the same card. Keep all three together in scene 5.
- Pairs directly with Lesson 6 (the field, and why the lines are out); the
  callback is deliberate, not a repeat.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
