import { test, expect } from '@playwright/test';

// test('upload file', async ({ page }) => {
//     // Go to the upload page
//     await page.goto("https://the-internet.herokuapp.com/upload");

//     // C:\Users\phat.le\Downloads\bb.txt
//     const filePath = 'C:\Users\phat.le\Downloads\bb.txt';
//         await page.getByRole('button', { name: 'Upload'}).click();


//     await page.setInputFiles('input[type="file"]', filePath);
    

//     await expect(page.locator('#file-upload')).toContainText('bb.txt');
// });

test('upload a file', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

    const filePath = 'C:\\Users\\phat.le\\Downloads\\bb.txt';

    // await page.locator('#file-upload').click()

    await page.setInputFiles('input[type="file"]', filePath);

    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.locator('#uploaded-files')).toContainText('bb.txt');
});

