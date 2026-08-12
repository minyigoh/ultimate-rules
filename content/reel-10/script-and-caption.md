# Reel 10 — "You're allowed to leave the field"

**Status:** Pending review
**Script drafted:** 2026-08-12 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-15 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (11.6, 11.7, 11.2)
**Source lesson:** `content/lessons-1.json` → `going-out`

---

## Video — `reel10-youre-allowed-to-leave-the-field.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as the earlier reels. Text elements fade in staggered
within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "You're allowed to leave the field" · kicker BEGINNER · LESSON 10 / 75 |
| 2 | #1 THE DISC CAN COME BACK | "Outside the line isn't out yet." · footer cites 11.6 · 11.7 |
| 3 | Rules detail | Verbatim 11.7 |
| 4 | #2 WHAT ACTUALLY PUTS IT OUT | "Ground, or an out-of-bounds receiver." · footer cites 11.6 |
| 5 | Rules detail | Verbatim 11.6 |
| 6 | #3 DEFENDERS ARE ALWAYS IN | "The rule only constrains the offence." · footer cites 11.2 |
| 7 | Rules detail | Verbatim 11.2 |
| 8 | FIELD TIP | "Chase the ones that look gone" — a curving throw is a real throw |
| 9 | Closing | "Lesson 10 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~28s)

- Hook: "The disc can fly out and come back. So can you."
- Explanation: "A throw that curves outside the sideline and back over the field never went out. The disc is only out-of-bounds once it actually touches out-of-bounds ground, or an offensive player who is standing out there. And you're explicitly allowed to run off the field to make a play on it."
- Example: "One asymmetry worth knowing: defenders are always counted as in-bounds. A defender standing well outside the line can reach in and block the disc, and it's a clean block. The out-of-bounds rules only constrain the offence."
- CTA: "Lesson 10 of 75 — new lesson daily."

## Instagram caption

The disc can fly out and come back. So can you.

A throw that curves outside the sideline and back over the field never went out at all — the disc is only out-of-bounds once it touches out-of-bounds ground, or an offensive player standing out there. And you're explicitly allowed to run off the field to make a play on it. What matters is where you are when you touch it.

The asymmetry most new players miss: defensive players are always considered in-bounds. A defender standing outside the sideline can reach in and block the disc, and it counts.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

that throw curving out past the sideline? not out. not yet 🥏

and defenders are always "in-bounds" — they can stand off the field and still block it

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- 11.6 is long — three sentences covering the disc's status, an offensive
  player's status transferring to the disc, and the simultaneous-catch case.
  It may need its own detail card at a smaller block count; check the projected
  runtime before adding anything to scene 5.
- Direct sequel to Lesson 9 ("Where your feet have to be"): that one covered
  where *your* feet are, this one covers where the *disc* is. The callback is
  deliberate.
- The defenders-are-always-in-bounds clause in 11.2 is the punchline of the
  reel — it's the part experienced players still get wrong.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
