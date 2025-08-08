import { Page } from '@playwright/test';

export class LNTHeaderMenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async logIn() {
    await this.page.locator('text=Log in').click();
  }

  async createAccount() {
    await this.page.locator('text=Create account').click();
  }

  async signIn() {
    await this.page.locator('text=Sign in').click();
  }

}