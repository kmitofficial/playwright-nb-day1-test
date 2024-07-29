/*
This is a simple test file to check if you are able to use the assignment extension on VS Code
*/ 

// @ts-check
const { test, expect } = require('@playwright/test');

test('Basic test case', async ({ page }) => {
	await page.goto('https://google.com/');
});