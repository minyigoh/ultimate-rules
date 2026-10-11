# Reel 74 — "What clearly breaks Spirit"

**Status:** Pending review
**Script drafted:** 2026-10-11 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-18 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (1.6, 1.6.5, 1.6.7, 1.7.2, 1.7.4, 1.4)
**Source lesson:** `content/lessons-3.json` → `spirit-violations`

The lesson's hook is a promise about length — "A short, specific list. Worth
reading once." — and the cover keeps it, because shortness is the argument.
Spirit is the part of this rulebook people assume is a mood. It is a list.

**Three cards over six rule numbers, which is new for this series.** Every
previous reel has carded one number per block. This lesson's `rules` array
holds six, and six blocks would be a fifteen-scene reel well outside the
28–33s band, so the numbers are grouped the way the rulebook groups them
rather than dropped: 1.6 with its two cited sub-clauses on card one, the two
cited clauses of 1.7 together on card two, 1.4 alone on card three. Nothing in
the array is left uncited and nothing outside it is quoted.

**This is a nine-scene reel**, the standard three-block shape, same as reels
69, 70, 72 and 73. `TOTAL` is 9 and the projection lands at exactly 30.0s.

**What this reel is careful not to claim.** The copy never says the list is
exhaustive in the sense of closed — 1.6.7 is carded precisely because the last
entry is open-ended, and the slide says "an open last entry" rather than naming
seven and listing five. It also never softens 1.4 into "don't try too hard":
the rule *encourages* highly competitive play, and the slide leads with that
before naming what competition may not cost. Scene 6's kicker is PLAY HARD
ANYWAY for the same reason.

---

## Video — `reel74-what-clearly-breaks-spirit.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "What clearly breaks Spirit" · kicker BEGINNER · LESSON 74 / 75 |
| 2 | #1 THE LIST IS SPECIFIC | "You don't have to guess at it." · footer cites 1.6, 1.6.5, 1.6.7 |
| 3 | Rules detail | Verbatim 1.6 stem, with 1.6.5 and 1.6.7 as sub-number blocks beneath it |
| 4 | #2 TEAMS ARE GUARDIANS | "Your team is part of the rule." · footer cites 1.7.2, 1.7.4 |
| 5 | Rules detail | Verbatim 1.7.2 and 1.7.4, two `g_detail` blocks on one card |
| 6 | #3 PLAY HARD ANYWAY | "None of this means play soft." · footer cites 1.4 |
| 7 | Rules detail | Verbatim 1.4, carded alone |
| 8 | FIELD TIP | "Retaliation is the trap." |
| 9 | Closing | "Lesson 74 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card. Verified after emission: the 38px cream runs in
each of the three card SVGs reassemble to the exact `rules.json` strings.

### What the three cards do

1. **1.6 + 1.6.5 + 1.6.7 — the stem and the two clauses the lesson cites.**
   The stem is "The following actions are clear violations of the Spirit of the Game and must be avoided:" and it does the work of the whole first third: the
   violations are *named*, and naming them makes them not a matter of taste.
   1.6.5 ("making calls in retaliation to an opponent’s call;") is carded because it is the one beginners fall into,
   and 1.6.7 ("other win-at-all-costs behaviour.") because it is the open end — without it the card
   would imply a closed list of six things the deck never shows. The sub-numbers
   render on their own line in orange bold 22px via `g_detail`'s tuple form, the
   same idiom reels 44, 51 and 57 use for 18.2.x.
2. **1.7.2 + 1.7.4 — two clauses, two blocks, one card.** Teams must discipline
   team-mates who display poor Spirit, and may call a Spirit Stoppage. Carded
   together because the duty and the tool are one idea, and apart as blocks
   because they are two numbers. Three durations on this scene rather than two,
   per `retime()`'s multi-block rule, so the first block is readable before the
   second lands.
3. **1.4 — the corrective, and it goes last on purpose.** "Highly competitive play is encouraged, but should never sacrifice the mutual respect between players, adherence to the agreed-upon rules of the game, player safety or the basic joy of play." The
   first two cards are a list of prohibitions and a duty to police them, which
   is exactly the reading that makes people play tentatively. 1.4 is the rule
   that says the opposite, so it closes the reel's argument rather than opening
   it.

