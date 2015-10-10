'use strict';

var gulp = require('gulp');
var server = require('karma').Server;
var config = require('../config');
var path = require('path');

gulp.task('unit', ['views'], function (done) {

  new server({
    configFile: path.resolve(config.test.karma),
    action: 'run'
    //singleRun: true
  }, function(){
    done()
  }).start();

});
