import { Page } from '@playwright/test';
import { BaseComponent } from './base.component';
import { SidebarLocators } from '../locators/';

export class SidebarComponent extends BaseComponent {
  readonly locators: SidebarLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new SidebarLocators(page);
  }

  async isVisible(timeout?: number): Promise<boolean> {
    return await this.locators.searchInput.isVisible({ timeout });
  }

  async navigateToPim(): Promise<void> {
    await this.locators.pimNavigation.click();
  }

  async navigateToAdmin(): Promise<void> {
    await this.locators.adminNavigation.click();
  }

  async navigateToLeave(): Promise<void> {
    await this.locators.leaveNavigation.click();
  }

  async navigateToTime(): Promise<void> {
    await this.locators.timeNavigation.click();
  }

  async navigateToRecruitment(): Promise<void> {
    await this.locators.recruitmentNavigation.click();
  }

  async navigateToMyInfo(): Promise<void> {
    await this.locators.myInfoNavigation.click();
  }

  async navigateToPerformance(): Promise<void> {
    await this.locators.performanceNavigation.click();
  }

  async navigateToDashboard(): Promise<void> {
    await this.locators.dashboardNavigation.click();
  }

  async navigateToDirectory(): Promise<void> {
    await this.locators.directoryNavigation.click();
  }

  async navigateToMaintenance(): Promise<void> {
    await this.locators.maintenanceNavigation.click();
  }

  async navigateToBuzz(): Promise<void> {
    await this.locators.buzzNavigation.click();
  }
}
