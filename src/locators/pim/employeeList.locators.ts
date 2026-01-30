import { Locator, Page } from "@playwright/test";

export default class EmployeeListLocators {
    readonly employeeNameInput: Locator; 
    readonly employeeIdInput: Locator;
    readonly employeeStatusDropdown: Locator;
    readonly includeDropdown: Locator;
    readonly supervisorNameInput: Locator;
    readonly jobTitleDropdown: Locator;
    readonly subUnitDropdown: Locator;
    readonly searchButton: Locator;
    readonly resetButton: Locator;
    readonly personalDetailsPageTitle: Locator;
    readonly employeeIdPersonalDetails: Locator;
    readonly employeeInformationButton: Locator;

    constructor(page: Page) {
        this.employeeNameInput = page.locator('(//div[@class="oxd-autocomplete-wrapper"]//input)[1]');
        this.employeeIdInput = page.locator('//label[contains(., "Employee Id")]/ancestor::div[contains(@class, "oxd-input-group")]//input');
        this.employeeStatusDropdown = page.locator('(//div[contains(@class, "oxd-select-wrapper")])[1]');
        this.includeDropdown = page.locator('(//div[contains(@class, "oxd-select-wrapper")])[2]');
        this.supervisorNameInput = page.locator('(//div[@class="oxd-autocomplete-wrapper"]//input)[2]');
        this.jobTitleDropdown = page.locator('(//div[contains(@class, "oxd-select-wrapper")])[3]');
        this.subUnitDropdown = page.locator('(//div[contains(@class, "oxd-select-wrapper")])[4]');
        this.searchButton = page.locator('//button[@type="submit" and contains(., "Search")]');
        this.resetButton = page.locator('//button[@type="reset" and contains(., "Reset")]');
        this.personalDetailsPageTitle = page.locator('//h6[text()="Personal Details"]');
        this.employeeIdPersonalDetails = page.locator('//div[contains(@class, "orangehrm-edit-employee-content")]//label[text()="Employee Id"]/ancestor::div[contains(@class, "oxd-input-group")]//input').first();
        this.employeeInformationButton = page.getByRole('button').nth(3);
    }

}