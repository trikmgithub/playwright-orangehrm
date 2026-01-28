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
        await this.waitForElement(this.locators.addEmployeePageTitle);
        return await this.locators.addEmployeePageTitle.isVisible();
    }

    async fillFirstName(firstName: string): Promise<void> {
        await this.waitForElement(this.locators.firstNameInput);
        await this.locators.firstNameInput.fill(firstName);
    }

    async fillMiddleName(middleName: string): Promise<void> {
        await this.waitForElement(this.locators.middleNameInput);
        await this.locators.middleNameInput.fill(middleName);
    }

    async fillLastName(lastName: string): Promise<void> {
        await this.waitForElement(this.locators.lastNameInput);
        await this.locators.lastNameInput.fill(lastName);
    }

    async fillEmployeeId(employeeId: string): Promise<void> {
        await this.waitForElement(this.locators.employeeIdInput);
        await this.locators.employeeIdInput.fill(employeeId);
    }

    async getEmployeeIdValue(): Promise<string> {
        await this.waitForElement(this.locators.employeeIdInput);
        return await this.locators.employeeIdInput.inputValue();
    }

    async switchOnCreateLoginDetails(): Promise<void> {
        await this.waitForElement(this.locators.createLoginDetailsSwitch);
        
        const isChecked = await this.locators.createLoginDetailsSwitch.isChecked();
        
        if (!isChecked) {
            await this.locators.createLoginDetailsSwitch.scrollIntoViewIfNeeded();
            
            await this.locators.createLoginDetailsSwitch.setChecked(true, { force: true });
        }
    }

    async fillUsername(username: string): Promise<void> {
        await this.waitForElement(this.locators.usernameInput);
        await this.locators.usernameInput.fill(username);
    }

    async enableStatus(): Promise<void> {
        await this.waitForElement(this.locators.statusEnabledRadio);
        await this.locators.statusEnabledRadio.check();
    }

    async fillPassword(password: string): Promise<void> {
        await this.waitForElement(this.locators.passwordInput);
        await this.locators.passwordInput.fill(password);
    }

    async fillConfirmPassword(confirmPassword: string): Promise<void> {
        await this.waitForElement(this.locators.confirmPasswordInput);
        await this.locators.confirmPasswordInput.fill(confirmPassword);
    }

    async clickSaveButton(): Promise<void> {
        await this.waitForElement(this.locators.saveButton);
        await this.locators.saveButton.click();
    }
}