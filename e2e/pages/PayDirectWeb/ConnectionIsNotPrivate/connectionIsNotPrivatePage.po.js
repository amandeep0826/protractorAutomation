var connectionIsNotPrivatePage = function () {
  const advancedButton = element(by.id("details-button"));
  const proceedLink = element(by.id("proceed-link"));
  this.clickOnAdvancedButton = () => {
    advancedButton.click();
  };
  this.proceedLinkButton = () => {
    proceedLink.click();
  };
};

module.exports = new connectionIsNotPrivatePage();
