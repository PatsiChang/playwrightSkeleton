import { AddRemoveElements } from "../pages/addRemoveElements";
import { Checkboxes } from "../pages/checkboxes";
import { DragAndDrop } from "../pages/dragAndDrop";
import { FloatingMenu } from "../pages/floatingMenu";
import { Hovers } from "../pages/hovers";
import { LoginPage } from "../pages/loginPage";
import { UploadFile } from "../pages/uploadFile";
import { ImageProcessing } from "../pages/imageProcessing";
import { CreateFixtures } from "../types/types";
import { test as base } from "@playwright/test";

export const test = base.extend<CreateFixtures>({
    addRemoveElements: async ({ page }, use) => await use(new AddRemoveElements(page)),
    checkboxes: async ({ page }, use) => await use(new Checkboxes(page)),
    hovers: async ({ page }, use) => await use(new Hovers(page)),
    uploadFile: async ({ page }, use) => await use(new UploadFile(page)),
    dragAndDrop: async ({ page }, use) => await use(new DragAndDrop(page)),
    visualComparisons: async ({ page }, use) => await use(new ImageProcessing(page)),
    floatingMenu: async ({ page }, use) => await use(new FloatingMenu(page)),
    loginPage: async ({ page }, use) => await use(new LoginPage(page)),


})