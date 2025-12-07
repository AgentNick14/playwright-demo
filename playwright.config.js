
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,

  reporter: [
    ['html', { open: 'never' }],     // pretty HTML report
    ['json', { outputFile: 'reports/test-report.json' }],
    ['junit', { outputFile: 'reports/results.xml' }],
    ['list']                         // clean CLI output
  ],

  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  }
});