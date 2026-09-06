"""Caption-length guard for the content pipeline.

WHY THIS EXISTS: on 2026-09-06 Min-Yi went to post reel-32 and the Instagram
caption would not paste — "unpasteable, looks too lengthy for IG to cope with".
It was 3,396 characters against Instagram's 2,200 limit, 54% over. reel-35,
drafted the same day, was 2,337. Nothing in the pipeline had ever measured a
caption, so length was free to grow: every other guard here (check_layout,
check_dull, the render gate) watches the video, and the caption is the one
deliverable that goes out as raw text with no renderer to complain first.

The failure is silent in the worst way. The desk shows the caption, the copy
button works, the .md file looks fine, and the defect only appears at the very
last step, in the Instagram composer, after the cut has been approved and the
post is due. That is the most expensive place in the whole pipeline to find it.

WHAT COUNTS. Everything: letters, spaces, line breaks, emoji, and the hashtags,
which are part of the caption and not a separate field. So the measurement here
is `body + "\\n\\n" + " ".join(hashtags)`, which is what actually gets pasted.

HOW IT COUNTS. In UTF-16 code units, not Python characters. The 🥏 in every
TikTok caption is one Python character but two UTF-16 units, and the platforms
count the latter. Using the stricter measure means this never passes something
Instagram then rejects. For pure-ASCII captions the two are identical.

LIMITS (verified 2026-09-06):
  Instagram  2,200   — the binding one; every caption here is well inside TikTok
  TikTok     4,000

WARN_AT is 95%. A caption at 2,150 is not broken, but it is one edit away from
being broken, and this pipeline drafts daily. Six of the forty posts on file
were over 1,800 when this was written, so the drift is real and worth seeing
before it bites.

Usage:  python tools/check_caption.py [path/to/data.js]
Exit:   0 if every caption fits, 1 if any exceeds a limit.
"""

import os
import re
import sys

IG_LIMIT = 2200
TIKTOK_LIMIT = 4000
WARN_AT = 0.95

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DATA_JS = os.path.join(ROOT, "social", "dashboard", "data.js")


def utf16_len(s):
    """Length in UTF-16 code units — how the platforms count.

    A non-BMP character (emoji) is one Python char but two units. Counting the
    stricter way means a caption that passes here cannot fail in the composer.
    """
    return len(s.encode("utf-16-le")) // 2


def _template_literal(text, key):
    """Extract a backtick template literal `key: ` ... ` ` from data.js.

    The captions are template literals because they contain apostrophes, double
    quotes and hard line breaks. Backticks never appear inside one, but the
    escape case is handled anyway so a future caption quoting code cannot
    silently truncate the measurement.
    """
    m = re.search(r"\b" + key + r":\s*`", text)
    if not m:
        return None
    i = m.end()
    out = []
    while i < len(text):
        c = text[i]
        if c == "\\" and i + 1 < len(text):
            out.append(text[i + 1])
            i += 2
            continue
        if c == "`":
            return "".join(out)
        out.append(c)
        i += 1
    return None


def _hashtags(text):
    m = re.search(r"\bhashtags:\s*\[(.*?)\]", text, re.S)
    if not m:
        return []
    return re.findall(r"'([^']*)'", m.group(1))


def posts(data):
    """Split data.js into one blob per post, keyed on id.

    Regex rather than a JS parse, matching how build_desk.py already reads this
    file — there is no JS runtime on the drafting path.
    """
    marks = [(m.group(1), m.start()) for m in re.finditer(r"id:\s*'([^']+)'", data)]
    for n, (pid, start) in enumerate(marks):
        end = marks[n + 1][1] if n + 1 < len(marks) else len(data)
        yield pid, data[start:end]


def measure(blob):
    """Return {platform: (chars, limit)} for one post's pasteable captions."""
    tags = " ".join(_hashtags(blob))
    out = {}
    for key, limit in (("ig", IG_LIMIT), ("tiktok", TIKTOK_LIMIT)):
        body = _template_literal(blob, key)
        if body is None:
            continue
        full = body + "\n\n" + tags if tags else body
        out[key] = (utf16_len(full), limit)
    return out


def main(path=DATA_JS):
    data = open(path, encoding="utf-8").read()
    problems, warnings, checked = [], [], 0

    for pid, blob in posts(data):
        m = measure(blob)
        if not m:
            continue
        checked += 1
        worst = ""
        for plat, (n, limit) in sorted(m.items()):
            if n > limit:
                problems.append("%-16s %-7s %5d / %d  — over by %d"
                                % (pid, plat, n, limit, n - limit))
            elif n >= limit * WARN_AT:
                warnings.append("%-16s %-7s %5d / %d  — %d%% of the limit"
                                % (pid, plat, n, limit, round(100 * n / limit)))
            worst += "  %s %d/%d" % (plat, n, limit)
        print("  %-16s%s" % (pid, worst))

    print("\n%d post(s) checked" % checked)
    for w in warnings:
        print("WARN  " + w)
    for p in problems:
        print("FAIL  " + p)

    if problems:
        print("\ncheck_caption: %d caption(s) cannot be posted as written."
              % len(problems))
        print("Trim the body — hashtags are the fixed set and do not change.")
        print("A caption is not on-screen type: there is nothing to shrink, so")
        print("this is the one place where the words themselves have to give.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(*sys.argv[1:]))
