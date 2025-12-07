const { expect } = require('@playwright/test');

// define inventory class
class InventoryPage {
  constructor(page) {
    this.page = page;
    this.items = '.inventory_item';
    this.addButtons = 'button[id^="add-to-cart-"]';
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
    this.title = '.title';
  }
 
  // verify inventory page is loaded
  async verifyPage() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.locator(this.title)).toHaveText('Products');
  }
 
  // method to add item
  async addItem(index) {
    await this.page.locator(this.addButtons).nth(index).click();
  }
 
  // method to remove item
  async removeItem(index) {
    await this.page.locator('button[id^="remove-"]').nth(index).click();
  }
 
  // method to go to cart
  async goToCart() {
    await this.page.click(this.cartLink);
  }
 
  // method to count the number of items in the cart
  async cartItemCount() {
    const badge = this.page.locator(this.cartBadge);
    return badge.count();
  }
}
 
module.exports = InventoryPage;

