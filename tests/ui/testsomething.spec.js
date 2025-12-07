// const { test, expect } = require('../../fixtures/fixture');
// const LoginPage = require('../../pages/loginPage');
// const InventoryPage = require('../../pages/inventoryPage');
// const CartPage = require('../../pages/cartPage');
// const CheckoutPage = require('../../pages/checkoutPage');
// const users = require('../../fixtures/users');

// for (const user of users) {
//   test(`Full workflow - ${user.username}`, async ({ page }) => {
//     const login = new LoginPage(page);
//     const inventory = new InventoryPage(page);
//     const cart = new CartPage(page);
//     const checkout = new CheckoutPage(page);

//     await login.goto();
//     await login.login(user.username, user.password);

//     // --------------------------
//     // ERROR USER BEHAVIOUR
//     // --------------------------
//     if (user.username === 'error_user') {
//       await login.expectLoginError();
//       test.info().annotations.push({
//         type: 'Known Issue',
//         description: 'error_user fails login due to backend error (expected)'
//       });
//       return;
//     }

//     // --------------------------
//     // LOCKED_OUT_USER BEHAVIOUR (if included in your users.json)
//     // --------------------------
//     if (!user.shouldLogin) {
//       await login.expectLoginError();
//       return;
//     }

//     // --------------------------
//     // STANDARD + PROBLEM USER
//     // --------------------------
//     await inventory.verifyPage();

//     // PROBLEM_USER IMAGE BUG CHECK
//     if (user.username === "problem_user") {
//       await inventory.verifyImageBugSoft();   // Soft assertion so test continues
//     }

//     // --------------------------
//     // ADD ITEMS TO CART
//     // --------------------------
//     await inventory.addItem(0);
//     await inventory.addItem(3);

//     await inventory.goToCart();

//     // PROBLEM_USER CART COUNT BUG
//     if (user.username === "problem_user") {
//       // Soft expect: cart count often wrong
//       await expect.soft(cart.page.locator('.cart_item')).toHaveCount(2);
//       test.info().annotations.push({
//         type: 'Known Issue',
//         description: 'problem_user often fails to add both items to cart'
//       });
//     } else {
//       await cart.verifyItems(2);
//     }

//     // --------------------------
//     // CHECKOUT (problem_user can still continue)
//     // --------------------------
//     await cart.checkout();
//     await checkout.fillInfo('John', 'Doe', '12345');
//     await checkout.finishCheckout();
//   });
// }