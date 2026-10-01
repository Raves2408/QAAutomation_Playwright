import { test, expect } from '@playwright/test';

test('reveals hidden text after loading', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  await page.getByRole('button', { name: 'Start' }).click();
  // expect(...).toBeVisible() retries automatically until the element shows up
  // (give it a generous timeout since the demo page has a built-in delay).
  await expect(page.locator('#finish')).toBeVisible({ timeout: 10000 });
  await expect(page.locator('#finish')).toHaveText('Hello World!');
});
