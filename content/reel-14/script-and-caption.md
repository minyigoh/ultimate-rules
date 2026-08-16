# Reel 14 — "Slowing down after the catch"

**Status:** Pending review
**Script drafted:** 2026-08-16 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-19 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (18.2.1, 18.2.4.1)
**Source lesson:** `content/lessons-1.json` → `establishing-pivot`

---

## Video — `reel14-slowing-down-after-the-catch.mp4` (1080×1920, 30fps)

Eight scenes — two rules rather than the usual three, so the first two topic
blocks share a citation card and both foot to 18.2.1. Text elements fade in
staggered within each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Slowing down after the catch" · kicker BEGINNER · LESSON 14 / 75 |
| 2 | #1 SLOW DOWN AS FAST AS YOU CAN | "Catching at a sprint doesn't buy you extra metres." · footer cites 18.2.1 |
| 3 | Rules detail | Verbatim 18.2.1 |
| 4 | #2 AND IN A STRAIGHT LINE | "You may slow down. You may not curve." · footer cites 18.2.1 |
| 5 | #3 THE WRONG SPOT IS A TRAVEL | "Where you stop is where the pivot goes." · footer cites 18.2.4.1 |
| 6 | Rules detail | Verbatim 18.2.4 + 18.2.4.1 |
| 7 | FIELD TIP | "Decelerate in a straight line" |
| 8 | Closing | "Lesson 14 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 6 uses the parent-plus-child form
`('18.2.4', [rt('18.2.4'), ('18.2.4.1', rt('18.2.4.1'))])`, the same shape
reel-12 used for 14.1 + 14.1.1. 18.2.4.1 is a list item and reads as a
sentence fragment without its lead-in; both strings still come verbatim from
`rules.json`, so nothing is glossed.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "You caught it at a dead sprint. What you do in the next two seconds is a rule."
- Explanation: "You have to reduce speed as quickly as possible, and you have to do it without changing direction, until you've established your pivot point. Where you come to a stop is where the pivot goes. That's it — two phrases carry the whole thing."
- Example: "You catch it on a deep cut at full speed. Coasting an extra five metres because you were going fast isn't allowed — you slow as hard as you can. And drifting is the one nobody notices themselves doing: curling that deceleration towards the middle so you finish facing a better throwing angle is changing direction, and it puts your pivot somewhere it shouldn't be. The rulebook lists exactly that — a pivot at an incorrect location, from not slowing as quickly as possible or from changing direction — as a travel infraction."
- CTA: "Lesson 14 of 75 — new lesson daily."

## Instagram caption

You caught it at a dead sprint. What you do in the next two seconds is a rule.

After the catch you have to reduce speed as quickly as possible, without changing direction, until you've established a pivot point. Where you come to a stop is where the pivot goes. Two phrases carry the entire rule, and both of them do real work.

"As quickly as possible" means catching at speed doesn't buy you extra metres. You slow as hard as you actually can, not as hard as is convenient for the throw you already have in mind.

"Without changing direction" is the one most people break without realising. Curling your deceleration towards the middle so you finish facing a better angle is a change of direction, and it leaves your pivot somewhere it isn't allowed to be. The rulebook names that case directly: a pivot established at an incorrect location — including by not reducing speed as quickly as possible, or by changing direction after a catch — is listed among the travel infractions.

Nobody is measuring this with a tape. It's on you, which is the whole point.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

caught it at full sprint — the next two seconds are a rule 🥏

slow down as quickly as possible, and do it in a straight line. where you stop is where your pivot goes. curving as you slow is a travel

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Two rules, eight scenes** — the same shape as reel-13. Scenes 2 and 4 both
  foot to 18.2.1 with one citation card between them; 18.2.4.1 gets its own
  card at scene 6. A third topic block would have meant citing a rule outside
  this lesson's brief.
- **18.2.4 appears on the scene-6 card as the lead-in to 18.2.4.1.** It is not
  in the lesson's `rules` array, but 18.2.4.1 is a sub-clause reading "the
  thrower establishes a pivot point at an incorrect location…" and is a
  fragment on its own. Its parent supplies "A travel infraction occurs if:".
  Both are verbatim from `rules.json`. The alternative — writing a lead-in in
  my own words on a citation card — is the attribution failure the pipeline
  forbids, so the parent citation is the correct trade.
- **Deliberately stops short of what happens after the call.** "Travel" is
  called and play does not stop, but that is Lesson 16's rule (18.2.5) and this
  lesson isn't scoped for it. The copy says a wrong pivot *is* a travel and
  leaves the procedure alone rather than half-teaching it two lessons early.
- The lesson's `field` line is used more or less as written — drifting sideways
  while decelerating is the honest headline mistake here, and it's the half of
  18.2.1 that beginners never hear.
- Pairs naturally with Lesson 2 ("You can't run with the disc — but you can
  pivot"), which established the pivot; this one is how you get to it legally.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
