var termsAndConditionsPage = function () {
  const termsAndConditionsCheckbox = element(
    by.name("TermsAndConditionsUserInput.Accepted")
  );
  const submitButton = element(by.id("SubmitButton"));
  this.selectTermsAndConditionsCheckbox = () => {
    termsAndConditionsCheckbox.click();
  };
  this.clickOnSubmitButton = () => {
    submitButton.click();
  };
};

module.exports = new termsAndConditionsPage();
