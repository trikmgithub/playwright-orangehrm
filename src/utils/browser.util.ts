import { Page } from '@playwright/test';


export class BrowserUtil {

  static async takeScreenshot(page: Page, name: string): Promise<void> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({ 
      path: `test-results/screenshots/${name}-${timestamp}.png`,
      fullPage: true 
    });
  }


  static async getCurrentUrl(page: Page): Promise<string> {
    return page.url();
  }


  static async clearCookies(page: Page): Promise<void> {
    await page.context().clearCookies();
  }


  static async getLocalStorage(page: Page, key: string): Promise<string | null> {
    return await page.evaluate((k) => localStorage.getItem(k), key);
  }


  static async setLocalStorage(page: Page, key: string, value: string): Promise<void> {
    await page.evaluate(({ k, v }) => localStorage.setItem(k, v), { k: key, v: value });
  }


  static async clearLocalStorage(page: Page): Promise<void> {
    await page.evaluate(() => localStorage.clear());
  }


  static async scrollToElement(page: Page, selector: string): Promise<void> {
    await page.locator(selector).scrollIntoViewIfNeeded();
  }


  static async scrollToTop(page: Page): Promise<void> {
    await page.evaluate(() => window.scrollTo(0, 0));
  }


  static async scrollToBottom(page: Page): Promise<void> {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }


  static async getTitle(page: Page): Promise<string> {
    return await page.title();
  }


  static async refresh(page: Page): Promise<void> {
    await page.reload();
  }


  static async executeScript<T>(page: Page, script: string): Promise<T> {
    return await page.evaluate(script);
  }


  static async isVisible(page: Page, selector: string): Promise<boolean> {
    try {
      return await page.locator(selector).isVisible({ timeout: 5000 });
    } catch {
      return false;
    }
  }


  static async switchToNewTab(page: Page): Promise<Page> {
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
    ]);
    return newPage;
  }
}
