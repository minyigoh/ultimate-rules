@echo off
REM ---------------------------------------------------------------------------
REM Repo sync for the Learn Ultimate Frisbee content pipeline.
REM
REM Why this exists: Cowork's SCHEDULED-task sandbox has no outbound network at
REM all (no DNS for github.com) and cannot delete files. That breaks three
REM things the daily render needs -- git pull, git push, and build_desk.py
REM (which starts with shutil.rmtree). All three work fine here on Windows, so
REM the sandbox writes files and this script does everything that needs the
REM network or a delete.
REM
REM Run it by double-clicking. It logs to tools\_last_sync.log.
REM If _commit_msg.txt exists in the repo root, its first line is the commit
REM subject and the rest is the body; otherwise a generic message is used.
REM The message file is deleted ONLY after a commit actually succeeds -- a
REM failed run must not destroy the message it still needs.
REM
REM Ordering note (changed 2026-08-11): there is exactly ONE pull, and it comes
REM AFTER the commit. The old script also pulled at the start, before staging,
REM where it could never work -- the sandbox always leaves unstaged changes, so
REM that pull aborted with "cannot pull with rebase: You have unstaged changes"
REM on every single run. It was dead code that made conflicts surface late, at
REM push time, instead of being handled deliberately.
REM
REM Error reporting note (changed 2026-08-11): this script uses delayed
REM expansion (!ERRORLEVEL!, not %ERRORLEVEL%). Inside a parenthesised block
REM %ERRORLEVEL% expands when the block is PARSED, not when the line runs, so
REM the old log printed a stale value every time -- it reported "push rc=0"
REM immediately below a rejected push. For a pipeline whose whole purpose is to
REM stop silent failures, a log that lies is worse than no log.
REM ---------------------------------------------------------------------------
setlocal enabledelayedexpansion
set REPO=%~dp0..
set LOG=%~dp0_last_sync.log

set GIT=git
where git >nul 2>&1 || set GIT="C:\Program Files\Git\cmd\git.exe"
set PY=python
where python >nul 2>&1 || set PY=py

cd /d "%REPO%"

set PUSHOK=0

REM Refuse to run on top of an unfinished rebase -- staging and committing into
REM one would bury the conflict instead of resolving it.
if exist ".git\rebase-merge" goto :midrebase
if exist ".git\rebase-apply" goto :midrebase

