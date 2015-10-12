'use strict';

var root = 'client/build';

module.exports = {

  'browserPort'  : 3000,
  'UIPort'       : 3001,
  'serverPort'   : 3002,

  'styles': {
    'src' : 'client/app/styles/**/*.scss',
    'modulesSrc' : ['node_modules/angular-material/angular-material.css'],
    'dest': root + '/css',
    'prodSourcemap': false,
    'sassIncludePaths': []
  },

  'scripts': {
    'src' : 'client/app/**/*.js',
    'dest': root + '/js'
  },

  'images': {
    'src' : 'client/app/images/**/*',
    'dest': root + '/images'
  },

  'fonts': {
    'src' : ['client/app/fonts/**/*'],
    'dest': root + '/fonts'
  },

  'views': {
    'watch': [
      'client/app/index.html',
      'client/app/**/*.html'
    ],
    'src': ['client/app/**/*.html', '!client/app/index.html'],
    'dest': 'client/app/modules/core'
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    'dest': root + '/',
    'options': {}
  },

  'dist': {
    'root'  : root
  },

  'browserify': {
    'entries'   : ['./client/app/modules/core/main.js'],
    'bundleName': 'main.js',
    'prodSourcemap' : false
  },

  'test': {
    'karma': 'client/test/karma.conf.js',
    'protractor': 'client/test/protractor.conf.js'
  }

};
