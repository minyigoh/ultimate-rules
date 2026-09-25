# Reel 58 — "When several things go wrong at once"

**Status:** Pending review
**Script drafted:** 2026-09-25 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-02 (see `content/calendar.md`)
**Difficulty:** Intermediate
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.12, 17.9.1, 17.9.2)
**Source lesson:** `content/lessons-3.json` → `multiple-breaches`

First reel of the Calls run and the first genuinely procedural lesson since
reel-43. Where the Spirit run (reels 56–57) was about what players owe each
other, this one is about what happens when the owing has already broken down and
two calls are on the table at once. It is the tiebreaker reel: nothing here is a
new kind of foul, it is the arithmetic for resolving fouls the audience has
already met across reels 29–41.

**Marked Intermediate, only the third reel to be.** The precedent is reel-43
("Turnover in your own end zone: you choose"), which was also a branch rule
rather than a behaviour rule. A new player does not need this on day one and
will not be penalised for not knowing it; they need it the first time a play
genuinely tangles. Reel-8 is the only other one.

The lesson's three rules split cleanly one-to-one, so the deck is the plain
three-pair shape with no doubled card:

**Rule 17.9 is deliberately not carded.** 17.9.1 and 17.9.2 sit under a stem
("Offsetting Fouls:") that the lesson's `rules` array does not include, and every
rule number on this post comes from that array unchanged. The stem carries no
substance to lose — it is a two-word heading, not a rule with a duty in it — so
unlike reel-57's 1.7 there is nothing scene 6 needs to supply in the account's
own words. Same policy as reel-57, cheaper consequence.

---

## Video — `reel58-multiple-breaches.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–57.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "When several things go wrong at once" · kicker INTERMEDIATE · LESSON 58 / 75 |
| 2 | #1 LATEST FIRST, EARLIEST LAST | "Multiple breaches unwind backwards." · footer cites 15.12 |
| 3 | Rules detail | Verbatim 15.12 |
| 4 | #2 BOTH TEAMS FOULED | "Fouls both ways cancel out." · footer cites 17.9.1 |
| 5 | Rules detail | Verbatim 17.9.1 |
| 6 | #3 SAME POINT, SAME MOMENT | "Nobody initiated it, so nobody loses it." · footer cites 17.9.2 |
| 7 | Rules detail | Verbatim 17.9.2 |
| 8 | FIELD TIP | "Go back to the last undisputed thrower." |
| 9 | Closing | "Lesson 58 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rule its own card quotes. **All three rules in the array are carded.**

### What the three cards do

1. **15.12 — the sequence rule.** The general case, and the only one of the
   three that is not about fouls specifically: it governs *any* multiple breach.
   It goes first because the other two are instances of the tangle it describes.
2. **17.9.1 — accepted fouls both ways.** The symmetric case. The card exists to
   land one fact: the disc goes back, and it goes back to the *last non-disputed*
   thrower, which is a narrower phrase than "the thrower" and worth reading in
   the rulebook's own words.
3. **17.9.2 — simultaneous contact.** The one that actually happens, and the
   reason the lesson is worth a reel. Two players arriving at the same point is
   not a foul by whoever is bigger; it is offsetting.

**Layout — DRY-MEASURED, 2026-09-25.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; the three main scenes sit at **1192**.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`): `#1 LATEST FIRST,
  EARLIEST LAST` **837.0px** of the 900px column (93.0%), `#2 BOTH TEAMS FOULED`
  **591.4px** (65.7%), `#3 SAME POINT, SAME MOMENT` **763.4px** (84.8%). Kicker
  #1 is the widest this account has drafted, but it is still inside the 873px
  high-water mark set by reel-11's "SIMULTANEOUS MEANS OFFENCE" — 36px of
  headroom, and the auto-fit is a verified no-op. Cover `INTERMEDIATE` 337.8px
  at its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline, start their body at y=812 and wrap
  to four lines: last baseline **962**, clearance **128px** against the
  `CITE_Y - 60` limit of 1090.
  - Scene 2 was drafted longer and wrapped to **five** lines, last baseline
    **1012** — still passing, at 78px clearance, with `fit_body()` not engaging.
    It was tightened to four **while drafting**, before anything went to the
    desk, to keep the block uniform and to sit further from the limit than one
    edit's worth. That is not the forbidden move: the ban is on rewording an
    *approved* body to fit, and nothing here has been approved. Same call as
    reel-57 scenes 2 and 6.
