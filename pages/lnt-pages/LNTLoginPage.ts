import { expect, Page } from '@playwright/test';

export class LNTLoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyHeader() {
    await expect(this.page.locator('h1:has-text("Login")')).toBeVisible();
  }

  async verifyTextDescription1() {
    await expect(this.page.locator('text=Our new password-free system is simple and secure. ')).toBeVisible();
  }

  async verifyTextDescription2() {
    await expect(this.page.locator('text=Please choose an option below and make sure you log in with the same email address you used to create your account.')).toBeVisible();
  }
}