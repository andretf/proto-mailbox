var clean = require('gulp-clean');
var gulp = require('gulp');

gulp.task('clean', function () {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});
