var gulp = require('gulp');
var paths = require('../paths');

gulp.task('move', function () {
  var root = 'client';
  var srcPaths = [
    root + '/src/**/*.json',
    root + '/src/**/*.svg',
    root + '/src/**/*.woff',
    root + '/src/**/*.ttf',
    root + '/src/**/*.png',
    root + '/src/**/*.ico',
    root + '/src/**/*.jpg',
    root + '/src/**/*.gif',
    root + '/src/**/*.eot',
    root + '/src/index.html',
    'jspm_packages/system.js',
    'client/system.config.js'
  ];

  return gulp.src(srcPaths)
    .pipe(gulp.dest(paths.output))
});
