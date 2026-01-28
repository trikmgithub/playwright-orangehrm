import { URLS } from '../../src/constants';
import { baseTest as test, expect } from '../../src/fixtures/';

test.describe('OrangeHRM Login Tests - Without Auth', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('should login successfully with valid Admin credentials', async ({
    loginPage,
    dashboardPage,
  }) => {
    await loginPage.loginAsAdmin();

    expect(await dashboardPage.header.isVisible()).toBe(true);
  });

  test('should display error message with invalid credentials', async ({
    loginPage,
  }) => {
    const invalidUsername = 'InvalidUser';
    const invalidPassword = 'wrongpassword';

    await loginPage.login(invalidUsername, invalidPassword);

    expect(await loginPage.isErrorMessageVisible()).toBe(true);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid credentials');
  });

  test('should display error message with empty credentials', async ({
    loginPage,
    page,
  }) => {
    await loginPage.login('', '');

    await expect(page).toHaveURL(URLS.LOGIN);
  });

  test('should navigate to forgot password page', async ({
    loginPage,
    page,
  }) => {
    await loginPage.clickForgotPassword();

    await expect(page).toHaveURL(URLS.FORGET_PASSWORD);
  });
});
