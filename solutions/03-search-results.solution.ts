import { test, expect } from '@playwright/test';

test('searching for a product shows results', async ({ page }) => {
  await page.goto('https://automationexercise.com/products');
  await page.locator('#search_product').fill('dress');
  await page.locator('#submit_search').click();
  await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
});
