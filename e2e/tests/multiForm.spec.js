const constants = require("../helper/constants");
const multiFormPagePo = require("../pages/multiFormPage.po");

describe("multiFrom page test", () => {
  beforeAll(() => {
    browser.manage().window().maximize();
  });
  beforeEach(() => {
    browser.get(constants.multiFormSiteUrl);
  });
  it("submit from with all details", () => {
    multiFormPagePo.setName("Test");
    multiFormPagePo.setEmail("Singh");
    browser.sleep(2000);
    multiFormPagePo.clickOnNextButtonOne();
    browser.sleep(2000);
    multiFormPagePo.selectPsRadioButton();
    browser.sleep(2000);
    multiFormPagePo.clickOnNextButtonTwo();
    browser.sleep(2000);

    // var ptor = browser.getInstance();

    // var alertDialog = ptor.switchTo().alert();

    // expect(alertDialog.getText()).toEqual("awesome!");
    // console.log(multiFormPagePo.getSubmittedString());

    // expect(multiFormPagePo.getSubmittedString()).toEqual(
    //   `{"name":"test","email":"singh","type":"ps"}`
    // );
    expect(multiFormPagePo.getTestCompletedText()).toEqual(
      "Test Completed, WooHoo!"
    );
  });
});