- Cover title wraps to two lines at the standard 84px — **816.9px** and
  **695.4px** of 900. No auto-fit.
- Scene 8's tip body ends at **1012** of the 1310 floor, 298px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards are light: ink bottoms at **504** (scene 3), **554** (scene 5) and
  **554** (scene 7) against the 1310 floor. 15.12 is 162 characters, 17.9.1 is
  173 and 17.9.2 is 164.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "When more than one breach happens on the same play, you do not argue about which mattered most. You unwind them in reverse: latest breach first, earliest breach last."
- Scene 4 — "If the offence and the defence both have accepted fouls on the same play, neither one wins. They offset, and the disc goes back to the last thrower nobody disputed."
- Scene 6 — "Sometimes two opposing players move to the same spot at the same instant and neither of them started the contact. Non-minor contact from that is treated as offsetting fouls."
- Scene 8 (field tip) — "In a genuinely tangled play, returning the disc to the last undisputed thrower is almost always the fair answer. Reach for it before the discussion becomes a reconstruction of who touched whom."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-57/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed. `TOTAL` is 9. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-58` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "Two calls on the same play, one from each team. Somebody has to decide what actually happens, and the rulebook has a tiebreaker for exactly this."
- Explanation: "If several breaches happen on one play, you resolve them in reverse sequence: latest breach first, earliest last. If the offence and the defence both have accepted fouls on the same play, those offset and the disc returns to the last undisputed thrower. And if two opposing players cause non-minor contact by moving to the same point at the same moment, that is treated as offsetting fouls too."
- Example: "You and a defender go up for the same disc at the same instant. You both get there, there is contact, and neither of you got there first. That is not one player's foul — it is offsetting, and the disc goes back to the thrower."
- CTA: "Lesson 58 of 75 — new lesson daily."

## Instagram caption

Two calls on the same play, and both of them stand. Now what?

The rulebook has a tiebreaker for this, and it is worth knowing before the moment you need it.

First, sequence. If several breaches happen on one play, you do not rank them by how bad they were.

"If multiple breaches occur on the same play or before play stops, the outcomes should be resolved in reverse sequence (latest breach first, earliest breach last)."

Latest breach first, earliest breach last. You unwind the play backwards.

Second, the case where both teams fouled.

"If accepted fouls are called by offensive and defensive players on the same play, these are offsetting fouls, and the disc must be returned to the last non-disputed thrower."

Neither call wins. They offset, and the disc goes back to the last thrower nobody disputed.

Third, the one that actually comes up. You and a defender go up for the same disc at the same instant, you both arrive, and there is contact.

"If there is non-minor contact that is caused by two or more opposing players moving towards a single point simultaneously, this must be treated as offsetting fouls."

Nobody initiated it, so nobody loses possession over it.

Field note. In a genuinely tangled play, returning the disc to the last undisputed thrower is almost always the fair answer. Reach for it before the discussion becomes a reconstruction of who touched whom.

Lesson 58 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (15.12, 17.9.1, 17.9.2). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

when several things go wrong at once 🥏

two calls on the same play and both of them stand. now what?

first, sequence. if several breaches happen on one play you don't rank them by how bad they were

"If multiple breaches occur on the same play or before play stops, the outcomes should be resolved in reverse sequence (latest breach first, earliest breach last)."

latest breach first, earliest breach last. you unwind the play backwards

second, the case where both teams fouled

"If accepted fouls are called by offensive and defensive players on the same play, these are offsetting fouls, and the disc must be returned to the last non-disputed thrower."

neither call wins. they offset and the disc goes back to the last thrower nobody disputed

third, the one that actually comes up — you and a defender go up for the same disc at the same instant, you both arrive, and there's contact

"If there is non-minor contact that is caused by two or more opposing players moving towards a single point simultaneously, this must be treated as offsetting fouls."

nobody initiated it, so nobody loses possession over it

field note: in a tangled play, going back to the last undisputed thrower is almost always the fair answer

lesson 58 of 75

rules from WFDF Rules of Ultimate 2025–2028 (15.12, 17.9.1, 17.9.2) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (15.12, 17.9.1, 17.9.2).
