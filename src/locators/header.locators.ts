import { Locator, Page } from "@playwright/test";

export default class HeaderLocators {
    readonly titleHeader: Locator;
    readonly userDropdown: Locator;
    readonly logoutButton: Locator;
    readonly userNameText: Locator;

    constructor(page: Page) {
        this.titleHeader = page.locator('//h6[@class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
        this.userDropdown = page.locator('//span[@class="oxd-userdropdown-tab"]');
        this.logoutButton = page.locator('(//a[@class="oxd-userdropdown-link"])[4]');
        this.userNameText = page.locator('.oxd-userdropdown-name');
    }

}