> "%LOG%" 2>&1 (
  echo ===== 1. clear stale locks =====
  if exist ".git\ORIG_HEAD.lock" del /f /q ".git\ORIG_HEAD.lock" && echo cleared ORIG_HEAD.lock
  if exist ".git\index.lock"     del /f /q ".git\index.lock"     && echo cleared index.lock
  if exist ".git\refs\heads\main.lock" del /f /q ".git\refs\heads\main.lock" && echo cleared main.lock
  echo.

  echo ===== 2. rebuild desk =====
  REM Safe here, before the pull: build_desk.py reads only social/dashboard's
  REM index.html and data.js plus the media it copies. The Worker never commits
  REM data.js -- it only ever touches calendar.md, review-state.json and reel
  REM feedback.md -- so pulling afterwards cannot stale the build.
  %PY% social\dashboard\build_desk.py
  set RC=!ERRORLEVEL!
  echo build_desk rc=!RC!
  echo.

  echo ===== 3. stage explicit paths only =====
  REM Never "git add content" wholesale -- v4/ is ~1800 files / 116 MB per run.
  REM
  REM _pending_additions.json MUST be staged here even though step 7 commits it
  REM again after draining. The daily task rewrites it, and "git pull --rebase"
  REM refuses to run with ANY tracked file modified-but-unstaged. On 2026-08-11
  REM it was the only dirty file left at step 5, the pull died with rc=128, and
  REM because nothing checked that rc the run sailed on and pushed into a remote
  REM it had never merged -- rejected, silently, after a successful commit.
  %GIT% add "content/*.md" content/review-state.json content/_pending_additions.json social/dashboard/data.js
  REM script-and-caption.md (incl. .vN archives) and script-feedback.md are the
  REM drafting-era files -- carousels now get scripts too, and both types get a
  REM script-feedback round when the desk asks for changes. Unstaged means
  REM invisible to the desk, which means it can never be approved.
  REM
  REM ONE PATTERN PER "git add". A pathspec matching nothing is a fatal error
  REM that aborts the whole invocation, silently dropping every later pattern
  REM on the same line -- on 2026-08-11 an absent script-feedback.md took the
  REM .mp4 and .py patterns down with it. Separate calls fail independently.
  REM The lesson JSONs are curriculum -- the source every script is written
  REM from -- and no pattern here ever covered them. A rules-array correction
  REM made in the sandbox (18.2.5.3 and 18.2.8 added to lesson 16 on
  REM 2026-08-18) would have been committed nowhere and silently lost on the
  REM next run, with the script still citing rules the curriculum did not
  REM list. Its own line, per the rule above.
  %GIT% add "content/lessons-*.json"
  %GIT% add "content/reel-*/script-and-caption*.md"
  %GIT% add "content/reel-*/*.mp4"
  %GIT% add "content/reel-*/*.py"
  %GIT% add "content/reel-*/feedback.md"
  %GIT% add "content/reel-*/script-feedback.md"
  %GIT% add "content/carousel-post-*/script-and-caption*.md"
  %GIT% add "content/carousel-post-*/caption.md"
  %GIT% add "content/carousel-post-*/*.png"
  REM The .svg sources are tracked for carousel-post-1 but this line was missing,
  REM so carousel-post-2's nine SVGs would have stayed untracked and unpushed --
  REM the PNGs are the deliverable, but without the SVGs no later run can edit a
  REM slide without re-deriving it. Its own line, per the rule above.
  %GIT% add "content/carousel-post-*/*.svg"
  %GIT% add "content/carousel-post-*/*.py"
  %GIT% add "content/carousel-post-*/script-feedback.md"
  %GIT% add docs/desk tools/sync.bat tools/finish_rebase.bat tools/apply_additions.py .gitignore
  REM The desk SOURCE. docs/desk is the build output and was staged above, so a
  REM fix to index.html would deploy while the file it came from stayed dirty
  REM forever -- and would be lost on a fresh clone, silently reverting the
  REM deployed desk on the next rebuild. Found 2026-08-19 while fixing the
  REM silent review-state.json read failure. Its own line, per the rule above.
  %GIT% add social/dashboard/index.html
  %GIT% add social/dashboard/worker/worker.js social/dashboard/worker/README.md
  REM unstick_rebase.bat was written on 2026-08-11 to break the finish_rebase
  REM loop, but was never added to this list -- so it stayed untracked and no
  REM run could ever push it. A helper that only exists on one machine is not
  REM a helper. Its own line, so a missing file cannot abort the invocation.
  %GIT% add tools/unstick_rebase.bat
  REM take_desk_version.bat, same reasoning as the line above: it resolves the
  REM review-state.json conflict in the Desk's favour, which is the one git
  REM command in this pipeline whose --ours/--theirs sense is inverted.
  %GIT% add tools/take_desk_version.bat
  %GIT% diff --cached --stat
  echo.

  echo ===== 4. commit =====
  set COMMITTED=0
  %GIT% diff --cached --quiet
  if !ERRORLEVEL! EQU 0 (
    echo nothing staged - skipping commit
  ) else (
    if exist "_commit_msg.txt" (
      %GIT% commit -F "_commit_msg.txt"
    ) else (
      %GIT% commit -m "content pipeline sync"
    )
    set RC=!ERRORLEVEL!
    echo commit rc=!RC!
    if !RC! EQU 0 set COMMITTED=1
  )
  echo.

  echo ===== 5. pull --rebase =====
  %GIT% pull --rebase origin main
  set RC=!ERRORLEVEL!
  echo pull rc=!RC!
  echo.

  set CONFLICT=0
  if exist ".git\rebase-merge" set CONFLICT=1
  if exist ".git\rebase-apply" set CONFLICT=1

  REM A pull can fail WITHOUT leaving a rebase in progress -- "cannot pull with
  REM rebase: You have unstaged changes" exits 128 and starts nothing. Checking
  REM only for a rebase directory therefore misses it entirely, and a run that
  REM never merged the remote cannot possibly fast-forward it. Pushing anyway
  REM just converts a clear local error into a confusing rejection at the end.
  REM Never push on top of a pull that did not succeed.
  set PULLOK=1
  if !RC! NEQ 0 set PULLOK=0

  echo ===== 6. apply queued additions =====
  REM This runs AFTER the pull, against the freshly merged tree, which is the
  REM whole point. The daily task no longer writes calendar.md or
  REM review-state.json -- it queues its new rows and entries in
  REM content/_pending_additions.json instead, and they get folded in here on
  REM top of whatever the desk did today. Nothing to conflict over.
  REM Idempotent: rows are keyed on date + post title, entries on post id, and
  REM anything already present is left exactly as the desk left it.
  if "!CONFLICT!"=="1" (
    echo skipped - repo is mid-rebase, resolve first
  ) else (
    %PY% tools\apply_additions.py
    set RC=!ERRORLEVEL!
    echo apply_additions rc=!RC!
    if !RC! NEQ 0 echo ADDITIONS FAILED - calendar/review-state not updated.
  )
  echo.

  echo ===== 7. commit the additions =====
  if "!CONFLICT!"=="1" (
    echo skipped - repo is mid-rebase
  ) else (
    %GIT% add content/calendar.md content/review-state.json content/_pending_additions.json
    %GIT% diff --cached --quiet
    if !ERRORLEVEL! EQU 0 (
      echo no additions to commit
    ) else (
      %GIT% commit -m "apply queued calendar and review-state additions"
      echo additions commit rc=!ERRORLEVEL!
    )
  )
  echo.

  echo ===== 8. push =====
  REM A conflict can still happen on any file the task and the Worker both
  REM touch. Do not push through it -- resolve, then run finish_rebase.bat.
  if "!CONFLICT!"=="1" (
    echo SYNC FAILED: REBASE CONFLICT - NOT PUSHING.
    echo Conflicted files are marked UU below. Resolution rule: for any row that
    echo already existed, the remote/desk version wins - it is the truth. Keep
    echo the local version only for rows this run newly appended.
    echo Then double-click tools\finish_rebase.bat.
    %GIT% status --short
  ) else if "!PULLOK!"=="0" (
    echo SYNC FAILED: THE PULL DID NOT SUCCEED - NOT PUSHING.
    echo git pull --rebase exited non-zero without starting a rebase, so this
    echo repo has not merged what is on main. Pushing would be rejected anyway.
    echo The usual cause is a tracked file left modified-but-unstaged; step 3
    echo is supposed to stage everything this pipeline writes, so if you see
    echo this, something new is being written that step 3 does not know about.
    %GIT% status --short
  ) else (
    %GIT% push origin main
    set RC=!ERRORLEVEL!
    echo push rc=!RC!
    if !RC! EQU 0 (set PUSHOK=1) else (echo SYNC FAILED: PUSH REJECTED - nothing reached GitHub or the desk.)
  )
  echo.

  echo ===== 9. final state =====
  %GIT% log --oneline -3
  %GIT% status -sb
  echo.
  REM One unambiguous verdict line, always last. Everything above it is detail.
  REM The daily task greps for this at the start of its next run, so a failed
  REM sync surfaces in the next morning's report instead of being discovered
  REM days later by noticing the desk is stale.
  if "!PUSHOK!"=="1" (
    echo SYNC RESULT: OK - main is pushed and the desk is current.
  ) else (
    echo SYNC RESULT: FAILED - local work has NOT reached GitHub or the desk.
  )
  echo ===== DONE =====
)

REM Only now, and only if the commit landed, is the message file expendable.
if "%COMMITTED%"=="1" if exist "_commit_msg.txt" del /f /q "_commit_msg.txt"
endlocal
goto :eof

:midrebase
> "%LOG%" 2>&1 (
  echo ===== ABORTED =====
  echo A rebase is already in progress in this repo, so sync.bat will not run.
  echo Staging and committing on top of one would bury the conflict rather than
  echo resolve it.
  echo.
  echo Fix the conflicted files, then double-click tools\finish_rebase.bat.
  echo.
  %GIT% status -sb
  echo ===== DONE =====
)
endlocal
goto :eof
