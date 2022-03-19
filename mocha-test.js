const { Builder, By, Key, until } = require('selenium-webdriver');

describe("Search for webdriver", async function () {
    // Default timeout for mocha is 2 seconds
    // Set timeout to 10 seconds
    this.timeout(10000);
    it("should bring up a search result page for webdriver", async function () {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('http://www.google.com/ncr');
            const searchBox = await driver.findElement(By.name('q'));
            await searchBox.sendKeys('webdriver', Key.RETURN);
            await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        } finally {
            await driver.quit();
        }
    })
});