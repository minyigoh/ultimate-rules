# Reel 52 — "Substitutions"

**Status:** Pending review
**Script drafted:** 2026-09-19 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-26 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (5.3, 19.3, 19.3.1)
**Source lesson:** `content/lessons-3.json` → `subs`

Fifth reel of the stoppages block and the one that closes it. Reels 50 and 51
covered the two safety stoppages; 19.3 is the paragraph that follows them and
says what a substitution *does*. The reel pairs it with 5.3 from chapter 5,
which is the only other place the rulebook talks about changing players, so the
two halves of the answer — the free window between points, the narrow one
during a point — sit on the same card set.

This is the reel reel-51's notes pointed at: "how a substitution is made is
lesson 52 and gets its own reel." Nothing here re-teaches the injury stoppage
or the technical stoppage; scene 4 names them as the doorway and leaves the
mechanics where they were taught.

---

## Video — `reel52-substitutions.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–51.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Substitutions" · kicker BEGINNER · LESSON 52 / 75 |
| 2 | #1 UNLIMITED, THEN LOCKED | "Swap freely until you signal ready." · footer cites 5.3 |
| 3 | Rules detail | Verbatim 5.3 |
| 4 | #2 THEY MAY MATCH IT | "An injury swap lets them swap too." · footer cites 19.3 |
| 5 | Rules detail | Verbatim 19.3 |
| 6 | #3 A SUB INHERITS EVERYTHING | "They pick up exactly where you left off." · footer cites 19.3.1 |
| 7 | Rules detail | Verbatim 19.3.1 |
| 8 | FIELD TIP | "Signal ready only when your line is on." |
| 9 | Closing | "Lesson 52 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rule its own card quotes. **All three rules in the array are carded.** There
is no omission to decide on here, unlike reel 51.

### What the three cards do

1. **5.3 — the window.** One rule, one card. It is the only rule in the book
   that grants substitution freely, and it defines the window by its closing
   edge rather than its opening one: *before their team signals readiness for
   the pull*. The headline puts the signal in the reader's own hands because
   that is where the rule puts it.
2. **19.3 — the answer.** The reel's least-known fact and the reason this
   lesson is not simply "you can't sub mid-point". A swap forced by injury or
   equipment hands the opposition a swap of their own, which is what stops the
   safety stoppage from doubling as a tactical one.
3. **19.3.1 — inheritance.** Single-rule card. The parenthesised list
   *(location, possession, stall count etc)* is the whole point and is quoted
   with its brackets intact; the "may make a call on their behalf" clause is
   the half people miss, so the body ends on it rather than on the list.

**Layout — DRY-MEASURED, 2026-09-19.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; the three main scenes sit at **1192**.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  `#1 UNLIMITED, THEN LOCKED` **714.2px** of the 900px column,
  `#2 THEY MAY MATCH IT` **564.9px**, `#3 A SUB INHERITS EVERYTHING`
  **797.4px** — the widest is 89% of the column. Cover `BEGINNER` 231.1px at
  its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline and start their body at y=812.
  Scene 2 wraps to three lines, last baseline **912**, clearance **178px**
  against the `CITE_Y - 60` limit of 1090. Scenes 4 and 6 wrap to four, last
  baseline **962**, clearance **128px**.
- Scene 8's tip body ends at **1012** of the 1310 floor, 298px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards are light, as single-rule cards are: ink bottoms at **454**
  (scene 3), **504** (scene 5) and **504** (scene 7) against the 1310 floor.
  5.3 is 118 characters, 19.3 is 138 and 19.3.1 is 148 — comparable to reel
  51's scene 7, which shipped at 454.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "After a goal you can change as many players as you like. The moment your team signals readiness for the pull, that line is set."
