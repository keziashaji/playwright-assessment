import { test, expect } from '@playwright/test';

test('Complete purchase', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await expect(page.getByRole("link",{ name: 'Add to cart' })).toBeVisible();
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
 await page.locator('#name').fill('Kezia');
  await page.locator('#country').fill('India');
  await page.locator('#city').fill('Wayanad');
  await page.locator('#card').fill('123456789');
  await page.locator('#month').fill('06');
  await page.locator('#year').fill('2026');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(
    page.getByText('Thank you for your purchase!')
  ).toBeVisible();
});