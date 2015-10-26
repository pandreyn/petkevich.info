module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    //browsers: ['PhantomJS'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress', 'verbose', 'coverage'],
    reporters: ['progress', 'verbose'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // list of files / patterns to load in the browser
    files: [
      //{pattern: 'client/dist/modules/**/*.js', included: false}
    ],

    jspm: {
      // Edit this to your needs
      config: 'client/system.config.js',
      loadFiles: [
        'client/test/unit/**/*.js',
        'client/dist/modules/**/*.js'
      ],
      serveFiles: [
        //'client/dist/modules/**/*.js'
      ]
    },

    proxies: {
      '/jspm_packages': '/base/jspm_packages'
    },

    //urlRoot: '/__karma__/',

    // list of files to exclude
    exclude: [],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/test/unit/**/*.js': ['babel']
    },

    'babelPreprocessor': {
      options: {
        sourceMap: 'inline',
        modules: 'system'
      }
    },

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['PhantomJS'];
  }

  config.set(configuration);
};