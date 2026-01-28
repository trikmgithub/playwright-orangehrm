import { Page } from '@playwright/test';

export abstract class BaseComponent {
    readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async waitForComponent(timeout: number = 10000): Promise<void> {
    await this.page.waitForLoadState('networkidle', { timeout });
  }

  abstract isVisible(): Promise<boolean>;
}
