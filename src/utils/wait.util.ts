import { Page } from '@playwright/test';

export default class WaitUtil {
  
  static async wait(ms: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  
  static async waitForElementStable(page: Page, selector: string, timeout: number = 5000): Promise<void> {
    const element = page.locator(selector);
    await element.waitFor({ state: 'visible', timeout });
    
    let previousBox = await element.boundingBox();
    await this.wait(100);
    let currentBox = await element.boundingBox();
    
    let attempts = 0;
    while (attempts < 10 && 
           previousBox && currentBox &&
           (previousBox.x !== currentBox.x || previousBox.y !== currentBox.y)) {
      previousBox = currentBox;
      await this.wait(100);
      currentBox = await element.boundingBox();
      attempts++;
    }
  }

 
  static async waitForPageReady(page: Page, timeout: number = 10000): Promise<void> {
    await page.waitForLoadState('domcontentloaded', { timeout });
    
    const spinnerSelectors = [
      '.oxd-loading-spinner',
      '.loading',
      '[class*="spinner"]',
      '[class*="loading"]'
    ];
    
    for (const selector of spinnerSelectors) {
      const spinner = page.locator(selector);
      if (await spinner.isVisible().catch(() => false)) {
        await spinner.waitFor({ state: 'hidden', timeout }).catch(() => {});
      }
    }
  }

  static async retry<T>(
    action: () => Promise<T>,
    options: {
      maxAttempts?: number;
      delayMs?: number;
      timeoutMs?: number;
    } = {}
  ): Promise<T> {
    const { maxAttempts = 3, delayMs = 1000, timeoutMs = 30000 } = options;
    const startTime = Date.now();
    let lastError: Error | undefined;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      if (Date.now() - startTime > timeoutMs) {
        throw new Error(`Retry timeout after ${timeoutMs}ms`);
      }

      try {
        return await action();
      } catch (error) {
        lastError = error as Error;
        if (attempt < maxAttempts) {
          await this.wait(delayMs);
        }
      }
    }

    throw lastError || new Error('Retry failed');
  }

  static async waitUntil(
    condition: () => Promise<boolean> | boolean,
    timeoutMs: number = 10000,
    intervalMs: number = 500
  ): Promise<void> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeoutMs) {
      if (await condition()) {
        return;
      }
      await this.wait(intervalMs);
    }

    throw new Error(`Wait until timeout after ${timeoutMs}ms`);
  }
}
