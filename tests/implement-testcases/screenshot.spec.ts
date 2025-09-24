// import {test, expect } from '@playwright/test';

// // Take a screenshot of the full page
// await page.screenshot({ path: 'screenshot.png', fullPage: true });

// // Take a screenshot of a specific element
// await page.locator('.element').screenshot({ path: 'element.png' });

// // Take a screenshot on test failure
// test('visual test', async ({ page }) => {
//   await page.goto('https://example.com' );
//   try {
//     await expect(page.locator('h1')).toHaveText('Expected Text');
//   } catch (error) {
//     await page.screenshot({ path: `failure-${test.info().title}.png` });
//     throw error;
//   }
// });

import { test, expect } from '@playwright/test';

test('take screenshots of page and element', async ({ page }) => {
  // Go to the page
  await page.goto("https://the-internet.herokuapp.com/");

  // Screenshot toàn bộ trang
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  // Screenshot một phần tử cụ thể (ví dụ .heading hoặc bạn chọn class cụ thể nào đó)
  await page.locator('h1').screenshot({ path: 'element.png' });
});

