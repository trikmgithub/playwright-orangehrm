import {test as base} from '@playwright/test';
import { PimPage } from '../types';
import { AddEmployeePage } from '../pages/pim';

export const pimTest = base.extend<PimPage>({
  addEmployeePage: async ({ page }, use) => {
    await use(new AddEmployeePage(page));
  },
});
