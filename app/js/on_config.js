'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'views/home.html',
    title: 'Home'
  })
      .state('Sites', {
        url: '/sites',
        controller: 'SitesCtrl as vm',
        templateUrl: 'sites/sites.html',
        title: 'Sites'
      });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;