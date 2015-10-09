'use strict';

var controllersModule = require('./_index');

controllersModule.controller('SitesCtrl',
    ['SitesService',
      function (service) {

        // ViewModel
        var vm = this;

        service.get().then(function(responce){
          vm.sites = responce;
        });

        vm.title = 'Here wil be list of useful sites!';
        vm.number = 123;

      }]);