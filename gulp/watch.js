var gulp = require('gulp');
var watch = require('gulp-watch');

var config = require('./config');

gulp.task('watch', ['browser-sync'], function (callback) {
  watch(config.sass.src, function () {
    gulp.start('sass');
  });
  watch(config.js.src, function () {
    gulp.start('js');
  });
  watch(config.appJs.src, function () {
    gulp.start('js');
  });
  watch(config.templates.src, function () {
    gulp.start('templates');
  });
  watch(config.html.src, function () {
    gulp.start('html');
  });
});