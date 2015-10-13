'use strict';

var sitesModule = require('./_index.js');

sitesModule.service('SitesService', ['$q', '$resource', function ($q, $resource) {

  var uri = '/sites/:id';

  return $resource(uri,
      {
        id: '@id'
      },
      {
        query:  {method:'GET', isArray:true},
        get: {method: 'GET'},
        save: {method: 'POST'},
        update: {method: 'PUT'}
      });

  //return service;

}]);