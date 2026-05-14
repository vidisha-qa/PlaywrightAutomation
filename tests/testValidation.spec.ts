/// <reference types="node" />
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import taskData from '../test-data/taskData.json';

test.describe('Data Driven Task Validation Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Login to Demo App', async () => {
      await loginPage.goto();
      await loginPage.login(
        process.env.APP_USERNAME!,
        process.env.APP_PASSWORD!
      );
    });

    await test.step('Verify successful login', async () => {
      await loginPage.verifyLoginSuccessful();
    });
  });

  for (const data of taskData) {
    test(`${data.testCase} | ${data.application} | ${data.taskName}`, async ({ page }) => {
      const dashboardPage = new DashboardPage(page);

      await test.step(`Navigate to "${data.application}"`, async () => {
        await dashboardPage.navigateToApplication(data.application);
      });
      await test.step(`Verify ${data.application} page opened`, async () => {
        await dashboardPage.verifyApplicationPageOpened(data.application);
      });

      await test.step(`Verify "${data.taskName}" exists in "${data.column}" column`, async () => {
        await dashboardPage.verifyTaskInColumn(data.taskName, data.column);
      });

      await test.step(`Confirm tags: "${data.tags.join(', ')}"`, async () => {
        await dashboardPage.verifyTaskTags(data.taskName, data.tags);
      });
    });
  }
});