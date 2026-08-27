# Reel 25 — The duty to avoid contact

**Status:** Pending review
**Script drafted:** 2026-08-27 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-30 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (12.6, 12.6.1, 12.6.2, 12.6.3)
**Source lesson:** `content/lessons-2.json` → `avoid-contact`

The calls run is finished — 21 vocabulary, 22 ownership, 23 contesting, 24
retracting — and this opens the contact run that the whole of chapter 12 and
chapter 17 sits on. It is the rule underneath every foul lesson that follows,
and it is one of the few places the rulebook says something with no hedge in
it at all: there is *no* situation where a player may justify initiating
contact.

---

## Video — `reel25-avoid-contact.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard three-pair shape, same as reels 16, 18, 20,
21, 22 and 23.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | The duty to avoid contact · kicker BEGINNER · LESSON 25 / 75 |
| 2 | #1 NO JUSTIFICATION | "The rulebook does not leave you a situation where contact is fine." · footer cites 12.6 |
| 3 | Rules detail | Verbatim 12.6 |
| 4 | #2 THE EXCUSE, NAMED | "\"I was going for the disc\" is written down, and rejected." · footer cites 12.6.1 |
| 5 | Rules detail | Verbatim 12.6.1 |
| 6 | #3 BEFORE YOU LEAVE THE GROUND | "Not sure you'll get there legally? Then you have to adjust." · footer cites 12.6.2, 12.6.3 |
| 7 | Rules detail | Verbatim 12.6.2 + 12.6.3 |
| 8 | FIELD TIP | "Bid hard, but into space you're sure is empty." |
| 9 | Closing | "Lesson 25 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 7 carries two sibling rules on one card rather than a parent and child.
12.6.2 is the pre-condition ("before a player dives, leaps or jumps away") and
12.6.3 is the duty that follows when the pre-condition isn't met ("they must
adjust their movements"). Carded separately, 12.6.2 reads as a rule with no
consequence. Both are full sentences, so neither needs the other for grammar —
this is a content pairing, not a `1.3`/`1.3.4` grammar rescue.

**All four rule numbers come from the lesson's `rules` array.** Nothing extra
is cited on screen.

**Kickers:** 15–28 characters. `#3 BEFORE YOU LEAVE THE GROUND` is the longest
kicker this pipeline has drafted — tracked, it will likely engage
`fit_kicker()` and render a step or two below 34px. That is the intended
behaviour and no wording changes to accommodate it. If it trips the 27px
floor, `render_v3.py` will raise `SystemExit`; report that rather than
shortening the label.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "\"I was going for the disc\" is not a defence. The rulebook names that exact excuse and rejects it."
- Explanation: "Every player must attempt to avoid initiating contact, and the rules say flatly that there is no situation where a player may justify initiating contact. That includes contact with someone standing still, and contact with where they were obviously about to be, given the speed and direction they were already moving."
- Example: "So the duty runs before the bid, not after it. Before you dive, leap or jump away from your position, you have to be reasonably certain you won't initiate contact. And if you're not reasonably certain you'll get to the disc legally before an opponent who is moving legally, you're required to adjust — and the rulebook adds that if you do adjust, the result of the play still stands. You don't lose anything by pulling out of a bid you weren't sure of."
- CTA: "Lesson 25 of 75 — new lesson daily."

## Instagram caption

"I was going for the disc" is not a defence. The rulebook names that exact excuse and rejects it.

**Start with how absolute the sentence is.** All players must attempt to avoid initiating contact, *and there is no situation where a player may justify initiating contact*. Not "except when", not "unless". The rules almost never talk like that, and here they do.

**It covers more than the person in front of you.** You have to avoid initiating contact with a stationary opponent — and also with an opponent's expected position, based on the speed and direction they had already established. Where they obviously were about to be counts as where they are.

**Then the duty moves earlier than most people put it.** Before you dive, leap or jump away from your position, you must be reasonably certain you won't initiate contact. The decision point is on the ground, before you leave it — not in the air, working out whose fault the collision was.

**And here's the part that makes it easy to obey.** If you're not reasonably certain you can make a legal play at the disc before an opponent who's moving legally, you must adjust to avoid initiating contact — and if you make that adjustment, the result of the play still stands. Pulling out of a bid you weren't sure of costs you nothing under the rules.

Which is what makes a non-contact sport playable at full speed. Bid hard. Bid into space you're sure is empty.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

"I was going for the disc" is not a defence 🥏

the rulebook literally names that excuse and rejects it

the sentence has no escape hatch: there is NO situation where a player may justify initiating contact

and it covers where someone was about to be, not just where they're standing — expected position, based on established speed and direction

before you dive, leap or jump: you must be reasonably certain you won't initiate contact. the decision is on the ground

not sure you'll get there legally first? you must adjust. and if you adjust, the result of the play still stands

bid hard. into space you're sure is empty

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(12.6, 12.6.1, 12.6.2, 12.6.3).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the same shape
  as reels 16, 18, 20, 21, 22 and 23.
- **This opens the contact run.** 25 is the duty itself, 26 is who initiated it,
  27 is the minor-contact carve-out. Every foul lesson from 28 onward assumes
  this one, so scene 2 should stay at the level of the general duty and not
  start naming foul types.
- **12.6's second sentence is the one that surprises people** — expected
  position based on established speed and direction. It is on the card because
  it is in `text`, and it is worth calling out in scene 2's body rather than
  leaving it to be read off the rules slide.
- **12.6's `ann` block is substantial** and defines "making a play on the disc",
  "minor contact" and "affected the play". None of it goes on a card — cards
  quote `text` only. Minor contact is lesson 27's own subject ("Not every touch
  is a foul") and "affected the play" is lesson 37's, so both are deliberately
  left alone here. Don't pre-empt them.
- **12.6.3's final clause is the reassurance, and it should not be cut** — "If
  that adjustment is made, the result of the play still stands." Without it the
  rule reads as a penalty for caution, which is the opposite of its purpose.
  It's on the card verbatim and it's the closing beat of the spoken example.
- **The kicker on scene 6 is deliberately long.** "BEFORE YOU LEAVE THE GROUND"
  is the whole point of 12.6.2 — the duty lands before the bid, not during it —
  and `fit_kicker()` exists precisely so wording like this doesn't have to be
  trimmed. See reel 16's v1/v2 history.
- **The field tip is the lesson's own `field` line**, kept nearly verbatim:
  "This is what makes a non-contact sport playable at speed. Bid hard, but into
  space you're sure is empty."
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
