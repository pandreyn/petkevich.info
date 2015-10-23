import angular from 'angular';

describe('Unit: SitesService', function() {

  var service;

  beforeEach(function() {
    // instantiate the app module
    module('sitesApplication');
    module('app.sitesModule');

    // mock the service
    inject(function(SitesService) {
      service = SitesService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

});