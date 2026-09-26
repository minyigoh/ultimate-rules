# Reel 59 — "Stopping play when you shouldn't have"

**Status:** Pending review
**Script drafted:** 2026-09-26 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-03 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.9, 15.9.1, 15.9.2, 15.9.3)
**Source lesson:** `content/lessons-3.json` → `incorrect-stoppage`

Second reel of the Calls run, after reel-58. Where reel-58 was the tiebreaker
for a play with two legitimate calls on it, this one is for the call that should
never have been made at all — and its point is that the rulebook treats that as
ordinary business with a defined remedy, not as a transgression. That framing is
the reel: a beginner who stops play wrongly once and gets glared at is less
likely to make the next call they should make.

**Back to Beginner after reel-58's Intermediate.** Reel-58 was marked up because
it is a branch rule nobody needs on day one. This is the opposite: "you did not
know the rule" is written into 15.9 itself as a thing that happens, so the
lesson is aimed squarely at the person it describes.

**The lesson's four rules go on three cards, not four.** 15.9 is a stem — it
ends in a colon and its sentence is finished by each of the three sub-clauses
under it — so carding it alone would put a dangling fragment on screen. It is
paired with 15.9.1 on one doubled card, which is the shape `g_detail()` already
supports: parent number and chapter label, the stem text, then the sub-rule
number on its own line in orange bold 22px, then its text.

**This is not the reel-57/reel-58 stem question.** There the stem (1.7, 17.9)
was *outside* the lesson's `rules` array, so the choice was whether to introduce
a number the array did not carry — and the answer both times was no. Here 15.9
**is** in the array, so it is quoted and cited like any other rule. Nothing new
is introduced; the only judgement is which card it shares.

**15.9.2 ends "unless 16.3 applies", and 16.3 is not cited anywhere on this
post.** That phrase is inside the verbatim quotation, so it stays exactly as
`rules.json` has it — trimming a quotation to avoid an inconvenient cross-
reference is precisely the paraphrasing the pipeline forbids. But 16.3 is not in
the lesson's `rules` array, so it does not appear in any card footer, in the
attribution line, or in the captions as a citation. Do not add it.

---

## Video — `reel59-incorrect-stoppage.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–58.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Stopping play when you shouldn't have" · kicker BEGINNER · LESSON 59 / 75 |
| 2 | #1 MISHEARD IT? IT COUNTS | "An incorrect stoppage is a named thing." · footer cites 15.9 · 15.9.1 |
| 3 | Rules detail | Verbatim 15.9 + 15.9.1 (doubled card) |
| 4 | #2 OTHERWISE, BACK IT GOES | "The disc returns to the last undisputed thrower." · footer cites 15.9.2 |
| 5 | Rules detail | Verbatim 15.9.2 |
| 6 | #3 THE STALL COUNT REMEMBERS | "You pay for the interruption in stall." · footer cites 15.9.3 |
| 7 | Rules detail | Verbatim 15.9.3 |
| 8 | FIELD TIP | "Don't echo a call you didn't hear." |
| 9 | Closing | "Lesson 59 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes. **All four rules in the array are carded.**

### What the three cards do

1. **15.9 + 15.9.1 — what counts, and the first branch.** The stem names the
   three ways this happens (mishearing, not knowing the rules, calling late) and
   15.9.1 gives the easy outcome: if the opposition ended up with the disc, the
   play stands and nothing is rewound.
2. **15.9.2 — the other branch.** The disc goes back to the *last non-disputed*
   thrower, which is a narrower phrase than "the thrower" and worth reading in
   the rulebook's own words.
3. **15.9.3 — the cost.** The one people do not expect. The stall count resumes
   as though the stoppage were an accepted breach by the player who caused it,
   so on offence the marker restarts at maximum nine.

**Layout — DRY-MEASURED, 2026-09-26.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; the three main scenes sit at **1192**.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`): `#1 MISHEARD IT? IT
  COUNTS` **699.1px** of the 900px column (77.7%), `#2 OTHERWISE, BACK IT GOES`
  **744.5px** (82.7%), `#3 THE STALL COUNT REMEMBERS` **840.8px** (93.4%).
  Kicker #3 is the widest this account has drafted — it passes reel-58's 837.0px
  — but it is still inside the 873px high-water mark set by reel-11's
  "SIMULTANEOUS MEANS OFFENCE", with 32px of headroom, so the auto-fit remains a
  verified no-op. Cover `BEGINNER` 231.1px at its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline, start their body at y=812 and wrap
  to four lines: last baseline **962**, clearance **128px** against the
  `CITE_Y - 60` limit of 1090.
  - Scenes 2 and 6 were drafted longer and wrapped to **five** lines, last
    baseline **1012** — still passing, at 78px clearance, with `fit_body()` not
    engaging. Both were tightened to four **while drafting**, before anything
    went to the desk, to keep the block uniform and to sit further from the
    limit than one edit's worth. That is not the forbidden move: the ban is on
    rewording an *approved* body to fit, and nothing here has been approved.
    Same call as reel-57 scenes 2 and 6 and reel-58 scene 2.
