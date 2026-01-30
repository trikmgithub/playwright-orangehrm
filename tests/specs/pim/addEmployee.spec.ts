import { URLS } from "../../../src/constants/urls.constant";
import { pimTest as test, expect } from "../../../src/fixtures/";
import { WaitUtil } from "../../../src/utils/index";
import employeeData from "../../../test-data/employees.json" with { type: "json" };

test.describe('OrangeHRM Dashboard Tests: Add Employee', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URLS.PIM.ADD_EMPLOYEE);
    await page.waitForTimeout(2000);
    await WaitUtil.waitForPageReady(page);
  });

  for (const employee of employeeData.employees) {
    test(`add employee: ${employee.firstName} ${employee.lastName}`, async ({ addEmployeePage }) => {
      expect(await addEmployeePage.titleIsVisible()).toBeTruthy();
      
      await addEmployeePage.fillFirstName(employee.firstName);
      if (employee.middleName) {
        await addEmployeePage.fillMiddleName(employee.middleName);
      }
      await addEmployeePage.fillLastName(employee.lastName);
      
      const employeeId = await addEmployeePage.getEmployeeIdValue();
      console.log(`Employee ID: ${employeeId}`);
      await addEmployeePage.waitTimeout(3000);
      await addEmployeePage.switchOnCreateLoginDetails();
      await addEmployeePage.fillUsername(`${employee.firstName.toLowerCase()}_${employeeId}`);
      await addEmployeePage.enableStatus();
      await addEmployeePage.fillPassword(employee.password);
      await addEmployeePage.fillConfirmPassword(employee.password);
      await addEmployeePage.clickSaveButton();
    });
  }

});