import { Page } from '@playwright/test';

export class LogInModal {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillUsername(username: string) {
    await this.page
      .locator('#loginusername').fill(username);
  }

  async fillPassword(password: string) {
    await this.page
      .locator('#loginpassword').fill(password);
  }

  async clickLogIn() {
    await this.page
      .getByRole('button', { name: 'Log in', exact: true })
      .click();
  }
}