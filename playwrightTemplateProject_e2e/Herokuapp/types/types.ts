import { AddRemoveElements } from "../pages/addRemoveElements"
import { Checkboxes } from "../pages/checkboxes";
import { DragAndDrop } from "../pages/dragAndDrop";
import { FloatingMenu } from "../pages/floatingMenu";
import { Hovers } from "../pages/hovers";
import { LoginPage } from "../pages/loginPage";
import { UploadFile } from "../pages/uploadFile";
import { ImageProcessing } from "../pages/imageProcessing";

//Types for Fixture
export type CreateFixtures = {
    addRemoveElements: AddRemoveElements;
    checkboxes: Checkboxes;
    hovers: Hovers;
    uploadFile: UploadFile;
    dragAndDrop: DragAndDrop;
    visualComparisons: ImageProcessing;
    floatingMenu: FloatingMenu;
    loginPage: LoginPage;
}

//Types for Img Config
export type ConfigImgType = {
    [key: string]: string
}
