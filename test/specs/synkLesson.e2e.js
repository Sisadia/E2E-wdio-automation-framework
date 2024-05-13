const SynkPage = require('../pageobjects/page.js');
describe('test web', async () => {
    
    it('Go to website and Closs the Popup', async () => {
        await SynkPage.open("prompt-injection");
        await driver.maximizeWindow();
        await SynkPage.skipAlert();
        
    })

    it('Check Greencheck', async ()  => {
       await driver.pause(5000);
       await SynkPage.contentsLengthCheck();
       await SynkPage.crossPopUp();
    })

    it('Take Screenshot', async() => {
        await SynkPage.snapshot();
    });

})

