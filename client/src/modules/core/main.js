import angular from 'angular';
import 'angular-material';
import 'angular-resource';
import 'angular-ui-router';
import 'ocombe/oclazyload';
import 'font-awesome';

import './templates.js'
//import 'common/core';
//import routing from 'common/utils/routing';

import { LeftController } from './leftCtrl';
import { MainController } from './mainCtrl';

import homeModule from '../home/_index';
import sitesModule from '../sites/_index';

let app = angular.module('demo',
    [
      'ui.router',
      'oc.lazyLoad',
      'ngMaterial',
      'ngResource',
      'templates',
      homeModule.name,
      sitesModule.name]);

app.config([
      '$urlRouterProvider',
      '$locationProvider',
      '$compileProvider',
      '$logProvider',
      '$httpProvider',
      '$ocLazyLoadProvider',
      '$stateProvider',
      function ($urlRouterProvider,
                $locationProvider,
                $compileProvider,
                $logProvider,
                $httpProvider,
                $ocLazyLoadProvider,
                $stateProvider) {

        $locationProvider.html5Mode(true);
        $httpProvider.useApplyAsync(true);

        $stateProvider
            .state('Home', {
              url: '/',
              controller: 'HomeCtrl as vm',
              templateUrl: 'modules/home/home.html',
              title: 'Home'
            })
            .state('Sites', {
              url: '/sites',
              controller: 'SitesCtrl as vm',
              templateUrl: 'modules/sites/sites.html',
              title: 'Sites'
            });

        $urlRouterProvider.otherwise('/');

        if (window.prod) {
          $logProvider.debugEnabled(false);
          // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
          $compileProvider.debugInfoEnabled(false);
        }

        $ocLazyLoadProvider.config({
          debug: true
        });
      }])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
          .primaryPalette('blue')
          .accentPalette('red');

      $mdThemingProvider.theme('cyan')
          .primaryPalette('cyan')
          .accentPalette('red');

      $mdThemingProvider.theme('red')
          .primaryPalette('red');
    }]);

app.controller('MainCtrl', MainController);

app.controller('LeftCtrl', LeftController);

angular.element(document).ready(function () {
  angular.bootstrap(document.body, [app.name], {
    strictDi: true
  });
});

export default app;
