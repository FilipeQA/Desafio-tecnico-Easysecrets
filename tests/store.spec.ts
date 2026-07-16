import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpModal } from '../pages/SignUpModal';

test('Deve abrir a página da Demoblaze', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.open();

    await expect(page.getByRole('link', { name: 'PRODUCT STORE'})).toBeVisible();


});

test('Deve cadastrar um novo usuário com sucesso', async ({ page }) => {
  const homePage = new HomePage(page);
  const signUpModal = new SignUpModal(page);

  const username = `filipeqa_${Date.now()}`;
  const password = 'Easy123!';

  await homePage.open();
  await homePage.openSignUpModal();

  await signUpModal.fillUsername(username);
  await signUpModal.fillPassword(password);

  const dialogPromise = page.waitForEvent('dialog');

  await signUpModal.clickSignUp();

  const dialog = await dialogPromise;

  expect(dialog.message()).toBe('Sign up successful.');

  await dialog.accept();
});