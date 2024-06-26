class SynkPage {

    async open (path) {
        return browser.url(`https://learn.snyk.io/lesson/${path}`)
    }

    async skipAlert() {
        await driver.pause(4000);
        let skipBtn = await $('#usercentrics-root').shadow$("button[role='button']");
        await $(skipBtn).click();
    }

    async crossPopUp() {
        await driver.pause(4000);
        let iFrame = await $('#ul-frame');
        await iFrame.waitForDisplayed();
        await browser.switchToFrame(iFrame);
        await driver.pause(3000);

        let popups = await $("//div[@aria-label='Close button']");
        await popups.click();
        await driver.pause(3000);
    }

    async contentsLengthCheck() {
        try {
            await driver.pause(8000);

            // Get table of contents elements
            const tocElements = await $$('nav>div');

            // Check table of contents length
            const tocLength = tocElements.length;
            console.log(`Table of contents length: ${tocLength}`);

            // Loop through elements, handling is-highlighted attribute
            for (let i = 0; i < tocLength; i++) {
                const element = tocElements[i];
                const isHighlighted = await element.getAttribute('is-highlighted');
                const headingText = await element.getAttribute('h2');
                console.log(headingText);

                if (!isHighlighted) {
                    await element.click();
                    await browser.pause(5000);
                    console.log(`Clicked element: ${i + 1}`);
                    await browser.pause(2000);
                }
            }

        } catch (error) {
            console.error('Error:', error);
        } finally {
            console.log("You Did It");
        }
    }

    async snapshot() {
    const currentDate = new Date();
    const timestamp = currentDate.toISOString().slice(11, 13);

    // Take screenshot
    const filename = `./screenshot/screenshot_T${timestamp}.png`;
    await browser.saveScreenshot(filename);
    console.log(`Screenshot saved as ${filename}`);
    }

}

module.exports = new SynkPage();