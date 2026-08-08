# Reel timing

House rhythm for every reel. Set 2026-08-08 after the first week's cuts ran
long and the text crawled in: **text should arrive quickly and in sequence,
then the finished slide should hold long enough to actually read.**

Implemented as a `retime()` + `fit()` pass at the bottom of every
`content/reel-N/render_v3.py`, applied over whatever per-state durations the
`SCENES` list happens to carry. Nothing above that pass needs hand-tuning —
change the constants here and in the render scripts, not the scene lists.

## The rule

| Constant | Value | What it controls |
|---|---:|---|
| `STAGGER` | 0.22s | Any state where text is still arriving |
| `HOLD["cover"]` | 1.5s | Complete cover slide |
| `HOLD["main"]` | 1.6s | Complete topic slide |
| `HOLD["detail"]` | 2.4s | Complete rules-citation slide — needs the most reading time |
| `HOLD["tip"]` | 1.6s | Complete field-tip slide |
| `HOLD["close"]` | 2.0s | Complete closing slide |
| `IN_SCENE` | 0.12s | Crossfade between text states inside one scene |
| `BETWEEN` | 0.40s | Crossfade between scenes |
| `TARGET` | 30.0s | Finished video length |

A rules slide carrying more than one rule block holds each earlier block for
`HOLD["detail"] × 0.7` before the next lands, so the second rule doesn't bury
the first.

`IN_SCENE` and `BETWEEN` appear in three files per reel — `render_v3.py`
(for its projected-duration report), `blend.py`, and `concat_build.py`. They
must match, or the concat timeline and the blended frames disagree.

## Why a fit pass

Reels run two to four topic blocks depending on the lesson, so the rhythm
alone spreads them over 22–35s. `fit()` scales the read-holds — never the
stagger, since that's the part being kept snappy — so each reel lands near
`TARGET`. The factor is clamped to 0.8–1.5 so rule text never becomes
unreadable at one end or draggy at the other.

Measured after the change:

| Reel | Scenes | Before | After |
|---|---:|---:|---:|
| reel-1 | 9 | 40.9s | 30.0s |
| reel-2 | 7 | 30.2s | 28.9s |
| reel-3 | 9 | 39.1s | 30.0s |
| reel-4 | 7 | 30.8s | 28.9s |
| reel-5 | 11 | 46.2s | 31.1s |
| reel-6 | 9 | 40.7s | 30.0s |
| reel-7 | 9 | 40.7s | 30.0s |

`render_v3.py` prints its projected duration on every run. If one ever lands
outside roughly 28–33s, the scene count is the cause, not the constants — drop
a topic block rather than compressing the holds further.

## Checking a change without rendering

The timing path runs without ImageMagick or ffmpeg, so a change can be
verified in seconds:

```python
import subprocess; subprocess.run = lambda *a, **k: None
exec(open("content/reel-3/render_v3.py").read())
```

It prints `projected: NN.Ns`. Only the actual encode needs the full toolchain.
