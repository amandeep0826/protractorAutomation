const { browser, element, by } = require("protractor");
const constants = require("../../helper/constants");
const submitFormPagePo = require("../../pages/PayDirectWeb/SubmitForm/submitFormPage.po");
const itemSelectionPagePo = require("../../pages/PayDirectWeb/ItemSelection/itemSelectionPage.po");
const connectionIsNotPrivatePagePo = require("../../pages/PayDirectWeb/ConnectionIsNotPrivate/connectionIsNotPrivatePage.po");
const paymentEntryPagePagePo = require("../../pages/PayDirectWeb/PaymentEntry/paymentEntryPage.po");
const termsAndConditionsPagePo = require("../../pages/PayDirectWeb/TermsAndConditions/termsAndConditionsPage.po");
const paymentPreviewPagePo = require("../../pages/PayDirectWeb/PaymentPreview/paymentPreviewPage.po");
const successfulPaymentPagePo = require("../../pages/PayDirectWeb/SuccessfulPayment/successfulPaymentPage.po");

describe("Complete Payment Workflow", () => {
  beforeAll(() => {
    browser.manage().window().maximize();
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;
  });
  beforeEach(() => {
    // browser.get(constants.PDWebInflightMerchant);
    // connectionIsNotPrivatePagePo.clickOnAdvancedButton();
    // connectionIsNotPrivatePagePo.proceedLinkButton();
    // submitFormPagePo.clickOnTestPageButton();
  });
  it("Successful Payment Workflow for Inflight", async () => {
    await browser.get(constants.PDWebInflightMerchant);
    connectionIsNotPrivatePagePo.clickOnAdvancedButton();
    connectionIsNotPrivatePagePo.proceedLinkButton();

    submitFormPagePo.clickOnTestPageButton();
    itemSelectionPagePo.checkLineItemIsSelectionCheckbox();
    itemSelectionPagePo.clickOnSubmitButton();
    paymentEntryPagePagePo.setTestPaymentProfile("VISA");
    paymentEntryPagePagePo.clickOnSubmitButton();
    await browser.sleep(3000);
    termsAndConditionsPagePo.selectTermsAndConditionsCheckbox();
    termsAndConditionsPagePo.clickOnSubmitButton();
    paymentPreviewPagePo.clickOnSubmitButton();

    await expect(
      successfulPaymentPagePo.getsuccessfulReceiptPageTitle()
    ).toEqual(
      "Thank you for your payment.\n\n" +
        "Please print this receipt and keep it for your records."
    );
  });

  it("Successful Payment Workflow for Passthrough", async () => {
    const successText = element(by.xpath('//*[@id="main-message"]/h1'));
    await browser.get(constants.PDWebPassthroughMerchant);
    // connectionIsNotPrivatePagePo.clickOnAdvancedButton();
    // connectionIsNotPrivatePagePo.proceedLinkButton();
    submitFormPagePo.clickOnTestPageButton();
    itemSelectionPagePo.checkLineItemIsSelectionCheckbox();
    itemSelectionPagePo.clickOnSubmitButton();
    paymentEntryPagePagePo.clickOnSwipePopupCancelButton();
    paymentEntryPagePagePo.setTestPaymentProfile("VISA");
    paymentEntryPagePagePo.clickOnSubmitButton();
    termsAndConditionsPagePo.selectTermsAndConditionsCheckbox();
    termsAndConditionsPagePo.clickOnSubmitButton();
    paymentPreviewPagePo.clickOnSubmitButton();

    await expect(successText.getText()).toEqual(
      "The information you’re about to submit is not secure"
    );
  });
});
