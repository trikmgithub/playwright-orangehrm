import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { LoginLocators } from '../locators/';
import { URLS, CREDENTIALS } from '../constants/urls.constant';

export class LoginPage extends BasePage {
  private locators: LoginLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginLocators(page);
  }

  async navigate(): Promise<void> {
    await this.goto(URLS.LOGIN);
    await this.waitForElementVisible(this.locators.loginButton);
  }

  async login(username: string, password: string): Promise<void> {
    await this.locators.usernameInput.fill(username);
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async loginAsAdmin(): Promise<void> {
    await this.login(CREDENTIALS.ADMIN.username, CREDENTIALS.ADMIN.password);
  }

  async isErrorMessageVisible(): Promise<boolean> {
    try {
      return await this.locators.errorAlert.isVisible({ timeout: 5000 });
    } catch {
      return false;
    }
  }

  async getErrorMessage(): Promise<string> {
    await this.waitForElementVisible(this.locators.errorAlert);
    return await this.locators.errorAlert.textContent() || '';
  }

  async clickForgotPassword(): Promise<void> {
    await this.locators.forgotPasswordLink.click();
  }

  async isLoginPageDisplayed(): Promise<boolean> {
    return await this.locators.loginButton.isVisible();
  }

  async getCredentialsHint(): Promise<string> {
    if (await this.locators.credentialsHint.isVisible()) {
      return await this.locators.credentialsHint.textContent() || '';
    }
    return '';
  }

  async clearUsername(): Promise<void> {
    await this.locators.usernameInput.clear();
  }

  async clearPassword(): Promise<void> {
    await this.locators.passwordInput.clear();
  }

  async isLoginButtonEnabled(): Promise<boolean> {
    return await this.locators.loginButton.isEnabled();
  }
}
