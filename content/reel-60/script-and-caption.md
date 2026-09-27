# Reel 60 — "Obstructions and people on the sideline"

**Status:** Pending review
**Script drafted:** 2026-09-27 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-04 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (2.7, 11.1, 11.2)
**Source lesson:** `content/lessons-3.json` → `obstructions`

Back to Safety after the Calls run of reels 57–59, and the first lesson in a
while that is about the space around the field rather than a decision inside it.
The account has taught the sideline from the playing side — where the lines are,
what counts as out — and never from the side you spend most of a game standing
on. This reel is for the person watching a point with their bag at their feet.

**It joins one Chapter 2 rule to two Chapter 11 rules, and that pairing is the
reel.** Rule 2.7 is a field-setup rule: keep the surroundings clear, and there is
a remedy if they are not. Rules 11.1 and 11.2 are out-of-bounds rules that happen
to say what a person on the sideline *is*. Read separately they look like
housekeeping and trivia. Read together they say the same thing twice: what is
beside the field is part of the game, and where you stand has consequences.

**All three rules in the lesson's `rules` array are carded, one card each.** No
number is introduced that the array does not carry — the three-pair shape, same
as reels 43–59.

**Rule 11.2 ends with an exception for defensive players, and this reel does not
teach it.** The clause "except for defensive players, who are always considered
'in-bounds'" is inside the verbatim quotation, so it stays exactly as
`rules.json` has it — trimming a quotation to keep a slide tidy is the
paraphrasing the pipeline forbids. But it is a different lesson (a defender may
stand out of bounds and still be in-bounds for the purpose of a catch), and
nothing in this lesson's `body` or `field` reaches for it. So the prose on scene
6 and in both captions names only non-players and objects — a bag, a jacket, a
spectator — and never generalises to "anyone standing there", which is the one
gloss the exception would make wrong. Same handling as reel-59's "unless 16.3
applies": quoted in full, cited nowhere extra, explained not at all.

**The three-metre band is a number, so it comes from the rule and not from
memory.** 2.7 says "within three (3) metres of the perimeter line" and the
lesson's `field` line repeats it. Every mention of it in the script traces to
that quotation.

---

## Video — `reel60-obstructions.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Obstructions and people on the sideline" · kicker BEGINNER · LESSON 60 / 75 |
| 2 | #1 KEEP THE SIDELINE CLEAR | "Bags and bystanders belong well back." · footer cites 2.7 |
| 3 | Rules detail | Verbatim 2.7 |
| 4 | #2 SPECTATORS ARE OUT | "A spectator is part of out-of-bounds." · footer cites 11.1 |
| 5 | Rules detail | Verbatim 11.1 |
| 6 | #3 WHAT TOUCHES OUT IS OUT | "The sideline is more than the ground." · footer cites 11.2 |
| 7 | Rules detail | Verbatim 11.2 |
| 8 | FIELD TIP | "Three metres back, and watch the disc." |
| 9 | Closing | "Lesson 60 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rule its own card quotes.

### What the three cards do

1. **2.7 — the clearance rule, and that it has a remedy.** Most people know the
   sideline should be tidy and do not know it is enforceable. This card supplies
   both the three-metre band and the fact that an obstructed player or thrower
   may call "Violation".
2. **11.1 — non-players are part of the out-of-bounds area.** One sentence,
   easily missed, and it is what makes a disc that strikes a spectator out
   rather than a replay. It is also the reason the previous card matters.
3. **11.2 — what the out-of-bounds area consists of.** The ground that is not
   in-bounds and everything in contact with it, which is where a bag left on the
   line stops being untidy and becomes part of the boundary.

**Layout — DRY-MEASURED, 2026-09-27.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering. (This is the first draft run
since 2026-09-08 that has been able to dry-measure at all; the old local sandbox
could not.)

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; the three main scenes sit at **1192**.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`): `#1 KEEP THE
  SIDELINE CLEAR` **736.9px** of the 900px column (81.9%), `#2 SPECTATORS ARE
  OUT` **621.6px** (69.1%), `#3 WHAT TOUCHES OUT IS OUT` **755.8px** (84.0%).
  All three sit below reel-59's widest (840.8px) and well inside the 873px
  high-water mark set by reel-11's "SIMULTANEOUS MEANS OFFENCE". Cover
  `BEGINNER` **231.1px** at its own 32px. `FIELD TIP` **236.2px**.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline, start their body at y=812 and wrap
  to four lines: last baseline **962**, clearance **128px** against the
  `CITE_Y - 60` limit of 1090. Bodies are 174, 143 and 164 characters.
