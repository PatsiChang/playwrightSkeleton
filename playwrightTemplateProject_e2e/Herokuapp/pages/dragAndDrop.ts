import { expect, Locator, Page } from "playwright/test";
import { BasePage } from "./basePage";
import { URLs } from "../env.setup";

export class DragAndDrop extends BasePage {
    
    readonly elementA: Locator;
    readonly elementB: Locator;
    readonly pageBody: Locator;


    constructor(page: Page) {
        super(
            page,
            `${URLs.HEROUAPP_URL}drag_and_drop`,
            page.getByRole('heading', { name: 'Drag and Drop' })
        )
        this.elementA = page.locator('#column-a');
        this.elementB = page.locator('#column-b');
        this.pageBody = page.locator('body');

    }

    //Drag ElementA to ElementB's location
    async dragAtoB() {
        await this.elementA.dragTo(this.elementB);
        await this.page.waitForTimeout(1000);
    }

    async compareImage() {
        await expect(this.pageBody).toMatchAriaSnapshot(`
            - link "Fork me on GitHub":
              - img "Fork me on GitHub"
            - heading "Drag and Drop" [level=3]
            - banner: B
            - banner: A
            `);
    }

}