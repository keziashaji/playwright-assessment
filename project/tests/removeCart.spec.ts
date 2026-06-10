import { test, expect } from '@playwright/test';

test('Remove from cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await expect(page.locator('#tbodyid')).toContainText('Samsung galaxy s6');
  await page.getByRole('link', { name: 'Delete' }).click();
  await page.waitForTimeout(3000);
  await expect(page.locator('#tbodyid')).not.toContainText('Samsung galaxy s6');
});
 
