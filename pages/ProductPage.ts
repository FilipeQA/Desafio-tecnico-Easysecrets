import { Page } from "@playwright/test";

export class ProductPage {
    page: Page

    constructor(page:Page) {
        this.page = page;
    }

    async addToCart() {
      await this.page
        .getByRole('link', { name: 'Add to cart', exact: true })
        .click();
    }
}

