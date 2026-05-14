import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(email: string, password: string) {
    await this.page.locator('#username').fill(email);
    await this.page.locator('#password').fill(password);
    await this.page.getByRole('button', { name: 'Sign in' }).click();
  }

  async verifyLoginSuccessful() {
    await expect(this.page.getByRole('heading', { name: 'Web Application', level: 1 })).toBeVisible();
  }
}