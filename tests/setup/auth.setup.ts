import { test as setup, expect } from '@playwright/test';
import { DashboardPage } from '../../src/pages/dashboard.page';
import path from 'path';
import fs from 'fs';
import { LoginPage } from '../../src/pages/login.page';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const authFile = path.join(__dirname, '../../.auth/admin.json');

setup('authenticate as admin', async ({ page }) => {
  setup.slow();
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate();
  await loginPage.loginAsAdmin();

  await expect(dashboardPage.header.isVisible()).resolves.toBe(true);

  const authDir = path.dirname(authFile);
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  await page.context().storageState({ path: authFile });

  console.log('Authentication saved successfully!');
});
