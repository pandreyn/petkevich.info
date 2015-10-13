'use strict';

var gulp = require('gulp');
var debug = require('debug')('gulpServer');
var exec = require('child_process').exec;


gulp.task('server', function (cb) {

  exec('node start.js', function (err, stdout, stderr) {
    debug(stdout);
    cb(err);
  });

});