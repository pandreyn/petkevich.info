var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
//var serverStart = require('../../server_app.js');
var paths = require('../paths');

gulp.task('serve', ['server', 'watch'], function (done) {

  browserSync.init({
    port: paths.server.browserPort,
    ui: {
      port: paths.server.UIPort
    },
    proxy: 'localhost:' + paths.server.serverPort,
    logFileChanges: true,
    reloadOnRestart: true
  });

});
