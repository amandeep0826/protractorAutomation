// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine",

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ["../e2e/tests/PayDirectWeb/paymentWorkflow.spec.js"],

  onPrepare: () => {
    global.globalVariables = require("./helper/constants");
    browser.ignoreSynchronization = true;
    // var AllureReporter = require("jasmine-allure-reporter");
    // jasmine.getEnv().addReporter(
    //   new AllureReporter({
    //     resultsDir: "allure-results",
    //   })
    // );
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};
