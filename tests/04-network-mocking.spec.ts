/**
 * ASSESSMENT TASK 4 — Mock a failed API response
 *
 * No real site needed here — this tests your understanding of page.route(),
 * the way you'd test an error state without being able to break a real backend.
 *
 * Write a test that:
 *   1. Uses page.route() to intercept any request matching "**\/api/data" and
 *      fulfil it with status 500 and JSON body { "error": "Server error" }.
 *   2. Navigates to "about:blank" (no real page needed).
 *   3. Inside page.evaluate(), calls fetch('https://example.com/api/data')
 *      and returns its status and parsed JSON body.
 *   4. Asserts the returned status is 500 and the body's "error" field is
 *      "Server error".
 */
import { test, expect } from '@playwright/test';

test('mocks a failed API response', async ({ page }) => {
  // TODO: implement
});
