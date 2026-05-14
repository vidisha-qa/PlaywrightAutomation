# Playwright Automation Framework

## Overview

This project is a Playwright automation framework created for the technical evaluation assignment.

The framework is built using **Playwright with TypeScript** and follows a **data-driven testing approach** using JSON test data.

The main goal of this framework is to avoid code duplication and make the automation scalable, reusable, and easy to maintain.

---

# Tech Stack

* Playwright
* TypeScript
* Node.js
* JSON test data
* dotenv for environment variables

---

# Framework Structure

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
```

---

# Key Features

* Page Object Model (POM) framework design
* Data-driven testing using JSON
* Reusable page methods and locators
* Environment variable handling using `.env`
* Scalable test structure
* Dynamic test execution using looped test data
* HTML reporting with readable test steps
* Screenshot capture on failure
* Video recording on failure
* Trace collection on retry
* Parallel execution support using Playwright workers

---

# Application Under Test

Demo Application:

```txt
https://animated-gingersnap-8cf7f2.netlify.app/
```

---

# Test Data Management

All test scenarios are maintained inside:

```txt
test-data/taskData.json
```

The framework dynamically reads:

* Application name
* Task name
* Column name
* Tags

This allows adding new scenarios without changing test logic.

Example:

```json
{
  "testCase": "Test Case 1",
  "application": "Web Application",
  "taskName": "Implement user authentication",
  "column": "To Do",
  "tags": ["Feature", "High Priority"]
}
```

---

# Environment Configuration

Credentials are stored using environment variables.

Create a `.env` file:

```env
APP_USERNAME=admin
APP_PASSWORD=password123
```

Sample reference file:

```txt
.env.example
```

---

# Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests with multiple workers:

```bash
npx playwright test --workers=3
```

Run a specific test file:

```bash
npx playwright test tests/testValidation.spec.ts
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

---

# HTML Reporting

Open Playwright HTML report:

```bash
npx playwright show-report
```

If the default report port is already occupied:

```bash
npx playwright show-report --port 9324
```

---

# Reporting Features

The framework includes:

* Readable `test.step()` reporting
* Screenshot capture on failure
* Video recording on failure
* Trace collection on retry
* HTML execution report

Example report steps:

* Login to Demo App
* Navigate to "Web Application"
* Verify task exists in expected column
* Confirm expected tags

---

# Framework Design Approach

The framework follows:

* Page Object Model (POM)
* Data-driven automation approach
* Separation of concerns
* Reusable page methods
* Centralized test data management
* Minimal code duplication
* Easy maintainability and scalability

---

# Future Enhancements

Possible future improvements:

* CI/CD integration using GitHub Actions or Jenkins
* Cross-browser execution
* API testing integration
* Allure reporting integration
* Utility/helper classes
* Database or Excel-driven test data
* Docker execution support
* Playwright fixtures optimization

---

# Author

Vidisha Shedge
