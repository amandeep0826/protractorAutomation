var itemSelectionPage = function () {
  const lineItemIsSelectionCheckbox = element(
    by.id("CartUserInput_LineItems_0__IsSelected")
  );
  const submitButton = element(by.id("SubmitButton"));
  this.checkLineItemIsSelectionCheckbox = () => {
    lineItemIsSelectionCheckbox.click();
  };
  this.clickOnSubmitButton = () => {
    submitButton.click();
  };
};

module.exports = new itemSelectionPage();
