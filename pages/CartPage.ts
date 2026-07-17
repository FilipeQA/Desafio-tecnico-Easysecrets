import { Page } from "@playwright/test";

export class CartPage {
    page: Page

    constructor(page:Page) {
        this.page = page;
    }

    async removeProduct() {
    await this.page
      .getByRole('link', { name: 'Delete' })
      .click();
    }

}

