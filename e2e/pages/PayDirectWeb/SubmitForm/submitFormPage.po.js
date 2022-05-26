var submitFormPage = function () {
  const testPageButton = element(
    by.xpath('//*[@id="xmlPostForm"]/table[1]/tbody/tr/td/input')
  );
  this.clickOnTestPageButton = () => {
    testPageButton.click();
  };
};

module.exports = new submitFormPage();
