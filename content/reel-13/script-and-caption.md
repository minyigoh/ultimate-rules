# Reel 13 — "Caught it past the end zone? Walk it back."

**Status:** Pending review
**Script drafted:** 2026-08-15 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-18 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (14.3, 11.3.2.1)
**Source lesson:** `content/lessons-1.json` → `overshoot`

---

## Video — `reel13-caught-it-past-the-end-zone.mp4` (1080×1920, 30fps)

Eight scenes — two rules rather than the usual three, so one topic block runs
without its own citation card and foots to 14.3 like the block before it. Text
elements fade in staggered within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Caught it past the end zone? Walk it back." · kicker BEGINNER · LESSON 13 / 75 |
| 2 | #1 IT ISN'T A TURNOVER | "You keep the disc. You just move it." · footer cites 14.3 |
| 3 | Rules detail | Verbatim 14.3 |
| 4 | #2 THE NEAREST POINT ON THE LINE | "Not where you caught it. Not where you stopped." · footer cites 14.3 |
| 5 | #3 IT OVERRIDES THE SIDELINE RULE | "Out the back? Still the goal line." · footer cites 11.3.2.1 |
| 6 | Rules detail | Verbatim 11.3.2.1 |
| 7 | FIELD TIP | "Walk out calmly and set your pivot" |
| 8 | Closing | "Lesson 13 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "You're standing in the end zone holding the disc, and it isn't a goal. Now what?"
- Explanation: "Nothing bad has happened. It's not a turnover and you don't get a do-over. You walk to the nearest point on the goal line and set your pivot there. That's the whole procedure."
- Example: "Two ways you end up here. You catch it just short and your momentum carries you three metres in. Or you go up for it and land with one foot on the goal line — the line isn't the end zone, so no goal. Same answer both times: nearest point on the line, plant your pivot, play on. It even beats the usual rule for leaving the field — drift out over the back endline and you still come back to the goal line, not to the spot where you crossed."
- CTA: "Lesson 13 of 75 — new lesson daily."

## Instagram caption

You're standing in the end zone holding the disc, and it isn't a goal. Now what?

Nothing bad has happened. It isn't a turnover and there's no do-over. You walk to the nearest point on the goal line, set your pivot there, and play carries on. That's the entire procedure, and it happens several times a game.

There are two common ways to end up there. You catch it just short of the line and your own momentum carries you in. Or you catch it airborne and land with one foot in and one foot on the goal line — the line belongs to the central zone, not the end zone, so it's a catch and not a score.

It also overrides the rule you'd normally use after leaving the field. Usually you come back on where you crossed the perimeter line; if you drifted out over the back of the end zone you were attacking, you go to the nearest point on the goal line instead. The rulebook writes that exception into the sideline rule itself.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

in the end zone, holding it, and it's not a goal 🥏

not a turnover. not a do-over. walk to the nearest point on the goal line, set your pivot, keep playing

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Direct sequel to Lesson 12**, which set out what a goal actually requires.
  This one is the "so what happens instead" half, and Reel 12's notes already
  point forward to it. Worth watching in order if you're pinning them.
- **Two rules, eight scenes.** Scenes 2 and 4 both foot to 14.3, with one
  citation card between them, and 11.3.2.1 gets its own card at scene 6. The
  alternative — a third topic block with no rule behind it — would have meant
  citing something outside this lesson's brief.
- **The lesson's `field` line looks wrong and I have not used it.** It says
  "the stall count doesn't start until you've established the pivot point."
  That is true after a *turnover* (9.3.1), but this is not a turnover — play
  stays live, and 9.3.2 lets the marker count against "the pivot location if
  the thrower is not at that location", i.e. while you are still walking to the
  line. So the honest field tip is that the count is running, not paused. I've
  written the tip without any stall-count claim rather than repeat the brief or
  cite two rules this lesson wasn't scoped for. Suggest correcting the `field`
  line in `content/lessons-1.json` — flagging rather than editing it, since the
  lesson JSONs are curriculum, not my copy.
- 11.3.2.1's text carries the exception in its own words ("unless 14.3 is in
  effect"), which is why the citation card lands cleanly without a gloss.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
