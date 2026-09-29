# Reel 62 — "Discs, kit, and what you can't wear"

**Status:** Pending review
**Script drafted:** 2026-09-29 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-06 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (3.1, 3.2, 3.3, 3.4)
**Source lesson:** `content/lessons-3.json` → `equipment`

Chapter 3 of the rulebook, and the shortest chapter the account has taught: four
sentences covering what you throw and what you wear. The lesson's own hook calls
it "a short chapter, two things that actually matter", and the script keeps that
framing rather than inflating it.

**Four rules, three cards, because 3.1 and 3.2 are one thought.** 3.1 is the
test — both captains accept the disc. 3.2 is the thing people mistake for the
test — WFDF's approved list. Split across two cards, 3.2 reads as a second,
competing rule; on one card behind 3.1 it reads as what it is, a recommendation
that does not override the captains' agreement. Every number in the lesson's
`rules` array is carded, and no number is introduced that the array does not
carry.

**Nothing is banned by name, and the script does not name anything as banned.**
3.4 is a general test — could it reasonably harm someone, does it impede an
opponent. Rings, watches and stiff-brimmed caps come from the lesson's own
`body` and are described as the usual culprits, never as a rulebook list. Saying
"jewellery is banned" would be a paraphrase that invents a specificity the rule
deliberately avoids.

**The uniform rule is about telling teams apart, not about kit quality.** 3.3
says "distinguishes their team" and nothing else. The bibs line is the lesson's
own field observation, not an addition.

---

## Video — `reel62-discs-kit-and-what-you-cant-wear.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Discs, kit, and what you can't wear" · kicker BEGINNER · LESSON 62 / 75 |
| 2 | #1 THE DISC IS AGREED | "Both captains have to accept it." · footer cites 3.1 · 3.2 |
| 3 | Rules detail | Verbatim 3.1 and 3.2 |
| 4 | #2 WEAR YOUR TEAM'S KIT | "Your kit has to tell the teams apart." · footer cites 3.3 |
| 5 | Rules detail | Verbatim 3.3 |
| 6 | #3 NOTHING THAT CAN HURT | "Take off anything hard or sharp." · footer cites 3.4 |
| 7 | Rules detail | Verbatim 3.4 |
| 8 | FIELD TIP | "Rings and watches off before you play." |
| 9 | Closing | "Lesson 62 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes.

### What the three cards do

1. **3.1 + 3.2 — the test, then the thing mistaken for it.** "Acceptable to both
   captains" is the operative test; the approved list is a recommendation WFDF
   *may* maintain. Order matters on this card.
2. **3.3 — distinguishing, not uniformity.** One sentence, and the only thing it
   asks is that the two teams be tellable apart.
3. **3.4 — a general test, not a list.** Harm to the wearer, harm to others, or
   impeding an opponent. Named items are examples, never the rule.

**Layout — DRY-MEASURED, 2026-09-29.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`): `#1 THE DISC IS
  AGREED` **582.0px** of the 900px column (64.7%), `#2 WEAR YOUR TEAM'S KIT`
  **658.0px** (73.1%), `#3 NOTHING THAT CAN HURT` **699.0px** (77.7%). All three
  inside the 873px high-water mark set by reel-11's "SIMULTANEOUS MEANS
  OFFENCE". Cover `BEGINNER` **231.1px** at its own 32px. `FIELD TIP`
  **236.2px**.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090. Bodies are 165, 150 and 170 characters.
- **The cover title wraps to two lines at the standard 84px** — **564.9px** and
  **794.9px** of 900. The cover is the tallest scene at 1210 because the
  `LESSON 62 / 75` line sits at its fixed y; the collision check is clean.
- Scene 8's tip body wraps to four lines and ends at **962** of the 1310 floor,
  348px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: the two-block card (scene 3) is the taller of the three at ink
  bottom **640**, with scene 7 (3.4) at **504** and scene 5 (3.3) at **404**,
  all against the 1310 floor. **3.1 is 56 characters — the shortest rule the
  pipeline has carded**, taking the record from 8.4's 90 on reel-61; 3.2 is 63,
  3.3 is 62 and 3.4 is 146.
