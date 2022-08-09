const fs = require("fs");
const path = "./testData/testData.xlsx";
const excel = fs.realpathSync(path, { encoding: "utf8" });
const xl = require("../helper/XLReader");

module.exports = {
  ApplicationUrl: xl.read_from_excel("Sheet1", excel)[0].Delta_URL,
  //   ApplicationUrlDelta: xl.read_from_excel("Sheet1", excel)[0].Delta_URL,
  Inflight_TestMerchantUrl: xl.read_from_excel("Sheet1", excel)[1].Delta_URL,
  //   Delta_Inflight_TestMerchantUrl: xl.read_from_excel("Sheet1", excel)[1].Delta_URL,
  Passthrough_TestMerchantUrl: xl.read_from_excel("Sheet1", excel)[2].Delta_URL,
};
