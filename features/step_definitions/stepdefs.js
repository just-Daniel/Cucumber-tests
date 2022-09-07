const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday (today) {
    if (today === 'Friday') {
        return 'TGIF';
    } else {
        return 'Nope';
    }
}

Given('today is {string}', function (givenDay) {
    this.today = givenDay;

})

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
})

Then('I should be told {string}', function (expectedAnswer) {
    this.actualAnswer === expectedAnswer;
    //  --  OR  --
    // assert.strictEqual(this.actualAnswer, expectedAnswer);
})

/* ------  Scenario: Some cukes */
Given('I have {int} {} in my belly', function (cukes, str) {
    // console.log(`Cukes: ${cukes} and ${str}`);
});

/* -----  Given array different animals */
Given('the following {}:', function (a, b) {
    // console.log('HREREHREHRHEHRHEH: ', a, b);
})



