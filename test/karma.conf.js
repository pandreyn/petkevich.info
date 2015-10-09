'use strict';

var istanbul = require('browserify-istanbul');
var isparta = require('isparta');

module.exports = function (config) {

  config.set({

    basePath: '../',
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'app/**/*.js': ['browserify', 'babel']
    },
    browsers: ['PhantomJS'],

    colors:             true,
    logLevel:           config.LOG_INFO,

    reporters: ['progress'],

    autoWatch: true,
    //logLevel: config.LOG_DEBUG,

    browserify: {
      debug: true,
      watch: true,
      transform: [
        'bulkify',
        istanbul({
          instrumenter: isparta,
          ignore: ['**/node_modules/**', '**/test/**']
        })
      ]
    },

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    files: [
      // app-specific code
      'app/modules/core/main.js',

      // 3rd-party resources
      'node_modules/angular-mocks/angular-mocks.js',

      // test files
      //'test/unit/**/*.js'
      'test/unit/constants_spec.js'
    ]

  });

};
