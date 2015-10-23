import angular from 'angular';
import 'angular-mocks';

describe('Unit: SitesCtrl', function() {

  var ctrl;

  beforeEach(function() {
    // instantiate the app module
    module('sitesApplication');
    module('app.sitesModule');

    inject(function($controller) {
      ctrl = $controller('SitesCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a title variable equal to \'List of useful sites!\'', function() {
    expect(ctrl.title).toEqual('List of useful sites!');
  });

});