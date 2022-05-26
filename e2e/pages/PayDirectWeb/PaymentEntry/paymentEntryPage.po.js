var paymentEntryPage = function () {
  const submitButton = element(by.id("SubmitButton"));
  this.clickOnSubmitButton = () => {
    submitButton.click();
  };
  this.setTestPaymentProfile = function (paymentProfile) {
    element(by.cssContainingText("option", paymentProfile)).click();
  };
};

module.exports = new paymentEntryPage();
