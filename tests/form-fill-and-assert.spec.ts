import { test } from '@playwright/test'
import { WizardFormPage } from '../pages/wizard-form.page'
import { MyFormsPage } from '../pages/my-forms.page'
import { users,formData } from '../config/testData';
import { LoginPage } from '../pages/login.page';


test ('Fill form and assert filled form data', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const myForms = new MyFormsPage(page);
    
    await loginPage.login(users.domain,users.username, users.password);
    const WizardForm = new WizardFormPage(page);
    
    await WizardForm.fillForm(formData.name,formData.email);

    await myForms.assertFormData(formData.name,formData.email);

})