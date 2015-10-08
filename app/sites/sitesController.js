'use strict';

var controllersModule = require('./_index');
var service = require('./sitesService');

/**
 * @ngInject
 */
function SitesCtrl() {

  console.log('SitesCtrl loaded');

  // ViewModel
  var vm = this;

  vm.sites = service.get();

  vm.title = 'Here wil be list of useful sites!';
  vm.number = 12346789;

}

controllersModule.controller('SitesCtrl', SitesCtrl);