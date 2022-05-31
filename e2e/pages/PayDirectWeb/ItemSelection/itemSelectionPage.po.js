const { element, by } = require("protractor");

var itemSelectionPage = function () {
  const lineItemIsSelectionCheckbox = element(
    by.id("CartUserInput_LineItems_0__IsSelected")
  );
  const submitButton = element(by.id("SubmitButton"));
  const withoutSelectingLineItemErrorText = element(
    by.xpath('//*[@id="content"]/div[2]/ul/li')
  );
  this.checkLineItemIsSelectionCheckbox = () => {
    lineItemIsSelectionCheckbox.click();
  };
  this.clickOnSubmitButton = () => {
    submitButton.click();
  };
  this.getWithoutSelectingLineItemErrorText = () => {
    return withoutSelectingLineItemErrorText.getText();
  };
};

module.exports = new itemSelectionPage();
