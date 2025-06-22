import { test, expect } from '@playwright/test';

test.use(
    {
        headless: false,
    }
)

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Add a new task...' }).click();
  await page.getByRole('textbox', { name: 'Add a new task...' }).fill('ontor');
  await page.getByRole('button', { name: 'Add' }).click();
}); 