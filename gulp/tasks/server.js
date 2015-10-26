var gulp        = require('gulp');
var startServer = require('../../server_app.js');

gulp.task('server', function (cb) {
  startServer(cb);
});