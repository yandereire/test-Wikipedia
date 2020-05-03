// const {describe, it, afterEach, beforeEach} = require('mocha');
const Page = require('../selenium/basePage');
const {expect} = require('chai');
const {Key} = require('selenium-webdriver/lib/input'); // import selenium
const errors = require('selenium-webdriver/lib/error'); // import selenium

describe('test selenium', () => {
    let page;
    let driver;

    beforeEach(async () => {
        page = new Page();
        driver = page.driver;
        await page.visit('https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna');
    });

    afterEach(async () => {
        await page.quit();
    });

    it('Should have image present', async () => {
        await page.type(await page.findByCss("#searchInput"), "Złoty polski");
        await page.driver.sleep(2000);
        await page.type(await page.findByCss("#searchInput"), Key.ENTER);

        var elementExist = true;
        try {
            await page.findByCss(".thumbimage")
        }
        catch (e) {
                elementExist = false;
        }

        expect(elementExist).to.equal(true);
    })


})