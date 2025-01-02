import { test } from "../fixture/createFixtures";

//Testing Hover action
test('hover', async ({ page, hovers }) => {
    await hovers.navigate();
    await hovers.hoverUser(1);
    await hovers.hoverUser(2);

});