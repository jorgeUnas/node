const {assert} = require('chai');
const {jsdom} = require('jsdom');

//create the parseTextFromHTML function

const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};

describe('HTML tests', () => {
  describe('#bar', () => {
    it('should include the string "Hello"', () => {
      // setup
      const foo = '<html><div id="bar"></div><div id="buzz">Hello</div><html>';
      //asserts
      assert.include(foo, 'Hello'); 
    });
  });
});