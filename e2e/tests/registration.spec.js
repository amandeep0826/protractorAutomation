const constants = require("../helper/constants");
const registrationPagePo = require("../pages/registrationPage.po");

describe("login page test ", () => {
  beforeEach(() => {
    browser.get(constants.registrationSiteUrl);
  });

  it("login with incorrect credentials", () => {
    registrationPagePo.setUsername("angular1");
    registrationPagePo.setRequiredUsername("angular");
    registrationPagePo.setPassword("password");
    registrationPagePo.clickOnLoginButton();

    expect(registrationPagePo.getLoginErrorText()).toEqual(
      "Username or password is incorrect"
    );

    browser.sleep(3000);
  });
  it("login with correct credentials", () => {
    var loginSuccessMessage = element(
      by.xpath("/html/body/div[3]/div/div/div/p[1]")
    );
    registrationPagePo.setUsername("angular");
    registrationPagePo.setRequiredUsername("angular");
    registrationPagePo.setPassword("password");
    registrationPagePo.clickOnLoginButton();

    expect(loginSuccessMessage.getText()).toEqual("You're logged in!!");

    browser.sleep(3000);
  });
});
