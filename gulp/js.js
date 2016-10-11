var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var gulp = require('gulp');

var config = require('./config');

gulp.task('js', ['app-js', 'vendor-js', 'regular-js']);

gulp.task('app-js', function () {
  return gulp.src(config.appJs.src)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.appJs.dest))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('vendor-js', function () {
  return gulp.src(config.js.vendorSrc)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('regular-js', function () {
  return gulp.src(config.js.src)
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.reload({stream: true}));
});

