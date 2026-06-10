import { test, expect } from '@playwright/test';

test('Logout', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('standard_user');
  await page.locator('#loginpassword').fill('secret_sauce');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole("link",{ name:"Log in"})).toBeVisible();
});