@echo off
REM ---------------------------------------------------------------------------
REM Unstick the rebase that finish_rebase.bat cannot finish, then hand off.
REM
REM Why this exists (diagnosed 2026-08-11 by daily-reel-render):
REM
REM   sync.bat pulled --rebase and stopped replaying commit 2d4c255 ("Draft
REM   reel 8, reel 9 and the first weekly recap carousel"). finish_rebase.bat
REM   ran twice. Each time its step 3 staged ONLY calendar.md and
REM   review-state.json, `git rebase --continue` refused, and its step 5
REM   fallback committed the leftovers anyway -- producing d6bfbe0 and then
REM   c661d20 on a detached HEAD. So the commit's content HAS landed, twice
REM   over, but .git\rebase-merge is still sitting there and step 6 keeps
REM   refusing to push. Running finish_rebase.bat again just repeats the loop:
REM   it has no `--skip` path.
REM
REM   Verified before writing this script:
REM     - no unmerged index entries, no "<<<<<<<" markers anywhere in the tree
REM     - git-rebase-todo is empty; the single pick is already in `done`
REM     - HEAD already contains reel-8, reel-9 and carousel-post-2's
REM       script-and-caption.md, the desk HTML and data.js, byte-identical
REM     - the ONLY parts of 2d4c255 not in HEAD are its edits to calendar.md
REM       and review-state.json -- which c661d20 ("Stop the daily task writing
REM       calendar.md") deliberately replaced with the _pending_additions.json
REM       queue. Replaying them is exactly what we do not want.
REM
REM   So `git rebase --skip` is the correct finish, not `--continue`. It drops
REM   the already-landed pick, moves refs/heads/main to c661d20 and reattaches
REM   HEAD. Nothing is lost.
REM
REM Run it by double-clicking. It logs to tools\_last_unstick.log, then calls
REM finish_rebase.bat, which does apply_additions -> commit -> push as normal.
REM ---------------------------------------------------------------------------
setlocal enabledelayedexpansion
set REPO=%~dp0..
set LOG=%~dp0_last_unstick.log

set GIT=git
where git >nul 2>&1 || set GIT="C:\Program Files\Git\cmd\git.exe"

cd /d "%REPO%"
set GIT_EDITOR=true

REM Same guard finish_rebase.bat uses: a hit means markers are still present.
set MARKERS=0
findstr /s /m /c:"<<<<<<<" "content\*.md" "content\*.json" "social\dashboard\data.js" >nul 2>&1 && set MARKERS=1
if "%MARKERS%"=="1" goto :markers

> "%LOG%" 2>&1 (
  echo ===== 1. clear stale locks =====
  if exist ".git\ORIG_HEAD.lock" del /f /q ".git\ORIG_HEAD.lock" && echo cleared ORIG_HEAD.lock
  if exist ".git\index.lock"     del /f /q ".git\index.lock"     && echo cleared index.lock
  if exist ".git\refs\heads\main.lock" del /f /q ".git\refs\heads\main.lock" && echo cleared main.lock
  echo.

  echo ===== 2. state before =====
  %GIT% log --oneline -3
  %GIT% status -sb
  echo.

  echo ===== 3. is there actually a rebase to skip? =====
  if not exist ".git\rebase-merge" if not exist ".git\rebase-apply" (
    echo no rebase in progress - nothing to unstick, handing off
    goto :handoff
  )

  echo ===== 4. refuse to skip if anything is genuinely unmerged =====
  %GIT% diff --name-only --diff-filter=U > "%TEMP%\_unmerged.txt"
  for %%A in ("%TEMP%\_unmerged.txt") do set SZ=%%~zA
  if not "!SZ!"=="0" (
    echo UNMERGED PATHS PRESENT - not skipping. Resolve these first:
    type "%TEMP%\_unmerged.txt"
    goto :done
  )
  echo none - safe to skip
  echo.

  echo ===== 5. skip the already-landed pick =====
  %GIT% rebase --skip
  set RC=!ERRORLEVEL!
  echo rebase --skip rc=!RC!
  if !RC! NEQ 0 (
    echo SKIP FAILED - stopping here rather than guessing.
    %GIT% status -sb
    goto :done
  )
  echo.

  echo ===== 6. state after =====
  %GIT% log --oneline -3
  %GIT% status -sb
  if exist ".git\rebase-merge" echo STILL MID-REBASE - do not run finish_rebase yet.
  if exist ".git\rebase-apply" echo STILL MID-REBASE - do not run finish_rebase yet.
  echo.

  :handoff
  echo ===== 7. handing off to finish_rebase.bat =====
)

if exist ".git\rebase-merge" goto :stillstuck
if exist ".git\rebase-apply" goto :stillstuck
call "%~dp0finish_rebase.bat"
echo Unstick log: tools\_last_unstick.log
echo Finish log:  tools\_last_finish.log
endlocal
goto :eof

:stillstuck
echo Still mid-rebase after the skip. See tools\_last_unstick.log - not pushing.
endlocal
goto :eof

:done
echo See tools\_last_unstick.log
endlocal
goto :eof

:markers
> "%LOG%" 2>&1 (
  echo ===== ABORTED =====
  echo Unresolved conflict markers are still present:
  findstr /s /m /c:"<<<<<<<" "content\*.md" "content\*.json" "social\dashboard\data.js"
  echo Resolve them, then run this again.
  echo ===== DONE =====
)
echo Aborted - conflict markers present. See tools\_last_unstick.log
endlocal
goto :eof
