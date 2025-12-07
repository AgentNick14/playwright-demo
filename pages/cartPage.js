const { expect } = require('@playwright/test');

// class to define cart locators
class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = '.cart_item';
    this.checkoutButton = '#checkout';
  }

  // method to verify number of items in cart
  async verifyItems(count) {
    await expect(this.page.locator(this.cartItems)).toHaveCount(count);
  }

  // method to navigate to checkout
  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;
