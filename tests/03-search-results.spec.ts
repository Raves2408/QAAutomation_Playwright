/**
 * ASSESSMENT TASK 3 — Search and assert results
 *
 * Site: https://automationexercise.com/products
 *
 * Write a test that:
 *   1. Navigates to the products page.
 *   2. Searches for "dress" using the search box (id="search_product",
 *      submit button id="submit_search" — correct as of this writing).
 *   3. Asserts at least one product card appears in the results
 *      (results render inside elements with class "product-image-wrapper").
 *
 * If a selector has changed since this was written, run this in the
 * terminal to record the current one, then update the test:
 *   npx playwright codegen https://automationexercise.com/products
 */
import { test, expect } from '@playwright/test';

test('searching for a product shows results', async ({ page }) => {
  // TODO: implement
});
