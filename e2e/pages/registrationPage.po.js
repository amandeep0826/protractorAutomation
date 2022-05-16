var registrationPage = function () {
  var username = element(by.model("Auth.user.name"));
  var requiredUsername = element(by.model("model[options.key]"));
  var password = element(by.model("Auth.user.password"));
  var loginButton = element(by.className("btn btn-danger"));

  var loginError = element(
    by.className("alert alert-danger ng-binding ng-scope")
  );

  this.setUsername = function (user) {
    username.sendKeys(user);
  };
  this.setRequiredUsername = function (requireUser) {
    requiredUsername.sendKeys(requireUser);
  };
  this.setPassword = function (pass) {
    password.sendKeys(pass);
  };
  this.clickOnLoginButton = function () {
    loginButton.click();
  };

  this.getLoginErrorText = function () {
    return loginError.getText();
  };
};

module.exports = new registrationPage();