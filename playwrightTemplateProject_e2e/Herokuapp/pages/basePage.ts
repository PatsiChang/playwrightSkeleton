import { Locator, Page } from "@playwright/test";

//SuperClass
export class BasePage {
    readonly page: Page;
    readonly pageUrl: string;
    readonly pageIndicator: Locator;

    constructor(page: Page, pageUrl: string, pageIndicator: Locator) {
        this.page = page;
        this.pageUrl = pageUrl;
        this.pageIndicator = pageIndicator;
    }

    async navigate() {
        await this.page.goto(this.pageUrl);
        await this.pageIndicator.isVisible();
    }

}