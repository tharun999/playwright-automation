// login.setup.js
import { test as setup, expect } from '@playwright/test';
setup.use({ storageState: undefined });
setup('login and save session', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded')
  await page.click('text=Log In');
  await page.fill("//*[@name='mobileInput']",'7981902439')
  //await page.fill('input[type="email"]', 'your-email');
  //await page.fill('input[type="password"]', 'your-password');
  await page.getByText('Get OTP').click()
  //await page.click('button[type="submit"]');
  await page.getByText('Verify OTP').toBeVisible
  // Wait for login success indicator
  //await expect(page.locator('text=My Account')).toBeVisible();

  // Save session
  await page.context().storageState({ path: 'state-nike.json' });
});