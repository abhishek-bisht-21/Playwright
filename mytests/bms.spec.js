const { chromium } = require('playwright');
import { test, expect, Browser, Page}  from '@playwright/test';


test('bms', async () => {
const browser = await chromium.launch({headless: false});
const page = await browser.newPage(); 
await page.goto('https://in.bookmyshow.com/');
await page.locator("//*[text()='Delhi-NCR']").click();
await expect(page.locator("//div[text()='Savi']")).toBeVisible();
});
