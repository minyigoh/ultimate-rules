# Carousel 7 — "Week six: stopping and starting" (weekly recap)

**Status:** Pending review
**Script drafted:** 2026-09-12 (daily-reel-render, draft run) · **Redrafted:** 2026-09-12, same run, before queueing
**Rendered:** —
**Queued:** 2026-09-17 (see `content/calendar.md`) — posts alongside Reel 43
**Difficulty:** Mixed (beginner)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** lessons 36–42 (reels posted 2026-09-10 → 2026-09-16)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

**Recap block: lessons 36–42.** A clean contiguous seven.

### Lesson 28 is permanently un-recapped, by decision

The first draft of this deck opened with lesson 28 ("Receiving fouls") and then
ran 36–41, closing the orphan that carousel-post-6's widening created.
**Min-Yi rejected that on 2026-09-12:**

> 28 + 36–41 is just weird. Forget 28 permanently and go with 36-42 please

So this deck runs a clean 36–42 and **lesson 28 will never appear on a recap.**
That is a deliberate, permanent exception, not an oversight to be fixed later —
do not reintroduce it on carousel-post-8 or anywhere else.

**The "every lesson recapped exactly once" promise is therefore no longer
strictly true**, and nothing in the account has ever stated it publicly, so
nothing needs correcting on any posted slide. But the block rule in
`content/DAILY_RENDER_TASK.md` still says "the next seven lessons in curriculum
order that no earlier recap has covered", which would pull 28 back in on the
next run. **That wording needs updating** — either to name 28 as a permanent
skip or to say the block is the seven lessons ending at the most recently
posted one. Flagged for the task file, not fixed here.

carousel-post-8 opens at lesson 43.

### Eligibility — four of the seven have not posted yet

Judged against the authoritative calendar and the deck's own post date of
Thursday 2026-09-17, per the rule as clarified on 2026-09-12:

| Lesson | Reel | Post date | Status at 09-12 |
|---|---|---|---|
| 36 | reel-36 | 2026-09-10 | Posted |
| 37 | reel-37 | 2026-09-11 | Posted |
| 38 | reel-38 | 2026-09-12 | Posted |
| 39 | reel-39 | 2026-09-13 | Ready to post |
| 40 | reel-40 | 2026-09-14 | Content pending review |
| 41 | reel-41 | 2026-09-15 | Content pending review |
| 42 | reel-42 | 2026-09-16 | **Pending review — drafted this run** |

Every reel in the block has a post row dated on or before 09-17, so the block is
ready on the rule as written. **But four of the seven are unapproved, and lesson
42 has not even cleared the script gate** — it was drafted in the same run as
this deck. If 42 slips, this carousel recaps a lesson nobody has seen, on the
day before its own reel would have gone out.

That is the cost of the seven-day window: recaps are now written a week ahead of
the reels they index. **The cheapest protection is to approve reel-42's script
in the same sitting as this deck**, so the two move together.

---

## Slides — nine, 1080×1350

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Week six: stopping and starting" · subhead "This week's seven lessons — everything the daily reels covered, 10–16 September." · SWIPE → |
| 2 | LESSON 36 | "Continuation: when the disc is already in the air" · takeaway: "Make your call, then finish the play as if you hadn't. Stopping to argue mid-flight is how teams lose discs." · footer 16.2 · 16.2.3 · 16.2.4.1 · 16.2.4.2 · 16.2.4.2.1 |
| 3 | LESSON 37 | "\"It didn't affect the play\"" · takeaway: "\"Did that affect it?\" — \"No, play on.\" That exchange should be the most common conversation you have on the field." · footer 16.3 · 16.3.1 · 16.3.2 |
| 4 | LESSON 38 | "The check: restarting play" · takeaway: "Actually look around before you check it in. Checking in while your own team is still jogging back costs you the disc." · footer 10.6.1 · 10.6.1.1 · 10.6.1.2 · 10.6.2 · 10.4 |
| 5 | LESSON 39 | "What the stall count restarts at" · takeaway: "\"Maximum n\" means: the last number said, plus one — or n, whichever is lower. It never jumps you forward." · footer 9.5.1 · 9.5.2 · 9.5.3 · 9.5.5 · 9.6.1 |
| 6 | LESSON 40 | "Picks" · takeaway: "The stall count after a pick restarts at maximum six, so the offence is barely affected. Call it when it genuinely cost you." · footer 18.3.1 · 18.3.1.1 · 18.3.2 · 18.3.3 |
| 7 | LESSON 41 | "Indirect fouls" · takeaway: "Most off-disc contact resolves itself. Call it when it stopped you getting somewhere you were going." · footer 17.8.1 · 17.8.1.1 · 17.8.2 |
| 8 | LESSON 42 | "Where you pick the disc up after a turnover" · takeaway: "If two of you disagree about the spot, the rule is to use the midpoint between your two proposals. No argument needed." · footer 13.7 · 13.9 · 13.10 · 13.8 · 8.5.4 |
| 9 | Closing | "That's forty-two of seventy-five. More next Thursday." · Follow @learn.ultimatefrisbee |

