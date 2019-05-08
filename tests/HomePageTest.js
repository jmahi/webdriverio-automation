 var assert = require('assert');

describe("Verify the sams home page scenarios", function() {
	it("check that the home page title is correct", function(done) {
	    browser
		.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('/')
		console.log(browser.getTitle())
		assert.equal (browser.getTitle(), 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
		//browser.click("#contact-us")
		browser.pause(3000)
	});
	
	/* it("check that the login button opens the login portal page", function(done) {
	  	browser.url('/')
		browser.click('#login-portal')
		console.log(browser.getTitle())
		assert.equal (browser.getTitle(), 'WebDriverUniversity.com');
		browser.pause(3000)
	}); */
});