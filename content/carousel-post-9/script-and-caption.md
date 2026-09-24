# Carousel 9 — "Week eight: how a game is run" (weekly recap)

**Status:** Pending review
**Script drafted:** 2026-09-24 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-01 (see `content/calendar.md`) — posts alongside Reel 57
**Difficulty:** Mixed (beginner)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** lessons 50–56 (reels posted 2026-09-24 → 2026-09-30)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

**Recap block: lessons 50–56.** A clean contiguous seven, opening exactly where
carousel-post-8 stopped. carousel-post-10 opens at lesson 57.

**Lesson 28 ("Receiving fouls") is permanently skipped** per Min-Yi's decision
on 2026-09-12 ("Forget 28 permanently and go with 36-42 please"). It does not
appear on this deck and must not be reintroduced on any later one.

### Eligibility — all seven will have posted by the deck's own date

Judged against the authoritative calendar and this deck's post date of Thursday
2026-10-01, per the rule as clarified on 2026-09-12 (the test is "will have
posted by the carousel's own post date", not "has posted today").

| Lesson | Reel | Post date | Status at 09-24 |
|---|---|---|---|
| 50 | reel-50 | 2026-09-24 | Posted |
| 51 | reel-51 | 2026-09-25 | Ready to post |
| 52 | reel-52 | 2026-09-26 | Content pending review |
| 53 | reel-53 | 2026-09-27 | Content pending review |
| 54 | reel-54 | 2026-09-28 | Pending review |
| 55 | reel-55 | 2026-09-29 | Pending review |
| 56 | reel-56 | 2026-09-30 | Pending review |

Every reel in the block has a post row dated on or before 10-01, so the block is
ready on the rule as written. **But three of the seven have not cleared the
script gate** (54, 55, 56) **and two more are still at the content gate** (52,
53). If reels 54–56 slip, this deck recaps lessons the audience has not seen.
The cheapest protection is to approve reels 54, 55 and 56 in the same sitting as
this deck, so the week moves together. This is the same shape carousel-post-8
carried a week ago, and it resolved cleanly.

---

## Slides — nine, 1080×1350

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Week eight: how a game is run" · subhead "This week's seven lessons — everything the daily reels covered, 24–30 September." · SWIPE → |
| 2 | LESSON 50 | "Injury stoppages" · takeaway: "If the disc is in the air when injury is called, play continues until someone catches it or it lands. Don't stop mid-flight." · footer 19.1.1 · 19.1.2 · 19.1.3 · 19.1.4 · 19.1.5 · 19.1.6 |
| 3 | LESSON 51 | "Technical stoppages and blood" · takeaway: "This is the one call that isn't about advantage. Make it early and loudly." · footer 19.2.1 · 19.2.1.1 · 19.2.1.2 · 19.2.2 · 19.2.3 |
| 4 | LESSON 52 | "Substitutions" · takeaway: "Signal readiness only when your line is genuinely on the field. Raising a hand early is how teams end up playing a point with six." · footer 5.3 · 19.3 · 19.3.1 |
| 5 | LESSON 53 | "The shape of a game" · takeaway: "Most social and league games shorten this with time caps. Check the format before your first game — it changes late-game tactics completely." · footer 4.2 · 4.3 · 6.3 · 5.1 |
| 6 | LESSON 54 | "After every goal, you switch ends" · takeaway: "Before every pull, physically point at the end zone you're attacking. It takes a second and prevents an embarrassing mistake." · footer 4.5 · 4.5.1 · 4.5.2 · 4.5.3 |
| 7 | LESSON 55 | "Offside and false start on the pull" · takeaway: "If you call offside, shout it and then deliberately don't touch the disc. Catching it forfeits the call." · footer 7.3 · 7.4 · 7.5 · 7.5.1 · 7.5.2 |
| 8 | LESSON 56 | "The Spirit rules are actual rules" · takeaway: "Introducing yourself to your opponent before the point is explicitly listed as good Spirit. It changes every subsequent conversation." · footer 1.3 · 1.3.1 · 1.3.9 · 1.3.10 · 1.5.4 · 1.4 |
| 9 | Closing | "That's fifty-six of seventy-five. More next Thursday." · Follow @learn.ultimatefrisbee |

Takeaways are drawn verbatim from each lesson's `field` line in
`content/lessons-3.json`, and every footer is that lesson's `rules` array
unchanged — both read out of the JSON by `make_carousel.py`'s build, not typed.
No rule text appears on any slide.

**`TOTAL` is 9**, a full block of seven. The header's `n / TOTAL` counter, the
filenames and the closing slide number all key off the constant.

### Why the title is "how a game is run"

The block is the one week of the curriculum that is about administration rather
than about throwing and catching. Who can stop the game and when (50, 51), who
is allowed on the field (52), how long it lasts and how it is scored (53), which
way you are attacking (54), how a point legally starts (55) — and, on the last
slide, who is responsible for enforcing all of it, which in a self-officiated
sport is the players (56).

**The title was checked against the last slide, not just the theme of the first
five**, which is the carousel-post-6 v1 defect. Lesson 56 is Spirit duties, and
Spirit duties are the officiating layer — in a sport with no referees, "how a
game is run" is precisely what Chapter 1 describes. The title covers slide 8
honestly rather than in spite of it.

"Stoppages and structure" was the other candidate and was dropped: it is
accurate for slides 2–7 and excludes slide 8 outright, which is exactly the
mistake carousel-post-6 v1 shipped.

**Layout — DRY-MEASURED, 2026-09-24.** `make_carousel.py` is committed in this
folder and is the exact file the numbers below came from. **SVG only — no PNGs.**
The build run owns rasterisation.

- `tools/check_layout.py` on all nine slides: **9 slides checked, 0 problems**,
  exit 0. Tallest is the cover at **1210** of the 1310 floor; every lesson slide
  sits at **1192**.
- **The cover is the roomiest the recap series has had.** Unbroken, "Week eight:
  how a game is run" measures **1401.2 of the 900px column** at 96px. Broken as
  "Week eight: how" / "a game is run" it measures **755.6px and 618.9px** —
  144px and 281px of slack, against carousel-post-8's worst line at 880.3/900.
  **If the title is edited at the desk, re-measure the cover before building.**
- **`fit_body()` does not engage on any slide.** Every takeaway sits at the
  standard 36px. Last baselines run **834** (slides 2 and 4), **862** (slide 3),
  **884** (slide 5) and **912** (slides 6, 7 and 8), against the `CITE_Y - 60`
  limit of 1090 — between **178px and 256px** of clearance.
- Kickers are all `LESSON NN` at **262.1px** of 900. No auto-fit. Cover
  `THIS WEEK` 248.9px at its own 32px.
- Widest citation line is slide 2's `19.1.1 · 19.1.2 · 19.1.3 · 19.1.4 ·
  19.1.5 · 19.1.6` — six numbers, 61 characters, **621.2 of the 900px column**.
  Short of carousel-post-8 slide 7's 665.9px record. Slide 3 is next at 554.7px
  and slide 8 at 505.5px.
- Closing slide's two lines measure **606.4px** and **655.1px** at 90px.
- **No `_payload()` case on this deck.** No slide's takeaway, headline or
  wrapped line opens or closes on a double quote, so the `<tspan>` wrapper is
  not engaged anywhere. Confirm in the PNGs anyway when they exist.

**Rendering:** `python3 make_carousel.py <outdir>` writes the nine SVGs, then
SVG→PNG via `convert -background "#0F1712" in.svg -resize 2250x2812! out.png`.
Save as `NN_description.png`, the stems listed above.

**At render time, fill in `slides`, `typeDetail` and `duration` in
`social/dashboard/data.js`.** While this deck is unrendered it carries
`slides: null` and no `typeDetail`, because `build_desk.py`'s `check_slides()`
verifies every slide stem against a file on disk and fails the whole build if
one is missing. Naming the PNGs before they exist broke `sync.bat` at step 2 on
2026-09-07. `scenes` is carried from the start — nothing validates it and it is
the table the desk shows at the script gate, which is the slide plan Min-Yi is
being asked to read.

---

## Script (~30s, if cut as a video variant)

- Hook: "Seven lessons this week, and none of them are about throwing. They are about how a game is actually run."
- Explanation: "Who can stop it and when. Who is allowed on the field. How long it lasts and how it is scored. Which way you are attacking after a goal. How a point legally starts. And who enforces all of it, which in this sport is you."
- Example: "The two people get wrong most often. If injury is called while the disc is in the air, play continues until someone catches it or it lands — do not stop mid-flight. And if you call offside on a pull, deliberately do not touch the disc, because catching it forfeits the call."
- CTA: "Lessons 50 to 56 of 75 — new lesson daily."

## Instagram caption

Week eight, all in one place. Seven lessons about how a game is actually run — who stops it, who is on the field, how long it lasts, and who keeps it honest.

Injury stoppages. Who may call one, what happens to the disc, and how the restart works. The bit people get wrong: if the disc is in the air when injury is called, play continues until someone catches it or it lands. Don't stop mid-flight.

Technical stoppages and blood. For something that affects safety or the conduct of the game rather than the contest. This is the one call that isn't about advantage, so make it early and loudly.

Substitutions. When you may come on, and what counts as your line being ready. Signal readiness only when your line is genuinely on the field — raising a hand early is how teams end up playing a point with six.

The shape of a game. How long a game is and what ends it. Most social and league games shorten this with time caps, so check the format before your first game. It changes late-game tactics completely.

After every goal, you switch ends. Which direction you are attacking changes every point. Before every pull, physically point at the end zone you are attacking. It takes a second and prevents an embarrassing mistake.

Offside and false start on the pull. Where both teams have to be when the pull goes up. If you call offside, shout it and then deliberately don't touch the disc — catching it forfeits the call.

The Spirit rules are actual rules. Chapter 1 is written with the word must, and it lists duties. Introducing yourself to your opponent before the point is explicitly listed as good Spirit, and it changes every conversation with that matchup afterwards.

Each slide carries its rule numbers, so you can check any of it against the rulebook rather than taking our word for it.

That's fifty-six of seventy-five.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, seven slides 🥏

all of it about how a game is actually run — who stops it, who's on the field, how long it lasts, who keeps it honest

injury stoppages → if the disc is in the air when injury is called, play continues until someone catches it or it lands. don't stop mid-flight

technical stoppages and blood → the one call that isn't about advantage. make it early and loudly

substitutions → signal readiness only when your line is genuinely on the field. a hand up early is how teams play a point with six

the shape of a game → most social and league games use time caps. check the format before your first game, it changes late-game tactics completely

switching ends → you attack the other way every point. point at your end zone before every pull

offside on the pull → shout it, then deliberately don't touch the disc. catching it forfeits the call

the spirit rules are actual rules → chapter 1 is written with the word must. introducing yourself to your opponent is on the list

rule numbers on every slide so you can check it yourself

that's fifty-six of seventy-five

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule numbers cited from the WFDF Rules of Ultimate 2025–2028. No rule text
appears on any slide in this deck.

---

## Notes

- **Weekly recap, block 50–56.** A clean contiguous seven, opening where
  carousel-post-8 stopped. Consumes no lesson number. Rule numbers only, no rule
  text. carousel-post-10 opens at lesson 57.
- **Lesson 28 remains permanently skipped** per Min-Yi's decision on 2026-09-12.
  It is not on this deck and must not be reintroduced on any later one.
- **DRY-MEASURED 2026-09-24** — `check_layout.py` exit 0, 9 slides, 0 problems;
  `check_caption.py` exit 0. `make_carousel.py` is committed here and is the
  exact file measured. SVG only; no PNGs.
- **Takeaways and footers are read out of `content/lessons-3.json`**, not typed:
  the `recaps` list was generated from the lessons file, so every takeaway is
  the lesson's `field` line byte-for-byte and every footer is its `rules` array
  unchanged.
- **Title checked against the last slide.** Slide 8 is Spirit duties, which in a
  self-officiated sport is the officiating layer, so "how a game is run" covers
  all seven honestly. This is the carousel-post-6 v1 check.
- **Cover has the most slack of any recap cover so far** — 755.6 and 618.9 of
  900px. Re-measure if the title is edited at the desk.
- **Three of the seven reels have not cleared the script gate** (54, 55, 56) and
  reels 52 and 53 are still at the content gate. Approving them in the same
  sitting as this deck keeps the week moving together.
- **The closing count is exact on the day.** Lesson 56 posts 2026-09-30, the day
  before this deck, so "fifty-six of seventy-five" is true when it goes out.
- **`tracked()` in the carousel path still uses a plain space, not the U+00A0
  the reel path switched to on reel-38.** Unchanged from decks 1–8, deliberately,
  so this deck stays identical to them. It would collapse under headless Chrome,
  so **a recap built through `tools/WINDOWS_FALLBACK.md` would lose the gap in
  `LESSON NN` and `THIS WEEK`.** Still flagged for a deliberate decision rather
  than changed here.
- No growth/reach claims in either caption.
