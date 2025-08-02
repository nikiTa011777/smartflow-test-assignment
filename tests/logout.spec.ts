import { test } from '@playwright/test'
import { LogoutPage } from '../pages/logout.page'
import { LoginPage } from '../pages/login.page'
import { users } from '../config/testData';


test('user can logout and returns to login page', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const lastpage = new LogoutPage(page);

    await loginPage.login(users.domain, users.username, users.password);

    await lastpage.logOut();

})