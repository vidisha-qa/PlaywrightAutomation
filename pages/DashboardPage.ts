import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly sideNav: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sideNav = page.locator('nav');
  }

  async navigateToApplication(applicationName: string) {
    await this.sideNav
      .getByRole('button', { name: new RegExp(applicationName, 'i') })
      .click();
  }

  async verifyApplicationPageOpened(applicationName: string) {
    await expect(
      this.page.locator('h1', { hasText: applicationName })
    ).toBeVisible();
  }

  async verifyTaskInColumn(taskName: string, columnName: string) {
    const column = this.page.locator('div.flex.flex-col.w-80').filter({
      has: this.page.getByRole('heading', { name: new RegExp(columnName, 'i') }),
    });

    await expect(column).toBeVisible();
    await expect(column.getByRole('heading', { name: taskName })).toBeVisible();
  }

  async verifyTaskTags(taskName: string, tags: string[]) {

    const taskCard = this.page
      .locator('div.bg-white.p-4.rounded-lg')
      .filter({
        has: this.page.getByRole('heading', { name: taskName }),
      });

    for (const tag of tags) {
      await expect(
        taskCard.locator('span', { hasText: tag })
      ).toBeVisible();
    }
  }
}