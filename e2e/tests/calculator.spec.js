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

  it("subtraction test", () => {
    browser.get(globalVariables.siteUrl);

    browser.sleep(2000);
    calculatorPagePo.setFirstNumber("6");
    calculatorPagePo.setSecondNumber("3");
    calculatorPagePo.setOperator("-");
    calculatorPagePo.clickOnGoButton();

    expect(calculatorPagePo.getResultValue()).toEqual("3");
  });
});
