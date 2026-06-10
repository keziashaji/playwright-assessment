import { test, expect } from '@playwright/test';
import users from "../testdata/users.json";

test('userlogin', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/',{waitUntil: "domcontentloaded"});
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('standard_user');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('secret_sauce');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole("link",{name: "Log out" })).toBeVisible();
});