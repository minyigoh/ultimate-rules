"""Exact-CFR encode for the reel pipeline.

Why this exists: the concat demuxer quantises every `duration` onto a 0.04s
grid (image2's 25fps default). Adjacent entries then collide -- two frames get
emitted at the same PTS -- and `-vf fps=30` resamples from those broken
timestamps, which lets a mid-crossfade frame inherit the finished slide's
hold. That is the "orange looks dull until just before the flip" bug.

Fix: never ask the demuxer to time anything. Emit an exact CFR stream -- each
frame repeated round(duration*30) times -- straight into x264. Consecutive
duplicates are decoded once and rewritten, so this is cheaper than a 900-entry
concat list too.
"""
import json, os, subprocess, sys
from PIL import Image

FPS = 30; IN_SCENE, BETWEEN = 0.12, 0.40      # must match render_v3/blend
W, H = 1080, 1920

def timeline():
    states = json.load(open("v4/manifest.json"))
    seq = []
    for i, (png, hold, is_start) in enumerate(states):
        if i > 0:
            d = BETWEEN if is_start else IN_SCENE
            n = max(2, int(round(d*FPS)))
            for k in range(1, n):
                seq.append((f"v4/trans/{i:02d}_{k:02d}.png", 1))
        seq.append((png, max(1, int(round(hold*FPS)))))
    return seq

def main(out, preset="medium"):
    seq = timeline()
    total = sum(n for _, n in seq)
    print(f"frames {total} = {total/FPS:.2f}s  ->  {out} (preset {preset})", flush=True)
    p = subprocess.Popen(
        ["ffmpeg","-v","error","-y","-f","rawvideo","-pix_fmt","rgb24",
         "-s",f"{W}x{H}","-r",str(FPS),"-i","-",
         "-vf","format=yuv420p","-c:v","libx264","-preset",preset,"-crf","19",
         "-movflags","+faststart","-r",str(FPS), out], stdin=subprocess.PIPE)
    last, buf = None, None
    for path, n in seq:
        if path != last:
            buf = Image.open(path).convert("RGB").tobytes()
            last = path
        for _ in range(n):
            p.stdin.write(buf)
    p.stdin.close()
    if p.wait() != 0:
        raise SystemExit("ffmpeg failed")
    print("ok", flush=True)

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else "medium")
