import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLs } from "../env.setup";

export class LoginPage extends BasePage {
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly secureAreaHeaing: Locator;
    readonly logoutBtn: Locator;

    constructor(page: Page) {
        super(
            page,
            `${URLs.HEROUAPP_URL}login`,
            page.getByRole('heading', { name: 'Login Page' })
        )
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginBtn =  page.getByRole('button', { name: ' Login' });
        this.logoutBtn = page.getByRole('link', { name: 'Logout' });
        this.secureAreaHeaing = page.getByRole('heading', { name: 'Secure Area', exact: true });
    }

    async login(user: { userName: string, password: string }) {
        await this.username.fill(user.userName)
        await this.password.fill(user.password)
        await this.loginBtn.click();
        await this.page.waitForLoadState();
    }

    async isLoggedIn() {
        await expect(this.page.getByText('You logged into a secure area')).toBeVisible();
        await expect(this.secureAreaHeaing).toBeVisible();
        await expect(this.logoutBtn).toBeVisible();
    }

}