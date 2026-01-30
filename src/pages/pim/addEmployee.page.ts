import { Page } from "@playwright/test";
import AddEmployeeLocators from "../../locators/pim/addEmployee.locators";
import { BasePage } from "../base.page";
import { HeaderComponent, SidebarComponent } from "../../components";

export default class AddEmployeePage extends BasePage {
    private locators : AddEmployeeLocators; 
    readonly header : HeaderComponent;
    readonly sidebar : SidebarComponent;

    constructor(page: Page) {
        super(page);
        this.locators = new AddEmployeeLocators(this.page);
        this.header = new HeaderComponent(this.page);
        this.sidebar = new SidebarComponent(this.page);
    }

    async titleIsVisible(): Promise<boolean> {
        await this.waitForElementVisible(this.locators.addEmployeePageTitle);
        return await this.locators.addEmployeePageTitle.isVisible();
    }

    async fillFirstName(firstName: string): Promise<void> {
        await this.waitForElementVisible(this.locators.firstNameInput);
        await this.locators.firstNameInput.fill(firstName);
    }

    async fillMiddleName(middleName: string): Promise<void> {
        await this.waitForElementVisible(this.locators.middleNameInput);
        await this.locators.middleNameInput.fill(middleName);
    }

    async fillLastName(lastName: string): Promise<void> {
        await this.waitForElementVisible(this.locators.lastNameInput);
        await this.locators.lastNameInput.fill(lastName);
    }

    async fillEmployeeId(employeeId: string): Promise<void> {
        await this.waitForElementVisible(this.locators.employeeIdInput);
        await this.locators.employeeIdInput.fill(employeeId);
    }

    async getEmployeeIdValue(): Promise<string> {
        await this.waitForElementVisible(this.locators.employeeIdInput);
        return await this.locators.employeeIdInput.inputValue();
    }

    async switchOnCreateLoginDetails(timeout: number = 3000): Promise<void> {
        await this.waitForElementVisible(this.locators.createLoginDetailsSwitch);
        
        const isChecked = await this.locators.createLoginDetailsSwitch.isChecked();
        await this.waitTimeout(timeout);
        if (!isChecked) {
            await this.locators.createLoginDetailsSwitch.scrollIntoViewIfNeeded();
            await this.waitTimeout(timeout);
            await this.locators.createLoginDetailsSwitch.setChecked(true, { force: true });
        }
    }

    async isToastMessageVisible(timeout: number = 3000): Promise<boolean> {
        return await this.locators.toastMessage.isVisible({ timeout });
    }

    async fillUsername(username: string): Promise<void> {
        await this.waitForElementVisible(this.locators.usernameInput);
        await this.locators.usernameInput.fill(username);
    }

    async enableStatus(): Promise<void> {
        await this.waitForElementVisible(this.locators.statusEnabledRadio);
        await this.locators.statusEnabledRadio.check();
    }

    async fillPassword(password: string): Promise<void> {
        await this.waitForElementVisible(this.locators.passwordInput);
        await this.locators.passwordInput.fill(password);
    }

    async fillConfirmPassword(confirmPassword: string): Promise<void> {
        await this.waitForElementVisible(this.locators.confirmPasswordInput);
        await this.locators.confirmPasswordInput.fill(confirmPassword);
    }

    async clickSaveButton(): Promise<void> {
        await this.waitForElementVisible(this.locators.saveButton);
        await this.locators.saveButton.click();
    }

    async waitForNavigationAwayFromAddPage(urlPart: string, timeout: number = 15000): Promise<void> {
        await this.page.waitForURL((url) => !url.href.includes(urlPart), { timeout });
        console.log('✓ Navigated away from Add Employee page');
        console.log('New URL:', this.page.url());
    }

    async isOnAddEmployeePage(): Promise<boolean> {
        return this.page.url().includes('addEmployee');
    }
}