const { Given, Then, When, After, AfterAll } = require('@cucumber/cucumber');

// setDefaultTimeout(60 * 1000)

Given('I open Google', { timeout: 60 * 1000 }, async function () {
    await this.openUrl('http://google.com/');
})

Then('I write to ekreative in search', async function () {
    await this.page.fill('input', 'ekreative');
})

When('I open eKreative page', async function () {
    await this.page.keyboard.press('Enter');
    // await this.page.click('h3.LC20lb');
    await this.page.click('text=https://www.ekreative.com');
})

Then('I click to button get in touch', async function () {
    await this.page.click('text=Get in touch');
})
Then('I write my name in input', async function() {
    await this.page.fill('input[name=your-name]', 'Daniel');
    await this.page.fill('textarea[name=your-message]', 'Hello friend!');
    // await this.closeBrowser();
})

AfterAll(async function () {
    await this.closeBrowser();
})