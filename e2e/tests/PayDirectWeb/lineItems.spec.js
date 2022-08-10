const { browser, element, by } = require("protractor");
const fs = require("fs");
const XLSX = require("xlsx");
const xl = require("../../helper/XLReader");
const path = "./testData/testData.xlsx";
const excel = fs.realpathSync(path, { encoding: "utf8" });
const constants = require("../../helper/constants");
const connectionIsNotPrivatePagePo = require("../../pages/PayDirectWeb/ConnectionIsNotPrivate/connectionIsNotPrivatePage.po");
const itemSelectionPagePo = require("../../pages/PayDirectWeb/ItemSelection/itemSelectionPage.po");
const submitFormPagePo = require("../../pages/PayDirectWeb/SubmitForm/submitFormPage.po");
const urlHelper = require("../../helper/urlHelper");
const environmentHelper = require("../../helper/environmentHelper");

describe("Line Item selection Test Cases", () => {
  beforeAll(() => {
    browser.manage().window().maximize();
  });
  it("Click on Submit Button without selecting any line items", async () => {
    await browser.get(environmentHelper.PDWeb_URL_Inflight);
    // connectionIsNotPrivatePagePo.clickOnAdvancedButton();
    // connectionIsNotPrivatePagePo.proceedLinkButton();
    submitFormPagePo.clickOnTestPageButton();
    itemSelectionPagePo.clickOnSubmitButton();
    await expect(itemSelectionPagePo.lineItemErrorText()).toEqual(
      "Please select at least one item"
    );
  });

  it("Exceed the max payment amount by increasing quantity of line item", async () => {
    await browser.get(environmentHelper.PDWeb_URL_Inflight);
    submitFormPagePo.clickOnTestPageButton();
    itemSelectionPagePo.checkLineItemIsSelectionCheckbox();
    itemSelectionPagePo.setLineItemIsSelectionQuantity("15");
    itemSelectionPagePo.clickOnSubmitButton();

    await expect(itemSelectionPagePo.lineItemErrorText()).toEqual(
      "Payment amount must not exceed $13.95"
    );
  });
});
