var successfulPaymentPage = function () {
  const successfulReceiptPageTitle = element(
    by.id("SuccessfulReceiptPageTitle")
  );
  this.getsuccessfulReceiptPageTitle = () => {
    return successfulReceiptPageTitle.getText();
  };
};

module.exports = new successfulPaymentPage();
