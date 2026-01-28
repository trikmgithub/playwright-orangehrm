import { Page, Locator } from '@playwright/test';

export default class LoginLocators {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorAlert: Locator;
  readonly forgotPasswordLink: Locator;
  readonly loginPanel: Locator;
  readonly loginLogo: Locator;
  readonly credentialsHint: Locator;

  constructor(page: Page) {
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.locator('//button[contains(@class, "orangehrm-login-button") and @type="submit"]');
    this.errorAlert = page.locator('.oxd-alert-content--error');
    this.forgotPasswordLink = page.locator('//div[@class="orangehrm-login-forgot"]/p');
    this.loginPanel = page.locator('.orangehrm-login-slot');
    this.loginLogo = page.locator('.orangehrm-login-branding img');
    this.credentialsHint = page.locator('.orangehrm-demo-credentials');
  }
}
