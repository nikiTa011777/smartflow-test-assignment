import { Page, expect } from '@playwright/test'

export class MyFormsPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;

    }


    async assertFormData(name: string, email: string) {
        await this.page.locator('text=My Forms').click()
        await this.page.locator('text=Wizard Form').first().click();
        await expect(this.page.locator('#text_Main_FlexFieldChar2')).toHaveValue(name);
        await expect(this.page.locator('#text_Main_FlexFieldChar8')).toHaveValue(email);
    }


}
