const globalVariables = require("../helper/constants");
const calculatorPagePo = require("../pages/calculatorPage.po");

describe("calculator test", () => {
  it("addition test", () => {
    browser.get(globalVariables.siteUrl);

    calculatorPagePo.setFirstNumber("3");
    calculatorPagePo.setSecondNumber("2");
    calculatorPagePo.clickOnGoButton();

    expect(calculatorPagePo.getResultValue()).toEqual("5");

    browser.sleep(2000);
  });
});
