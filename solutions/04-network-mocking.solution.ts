import { test, expect } from '@playwright/test';

test('mocks a failed API response', async ({ page }) => {
  await page.route('**/api/data', (route) =>
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Server error' }),
    })
  );

  await page.goto('about:blank');

  const result = await page.evaluate(async () => {
    const res = await fetch('https://example.com/api/data');
    return { status: res.status, body: await res.json() };
  });

  expect(result.status).toBe(500);
  expect(result.body.error).toBe('Server error');
});
