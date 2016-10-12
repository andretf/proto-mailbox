var gulp = require('gulp');

gulp.task('build', ['clean'], function () {
  gulp.start([
    'sass',
    'templates',
    'html',
    'js',
    'data']);
});