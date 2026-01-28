import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }


  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }


  async getTitle(): Promise<string> {
    return await this.page.title();
  }


  async takeScreenshot(name: string): Promise<void> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await this.page.screenshot({ 
      path: `test-results/screenshots/${name}-${timestamp}.png`, 
      fullPage: true 
    });
  }


  async waitForElement(locator: Locator, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }


  async waitForElementToHide(locator: Locator, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'hidden', timeout });
  }


  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }


  async reload(): Promise<void> {
    await this.page.reload();
  }
}
