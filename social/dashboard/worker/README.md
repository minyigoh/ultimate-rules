# Deploying the sync Worker

Fifteen minutes, no coding, no terminal required — everything below happens in
the Cloudflare dashboard and GitHub's website.

## What this is for

The Content Desk (`social/dashboard/index.html`, published at
`minyigoh.github.io/ultimate-rules/desk/`) is a public page. It can never hold
a credential able to write to your repo — anyone could open dev tools and take
it. This Worker is the one thing that holds that credential. The desk sends it
your approve/reject clicks and your *Mark as posted* toggles; it commits them
to `content/calendar.md` and `content/review-state.json`.

Until you finish this setup, the desk works exactly as it always has —
approvals stay local to whichever browser made them. Nothing breaks by
skipping this; you just don't get the cross-device sync until it's done.

## 1 — Generate a GitHub token

This token can *only* touch this one repo, and *only* its contents — nothing
else on your account.

1. Go to [github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new)
2. **Token name:** `luf-content-desk-sync`
3. **Expiration:** whatever you're comfortable with (90 days is fine — GitHub
   will remind you to renew)
4. **Repository access:** *Only select repositories* → choose `minyigoh/ultimate-rules`
5. **Permissions** → **Repository permissions** → find **Contents** → set to
   **Read and write**. Leave everything else as *No access*.
6. Click **Generate token**, then **copy it**. GitHub shows it exactly once.

Keep this token somewhere you can paste it from in step 3 — you won't type it
anywhere except into Cloudflare.

## 2 — Create the Worker

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** in the left sidebar
2. Click **Create** → **Workers** → **Create Worker**
3. Give it a name (the default random one is fine, or rename it to
   `luf-content-desk-sync`) → **Deploy** (this deploys Cloudflare's placeholder
   "Hello World" — you'll replace it next)
4. Click **Edit code** (or **Quick edit**)
5. Delete everything in the editor and paste in the full contents of
   [`worker.js`](worker.js) from this folder
6. Click **Deploy** (or **Save and deploy**)

## 3 — Set the two secrets

Still on this Worker's page:

1. Go to **Settings** → **Variables and Secrets**
2. Add secret **`GITHUB_TOKEN`** → paste the token from step 1 → **Encrypt**
3. Add secret **`DESK_PASSPHRASE`** → make up any passphrase (this is what
   you'll type into the desk once, in any browser you approve from — it stops
   a random visitor with your public desk URL from writing to your calendar)
4. Save / redeploy if prompted

## 4 — Copy the Worker's URL

On the Worker's overview page you'll see a URL like:

```
https://luf-content-desk-sync.<your-subdomain>.workers.dev
```

Copy it.

## 5 — Point the desk at it

Tell Claude the URL (or edit it yourself): open
`social/dashboard/index.html`, find this line near the top of the `<script>`
block:

```js
const SYNC_URL = '';
```

Paste the URL between the quotes, then run:

```bash
python social/dashboard/build_desk.py
```

and push. That rebuilds `docs/desk/` with sync switched on.

## Test it

Open the live desk, approve or reject anything. First time, it'll ask for the
passphrase from step 3 — that's expected, type it in (stored in that browser
after that, not asked again). Then check
[`content/calendar.md`](../../content/calendar.md) on GitHub a few seconds
later — the row's Status column should have updated, with a new commit
authored by whichever account the token belongs to.

If nothing happens: open the Worker's **Logs** tab in the Cloudflare
dashboard while you click Approve again — it shows exactly which step failed
(wrong passphrase, GitHub rejected the token, etc.).

## Rotating or revoking

- **Change the passphrase:** update the `DESK_PASSPHRASE` secret in the
  Worker, then clear it from any browser's storage so it re-prompts
  (`localStorage.removeItem('luf-desk-pass')` in that browser's console, or
  just clear site data for the desk's URL).
- **Revoke access entirely:** delete the GitHub token at
  [github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta) —
  the Worker immediately loses the ability to write anything.
