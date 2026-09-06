"""Caption guard for the content pipeline: length, and markdown that leaks.

Two failures, both found on 2026-09-06, both on reel-32, both invisible until
the caption reached the Instagram composer. See MARKDOWN further down for the
second one.

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
Exit:   0 if every queued caption fits and is plain text; 1 otherwise.

Already-posted captions are reported but never fail: they are the record of
what went out, and rewriting them would make data.js lie about what was
published. Posted-ness comes from review-state.json, not from data.js's
`postedDate`, which was only ever filled in for the first three posts.
"""

import json
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


# Markdown that survives into a caption is not a formatting choice, it is
# literal punctuation. Instagram and TikTok render captions as plain text: **so
# this** posts with the asterisks visible, and it reads like a typo. The drafts
# here are written in .md files and mirrored into data.js, so emphasis markers
# travel from a context that renders them into one that does not.
#
# Min-Yi caught this on 2026-09-06 — "there are some unnecessary ** in the
# caption, IG doesn't pick these formatting up" — on reel-32, which by then had
# been through both gates twice.
#
# Use sentence structure and line breaks for emphasis instead. There is no
# formatting to reach for, so the words have to carry it.
MARKDOWN = [
    (r"\*\*", "bold **"),
    (r"(?<!\*)\*(?!\*)", "italic *"),
    (r"`", "backtick"),
    (r"\[[^\]]+\]\([^)]+\)", "[link](url)"),
    (r"(?m)^#+ ", "# heading"),
    (r"(?m)^[-+] ", "- bullet"),
    (r"(?<!\w)_[^_\n]+_(?!\w)", "_italic_"),
]

# Posted before review-state.json existed, so they have no key and cannot be
# told apart from a fresh draft by state alone. Their captions are the record of
# what actually went out and are deliberately not rewritten — every other post
# on the account shipped with these markers too, and rewriting live captions
# after the fact would make data.js lie about what was published.
LEGACY_NO_REVIEW_KEY = {"carousel-post-1", "reel-1", "reel-2"}


def posted_ids():
    """Ids the desk records as already published.

    Read from review-state.json rather than data.js: `postedDate` in data.js was
    only ever filled in for the first three posts, so it is not a usable signal.
    """
    path = os.path.join(ROOT, "content", "review-state.json")
    try:
        with open(path, encoding="utf-8") as fh:
            state = json.load(fh)
    except (OSError, ValueError):
        return None
    return {k for k, v in state.items()
            if (v.get("posted") or {}).get("status") == "posted"}


def markdown_hits(text):
    return [label for pat, label in MARKDOWN if re.search(pat, text)]


def main(path=DATA_JS):
    data = open(path, encoding="utf-8").read()
    problems, warnings, checked = [], [], 0
    live = posted_ids()

    for pid, blob in posts(data):
        m = measure(blob)
        if not m:
            continue
        checked += 1

        # A caption measured without its hashtags reads ~99 characters short,
        # which is enough to pass something Instagram then refuses. If the block
        # cannot be parsed, that is a broken measurement, not a clean post.
        tags = _hashtags(blob)
        if not tags:
            problems.append("%-16s %-7s hashtag block not parsed — the "
                            "measurement below is short by the tag line"
                            % (pid, "hashtags"))
        elif any(not t.startswith("#") for t in tags):
            problems.append("%-16s %-7s hashtag block parsed as %r"
                            % (pid, "hashtags", tags))

        worst = ""
        for plat, (n, limit) in sorted(m.items()):
            if n > limit:
                problems.append("%-16s %-7s %5d / %d  — over by %d"
                                % (pid, plat, n, limit, n - limit))
            elif n >= limit * WARN_AT:
                warnings.append("%-16s %-7s %5d / %d  — %d%% of the limit"
                                % (pid, plat, n, limit, round(100 * n / limit)))
            worst += "  %s %d/%d" % (plat, n, limit)

            hits = markdown_hits(_template_literal(blob, plat) or "")
            if not hits:
                continue
            note = "%-16s %-7s renders literally: %s" % (pid, plat,
                                                         ", ".join(hits))
            # Already published: the caption is the record of what went out and
            # is left alone. Anything still in the queue is a hard failure.
            if pid in LEGACY_NO_REVIEW_KEY or (live and pid in live):
                warnings.append(note + "  (already posted — left as the record)")
            else:
                problems.append(note)

        print("  %-16s%s" % (pid, worst))

    if live is None:
        warnings.append("%-16s %-7s review-state.json unreadable — could not "
                        "tell posted from queued, so every markdown hit below "
                        "is a failure" % ("(all)", "state"))

    print("\n%d post(s) checked" % checked)
    for w in warnings:
        print("WARN  " + w)
    for p in problems:
        print("FAIL  " + p)

    if problems:
        print("\ncheck_caption: %d caption(s) cannot be posted as written."
              % len(problems))
        print("Over the limit? Trim the body — the hashtag set is fixed, and it")
        print("counts. A caption is not on-screen type: there is nothing to")
        print("shrink, so this is the one place where the words have to give.")
        print("Markdown? Delete the markers. Instagram and TikTok show them")
        print("literally; use sentence structure and line breaks instead.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(*sys.argv[1:]))
