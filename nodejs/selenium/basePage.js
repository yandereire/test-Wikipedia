const {Builder, By, until} = require('selenium-webdriver'); // import selenium

// dokumentacja https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index.html

const chrome = require('selenium-webdriver/chrome');
let o = new chrome.Options();
// o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');
// o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false });

var Page = function() {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 2000, 'Looking for element');
        return await this.driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 2000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    // wait and find a specific element with it's selector
    this.findByCss = async function(selector) {
        await this.driver.wait(until.elementLocated(By.css(selector)), 2000, 'Looking for element');
        return await this.driver.findElement(By.css(selector));
    };

    // send keys to input elements
    this.type = async function (el, txt) {
        return await el.sendKeys(txt);
    };

    // send keys to input elements
    this.click = async function (el) {
        return await el.click();
    };

    this.getTitle = async () => {
        return await this.driver.getTitle();
    };
};

module.exports = Page;