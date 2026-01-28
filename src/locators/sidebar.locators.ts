import { Locator, Page } from "@playwright/test";

export default class SidebarLocators {
  readonly searchInput: Locator;
  readonly adminNavigation: Locator;
  readonly pimNavigation: Locator;
  readonly leaveNavigation: Locator;
  readonly timeNavigation: Locator;
  readonly recruitmentNavigation: Locator;
  readonly myInfoNavigation: Locator;
  readonly performanceNavigation: Locator;
  readonly dashboardNavigation: Locator;
  readonly directoryNavigation: Locator
  readonly maintenanceNavigation: Locator;
  readonly buzzNavigation: Locator
  
  constructor(page: Page) {
    this.searchInput = page.locator('//input[@placeholder="Search"]');
    this.adminNavigation = page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]');
    this.pimNavigation = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]');
    this.leaveNavigation = page.locator('//a[@href="/web/index.php/leave/viewLeaveModule"]');
    this.timeNavigation = page.locator('//a[@href="/web/index.php/time/viewTimeModule"]');
    this.recruitmentNavigation = page.locator('//a[@href="/web/index.php/recruitment/viewRecruitmentModule"]');
    this.myInfoNavigation = page.locator('//a[@href="/web/index.php/pim/viewMyDetails"]');
    this.performanceNavigation = page.locator('//a[@href="/web/index.php/performance/viewPerformanceModule"]');
    this.dashboardNavigation = page.locator('//a[@href="/web/index.php/dashboard/index"]');
    this.directoryNavigation = page.locator('//a[@href="/web/index.php/directory/viewDirectory"]');
    this.maintenanceNavigation = page.locator('//a[@href="/web/index.php/maintenance/viewMaintenanceModule"]');
    this.buzzNavigation = page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]');
  }
}
