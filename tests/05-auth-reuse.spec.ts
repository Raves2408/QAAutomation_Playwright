/**
 * ASSESSMENT TASK 5 — Reuse an authenticated session (storageState)
 *
 * Site: https://www.saucedemo.com/ (same login as Task 1)
 *
 * Write TWO tests in this file, in this order:
 *
 *   1. "login and save state" — logs in with standard_user/secret_sauce,
 *      confirms the URL contains "inventory.html", then saves the session
 *      with context.storageState({ path: 'storage/auth.json' }).
 *
 *   2. "reuse saved state" — using the `browser` fixture, opens a NEW
 *      context with { storageState: 'storage/auth.json' }, navigates
 *      straight to https://www.saucedemo.com/inventory.html, and asserts
 *      the URL still contains "inventory.html" (i.e. it was NOT redirected
 *      back to the login page).
 *
 * This is the pattern real suites use to avoid logging in through the UI
 * before every single test.
 */
import { test, expect } from '@playwright/test';

test('login and save state', async ({ page, context }) => {
  // TODO: implement
});

test('reuse saved state', async ({ browser }) => {
  // TODO: implement — create a new context with the saved storageState
});
