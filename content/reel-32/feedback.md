## Round 1 — 2026-09-05 — REJECTED (cut v1)
On-screen text. Can you double check the rules? Contact doesn’t fall under infraction right? Infractions are straddle, wrapping. 

---

## Response — 2026-09-05, covering round 1

Routed to the **script** track, not regenerated on the spot. The note asks for
different *words* on scenes 4 and 5, and copy changes go back through the first
gate before anything is rendered. Redraft logged in `script-feedback.md`; v2
archived as `script-and-caption.v2.md`.

The note is right, and v1 had it backwards. The marking infractions are a
closed, numbered list — 18.1.1.1 to 18.1.1.6: fast count, straddle, disc space,
wrapping, double team, vision. "Contact" is not on it. 15.1 and 15.2 sort
breaches by *kind* — a foul is defined by contact, an infraction by being a
marking or travel breach — not by which word you shout. v1's scene 4 said
"'Contact' is not a different event" and carded 15.1 and 15.2 beside it, which
reads as filing Contact in the infraction family. That is the opposite of what
the list says.

The phrase "a contact infraction" *is* in the rulebook, in 17.6.1.3, and it is
quoted on scene 7. v3 places it rather than denying it: it names a call defined
inside chapter 17, Fouls, with a remedy of its own. A choice of remedy, not a
change of category.

This round stays **open** until the rebuild, which waits on v3 clearing the
script gate.

**Regenerated: 2026-09-06 (interactive session, same pipeline)** — covering
round 1, the only round on this cut.

Cause: cut v1 was built from script v2, whose scene 4 headline and body implied
Contact belongs to the infraction family, and whose scene 6 body called
"Contact" *the infraction route*. Script v3 was approved 2026-09-06T05:21Z and
is what this cut is built from.

What changed, all of it copy — no rule text was altered, and the only rule
*number* added is 18.1.1.2, which the approved script cites:

- Scene 4 kicker: "STILL A FOUL, DIFFERENT CALL" → "A FOUL, NOT AN INFRACTION"
  (854 → 780 of the 900px column).
- Scene 4 headline: "'Contact' is not a different event." → "Contact is a foul,
  not an infraction."
- Scene 4 body, rewritten to name the six and say Contact is not among them;
  footer now cites 15.1 · 15.2 · 18.1.1.2.
- Scene 5 gains a third block, 18.1.1.2 (Straddle) — the one named infraction
  put on a card, so the list is shown rather than only asserted.
- Scene 6 body: now quotes the "a contact infraction" phrase from 17.6.1.3 and
  places it in the fouls chapter, instead of calling it "the infraction route".

**Proved rather than asserted:** the v2-script copy was re-rendered in parallel
and the two PNG sets compared pixel by pixel. Of the 36 states in the new cut,
**29 are pixel-identical** to the cut you rejected, **6 differ** — four on scene
4 and two on scene 6 — and **one is new**, the 18.1.1.2 block on scene 5.
Scenes 1, 2, 3, 7, 8 and 9 are pixel-identical throughout. Scene 6's headline is
unchanged, which is why only its last two states move.

Measured on the finished cut, not predicted: nine scenes, exact CFR via
`encode.py`, **29.50s**. `check_layout.py` — 9 scenes, 0 problems, no
collisions; detail cards at max_y 940 (17.6.1 + limbs), 1026 (15.1 + 15.2 +
18.1.1.2) and 704 (17.6.1.3), all three main scenes at 1192, cover 1210, field
tip 1062, closing 900, every max_x at 990 of 990. Every dry measurement in the
approved script held exactly, including the 1026 prediction for the new
three-block card. `check_dull.py` — longest sustained dull-orange run 0.20s
(6 frames) against a 0.45s threshold. All three kickers stayed at the standard
34px; `fit_kicker()` never engaged. The one `_payload()` case predicted on
scene 6 emitted as expected: two `<tspan>` wrappers, on `"Contact" doesn't.` and
on `"Contact" does not, and the count restarts at one.`

All seven rule texts — 15.1, 15.2, 17.6.1, 17.6.1.1, 17.6.1.2, 17.6.1.3 and
18.1.1.2 — re-verified character-for-character against `rules.json` in the
emitted SVGs. 17.6.1.2's "non-minor" still wraps as non- / minor on textwrap's
default hyphen break; no character added or removed, same as v1.

Like reel-28 v2 and reel-30 v2, this cut does not improve on v1 by any
*measurement* — v1 was clean on all of them. The defect was the words. v1
archived as `reel32-marking-fouls-and-contact.v1.mp4`; the new cut keeps the
unsuffixed filename, as the title is unchanged.
