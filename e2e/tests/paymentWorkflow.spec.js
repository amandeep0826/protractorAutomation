const { browser } = require("protractor");
const constants = require("../helper/constants");
const submitFormPagePo = require("../pages/PayDirectWeb/SubmitForm/submitFormPage.po");
const itemSelectionPagePo = require("../pages/PayDirectWeb/ItemSelection/itemSelectionPage.po");
const connectionIsNotPrivatePagePo = require("../pages/PayDirectWeb/ConnectionIsNotPrivate/connectionIsNotPrivatePage.po");
const paymentEntryPagePagePo = require("../pages/PayDirectWeb/PaymentEntry/paymentEntryPage.po");
const termsAndConditionsPagePo = require("../pages/PayDirectWeb/TermsAndConditions/termsAndConditionsPage.po");
const paymentPreviewPagePo = require("../pages/PayDirectWeb/PaymentPreview/paymentPreviewPage.po");
const successfulPaymentPagePo = require("../pages/PayDirectWeb/SuccessfulPayment/successfulPaymentPage.po");

describe("Complete Payment Workflow", () => {
  beforeAll(() => {
    browser.manage().window().maximize();
  });
  beforeEach(() => {
    browser.get(constants.PDWebInflightMerchant);
    // browser.sleep(3000);
    connectionIsNotPrivatePagePo.clickOnAdvancedButton();
    // browser.sleep(3000);
    connectionIsNotPrivatePagePo.proceedLinkButton();
    submitFormPagePo.clickOnTestPageButton();
  });
  it("Successful Payment Workflow", () => {
    itemSelectionPagePo.checkLineItemIsSelectionCheckbox();
    // browser.sleep(3000);
    itemSelectionPagePo.clickOnSubmitButton();
    // browser.sleep(2000);
    paymentEntryPagePagePo.setTestPaymentProfile("VISA");
    paymentEntryPagePagePo.clickOnSubmitButton();
    browser.sleep(3000);
    termsAndConditionsPagePo.selectTermsAndConditionsCheckbox();
    termsAndConditionsPagePo.clickOnSubmitButton();
    paymentPreviewPagePo.clickOnSubmitButton();
    // browser.sleep(3000);

    expect(successfulPaymentPagePo.getsuccessfulReceiptPageTitle()).toMatch(
      "Thank you for your payment.\n\n" +
        "Please print this receipt and keep it for your records."
    );
    // browser.sleep(3000);
  });
});
