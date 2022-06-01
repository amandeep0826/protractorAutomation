const { element, by } = require("protractor");

var itemSelectionPage = function () {
  const lineItemIsSelectionCheckbox = element(
    by.id("CartUserInput_LineItems_0__IsSelected")
  );
  const submitButton = element(by.id("SubmitButton"));
  const lineItemErrorText = element(
    by.xpath('//*[@id="content"]/div[2]/ul/li')
  );
  const lineItemIsSelectionQuantity = element(
    by.id("CartUserInput_LineItems_0__SubFields_0__Value")
  );
  this.checkLineItemIsSelectionCheckbox = () => {
    lineItemIsSelectionCheckbox.click();
  };
  this.clickOnSubmitButton = () => {
    submitButton.click();
  };
  this.lineItemErrorText = () => {
    return lineItemErrorText.getText();
  };
  this.setLineItemIsSelectionQuantity = (amount) => {
    lineItemIsSelectionQuantity.sendKeys(amount);
  };
};

module.exports = new itemSelectionPage();
