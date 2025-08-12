import { test, expect } from "@playwright/test";
import { LNTCreateAccountPage } from "../../pages/lnt-pages/LNTCreateAccountPage";
import { LNTHomePage } from "../../pages/lnt-pages/LNTHomePage";
import { LNTHeaderMenuPage } from "../../pages/lnt-pages/LNTHeaderMenuPage";

test("tests Verify Create Account Page", async ({ page }) => {

  await new LNTHomePage(page).open();
  const headerMenu = new LNTHeaderMenuPage(page);
  await headerMenu.logIn();
  await headerMenu.createAccount();

  const createAccount = new LNTCreateAccountPage(page);
  await createAccount.verifyHeader();
  await createAccount.verifyTextDescription1();
  await createAccount.verifyTextDescription2();

  await createAccount.verifyGoogleLogin();
  await createAccount.verifyAppleLogin();
  // await createAccount.verifyFacebookLogin();
  await createAccount.verifyEmailLogin('Create an account');
});