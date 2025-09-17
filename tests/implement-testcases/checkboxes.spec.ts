import { test, expect } from '@playwright/test';

test('able to select checbox 1', async ({ page }) => {
    // Go to the checkboxes page

    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    await page.getByRole('checkbox').nth(0).click();
    // Verify Point: Clicked Checkbox 1
    await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
});