import { Page } from '@playwright/test';

export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
//Acessa a pagina demoblaze
  async open() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

//Abre o modal de SignUp
  async openSignUpModal() {
    await this.page.getByRole('link', { name: 'Sign up' }).click();
  }

  async openLogInModal() {
    await this.page.getByRole('link', { name: 'Log in' }).click();
  }

  async openProduct(productName: string) {
    await this.page
    .getByRole('link', { name: productName, exact: true }).click();
  }

}
