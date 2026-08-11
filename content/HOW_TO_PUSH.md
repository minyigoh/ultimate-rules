# How to push — the complete beginner's guide

Written for someone who has never used git. You do not need to understand git
to follow this. Every step says exactly what to click and exactly what you
should see.

---

## Part 1 — What "push" actually means, in plain language

Your work lives in three separate places, and they are **not** automatically
kept in sync:

1. **Your computer** — the folder `C:\Users\Min Yi\Claude\Projects\Learn Ultimate Frisbee`.
   When I write or change a file, this is where it lands. Nobody else can see it.
2. **GitHub** — the online copy, at `github.com/minyigoh/ultimate-rules`, on a
   branch called `main`. This is the version everything else reads from.
3. **The Content Desk** — the page where you approve and reject. It reads from
   GitHub, not from your computer.

"Pushing" means step 1 → step 2: copying your computer's version up to GitHub.

**The consequence to remember:** until you push, the Content Desk cannot see
anything I made. A file sitting on your computer might as well not exist. This
is the single most common way work gets lost in this pipeline.

### Why I can't push for you

I run in a sandbox with **no internet connection to GitHub at all**. I can
write files onto your computer, but I cannot send them anywhere. Reaching
GitHub needs your Windows machine. That is the whole reason `tools\sync.bat`
exists — I do the writing, it does the sending.

So the split is always: **I prepare, you push.**

---

## Part 2 — The normal push, step by step

### Step 1 — Open the folder

Open **File Explorer** (the yellow folder icon on your taskbar, or press
`Windows key + E`).

Navigate to:

```
C:\Users\Min Yi\Claude\Projects\Learn Ultimate Frisbee\tools
```

Fastest way: click the address bar at the top of File Explorer, paste that
path in, press `Enter`.

### Step 2 — Double-click `sync.bat`

You are looking for a file named **`sync.bat`**. It has a gear-like icon.

> **Careful:** there are four `.bat` files in this folder — `sync.bat`,
> `finish_rebase.bat`, `unstick_rebase.bat`. For a normal push you want
> **`sync.bat`**. The other two are only for when something has gone wrong;
> Part 4 covers them.

Double-click it.

### Step 3 — Expect a black window that flashes and closes

A black command-prompt window will open, then close, possibly within a second
or two.

**This is normal and it is not an error.** `sync.bat` deliberately sends all of
its output into a log file instead of onto the screen, so there is nothing to
display. A fast flash does not mean it failed and a slow one does not mean it
worked — the window tells you nothing either way.

Wait until the window has closed before continuing. That is how you know it has
finished.

### Step 4 — Read the log. This is the part that actually matters.

In that same `tools` folder, open:

```
tools\_last_sync.log
```

Double-click it — it opens in Notepad. This file is rewritten from scratch
every run, so what you are reading is always the most recent attempt.

Scroll to the section headed `===== 8. push =====`. You are looking for one
line:

**Success looks like this:**

```
===== 8. push =====
To https://github.com/minyigoh/ultimate-rules.git
   c661d20..a1b2c3d  main -> main
push rc=0
```

`push rc=0` means it worked. (`rc` is "return code"; `0` means no error. In git,
zero is good news.)

**Failure looks like this:**

```
push rc=1
PUSH FAILED - nothing reached GitHub or the desk.
```

Any non-zero number is a failure. The script says `PUSH FAILED` in words
precisely so you never have to interpret the number.

### Step 5 — Confirm at the bottom of the log

Scroll to `===== 9. final state =====`. You want to see:

```
## main...origin/main
```

That exact line, **with nothing after it**, means your computer and GitHub now
match — everything landed.

If it instead says:

```
## main...origin/main [ahead 2]
```

then `[ahead 2]` means you still have 2 commits sitting on your computer that
never reached GitHub. The push did not fully work. Go to Part 4.

### Step 6 — Verify with your own eyes (optional but reassuring)

Open a browser and go to:

```
https://github.com/minyigoh/ultimate-rules/commits/main
```

The top entry should be your new commit, timestamped a moment ago. If it is
there, the Content Desk can see it too.

**That's it.** Steps 1–5 are the whole routine. In normal use it is: double-click
`sync.bat`, open `_last_sync.log`, check for `push rc=0`.

---

## Part 3 — What `sync.bat` is doing while that window is open

You do not need this to push, but it makes the log readable. The log's nine
sections correspond to these nine actions:

1. **Clear stale locks** — deletes leftover `.lock` files. Git creates these
   while it works and removes them when done; a crashed run can leave one
   behind, which jams every later run. This clears them pre-emptively.
