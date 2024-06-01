const { chromium } = require('playwright');
import { test, expect, Browser, Page } from '@playwright/test';
import { log } from 'console';


test('login test', async () => {
	const browser = await chromium.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

	const emailId = page.locator("#input-email");
	const password = page.locator("#input-password");
	const loginbutton = page.locator("[value='Login']");

	await emailId.fill("pwtest@opencart.com");
	await password.fill("playwright@123");
	await loginbutton.click();


	const title = page.title();
	console.log("home page title: ", title);

	await page.screenshot( {path: 'homepage.png'});

	expect(title).toEqual('My Account');

	await browser.close();
});