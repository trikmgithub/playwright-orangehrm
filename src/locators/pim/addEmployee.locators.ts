import { Locator, Page } from "@playwright/test";

export default class AddEmployeeLocators {
    readonly addEmployeePageTitle: Locator;
    readonly uploadPhotoButton: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly employeeIdInput: Locator;
    readonly createLoginDetailsSwitch: Locator;  
    readonly saveButton: Locator; 
    readonly cancelButton: Locator;
    readonly usernameInput: Locator;
    readonly statusEnabledRadio: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;

    constructor(page: Page) {
        this.addEmployeePageTitle = page.locator('//h6[text()="Add Employee"]');
        this.uploadPhotoButton = page.locator('//button[contains(@class, "employee-image-action") and @type="button"]');
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.middleNameInput = page.locator('input[name="middleName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.employeeIdInput = page.locator('//label[normalize-space(text())="Employee Id"]/ancestor::div[contains(@class,"oxd-input-group")]//input');
        this.createLoginDetailsSwitch = page.locator('//div[@class="oxd-switch-wrapper"]//input[@type="checkbox"]');
        this.saveButton = page.locator('//button[@type="submit" and contains(., "Save")]');
        this.cancelButton = page.locator('//button[@type="button" and contains(., "Cancel")]');
        this.usernameInput = page.locator('//label[contains(., "Username")]/ancestor::div[contains(@class, "oxd-input-group")]//input');
        this.statusEnabledRadio = page.locator('//div[contains(@class, "oxd-radio-wrapper")]//input[@value=1]');
        this.passwordInput = page.locator('//label[normalize-space(.)="Password"]/ancestor::div[contains(@class, "oxd-input-group")]//input[@type="password"]');
        this.confirmPasswordInput = page.locator('//label[normalize-space(.)="Confirm Password"]/ancestor::div[contains(@class, "oxd-input-group")]//input[@type="password"]');
    }
}