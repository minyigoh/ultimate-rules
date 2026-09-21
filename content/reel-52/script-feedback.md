# reel-52 — script feedback rounds

Rounds on the **script** gate. Rendered-content rounds live in `feedback.md`.

---

## Round 1 — 2026-09-21 (Content Desk)

**Status set:** `changes`

> "Try it during a point and you are playing a player short." sounds a bit misle

**Redrafted:** 2026-09-21 (daily-reel-render, draft run) · **scriptRev 1 → 2**

The note is right, and the line was wrong in a way worth spelling out, because
it fused two different facts into one sentence:

- **Substituting during a point is not something you "try" and get punished
  for — it is simply not available.** 5.3 grants substitution only after a goal
  and before the ready signal. Outside a safety stoppage there is no mid-point
  substitution to attempt, so the old hook described a penalty for an action the
  rules do not contemplate.
- **Being a player short is a different cause entirely.** It comes from
  signalling readiness before your line is actually on the field, which closes
  the 5.3 window early. That is the field tip's point (scene 8), and it stayed
  accurate — it was the hook that borrowed the consequence and attached it to
  the wrong cause.

What changed:

- **Hook beat rewritten.** Was: "You can swap your entire line between points.
  Try it during a point and you are playing a player short." Now: "You can
  change your entire line between points. Once your team signals ready for the
  pull, that line is locked in until the next goal." Same fact, stated as the
  window closing rather than as a punishment.
- **Instagram caption, paragraph 2.** "During a point you almost never can"
  → "Once your team has signalled ready for the pull, that line is set",
  so the caption names the cut-off rather than gesturing at it.
- **TikTok caption**, the same sentence, same fix.

Unchanged and deliberately so: all three carded rules (5.3, 19.3, 19.3.1) and
their verbatim text, the nine-scene structure, every slide body, the field tip,
and both captions' rule quotations. No rule number was added or dropped.

Because no `SCENES` entry changed, the layout is byte-identical to v1's. It was
re-measured anyway on 2026-09-21 rather than assumed: `check_layout.py` exit 0,
9 scenes, 0 problems, cover 1210 / mains 1192 / rules cards 454, 504, 504 /
tip 1012 against the 1310 floor, 34 states, projected 30.0s. Identical to the
numbers recorded for v1.

Previous copy archived as `script-and-caption.v1.md`.
