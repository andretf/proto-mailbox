var browserSync = require('browser-sync');
var gulp        = require('gulp');

var config      = require('./config').browserSync;

gulp.task('browser-sync', function() {
  browserSync.init({
    server: config.baseDir
  });
});