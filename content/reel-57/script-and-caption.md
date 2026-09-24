# Reel 57 — "Helping beginners is written into the rules"

**Status:** Pending review
**Script drafted:** 2026-09-24 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-01 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (1.8, 1.9, 1.7.1, 1.7.3)
**Source lesson:** `content/lessons-3.json` → `helping-beginners`

Second reel of the Spirit run and the direct sequel to reel-56. Reel-56 made the
case that Chapter 1 is written in the imperative; this one shows the friendliest
thing that imperative actually asks for. It is also the reel most likely to be
the first one a genuinely new player sees, so the tone stays on their side
throughout: the hook is addressed to them, not to the experienced player being
instructed.

The lesson's four rules split three ways: the novice-breach duty, the
supervision permission, then the two team duties.

**Rule 1.7 is deliberately not carded.** 1.7.1 and 1.7.3 are list items under a
stem ("Teams are guardians of the Spirit of the Game, and must:") that the
lesson's own `rules` array does not include, and every rule number on this post
comes from that array unchanged. Scene 6's body supplies the frame in the
account's own words instead — "The rulebook gives teams their own list of
duties" — so nothing on the citation card is a paraphrase of an uncited rule.
This is the opposite call to reel-56, where the stem (1.3) *was* in the array
and was carded with its first item. Worth a decision at the desk if the
fragments read oddly on screen; the alternative is adding 1.7 to the lesson's
array, which is an edit to `lessons-3.json` and not this run's to make.

---

## Video — `reel57-helping-beginners.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–56.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Helping beginners is written into the rules" · kicker BEGINNER · LESSON 57 / 75 |
| 2 | #1 EXPLAIN, DO NOT EXPLOIT | "A novice breach is a teaching moment." · footer cites 1.8 |
| 3 | Rules detail | Verbatim 1.8 |
| 4 | #2 YOU MAY SUPERVISE | "Guiding a beginners' game is allowed." · footer cites 1.9 |
| 5 | Rules detail | Verbatim 1.9 |
| 6 | #3 LEARNING IS A TEAM JOB | "Two of the duties belong to the team." · footer cites 1.7.1 · 1.7.3 |
| 7 | Rules detail | Verbatim 1.7.1 and 1.7.3, one block each |
| 8 | FIELD TIP | "Say you are new." |
| 9 | Closing | "Lesson 57 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes. **All four rules in the array are carded.**

### What the three cards do

1. **1.8 — the novice-breach duty.** One rule, one card. It is the whole reason
   the lesson exists and it is short enough (143 characters) that pairing it
   with anything would dilute it. Scenes 3 and 5 are the first single-block
   rules cards in the Spirit run; `g_detail()` takes two durations rather than
   three in that shape, which is why the `SCENES` entries differ from reel-56's.
2. **1.9 — the supervision permission.** Carded on its own because it is a
   *may*, not a *must*, and that is the distinction the scene is teaching. Put
   next to 1.8 on one card, the two moods blur.
3. **1.7.1 + 1.7.3 — the two team duties.** These belong together: one is
   inward (teach your own side) and one is outward (tell the other side), and
   the pairing is the point. Two blocks on one card, the shape reel-56 scene 3
   uses for 1.3 / 1.3.1.

**Layout — DRY-MEASURED, 2026-09-24.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; the three main scenes sit at **1192**.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`): `#1 EXPLAIN, DO NOT
  EXPLOIT` **727.5px** of the 900px column (80.8%), `#2 YOU MAY SUPERVISE`
  **580.1px** (64.5%), `#3 LEARNING IS A TEAM JOB` **702.9px** (78.1%). All
  inside the 873px high-water mark set by reel-11's "SIMULTANEOUS MEANS
  OFFENCE". Cover `BEGINNER` 231.1px at its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline and start their body at y=812, and
  all three wrap to four lines: last baseline **962**, clearance **128px**
  against the `CITE_Y - 60` limit of 1090.
  - Scenes 2 and 6 were drafted longer and wrapped to **five** lines, last
    baseline **1012** — still passing, at 78px clearance, with `fit_body()` not
    engaging. Both were tightened to four **while drafting**, before anything
    went to the desk, to keep the block uniform and to stay further from the
    limit than one edit's worth. That is not the forbidden move: the ban is on
    rewording an *approved* body to fit, and nothing here has been approved.
- Cover title wraps to three lines at the standard 84px — **732.8px**,
  **695.4px**, **200.8px** of 900. No auto-fit.
- Scene 8's tip body ends at **934** of the 1310 floor, 376px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards are light: ink bottoms at **504** (scene 3), **504** (scene 5) and
  **740** (scene 7) against the 1310 floor. 1.8 is 143 characters, 1.9 is 142,
  1.7.1 is 70 and 1.7.3 is 144.
