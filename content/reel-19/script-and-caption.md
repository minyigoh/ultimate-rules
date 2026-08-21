# Reel 19 — "Fast count"

**Status:** Pending review
**Script drafted:** 2026-08-21 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-24 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (18.1.1.1, 18.1.4, 18.1.4.4)
**Source lesson:** `content/lessons-2.json` → `fast-count`

Third lesson from `lessons-2.json`. Lessons 17 and 18 covered where a marker's
body may be; this one covers what their mouth is doing. It is the fourth
marking infraction in the same 18.1.1 list and the first lesson in the
curriculum to introduce escalation — the idea that a call you keep having to
make can become a different, harder call.

---

## Video — `reel19-fast-count.mp4` (1080×1920, 30fps)

Seven scenes — two topic/rules-detail pairs, a field tip and a close. Same
shape as reels 11 and 17, which is what a two-rule lesson gets.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Fast count" · kicker BEGINNER · LESSON 19 / 75 |
| 2 | #1 FIVE WAYS TO COUNT WRONG | "Too quick is only one of them." · footer cites 18.1.1.1 |
| 3 | Rules detail | Verbatim 18.1.1.1 + all five children |
| 4 | #2 IF IT KEEPS HAPPENING, ESCALATE | "A pattern of repeats can be called as a marking violation instead." · footer cites 18.1.4, 18.1.4.4 |
| 5 | Rules detail | Verbatim 18.1.4 + 18.1.4.4 |
| 6 | FIELD TIP | "Calling fast count isn't rude. It's the mechanism." |
| 7 | Closing | "Lesson 19 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 3 uses the parent-plus-child form with **18.1.1.1 itself as the stem**
rather than 18.1.1, because 18.1.1.1's own text — `"Fast Count" – the marker:`
— is the sentence its five children complete. Reels 17 and 18 used 18.1.1 as
the stem because their clauses were siblings of this one, not children of it.
Five children on one card is the densest rules slide the pipeline has drawn;
a layout dry-run of all seven scenes measures it at 1144 of the 1310px budget,
with no kicker engaging the auto-fit floor.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~28s)

- Hook: "Under pressure, almost every marker counts too fast. That is a rule, and you are allowed to say so."
- Explanation: "A fast count isn't only counting too quickly. The rulebook lists five ways to get it wrong: counting in under one-second intervals, starting or continuing the count illegally, not saying \"Stalling\", not starting from the correct number, and not reducing the count when required. Any one of them is a fast count."
- Example: "So you call it, and the count gets fixed. But say the same marker keeps racing anyway. You are not stuck making that call forever — where it is a pattern rather than a one-off, the rules let you call a marking violation instead, and a violation stops play."
- CTA: "Lesson 19 of 75 — new lesson daily."

## Instagram caption

Under pressure, almost every marker counts too fast. That's a rule, and you're allowed to say so.

**It isn't only about speed.** The rulebook lists five separate ways a count goes wrong: counting in under one-second intervals, starting or continuing the count illegally, failing to say "Stalling", starting from the wrong number, and failing to reduce or reset the count when required. Any one of them is a fast count. The last two are the ones people never think to call, because they don't feel like speed — a marker who picks the count back up at seven when it should be five hasn't rushed anything, and has still committed the same infraction.

**The call itself is cheap.** A fast count is a marking infraction, so nothing stops. You say "fast count", the marker corrects the number, and the point carries on around you.

**And if it keeps happening, you have somewhere to go.** You aren't stuck making the same call every stall. Where the problem is a pattern of repeated marking infractions rather than a single miscount, the rules let you call a marking violation instead — and a violation does stop play. That's a deliberate ladder: the light call first, the heavy one when the light one isn't working.

Worth saying plainly: making this call isn't rude, and it isn't a complaint. It's the designed mechanism. Markers genuinely cannot hear their own tempo — under pressure, at a real stall count, almost nobody can. The call exists because the sport assumes you'll make it.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

your marker is counting too fast. say something 🥏

five ways to count wrong: under one-second intervals, starting the count illegally, not saying "stalling", starting from the wrong number, not reducing the count when required

call "fast count" and play carries on. if it's a pattern, call a marking violation instead — that one stops play

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Seven scenes, not nine.** The lesson cites two rule groups, so it gets two
  pairs — same shape as reels 11 and 17. Padding it to three would mean either
  a card without a citation or a citation the lesson's `rules` array doesn't
  carry.
- **The reset behaviour is deliberately not carded here.** "Play doesn't stop
  and the count resumes one lower" is 18.1.3, which Lesson 18 cited yesterday
  and which this lesson's own `rules` array does not list. It stays in the
  spoken script, the caption and the field tip, where it needs no citation
  chip, rather than re-teaching a rule the previous reel just carded.
- **18.1.4 is quoted with only its 18.1.4.4 child**, matching the lesson's
  `rules` array. The stem lists four triggers and the caption says so in
  general terms; the card shows the stem plus the one child the lesson names,
  so nothing on screen claims a number the lesson didn't source.
- **First escalation lesson in the curriculum.** The infraction → violation
  ladder appears here for the first time. It is introduced as a mechanism, not
  explained in full — Lesson 21 is foul/infraction/violation and Lesson 22 is
  who may call what, and both are better places for the general shape.
- The field tip carries the lesson's `field` line almost intact, because the
  "calling it isn't rude" framing is the point of the lesson rather than a
  garnish on it.
- **Thursday 2026-08-27 is due a recap carousel** for the next un-recapped
  block, lessons 15–21. Lessons 20 and 21 are not drafted yet and lessons
  18–19 have not posted, so that block will not be complete. Expect a short
  recap of whatever has actually posted by then, or a skip with a note, per
  Step 1.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
