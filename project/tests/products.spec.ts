import { test, expect } from '@playwright/test';

test('products visible', async ({ page }) =>{
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await expect(page.locator(" .name")).toHaveText("Samsung galaxy s6");
});