Takeaways are drawn verbatim from each lesson's `field` line in
`content/lessons-3.json`, and every footer is that lesson's `rules` array
unchanged. No rule text appears on any slide.

**Note on slide 8's footer:** it carries 13.7, because the footer is the
lesson's array unchanged. Reel 42 itself deliberately does not card 13.7 — it is
a heading stem — but a recap footer cites the lesson, not the reel, which is how
every earlier recap has worked.

**`TOTAL` is 9**, a full block of seven. The header's `n / TOTAL` counter, the
filenames and the closing slide number all key off the constant.

### Why the title is not "after the call"

The first draft was titled "Week six: after the call", which was accurate for a
block of 28 + 36–41 — all seven were calls and their consequences. At 36–42 the
last slide is lesson 42, which is about where the pivot goes after a turnover,
not after a call. **A title that excludes a slide it covers is exactly the
defect carousel-post-6 v1 had** ("five kinds of foul" over a block containing
one thing that was not a foul), and it was fixed there rather than shipped.

"Stopping and starting" covers all seven honestly: a call stops play, a check
starts it, the stall count restarts at a number, a pick stops and restores, and
a turnover is the other way play stops and restarts from a new spot.

**Layout — NOT DRY-MEASURED. The sandbox failed to mount for the sixth
consecutive day on 2026-09-12**, so `make_carousel.py` could not be run and
`tools/check_layout.py` could not be pointed at any emitted SVG. Everything
below is comparison against carousel-post-6's measured numbers, not measurement.
**The build run must dry-measure before shipping.**

- **Cover line one is the tight one, as always.** carousel-post-6 shipped with
  "Week five: six fouls" at 889 of the 900px column at 96px — 11px spare. This
  deck's line one, "Week six: stopping", is two characters shorter and should
  land near 800px. Line two, "and starting", is shorter still. **Check it
  first**; if it overruns, the fix is the title, not the type, and it must come
  back to the script gate.
- **Slide 2 carries the widest citation line ever attempted on a recap.**
  `16.2 · 16.2.3 · 16.2.4.1 · 16.2.4.2 · 16.2.4.2.1` is 47 characters against
  the previous record, carousel-post-6 slide 4's 45 characters at 549 of 900px.
  It extrapolates to roughly 575px and should be fine, but it is the first
  number to check. Slides 4, 5 and 8 also carry five-number footers, at 44, 37
  and 34 characters.
- **Takeaway lengths are all inside precedent.** The longest here is lesson
  40's at 123 characters; carousel-post-6 shipped lesson 35's at 145 characters
  at the standard 36px with `fit_body()` unengaged. No takeaway on this deck
  should engage it.
- **Two `_payload()` cases to verify in the PNGs, not the SVGs.** Slide 3's
  title is itself a quotation (`"It didn't affect the play"`) and its takeaway
  opens with `"Did that affect it?"`; slide 5's takeaway opens with
  `"Maximum n"`. All three are the startswith collision the `<tspan>` wrapper
  handles — confirm the opening quote marks survive to the raster.

**No `make_carousel.py` in this folder yet, deliberately.** carousel-post-6
shipped its own adapted copy because that run could dry-measure it. This run
cannot run Python at all, and committing an unverified render script is worse
than committing none. **Build run: copy
`content/carousel-post-6/make_carousel.py`, change only `TOTAL`, the slide
content and the cover/closing strings, and measure it before rendering.**

**At render time, flip three fields in `social/dashboard/data.js`.** While this
deck is unrendered it carries `slides: null`, `scenes: null` and no
`typeDetail`, because `build_desk.py`'s `check_slides()` verifies every slide
stem against a file on disk and fails the whole build if one is missing. Naming
the PNGs before they exist broke `sync.bat` at step 2 on 2026-09-07. Set all
three once the PNGs are actually there.

**Rendering:** SVG→PNG via
`convert -background "#0F1712" in.svg -resize 2250x2812! out.png`. Save as
`NN_description.png`.

---

## Script (~30s, if cut as a video variant)

- Hook: "Seven lessons this week, and every one of them was about the same thing — what happens in the seconds when play is not running."
- Explanation: "A call is not the end of the play. If the disc is already in the air, you finish it. If everyone agrees the call changed nothing, the play stands. And when play does stop, there is a procedure: check it in, and restart the stall count at a number that depends on who was at fault."
- Example: "The one most people get wrong is the stall count. It is not always back to one. Defence at fault, it is one. Offence at fault, maximum nine. Most other calls, including picks, maximum six. And the week ends where play starts again — after a turnover, the pivot goes where the disc stopped, or where it crossed the line if it went out."
- CTA: "Lessons 36 to 42 of 75 — new lesson daily."

