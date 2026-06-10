import { test, expect } from '@playwright/test';
test('empty checkout', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded'});
  await page.getByRole('link', {name: 'Samsung galaxy s6'}).click();
  page.once('dialog', async dialog =>
     {await dialog.accept();});
  await page.getByRole('link', {name: 'Add to cart'}).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', {name: 'Cart',exact: true}).click();
  await page.getByRole('button', {name: 'Place Order'}).click();
  await expect(page.locator('#orderModal')).toBeVisible();
  await page.getByRole('button', {name: 'Purchase'}).click();
});