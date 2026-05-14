
# Playwright Automation Framework

## Overview

This project is a Playwright automation framework created for the technical evaluation assignment.  
The framework is built using **Playwright with TypeScript** and follows a **data-driven testing approach** using JSON test data.

The main goal of this framework is to avoid code duplication and make the automation scalable, reusable, and easy to maintain.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- JSON test data
- dotenv for environment variables

---

## Framework Structure

```txt
PlaywrightAutomation/
│
├── pages/
│   ├── LoginPage.ts
│   └── DashboardPage.ts
│
├── tests/
│   └── testValidation.spec.ts
│
├── test-data/
│   └── taskData.json
│
├── .env.example
├── playwright.config.ts
├── package.json
└── README.md

## Key Features

- Page Object Model (POM) framework design
- Data-driven testing using JSON
- Reusable page methods and locators
- Environment variable handling using `.env`
- Scalable test structure
- Dynamic test execution using looped test data
- HTML reporting with readable test steps
- Screenshot capture on failure
- Video recording on failure
- Trace collection on retry
- Parallel execution support using Playwright workers

---

## Application Under Test

Demo Application:

```txt
https://animated-gingersnap-8cf7f2.netlify.app/

## Environment Configuration

Credentials are stored using environment variables.

Create a .env file:

```txt
APP_USERNAME=admin
APP_PASSWORD=password123

Sample reference file:

```txt
.env.example

## Run Tests

Run all tests:

```bash
npx playwright test

## Future Enhancements

Possible future improvements:

CI/CD integration using GitHub Actions or Jenkins
Cross-browser execution
API testing integration
Allure reporting integration
Utility/helper classes
Database or Excel-driven test data
Docker execution support
Playwright fixtures optimization

## Author

Vidisha Shedge
