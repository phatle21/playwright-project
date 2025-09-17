import { test, expect } from '@playwright/test';

test('drag and drop', async ({ page }) => {
    // Go to the drag and drop page
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    await page.locator('#column-a').dragTo(page.locator('#column-b'));

    const colA_AfterDrag = await page.locator('#column-a').textContent();

    await expect(colA_AfterDrag).toBe('B')


});

