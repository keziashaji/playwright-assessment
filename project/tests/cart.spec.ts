import { test, expect } from '@playwright/test';
test('Added to cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/',{waitUntil: "domcontentloaded"});
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.waitForTimeout(2000);
  await expect(page.locator('#tbodyid')).toContainText('Samsung galaxy s6');
});