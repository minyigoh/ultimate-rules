@echo off
REM ---------------------------------------------------------------------------
REM Finish a rebase that sync.bat stopped on, then push.
REM
REM When this is needed: sync.bat commits, pulls --rebase, and hits a conflict
REM in content/calendar.md or content/review-state.json -- the two files both
REM the sandbox and the Worker write. It refuses to push through a conflict, so
REM the repo is left mid-rebase.
REM
REM Before running: resolve the conflicts by hand (or have Claude do it) so no
REM "<<<<<<<" markers remain. Resolution rule -- rows that already existed take
REM the remote/desk version, rows the run newly appended stay local.
REM
REM Run it by double-clicking. It logs to tools\_last_finish.log.
REM If _commit_msg2.txt exists, any post-rebase changes are committed with it as
REM a second commit; the file is deleted only after that commit succeeds.
REM ---------------------------------------------------------------------------
setlocal enabledelayedexpansion
set REPO=%~dp0..
set LOG=%~dp0_last_finish.log

set GIT=git
where git >nul 2>&1 || set GIT="C:\Program Files\Git\cmd\git.exe"
set PY=python
where python >nul 2>&1 || set PY=py

cd /d "%REPO%"
set GIT_EDITOR=true

REM findstr sets errorlevel 0 when it FINDS something, so a hit here means
REM unresolved markers are still in the tree.
set MARKERS=0
findstr /s /m /c:"<<<<<<<" "content\*.md" "content\*.json" "social\dashboard\data.js" >nul 2>&1 && set MARKERS=1
if "%MARKERS%"=="1" goto :markers

> "%LOG%" 2>&1 (
  echo ===== 1. clear stale locks =====
  if exist ".git\ORIG_HEAD.lock" del /f /q ".git\ORIG_HEAD.lock" && echo cleared ORIG_HEAD.lock
  if exist ".git\index.lock"     del /f /q ".git\index.lock"     && echo cleared index.lock
  if exist ".git\refs\heads\main.lock" del /f /q ".git\refs\heads\main.lock" && echo cleared main.lock
  echo.

  echo ===== 2. no conflict markers remain =====
  echo checked content\*.md, content\*.json, social\dashboard\data.js - clean
  %GIT% diff --check
  echo.

  echo ===== 3. stage the resolution and continue =====
  REM Stage whatever git actually reports as unmerged, rather than the two file
  REM names this script used to hardcode. calendar.md and review-state.json are
  REM the usual conflict, but not the only one: on 2026-08-22 the Worker and the
  REM sandbox both created content/reel-18/feedback.md in the same window (the
  REM desk wrote the rejection round, the run appended its Regenerated block),
  REM and an unmerged path that never gets staged makes "rebase --continue"
  REM refuse outright. Marker-free but unstaged is still unmerged to git.
  set COMMITTED2=0
  if exist ".git\rebase-merge" (
    for /f "delims=" %%f in ('%GIT% diff --name-only --diff-filter^=U') do %GIT% add "%%f"
    %GIT% rebase --continue
    set RC=!ERRORLEVEL!
    echo rebase rc=!RC!
  ) else (
    if exist ".git\rebase-apply" (
      for /f "delims=" %%f in ('%GIT% diff --name-only --diff-filter^=U') do %GIT% add "%%f"
      %GIT% rebase --continue
      set RC=!ERRORLEVEL!
      echo rebase rc=!RC!
    ) else (
      echo no rebase in progress - nothing to continue, moving on
    )
  )
  echo.

  echo ===== 4. apply queued additions =====
  REM sync.bat skips this when it stops on a conflict, so do it here instead --
  REM now, after the rebase, against the merged tree.
  if exist ".git\rebase-merge" (
    echo skipped - still mid-rebase
  ) else (
    %PY% tools\apply_additions.py
    set RC=!ERRORLEVEL!
    echo apply_additions rc=!RC!
    if !RC! NEQ 0 echo ADDITIONS FAILED - calendar/review-state not updated.
  )
  echo.

  echo ===== 5. commit anything left over =====
  %GIT% add "content/*.md" content/review-state.json content/_pending_additions.json social/dashboard/data.js
  %GIT% add docs/desk tools/sync.bat tools/finish_rebase.bat tools/apply_additions.py .gitignore
  REM Undated evergreen assets, mirroring the block sync.bat gained on
  REM 2026-08-22. Own lines: a pathspec matching nothing is fatal and would
  REM silently drop every later pattern sharing its line.
  %GIT% add "social/*.md"
  %GIT% add "content/hook-post-*/*.png"
  %GIT% add "content/hook-post-*/*.py"
  %GIT% add "social/highlights/*.png"
  %GIT% add "social/highlights/*.svg"
  %GIT% add "social/highlights/*.py"
  %GIT% diff --cached --quiet
  if !ERRORLEVEL! EQU 0 (
    echo nothing further staged - skipping second commit
  ) else (
    %GIT% diff --cached --stat
    if exist "_commit_msg2.txt" (
      %GIT% commit -F "_commit_msg2.txt"
    ) else (
      %GIT% commit -m "content pipeline: post-rebase follow-up"
    )
    set RC=!ERRORLEVEL!
    echo commit rc=!RC!
    if !RC! EQU 0 set COMMITTED2=1
  )
  echo.

  echo ===== 6. push =====
  if exist ".git\rebase-merge" (
    echo STILL MID-REBASE - not pushing. Resolve and run this again.
    %GIT% status --short
  ) else (
    %GIT% push origin main
    set RC=!ERRORLEVEL!
    echo push rc=!RC!
    if !RC! NEQ 0 echo PUSH FAILED - nothing reached GitHub or the desk.
  )
  echo.

  echo ===== 7. final state =====
  %GIT% log --oneline -5
  %GIT% status -sb
  echo ===== DONE =====
)

if "%COMMITTED2%"=="1" if exist "_commit_msg2.txt" del /f /q "_commit_msg2.txt"
endlocal
goto :eof

:markers
> "%LOG%" 2>&1 (
  echo ===== ABORTED =====
  echo Unresolved conflict markers are still present in these files:
  findstr /s /m /c:"<<<<<<<" "content\*.md" "content\*.json" "social\dashboard\data.js"
  echo.
  echo Resolution rule: rows that already existed take the remote/desk version,
  echo rows this run newly appended stay local. Remove every ^<^<^<^<^<^<^<,
  echo =======, and ^>^>^>^>^>^>^> line, then run this script again.
  echo ===== DONE =====
)
endlocal
goto :eof