- Projected duration **30.0s** from `retime()`/`fit()` (35 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "If a new player breaches a rule they clearly do not know, experienced players are told to explain it. That instruction is in the rules, not in an etiquette guide."
- Scene 4 — "An experienced player may supervise a game involving beginners or younger players, offering advice on the rules and guiding the arbitration that happens on the field."
- Scene 6 — "The rulebook gives teams their own list of duties. Two are about learning: teach your own players the rules and good Spirit, and tell other teams how they could improve."
- Scene 8 (field tip) — "If you do not know a rule, ask the person who called it to explain it. It is a completely normal thing to say on an ultimate field, and the rules tell the person you are asking to give you a straight answer."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-56/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed. `TOTAL` is 9. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-57` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "If you are new and you are worried about getting a rule wrong, the rulebook is already on your side. It tells the experienced players what to do about it."
- Explanation: "Where a novice is involved in a breach and does not know the rule, experienced players should assist to explain it. An experienced player may also supervise a beginners' game outright, advising on rules and guiding the arbitration. And teams carry two duties of their own: teach your own players, and give other teams constructive feedback."
- Example: "You travel, someone calls it, and you have no idea what they mean. The correct thing that happens next is not you losing the disc in silence. It is somebody explaining the rule to you."
- CTA: "Lesson 57 of 75 — new lesson daily."

## Instagram caption

If you are new, this one is on your side.

The rules do not just tolerate beginners. They tell the experienced players what to do about them.

"In the case where a novice player is involved in a breach and does not know the rules, experienced players should assist to explain the breach."

Should assist to explain. Not should take the advantage, which is what people who have never read Chapter 1 sometimes assume.

There is a second one, and it is permission rather than duty.

"An experienced player, who offers advice on rules and guides on-field arbitration, may supervise games involving beginners or younger players."

So the more experienced player on the sideline guiding a beginners' game is not overstepping. That is a role the rulebook describes.

Teams get two of their own. They read as list items because that is what they are — entries on the list of things teams must do.

"take responsibility for teaching their team the rules and good Spirit;"

"provide constructive feedback to other teams about what they are doing well and/or how to improve their adherence to the Spirit of the Game; and"

Field note. If you do not know a rule, ask the person who called it to explain it. It is a completely normal thing to say on an ultimate field, and the rules tell the person you are asking to give you a straight answer.

Lesson 57 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (1.8, 1.9, 1.7.1, 1.7.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

helping beginners is written into the rules 🥏

if you're new, this one is on your side

the rules don't just tolerate beginners — they tell experienced players what to do about them

"In the case where a novice player is involved in a breach and does not know the rules, experienced players should assist to explain the breach."

should assist to explain. not should take the advantage

there's a second one, and it's permission rather than duty

"An experienced player, who offers advice on rules and guides on-field arbitration, may supervise games involving beginners or younger players."

so the experienced player guiding a beginners' game isn't overstepping. that's a role the rulebook describes

teams get two of their own, and they read as list items because that's what they are

"take responsibility for teaching their team the rules and good Spirit;"

"provide constructive feedback to other teams about what they are doing well and/or how to improve their adherence to the Spirit of the Game; and"

field note: if you don't know a rule, ask the person who called it to explain it. completely normal thing to say, and the rules tell them to give you a straight answer

lesson 57 of 75

rules from WFDF Rules of Ultimate 2025–2028 (1.8, 1.9, 1.7.1, 1.7.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (1.8, 1.9, 1.7.1, 1.7.3).

---

## Notes

- **Lesson 57 of 75**, `helping-beginners` in `content/lessons-3.json`. Second
  reel of the Spirit run, straight after reel-56.
- **Rule 1.7 is not carded and not cited**, although 1.7.1 and 1.7.3 are its
  list items. Every number on this post comes from the lesson's `rules` array
  unchanged; scene 6's body supplies the frame in the account's own words. Flag
  at the desk if the fragments read oddly on screen — the fix would be an edit
  to `lessons-3.json`, not to this script.
- **DRY-MEASURED 2026-09-24** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. `render_v3.py` is committed here and is the exact
  file measured. SVG only; no PNGs, no frames, no cut.
- **Scenes 3 and 5 are single-block rules cards**, a first for this run. Their
  `SCENES` entries carry two durations, not three, because `g_detail()` emits
  one group per rule block plus the header and the render asserts the counts
  match.
- Scenes 2 and 6 were tightened from five body lines to four while drafting, for
  uniformity with scene 4 and margin against the citation. Nothing approved was
  reworded.
- No growth/reach claims in either caption.
