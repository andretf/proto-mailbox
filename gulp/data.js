var browserSync   = require('browser-sync');
var gulp          = require('gulp');

var config        = require('./config').data;

gulp.task('data', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
