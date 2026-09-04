#!/usr/bin/env python3
"""One-shot: give content/review-state.json its version stamps (2026-09-04).

Why
---
Before this, an approval was a sticky flag on the post rather than a stamp on a
version of the words. When the render task redrafted a script, the approval that
belonged to the previous draft stayed lit -- so the desk showed "Script
approved", with Approve still pressed, for words nobody had read. Min-Yi hit it
twice on 2026-09-04 and reported it as "script approval will still show it as
Script Approved and even the button stays at Approve".

The desk now reads a decision's `rev` against the track's current version and
withdraws the decision when the version has moved on. This script writes the
revs the existing file has no way to imply.

What it writes, and why each value

  scriptRev / scriptRevisions   the draft version of the words, and their log.
                                Everything is v1 except reel-30 and reel-32,
                                which the task redrafted on 2026-09-04 (their
                                previous copy is on disk as
                                script-and-caption.v1.md).

  script.rev / content.rev      the version each existing decision judged.
                                Read off the git history rather than guessed:

    reel-30  script approved 07:48:43, AFTER the 07:44:56 redraft -> v2.
             That one worked; it just wasn't legible while it was happening.
             The three content rejections at 07:22 were about cut v1.
    reel-32  script approved 07:23:12, BEFORE the 07:26:14 redraft -> v1.
             The 07:44 render was built from v2, which was never approved.
             This is the one real gate breach, and stamping it v1 is what
             makes the desk say so.

    Everything else: stamped at its track's current version. Those decisions
    were made against what is on disk now -- the shipped posts are all done --
    and stamping them explicitly means no future redraft can quietly re-point
    an old approval at new words the way reel-32's did.

  history                       seeded from the decisions already on file, so
                                the desk's new history panel isn't empty on the
                                posts that have the most to explain. Rounds the
                                Worker logged as duplicates are folded into one
                                entry, which is what the coalescing in
                                worker.js does from now on.

Idempotent: re-running changes nothing. Safe to run twice.

Usage:  python tools/migrate_revs.py [--dry-run]
"""

import io
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
REVIEW = os.path.join(REPO, "content", "review-state.json")
DRY = "--dry-run" in sys.argv

# The two posts the task redrafted on 2026-09-04. Everything else is on its
# first draft.
REDRAFTED = {
    "reel-30": {
        "scriptRev": 2,
        "scriptRevisions": [
            {"v": 1, "draftedAt": "2026-09-01", "file": "script-and-caption.v1.md",
             "changed": "Initial draft, blocking fouls: 12.5, 17.4.1, 12.9."},
            {"v": 2, "draftedAt": "2026-09-04", "file": "script-and-caption.md",
             "changed": "Box-out redraft covering content rounds 1-3. Scene 6 headline "
                        "\"You cannot box out.\" -> \"You can box out - just not with your "
                        "arms.\", scene 8 \"Boxing out is a habit from another sport.\" -> "
                        "\"Box out with your body, not your arms.\", both bodies and both "
                        "captions rewritten to name the permission before the limit. No "
                        "rule cited, quoted or ordered differently."},
        ],
        # Approved at 07:48:43, after the 07:44:56 redraft. This one was right.
        "script_rev": 2,
        # The three rejections at 07:22 were all about cut v1.
        "content_rev": 1,
    },
    "reel-32": {
        "scriptRev": 2,
        "scriptRevisions": [
            {"v": 1, "draftedAt": "2026-09-03", "file": "script-and-caption.v1.md",
             "changed": "Initial draft, marking fouls and the \"Contact\" call. Seven scenes."},
            {"v": 2, "draftedAt": "2026-09-04", "file": "script-and-caption.md",
             "changed": "Redraft answering \"Isn't contact part of a foul call? Infraction "
                        "is infraction right?\" - adds a third pair carding 15.1 and 15.2, "
                        "rewrites the hook so the concession comes first, renumbers the old "
                        "#2. Seven scenes to nine."},
        ],
        # Approved at 07:23:12, BEFORE the 07:26:14 redraft. The approval belongs
        # to v1; v2 has never been read. This is the breach.
        "script_rev": 1,
        "content_rev": 1,
    },
}


