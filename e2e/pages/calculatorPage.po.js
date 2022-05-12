var calculatorPage = function () {
  var firstNumber = element(by.model("first"));
  var secondNumber = element(by.model("second"));
  var goButton = element(by.id("gobutton"));
  var resultValue = element(by.className("ng-binding"));

  this.setFirstNumber = function (num1) {
    firstNumber.sendKeys(num1);
  };
  this.setSecondNumber = function (num2) {
    secondNumber.sendKeys(num2);
  };

  this.clickOnGoButton = function () {
    goButton.click();
  };

  this.getResultValue = function () {
    return resultValue.getText();
  };
};

module.exports = new calculatorPage();
