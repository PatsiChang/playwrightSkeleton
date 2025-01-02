import { expect } from "playwright/test";
import { test } from "../fixture/createFixtures";

//Testing File upload
test('uploadFile', async ({ page, uploadFile }) => {
    await uploadFile.navigate();
    await uploadFile.uploadFile();
    await expect(page.getByText('herokuappHomePage.png')).toBeVisible();
});