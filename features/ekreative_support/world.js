const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, webkit, firefox } = require('playwright');

class CustomWorld {
    async openUrl(url) {
        // for (const browserType of [chromium, webkit, firefox]) {
            // const browser = await browserType.launch({headless: false});
            const browser = await chromium.launch({headless: false});
            const context = await browser.newContext();

            this.page = await context.newPage();
            await this.page.goto(url);

            
            this.closeBrowser = async function () {
                await this.page.waitForTimeout(3000);
                await browser.close();
            };
            
        // }
    }
}

setWorldConstructor(CustomWorld);