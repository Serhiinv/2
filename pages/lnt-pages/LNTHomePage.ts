import { Page } from '@playwright/test';

export class LNTHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://staging-lyonandturnbull.auctionfusion.com/');
  }

}
