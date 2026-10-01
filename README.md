# Playwright QA practice — runs entirely online, no local install

Five self-graded "assessment style" tasks in `tests/`, each a worked scenario
from the prep plan with a `// TODO` left for you to fill in. Matching answers
live in `solutions/` — don't open one until you've attempted the task.

## 1. Get this into GitHub (one-time, ~2 minutes)

1. Unzip the file you downloaded.
2. Go to [github.com/new](https://github.com/new) and create a new repository
   (any name, e.g. `playwright-practice`). Leave it empty — don't add a README.
3. On the new repo's page, click **uploading an existing file**.
4. Drag the *contents* of the unzipped folder (not the zip itself) into the
   upload box — select all the files and folders together
   (`.devcontainer`, `tests`, `solutions`, `storage`, `package.json`,
   `playwright.config.ts`, `.gitignore`, this `README.md`) and drop them in.
   Commit directly to `main`.

## 2. Open it in a Codespace (fully in the browser)

1. On the repo page, click the green **Code** button → **Codespaces** tab →
   **Create codespace on main**.
2. Wait 1–3 minutes while it builds the container and runs
   `npm install && npx playwright install --with-deps chromium`
   automatically (via `.devcontainer/devcontainer.json`) — you'll see this
   happening in the terminal at the bottom.
3. You now have a full VS Code environment in your browser, no local setup.
   GitHub's free tier gives you 120 core-hours/month (60 hours on the
   default 2-core machine) — far more than you need for a few days of practice.

## 3. Attempt the tasks

In the Codespace terminal:

```bash
npx playwright test              # runs everything headless, prints pass/fail
npx playwright test --ui         # interactive mode — step through, see the browser, time-travel debug
npx playwright test tests/01-login-flow.spec.ts   # run just one task
```

Open each file in `tests/`, read the comment block (that's your "assessment
question"), and replace the `// TODO` with your implementation. Re-run until
it's green.

If `--ui` mode opens on a forwarded port, Codespaces will show a notification
to open it in the browser — click that, or check the **Ports** tab at the
bottom panel.

## 4. Check yourself

Once a task passes, compare your answer to the matching file in `solutions/`:

```bash
npx playwright test solutions/01-login-flow.solution.ts
```

Look for differences in approach, not just whether both pass — e.g. did you
use a resilient locator (`getByRole`, `getByLabel`) or a brittle CSS id?

## 5. Debugging a failure

```bash
npx playwright show-report       # opens the last HTML report (screenshots, traces)
```

On a failure, Playwright attaches a trace — open it from the HTML report and
use the timeline to see exactly what the page looked like at each step. This
is the same Trace Viewer workflow covered as Scenario 6 in the main prep doc.

## What each task practices

| File | Topic |
| --- | --- |
| `01-login-flow` | Resilient locators (`getByLabel`/`getByRole`), basic login flow |
| `02-dynamic-wait` | Auto-waiting web-first assertions instead of `waitForTimeout` |
| `03-search-results` | Interacting with a real third-party site, asserting on a result set |
| `04-network-mocking` | `page.route()` to simulate a failed API response |
| `05-auth-reuse` | `storageState` to skip logging in through the UI every test |

## SQL practice (also zero local setup)

- [SQLBolt](https://sqlbolt.com) — interactive, in-browser lessons and
  exercises if you want a refresher on joins/aggregation first.
- [DB Fiddle](https://www.db-fiddle.com) — paste a `CREATE TABLE` + sample
  rows and run arbitrary queries in-browser. Good for re-running the exact
  queries from the prep doc (duplicate emails, orphaned orders) against your
  own sample data.

## If a site's selectors have changed

These are public demo sites and occasionally get tweaked. If a task fails
for a reason unrelated to your code, regenerate the locator instead of
guessing:

```bash
npx playwright codegen <url>
```

This records your clicks and prints working Playwright code — useful both
as a fallback here and as a trick worth knowing for the real assessment.

## Backup option: Gitpod

If Codespaces is ever unavailable, the same repo works on
[gitpod.io](https://gitpod.io) by prefixing the repo URL:
`https://gitpod.io/#https://github.com/<you>/<repo>` — it reads the same
`.devcontainer` config.
