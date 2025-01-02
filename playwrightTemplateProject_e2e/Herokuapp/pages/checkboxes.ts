import { Locator, Page } from "playwright/test";
import { BasePage } from "./basePage";
import { URLs } from "../env.setup";

export class Checkboxes extends BasePage {
    
    readonly checkboxHeader: Locator;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;

    constructor(page: Page) {
        super(
            page,
            `${URLs.HEROUAPP_URL}checkboxes`,
            page.getByRole('heading', { name: 'Checkboxes' })
        )
        this.checkbox1 = page.getByRole('checkbox').first();
        this.checkbox2 = page.getByRole('checkbox').nth(1);
    }

    async checkFirstBox() {
        await this.checkbox1.check();
    }

    // Assert the first checkbox is checked
    async assertFirstBoxChecked() {
        if (!await this.checkbox1.isChecked()) {
            throw new Error('Checkbox 1 is not checked');
        }
    }

    // Method to uncheck the first checkbox
    async uncheckFirstBox() {
        if (await this.checkbox1.isChecked()) {
            await this.checkbox1.uncheck();
        }
    }

}