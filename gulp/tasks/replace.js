var gulp = require('gulp');
var paths = require('../paths');
var replace = require('gulp-replace-task');

gulp.task('replace', function(){
  return gulp.src('client/dist/index.html')
    .pipe(replace({
      usePrefix: false,
      patterns: [
        {
          match: '<script src="jspm_packages/system.js"></script>',
          replacement: '<!-- <script src="jspm_packages/system.js"></script> -->'
        },
        {
          match: '<script src="system.config.js"></script>',
          replacement: '<!-- <script src="system.config.js"></script> -->'
        },
        {
          match: '<!-- <script src="dist/app/app.js?bust={{date}}"></script> -->',
          replacement: '<script src="modules/core/main.js?bust={{date}}"></script>'
        },
        {
          match: '{{date}}',
          replacement: Math.round(new Date() / 1000)
        }
      ]
    }))
    .pipe(gulp.dest(paths.output));
});
