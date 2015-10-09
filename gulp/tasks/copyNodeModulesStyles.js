'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

gulp.task('copyVendorStyles', function () {

  return gulp.src(config.styles.modulesSrc)
      .pipe(minifyCSS())
      .pipe(concat('vendors.css'))
      .pipe(gulp.dest(config.styles.dest))
      .pipe(browserSync.stream({once: true}));

});