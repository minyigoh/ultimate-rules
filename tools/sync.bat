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
REM ---------------------------------------------------------------------------
setlocal
set REPO=%~dp0..
set LOG=%~dp0_last_sync.log

set GIT=git
where git >nul 2>&1 || set GIT="C:\Program Files\Git\cmd\git.exe"
set PY=python
where python >nul 2>&1 || set PY=py

cd /d "%REPO%"

> "%LOG%" 2>&1 (
  echo ===== 1. clear stale locks =====
  if exist ".git\ORIG_HEAD.lock" del /f /q ".git\ORIG_HEAD.lock" && echo cleared ORIG_HEAD.lock
  if exist ".git\index.lock"     del /f /q ".git\index.lock"     && echo cleared index.lock
  if exist ".git\refs\heads\main.lock" del /f /q ".git\refs\heads\main.lock" && echo cleared main.lock
  echo.
  echo ===== 2. pull --rebase =====
  %GIT% pull --rebase origin main
  echo pull rc=%ERRORLEVEL%
  echo.
  echo ===== 3. rebuild desk =====
  %PY% social\dashboard\build_desk.py
  echo build_desk rc=%ERRORLEVEL%
  echo.
  echo ===== 4. stage explicit paths only =====
  REM Never "git add content" wholesale -- v4/ is ~1800 files / 116 MB per run.
  %GIT% add "content/*.md" content/review-state.json social/dashboard/data.js
  %GIT% add "content/reel-*/script-and-caption.md" "content/reel-*/*.mp4" "content/reel-*/*.py" "content/reel-*/feedback.md"
  %GIT% add "content/carousel-post-*/caption.md" "content/carousel-post-*/*.png" "content/carousel-post-*/*.py"
  %GIT% add docs/desk tools/sync.bat .gitignore
  %GIT% diff --cached --stat
  echo.
  echo ===== 5. commit =====
  %GIT% diff --cached --quiet && echo nothing staged - skipping commit || (
    if exist "_commit_msg.txt" ( %GIT% commit -F "_commit_msg.txt" ) else ( %GIT% commit -m "content pipeline sync" )
  )
  echo commit rc=%ERRORLEVEL%
  echo.
  echo ===== 6. pull --rebase again, then push =====
  %GIT% pull --rebase origin main
  %GIT% push origin main
  echo push rc=%ERRORLEVEL%
  echo.
  echo ===== 7. final state =====
  %GIT% log --oneline -3
  %GIT% status -sb
  echo ===== DONE =====
)

if exist "_commit_msg.txt" del /f /q "_commit_msg.txt"
endlocal
