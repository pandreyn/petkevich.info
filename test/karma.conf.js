'use strict';

var istanbul = require('browserify-istanbul');
var isparta  = require('isparta');

module.exports = function(config) {

  config.set({

    basePath: '../',
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'app/modules/**/*.js': ['browserify', 'babel', 'coverage']
      //'app/js/**/*.js': ['browserify', 'babel', 'coverage']
    },
    browsers: ['Chrome'],
    //browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    //reporters: ['progress'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    autoWatch: true,
    singleRun: true,

    browserify: {
      debug: true,
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
      'test/unit/**/*.js'
    ]

  });

};