## Instagram caption

Week six, all in one place. Seven lessons about the same thing — the seconds when play is not running, and how it starts again.

Continuation. If the disc is already in the air when the call comes, you finish the play. Make the call, then play as if you hadn't. If your own team ends up with the disc, it simply stands.

"It didn't affect the play." If everyone involved agrees the call changed nothing, the play stands. This one outranks every other rule, and that exchange should be the most common conversation you have on the field.

The check. Three seconds of procedure that prevent most restart disputes. Look around before you check it in — checking in while your own team is still jogging back costs you the disc.

What the stall count restarts at. Not always one. Defence at fault, one. Offence at fault, maximum nine. Most other calls, including picks, maximum six. "Maximum n" means the last number said plus one, or n, whichever is lower.

Picks. Defence's protection against traffic. You are restored to where you would have been, not rewarded — and the count comes back at maximum six, so the offence is barely affected.

Indirect fouls. Contact away from the disc still counts. Most of it resolves itself; call it when it stopped you getting somewhere you were going.

And where it all starts again: after a turnover, the pivot goes where the disc stopped, or the nearest point on the goal line in your attacking end zone, or where it crossed the line if it went out. Disagree about the spot? Take the midpoint. No argument needed.

Each slide carries its rule numbers, so you can check any of it against the rulebook rather than taking our word for it.

That's forty-two of seventy-five.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, seven slides 🥏

all of it about the seconds when play ISN'T running, and how it starts again

continuation → disc already in the air? finish the play. make the call, then play as if you hadn't

"didn't affect the play" → everyone agrees it changed nothing, the play stands. outranks every other rule

the check → look around before you check it in. checking in while your team jogs back costs you the disc

stall count restarts → not always one. defence at fault = one. offence at fault = max nine. most other calls = max six

picks → restored, not rewarded. count comes back at max six

indirect fouls → contact away from the disc still counts

where you pick it up → where it stopped, the goal line in their end zone, or where it CROSSED if it went out. can't agree? take the midpoint

rule numbers on every slide so you can check it yourself

that's forty-two of seventy-five

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule numbers cited from the WFDF Rules of Ultimate 2025–2028. No rule text
appears on any slide in this deck.

---

## Notes

- **Weekly recap, block 36–42.** A clean contiguous seven. Consumes no lesson
  number. Rule numbers only, no rule text.
- **LESSON 28 IS PERMANENTLY SKIPPED, by Min-Yi's decision on 2026-09-12**
  ("Forget 28 permanently and go with 36-42"). Do not reintroduce it on
  carousel-post-8 or any later deck. carousel-post-8 opens at lesson 43.
- **The block rule in `content/DAILY_RENDER_TASK.md` still says "the next seven
  lessons in curriculum order that no earlier recap has covered", which would
  pull 28 back in.** That wording needs updating. Flagged, not fixed.
- **Title changed from "Week six: after the call".** At 36–42 the last slide is
  a turnover lesson, not a call, and a title that excludes a slide it covers is
  the carousel-post-6 v1 defect. "Stopping and starting" covers all seven.
- **FOUR OF THE SEVEN REELS ARE UNAPPROVED** — 39 is Ready to post, 40 and 41
  are at the content gate, and 42 has not cleared the script gate at all; it was
  drafted in the same run as this deck. Approving reel-42's script in the same
  sitting as this one keeps them moving together.
- **NOT DRY-MEASURED** — sixth consecutive sandbox mount failure on 2026-09-12.
  Caption lengths were measured in the browser in UTF-16 units; every layout
  figure here is extrapolation from carousel-post-6's measurements.
- **No `make_carousel.py` in this folder.** Committing a render script this run
  cannot syntax-check is worse than committing none. Build run: adapt
  `content/carousel-post-6/make_carousel.py` and measure it.
- **Watch slide 2's footer** — five long rule numbers, 47 characters, the widest
  citation line ever attempted on a recap. Previous record 45 characters at
  549 of 900px.
- **Slide 8's footer carries 13.7** because recap footers are the lesson's
  `rules` array unchanged. Reel 42 deliberately does not card 13.7; a recap
  footer cites the lesson, not the reel.
- **Two `_payload()` startswith cases** on slides 3 and 5 (and slide 3's title
  is itself a quotation). Verify the opening quote marks survive into the PNGs.
- **The closing count is exact this time.** Lesson 42 posts 2026-09-16, the day
  before this deck, so "forty-two of seventy-five" is true on the day. Earlier
  recaps carried a one-lesson lag.
- Instagram caption 1,926 characters including hashtags (87.5% of the 2,200
  limit — the longest in this batch, still below the 95% warning line); TikTok
  1,001 of 4,000. Both plain text and scanned clean of markdown. Measured in
  UTF-16 units in the browser on 2026-09-12.
- No growth/reach claims in either caption.
