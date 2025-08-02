import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  private readonly domainInputSelector = "input[name='domain']";
  private readonly domainButtonSelector = '#btn_submit';

  private readonly usernameInputSelector = '#username';
  private readonly passwordInputSelector = '#password';
  private readonly loginButtonSelector = '#btn_submit_auth0';

  constructor(page: Page) {
    this.page = page;
  }

  async selectDomain(domainName: string) {
    await this.page.goto('/#!/domainLogin');
    await this.page.fill(this.domainInputSelector, domainName);
    await this.page.click(this.domainButtonSelector);
  }

  async login(domain: string, username: string, password: string) {
    await this.selectDomain(domain);
    await this.page.fill(this.usernameInputSelector, username);
    await this.page.fill(this.passwordInputSelector, password);
    await this.page.click(this.loginButtonSelector);
    await this.page.waitForURL(/#!\/main\?firstLoad=true/, { timeout: 10000 });
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/#!\/main\?firstLoad=true/, { timeout: 15000 });
  }
}
