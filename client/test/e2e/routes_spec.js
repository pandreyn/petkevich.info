/*global browser */

'use strict';

describe('E2E: Routes', function() {

  //beforeEach(function() {
  //  browser.get('/');
  //  browser.waitForAngular();
  //});

  it('should redirect wrong url to home route', function() {
    browser.get('wrongUrl');
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

});