# Reel 48 — Calling a time-out

**Status:** Pending review
**Script drafted:** 2026-09-15 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-22 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (20.3, 20.2, 20.1, 20.3.6)
**Source lesson:** `content/lessons-3.json` → `timeouts`

First reel of the stoppages block, and the first time chapter 20 appears on the
account. Reels 43–47 covered turnovers and the pull; this one starts on the
things that stop a live point deliberately. Lessons 49–52 (a time-out you do
not have, injury stoppages, technical stoppages, substitutions) follow from
here, so this reel establishes the seventy-five-second frame they all refer back
to and deliberately does not pre-empt any of them.

---

## Video — `reel48-time-out.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36, 38, 39, 40, 41, 42, 43, 44,
45, 46 and 47.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Calling a time-out · kicker BEGINNER · LESSON 48 / 75 |
| 2 | #1 AFTER THE PULL | "Only the player holding the disc can stop it." · footer cites 20.3 |
| 3 | Rules detail | Verbatim 20.3, one block |
| 4 | #2 MAKE A T AND SAY IT | "The signal is the call." · footer cites 20.1 |
| 5 | Rules detail | Verbatim 20.1, one block |
| 6 | #3 THE COUNT DOES NOT RESET | "A time-out does not buy a fresh stall count." · footer cites 20.3.6 |
| 7 | Rules detail | Verbatim 20.3.6, one block |
| 8 | FIELD TIP | "The offence picks its positions first. Use that." |
| 9 | Closing | "Lesson 48 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card. All four rule numbers used anywhere in this post
come from the lesson's own `rules` array.

### What the three cards do

1. **20.3 — who may call one, and for how long.** After the pull, a thrower with
   possession and nobody else; seventy-five seconds from the moment the "T" is
   formed. This is the lesson's own quiz answer and the single most-misheld
   belief about time-outs, so it leads.
2. **20.1 — the signal.** The "T", with two hands or one hand and the disc, plus
   calling it to the opposition. Carded because a time-out that nobody hears is
   the practical failure mode, not a theoretical one.
3. **20.3.6 — the stall count on the restart.** Maximum nine, or "Stalling one"
   if the marker was switched. Card 3 exists because beginners assume a time-out
   wipes the count, and it is the difference between a breather and a reset.

**20.2 is quoted in both captions but is not carded.** It covers the
before-the-pull window, where either team may call one — worth stating, and the
lesson's `body` states it, but it is a different situation from the live-point
rule the reel is actually about. Putting it on a fourth pair would have pushed
the cut past the 33s band. Every card footer cites only the rule its own card
quotes.

**Do not card 20.3.2 or 20.3.3** (restart at the pivot location; the thrower
must remain the same). Both are true, both are stated as prose in the captions
and the script's example beat, and **neither is in this lesson's `rules`
array** — so neither gets a rule number or a citation footer here. Rule numbers
come from the lesson's array; that is the whole of the constraint.

**Do not reach for 20.4 or 19.x.** A time-out called by a team with none left,
and injury stoppages, are lessons 49 and 50. Keeping them out is what leaves
those reels something to be.

**Layout — DRY-MEASURED, 2026-09-15.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory. **SVG only — no PNGs, no frames, no
cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  `#1 AFTER THE PULL` 478.0px of the 900px column, `#2 MAKE A T AND SAY IT`
  602.8px, `#3 THE COUNT DOES NOT RESET` 791.7px. Cover `BEGINNER` 231.1px at
  its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** Last
  baselines: scene 2 at 962, scene 4 at 1040, scene 6 at 1040, against the
  `CITE_Y - 60` limit of 1090. Tightest clearance is 50px.
- Scene 8's tip body ends at 1090 of the 1310 floor, 220px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint and
  `fit_body()` does not apply to it.
- **This is the second draft of the four bodies, and the first one measured
  badly.** In v1 scene 2's body landed on 1090 — the limit exactly, one
  character from `SystemExit` — while scenes 4 and 6 had already been shrunk to
  34px and 32px, and the `#1 ONLY THE THROWER, AFTER THE PULL` kicker was down
  to 29px against its 27px floor. Three of the four elements were relying on
  auto-fit. The copy was shortened here, at the draft gate, which is the only
  place shortening is allowed; once this is approved the rule is shrink the
  type, never reword.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "A team-mate on the sideline cannot call one. Nor can a defender.
  After the pull it is the thrower in possession, and nobody else. It lasts
  seventy-five seconds."
- Scene 4 — "Form a T with both hands, or one hand and the disc if you are
  holding it, and call time-out so the other team hears you. Doing one without
  the other is how a call gets missed."
- Scene 6 — "The count picks up where it left off, capped at nine — not back at
  one. The exception is a swap: if a different player takes the mark, it
  restarts at one."
- Scene 8 (field tip) — "When the time-out ends the offence chooses positions
  and freezes, and only then does the defence choose. How many time-outs you get
  is not in the rulebook — your event's format sets it, so ask your captain."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-48` — read
`tools/WINDOWS_FALLBACK.md` first.

**Take the render script from `content/reel-46/render_v3.py` or newer**, never
from reel-36 or earlier; only reels 38 onwards carry the `tracked()` word-gap
fix.

---

## Script (~30s)

