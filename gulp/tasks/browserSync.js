'use strict';

var config      = require('../config');
//var browserSync = require('browser-sync');
var browserSync = require('browser-sync').create();
var gulp        = require('gulp');

gulp.task('browserSync', function() {

  browserSync.init({
  	port: config.browserPort,
  	ui: {
    	port: config.UIPort
    },
    proxy: 'localhost:' + config.serverPort,
    logFileChanges: true,
    reloadOnRestart: true
  });

});
