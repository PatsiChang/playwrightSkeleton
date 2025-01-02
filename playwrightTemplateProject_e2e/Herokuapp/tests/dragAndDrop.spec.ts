import { test } from "../fixture/createFixtures";

//Testing Drag and Drop
// In this example, you will see that this test is going to fail in Webkit. In modern website development,
// we should try our best to optimise our codes to make it consistent on all browsers
test('Drag and Drop', async ({ page, dragAndDrop }) => {
    await dragAndDrop.navigate();
    await dragAndDrop.dragAtoB();
    await dragAndDrop.compareImage();
});