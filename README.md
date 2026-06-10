# Playwright Assessment – Demoblaze Automation

## Overview

This project contains automated test scripts developed using Playwright with TypeScript for the Demoblaze e-commerce website.

Website: https://www.demoblaze.com

## Technologies Used

- Playwright
- TypeScript
- Node.js
- JSON Test Data

## Project Structure

project/
├── tests/
│   ├── categories.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   ├── login.spec.ts
│   ├── logout.spec.ts
│   ├── invalidLogin.spec.ts
│   ├── multipleProducts.spec.ts
│   ├── removeCart.spec.ts
│   └── emptyCheckout.spec.ts
│
├── testdata/
│   └── users.json
│
├── playwright.config.ts
├── package.json
└── README.md

## Test Scenarios Covered

### Navigation
- Verify Phones category
- Verify Laptops category
- Verify Monitors category

### Product Validation
- Verify product details page
- Verify product visibility

### Cart
- Add product to cart
- Add multiple products to cart
- Remove product from cart

### Authentication
- Valid login
- Invalid login
- Logout functionality

### Checkout
- Successful checkout
- Checkout with empty fields
- Form validation scenarios

## Installation

Clone the repository:

```bash
git clone https://github.com/keziashaji/playwright-assessment.git
```

Navigate to the project folder:

```bash
cd playwright-assessment/project
```

Install dependencies:

```bash
npm install
```

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run Firefox only:

```bash
npx playwright test --project=firefox
```

Run Chromium only:

```bash
npx playwright test --project=chromium
```

## Generate Report

```bash
npx playwright show-report
```

## Test Data

External test data is maintained in:

```text
testdata/users.json
```

## Author

Kezia Shaji
