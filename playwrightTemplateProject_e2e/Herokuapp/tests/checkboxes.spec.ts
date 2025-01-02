import { expect } from "@playwright/test";
import { test } from "../fixture/createFixtures";

//Testing Check and Uncheck boxes
test('checkboxes on Herouapp', async ({ page, checkboxes }) => {
    await checkboxes.navigate();

    await checkboxes.checkFirstBox();
    await checkboxes.assertFirstBoxChecked();
    await checkboxes.uncheckFirstBox();
    await expect(checkboxes.checkbox1).not.toBeChecked();
});