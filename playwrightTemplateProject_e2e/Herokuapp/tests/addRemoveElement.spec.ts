import { expect } from "@playwright/test";
import { test } from "../fixture/createFixtures";
import testDatas from '../data/testData.json';


const testData = testDatas.find((data)=> data.id === "addRemoveElement");

//Testing Adding multiple html Elements according to data from testData.json
test('Add multiple elements and Remove them on Herouapp', async ({ page, addRemoveElements }) => {
    await addRemoveElements.navigate();

    if (testData?.numOfelements) {
        await Promise.all(
            Array.from({ length: testData.numOfelements }, async () => {
                await addRemoveElements.addElement();
            })
        );
    }

    await addRemoveElements.deleteElements();
    await expect(addRemoveElements.firstDeleteBtn).not.toBeVisible();
});