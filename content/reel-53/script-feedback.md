# reel-53 — script feedback rounds

Rounds on the **script** gate. Rendered-content rounds live in `feedback.md`.

---

## Round 1 — 2026-09-21 (Content Desk)

**Status set:** `changes`

> Most tournaments will specify the time limit even though it is not mentioned
> in the game. It is either the 8/15 goals or time whichever comes first right?

**Redrafted:** 2026-09-21 (daily-reel-render, draft run) · **scriptRev 1 → 2**

Two halves to this, and they resolve differently.

**The half that is a copy fix, and is now made.** v1 buried the point in a
subordinate clause — "Most social and league games shorten this with a time cap
or a lower target" — which reads as a footnote to the rulebook rather than as
the thing most players will actually meet. The redraft promotes it and, more
importantly, says *whose* rule it is: the cap belongs to the event, not to WFDF.

**The half that cannot go on a card, and why.** There is no time-cap rule in
`content/rules.json` — chapter 4 runs 4.1 to 4.5.3 and contains only the goal
target, the halves and what happens after a goal. Searched for "time cap",
"duration", "variation" and "agreed"; nothing in the file covers a clock. So
the specific mechanic — "goals or time, whichever comes first" — is not
something this reel can assert or cite. It is also not universally true:
"whichever comes first" describes a hard cap, while many events use a soft cap
that resets the target relative to the score when the horn goes, and the choice
between them is the organiser's. Carding it would mean either inventing a rule
or stating one event's format as the game's.

So the reel names the cap as the event's and points at the format sheet, which
is both accurate and the thing that actually helps someone at their first
tournament.

What changed:

- **Scene 8 field-tip body** (in `script-and-caption.md` and in
  `render_v3.py`'s `SCENES`). Was: "Most social and league games shorten this
  with a time cap or a lower target, so fifteen and eight are the default
  rather than a promise. Knowing the real target changes how you play a
  two-goal deficit late on." Now: "The rulebook has no clock: fifteen and eight
  are its numbers. Almost every tournament and league adds a time cap on top,
  and that cap belongs to the event rather than to WFDF. Read the format sheet
  before your first point, because it is what tells you how the cap and the
  goal target interact."
- **Instagram caption, field note.** Rewritten to lead with "The clock comes
  from the event, not from the rulebook", to say that how the cap and the
  target interact is the organiser's choice rather than WFDF's, and to send the
  reader to the format sheet.
- **TikTok caption**, the same note, same fix.

Unchanged and deliberately so: all four carded rules (4.2, 4.3, 6.3, 5.1) and
their verbatim text, the nine-scene structure, the hook ("There is no clock in
the rulebook"), scenes 2, 4 and 6, and the scene 8 headline. No rule number was
added or dropped, and no number outside 15, 8, 7 and 5 is asserted anywhere.

**Re-measured 2026-09-21** after the tip body changed: `check_layout.py` exit 0,
9 scenes, 0 problems. The only number that moved is scene 8, which grew by two
lines — tip body ink bottom **1012 → 1112** against the 1310 floor, 198px clear.
`g_tip()` carries no citation line, so `BODY_LIMIT` is not its constraint and
`fit_body()` does not engage. Everything else is unchanged: cover 1210, mains
1192, rules cards 690 / 404 / 454, 35 states, projected 30.0s.

Previous copy archived as `script-and-caption.v1.md`.
