import { Locator, Page } from "@playwright/test";
import { HeaderComponent, SidebarComponent } from "../../components";
import { EmployeeListLocators } from "../../locators/pim";
import { BasePage } from "../base.page";
import { EmploymentStatus, Include, JobTitle, SubUnit } from "../../types";

export default class EmployeeListPage extends BasePage {
    private locators: EmployeeListLocators;
    readonly header : HeaderComponent;
    readonly sidebar : SidebarComponent;

    constructor(page: Page) {
        super(page);
        this.locators = new EmployeeListLocators(this.page);
        this.header = new HeaderComponent(this.page);
        this.sidebar = new SidebarComponent(this.page);
    }

    async fillEmployeeName(name: string): Promise<void> {
        await this.waitForElementVisible(this.locators.employeeNameInput);
        await this.locators.employeeNameInput.fill(name);
    }

    async fillEmployeeId(employeeId: string): Promise<void> {
        await this.waitForElementVisible(this.locators.employeeIdInput); 
        await this.locators.employeeIdInput.fill(employeeId);
    }

    async selectEmployeeStatus(status: EmploymentStatus): Promise<void> {
        await this.waitForElementVisible(this.locators.employeeStatusDropdown);
        await this.locators.employeeStatusDropdown.click();
        const option = this.page.locator(`//div[@role="listbox"]//span[text()="${status}"]`);
        await this.waitForElementVisible(option);
        await option.click();
    }

    async selectInclude(optionText: Include): Promise<void> {
        await this.waitForElementVisible(this.locators.includeDropdown);
        await this.locators.includeDropdown.click();
        const option = this.page.locator(`//div[@role="listbox"]//span[text()="${optionText}"]`);
        await this.waitForElementVisible(option);
        await option.click();
    }

    async fillSupervisorName(name: string): Promise<void> {
        await this.waitForElementVisible(this.locators.supervisorNameInput);
        await this.locators.supervisorNameInput.fill(name);
    }

    async selectJobTitle(jobTitle: JobTitle): Promise<void> {
        await this.waitForElementVisible(this.locators.jobTitleDropdown);
        await this.locators.jobTitleDropdown.click();
        const option = this.page.locator(`//div[@role="listbox"]//span[text()="${jobTitle}"]`);
        await this.waitForElementVisible(option);
        await option.click();
    }

    async selectSubUnit(subUnit: SubUnit): Promise<void> {
        await this.waitForElementVisible(this.locators.subUnitDropdown);
        await this.locators.subUnitDropdown.click();
        const option = this.page.locator(`//div[@role="listbox"]//span[text()="${subUnit}"]`);
        await this.waitForElementVisible(option);
        await option.click();
    }

    async clickSearchButton(): Promise<void> {
        await this.waitForElementVisible(this.locators.searchButton);
        await this.locators.searchButton.click();
    }

    async waitPersonalDetailsPageTitle(timeout: number = 10000): Promise<void> {
        await this.waitForElementVisible(this.locators.personalDetailsPageTitle, timeout);
    }

    async isEmployeePresentInList(employeeId: string, timeout: number = 2000): Promise<boolean> {
        const employeeLocator = this.page.locator(`//div[@class="oxd-table-body"]//div[contains(@class, "oxd-table-row")]//div[text()="${employeeId}"]/ancestor::div[@role="row"]`);
        return await employeeLocator.isVisible({timeout});
    }

    getEmployeeRow(employeeId: string): Locator {
        return this.page.locator(`//div[@class="oxd-table-body"]//div[contains(@class, "oxd-table-row")]//div[text()="${employeeId}"]/ancestor::div[@role="row"]`);
    }

    async getEmployeeId(employeeLocator: Locator): Promise<string> {
        const idCell = employeeLocator.locator('.oxd-table-cell').nth(1);
        return await idCell.innerText();
    }

    async getEmployeeIdFromPersonalDetails(timeout: number = 10000): Promise<string> {
        try {
            await this.waitForElementVisible(this.locators.employeeIdPersonalDetails, timeout);
            const employeeId = await this.locators.employeeIdPersonalDetails.inputValue();
            return employeeId;
        
        } catch (error) {
            console.error('Failed to get employee ID from Personal Details:', error);
            throw error;
        }
    }

    async getFirstName(employeeLocator: Locator): Promise<string> {
        const firstNameCell = employeeLocator.locator('.oxd-table-cell').nth(2);
        return await firstNameCell.innerText();
    }

    async getLastName(employeeLocator: Locator): Promise<string> {
        const lastNameCell = employeeLocator.locator('.oxd-table-cell').nth(3);
        return await lastNameCell.innerText();
    }

    async verifyEmployeeDetails(employeeId: string, firstName: string, lastName: string, timeout: number = 5000): Promise<boolean> {
        const employeeLocator = this.getEmployeeRow(employeeId);
        await this.waitForElementVisible(employeeLocator, timeout);
        const actualId = await this.getEmployeeId(employeeLocator);
        const actualFirstName = await this.getFirstName(employeeLocator);
        const actualLastName = await this.getLastName(employeeLocator);

        return actualId === employeeId && actualFirstName === firstName && actualLastName === lastName;
    }

    async getEmployeeDetails(employeeId: string): Promise<{ id: string; firstName: string; lastName: string }> {
        const employeeLocator = this.getEmployeeRow(employeeId);
        await this.waitForElementVisible(employeeLocator);

        return {
            id: await this.getEmployeeId(employeeLocator),
            firstName: await this.getFirstName(employeeLocator),
            lastName: await this.getLastName(employeeLocator)
        };
    }

}