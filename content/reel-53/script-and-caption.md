# Reel 53 — "The shape of a game"

**Status:** Pending review
**Script drafted:** 2026-09-20 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-27 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (4.2, 4.3, 6.3, 5.1)
**Source lesson:** `content/lessons-3.json` → `game-format`

First reel after the stoppages block closed at reel 52. Reels 47–52 were all
about interruptions — the brick, time-outs, injuries, technical stoppages,
substitutions — and this one steps back to the container they all sit inside:
how long a game is, what half time does, and how many players a line may hold.

All four rules in the lesson's array are carded. Chapters 4, 5 and 6 each
supply one piece of the answer, which is why the array crosses three chapters
for a lesson that feels like one fact.

---

## Video — `reel53-the-shape-of-a-game.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–52. Scene 3 carries two rule blocks; scenes
5 and 7 carry one each.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "The shape of a game" · kicker BEGINNER · LESSON 53 / 75 |
| 2 | #1 FIRST TO FIFTEEN | "Fifteen goals wins. Eight brings half time." · footer cites 4.2 · 4.3 |
| 3 | Rules detail | Verbatim 4.2 and 4.3 |
| 4 | #2 HALF TIME FLIPS THE CHOICES | "The choices made at the start get swapped." · footer cites 6.3 |
| 5 | Rules detail | Verbatim 6.3 |
| 6 | #3 SEVEN ON, FIVE MINIMUM | "You can play short. You cannot play too short." · footer cites 5.1 |
| 7 | Rules detail | Verbatim 5.1 |
| 8 | FIELD TIP | "Ask what the format is before you start." |
| 9 | Closing | "Lesson 53 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes. **All four rules in the array are carded.**

### What the three cards do

1. **4.2 + 4.3 — the length.** Two rule blocks on one card, the shape reels 40,
   44, 45 and 51 already use. They belong together: 4.2 gives the target, 4.3
   gives the halfway mark, and neither reads as a description of a game on its
   own. Carding them apart would mean a scene whose only content is "fifteen".
2. **6.3 — the switch.** Single-rule card. **6.3's text is a back-reference —
   "these initial selections" points at 6.1 and 6.2, which are not in this
   lesson's array.** So the headline and body supply the antecedent in plain
   words ("one team picks whether to receive or which end zone to defend") and
   the card quotes 6.3 unchanged. The reel does not cite 6.1 or 6.2 anywhere,
   because they are not this lesson's rules to cite — same handling as reel 51's
   lead-in rule.
3. **5.1 — the numbers.** Single-rule card. The rule gives a range, and the
   half people get wrong is the minimum, not the maximum, so the body closes on
   "Four is not."

**Layout — DRY-MEASURED, 2026-09-20.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; the three main scenes sit at **1192**.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  `#1 FIRST TO FIFTEEN` **513.9px** of the 900px column,
  `#2 HALF TIME FLIPS THE CHOICES` **840.8px**, `#3 SEVEN ON, FIVE MINIMUM`
  **697.3px** — the widest is 93% of the column, inside the 873px high-water
  mark set by reel-11. Cover `BEGINNER` 231.1px at its own 32px.
  `FIELD TIP` 236.2px.
  - Card 2's kicker was drafted as `HALF TIME SWITCHES THE CHOICES` and
    measured **952.3px**, which trips `fit_kicker()` down to 32px. It was
    reworded to `FLIPS` **while drafting**, before anything went to the desk.
    That is not the forbidden move: the ban is on rewording an *approved*
    kicker to fit. Nothing here has been approved yet, so writing to fit costs
    nothing and keeps the type uniform with the back catalogue.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline and start their body at y=812.
  Scenes 2 and 4 wrap to four lines, last baseline **962**, clearance **128px**
  against the `CITE_Y - 60` limit of 1090. Scene 6 wraps to three, last
  baseline **912**, clearance **178px**.
- Scene 8's tip body ends at **1012** of the 1310 floor, 298px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards: ink bottoms at **690** (scene 3, the two-block card), **404**
  (scene 5) and **454** (scene 7) against the 1310 floor. 4.2 is 73 characters
  and 4.3 is 123, so the pair together still sits lighter than reel-44's
  two-block scene 3. 6.3 is 71 characters — the lightest rules card in the
  block — and 5.1 is 115.
