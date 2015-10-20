var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('serve', ['watch'], function (done) {


  //'browserPort'  : 3000,
  //    'UIPort'       : 3001,
  //    'serverPort'   : 3002,

  browserSync.init({
    port: 3000,
    ui: {
      port: 3001
    },
    proxy: 'localhost:' + 3002,
    logFileChanges: true,
    reloadOnRestart: true
  });

  //browserSync({
  //  open: false,
  //  port: 9000,
  //  server: {
  //    baseDir: ['.'],
  //    middleware: [ historyApiFallback() ]
  //  }
  //}, done);
});
