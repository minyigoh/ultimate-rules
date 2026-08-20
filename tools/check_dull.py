"""Dull-orange guard for the reel pipeline.

The bug this exists to catch: when scene timing is quantised (the old concat
demuxer path), a 50%-opacity crossfade frame inherits the finished slide's
read time, so orange text sits visibly dimmed for a second or two before the
page flips. A 0.4s scene blend is intended; anything sustained is not.

Method: decode at nearest-neighbour half scale (no interpolation, so stroke
peaks survive), mask orange-ish pixels, and track the per-band maximum red
channel over time. Banding by row matters -- the header logo is always at
full strength, so a whole-frame maximum can never fail.
"""
import subprocess
import sys

import numpy as np

FPS = 30
W, H = 540, 960          # half scale, nearest neighbour
HEADER_Y = 260           # below the header rule; the logo above is always full
N_BANDS = 24
DULL = 200               # red channel below this is a dimmed orange
MAX_RUN_S = 0.45         # 0.4s scene blend plus a frame of slack


def frames(path):
    p = subprocess.Popen(
        ["ffmpeg", "-v", "error", "-i", path,
         "-vf", f"scale={W}:{H}:flags=neighbor",
         "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
        stdout=subprocess.PIPE)
    size = W * H * 3
    while True:
        buf = p.stdout.read(size)
        if len(buf) < size:
            break
        yield np.frombuffer(buf, np.uint8).reshape(H, W, 3)
    p.stdout.close()
    p.wait()


def main(path):
    body_h = H - HEADER_Y
    edges = np.linspace(HEADER_Y, H, N_BANDS + 1).astype(int)
    peaks = []
    for f in frames(path):
        r = f[:, :, 0].astype(np.int16)
        g = f[:, :, 1].astype(np.int16)
        b = f[:, :, 2].astype(np.int16)
        # Orange: red-dominant, well clear of the #0F1712 background and of
        # the #F1F3EE cream, at any brightness down to a heavy dim.
        orange = (r > 55) & (r > g + 25) & (r > b + 25) & (g < r * 0.75)
        row = np.where(orange, r, 0)
        peaks.append([row[edges[i]:edges[i + 1]].max() for i in range(N_BANDS)])
    peaks = np.array(peaks)                     # frames x bands
    n = len(peaks)
    print(f"{path}: {n} frames = {n / FPS:.2f}s, {N_BANDS} bands below y={HEADER_Y}")

    worst_run, worst_band, worst_at = 0, None, None
    for bi in range(N_BANDS):
        col = peaks[:, bi]
        dull = (col > 0) & (col < DULL)         # orange present, but dimmed
        run = at = 0
        for i, d in enumerate(dull):
            if d:
                run += 1
                if run > worst_run:
                    worst_run, worst_band, worst_at = run, bi, i - run + 1
            else:
                run = 0
        del at
    secs = worst_run / FPS
    y0 = edges[worst_band] * 2 if worst_band is not None else 0
    y1 = edges[worst_band + 1] * 2 if worst_band is not None else 0
    print(f"  longest sustained dull-orange run: {secs:.2f}s "
          f"({worst_run} frames)"
          + (f" in band y={y0}-{y1} starting at t={worst_at / FPS:.2f}s"
             if worst_band is not None else ""))
    ok = secs <= MAX_RUN_S
    print(f"  {'PASS' if ok else 'FAIL'} (threshold {MAX_RUN_S:.2f}s)")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(max(main(p) for p in sys.argv[1:]))
