import { Page } from '@playwright/test';
import { BaseComponent } from './base.component';
import { HeaderLocators } from '../locators/';
import { URLS } from '../constants/urls.constant';

export class HeaderComponent extends BaseComponent {
  readonly locators: HeaderLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new HeaderLocators(page);
  }

  async isVisible(timeout?: number): Promise<boolean> {
    return await this.locators.titleHeader.isVisible({ timeout });
  }

  async waitTitleVisible(timeout?: number): Promise<void> {
    await this.locators.titleHeader.waitFor({ state: 'visible', timeout });
  }

  async logout(): Promise<void> {
    await this.locators.userDropdown.click();
    await this.locators.logoutButton.click();
    await this.page.waitForURL(URLS.LOGIN);
  }

  async getUserName(): Promise<string> {
    return await this.locators.userNameText.textContent() || '';
  }

  async openUserDropdown(): Promise<void> {
    await this.locators.userDropdown.click();
  }
}
