import { test, expect } from '@playwright/test';

test('Categories', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Phones' }).click();
  await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toBeVisible();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await expect(page.getByRole('link', { name: 'Sony vaio i5' })).toBeVisible();
  await page.getByRole('link', { name: 'Monitors' }).click();
  await expect(page.getByRole('link', { name: 'Apple monitor 24' })).toBeVisible();

});

 

