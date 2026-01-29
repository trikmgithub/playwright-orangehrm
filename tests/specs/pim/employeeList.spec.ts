import { URLS } from "../../../src/constants/urls.constant";
import { pimTest as test } from "../../../src/fixtures/pim.fixture";
import { DataGenerator } from "../../../src/utils";
import employeesData from '../../../test-data/employees.json' with {type: 'json'};

test.describe("PIM - Employee List Page", () => {
    test.slow();
    let employeeId: string;
    let firstName: string;
    let lastName: string;

    test.beforeEach(async ({ employeeListPage, addEmployeePage, page }) => {
        try {
            firstName = employeesData.employees[0].firstName;
            lastName = employeesData.employees[0].lastName;
            await addEmployeePage.goto(URLS.PIM.ADD_EMPLOYEE);
            await addEmployeePage.waitForPageLoad();
            
            await addEmployeePage.fillFirstName(firstName);
            await addEmployeePage.fillLastName(lastName);
            const generatedId = DataGenerator.randomEmployeeId();
            await addEmployeePage.fillEmployeeId(generatedId);
            
            console.log(`Creating employee: ${firstName} ${lastName} with ID: ${generatedId}`);
            
            await addEmployeePage.clickSaveButton();

            do {
                await addEmployeePage.waitForNavigationAwayFromAddPage('addEmployee');
            } while (await addEmployeePage.isOnAddEmployeePage());
            
            try {
                await page.waitForURL(/.*\/viewPersonalDetails\/empNumber\/\d+/, { timeout: 10000 });
                await page.waitForTimeout(6000)
                await employeeListPage.waitPersonalDetailsPageTitle();
                console.log('✓ Successfully navigated to Personal Details page');
            } catch {
                console.log('Navigation timeout - checking current URL:', page.url());
                await page.screenshot({ path: 'test-results/fixture-error.png', fullPage: true });
                throw new Error('Failed to navigate to Personal Details page after saving employee');
            }
            
            employeeId = await employeeListPage.getEmployeeIdFromPersonalDetails(10000);
            
            console.log(`✓ Employee created successfully`);
            console.log(`  - Employee ID: ${employeeId}`);
            console.log(`  - Name: ${firstName} ${lastName}`);
            await employeeListPage.goto(URLS.PIM.EMPLOYEE_LIST);
            await employeeListPage.waitForPageLoad();
        } catch (error) {
            console.error('Failed to create employee:', error);
            throw error;
        }
    });
    
    test("should search employee by ID", async ({ employeeListPage }) => {
        await employeeListPage.fillEmployeeId(employeeId);
        await employeeListPage.clickSearchButton();
        await employeeListPage.waitTimeout(2);
        const isEmployeePresentInList = await employeeListPage.isEmployeePresentInList(employeeId);
        console.log(`Searching for Employee ID ${employeeId}: ${isEmployeePresentInList}`);
        await employeeListPage.verifyEmployeeDetails(employeeId, firstName,  lastName);
    });
});