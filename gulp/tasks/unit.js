'use strict';

var gulp = require('gulp');
var server = require('karma').Server;
var config = require('../config');
var path = require('path');

gulp.task('unit', ['styles', 'copyVendorStyles', 'images', 'fonts', 'views', 'browserify'], function (done) {

  new server({
    configFile: path.resolve(config.test.karma),
    singleRun: true
  }, function(){
    return done()
  }).start();


  //server.start({
  //  configFile: path.resolve(config.test.karma),
  //  singleRun: true
  //}, function(){
  //  done()
  //});

});