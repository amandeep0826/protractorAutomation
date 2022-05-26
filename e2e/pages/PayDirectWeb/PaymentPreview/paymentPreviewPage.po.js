var paymentPreviewPage = function () {
  const submitButton = element(by.id("SubmitButton"));
  this.clickOnSubmitButton = () => {
    submitButton.click();
  };
};

module.exports = new paymentPreviewPage();
