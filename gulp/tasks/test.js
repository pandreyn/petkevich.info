var gulp            = require('gulp');
var runSequence     = require('run-sequence');
var server          = require('karma').Server;
var paths           = require('../paths');
var path            = require('path');
var protractor      = require('gulp-protractor').protractor;
var webdriver       = require('gulp-protractor').webdriver;
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var http            = require('http');
var express         = require('express');
var gutil           = require('gulp-util');
var morgan          = require('morgan');
var debug           = require('debug')('gulpServer');

gulp.task('test', ['build'], function() {
  return runSequence('server', 'unit', 'protractor');
});

gulp.task('unit', function (done) {

  new server({
    configFile: path.resolve(paths.test.karma),
    action: 'run'
    //singleRun: true
  }, function(){
    done()
  }).start();

});

gulp.task('webdriver-update', webdriverUpdate);
gulp.task('webdriver', webdriver);

gulp.task('protractor', ['webdriver-update', 'webdriver'], function(cb) {

  gulp.src('client/test/e2e/**/*.js').pipe(protractor({
    configFile: paths.test.protractor
  })).on('error', function(err) {
    // Make sure failed tests cause gulp to exit non-zero
    throw err;
  }).on('end', function() {
    process.exit();
    cb();
  });

});
