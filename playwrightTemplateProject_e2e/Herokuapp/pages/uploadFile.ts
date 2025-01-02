import { expect, Locator, Page } from "playwright/test";
import { BasePage } from "./basePage";
import { configImg, URLs } from "../env.setup";

export class UploadFile extends BasePage {
    
    readonly chooseFileBtn: Locator;
    readonly uploadBtn: Locator;
    readonly fileUploadedHeader: Locator;

    constructor(page: Page) {
        super(
            page,
            `${URLs.HEROUAPP_URL}upload`,
            page.getByRole('heading', { name: 'File Uploader' })
        )
        this.chooseFileBtn = page.locator('#file-upload');
        this.uploadBtn = page.getByRole('button', { name: 'Upload' });
        this.fileUploadedHeader = page.getByRole('heading', { name: 'File Uploaded!' });
    }

    async uploadFile() {
        await this.chooseFileBtn.click();
        await this.chooseFileBtn.setInputFiles(configImg.herokuappHomePage);
        await this.uploadBtn.click();
        await expect(this.fileUploadedHeader).toBeVisible();
    }

}