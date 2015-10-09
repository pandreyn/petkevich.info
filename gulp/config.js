'use strict';

var root = 'build';

module.exports = {

  'browserPort'  : 3000,
  'UIPort'       : 3001,
  'serverPort'   : 3002,

  'styles': {
    'src' : 'app/styles/**/*.scss',
    'modulesSrc' : ['node_modules/angular-material/angular-material.css'],
    'dest': root + '/css',
    'prodSourcemap': false,
    'sassIncludePaths': []
  },

  'scripts': {
    'src' : 'app/**/*.js',
    'dest': root + '/js'
  },

  'images': {
    'src' : 'app/images/**/*',
    'dest': root + '/images'
  },

  'fonts': {
    'src' : ['app/fonts/**/*'],
    'dest': root + '/fonts'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/**/*.html'
    ],
    'src': 'app/**/*.html',
    'dest': 'app/modules/core'
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
    'entries'   : ['./app/modules/core/main.js'],
    'bundleName': 'main.js',
    'prodSourcemap' : false
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
