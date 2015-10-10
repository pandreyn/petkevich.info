/*global angular */

'use strict';

describe('Unit: SitesService', function() {

  var service;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject(function(SitesService) {
      service = SitesService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

});