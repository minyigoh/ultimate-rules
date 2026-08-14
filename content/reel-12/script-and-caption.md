# Reel 12 — "What actually counts as a goal"

**Status:** Pending review
**Script drafted:** 2026-08-14 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-17 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (14.1, 14.1.1, 14.1.2, 14.4)
**Source lesson:** `content/lessons-1.json` → `scoring`

---

## Video — `reel12-what-actually-counts-as-a-goal.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — same structure as the earlier reels. Text elements fade in staggered
within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "What actually counts as a goal" · kicker BEGINNER · LESSON 12 / 75 |
| 2 | #1 A GOAL HAS CONDITIONS | "Catching it in the end zone is only most of the way there." · footer cites 14.1 · 14.1.1 |
| 3 | Rules detail | Verbatim 14.1 + 14.1.1 |
| 4 | #2 ALL OF YOU, NOT SOME OF YOU | "One foot on the goal line is not a goal." · footer cites 14.1.1 |
| 5 | Rules detail | Verbatim 14.1.2 |
| 6 | #3 YOU STILL HAVE TO CATCH IT | "Bobbling it through the landing means no goal." · footer cites 14.1.2 · 14.4 |
| 7 | Rules detail | Verbatim 14.4 |
| 8 | FIELD TIP | "Don't celebrate until you've stopped moving" |
| 9 | Closing | "Lesson 12 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "You caught it in the end zone. That might not be a goal yet."
- Explanation: "A goal needs three things at once. You're in-bounds, the pass was legal, and all of your ground contact is entirely inside the end zone you're attacking. Miss any one of them and it's just a catch."
- Example: "Say you go up for it and catch it airborne over the line. Now every one of your first points of ground contact has to land entirely in the end zone. One foot in, one foot on the goal line — that's not a goal, because the line isn't the end zone. And you still have to establish possession through the whole landing. Bobble it as you come down and there's nothing to celebrate."
- CTA: "Lesson 12 of 75 — new lesson daily."

## Instagram caption

You caught it in the end zone. That might not be a goal yet.

Three things have to be true at the same time: you're in-bounds, the pass was legal, and all of your ground contact is entirely within the end zone you're attacking. Miss one and you've made a catch, not a score.

The one that surprises people is the landing. If you're airborne when you catch it, every one of your first points of ground contact has to be entirely inside the end zone. One foot in and one foot on the goal line is not a goal — the line belongs to the field, not to the end zone.

And the catch still has to hold. You have to establish possession and keep it through all the ground contact related to that catch, exactly as you would anywhere else on the field. Bobble it as you land and there was never a goal to argue about.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

caught it in the end zone ≠ goal 🥏

all of your ground contact has to be inside the zone. one foot on the goal line and it's just a catch — and you still have to hold on through the landing

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **14.1 is a stem, not a sentence** — it reads "…catches a legal pass and:" and
  hands off to 14.1.1 and 14.1.2. So scene 3 has to carry 14.1 *and* 14.1.1
  together or the card ends mid-thought. There is no 14.1.3; those two subclauses
  are the whole definition.
- Deliberately **not** covering 14.3 (caught it past the back of the end zone,
  walk it back) — that is Lesson 13 and it gets its own reel tomorrow.
- 14.1.2 cross-references 12.1 and 12.1.1, which Lesson 8 already covered. The
  citation card quotes that cross-reference as written; the explainer scenes
  don't re-teach it.
- The field tip is the lesson's own `field` line: the goal is scored when
  possession is established, which 14.4 pins down — worth saying out loud
  because players routinely drop the disc celebrating and then argue about it.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
