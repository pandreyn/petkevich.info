var clientRoot = 'client';

module.exports = {
  root: clientRoot,
  source: clientRoot + '/src/**/*.js',
  html: clientRoot + '/**/*.html',
  json: clientRoot + '/src/**/*.json',
  templates:
      [
        clientRoot + '/src/**/*.html',
        '!' + clientRoot + '/src/index.html'
      ],
  templatesOutput: clientRoot + '/dist/modules/core',
  less: [clientRoot + '/src/**/*.less'],
  output: clientRoot + '/dist/',
  outputCss: clientRoot + '/dist/**/*.css',
  outputCssFolder: clientRoot + '/dist/css/',
  tests: clientRoot + '/test/e2e/**/*.spec.js',
  indexHtml: clientRoot + '/src/index.html',
  sass: clientRoot + '/src/styles/*.scss',
  test: {
    'karma': 'client/test/karma.conf.js',
    'protractor': 'client/test/protractor.conf.js'
  },
  'server': {
    'browserPort'  : 3000,
    'UIPort'       : 3001,
    'serverPort'   : 3002
  }
};
