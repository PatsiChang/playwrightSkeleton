import { configImg } from "../env.setup";
import { test } from "../fixture/createFixtures";

//Testing File upload
test('Visual Comparisons @visualCompare', async ({ page, visualComparisons }) => {
    await visualComparisons.navigate();
    await visualComparisons.compareScreenshots(configImg.testScreenShot);
}); 