var multiFormPage = function () {
  var name = element(by.model("formData.name"));
  var email = element(by.model("formData.email"));
  var nextButtonPageOne = element(
    by.xpath('//*[@id="form-views"]/div[3]/div/a')
  );
  var xboxRadioButton = element.all(
    by.xpath('//*[@id="form-views"]/div[1]/div[1]/label/input')
  );
  var psRadioButton = element.all(
    by.xpath('//*[@id="form-views"]/div[1]/div[2]/label/input')
  );
  var nextButtonPageTwo = element(
    by.xpath('//*[@id="form-views"]/div[2]/div/a')
  );
  var submitButton = element(by.className("btn btn-danger"));
  var testCompletedText = element(by.xpath('//*[@id="form-views"]/div/h3'));
  var submittedString = element(by.className("ng-binding"));

  this.setName = function (userName) {
    name.sendKeys(userName);
  };
  this.setEmail = function (userEmail) {
    email.sendKeys(userEmail);
  };
  this.clickOnNextButtonOne = function () {
    nextButtonPageOne.click();
  };
  this.clickOnNextButtonTwo = function () {
    nextButtonPageTwo.click();
  };
  this.selectXboxRadioButton = function () {
    xboxRadioButton.click();
  };
  this.selectPsRadioButton = function () {
    psRadioButton.click();
  };
  this.clickOnSubmitButton = function () {
    submitButton.click();
  };
  this.getTestCompletedText = function () {
    return testCompletedText.getText();
  };
  this.getSubmittedString = function () {
    return submittedString.getText();
  };
};

module.exports = new multiFormPage();
