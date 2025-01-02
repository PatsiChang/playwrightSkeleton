import { expect, Locator, Page } from "playwright/test";
import { BasePage } from "./basePage";
import { URLs } from "../env.setup";

export class FloatingMenu extends BasePage {
    
    readonly checkboxHeader: Locator;
    readonly homeTab: Locator;
    readonly newsTab: Locator;
    readonly contactTab: Locator;
    readonly aboutTab: Locator;

    constructor(page: Page) {
        super(
            page,
            `${URLs.HEROUAPP_URL}floating_menu`,
            page.getByRole('heading', { name: 'Floating Menu' })
        )
        this.homeTab = page.getByRole('link', { name: 'Home' });
        this.newsTab = page.getByRole('link', { name: 'News' })
        this.contactTab = page.getByRole('link', { name: 'Contact' })
        this.aboutTab = page.getByRole('link', { name: 'About' })
    }

    async scrollPage() {
        await this.page.mouse.wheel(0, 250);
    }

    // Assert the first checkbox is checked
    async assertMenuBar() {
        await expect(this.homeTab).toBeVisible();
        await expect(this.newsTab).toBeVisible();
        await expect(this.contactTab).toBeVisible();
        await expect(this.aboutTab).toBeVisible();

    }


}