import { expect } from "playwright/test";
import { test } from "../fixture/createFixtures";

//Testing Login action
test('login @smoke', async ({ page, loginPage }) => {
    await loginPage.navigate();
    await loginPage.login({ userName: "wrongUsername", password: "wrongPassword"});
    await expect(page.getByText('Your username is invalid! ×')).toBeVisible();

    await loginPage.login({ userName: "tomsmith", password: "SuperSecretPassword!"});
    await loginPage.isLoggedIn();
});