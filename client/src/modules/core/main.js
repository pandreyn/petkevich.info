//import 'babel/external-helpers';

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
          .primaryPalette('red')
          .accentPalette('cyan');
    }]);
;

app.controller('MainCtrl', MainController);

app.controller('LeftCtrl', LeftController);

angular.element(document).ready(function () {
  angular.bootstrap(document.body, [app.name], {
    strictDi: true
  });
});

export default app;

//'use strict';
//
//var angular = require('angular');
//
//// angular modules
//require('angular-ui-router');
//require('angular-material');
//require('angular-resource');
//require('./templates');
//require('../sites/_index');
//require('../home/_index');
//
//// create and bootstrap application
//angular.element(document).ready(function () {
//
//  var requires = [
//    'ui.router',
//    'templates',
//    'ngMaterial',
//    'ngResource',
//    'app.homeModule',
//    'app.sitesModule'
//  ];
//
//  // mount on window for testing
//  window.app = angular.module('app', requires);
//
//  angular.module('app').constant('AppSettings', require('./constants'));
//
//  angular.module('app').config(require('./on_config'));
//
//  angular.module('app').run(require('./on_run'));
//
//  angular.module('app').controller('MainCtrl', require('./mainCtrl'));
//
//  angular.module('app').controller('LeftCtrl', require('./leftCtrl'));
//
//  angular.bootstrap(document, ['app']);
//
//});