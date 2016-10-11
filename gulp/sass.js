var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sass = require('gulp-sass');

var config = require('./config').sass;

gulp.task('sass', function () {
  gulp.src(config.vendorSrc)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());

  return gulp.src(config.src)
    .pipe(sass(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});
