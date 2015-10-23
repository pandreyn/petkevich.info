'use strict';

var paths = require('../../gulp/paths');

exports.config = {

  allScriptsTimeout: 11000,

  baseUrl: 'http://localhost:' + paths.server.serverPort + '/',

  directConnect: true,

  capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY'
  },

  framework: 'jasmine',

  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },

  specs: [
    'e2e/**/*.js'
  ]

};