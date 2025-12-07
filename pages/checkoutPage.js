const { expect } = require('@playwright/test');

// class to define locators on checkout page
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.completeText = '.complete-header';
  }

  // method to fill out the form
  async fillInfo(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  // method to confirm checkout
  async finishCheckout() {
    await this.page.click(this.finishButton);
    await expect(this.page.locator(this.completeText))
      .toHaveText('Thank you for your order!');
  }
}

module.exports = CheckoutPage;
