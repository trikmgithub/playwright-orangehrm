import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';
import DashboardLocators from '../locators/dashboard.locators';
import { SidebarComponent, HeaderComponent } from '../components';
import { DashboardWidgetType as widgetName } from '../types';

export class DashboardPage extends BasePage {
  private locators: DashboardLocators;
  readonly header: HeaderComponent;
  readonly sidebar: SidebarComponent;
  

  constructor(page: Page) {
    super(page);
    this.locators = new DashboardLocators(page);
    this.header = new HeaderComponent(page);
    this.sidebar = new SidebarComponent(page);
    
  }


  async isWidgetVisible(widgetName: widgetName, timeout?: number): Promise<boolean> {
    const widgetLocator = await this.getWidgetLocator(widgetName);
    
    return await widgetLocator.isVisible({ timeout: timeout });
  }

  async isWidgetCorrectlyHeaderText(widgetName: widgetName, timeout?: number): Promise<boolean> {
    const widgetLocator = await this.getWidgetLocator(widgetName);

    return await widgetLocator.textContent({ timeout: timeout }) === widgetName;
  }

  async getWidgetLocator(widgetName: widgetName): Promise<Locator> {
    const widgetMap = {
      'Time at Work': this.locators.timeAtWorkWidget,
      'My Actions': this.locators.myActionsWidget,
      'Quick Launch': this.locators.quickLaunchWidget,
      'Buzz Latest Posts': this.locators.buzzLatestPostsWidget,
      'Employees on Leave Today': this.locators.employeeLeaveTodayWidget,
      'Employee Distribution by Location': this.locators.employeeDistributionLocation,
      'Employee Distribution by Sub Unit': this.locators.employeeDistributionUnitWidget,
    };

    return widgetMap[widgetName];
  }

}
