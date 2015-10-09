'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
      .state('Home', {
        url: '/',
        controller: 'SitesCtrl as vm',
        templateUrl: 'modules/sites/sites.html',
        title: 'Sites'
      });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;