import { Page, Locator } from '@playwright/test';

export default class DashboardLocators {
    readonly timeAtWorkWidget: Locator;
    readonly myActionsWidget: Locator;
    readonly quickLaunchWidget: Locator;
    readonly buzzLatestPostsWidget: Locator;
    readonly employeeLeaveTodayWidget: Locator;
    readonly employeeDistributionUnitWidget: Locator;
    readonly employeeDistributionLocation: Locator;

    constructor(page: Page) {
        this.timeAtWorkWidget = page.locator(
            '(//div[@class="orangehrm-dashboard-widget-name"]/p)[1]',
        );
        this.myActionsWidget = page.locator(
            '(//div[@class="orangehrm-dashboard-widget-name"]/p)[2]',
        );
        this.quickLaunchWidget = page.locator(
            '(//div[@class="orangehrm-dashboard-widget-name"]/p)[3]',
        );
        this.buzzLatestPostsWidget = page.locator(
            '(//div[@class="orangehrm-dashboard-widget-name"]/p)[4]',
        );
        this.employeeLeaveTodayWidget = page.locator(
            '(//div[@class="orangehrm-dashboard-widget-name"]/p)[5]',
        );
        this.employeeDistributionUnitWidget = page.locator(
            '(//div[@class="orangehrm-dashboard-widget-name"]/p)[6]',
        );
        this.employeeDistributionLocation = page.locator(
            '(//div[@class="orangehrm-dashboard-widget-name"]/p)[7]',
        );
    }
}
