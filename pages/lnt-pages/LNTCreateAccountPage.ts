import { expect, Page } from '@playwright/test';
import { time } from 'console';
import { TIMEOUT } from 'dns';

export class LNTCreateAccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyHeader() {
    await expect(this.page.locator('h1:has-text("Create Account")')).toBeVisible();
  }

  async verifyTextDescription1() {
    await expect(this.page.locator('text=You can use your account to register for auctions, place bids, request valuations and personalise your notifications.')).toBeVisible();
  }

  async verifyTextDescription2() {
    await expect(this.page.locator('text=Our new password-free system is simple and secure. Please choose one of the options below.')).toBeVisible();
  }

  async verifyGoogleLogin() {
    const googleLogo = this.page.locator('div[class="MuiBox-root mui-1i3004h"]').nth(0)
    await expect(googleLogo).toBeVisible();
    await googleLogo.click();
    await expect(this.page.locator('text=Sign in with Google')).toBeVisible();
    await this.page.goBack();
  }

  async verifyAppleLogin() {
    const appleLogo = this.page.locator('div[class="MuiBox-root mui-1i3004h"]').nth(1);
    await expect(appleLogo).toBeVisible();
    await appleLogo.click();
    await expect(this.page.locator("//span[contains(text(),'Apple')]").nth(1)).toBeVisible();
    await this.page.goBack();
  }

  async verifyFacebookLogin() {
    const facebookLogo = this.page.locator('div[class="MuiBox-root mui-1i3004h"]').nth(2);
    await expect(facebookLogo).toBeVisible();
    await facebookLogo.click();
    await expect(this.page.locator("//span[contains(text(),'from Facebook')]")).toBeVisible();
    await this.page.goBack();   
  }

  async verifyEmailLogin() {
    const emailAddress = this.page.locator("input[type='email']");
    await expect(this.page.locator("//label[contains(text(),'Email Address')]")).toBeVisible();

    await this.page.locator("//span[contains(text(),'Create an account')]").click();

    await expect(this.page.locator('text=Please enter a valid email address')).toBeVisible();
    await emailAddress.fill('qwerty');
    await this.page.locator("//span[contains(text(),'Create an account')]").click();
    await expect(this.page.locator('text=Please enter a valid email address')).toBeVisible();
    await emailAddress.fill('test@g.com');
    await this.page.locator("//span[contains(text(),'Create an account')]").click();
    await expect(this.page.locator('text=Please check your email and click the link to log in.')).toBeVisible({timeout: 10_000});
  }

}