- Cover title wraps to two lines at the standard 84px — **793.4px** and
  **762.1px** of 900. No auto-fit.
- Scene 8's tip body ends at **962** of the 1310 floor, 348px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards: the doubled card is the tallest of the three, ink bottom at
  **672** (scene 3) against the 1310 floor, with **504** (scene 5) and **454**
  (scene 7) behind it. 15.9 is 142 characters, 15.9.1 is 74, 15.9.2 is 134 and
  15.9.3 is 118.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Mishearing a call, not knowing the rule, or calling too late all count as stopping play incorrectly. If the other team kept the disc anyway, what happened next stands."
- Scene 4 — "If the other team did not gain or keep possession, play does not restart from where you stopped it. The disc goes back to the last thrower nobody disputed."
- Scene 6 — "Stopping play incorrectly is treated as a breach by you, so the stall count resumes accordingly. On offence that means restarting at maximum nine."
- Scene 8 (field tip) — "Half of incorrect stoppages start as a well-meant echo from someone who was not sure what was called. If you did not hear it, let the player who made the call say it again."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-58/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed. `TOTAL` is 9. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-59` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "You misheard a call and yelled "stop". Play has halted and it should not have. Nobody is in trouble — there is a rule for exactly this."
- Explanation: "Mishearing a call, not knowing the rule, or calling too late all count as stopping play incorrectly. What happens next turns on one question: did the other team end up with the disc? If they gained or retained possession, any subsequent play stands. If they did not, the disc goes back to the last non-disputed thrower. Either way the stall count resumes as if the breach were yours."
- Example: "You hear someone shout, you echo it, and everything stops — except the call was never made. The other team had not caught anything, so the disc returns to the last undisputed thrower, and the marker restarts at maximum nine."
- CTA: "Lesson 59 of 75 — new lesson daily."

## Instagram caption

You misheard a call and yelled "stop". Now what?

It happens. You mishear, you call it late, or you did not know the rule. The rulebook handles it without drama, and it is worth knowing the remedy before you need it.

First, what counts as stopping play incorrectly.

"After a player initiates a stoppage incorrectly, including after mishearing a call, not knowing the rules, or not making the call immediately:"

Mishearing, not knowing, calling late. All three are named.

Then the split, and it turns on one question: did the other team end up with the disc?

"if the opposition gains or retains possession, any subsequent play stands."

If they gained it or kept it, nothing is undone. Whatever happened next stands.

"if the opposition does not gain or retain possession, the disc must be returned to the last non-disputed thrower, unless 16.3 applies."

If they did not, you rewind. The disc goes back to the last thrower nobody disputed.

Third, the cost.

"The stall count resumes as if an accepted breach has been caused by the player who initiated the stoppage incorrectly."

The count picks up as though the breach were yours, so on offence that means restarting at maximum nine. A small price for the interruption, and a fair one.

Field note. Do not echo a call you are not sure you heard. Half of incorrect stoppages start as a well-meant echo.

Lesson 59 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (15.9, 15.9.1, 15.9.2, 15.9.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

stopping play when you shouldn't have 🥏

you misheard a call and yelled "stop". now what?

it happens — you mishear, you call it late, or you didn't know the rule. the rulebook handles it without drama

first, what counts as stopping play incorrectly

"After a player initiates a stoppage incorrectly, including after mishearing a call, not knowing the rules, or not making the call immediately:"

mishearing, not knowing, calling late. all three are named

then the split, and it turns on one question: did the other team end up with the disc?

"if the opposition gains or retains possession, any subsequent play stands."

if they gained it or kept it, nothing is undone

"if the opposition does not gain or retain possession, the disc must be returned to the last non-disputed thrower, unless 16.3 applies."

if they didn't, you rewind to the last thrower nobody disputed

third, the cost

"The stall count resumes as if an accepted breach has been caused by the player who initiated the stoppage incorrectly."

the count picks up as though the breach were yours, so on offence that's restarting at maximum nine

field note: don't echo a call you're not sure you heard. half of incorrect stoppages start as a well-meant echo

lesson 59 of 75

rules from WFDF Rules of Ultimate 2025–2028 (15.9, 15.9.1, 15.9.2, 15.9.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (15.9, 15.9.1, 15.9.2, 15.9.3).