- Scene 4 — "If a player comes off after an injury, or for illegal or faulty equipment, the opposing team may also change one player. One for one, not a free reshuffle."
- Scene 6 — "Location, possession, stall count: the player coming on takes on the full state of the player going off, and may make a call on their behalf."
- Scene 8 (field tip) — "Raising a hand early is how teams end up playing a point a player short. Count the line on the field, then signal. After that the window is shut, and the only way back in is an injury or broken kit."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-51/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix; only the `SCENES`
list differs. `TOTAL` is 9. Copy `blend.py` and `encode.py` in from reel-46 —
they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-52` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "You can swap your entire line between points. Try it during a point and you are playing a player short."
- Explanation: "Substitutions are unlimited after a goal is scored, right up until your team signals readiness for the pull. That signal closes the window. From then until the next goal, the players on the field are the players who play the point."
- Example: "There is one way back in: a safety stoppage. If somebody comes off for an injury, or for illegal or faulty equipment, the opposing team may also change one player, so it is one for one rather than a free reshuffle. And whoever comes on inherits the full state of the player they replaced — position, possession, stall count, and the right to make a call on their behalf."
- CTA: "Lesson 52 of 75 — new lesson daily."

## Instagram caption

Substitutions are unlimited. The window for them is not.

Between points you can change your whole line. During a point you almost never can, and the gap between those two facts is where teams get caught.

The window:

"A team may make unlimited substitutions after a goal is scored and before their team signals readiness for the pull."

That signal is the cut-off. Once your team has said it is ready, the players on the field are the players who play the point.

After that, the rules make room for one kind of change: the safety stoppage. And it is not one-sided.

"If a player is substituted after an injury, or due to illegal or faulty equipment, the opposing team may also choose to substitute one player."

One for one. An injury swap is not a chance to reshuffle a matchup, because the other team gets to answer it.

Then the part almost nobody knows:

"Substitute players take on the full state (location, possession, stall count etc) of the player they are substituting and may make a call on their behalf."

The player coming on inherits everything. Where the player they replaced was standing, whether they had the disc, what the stall count had reached, and the right to make a call on their behalf.

Field note. Signal readiness only when your line is genuinely on the field. Raising a hand early is how teams end up playing a point a player short, and once it is raised the window is shut.

Lesson 52 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (5.3, 19.3, 19.3.1). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

substitutions 🥏

between points you can change your whole line. during a point you almost never can, and that gap is where teams get caught

the window:

"A team may make unlimited substitutions after a goal is scored and before their team signals readiness for the pull."

that signal is the cut-off. once your team says it's ready, the players on the field are the players who play the point

after that the rules make room for one kind of change: the safety stoppage. and it isn't one-sided

"If a player is substituted after an injury, or due to illegal or faulty equipment, the opposing team may also choose to substitute one player."

one for one. an injury swap isn't a chance to reshuffle a matchup, because the other team gets to answer it

then the part almost nobody knows:

"Substitute players take on the full state (location, possession, stall count etc) of the player they are substituting and may make a call on their behalf."

the player coming on inherits everything — where the player they replaced was standing, whether they had the disc, what the stall count had reached, and the right to make a call on their behalf

field note: signal readiness only when your line is genuinely on the field. raising a hand early is how teams end up playing a point a player short, and once it's raised the window is shut

lesson 52 of 75

rules from WFDF Rules of Ultimate 2025–2028 (5.3, 19.3, 19.3.1) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (5.3, 19.3,
19.3.1).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes, three topic/rules pairs.** `TOTAL = 9`. All three of the
  lesson's rules are carded and quoted in full in both captions; all three
  numbers are in the attribution line.
- **DRY-MEASURED 2026-09-19** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are
  emitted, not estimated.
- **5.3 is a chapter 5 rule on a chapter 19 week, and that is deliberate.** The
  lesson's array pairs them because the answer to "when can I sub?" is split
  across the two chapters. Do not drop 5.3 to keep the block tidy — without it
  the reel only says when you *cannot* substitute.
- **"One for one" is the load-bearing phrase on card 2.** 19.3 gives the
  opposition *one* player, not a matching reshuffle, and the body says so
  explicitly because the rule's own wording ("may also choose to substitute one
  player") is easy to skim past.
- **Quote 19.3.1's brackets as written.** The rulebook writes
  "(location, possession, stall count etc)" with no full stop after "etc", and
  the card and both captions carry it unchanged.
- **Scene 4 does not re-teach reels 50 and 51.** It names injury and faulty
  equipment as the doorway to a mid-point change and stops there; the injury
  stoppage itself is lesson 50 (posts 2026-09-24) and the technical stoppage is
  lesson 51 (posts 2026-09-25), both before this one.
- **The field tip says "a player short", not "with six".** The lesson's `field`
  line says six, but the minimum on the field is five (5.1) and that rule is
  not in this lesson's array, so the copy makes the point without asserting a
  number it does not card.
- Instagram caption **1,662 characters** including hashtags (75.5% of the 2,200
  limit, well under the 2,090 warn line); TikTok 1,533 of 4,000. Both plain
  text, both scanned clean of markdown, both measured in UTF-16 units by
  `tools/check_caption.py`, which exits 0.
- Curriculum position: lesson 52 is index 18 of `content/lessons-3.json`, the
  next unused lesson after 51. It covers 2026-09-26, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