# Decisions review-state.json no longer holds, because each new one overwrote
# the last. Recovered from `git log` (the Worker names the transition in every
# commit subject) and from content/<folder>/feedback.md, and confined to the two
# posts whose story actually needs telling. The three 07:22 rejections are one
# entry here, which is what the Worker's coalescing does from now on -- they
# were one complaint, sent three times as she typed.
PRIOR = {
    "reel-30": {
        "script": [
            {"status": "approved", "rev": 1, "note": "", "tags": [],
             "at": "2026-08-31T23:42:27Z"},
        ],
        "content": [
            {"status": "approved", "rev": 1, "note": "", "tags": [],
             "at": "2026-09-01T23:10:09Z"},
            {"status": "rerender", "rev": 1,
             "note": "We can box out in ultimate using body. Just not using arms",
             "tags": ["On-screen text", "Wrong take"],
             "at": "2026-09-03T23:22:42Z"},
        ],
    },
    "reel-32": {
        "script": [
            {"status": "pending", "rev": 1,
             "note": "Isn\u2019t contact part of a foul call? Infraction is infraction right?",
             "tags": [], "at": "2026-09-03T09:18:39Z"},
        ],
        "content": [],
    },
}


# History is a log of DECISIONS. `pending`, `in-review` and `awaiting-render`
# are the render task's states, not judgements -- they mean "waiting on you",
# which is what the card says anyway. The one exception is a `pending` carrying
# a note, which is Min-Yi asking a question about the words (reel-32's) and is
# very much a thing she said.
def is_decision(row):
    if row.get("status") in ("approved", "changes", "rejected", "rerender"):
        return True
    return row.get("status") == "pending" and bool((row.get("note") or "").strip())


def seed_history(post_id, entry):
    """Turn the decisions already on file into history rows, newest last."""
    hist = entry.setdefault("history", {})
    prior = PRIOR.get(post_id, {})
    for name in ("script", "content"):
        t = entry.get(name)
        if not t or not t.get("status"):
            continue
        rows = hist.setdefault(name, [])
        rows[:] = [r for r in rows if is_decision(r)]   # repair an earlier run
        if rows:
            continue                      # already seeded; idempotent
        rows.extend(prior.get(name, []))
        last = rows[-1] if rows else None
        # Don't log the same decision twice: the last recovered round and the
        # decision currently on file can be the same event.
        if last and last["status"] == t["status"] and last.get("rev") == t.get("rev"):
            continue
        row = {
            "status": t["status"],
            "rev": t.get("rev"),
            "note": t.get("note", ""),
            "tags": t.get("tags", []),
            "at": t.get("updatedAt"),
        }
        if is_decision(row):
            rows.append(row)
    for name in list(hist):
        if not hist[name]:
            del hist[name]
    if not hist:
        del entry["history"]
    return hist


def main():
    with io.open(REVIEW, encoding="utf-8") as f:
        state = json.load(f)

    touched = 0
    for post_id, entry in state.items():
        before = json.dumps(entry, sort_keys=True)
        spec = REDRAFTED.get(post_id)

        entry.setdefault("scriptRev", spec["scriptRev"] if spec else 1)
        if spec:
            entry["scriptRev"] = spec["scriptRev"]
            entry.setdefault("scriptRevisions", spec["scriptRevisions"])

        # The cut's version is just the last entry in `revisions`.
        revs = entry.get("revisions") or []
        cur_content = (revs[-1].get("v") or len(revs)) if revs else 0

        s = entry.get("script")
        if s and "rev" not in s:
            s["rev"] = spec["script_rev"] if spec else entry["scriptRev"]
        c = entry.get("content")
        if c and "rev" not in c:
            # awaiting-render and in-review are not decisions, so a version on
            # them would be meaningless. Leave them null.
            c["rev"] = (spec["content_rev"] if spec else cur_content) \
                if c.get("status") in ("approved", "rerender") else None

        # reel-32's cut was built from a script that was never approved. Record
        # which version it came from so the desk can say so on the card.
        if post_id == "reel-32" and revs:
            revs[-1].setdefault("builtFromScriptRev", 2)
        if post_id == "reel-30" and revs:
            revs[-1].setdefault("builtFromScriptRev", 2)

        seed_history(post_id, entry)

        if json.dumps(entry, sort_keys=True) != before:
            touched += 1
            print("  %-16s scriptRev=%s  script.rev=%s  content.rev=%s" % (
                post_id, entry["scriptRev"],
                (entry.get("script") or {}).get("rev"),
                (entry.get("content") or {}).get("rev")))

    if DRY:
        print("DRY RUN - %d entr(ies) would change" % touched)
        return
    with io.open(REVIEW, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print("stamped %d entr(ies) in content/review-state.json" % touched)


if __name__ == "__main__":
    main()
