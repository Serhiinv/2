import { Page } from '@playwright/test';

export class EPLoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async login(user: { username: string; password: string }) {
    await this.goto();
    await this.page.fill('input[name="username"]', user.username);
    await this.page.fill('input[name="password"]', user.password);
    await this.page.click('button[type="submit"]');
  }

  async isLoggedIn(): Promise<boolean> {
    // Example: check for a logout button or user profile
    return this.page.isVisible('text=Logout');
  }
}
