const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, webkit, firefox } = require('playwright');
// const playwright = require('playwright');

// playwright.request.newContext
class CustomWorld {
    async openUrl(url: string) {
        // for (const browserType of [chromium, webkit, firefox]) {
            // const browser = await browserType.launch({headless: false});
            const browser = await chromium.launch({headless: false});
            const context = await browser.newContext();

            this.page = await context.newPage();
            await this.page.goto(url);

            // await this.page.close();
        // }
    }
}

setWorldConstructor(CustomWorld);