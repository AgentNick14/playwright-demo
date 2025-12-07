// import all the fixtures and page objects
const { test, expect } = require('../../fixtures/fixture');
const LoginPage = require('../../pages/loginPage');
const InventoryPage = require('../../pages/inventoryPage');
const CartPage = require('../../pages/cartPage');
const CheckoutPage = require('../../pages/checkoutPage');
const users = require('../../fixtures/users');

// loop through users
for (const user of users) {
  test(`Full workflow - ${user.username}`, async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    // go to login page and login
    await login.goto();
    await login.login(user.username, user.password);

    // if user should not log in
    if (!user.shouldLogin) {
      await login.expectLoginError();
      return;
    }

    // verify inventory page
    await inventory.verifyPage();

    // add products to cart
    await inventory.addItem(0);
    await inventory.addItem(3);
    await inventory.goToCart();
    await cart.verifyItems(2);

    // check out (passing checkout information)
    await cart.checkout();
    await checkout.fillInfo('Nicholas', 'Naicker', '7560');
    await checkout.finishCheckout();

  });
}
