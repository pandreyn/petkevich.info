'use strict';

var sitesModule = require('./_index.js');

sitesModule.service('SitesService', ['$q', function ($q) {

  var service = {};

  service.get = function () {
    var deferred = $q.defer();

    var data = [
      {'name': 'Nodejs', 'description': 'Nodejs', 'url': 'http://nodejs.org'},
      {'name': 'Gulp', 'description': 'Gulp', 'url': 'http://gulpjs.com/'},
      {'name': 'browserify-handbook', 'description': 'how to build modular applications with browserify', 'url': 'https://github.com/substack/browserify-handbook'},
      {'name': 'parcelify', 'description': 'Add css to your npm modules consumed with browserify.', 'url': 'https://github.com/rotundasoftware/parcelify'},
      {'name': 'heroku', 'description': 'Cloud Application Platform.', 'url': 'https://heroku.com'},
      {'name': 'Angular Material', 'description': 'The Angular Material project is an implementation of Material Design in Angular.js.', 'url': 'https://material.angularjs.org'}

    ];

    deferred.resolve(data);



    return deferred.promise;
  };

  return service;

}]);