2. **Rebuild the desk** — runs `build_desk.py` to regenerate the Content Desk
   page from the latest data.
3. **Stage the files** — picks which files to include. It uses a deliberate
   *allow-list*, never "everything in this folder", because the render process
   produces ~1,800 throwaway image files (116 MB) per run that must never be
   uploaded.
4. **Commit** — bundles the staged files into one saved snapshot with a
   message. If `_commit_msg.txt` exists in the project root, its text is used
   as the message and the file is deleted afterwards.
5. **Pull** — downloads any changes made on GitHub since your last sync,
   e.g. approvals you clicked on the Content Desk, and replays your commit on
   top of them.
6. **Apply queued additions** — folds in any new calendar rows I queued, on top
   of whatever you decided today.
7. **Commit those additions.**
8. **Push** — sends it all to GitHub. The step from Part 2.
9. **Final state** — prints the result for you to check.

Steps 5 and 8 are the only ones that need the internet, and the only ones that
can fail because of someone else's changes.

---

## Part 4 — When it goes wrong

Work through by what the log actually says.

### "ABORTED — A rebase is already in progress"

Full text near the top of the log:

```
===== ABORTED =====
A rebase is already in progress in this repo, so sync.bat will not run.
```

**What it means:** a previous run got interrupted partway through combining
your changes with GitHub's, and left the repository in a half-finished state.
`sync.bat` refuses to run on top of that, on purpose — pushing through it would
bury the problem instead of fixing it.

**What to do:** double-click **`tools\unstick_rebase.bat`**. It checks that
nothing is genuinely broken, abandons the stuck step, then hands off to
`finish_rebase.bat` to complete the commit and push automatically. Then read
`tools\_last_unstick.log` to confirm.

*(This is the exact situation that stalled 11 August.)*

### "REBASE CONFLICT — NOT PUSHING"

**What it means:** you and I changed the *same lines of the same file*, and git
will not guess who is right. Almost always `calendar.md` or `review-state.json`
— the two files both the Content Desk and I write to. **This is a normal event,
not a malfunction.**

**What to do:** this one needs a judgement call, so send it to me — say
"sync.bat reported a conflict" and paste the log. The resolution rule is that
for any row that already existed, the Desk's version wins, because your
approvals are the truth; my version is kept only for rows I newly added. Once
resolved, `tools\finish_rebase.bat` finishes the job.

### "PUSH FAILED"

**What it means:** usually that GitHub changed while `sync.bat` was running —
you approved something on the Desk mid-run, for instance.

**What to do:** just **double-click `sync.bat` again.** The second run picks up
the change and normally succeeds. If it fails twice in a row, send me the log.

### "nothing staged - skipping commit"

**What it means:** there was nothing new to push. Not an error — I hadn't
changed anything since the last sync.

### It asks for a username and password

GitHub no longer accepts an account password here. If a credential box appears,
stop and tell me rather than guessing — this needs a Personal Access Token, and
I'll walk you through generating one.

### Nothing happens at all when you double-click

The window may be opening and closing too fast to see. Check
`tools\_last_sync.log` and look at its **modification time** in File Explorer
(right-click → Properties). If that timestamp is not from the last minute, the
script genuinely did not run — tell me.

---

## Part 5 — The rules that keep this safe

These are built into `sync.bat`. Worth knowing so you can spot a violation:

- **Never upload whole folders.** Only the explicit allow-list in step 3. This
  is what keeps the 116 MB of render frames out.
- **Never push through a conflict.** Resolve first. A pushed conflict corrupts
  the queue for everyone downstream.
- **The Content Desk is the authority on anything it has already seen.** If the
  Desk and I disagree about a row that already existed, the Desk wins.
- **The log is the truth, not the window.** The console window was rewritten in
  August 2026 specifically because it used to report success underneath a
  failed push. Trust `push rc=0` and the `## main...origin/main` line, nothing
  else.

---

## Quick reference card

| Situation | What to double-click |
|---|---|
| Normal push | `tools\sync.bat` |
| "A rebase is already in progress" | `tools\unstick_rebase.bat` |
| Conflict, after resolving | `tools\finish_rebase.bat` |
| Push failed once | `tools\sync.bat` again |

**Then always:** open `tools\_last_sync.log` → find `===== 8. push =====` →
confirm `push rc=0`.

---

*Rule content in this repository is quoted from the WFDF Rules of Ultimate
2025–2028.*
