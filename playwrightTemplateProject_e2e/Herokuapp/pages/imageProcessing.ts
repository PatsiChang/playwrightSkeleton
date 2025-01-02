import { expect, Page } from "playwright/test";
import { BasePage } from "./basePage";

//Testing Visual Comparisons on Playwright, We will be using Playwright's main page
export class ImageProcessing extends BasePage {
    constructor(page: Page) {
        super(
            page,
            "https://playwright.dev/",
            page.getByRole('link', { name: 'Playwright logo Playwright' })
        )
    }

    async compareScreenshots(screenshots: string) {

        await expect(this.page).toHaveScreenshot(screenshots);
    }
}