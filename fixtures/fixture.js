// import test object and load test users
const { test: base } = require('@playwright/test');
const users = require('./users');

// create custom fixture
const test = base.extend({
  user: async ({}, use, testInfo) => {
    // extract username
    const usernameParam = testInfo.title.split(' - ')[1];
    const user = users.find(u => u.username === usernameParam);
    if (!user) throw new Error(`User not found: ${usernameParam}`);
    await use(user);
  }
});

module.exports = { test, expect: test.expect };
