"""Parse urules.org all.html into structured JSON: chapters -> rules -> annotations, plus definitions."""
import json, re, html
from html.parser import HTMLParser

SRC = "all.html"
OUT = "rules.json"

raw = open(SRC, encoding="utf-8").read()

# ---------------------------------------------------------------- helpers
TAG = re.compile(r"<[^>]+>")


def strip_tags(s):
    # keep internal rule links as plain text
    s = re.sub(r"<a [^>]*href=\"#([^\"]+)\"[^>]*>(.*?)</a>", r"\2", s, flags=re.S)
    s = TAG.sub("", s)
    s = html.unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def block_text(s):
    """Convert an HTML fragment to plain paragraphs list."""
    parts = re.split(r"</p>|<hr\s*/?>|</div>", s)
    out = []
    for p in parts:
        t = strip_tags(p)
        if t:
            out.append(t)
    return out


def find_matching(text, start, opentag, closetag):
    """Given index of an opening tag at `start`, return index just past its matching close."""
    depth = 0
    i = start
    op = re.compile(opentag, re.I)
    cl = re.compile(closetag, re.I)
    while i < len(text):
        mo = op.search(text, i)
        mc = cl.search(text, i)
        if mc is None:
            return len(text)
        if mo is not None and mo.start() < mc.start():
            depth += 1
            i = mo.end()
        else:
            depth -= 1
            i = mc.end()
            if depth == 0:
                return i
    return len(text)


# ---------------------------------------------------------------- chapters
# <h2><s-i rank="1" href="chN.html#N"><span id="N"><strong>N.</strong></span> Title</s-i></h2>
chap_re = re.compile(
    r'<h2><s-i rank="1" href="(ch\d+)\.html#(\d+)"><span id="\d+"><strong>\d+\.</strong></span>\s*(.*?)</s-i></h2>',
    re.S,
)
chaps = []
for m in chap_re.finditer(raw):
    chaps.append(
        {"file": m.group(1), "num": int(m.group(2)), "title": strip_tags(m.group(3)), "start": m.end()}
    )
for i, c in enumerate(chaps):
    c["end"] = chaps[i + 1]["start"] if i + 1 < len(chaps) else raw.find('<h2>Definitions</h2>')
    if c["end"] < 0:
        c["end"] = len(raw)

# ---------------------------------------------------------------- rules
rule_re = re.compile(
    r'<s-i rank="\d+" href="ch\d+\.html#([\d.]+)"><strong><a name="[\d.]+" href="#[\d.]+">[\d.]+\.</a></strong>(.*?)</s-i>',
    re.S,
)

# annotation details blocks
ann_re = re.compile(
    r'<details(?![^>]*class="sessecomment")[^>]*>\s*<summary>\s*<span id="(ann[\d.]+)"><strong>Annotation:</strong>\s*(.*?)</span></summary>',
    re.S,
)

chapters = []
all_rules = []
for c in chaps:
    body = raw[c["start"] : c["end"]]
    rules = []
    matches = list(rule_re.finditer(body))
    for j, m in enumerate(matches):
        num = m.group(1)
        text = strip_tags(m.group(2))
        seg_end = matches[j + 1].start() if j + 1 < len(matches) else len(body)
        seg = body[m.end() : seg_end]
        anns = []
        for am in ann_re.finditer(seg):
            dstart = seg.rfind("<details", 0, am.start())
            dend = find_matching(seg, dstart, r"<details\b", r"</details>")
            inner = seg[am.end() : dend]
            anns.append({"title": strip_tags(am.group(2)), "body": block_text(inner)})
        r = {
            "num": num,
            "chapter": c["num"],
            "chapterTitle": c["title"],
            "text": text,
            "depth": num.count(".") + 1,
        }
        if anns:
            r["ann"] = anns
        rules.append(r)
        all_rules.append(r)
    chapters.append({"num": c["num"], "title": c["title"], "count": len(rules)})

# ---------------------------------------------------------------- definitions
defs_start = raw.find("<h2>Definitions</h2>")
defs_end = raw.find("<h2>Appendix", defs_start)
if defs_end < 0:
    defs_end = len(raw)
defs_body = raw[defs_start:defs_end]
def_re = re.compile(
    r'<s-i rank="\d+" keywords="[^"]*" href="defs\.html#([^"]+)"><p><strong>'
    r'<a name="[^"]+" href="#[^"]+">([^<]+)</a></strong>(.*?)</p>',
    re.S,
)
definitions = []
for m in def_re.finditer(defs_body):
    term = strip_tags(m.group(2)).rstrip(":").strip()
    body = strip_tags(m.group(3))
    if term and body:
        definitions.append({"id": m.group(1), "term": term, "text": body})

if not definitions:
    # fallback: definitions look like <li><s-i ...><strong>Term</strong> ...
    alt = re.compile(r'<li><s-i[^>]*href="defs\.html#([^"]+)"[^>]*>(.*?)</s-i>', re.S)
    for m in alt.finditer(defs_body):
        t = strip_tags(m.group(2))
        if ":" in t:
            term, _, rest = t.partition(":")
            definitions.append({"id": m.group(1), "term": term.strip(), "text": rest.strip()})

data = {"chapters": chapters, "rules": all_rules, "definitions": definitions}
json.dump(data, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=None)

print("chapters:", len(chapters))
print("rules:", len(all_rules))
print("with annotations:", sum(1 for r in all_rules if "ann" in r))
print("definitions:", len(definitions))
print()
for c in chapters:
    print(f'  {c["num"]:>2}. {c["title"]}  ({c["count"]} rules)')
print()
for r in all_rules[:3]:
    print(r["num"], "|", r["text"][:100])
print("...")
for d in definitions[:5]:
    print("DEF:", d["term"], "|", d["text"][:90])
