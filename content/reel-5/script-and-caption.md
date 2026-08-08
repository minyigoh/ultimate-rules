# Reel 5 — "There are no referees. You are the referee."

**Status:** Content pending review
**Script approved:** 2026-08-06 (batch) · **Rendered:** 2026-08-08
**Queued:** 2026-08-10 (see `content/calendar.md`)
**Difficulty:** Never played
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (1.1, 1.2, 15.4, 13.3)
**Source lesson:** `content/lessons-1.json` → `no-referees`

---

## Video — `reel5-there-are-no-referees-you-are-the-referee.mp4` (1080×1920, 46.2s, 30fps)

Eleven scenes — four topic pairs (more rules to cover than reels 1–4) plus
cover, field tip and closing, alternating plain-English explainer with
verbatim WFDF rule-citation cards. Text elements fade in staggered within
each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "There are no referees. You are the referee." · kicker NEVER PLAYED BEFORE · LESSON 5 / 75 |
| 2 | #1 SELF-OFFICIATED | "No referees. You make the call." · footer cites 1.1 |
| 3 | Rules detail | Verbatim 1.1 |
| 4 | #2 GENTLE BY DESIGN | "Recreate, don't punish." · footer cites 1.2 |
| 5 | Rules detail | Verbatim 1.2 |
| 6 | #3 WHO CAN CALL IT | "Only the player fouled." · footer cites 15.4 |
| 7 | Rules detail | Verbatim 15.4 |
| 8 | #4 IF YOU DISAGREE | "Discuss, or it goes back." · footer cites 13.3 |
| 9 | Rules detail | Verbatim 13.3 |
| 10 | FIELD TIP | "Call it yourself" — only the player fouled can call the foul |
| 11 | Closing | "Lesson 5 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `concat_build.py` → ffmpeg concat.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~25s)

- Hook: "This is the one thing that makes ultimate different from every other field sport."
- Explanation: "There are no referees. Every call — including against your own team — is made by the players on the field. The rules assume nobody breaks them on purpose, which is why penalties are gentle: they try to recreate what would've happened anyway, not punish."
- Example: "Only the player who was fouled can call the foul. You can't call it on a teammate's behalf."
- CTA: "Lesson 5 of 75 — this one's spirit of the game, not a rule number."

## Instagram caption

No referees. Every call on the field is made by the players — including against your own team.

That's not a gap in the rules, it's the design. The whole system assumes you'll be honest, and the penalties are built to recreate what would've happened, not to punish.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one rule a day.

## TikTok caption

no refs. players make every call, even against themselves

this is the rule that explains the whole culture of the sport 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
