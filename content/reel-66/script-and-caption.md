# Reel 66 — "When play carried on after a turnover nobody noticed"

**Status:** Pending review
**Script drafted:** 2026-10-03 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-10 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (13.12, 13.3, 15.8)
**Source lesson:** `content/lessons-3.json` → `unknowing-play`

The lesson's own hook is "The disc was down and both teams kept going. Untangle
it.", and the script keeps it. The remedy is a rewind, and the two rules either
side of it both say the same thing about timing: call it now.

**Three cards, three plain sentences.** 13.12 is the remedy and the only rule
that describes the mess. 13.3 is the obligation to call a turnover immediately,
plus the fallback when nobody can agree. 15.8 widens the same standard to every
call in the game, which is the point worth taking off the field.

**No stems on this reel.** All three numbers are depth 2 and all three are
complete sentences, so each is carded alone — the `g_detail` stem form used on
reel-14, reel-63, reel-64 and reel-65 is not engaged anywhere here. The lesson's
`rules` array is exactly 13.12, 13.3 and 15.8, and every card footer cites only
what its own card quotes.

**The block order is the lesson's `rules` order, not rule-number order.** 13.12
comes first because it is the answer to the hook; 13.3 follows as the reason to
call early; 15.8 closes by generalising. Putting 13.3 first would open the reel
on an obligation before the audience knows what it prevents.

---

## Video — `reel66-play-carried-on-unnoticed.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "When play carried on after a turnover nobody noticed" · kicker BEGINNER · LESSON 66 / 75 |
| 2 | #1 REWIND TO THE TURNOVER | "Everything after it is erased." · footer cites 13.12 |
| 3 | Rules detail | Verbatim 13.12, carded alone |
| 4 | #2 CALL IT IMMEDIATELY | "Say it the moment you think it." · footer cites 13.3 |
| 5 | Rules detail | Verbatim 13.3, carded alone |
| 6 | #3 TRUE OF EVERY CALL | "Late is the thing that breaks it." · footer cites 15.8 |
| 7 | Rules detail | Verbatim 15.8, carded alone |
| 8 | FIELD TIP | "Say it out loud, now." |
| 9 | Closing | "Lesson 66 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the three cards do

1. **13.12 — the remedy.** Play stops, the disc returns to the turnover
   location, players resume the positions they held when the turnover happened,
   and a check restarts it. Everything in between is gone.
2. **13.3 — the obligation, and the fallback.** The call must be made
   immediately; the opposition may contest and play stops; and if players
   cannot agree or it is unclear what occurred, the disc returns to the last
   non-disputed thrower.
3. **15.8 — the general standard.** One line, and it is not about turnovers at
   all: every call is made immediately after the breach is recognised.

**Layout — DRY-MEASURED, 2026-10-03.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 REWIND TO THE TURNOVER` **736.9px** of the 900px column (81.9%),
  `#2 CALL IT IMMEDIATELY` **610.3px** (67.8%),
  `#3 TRUE OF EVERY CALL` **600.8px** (66.8%). Cover `BEGINNER` **231.1px** at
  its own 32px; `FIELD TIP` **236.2px**. #1 is the widest kicker since reel-64's
  #2 at 814.3px and still inside reel-11's 873px high-water mark.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090. Bodies are 159, 172 and 171 characters.
- **The cover title wraps to three lines at the standard 84px** — **723.6px**,
  **742.2px** and **625.3px** of 900. At 51 characters it is the longest cover
  title since reel-36, and three-line covers are routine in this series
  (reels 11, 13, 15, 16, 24, 35, 36, 42, 43, 47, 57 and 60); reel-21 shipped
  four. The hook then sits at y=925–973, 237px clear of the fixed
  `LESSON 66 / 75` line at 1210, and the collision check is clean.
- Scene 8's tip body wraps to three lines and ends at **834** of the 1310 floor,
  476px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards, all carded alone: scene 5 (13.3) is the tallest at ink bottom
  **704** — 314 characters over 8 wrapped lines, the longest single rule the
  pipeline has carded, and still 606px clear of the 1310 floor. Scene 3 (13.12)
  is **604** at 222 characters over 6 lines; scene 7 (15.8) is **404** at 62
  characters over 2 lines. All three are below reel-65's scene 5 at 840, which
  remains the tallest rules card overall.
- Citation number lines: `13.12` **65.0px** of 900, `13.3` **50.6px**, `15.8`
  **50.6px** — three single-number footers, the narrowest set the reel series
  has carried.
- **No `_payload()` case on this reel.** No element's text opens or closes on a
  double quote, so the `<tspan>` quote wrapper is engaged nowhere — checked
  across all 34 emitted SVGs, 0 cases.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, 9 scenes,
  23.8s raw + 6.2s transitions; house target ~30s, band 28–33s). Durations in
  `SCENES` are untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0 — the
  measured figures are in the Notes below, in UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Play stops, the disc goes back to where the turnover actually happened, and both teams return to the positions they held at that moment. A check restarts play."
