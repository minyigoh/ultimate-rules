# Carousel 8 — "Week seven: the time between plays" (weekly recap)

**Status:** Pending review
**Script drafted:** 2026-09-17 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-24 (see `content/calendar.md`) — posts alongside Reel 50
**Difficulty:** Mixed (beginner)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** lessons 43–49 (reels posted 2026-09-17 → 2026-09-23)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

**Recap block: lessons 43–49.** A clean contiguous seven, opening exactly where
carousel-post-7 stopped. carousel-post-9 opens at lesson 50.

**Lesson 28 ("Receiving fouls") is permanently skipped** per Min-Yi's decision
on 2026-09-12 ("Forget 28 permanently and go with 36-42 please"). It does not
appear on this deck and must not be reintroduced on any later one. The block
rule in `content/DAILY_RENDER_TASK.md` now records this explicitly, so the
wording flagged on carousel-post-7 has been fixed upstream and needed no
handling here.

### Eligibility — all seven will have posted by the deck's own date

Judged against the authoritative calendar and this deck's post date of Thursday
2026-09-24, per the rule as clarified on 2026-09-12 (the test is "will have
posted by the carousel's own post date", not "has posted today").

| Lesson | Reel | Post date | Status at 09-17 |
|---|---|---|---|
| 43 | reel-43 | 2026-09-17 | Posted |
| 44 | reel-44 | 2026-09-18 | Ready to post |
| 45 | reel-45 | 2026-09-19 | Ready to post |
| 46 | reel-46 | 2026-09-20 | Script approved · content in review |
| 47 | reel-47 | 2026-09-21 | Pending review |
| 48 | reel-48 | 2026-09-22 | Pending review |
| 49 | reel-49 | 2026-09-23 | Pending review |

Every reel in the block has a post row dated on or before 09-24, so the block is
ready on the rule as written. **But three of the seven have not cleared the
script gate and a fourth has not cleared the content gate.** If reels 47–49 slip,
this deck recaps lessons the audience has not seen. The cheapest protection is
to approve reels 47, 48 and 49 in the same sitting as this deck, so the week
moves together.

---

## Slides — nine, 1080×1350

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Week seven: the time between plays" · subhead "This week's seven lessons — everything the daily reels covered, 17–23 September." · SWIPE → |
| 2 | LESSON 43 | "Turnover in your own end zone: you choose" · takeaway: "Taking it to the line gives your team more field to work with. Staying deep can catch an unset defence. Decide before you pick it up." · footer 13.11 · 13.11.1 · 13.11.2 · 13.11.2.1 · 13.11.3 |
| 3 | LESSON 44 | "You have to fetch the disc promptly" · takeaway: "Defence isn't allowed to obstruct you from getting to the disc or setting your pivot. If they're in the way, say so." · footer 8.5 · 8.5.1.1 · 8.5.1.2 · 8.5.2 · 8.5.2.1 · 8.5.3 |
| 4 | LESSON 45 | "Live play and dead play" · takeaway: "Dead play is your thinking time. Use the walk to the pivot to look downfield and pick your first throw." · footer 8.1 · 8.1.1 · 8.1.2 · 8.1.3 · 8.1.4 · 8.2 · 8.3 |
| 5 | LESSON 46 | "Don't touch a pull you can't catch" · takeaway: "The rule of thumb: if you're not certain you'll catch it cleanly, let it land. You lose nothing." · footer 7.8 · 13.1.4 · 7.10 |
| 6 | LESSON 47 | "Pulls that go out of bounds: the brick" · takeaway: "Signal the brick by raising one arm and calling \"brick\" as you walk to the mark. Say it before you pick the disc up." · footer 7.12 · 2.5 · 7.11 |
| 7 | LESSON 48 | "Calling a time-out" · takeaway: "How many time-outs you get isn't in the core rules — it's set by your event's format. Ask your captain before the first game." · footer 20.1 · 20.2 · 20.3 · 20.3.1 · 20.3.4 · 20.3.5 · 20.3.6 |
| 8 | LESSON 49 | "Calling a time-out you don't have" · takeaway: "Know your team's remaining time-outs. It's the captain's job to keep everyone updated during the game." · footer 20.4 |
| 9 | Closing | "That's forty-nine of seventy-five. More next Thursday." · Follow @learn.ultimatefrisbee |

Takeaways are drawn verbatim from each lesson's `field` line in
`content/lessons-3.json`, and every footer is that lesson's `rules` array
unchanged. No rule text appears on any slide.

**`TOTAL` is 9**, a full block of seven. The header's `n / TOTAL` counter, the
filenames and the closing slide number all key off the constant.

### Why the title is "the time between plays"

All seven lessons are about the same interval: the seconds when the disc is not
being thrown. Where you pick it up after a turnover in your own end zone (43),
how quickly you have to get to it (44), what "dead play" actually means and what
you are allowed to do with it (45), a pull you should not touch on its way down
(46), where a pull that lands out of bounds puts you (47), and the two ways you
can buy that interval deliberately — a time-out you have (48) and one you do not
(49).

**The title was checked against the last slide, not just the theme of the first
five**, which is the carousel-post-6 v1 defect. Slides 7 and 8 are time-outs, and
a time-out is exactly a purchased gap between plays, so the title covers them
honestly. "Restarts and stoppages" was the other candidate and was dropped as
too close to carousel-post-7's "stopping and starting".

**Layout — DRY-MEASURED, 2026-09-17.** `make_carousel.py` is committed in this
folder and is the exact file the numbers below came from. **SVG only — no PNGs.**
The build run owns rasterisation.

- `tools/check_layout.py` on all nine slides: **9 slides checked, 0 problems**,
  exit 0. Tallest is the cover at 1210 of the 1310 floor; every lesson slide
  sits at 1192.
- **The cover overran on the first pass and was fixed here.** "Week seven: the
  time" measured **974.6 of the 900px column** at 96px — 74.6px of x-overflow,
  the first cover overrun the account has had. The fix is the line break, not
  the type and not the title: broken as "Week seven: the" / "time between plays"
  it measures **750.6px and 880.3px**. Line two has 19.7px spare, tighter than
  carousel-post-6's "Week five: six fouls" at 889.2/900. **If the title is
  edited at the desk, re-measure the cover before building.**
- **`fit_body()` does not engage on any slide.** Every takeaway wraps to three
  lines at the standard 36px. Last baselines 912 on the five two-line-headline
  slides and 834 on slides 4 and 7, against the `CITE_Y - 60` limit of 1090 —
  178px and 256px of clearance.
- **Slide 7 carries the widest citation line ever attempted on a recap.**
  `20.1 · 20.2 · 20.3 · 20.3.1 · 20.3.4 · 20.3.5 · 20.3.6` is seven numbers,
  66 characters, **665.9 of the 900px column** — comfortably clear, and past
  carousel-post-7 slide 2's 47-character record. Slides 3 and 4 also carry
  six- and seven-number footers, at 577.8px and 564.8px.
- Kickers are all `LESSON NN` at 262.1px of 900. No auto-fit.
- **One `_payload()` case to verify in the PNGs, not the SVGs:** slide 6's
  takeaway contains `"brick"` mid-string, which is the safe position — the
  collision only bites at the start or end of a payload. No slide on this deck
  opens or closes on a double quote, so nothing here needs the `<tspan>`
  wrapper. Confirm anyway when the PNGs exist.

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

- Hook: "Seven lessons this week, and all of them happen in the same place — the seconds when nobody is throwing the disc."
- Explanation: "That gap has rules. Where you pick the disc up after a turnover, how long you may take to get there, whether play is live or dead while you walk, and what a pull you should have left alone costs you."
- Example: "The two most useful are the ones people guess at. A turnover in your own end zone is a choice — the goal line, or where the disc is — and you should decide before you pick it up. And a pull that lands out of bounds gives you the brick mark in the middle of the field, not the sideline. Say \"brick\" with your arm up before you touch the disc."
- CTA: "Lessons 43 to 49 of 75 — new lesson daily."

## Instagram caption

Week seven, all in one place. Seven lessons about the time between plays — the seconds when the disc is on the ground, in the air off a pull, or waiting on a call.

Turnover in your own end zone. You get a genuine choice: put the pivot on the goal line, or play from where the disc is. Taking it to the line gives your team more field to work with. Staying deep can catch an unset defence. Decide before you pick it up.

Fetching the disc. There are real time limits on getting to it and setting your pivot, and the defence is not allowed to obstruct you while you do. If they are in the way, say so.

Live play and dead play. Knowing which one you are in tells you when you can be caught out. Dead play is your thinking time — use the walk to the pivot to look downfield and pick your first throw.

Don't touch a pull you can't catch. Get a hand to it and fail to hold it, and it is a turnover. If you are not certain you will catch it cleanly, let it land. You lose nothing.

The brick. A pull that lands out of bounds gets you the brick mark, not the sideline. Signal it by raising one arm and calling "brick" as you walk there, before you pick the disc up.

Calling a time-out. Who can call one, how long it lasts, and where everybody's feet end up. How many you get is set by your event's format, not the core rules, so ask your captain before the first game.

Calling one you don't have. Play still stops, and the marker adds two seconds to the count they would have restarted on. Know how many your team has left.

Each slide carries its rule numbers, so you can check any of it against the rulebook rather than taking our word for it.

That's forty-nine of seventy-five.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, seven slides 🥏

all of it about the time between plays — the seconds when the disc is on the ground, in the air off a pull, or waiting on a call

own end zone turnover → you choose: the goal line, or where the disc is. more field, or an unset defence. decide before you pick it up

fetching the disc → real time limits, and the defence can't obstruct you getting there. if they're in the way, say so

live vs dead play → dead play is your thinking time. use the walk to the pivot to look downfield

don't touch a pull you can't catch → hand on it and you own it. not certain? let it land, you lose nothing

the brick → pull out of bounds gets you the brick mark, not the sideline. one arm up, call it, before you pick the disc up

calling a time-out → 75 seconds, same pivot, same thrower. how many you get is your event's format, not the rules

calling one you don't have → play still stops, and two seconds go onto the restart count 🚫

rule numbers on every slide so you can check it yourself

that's forty-nine of seventy-five

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule numbers cited from the WFDF Rules of Ultimate 2025–2028. No rule text
appears on any slide in this deck.

---

## Notes

- **Weekly recap, block 43–49.** A clean contiguous seven, opening where
  carousel-post-7 stopped. Consumes no lesson number. Rule numbers only, no rule
  text. carousel-post-9 opens at lesson 50.
- **Lesson 28 remains permanently skipped** per Min-Yi's decision on 2026-09-12.
  It is not on this deck and must not be reintroduced on any later one.
- **DRY-MEASURED 2026-09-17** — `check_layout.py` exit 0, 9 slides, 0 problems;
  `check_caption.py` exit 0. `make_carousel.py` is committed here and is the
  exact file measured. First recap the draft run has been able to measure since
  2026-09-08.
- **The cover overran by 74.6px on the first pass** and was fixed by rebreaking
  the line, not by changing the title or the type. Re-measure if the title is
  edited at the desk.
- **Title checked against the last slide.** Slides 7 and 8 are time-outs, which
  are purchased gaps between plays, so "the time between plays" covers all seven
  honestly. This is the carousel-post-6 v1 check.
- **Three of the seven reels have not cleared the script gate** (47, 48, 49) and
  reel-46 is still at the content gate. Approving them in the same sitting as
  this deck keeps the week moving together.
- **Slide 7's footer is seven rule numbers, the widest recap citation so far**
  at 665.9 of 900px. It is the lesson's `rules` array unchanged, which is how
  every recap footer has worked.
- **The closing count is exact on the day.** Lesson 49 posts 2026-09-23, the day
  before this deck, so "forty-nine of seventy-five" is true when it goes out.
- **`tracked()` in the carousel path still uses a plain space, not the U+00A0
  the reel path switched to on reel-38.** Verified on the shipped
  carousel-post-7 PNGs rather than assumed: the word gap in `LESSON 36` measures
  29.3px against 10.6px letter gaps, so ImageMagick's reader is not collapsing
  the run and every deck to date is correct as rendered. It would collapse under
  headless Chrome, so **a recap built through `tools/WINDOWS_FALLBACK.md` would
  lose the gap in `LESSON NN` and `THIS WEEK`.** Left as-is to stay identical to
  decks 1–7; flagged for a deliberate decision rather than changed here.
- Instagram caption 1,900 characters including hashtags (86.4% of the 2,200
  limit, under the 2,090 warn line); TikTok 1,252 of 4,000. Both plain text,
  both scanned clean of markdown, both measured in UTF-16 units by
  `tools/check_caption.py`, which exits 0.
- No growth/reach claims in either caption.
