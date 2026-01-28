import { DashboardPage } from '../pages/dashboard.page';
import {test as base} from '@playwright/test';

type DashboardPages = {
  dashboardPage: DashboardPage;
};

export const dashboardTest = base.extend<DashboardPages>({
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

    