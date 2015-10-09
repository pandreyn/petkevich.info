/*global angular */

'use strict';

describe('Unit: SitesCtrl', function() {

  var ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(function($controller) {
      ctrl = $controller('SitesCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a title variable equal to \'Here wil be list of useful sites!\'', function() {
    expect(ctrl.title).toEqual('Here wil be list of useful sites!');
  });

});