const { expect } = require('@playwright/test');

// define login class
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  // load login page
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // method for logging in
  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // check login errors
  async expectLoginError() {
    await this.page.locator(this.errorMessage).isVisible();
  }
}

module.exports = LoginPage;
