# Reel 17 — "Disc space: give the thrower room"

**Status:** Pending review
**Script drafted:** 2026-08-19 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-22 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (18.1.1.3)
**Source lesson:** `content/lessons-2.json` → `disc-space`

First lesson from `lessons-2.json` — the marking chapter opens here, after
sixteen lessons on the thrower's obligations. This one is the defender's.

---

## Video — `reel17-disc-space.mp4` (1080×1920, 30fps)

Seven scenes — a single-rule lesson, the same shape as reel 11. One citation
card at scene 3; scenes 2, 4 and 5 all foot to 18.1.1.3.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Disc space: give the thrower room" · kicker BEGINNER · LESSON 17 / 75 |
| 2 | #1 ONE DISC DIAMETER | "About 27 cm. Roughly a forearm." · footer cites 18.1.1.3 |
| 3 | Rules detail | Verbatim 18.1.1 + 18.1.1.3 |
| 4 | #2 MEASURED TO THE TORSO | "You can reach. You can't crowd." · footer cites 18.1.1.3 |
| 5 | #3 UNLESS THEY CLOSED IT | "If the thrower moved into you, there's no infraction." · footer cites 18.1.1.3 |
| 6 | FIELD TIP | "Mark at a forearm's distance" |
| 7 | Closing | "Lesson 17 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 3 uses the parent-plus-child form
`('18.1.1', [rt('18.1.1'), ('18.1.1.3', rt('18.1.1.3'))])`, the same pattern
reels 14 and 15 used for 18.2.4. 18.1.1 reads "Marking infractions include the
following:" and supplies the frame that makes 18.1.1.3 a rule rather than a
definition floating on its own. Both strings verbatim from `rules.json`.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "This is the most-called infraction in the sport, and the easiest one to never commit."
- Explanation: "No part of a defender may be closer than one disc diameter to the thrower's torso. A disc is about 27 centimetres across — so, roughly a forearm. Stand any closer than that and the thrower can call disc space."
- Example: "Two details do most of the work. First, it's measured to the torso, not to the disc and not to the arms — you're allowed to reach, you're just not allowed to crowd the body. Second, if the gap closed only because the thrower pivoted into you, it isn't an infraction. But that exception is narrow, and it's the marker's job to hold the space, not the thrower's job to protect it."
- CTA: "Lesson 17 of 75 — new lesson daily."

## Instagram caption

The most-called infraction in the sport, and the easiest one to never commit.

Disc space. No part of a defender may be closer than one disc diameter to the thrower's torso. A disc is about 27 centimetres across, which is roughly a forearm — hold that much air between you and the person with the disc and you have essentially solved this rule for good.

Two details are where the arguments come from.

It is measured to the torso. Not to the disc, not to your hands, not to the disc's edge. You are allowed to reach — a mark that stretches an arm across the throwing lane is doing its job. What you may not do is bring your body in against theirs.

And it isn't automatic. If the gap closes solely because the thrower moved into you, no infraction occurred — the rulebook says so directly. That covers the standing marker who gets pivoted into. It does not cover drifting in and then blaming the pivot. The onus sits with the marker to hold the space, not with the thrower to defend it.

Sixteen lessons in, this is the first one that's about you when you don't have the disc.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

one disc diameter. about 27 cm. roughly a forearm 🥏

measured to the torso, not the disc — you can reach, you just can't crowd. and if the thrower pivots into you, that one's not on you

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **First lesson from `content/lessons-2.json`** — lessons 1–16 exhausted
  `lessons-1.json`. The curriculum turns from the thrower's obligations to the
  marker's, which is worth saying out loud in the caption; the last line does
  that.
- **"About 27 cm" is the lesson's gloss, not the rulebook's.** 18.1.1.3 says
  "one disc diameter" and never names a measurement. The number appears in the
  script body and captions only, never on a citation card, so nothing on screen
  attributes a figure to WFDF that WFDF didn't write.
- **The exception is stated narrowly on purpose.** 18.1.1.3's second sentence
  turns on the word "solely" — caused *solely* by movement of the thrower. A
  marker who has been closing the gap and then gets pivoted into is not covered.
  Reading it as a general "if they moved, it's fine" is the common misreading
  and the script deliberately doesn't leave room for it.
- **Deliberately does not cover the marking count or what happens after the
  call.** Fast count is Lesson 19 and the general call procedure is Lesson 21;
  half-teaching either here would stretch this past its brief.
- Lesson 18 (straddle and wrapping, 18.1.1.2 / 18.1.1.4 / 18.1.3) is the natural
  next one and shares the same citation frame — worth pinning in order with this.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
