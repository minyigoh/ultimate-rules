import json, os
FPS=30; IN_SCENE, BETWEEN = 0.12, 0.40
states = json.load(open("v4/manifest.json"))
lines=[]; total=0.0
def add(p,d):
    global total
    lines.append(f"file '{os.path.abspath(p)}'"); lines.append(f"duration {d:.4f}"); total+=d
for i,(png,hold,is_start) in enumerate(states):
    if i>0:
        d = BETWEEN if is_start else IN_SCENE
        n = max(2,int(round(d*FPS)))
        for k in range(1,n):
            add(f"v4/trans/{i:02d}_{k:02d}.png", 1.0/FPS)
    add(png, hold)
lines.append(f"file '{os.path.abspath(states[-1][0])}'")
open("v4/concat.txt","w").write("\n".join(lines)+"\n")
print("timeline", round(total,2),"s /", len(lines)//2, "entries")