- Projected duration **30.0s** from `retime()`/`fit()` (35 states, 9 scenes,
  23.68s raw + transitions; house target ~30s, band 28–33s). Durations in
  `SCENES` are untouched placeholders — do not hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "There is no single official match disc. Any flying disc both captains accept may be used, and WFDF's list of approved discs is a recommendation rather than the test."
- Scene 4 — "Every player must wear a uniform that distinguishes their team. That is why the first five minutes of a pick-up game go on sorting out who is in bibs."
- Scene 6 — "You may not wear anything that could reasonably harm you or another player, or that impedes an opponent playing. Rings, watches and stiff-brimmed caps are the usual ones."
- Scene 8 (field tip) — "It takes five seconds and it is the most common preventable injury cause in the sport. Do it while you are putting your boots on, not after somebody has been caught by a ring."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-61/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list and `TOTAL` differ — verified by diffing the
two files with their `SCENES` blocks removed and `TOTAL` normalised. `TOTAL` is
9. Copy `blend.py` and `encode.py` in from reel-46 — they are generic and
unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-62` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "Two people are arguing about whether the disc somebody brought is allowed to be used, and the answer is shorter than the argument."
- Explanation: "Any flying disc acceptable to both captains may be used. WFDF keeps a list of approved discs, but that list is a recommendation and agreement between the captains is the operative test. On kit, every player has to wear a uniform that distinguishes their team, and nobody may wear anything that could reasonably harm themselves or another player, or impede an opponent's ability to play."
- Example: "You arrive wearing a wedding ring and a stiff-brimmed cap. Neither is banned by name anywhere in the rulebook. They fail the same general test, because they could reasonably hurt somebody, so they come off before the pull."
- CTA: "Lesson 62 of 75 — new lesson daily."

## Instagram caption

Somebody turns up with a disc that is not the one everybody expected, and the game stops for a discussion nobody needs to have. Chapter three of the rulebook is four short lines and it settles all of it.

First, the disc.

"Any flying disc acceptable to both captains may be used."

"WFDF may maintain a list of approved discs recommended for use."

So there is no single official match disc. The approved list is a recommendation; the operative test is whether both captains accept the one in front of them. Agree it before the pull, not after a contested catch.

Second, what you wear.

"Each player must wear a uniform that distinguishes their team."

That is the entire uniform rule. It is not about sponsors or matching socks. It is about being able to tell at a glance who you can throw to, which is why a pick-up game spends its first five minutes sorting out bibs.

Third, what you cannot wear.

"No player may wear items of clothing or equipment that reasonably could harm the wearer or other players, or impede an opponent's ability to play."

Note that nothing is banned by name. Rings, watches and stiff-brimmed caps are the usual culprits, and they fail the same general test rather than a list of their own.

Field note. Take rings and watches off while you are putting your boots on. It is the most common preventable injury cause in the sport and it costs five seconds.

Lesson 62 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (3.1, 3.2, 3.3, 3.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

discs, kit, and what you can't wear 🥏

somebody turns up with a disc that isn't the one everybody expected, and the game stops for a discussion nobody needs to have. chapter three is four short lines and it settles all of it

first, the disc

"Any flying disc acceptable to both captains may be used."

"WFDF may maintain a list of approved discs recommended for use."

so there's no single official match disc. the approved list is a recommendation — the test is whether both captains accept the one in front of them. agree it before the pull, not after a contested catch

second, what you wear

"Each player must wear a uniform that distinguishes their team."

that's the entire uniform rule. not about sponsors or matching socks, just being able to tell at a glance who you can throw to. it's why pick-up spends its first five minutes sorting bibs

third, what you can't wear

"No player may wear items of clothing or equipment that reasonably could harm the wearer or other players, or impede an opponent's ability to play."

nothing is banned by name. rings, watches and stiff-brimmed caps are the usual culprits and they fail the same general test, not a list of their own

field note: take rings and watches off while you're putting your boots on. it's the most common preventable injury cause in the sport and it costs five seconds

lesson 62 of 75

rules from WFDF Rules of Ultimate 2025–2028 (3.1, 3.2, 3.3, 3.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (3.1, 3.2, 3.3, 3.4).
