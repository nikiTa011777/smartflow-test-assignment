import { Locator, Page, expect } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;

  private readonly dropdownSelector = '.nav-link.dropdown-toggle.ng-scope.d-flex';
  private readonly logoutButtonSelector = 'text=Logout';
  private readonly alertDialogSelector = '.modal-dialog.modal-alert';
  private readonly confirmLogoutSelector = 'button.btn.btn-sm.btn-simple.btn-outline.btn-just-icon';
  private readonly usernameInputSelector = 'input[name="username"]';

  readonly dropdownButton: Locator;
  readonly logoutButton: Locator;
  private readonly alertDialog: Locator;
  private readonly yesButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dropdownButton = page.locator(this.dropdownSelector);
    this.logoutButton = page.locator(this.logoutButtonSelector);
    this.alertDialog = page.locator(this.alertDialogSelector);
    this.yesButton = this.alertDialog.locator(this.confirmLogoutSelector);
  }

  async logOut() {
    await this.dropdownButton.click();
    await this.logoutButton.click();
    await this.alertDialog.waitFor({ state: 'visible' });
    await this.page.locator('text=YES').click();
    await this.assertOnLoginPage();
  }

  async assertOnLoginPage() {
    await this.page.waitForURL(/auth0\.com\/login/);
    await expect(this.page).toHaveURL(/auth0\.com\/login/);
    await expect(this.page.locator(this.usernameInputSelector)).toBeVisible();
  }
}
