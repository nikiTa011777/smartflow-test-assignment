import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import {users,formData} from '../config/testData';

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(users.domain,users.username,users.password);
  await loginPage.verifyLoginSuccess();
 
});