**1.7.2 and 1.7.4 are carded as the fragments they are** — lower-case openings,
semicolon and full stop as `rules.json` has them. The parent stem 1.7 ("Teams
are guardians of the Spirit of the Game, and must:") is **not** in this lesson's
`rules` array, so it is not quoted; the slide's own prose does that framing
instead. Same call as reel-73 made on 1.3.7.

**Layout — DRY-MEASURED, 2026-10-11.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 THE LIST IS SPECIFIC` **604.7px** of the 900px column (67.2%),
  `#2 TEAMS ARE GUARDIANS` **651.8px** (72.4%),
  `#3 PLAY HARD ANYWAY` **566.8px** (63.0%). Cover `BEGINNER` **231.1px** at its
  own 32px; `FIELD TIP` **236.2px**. The widest here is 221px short of
  reel-11's 873px high-water mark, so there is real headroom for a desk edit.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090 — the same steady-state geometry as reels 67–73. Bodies are 165,
  162 and 172 characters.
- **Scene 2's body was shortened at draft time, before anything was queued.**
  The first draft ended "...retaliatory calls, and two more", ran 179 characters
  and wrapped to **five** lines: last baseline 1012, clearance 78px. Legal, and
  `fit_body()` would have held it at 36px — but it put that slide one line out of
  step with scenes 4 and 6, and "and two more" was a worse sentence than the
  thing it was standing in for. Rewritten to "They run from dangerous play and
  taunting to an open last entry: win-at-all-costs behaviour", which is 165
  characters, four lines, and makes no enumeration claim the card does not back.
  All three main scenes now sit on identical geometry.
- **The cover title sets on two lines at the standard 84px** — "What clearly
  breaks" **789.1px** of 900, "Spirit" **214.7px**. No shrink.
- Scene 8's tip body is 153 characters over four lines and ends at **884** of the
  1310 floor. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: scene 3 reaches ink bottom **740** (1.6 + 1.6.5 + 1.6.7, 174
  characters over six wrapped lines plus two sub-number lines), scene 5 **640**
  (1.7.2 + 1.7.4, 111 characters, four lines, two block headers) and scene 7
  **554** (1.4, 189 characters, five lines). All three well inside the floor.
- Citation number lines on the `g_main` footers: `1.6 · 1.6.5 · 1.6.7`
  **226.8px** of 900, `1.7.2 · 1.7.4` **153.1px**, `1.4` **36.1px**.
- `1.4` wraps on the existing hyphen in "agreed-upon", so card 7 breaks
  `agreed-` / `upon` across two lines. That is a line break on a hyphen the
  rulebook already contains, not an edit — the reassembled glyph run is
  byte-identical to `rules.json`.
- **Zero `_payload()` cases across all 35 emitted SVGs.** No element's text opens
  or closes on a straight double quote, so no `<tspan>` wrapper is emitted
  anywhere — checked by counting occurrences in the SVGs themselves.
- Projected duration **30.0s** from `retime()`/`fit()` (35 states, 9 scenes,
  23.68s raw + transitions; house target ~30s, band 28–33s). Dead on target.
  Durations in `SCENES` are untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** The figures are in the Notes below, in
  UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Seven actions are named as clear Spirit violations that must be avoided. They run from dangerous play and taunting to an open last entry: win-at-all-costs behaviour."
- Scene 4 — "Teams must discipline team-mates who display poor Spirit, and may call a Spirit Stoppage to address issues. Self-officiated means your own bench is the mechanism."
- Scene 6 — "Highly competitive play is encouraged. What it must never cost is mutual respect, the agreed rules, player safety or the basic joy of play. Hard and fair are not opposites."
- Scene 8 (field tip) — "If you think a call was unfair, the answer is a conversation, not a call of your own on the next point. Making calls in retaliation is on the list by name."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-73/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; **only the `SCENES` list differs** — `TOTAL` is 9 in both, since both
reels run three blocks. Verified by diffing the two files with their `SCENES`
blocks removed, which came back with **zero differing lines**. Copy `blend.py`
and `encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-74` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "A short, specific list. Worth reading once. The rules name the things that clearly break Spirit."
- Explanation: "Seven actions are named as clear Spirit violations that must be avoided. They run from dangerous play and aggressive behaviour, through intentional fouling, taunting and disrespectful celebration, to an open last entry: win-at-all-costs behaviour. The one beginners fall into is in the middle of that list - making calls in retaliation to an opponent's call. Teams are guardians of Spirit too: they must discipline team-mates who display poor Spirit, and may call a Spirit Stoppage to address issues. None of this asks you to play softly. Highly competitive play is encouraged - it just must never cost mutual respect, the agreed-upon rules, player safety or the basic joy of play."
- Example: "They call a foul on you and you think it is nonsense. Next point you call one back to even it up. That is not a grey area and it is not gamesmanship - retaliatory calls are on the list by name. The response the rules point you to is a conversation, which is slower and works."
- CTA: "Lesson 74 of 75 - new lesson daily."

## Instagram caption

A short, specific list. Worth reading once.

One. The list is specific.

"The following actions are clear violations of the Spirit of the Game and must be avoided:"

"making calls in retaliation to an opponent’s call;"

"other win-at-all-costs behaviour."

Seven actions are named as clear Spirit violations that must be avoided. They run from dangerous play and taunting to an open last entry: win-at-all-costs behaviour.

Two. Teams are guardians.

"discipline team-mates who display poor Spirit;"

"call a Spirit Stoppage to address Spirit issues, as appropriate."

Teams must discipline team-mates who display poor Spirit, and may call a Spirit Stoppage to address issues. Self-officiated means your own bench is the mechanism.

Three. Play hard anyway.

"Highly competitive play is encouraged, but should never sacrifice the mutual respect between players, adherence to the agreed-upon rules of the game, player safety or the basic joy of play."

Highly competitive play is encouraged. What it must never cost is mutual respect, the agreed rules, player safety or the basic joy of play. Hard and fair are not opposites.

Field note. Retaliation is the trap. If you think a call was unfair, the answer is a conversation, not a call of your own on the next point.

Lesson 74 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (1.6, 1.6.5, 1.6.7, 1.7.2, 1.7.4, 1.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

what clearly breaks spirit 🥏

a short, specific list. worth reading once

one. the list is specific

"The following actions are clear violations of the Spirit of the Game and must be avoided:"

"making calls in retaliation to an opponent’s call;"

"other win-at-all-costs behaviour."

seven actions are named as clear spirit violations that must be avoided. they run from dangerous play and taunting to an open last entry: win-at-all-costs behaviour

two. teams are guardians

"discipline team-mates who display poor Spirit;"

"call a Spirit Stoppage to address Spirit issues, as appropriate."

teams must discipline team-mates who display poor spirit, and may call a spirit stoppage to address issues. self-officiated means your own bench is the mechanism

three. play hard anyway

"Highly competitive play is encouraged, but should never sacrifice the mutual respect between players, adherence to the agreed-upon rules of the game, player safety or the basic joy of play."

highly competitive play is encouraged. what it must never cost is mutual respect, the agreed rules, player safety or the basic joy of play. hard and fair are not opposites

field note: retaliation is the trap. if you think a call was unfair, the answer is a conversation, not a call of your own on the next point

rule text from WFDF Rules of Ultimate 2025–2028 (1.6, 1.6.5, 1.6.7, 1.7.2, 1.7.4, 1.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(1.6, 1.6.5, 1.6.7, 1.7.2, 1.7.4, 1.4), pulled from `content/rules.json` rather than typed.

---

## Notes

- **Lesson 74 of 75**, `spirit-violations` in `content/lessons-3.json`, tag
  Spirit. Fills 2026-10-18, the only bare date in the seven-day window
  (2026-10-12 through 2026-10-18).
- **This is the second-to-last lesson in the curriculum.** Only lesson 75
  ("When the normal remedy isn't enough") remains. It fills 2026-10-19, which is
  tomorrow's window, and after that the pool is empty: from **2026-10-20** the
  seven-day coverage target cannot be met at all without a decision about what
  follows lesson 75. reel-73 raised this on 2026-10-10 and it is now one day
  from binding. It is a question for the desk — this run will not answer it by
  inventing curriculum.
- **Six rule numbers, three cards, no block dropped.** Every number in the
  lesson's `rules` array is carded, grouped as the rulebook groups them. Six
  separate blocks would have been fifteen scenes and roughly 45s, well outside
  the band; grouping was preferred to dropping because each of the six is doing
  distinct work and the lesson's own three body paragraphs map onto the three
  cards cleanly.
- **The stem 1.6 is quoted because the lesson cites it.** 1.6.1–1.6.4 and 1.6.6
  are *not* in the lesson's `rules` array, so they are not quoted anywhere — the
  slide prose and the explanation beat describe them in the lesson's own words
  (from its `body`), which is the brief, and the card shows only what is cited.
- **1.7.2 and 1.7.4 are carded as fragments**, byte-identical to `rules.json`
  including the lower-case openings. The parent 1.7 stem is not in the lesson's
  `rules` array, so it is not quoted; the slide's prose frames it instead. Same
  call reel-73 made on 1.3.7.
- **Nothing here claims the list is closed.** 1.6.7 is on the card precisely
  because it is not, and the slide says "an open last entry". The explanation
  beat names the seven in the lesson's own words; the slide, which has less
  room, does not pretend to enumerate them.
- **1.4 is sequenced last deliberately.** Two cards of prohibition and
  self-policing invite exactly the wrong conclusion, and 1.4 is the rule that
  refuses it. "Highly competitive play is encouraged" leads the slide, the
  kicker is PLAY HARD ANYWAY, and the body names what competition may not cost
  rather than what it may not be.
- **Retaliation is the field tip and the example beat, which is the lesson's own
  emphasis** — its `body` singles it out as the one beginners fall into, and its
  `quiz` asks exactly that question. The example walks the case and lands on
  the remedy the rules point to, a conversation.
- **DRY-MEASURED 2026-10-11** — `check_layout.py` 9 scenes, 0 problems, exit 0;
  Instagram caption plus hashtags **1,542 of 2,200** UTF-16 units (70.1%, under
  the 2,090 warn line), TikTok **1,500 of 4,000** (hashtags included in both
  figures, the way `check_caption.py` counts them). Projected duration 30.0s
  over 35 states. `render_v3.py` is committed here and is the exact file
  measured. SVG only; no PNGs, no frames, no cut.
- All three rules cards were checked after emission against `rules.json` and
  reassemble byte-identically. Zero `_payload()` quote-wrapper cases across all
  35 emitted SVGs.
- Video still to render — the build run owns that, and only after the script
  clears gate 1.
- Captions are plain text, no markdown.
- No growth/reach claims in either caption.
