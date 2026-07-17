import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpModal } from '../pages/SignUpModal';
import { LogInModal } from '../pages/LoginModal';
import { ProductPage } from '../pages/ProductPage';

test('Deve abrir a página da Demoblaze', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.open();

    await expect(page.getByRole('link', { name: 'PRODUCT STORE'})).toBeVisible();


});

test('Deve cadastrar um novo usuário com sucesso', async ({ 
    page, 
    browserName, 
}) => {
  const homePage = new HomePage(page);
  const signUpModal = new SignUpModal(page);

  const username = `filipeqa_${browserName}_${Date.now()}`;
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

test('Deve logar com usuário já cadastrado com sucesso', async ({ 
    page, 
    browserName,
 }) => {
  const homePage = new HomePage(page);
  const signUpModal = new SignUpModal(page);
  const logInModal = new LogInModal(page);

  const username = `filipeqa_${browserName}_${Date.now()}`;
  const password = 'Easy123!';

  await homePage.open();

  // Cadastro do usuário
  await homePage.openSignUpModal();
  await signUpModal.fillUsername(username);
  await signUpModal.fillPassword(password);

  const dialogPromise = page.waitForEvent('dialog');

  await signUpModal.clickSignUp();

  const dialog = await dialogPromise;

  expect(dialog.message()).toBe('Sign up successful.');

  await dialog.accept();

  // Login com o usuário cadastrado
  await homePage.openLogInModal();
  await logInModal.fillUsername(username);
  await logInModal.fillPassword(password);
  await logInModal.clickLogIn();

  //Validação de login
  await expect(
    page.getByText(`Welcome ${username}`, { exact: true })
  ).toBeVisible();

});

test('Deve adicionar um produto no carrinho', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.open();
    await homePage.openProduct('Samsung galaxy s6')

    await expect( 
      page.getByRole('heading', { name: 'Samsung galaxy s6' })
    ).toBeVisible();

    const dialogPromise = page.waitForEvent('dialog');

    await productPage.addToCart();

    const dialog = await dialogPromise;

    expect(dialog.message()).toBe('Product added');

    await dialog.accept();

});

