# Reel 18 — "Straddle and wrapping"

**Status:** Pending review
**Script drafted:** 2026-08-20 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-23 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (18.1.1.2, 18.1.1.4, 18.1.3)
**Source lesson:** `content/lessons-2.json` → `straddle-wrap`

Second lesson from `lessons-2.json`, and the direct continuation of Lesson 17.
Disc space was the gap between two bodies; these two are the shapes a mark can
make around one. All three sit in the same 18.1.1 list.

---

## Video — `reel18-straddle-and-wrapping.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard three-pair shape, same as reel 16.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Straddle and wrapping" · kicker BEGINNER · LESSON 18 / 75 |
| 2 | #1 STRADDLE: THE FEET | "Don't stand with their pivot foot between your legs." · footer cites 18.1.1.2 |
| 3 | Rules detail | Verbatim 18.1.1 + 18.1.1.2 |
| 4 | #2 WRAPPING: THE ARMS | "Wide is fine. Around them is not." · footer cites 18.1.1.4 |
| 5 | Rules detail | Verbatim 18.1.1 + 18.1.1.4 |
| 6 | #3 THE COUNT DROPS ONE | "Play doesn't stop. Fix your position and the count resumes lower." · footer cites 18.1.3 |
| 7 | Rules detail | Verbatim 18.1.3 |
| 8 | FIELD TIP | "Feet outside their stance, arms wide but not enveloping" |
| 9 | Closing | "Lesson 18 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scenes 3 and 5 use the parent-plus-child form
`('18.1.1', [rt('18.1.1'), ('18.1.1.2', rt('18.1.1.2'))])`, the same pattern
reel 17 used for 18.1.1.3. "Marking infractions include the following:" is the
stem that makes each child a rule rather than a definition floating on its own.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "Two more ways your mark can be illegal without you ever touching anybody."
- Explanation: "Straddle first. Draw an imaginary line between your feet. If that line passes within one disc diameter of the thrower's pivot point, that's a straddle — in plain terms, don't stand with their pivot foot between your legs."
- Example: "Wrapping is the same idea with arms. If a line between your hands or arms comes within a disc diameter of their torso, or any part of you is directly above the pivot point, that's wrapping. And here's the part people miss: neither one stops play. You fix your position, and the count resumes at the last number fully said, minus one."
- CTA: "Lesson 18 of 75 — new lesson daily."

## Instagram caption

Two more ways your mark can be illegal without you ever touching anybody.

**Straddle.** Draw an imaginary line between the marker's feet. If that line comes within one disc diameter of the thrower's pivot point, it's a straddle. The plain-English version: don't stand with their pivot foot between your legs. It's an easy one to commit by accident, because straddling the pivot feels like good, close defence right up until it's called.

**Wrapping.** The same idea, moved to the arms. If a line between your hands or arms comes within a disc diameter of the thrower's torso, that's wrapping — and so is having any part of your body above their pivot point. A mark can be wide and it can be active. What it can't be is closed around somebody.

Both carry the same "caused solely by movement of the thrower" exception that disc space does, so a marker who is standing still and gets pivoted into hasn't committed anything.

And the bit that catches people: **neither of these stops play.** They're marking infractions. The marker corrects their position and the stall count resumes at the number last fully uttered before the call, minus one. Not from zero, and not from where it was — one lower. That single-number reset is the whole consequence, which is why it pays to set a legal mark before the count starts rather than argue about it at six.

Together with Lesson 17, that's the full 18.1.1 shape: how far away, where your feet are, where your arms are.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

your mark can be illegal without touching anyone 🥏

straddle = a line between your feet comes within a disc diameter of their pivot point. wrapping = a line between your arms does the same to their torso

neither stops play. fix your position and the count resumes at the last number fully said, minus one

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Completes the marking-position trio.** Lesson 17 was disc space (18.1.1.3),
  this is straddle (18.1.1.2) and wrapping (18.1.1.4). All three are children of
  the same 18.1.1 list and the three of them pin naturally as a set.
- **18.1.3 earns its own pair rather than a footnote.** The lesson's own third
  body bullet and its quiz both land on the minus-one reset, and it is the only
  clause here with a consequence attached — the other two only describe shapes.
  It is also the first time the curriculum states the resume rule for *any*
  marking infraction, so it belongs on a card rather than in an aside.
- **The "solely" exception is in the caption but not on a card of its own.**
  18.1.1.4 carries it in its own text, which scene 5 quotes verbatim, so it is
  on screen without spending a scene on it. 18.1.1.2 does not carry that
  sentence — worth knowing, and a reason not to imply on screen that all three
  clauses are worded identically.
- **Deliberately does not cover who may call it or what "Contest" does.**
  Lesson 21 is foul/infraction/violation and Lesson 22 is who calls what;
  half-teaching either here would stretch this past its brief.
- **Next Thursday, 2026-08-27, is due a recap carousel** covering the next
  un-recapped block — lessons 15–21 — but only once those reels have actually
  posted. Lesson 15 posts 2026-08-20 and lesson 21 is not yet drafted, so the
  block will not be ready this coming Thursday. Expect a short recap of
  whatever has posted, or a skip with a note, per Step 1.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
