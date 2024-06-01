const { chromium } = require('playwright');
import { test, expect, Browser, Page } from '@playwright/test';
import { log } from 'console';


test('login test', async () => {
	const browser = await chromium.launch({ headless: false });

	// browsercontent1:
	const browser_context1 = await browser.newContext();
	const page1 = await browser_context1.newPage();

	// browsercontent2:
	const browser_context2 = await browser.newContext();
	const page2 = await browser_context2.newPage();


	// Browser1:
	await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
	const emailId1 = page1.locator("#input-email");
	const password1 = page1.locator("#input-password");
	const loginbutton1 = page1.locator("[value='Login']");
	await emailId1.fill("abhishek.bisht.21@gmail.com");
	await password1.fill("abhishek@123");
	await loginbutton1.click();


	// Browser2:
	await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
	const emailId2 = page2.locator("#input-email");
	const password2 = page2.locator("#input-password");
	const loginbutton2 = page2.locator("[value='Login']");
	await emailId2.fill("abhishek.bisht.21@gmail.com");
	await password2.fill("abhishek@123");
	await loginbutton2.click();



	await browser_context1.close();
	await browser_context2.close();

	await browser.close();

	///await new promiseHooks(() => {}); //prevents your script from exiting!!
	// await browser.close();
});