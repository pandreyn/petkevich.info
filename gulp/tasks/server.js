'use strict';

var gulp = require('gulp');
var debug = require('debug')('devServer');
var gls = require('gulp-live-server');
//var exec = require('child_process').exec;


gulp.task('server', function (cb) {

  var server = gls.new('start.js');
  server.start();

  gulp.watch(['start.js', 'server_app.js', 'client/app/index.html', 'models/**/*.*', 'routes/**/*.*'], function() {
    server.start.bind(server)()
  }); //restart my server

});