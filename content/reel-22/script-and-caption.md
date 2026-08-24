# Reel 22 — "Who is allowed to make which call"

**Status:** Pending review
**Script drafted:** 2026-08-24 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-27 (see `content/calendar.md`) — posts alongside Carousel 4
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.4, 15.5, 15.5.1, 15.6, 1.10)
**Source lesson:** `content/lessons-2.json` → `who-calls-what`

The direct sequel to lesson 21. That one gave you the three words; this one
says who owns each of them. It is the lesson that explains why a teammate
watching your thrower get hacked has nothing to say about it, and why the two
exceptions to that — double team and travel — are exactly the two things the
thrower cannot see for themselves.

---

## Video — `reel22-who-calls-what.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard three-pair shape, same as reels 16, 18, 20
and 21.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Who is allowed to make which call" · kicker BEGINNER · LESSON 22 / 75 |
| 2 | #1 ONLY THE PLAYER FOULED | "Nobody else on your team can call it for you." · footer cites 15.4 |
| 3 | Rules detail | Verbatim 15.4 |
| 4 | #2 THE THROWER, MOSTLY | "Infractions are the thrower's — with exactly two carve-outs." · footer cites 15.5, 15.5.1 |
| 5 | Rules detail | Verbatim 15.5 + 15.5.1 |
| 6 | #3 VIOLATIONS ARE OPEN | "Any opposing player, and then the people who saw it." · footer cites 15.6, 1.10 |
| 7 | Rules detail | Verbatim 15.6 + 1.10 |
| 8 | FIELD TIP | "Watching from the sideline? You have no calls." |
| 9 | Closing | "Lesson 22 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 5 is a parent-plus-child card: 15.5 states the general rule and 15.5.1
is the "however" that carries the two exceptions, so they have to appear
together or the card says something the rulebook doesn't. Scene 7 carries two
separate rules from different chapters — 15.6 for who may claim a violation,
1.10 for who may discuss one once it exists.

**Kickers:** 19–22 characters each, comfortably inside the 900px column at the
standard 34px. Nothing here should engage `fit_kicker()`.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "Calling something that isn't yours to call causes more trouble than the breach you were trying to fix."
- Explanation: "Fouls belong to the player who was fouled, and to nobody else. Infractions belong to the thrower — with exactly two carve-outs: any offensive player may call a double team, and any defensive player may call a travel. Violations are the open category: any opposing player may claim one."
- Example: "So when you're cutting and you watch the marker hack your thrower's arm, there is nothing for you to call. That feels unhelpful and it is still the rule. The two exceptions are the tell — a double team happens behind the thrower, and a travel happens to the thrower's own feet, which are the two things they are worst placed to judge. And once a call is made, the discussion belongs to the players directly involved plus whoever had the best perspective. That is how the sideline helps without making calls."
- CTA: "Lesson 22 of 75 — new lesson daily."

## Instagram caption

Calling something that isn't yours to call causes more trouble than the breach you were trying to fix.

**Fouls belong to the player who was fouled.** Only they may claim it. You can be certain of what you saw, you can be right, and it is still not your call. This is the one that surprises people most, and it is also the least negotiable.

**Infractions belong to the thrower** — the marking calls and travel. With exactly two carve-outs, and the carve-outs tell you why they exist. Any offensive player may call a double team, because a double team usually forms behind the thrower's shoulder. Any defensive player may call a travel, because the thrower is the last person able to referee their own feet.

**Violations are the open category.** Any opposing player may claim one, by naming it or simply by calling "Violation".

**And then there's the part after the call.** The rulebook says calls should be discussed by the players directly involved and by the players who had the best perspective. So "best perspective" is a real category, not a courtesy — it's how a teammate who saw the whole thing contributes without owning the call.

Which resolves the sideline question: you have no calls. You have perspective, and you offer it when you're asked. That's a smaller job than it sounds and it settles more disagreements than any call does.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

who gets to call what 🥏

fouls → only the player who was fouled. not you. even if you're right

infractions → the thrower only. two exceptions: ANY offensive player can call double team, ANY defensive player can call travel

violations → any opposing player

after the call → discussed by the players involved + whoever had the best perspective

on the sideline? you have no calls. you have perspective, and you give it when asked

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three ownership rules, so three topic/rules pairs — the same
  shape as reels 16, 18, 20 and 21.
- **15.6 appears here for the second time**, after reel 21 scene 7. It is not a
  repeat of the same point: reel 21 carded it to give 15.3 a consequence ("every
  other breach is a violation" — and here's what follows from that). Here it is
  carded for its subject, which is *who* may claim one. Same sentence, different
  half doing the work.
- **1.10 is the only rule in this lesson from outside chapter 15**, and it is
  deliberately on the same card as 15.6 rather than in the field tip. It answers
  the question the first three rules leave open — a call has an owner, but a
  *discussion* has a wider cast — and it is the rule the field tip is standing
  on, so it should be quoted rather than paraphrased into a tip.
- **The two exceptions are the lesson, not a footnote.** 15.5.1 is the sentence
  most beginners have never read, and both halves of it are useful on the field
  in a way the general rule isn't. Scene 4's headline names them as carve-outs
  so the rules card lands as the payoff rather than as fine print.
- **Double team was already taught in lesson 20** and travel in lesson 16, so
  neither needs re-teaching here — this reel cites them only as call ownership.
  Don't let scene 4 drift into re-explaining the three-metre rule.
- **The field tip is the lesson's own `field` line, trimmed.** "Watching from
  the sideline? You have no calls. You can offer perspective if asked, and
  that's genuinely valuable."
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