- **The cover title wraps to three lines at the standard 84px** — **695.4px**,
  **546.0px** and **312.8px** of 900 — which is why the cover is the tallest
  scene here at 1210 rather than the usual 1192. No auto-fit; the `LESSON 60 /
  75` line sits at its fixed y and the collision check is clean. reel-57's
  42-character title wraps the same way.
- Scene 8's tip body wraps to four lines and ends at **962** of the 1310 floor,
  348px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: 2.7 is the tallest at ink bottom **654** (scene 3) against the
  1310 floor, with **554** (scene 7, 11.2) and **504** (scene 5, 11.1) behind
  it. 2.7 is 251 characters, 11.1 is 167 and 11.2 is 172.
- Projected duration **30.00s** from `retime()`/`fit()` (34 states, 9 scenes,
  23.80s held + 6.20s transitions; house target ~30s, band 28–33s). Durations
  in `SCENES` are untouched placeholders — do not hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "The ground just outside the field has to stay clear of movable objects. If a non-player or an object within three metres of the line gets in your way, you can call violation."
- Scene 4 — "Non-players are not neutral scenery. They count as part of the out-of-bounds area, so a disc that hits someone standing on the sideline is out."
- Scene 6 — "Out-of-bounds is the ground outside the field and everything in contact with it. Your bag, your jacket and anyone watching from the line count as out along with it."
- Scene 8 (field tip) — "Standing right on the line is how sideline players get hit, and getting hit is a violation as well as unpleasant. Keep your bag behind you and your eyes up."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-59/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed. `TOTAL` is 9. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-60` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "You are watching a point from the sideline with your bag at your feet. Both of those are in the rulebook, and not in the way you would guess."
- Explanation: "The ground just outside the field has to be kept clear of movable objects, and if a non-player or an object within three metres of the line obstructs a player or the thrower, that is a violation. The people standing there are not neutral either: all non-players are part of the out-of-bounds area, and the out-of-bounds area is the ground outside the field plus everything in contact with it."
- Example: "A throw drifts wide and hits a spectator standing a step behind the sideline. Nobody is at fault and it is not a replay — the spectator is part of the out-of-bounds area, so the disc is out."
- CTA: "Lesson 60 of 75 — new lesson daily."

## Instagram caption

Someone's bag is on the sideline. The disc lands on a spectator. Both of those are in the rulebook.

The strip of ground just outside the field is not a free-for-all, and the people standing on it are not scenery. Three rules cover it.

First, clearance.

"The immediate surroundings of the playing field shall be kept clear of movable objects. If play is obstructed by non-players or objects within three (3) metres of the perimeter line, any obstructed player or thrower in possession may call “Violation”."

Three metres is the number. Movable objects go well back, and if a non-player or an object inside that band obstructs you or the thrower, you can call violation.

Second, who counts as part of the field.

"The entire playing field is in-bounds. The perimeter lines are not part of the playing field and are out-of-bounds. All non-players are part of the out-of-bounds area."

Nobody on the sideline is neutral. All non-players are part of the out-of-bounds area, so a disc that hits a spectator standing past the line is out.

Third, what the out-of-bounds area actually is.

"The out-of-bounds area consists of the ground which is not in-bounds and everything in contact with it, except for defensive players, who are always considered “in-bounds”."

The ground outside the field, and everything in contact with it. Your bag, your jacket, the friend watching the point.

Field note. Three metres back, and watch discs coming your way. Getting hit is unpleasant, and it is also a violation.

Lesson 60 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (2.7, 11.1, 11.2). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

obstructions and people on the sideline 🥏

someone's bag is on the sideline. the disc lands on a spectator. both of those are in the rulebook

the strip of ground just outside the field is not a free-for-all, and the people standing on it are not scenery

first, clearance

"The immediate surroundings of the playing field shall be kept clear of movable objects. If play is obstructed by non-players or objects within three (3) metres of the perimeter line, any obstructed player or thrower in possession may call “Violation”."

three metres is the number. movable objects go well back, and if a non-player or object inside that band obstructs you or the thrower, you can call violation

second, who counts as part of the field

"The entire playing field is in-bounds. The perimeter lines are not part of the playing field and are out-of-bounds. All non-players are part of the out-of-bounds area."

nobody on the sideline is neutral. all non-players are part of the out-of-bounds area, so a disc that hits a spectator past the line is out

third, what the out-of-bounds area actually is

"The out-of-bounds area consists of the ground which is not in-bounds and everything in contact with it, except for defensive players, who are always considered “in-bounds”."

the ground outside the field, and everything in contact with it. your bag, your jacket, the friend watching the point

field note: three metres back, and watch discs coming your way. getting hit is unpleasant, and it's also a violation

lesson 60 of 75

rules from WFDF Rules of Ultimate 2025–2028 (2.7, 11.1, 11.2) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (2.7, 11.1, 11.2).
