
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);


describe('geckoDriverBug', function() {
	it('should execute test case without errors', function() {
      browser.get("http://www.protractortest.org/testapp/ng1");
      browser.wait(function() {
         return browser.isElementPresent(element(by.xpath("//*[@id='animals']")));
      }, 8000);
      expect(element(by.xpath("//*[@id='animals']")).isPresent()).to.eventually.equal(true);
	});
});
