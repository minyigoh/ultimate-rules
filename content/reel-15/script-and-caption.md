# Reel 15 — "Throwing on the run: the two-contact allowance"

**Status:** Pending review
**Script drafted:** 2026-08-17 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-20 (see `content/calendar.md`) — posts alongside carousel-post-3
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (18.2.1.1, 18.2.4.2)
**Source lesson:** `content/lessons-1.json` → `two-touches`

---

## Video — `reel15-throwing-on-the-run.mp4` (1080×1920, 30fps)

Eight scenes — two rules rather than the usual three, so scenes 2 and 4 share a
citation card and both foot to 18.2.1.1. Text elements fade in staggered within
each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Throwing on the run: the two-contact allowance" · kicker BEGINNER · LESSON 15 / 75 |
| 2 | #1 NO PIVOT REQUIRED | "You can catch it and throw it without ever stopping." · footer cites 18.2.1.1 |
| 3 | Rules detail | Verbatim 18.2.1.1 + 18.2.1.1.1 + 18.2.1.1.2 |
| 4 | #2 TWO EXTRA CONTACTS, MAX | "Catch, one, two — and the disc is already gone." · footer cites 18.2.1.1 |
| 5 | #3 OTHERWISE IT'S A TRAVEL | "Miss either condition and the allowance is off." · footer cites 18.2.4.2 |
| 6 | Rules detail | Verbatim 18.2.4 + 18.2.4.2 |
| 7 | FIELD TIP | "Count the contacts, don't estimate them" |
| 8 | Closing | "Lesson 15 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 3 uses the parent-plus-children form
`('18.2.1.1', [rt('18.2.1.1'), ('18.2.1.1.1', rt('18.2.1.1.1')), ('18.2.1.1.2', rt('18.2.1.1.2'))])`.
18.2.1.1 ends on "provided that:" and its two conditions live in the child
clauses, so the card is incomplete without them. All three strings come
verbatim from `rules.json`.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "You're allowed to throw it without ever stopping. There are exactly two conditions."
- Explanation: "Catch it while you're running or jumping and you may release a pass without slowing down and without establishing a pivot at all. In exchange: you can't change direction or speed up before the release, and you get a maximum of two extra points of ground contact after the catch."
- Example: "Count them rather than estimating. You catch it in the air, land on your left — that's one — land on your right, that's two, and the disc has to already be gone. A third contact is a travel however smooth it looked. And the direction half does just as much work: catching on the run and cutting inside to open a better lane breaks the allowance even if you release on contact two."
- CTA: "Lesson 15 of 75 — new lesson daily."

## Instagram caption

You're allowed to throw it without ever stopping. There are exactly two conditions.

Yesterday's lesson was the default: catch, slow down as fast as you can, plant a pivot. This is the exception written directly underneath it. If you catch the disc while running or jumping, you may release a pass without attempting to reduce speed and without establishing a pivot point at all — provided you meet both conditions the rulebook attaches to it.

First: you don't change direction or increase speed until the pass is released. Second: a maximum of two additional points of contact with the ground after the catch and before you throw.

Two contacts is not "two steps, then a throw". Count them. Catch airborne, land left — one — land right — two — and the disc is already gone. A third contact means the allowance no longer applies, and releasing a pass in breach of it is listed among the travel infractions by number.

The direction condition is the one people lose. Catching on the run and curving inside to open up a better lane breaks the allowance even if you got the throw away inside two contacts.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

you can throw without ever stopping — two conditions 🥏

no change of direction, no speeding up, and a maximum of two ground contacts after the catch. catch, one, two, and it's already gone

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Direct sequel to Lesson 14**, which is 18.2.1 — the default obligation to
  slow down and plant a pivot. 18.2.1.1 is the exception sitting immediately
  under it in the rulebook, and the two lessons are adjacent on purpose. Worth
  pinning in order.
- **Two rules, eight scenes** — the same shape as reels 13 and 14. Scenes 2 and
  4 both foot to 18.2.1.1 with one citation card between them; 18.2.4.2 gets
  its own card at scene 6.
- **18.2.4 appears on the scene-6 card as the lead-in to 18.2.4.2**, exactly as
  reel-14 used it for 18.2.4.1. It is not in this lesson's `rules` array, but
  18.2.4.2 reads "the thrower releases a pass in breach of 18.2.1.1;" and is a
  fragment on its own — its parent supplies "A travel infraction occurs if:".
  Both verbatim from `rules.json`. Writing that lead-in in my own words on a
  citation card would be the attribution failure the pipeline forbids.
- **The lesson's `field` line is used in half.** Its first sentence, "This is
  how continuation offence works", borrows a phrase that has a specific and
  different meaning in the rulebook — continuation is 16.2, about play carrying
  on after a call, and has nothing to do with the two-contact allowance. I've
  dropped that sentence and kept the second half, which is the honest advice.
  Flagging rather than editing `content/lessons-1.json`, since the lesson JSONs
  are curriculum, not my copy.
- **Deliberately does not cover what happens once "travel" is called.** That is
  Lesson 16 (18.2.5) and it lands tomorrow; half-teaching the procedure here
  would spoil it and stretch this lesson past its brief.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
