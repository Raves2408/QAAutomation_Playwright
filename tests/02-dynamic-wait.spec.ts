/**
 * ASSESSMENT TASK 2 — Handling dynamically loaded content
 *
 * Site: https://the-internet.herokuapp.com/dynamic_loading/1
 *
 * This page has a "Start" button. Clicking it hides the button, shows a
 * loading bar for a few seconds, then reveals a hidden element containing
 * the text "Hello World!".
 *
 * Write a test that:
 *   1. Navigates to the page.
 *   2. Clicks "Start".
 *   3. Asserts "Hello World!" becomes visible — WITHOUT using page.waitForTimeout().
 *
 * Hint: Playwright's web-first assertions (expect(locator).toBeVisible()) already
 * retry on their own — that's the actual fix here, not a manual wait.
 */
import { test, expect } from '@playwright/test';

test('reveals hidden text after loading', async ({ page }) => {
  // TODO: implement — no waitForTimeout allowed
});
