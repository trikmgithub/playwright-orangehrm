import { URLS } from '../../src/constants';
import { dashboardTest as test, expect } from '../../src/fixtures';
import { WaitUtil } from '../../src/utils/index';

test.describe('OrangeHRM Dashboard Tests', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URLS.DASHBOARD);
    await WaitUtil.waitForPageReady(page);
  });

  test('should display dashboard widgets', async ({ dashboardPage }) => {
    expect(await dashboardPage.isWidgetVisible('Time at Work')).toBe(true);
    expect(await dashboardPage.isWidgetCorrectlyHeaderText('Time at Work')).toBe(true);
    expect(await dashboardPage.isWidgetVisible('My Actions')).toBe(true);
    expect(await dashboardPage.isWidgetCorrectlyHeaderText('My Actions')).toBe(true);
    expect(await dashboardPage.isWidgetVisible('Quick Launch')).toBe(true);
    expect(await dashboardPage.isWidgetCorrectlyHeaderText('Quick Launch')).toBe(true);
    expect(await dashboardPage.isWidgetVisible('Buzz Latest Posts')).toBe(true);
    expect(await dashboardPage.isWidgetCorrectlyHeaderText('Buzz Latest Posts')).toBe(true);
    expect(await dashboardPage.isWidgetVisible('Employees on Leave Today')).toBe(true);
    expect(await dashboardPage.isWidgetCorrectlyHeaderText('Employees on Leave Today')).toBe(true);
    expect(await dashboardPage.isWidgetVisible('Employee Distribution by Sub Unit')).toBe(true);
    expect(await dashboardPage.isWidgetCorrectlyHeaderText('Employee Distribution by Sub Unit')).toBe(true);
    expect(await dashboardPage.isWidgetVisible('Employee Distribution by Location')).toBe(true);
    expect(await dashboardPage.isWidgetCorrectlyHeaderText('Employee Distribution by Location')).toBe(true);
  });

});
