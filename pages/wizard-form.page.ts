import {Page} from "@playwright/test";

export class WizardFormPage {
    readonly page :Page;

    private WizardCard = '.card-footer.ng-binding';
    private nameInput = "#text_Main_FlexFieldChar2";
    private emailInput = '#text_Main_FlexFieldChar8';
    private NextButton = '.wizardNextButton button';
    private closeButton = this.NextButton;
    private wizardText= 'Wizard Form';
    private closeText = 'Close';


 

    constructor(page:Page){
        this.page = page;
    }
    
    async fillForm(name:string,email:string){

    await this.page.locator(this.WizardCard, { hasText:this.wizardText }).click();
    await this.page.fill(this.nameInput,name);
    await this.page.fill(this.emailInput,email);
    await this.page.click(this.NextButton);
    await this.page.locator(this.closeButton, { hasText: this.closeText }).click();
    
    }

    }