'use strict';

var paths = require('../paths');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

gulp.task('copyVendorStyles', function () {

  return gulp.src(paths.modulesSrc)
      .pipe(minifyCSS())
      .pipe(concat('vendors.css'))
      .pipe(gulp.dest(paths.outputCssFolder))
      .pipe(browserSync.stream({once: true}));

});