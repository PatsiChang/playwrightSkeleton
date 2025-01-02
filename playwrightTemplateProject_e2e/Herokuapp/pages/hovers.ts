import { expect, Locator, Page } from "playwright/test";
import { BasePage } from "./basePage";
import { URLs } from "../env.setup";

export class Hovers extends BasePage {
    
    readonly checkboxHeader: Locator;
    readonly user1Img: Locator;
    readonly user2Img: Locator;
    readonly user1: Locator;
    readonly user2: Locator;

    constructor(page: Page) {
        super(
            page,
            `${URLs.HEROUAPP_URL}hovers`,
            page.getByRole('heading', { name: 'Hovers' })
        )
        this.user1Img = page.getByRole('img', { name: 'User Avatar' }).nth(0);
        this.user2Img = page.getByRole('img', { name: 'User Avatar' }).nth(1);
        this.user1 = page.getByRole('heading', { name: 'name: user1' });
        this.user2 = page.getByRole('heading', { name: 'name: user2' });
    }

    async hoverUser(user: number) {
        const userMap = [
            { img: this.user1Img, caption: this.user1 },
            { img: this.user2Img, caption: this.user2 }
        ];

        const selectedUser = userMap[user - 1];
        
        // Hover over the selected user's image and check if the corresponding heading is visible
        await selectedUser.img.hover();
        await expect(selectedUser.caption).toBeVisible();
    }

}