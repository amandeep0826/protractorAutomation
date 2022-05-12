const globalVariables = require("../helper/globalVariables");

describe("calculator test", () => {
  it("addition test", () => {
    browser.get(globalVariables.siteUrl);

    const firstNumber = element(by.model("first"));
    const secondNumber = element(by.model("second"));
    firstNumber.sendKeys("2");
    secondNumber.sendKeys("3");
    const goButton = element(by.id("gobutton"));
    goButton.click();

    const resultValue = element(by.className("ng-binding"));

    expect(resultValue.getText()).toEqual("5");

    browser.sleep(2000);
  });
});
