'use strict';

var secret = require('../secret');
var gulp = require('gulp');
var ftp = require('vinyl-ftp');


gulp.task('deploy', ['prod'], function () {

  var conn = ftp.create(secret.ftp);

  var globs = [
    'build/**'
  ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp.src(globs, {base: 'build', buffer: false})
      .pipe(conn.newer('/petkevich.info')) // only upload newer files
      .pipe(conn.dest('/petkevich.info'));

});