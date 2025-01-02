import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLs } from "../env.setup";

export class AddRemoveElements extends BasePage {
    
    readonly addElementBtn: Locator;
    readonly firstDeleteBtn: Locator;
    readonly secondDeleteBtn: Locator;

    constructor(page: Page) {
        super(
            page,
            `${URLs.HEROUAPP_URL}add_remove_elements/`,
           page.getByRole('heading', { name: 'Add/Remove Elements' })
        )
        this.addElementBtn = page.getByRole('button', { name: 'Add Element' });
        this.firstDeleteBtn = page.getByRole('button', { name: 'Delete' }).first();
        this.secondDeleteBtn = page.getByRole('button', { name: 'Delete' }).nth(1);
    }

    async addElement() {
        await this.addElementBtn.click();
        await expect(this.firstDeleteBtn).toBeVisible();
    }

    async deleteElements() {
        while (await this.firstDeleteBtn.isVisible()) {
            await this.firstDeleteBtn.first().click();
        }
    }


}