- Scene 4 — "The call has to come immediately. The other team may contest, and play stops either way. If nobody can agree what happened, the disc returns to the last undisputed thrower."
- Scene 6 — "One line in chapter 15 sets the standard for every call in the game. The longer play runs on, the more of it has to be unwound, and the harder it is to agree on any of it."
- Scene 8 (field tip) — "If you think it hit the ground, say so straight away. Waiting to see what happens next makes it much harder to resolve."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-65/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed, which came back byte-identical. `TOTAL` is 9
in both. Copy `blend.py` and `encode.py` in from reel-46 — they are generic and
unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-66` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "The disc hit the ground, nobody called it, and both teams played on for fifteen seconds. The rulebook has an answer for that, and the answer is a rewind."
- Explanation: "If play continued unknowingly after an accepted turnover, play stops, the disc goes back to the turnover location, and players resume the positions they held when the turnover actually happened. A check restarts it. Everything in between is erased — which is exactly why the rules ask you to call a turnover immediately."
- Example: "You chase down a throw, you think it skipped, and you wait to see what happens. Fifteen seconds later everyone agrees it was down. Now four people have to remember where they were standing, and one of them is wrong."
- CTA: "Lesson 66 of 75 — new lesson daily."

## Instagram caption

Both teams kept playing, and the disc had been down for fifteen seconds. Now what?

The rulebook has an answer, and the answer is a rewind.

"If, after an accepted turnover, play has continued unknowingly, play stops and the disc is returned to the turnover location, players resume their positions at the time the turnover occurred and play restarts with a check."

Everything in those fifteen seconds is erased. Not the metres gained, not the throw that followed, not the goal if there was one. The disc goes back, the players go back, and a check starts it again.

Which is why the rule earlier in the same chapter asks you to call a turnover the moment you see it.

"If a player determines a turnover has occurred they must make the appropriate call immediately. If the opposition disagrees they may call “contest” and play must stop. If, after discussion, players cannot agree or it is unclear what occurred in the play, the disc must be returned to the last non-disputed thrower."

Three things in one rule. Call it immediately. The other team may contest, and play stops. And if nobody can reconstruct what actually happened, the disc goes back to the last thrower nobody is arguing about.

That immediacy is not a turnover rule. Chapter 15 sets it as the standard for every call in the game.

"Calls must be made immediately after the breach is recognised."

Field note. If you think it hit the ground, say so straight away. Waiting to see what happens next makes it much harder to resolve, and the longer play runs on, the more of it has to be unwound.

Lesson 66 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (13.12, 13.3, 15.8). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

when nobody noticed the turnover 🥏

both teams kept playing and the disc had been down for fifteen seconds. now what?

the rulebook rewinds it

"If, after an accepted turnover, play has continued unknowingly, play stops and the disc is returned to the turnover location, players resume their positions at the time the turnover occurred and play restarts with a check."

everything in those fifteen seconds is erased. not the metres, not the throw after it, not the goal if there was one. disc back, players back, check, go

which is why the rule asks you to call a turnover the moment you see it

"If a player determines a turnover has occurred they must make the appropriate call immediately. If the opposition disagrees they may call “contest” and play must stop. If, after discussion, players cannot agree or it is unclear what occurred in the play, the disc must be returned to the last non-disputed thrower."

three things in one rule: call it immediately, the other team may contest and play stops, and if nobody can reconstruct it the disc goes back to the last thrower nobody is arguing about

and that immediacy isn't a turnover rule. chapter 15 makes it the standard for every call

"Calls must be made immediately after the breach is recognised."

field note: if you think it hit the ground, say so straight away. waiting to see what happens next makes it much harder to resolve

rule text from WFDF Rules of Ultimate 2025–2028 (13.12, 13.3, 15.8) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(13.12, 13.3, 15.8), pulled from `content/rules.json` rather than typed.

---

## Notes

- **Lesson 66 of 75**, `unknowing-play` in `content/lessons-3.json`, tag
  Turnovers. Fills 2026-10-10, the only bare date in the seven-day window
  (2026-10-04 through 2026-10-10).
- **Three cards, no stems.** 13.12, 13.3 and 15.8 are all depth 2 and all
  complete sentences, so each is carded alone and `g_detail`'s stem form is not
  engaged anywhere on this reel. All three quoted verbatim from `rules.json`;
  each card footer cites only its own number.
- **Block order follows the lesson's `rules` array, not rule-number order** —
  13.12 answers the hook, 13.3 gives the reason to call early, 15.8 generalises.
- **15.8 is the only citation on this reel from outside chapter 13**, and it is
  the one that carries off the field: "immediately" is the standard for every
  call, not a turnover special case.
- **DRY-MEASURED 2026-10-03** — `check_layout.py` 9 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0. `render_v3.py` is committed here and is the exact
  file measured. SVG only; no PNGs, no frames, no cut.
- Scene 5 carries 13.3 at 314 characters over 8 wrapped lines, ink bottom 704 —
  the longest single rule the pipeline has carded, and 606px clear of the 1310
  floor. Still below reel-65's scene 5 at 840, which stays the tallest rules
  card overall.
- Both captions are well inside the limit: IG 1,818 UTF-16 units with hashtags
  against the 2,200 cap — 83% of it, and under the 2,090 warn line; TikTok 1,582
  against 4,000. Plain text, no markdown.
- The lesson's quiz answer and the script's example beat are the same case (the
  disc returns to the turnover location and players reset, rather than play
  standing from where it stopped), deliberately — it is the one players guess
  wrong.
- No growth/reach claims in either caption.
