const urlHelper = require("./urlHelper");

const QA_Inflight_TestMerchantUrl = urlHelper.QA_Inflight_TestMerchantUrl;
const QA_Passthrough_TestMerchantUrl = urlHelper.QA_Passthrough_TestMerchantUrl;
const Delta_Inflight_TestMerchantUrl = urlHelper.Delta_Inflight_TestMerchantUrl;
const Delta_Passthrough_TestMerchantUrl =
  urlHelper.Delta_Passthrough_TestMerchantUrl;

const PDWeb_URL_Inflight = Delta_Inflight_TestMerchantUrl;
const PDWeb_URL_Passthrough = Delta_Passthrough_TestMerchantUrl;

module.exports = {
  PDWeb_URL_Inflight,
  PDWeb_URL_Passthrough,
};
