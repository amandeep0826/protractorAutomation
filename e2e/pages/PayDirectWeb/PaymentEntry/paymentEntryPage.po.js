var paymentEntryPage = function () {
  const submitButton = element(by.id("SubmitButton"));
  const swipePopupCancelButton = element(
    by.xpath("/html/body/div[4]/div[3]/div/button")
  );
  this.clickOnSubmitButton = () => {
    submitButton.click();
  };
  this.setTestPaymentProfile = function (paymentProfile) {
    element(by.cssContainingText("option", paymentProfile)).click();
  };
  this.clickOnSwipePopupCancelButton = () => {
    swipePopupCancelButton.click();
  };
};

module.exports = new paymentEntryPage();
