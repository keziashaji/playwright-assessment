import { test, expect } from '@playwright/test';

test('multiple products', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Nokia lumia 1520' }).click();
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.waitForTimeout(3000);
  await expect(page.locator('#tbodyid')).toContainText('Samsung galaxy s6');
});