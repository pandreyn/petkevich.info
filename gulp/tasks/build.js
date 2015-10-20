var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
//var less = require('gulp-less');
//var lessPluginCleanCSS = require("less-plugin-clean-css");
var htmlMin = require('gulp-minify-html');
var ngHtml2Js = require("gulp-ng-html2js");
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var sassJspm = require('sass-jspm-importer');
var sass = require('gulp-sass');

var paths = require('../paths');
var compilerOptions = require('../babelOptions');

var templateCache  = require('gulp-angular-templatecache');

//var cleancss = new lessPluginCleanCSS({
//  advanced: true,
//  keepSpecialComments: 0,
//  keepBreaks: false
//});

gulp.task('build', function (callback) {
  return runSequence(
      'clean',
      //['less', 'html', 'es6', 'move'],
      ['sass', 'html', 'es6', 'move'],
      callback
  );
});

gulp.task('es6', function () {
  return gulp.src(paths.source)
      .pipe(plumber())
      .pipe(changed(paths.output, {extension: '.js'}))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(babel(compilerOptions))
      .pipe(ngAnnotate({
        sourceMap: true,
        gulpWarnings: false
      }))
      .pipe(sourcemaps.write("/sourcemaps"))
      .pipe(gulp.dest(paths.output))
});

gulp.task('html', function () {

  return gulp.src(paths.templates)
      .pipe(plumber())
      //.pipe(changed(paths.output, {extension: '.html'}))
      //.pipe(htmlMin({
      //  empty: true,
      //  spare: true,
      //  quotes: true
      //}))
      .pipe(templateCache({
        standalone: true,
        moduleSystem: 'ES6'
      }))
      //.pipe(ngHtml2Js({
      //  template: "import angular from 'angular';\n" +
      //  "export default angular.module('<%= moduleName %>', []).run(['$templateCache', function($templateCache) {\n" +
      //  "   $templateCache.put('<%= template.url %>',\n    '<%= template.prettyEscapedContent %>');\n" +
      //  "}]);\n"
      //}))
      //.pipe(babel(compilerOptions))
      .pipe(gulp.dest(paths.templatesOutput))
});

gulp.task('sass', function () {
  return gulp.src(paths.sass)
      .pipe(sass({
        errLogToConsole: true,
        functions: sassJspm.resolve_function('jspm_packages/'),
        importer: sassJspm.importer
      }))
      .pipe(gulp.dest(paths.outputCssFolder))
      .pipe(browserSync.reload({stream: true}));
});

//gulp.task('less', function () {
//  return gulp.src(paths.less)
//    .pipe(plumber())
//    .pipe(changed(paths.output, {extension: '.css'}))
//    .pipe(sourcemaps.init())
//    .pipe(less({
//      plugins: [ cleancss ]
//    }))
//    .pipe(sourcemaps.write("."))
//    .pipe(gulp.dest(paths.output))
//    .pipe(browserSync.reload({ stream: true }));
//});
