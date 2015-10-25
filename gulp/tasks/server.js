var gulp        = require('gulp');
var serverStart = require('../../server_app.js');

gulp.task('server', ['build'], function (cb) {
  serverStart.start(cb);
});