- Projected duration **30.0s** from `retime()`/`fit()` (35 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "A game is won by the first team to reach fifteen goals. It runs in two halves, and half time arrives the moment either team first scores eight."
- Scene 4 — "Before the first pull, one team picks whether to receive or which end zone to defend, and the other takes what is left. At the second half those selections switch over."
- Scene 6 — "Each team puts a maximum of seven players and a minimum of five on the field for each point. Six is a legal line. Four is not."
- Scene 8 (field tip) — "Most social and league games shorten this with a time cap or a lower target, so fifteen and eight are the default rather than a promise. Knowing the real target changes how you play a two-goal deficit late on."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-52/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs. `TOTAL` is 9. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-53` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "There is no clock in the rulebook. A game ends when a team reaches fifteen."
- Explanation: "A game is won by the first team to score fifteen goals, and it runs in two halves, with half time arriving the moment either team first scores eight. The two choices made before the first pull — receive or throw, and which end zone to defend — both switch over at the start of the second half."
- Example: "So if you chose to receive at the start, you pull to begin the second half. And the line has a range rather than a fixed number: a maximum of seven players and a minimum of five on the field for each point. Six is a legal line. Four is not."
- CTA: "Lesson 53 of 75 — new lesson daily."

## Instagram caption

Fifteen goals wins a game. Eight changes it.

Most people learn the shape of an ultimate game by playing one. Here it is written down.

The length:

"A game is finished and won by the first team to score fifteen (15) goals."

"A game is separated into two (2) periods of play, called halves. Half time occurs when a team first scores eight (8) goals."

So there is no clock in the rulebook. The game ends when a team reaches fifteen, and it pauses when a team reaches eight.

Before the first pull, one team chooses whether to receive or which end zone to defend, and the other takes the choice that is left. Those two decisions do not stand for the whole game:

"At the start of the second half, these initial selections are switched."

Chose to receive at the start? After half time, you pull.

And the line itself:

"Each team will put a maximum of seven (7) players and a minimum of five (5) players on the field during each point."

Seven is the full line. Five is the floor. Six is perfectly legal, which is worth knowing when somebody is late or hurt — you play on.

Field note. Most social and league games shorten all of this with a time cap or a lower target, so ask what the format is before your first point. Fifteen and eight are the default, not a promise, and the real numbers change how you treat a two-goal deficit late on.

Lesson 53 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (4.2, 4.3, 6.3, 5.1). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

the shape of a game 🥏

there's no clock in the rulebook. here's what actually ends a game

"A game is finished and won by the first team to score fifteen (15) goals."

"A game is separated into two (2) periods of play, called halves. Half time occurs when a team first scores eight (8) goals."

fifteen finishes it. eight pauses it

before the first pull one team picks whether to receive or which end zone to defend, and the other takes what's left. those choices don't stand for the whole game:

"At the start of the second half, these initial selections are switched."

chose to receive at the start? after half time you pull

and the line itself:

"Each team will put a maximum of seven (7) players and a minimum of five (5) players on the field during each point."

seven is the full line. five is the floor. six is perfectly legal, which is worth knowing when someone's late or hurt — you play on

field note: most social and league games shorten all of this with a time cap or a lower target, so ask what the format is before your first point. fifteen and eight are the default, not a promise

lesson 53 of 75

rules from WFDF Rules of Ultimate 2025–2028 (4.2, 4.3, 6.3, 5.1) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (4.2, 4.3, 6.3, 5.1).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes, three topic/rules pairs.** `TOTAL = 9`. All four of the
  lesson's rules are carded and quoted in full in both captions; all four
  numbers are in the attribution line, in the array's own order.
- **DRY-MEASURED 2026-09-20** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are
  emitted, not estimated.
- **6.3 is quoted with its back-reference intact.** "These initial selections"
  refers to 6.1 and 6.2. Those are not in this lesson's `rules` array, so they
  are not cited anywhere in the post; the surrounding copy names what was
  selected instead. Do not add them to make the quotation self-contained — the
  card is verbatim and the context belongs in the writing.
- **Three chapters, one lesson.** 4.2/4.3 (Point, Goal and Game), 5.1 (Teams)
  and 6.3 (Starting a Game). The array crosses chapters because the shape of a
  game is not written down in one place. Do not trim it to one chapter for
  tidiness.
- **The tip does not name a specific alternative target.** Time caps and shorter
  games are real and worth flagging, but no number other than fifteen, eight,
  seven and five is asserted anywhere, because no other number is in
  `rules.json`.
- **"Six is perfectly legal" is the practical half of 5.1** and the line most
  likely to be useful at a pickup game. It follows directly from the quoted
  minimum of five, so it is a reading of the carded rule rather than an
  addition to it.
- Instagram caption **1,598** characters including hashtags (72.6% of the
  2,200 limit, well under the 2,090 warn line); TikTok **1,306** of 4,000. Both plain text, both scanned clean
  of markdown, both measured in UTF-16 units by `tools/check_caption.py`, which
  exits 0.
- Curriculum position: lesson 53 is index 19 of `content/lessons-3.json`, the
  next unused lesson after 52. It covers 2026-09-27, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
