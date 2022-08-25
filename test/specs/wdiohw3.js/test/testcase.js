const { expect, assert } = require("chai");

const DSHomePage = require("../POM/darksky");

new DSHomePage = DarkSkyHomePage

describe('TEST', () => {


it.only('darksky', async () => {
    
    await browser.url('http://www.darksky.net')
    await browser.pause(3000);

    await DarkSkyHomePage.getFeelsLikeTemp
});
    
});