- Hook: "Who can call a time-out, and what happens to everybody's feet."
- Explanation: "After the pull, only the thrower holding the disc can call one, and it lasts seventy-five seconds. Before the pull, either team can. You form a T with your hands, or one hand and the disc, and you call it out loud."
- Example: "So you're trapped on the sideline at stalling seven. The T goes up, you call it, and everything stops for seventy-five seconds. Same thrower, same pivot, nobody subs on except for injury. Your offence picks positions and freezes, then the defence picks theirs — and the count comes back where it left off, capped at nine. It does not reset to one."
- CTA: "Lesson 48 of 75 — new lesson daily."

## Instagram caption

Who can call a time-out, and what happens to everybody's feet.

Once a point is live it is not a free-for-all. Exactly one player on the field can stop it:

"After the pull only a thrower with possession of the disc may call a time-out. The time-out starts when the “T” is formed, and lasts seventy-five (75) seconds. After such a time-out:"

Not your captain on the sideline. Not a defender. Not a team-mate cutting deep. The thrower, holding the disc.

Before the pull is a different story. That window is open to both teams:

"After the start of a point and before both teams have signalled readiness, a player from either team may call a time-out. The time-out extends the time between the start of the point and subsequent pull by seventy-five (75) seconds."

Now the signal, which is the part people half-do:

"The player calling a time-out must form a “T” with their hands, or with one hand and the disc, and should call “time-out” to opposition players."

Hands and voice. Doing one without the other is how a time-out gets missed and play carries on around you.

Then the restart, and it is tighter than people expect. Same thrower, same pivot spot, and nobody comes on except for injury. The offence picks its positions and freezes first, and only then does the defence choose.

And the count does not start again:

"The stall count restarts at maximum nine (9). However if the marker has been switched, the stall count restarts at “Stalling one (1)”."

It picks up where it left off, capped at nine. So a time-out at stalling eight buys you a breather, not a reset.

One last thing, and it is not in the rulebook at all: how many time-outs you get. Your event's format sets that. Ask your captain before the first game.

Lesson 48 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (20.3, 20.2, 20.1, 20.3.6). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

who can call a time-out, and what happens to everybody's feet 🥏

once a point is live it is not a free-for-all. exactly one player on the field can stop it:

"After the pull only a thrower with possession of the disc may call a time-out. The time-out starts when the “T” is formed, and lasts seventy-five (75) seconds. After such a time-out:"

not your captain on the sideline. not a defender. not a team-mate cutting deep. the thrower, holding the disc

before the pull is different though — that window is open to both teams:

"After the start of a point and before both teams have signalled readiness, a player from either team may call a time-out. The time-out extends the time between the start of the point and subsequent pull by seventy-five (75) seconds."

now the signal, which is the part people half-do:

"The player calling a time-out must form a “T” with their hands, or with one hand and the disc, and should call “time-out” to opposition players."

hands AND voice. doing one without the other is how a time-out gets missed and play carries on around you

the restart is tighter than people expect: same thrower, same pivot spot, no subs except for injury. offence picks positions and freezes first, then the defence chooses

and the count does not start again ↓

"The stall count restarts at maximum nine (9). However if the marker has been switched, the stall count restarts at “Stalling one (1)”."

it picks up where it left off, capped at nine. a time-out at stalling eight buys you a breather, not a reset 🚫

lesson 48 of 75

rules from WFDF Rules of Ultimate 2025–2028 (20.3, 20.2, 20.1, 20.3.6) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(20.3, 20.2, 20.1, 20.3.6).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs. `TOTAL = 9`.
- **DRY-MEASURED 2026-09-15** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are
  emitted, not estimated.
- **"Maximum nine" is not "back to nine", and the copy is careful about it.**
  20.3.6 caps the restart at nine; it does not raise a lower count up to nine.
  A time-out called at stalling four restarts at four. Every line here says
  "picks up where it left off, capped at nine" for that reason — do not
  simplify it to "restarts at nine" at review, which is the obvious edit and is
  wrong.
- **Preserve the rulebook's own punctuation.** 20.3 ends on a colon — `After
  such a time-out:` — because the sub-rules continue it, and 20.1 and 20.3.6
  carry curly doubles around `“T”`, `“time-out”` and `“Stalling one (1)”`, plus
  the rulebook's parenthesised numerals. All of it reads oddly and all of it is
  correct; it must survive to the PNG and to the caption unchanged.
- Quoting 20.3 verbatim means the caption carries a sentence ending in a colon
  with nothing after it inside the quotation marks. That is the rule as written
  and it stays; the prose after the quote does the continuing.
- **This is the first chapter-20 material on the account.** The citation footer
  renders the chapter title from `rules.json`, so scenes 3, 5 and 7 will read
  `RULE 20.3 · TIME-OUTS` and so on — no new layout, but a label nobody has
  seen before.
- **Lesson 39 ("What the stall count restarts at") is the general case; this is
  the time-out case.** They do not overlap on the card: 39 carded the check and
  restart rules, and 20.3.6 is specific to the time-out restart. No
  cross-reference on screen — the caption does not need it either.
- Instagram caption **1,994 characters** including hashtags (90.6% of the 2,200
  limit, comfortably under the 2,090 warn line); TikTok 1,642 of 4,000. Both
  plain text, both scanned clean of markdown, both measured in UTF-16 units by
  `tools/check_caption.py`, which exits 0.
- Four verbatim quotations totalling 692 characters, which is well short of
  reel-47's three at ~1,000 — chapter 20's rules are short. That is why a
  fourth quotation fits here and would not have fitted there.
- Curriculum position: lesson 48 is index 14 of `content/lessons-3.json`, the
  next unused lesson after 47. It covers 2026-09-22, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
