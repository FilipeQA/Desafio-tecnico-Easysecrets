import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Deve abrir a página da Demoblaze', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.open();

    await expect(page.getByRole('link', { name: 'PRODUCT STORE'})).toBeVisible();


});