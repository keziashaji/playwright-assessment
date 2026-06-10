import { test, expect } from '@playwright/test';

test('Invalid login', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('vfsdsfv');
  await page.locator('#loginpassword').fill('vfbdgfv');
  page.once('dialog', async dialog => {
    await dialog.dismiss();
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole("button",{ name:"Log in"})) .toBeVisible()
});