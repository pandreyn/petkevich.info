import angular from 'angular';
import 'angular-mocks';

describe('Unit: mainCtrl', function() {

  var $controller;

  beforeEach(function() {
    // instantiate the app module
    module('sitesApplication');
    module('app.sitesModule');

    // mock the directive
    inject(inject(function(_$controller_){
      $controller = _$controller_;
    }));
  });

  it('should exist', function() {
    var $scope = {};
    var controller = $controller('MainCtrl', { $scope: $scope });
    expect(controller).toBeDefined();
  });

  it('sets menu.pages to 2', function() {
    var $scope = {};
    var controller = $controller('MainCtrl', { $scope: $scope });

    expect($scope.menu.pages.length).toEqual(2);

  });

  it('first page always = /', function() {
    var $scope = {};
    var controller = $controller('MainCtrl', { $scope: $scope });

    expect($scope.menu.pages[0].url).toEqual('/');

  });
});