# Playwright Demo: UI & API Automation

## Project Overview

This repository demonstrates a **Playwright automation framework** for both **UI and API testing**.
It includes test scripts for:

* User authentication and full workflow on **SauceDemo** (UI)
* Inventory and shopping cart management (UI)
* Checkout process with error handling (UI)
* Booking CRUD operations on **Restful-Booker API** (API)
* Authentication and response validation (API)

The project uses **Page Object Model (POM)**, **fixtures for test data**, and structured reporting.

---

## Project Structure

```
playwright-demo/
├─ pages/                  # UI page object classes
│  ├─ loginPage.js
│  ├─ inventoryPage.js
│  ├─ cartPage.js
│  └─ checkoutPage.js
├─ tests/
│  ├─ ui/                  # UI test specs
│  │  ├─ authentication.spec.js
│  │  └─ workflow.spec.js
│  └─ api/                 # API test specs
│     ├─ booking.spec.js
│     └─ auth.spec.js
├─ fixtures/               # Test data, users, and helper functions
│  ├─ users.js
│  └─ fixture.js
├─ playwright.config.js    # Playwright configuration
├─ package.json
└─ README.md
```

---

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/AgentNick14/playwright-demo.git
cd playwright-demo
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

### UI Tests

```bash
npx playwright test tests/ui
```

### API Tests

```bash
npx playwright test tests/api
```

### Run All Tests with HTML Report

```bash
npx playwright test --reporter=html
npx playwright show-report
```

---

## Test Data

* User credentials for SauceDemo are stored in `/fixtures/users.js`
* Booking payloads for Restful-Booker API are stored in `/fixtures/bookingPayload.json`

---

## Reporting

* HTML reports generated in `playwright-report/`
* Screenshots automatically taken on test failures

---

## Best Practices Implemented

* **Page Object Model (POM)** for UI tests
* **Fixtures** for reusable test data and setup
* **Assertions** for status codes and response payloads
* Organized **UI vs API tests** for clarity

---

## Continuous Integration (Optional)

A **GitHub Actions workflow** can run tests automatically on every push:

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test --reporter=html
      - uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
```

---

**Author:** Nicholas Naicker
**Repository:** [playwright-demo](https://github.com/AgentNick14/playwright-demo)
