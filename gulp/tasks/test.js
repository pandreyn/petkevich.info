var gulp        = require('gulp');
var runSequence = require('run-sequence');
var server = require('karma').Server;
var paths = require('../paths');
var path = require('path');
var protractor      = require('gulp-protractor').protractor;
var webdriver       = require('gulp-protractor').webdriver;
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var http    = require('http');
var express = require('express');
var gutil   = require('gulp-util');
var morgan  = require('morgan');

gulp.task('test', ['server'], function() {

  return runSequence('unit', 'protractor');

});

gulp.task('unit', ['build'], function (done) {

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

gulp.task('protractor', ['webdriver-update', 'webdriver', 'server'], function(cb) {

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

gulp.task('server', function() {

  var server = express();

  // log all requests to the console
  server.use(morgan('dev'));
  server.use(express.static(paths.output));

  // Serve index.html for all routes to leave routing up to Angular
  server.all('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist' });
  });

  // Start webserver if not already running
  var s = http.createServer(server);
  s.on('error', function(err){
    if(err.code === 'EADDRINUSE'){
      gutil.log('Development server is already started at port ' + paths.serverPort);
    }
    else {
      throw err;
    }
  });

  s.listen(paths.serverPort);

});