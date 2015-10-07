/**
 * Created by andrey on 07.10.15.
 */

// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
//var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


var minifyCSS = require('gulp-minify-css');
var htmlMin = require('gulp-html-minifier');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');

var wiredep = require('wiredep').stream;
var usemin = require('gulp-usemin');
var del = require('del');
var runSequence = require('run-sequence');

// Webpack
var webpackreg = require("webpack");
//var webpack = require('gulp-webpack');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var path = require('path');
var argv = require('yargs').argv;

var pkg = require('./package.json');


var scssPath = 'scss/**/*.scss';



//// Lint Task
//gulp.task('lint', function() {
//  return gulp.src('src/*.js')
//      .pipe(jshint())
//      .pipe(jshint.reporter('default'));
//});
//
//// Compile Our Sass
//gulp.task('sass', function() {
//  return gulp.src('scss/*.scss')
//      .pipe(sass())
//      .pipe(gulp.dest('css'));
//});
//
//// Concatenate & Minify JS
//gulp.task('scripts', function() {
//  return gulp.src('js/*.js')
//      .pipe(concat('all.js'))
//      .pipe(gulp.dest('dist'))
//      .pipe(rename('all.min.js'))
//      .pipe(uglify())
//      .pipe(gulp.dest('dist'));
//});
//
//// Watch Files For Changes
//gulp.task('watch', function() {
//  gulp.watch('js/*.js', ['lint', 'scripts']);
//  gulp.watch('scss/*.scss', ['sass']);
//});

gulp.task('clean', function () {
  return del([
    'dist/',
    '.tmp/'
  ]);
});

gulp.task('wiredep', function () {
  return gulp.src('src/index.html')
      .pipe(wiredep({
        directory: './bower_components',
        bowerJson: require('./bower.json')
      }))
      .pipe(gulp.dest('.tmp/'));
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);