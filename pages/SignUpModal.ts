import { Page } from '@playwright/test';

export class SignUpModal {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillUsername(username: string) {
    await this.page
      .locator('#sign-username').fill(username);
  }

  async fillPassword(password: string) {
    await this.page
      .locator('#sign-password').fill(password);
  }

  async clickSignUp() {
    await this.page
      .getByRole('button', { name: 'Sign up', exact: true })
      .click();
  }
}