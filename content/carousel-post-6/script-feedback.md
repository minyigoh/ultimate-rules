# carousel-post-6 — script feedback rounds

Rounds on the **script** gate. Rendered-content rounds live in `feedback.md`.

---

## Round 1 — 2026-09-07 (desk, script track → changes requested)

> It shouldn't just cover 5 lessons. It should cover 7 lessons from Thursday
> all the way to Wednesday - Reel 29 to 35.

**Redrafted:** 2026-09-08 (daily-reel-render) · `scriptRev` 1 → 2

- **Block widened from 28–32 to 29–35**, exactly the range named. Reel 29
  posted Thursday 2026-09-03; reel 35 posts Wednesday 2026-09-09, the day
  before this deck. All seven have run by the time it goes out, so the
  has-it-posted-yet condition that produced the five-lesson v1 is satisfied for
  every slide.
- **Seven lesson slides, nine slides total.** `TOTAL` 7 → 9, and the header
  counter, filenames and closing slide number follow it.
- **Title changed** from "Week five: five kinds of foul" to "Week five: six
  fouls and the freeze". At 29–35 the deck is six chapter-17 foul types plus
  lesson 35, which is not a foul, so the old title excluded a slide it was
  covering. Measured: "Week five: six fouls" is 889 of the 900px column at the
  standard 96px, the same tightness carousel-post-5 shipped at.
- **Cover subhead** now "This week's seven lessons — everything the daily reels
  covered, 3–9 September." The v1 explanation of why the block was short is
  gone, because it isn't.
- **Closing count** twenty-eight → thirty-five, following the block.
- **Both captions rewritten** around the new seven. Two paragraphs added
  (thrower fouls, dangerous play), one added for the freeze as an explicit
  change of subject, and the "five this week rather than seven" paragraph
  removed. Instagram 1,669 → 1,796 characters including hashtags, 82% of the
  2,200 limit. `tools/check_caption.py` exits 0.
- **`make_carousel.py` added to this folder**, dry-measured at `TOTAL = 9`:
  `check_layout.py` reports 9 slides, 0 problems, no collisions, all takeaways
  at the standard 36px with `fit_body()` unengaged.

Nothing else moved: the visual system, the takeaways (still the lessons' `field`
lines verbatim), the rule-number footers, the hashtags and the attribution are
all as they were.

Previous copy archived as `script-and-caption.v1.md`.

### One thing the note does not settle: lesson 28

The note moved the far end of the block from 32 to 35, and moving the near end
from 28 to 29 came with it. **carousel-post-5 stopped at lesson 27 and this
deck now starts at 29, so lesson 28 ("Receiving fouls", posted 2026-09-02) has
no recap anywhere.** The block rule exists so every lesson is recapped exactly
once; this is the first lesson to fall out of it.

Not fixed unilaterally, because fixing it means either adding an eighth lesson
to a deck that was asked for seven, or putting an out-of-order entry on next
Thursday's deck. The three options are written up at the top of
`script-and-caption.md`; the recommendation is that **carousel-post-7 opens with
lesson 28 and then runs 36–41**, which keeps every deck at seven and loses
nothing.

### Read it, then Approve

The words on the desk are now the redraft — the desk renders both captions and
the slide list from `data.js`, which this run has already rewritten. Read it; if
it's right, click **Approve** to stamp it against the words you actually read.
If it's still wrong, **Request changes** with a note.

**Do not click Request changes just to park it for later reading.** Anything
sitting at `changes` gets rewritten by the next daily run, so parking it there
discards this redraft and writes a third version before you have read the
second.

**Not rendered this run**, by rule: a redraft clears the script gate before
anything is built. The content track stays at `awaiting-render`. **This one is
time-sensitive** — it is queued for 09-10, so it needs approving before
tomorrow's run in order to be built in time.
