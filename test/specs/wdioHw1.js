// Due date: Aug 16 eod
const{expect} = require("chai");
/**
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
 */
describe('Homework tests', () => {
    it('Verify feelsLikeTempValue is between lowTempValue and highTempValue', async () => {
        /**
        * Given I am on darksky.net
        *   And I get feels-like-temp
        *   And I get low-temp
        *   And I get high-temp
        *   And I compare values
        * Then I verify if feels-like-temp is between low-temp and high-temp
        */
        await browser.url('https://www.darksky.net');
        await browser.pause(3000);

        const feelsLikeTempValue = await $('span[class=feels-like-text]');
        const highTempValue = await $('span[class=high-temp-text]');
        const lowTempValue = await $('span[class=low-temp-text]');
        
        expect((feelsLikeTempValue > lowTempValue && feelsLikeTempValue < highTempValue), 'FeelsLikeTemp is not between high and low temp').to.be.true;
        

     });



        /**
         * Tc-2:
         * https://www.darsky.net
         * Verify user can get temperature based on zipcode
         * 
         */
    it('Verify user can get temperature based on zipcode', async () => {

        /**
         * Given I am in darksky.net
         *  And I click search box
         *  And I enter zipcode
         *  And I click search button
         * Then I verify that temp is displayed
         * 
         */
        await browser.url('https://darksky.net');

        await browser.pause(3000);

        const searchBox = await $('input[type=text]');


        await searchBox.setValue('11111');

        await browser.pause(3000);

        const searchButton = await $('a[class=searchButton]');


        await searchButton.click();

        await browser.pause(3000);

        const feelsLikeTempValue = await $('span[class=feels-like-text]');
        const isTempDisplayed = await feelsLikeTempValue.isDisplayed();

        expect(isTempDisplayed, 'Temperature is not displayed').to.be.true;
    });


        /**
         * Tc-3:
         * https://www.facebook.com
         * 
         * Verify user gets error message when submit empty login form
         * expected error msg -> The email address or mobile number you entered isn't connected to an account.
         * 
         */

    it('Verify user gets error message when submit empty login form', async () => {

        /**
         * Given I am on facebook.com
         *  And I click log in button
         * Then I verify if error message is displayed
         */
        await browser.url('https://www.facebook.com');
        await browser.pause(3000);

        const loginButton = await $('button[name=login]');
        await loginButton.click();

        await browser.pause(3000);

        const errMessage = await $('div*=email or mobile number');

        const isErrMsgDisplayed = await errMessage.isDisplayed();

        expect (isErrMsgDisplayed,'Error message is not displayed').to.be.true;
        
    });
        /**
         * Tc-4:
         * https://www.facebook.com
         * 
         * Verify empty messenger login flow
         * 1. Click Messenger
         * 2. Verify 'Keep me signed in' is not selected
         * 3. Click 'Log In' button
         * 4. Verify link -> "Find your account and log in" is displayed
         * 5. Verify 'Continue' button is enabled
         * 6. Verify 'Keep me signed in' is not selected
         * 7. Click 'Keep me signed in'
         * 8. Verify 'Keep me signed in' is selected
         * 
         */

    it('Verify empty messenger login flow', async () => {
        /**
         * Given I am on facebook.com
         *  And I click messenger link
         *  And I verify 'Keep me signed in' is not selected
         *  And I click log in button
         *  And I verify link -> "Find your account and log in" is displayed
         *  And I verify 'continue' button is enabled
         *  And I verify 'Keep me signed in' is not selected
         *  And I click 'Keep me signed in'
         *Then I verify 'Keep me signed in' is selected
         */
        //Launch url
        await browser.url('https://www.facebook.com');
        await browser.pause(3000);

        //Click messenger link
        const messengerLink = await $('=Messenger').click();
        // await messengerLink.click();

          await browser.pause(5000);


        //Verify 'Keep me signed in' is not selected
        const keepMeSignedIn = await $('input[type=checkbox]');
        const isKeepMeSignedInSelected = await keepMeSignedIn.isSelected();
        expect(isKeepMeSignedInSelected, 'Keep me signed in is selected').not.to.be.true;

        // // Click log in button
        const logInButton = await $('#loginbutton');
        await logInButton.scrollIntoView();
        await logInButton.click();

        await browser.pause(3000);


        // // Verify link -> "Find your account and log in" is displayed
        const findAccLink = await $('=Find your account and log in.');
        const isFindLinkDisplayed = await findAccLink.isDisplayed();
        expect(isFindLinkDisplayed, '"Find your account and log in" link is not displayed').to.be.true;

        // Verify 'continue' button is enabled
        const isConButtonEnabled = await $('#loginbutton').isEnabled();
        expect(isConButtonEnabled, 'Continue button is not enabled').to.be.true;

        // Verify 'Keep me signed in' is not selected
        expect(isKeepMeSignedInSelected, 'Keep me signed in is selected').not.to.be.true;


        // Click 'Keep me signed in'
        const clickKeepMeSignedIn = await $('label=Keep me signed in').click();
        await browser.pause(3000);
        const newCheckbox = await $('input[type=checkbox]').isSelected();

        // Verify 'Keep me signed in' is selected
        expect(newCheckbox, 'Keep me signed in is selected').to.be.true;


    });

 });