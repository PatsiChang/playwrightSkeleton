import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { ConfigImgType } from './types/types';

dotenv.config();

const __dirname: string = dirname(__filename);

export const URLs = {
    HEROUAPP_URL: process.env.HEROUAPP,
    UIPLAYGROUND_URL: process.env.UIPLAYGROUND,
    OPENCART_URL: process.env.OPENCART,
    ORANGEHRM_URL: process.env.ORANGEHRM,
}


export const configImg: ConfigImgType = {
    herokuappHomePage: join(
        __dirname,
        './assets/herokuappHomePage.png',
    ),
    expectedScreenShot: join(
        __dirname,
        './assets/expectedScreenShot.png'
    ),
    testScreenShot: join(
        __dirname,
        './assets/testScreenShot.png'
    )
}


