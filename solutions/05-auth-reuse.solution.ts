import { test, expect } from '@playwright/test';

test('login and save state', async ({ page, context }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL(/inventory\.html/);
  await context.storageState({ path: 'storage/auth.json' });
});

test('reuse saved state', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'storage/auth.json' });
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveURL(/inventory\.html/);
  await context.close();
});
