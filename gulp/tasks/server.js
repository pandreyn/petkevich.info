var gulp        = require('gulp');
var serverStart = require('../../server_app.js');

gulp.task('server', function (cb) {
  serverStart.start(cb);
});