import json, os
from PIL import Image
FPS = 30; IN_SCENE, BETWEEN = 0.12, 0.40
states = json.load(open("v4/manifest.json"))
os.makedirs("v4/trans", exist_ok=True)
def ease(t): return t*t*(3-2*t)
n_made = 0
for i in range(1, len(states)):
    d = BETWEEN if states[i][2] else IN_SCENE
    n = max(2, int(round(d*FPS)))
    a = Image.open(states[i-1][0]).convert("RGB")
    b = Image.open(states[i][0]).convert("RGB")
    for k in range(1, n):
        f = f"v4/trans/{i:02d}_{k:02d}.png"
        if not os.path.exists(f):
            Image.blend(a, b, ease(k/n)).save(f, optimize=False, compress_level=1)
            n_made += 1
print("blended", n_made)
