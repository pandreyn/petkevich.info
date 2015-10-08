'use strict';

var sitesModule = require('./_index.js');

/**
 * @ngInject
 */
function SitesService($q) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();

    var data = [
      {'id': '1', 'name': 'Nodejs', 'url': 'http://nodejs.org'} ,
      {'id': '2', 'name': 'Gulp', 'url': 'http://gulpjs.com/'}
    ];

    deferred.resolve(data);

    return deferred.promise;
  };

  return service;

}

sitesModule.service('SitesService', SitesService);