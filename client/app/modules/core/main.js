'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('angular-material');
require('angular-resource');
require('./templates');
require('../sites/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    'ngMaterial',
    'ngResource',
    'app.sitesModule'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./on_config'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});