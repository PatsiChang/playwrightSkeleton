import { test } from "../fixture/createFixtures";

//Testing Hover action
test('floating Menu after scrolling', async ({ page, floatingMenu }) => {
    await floatingMenu.navigate();
    await floatingMenu.scrollPage();
    await floatingMenu.assertMenuBar();

});