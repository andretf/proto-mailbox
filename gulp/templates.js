var browserSync   = require('browser-sync');
var gulp          = require('gulp');
var htmlmin       = require('gulp-htmlmin');
var templateCache = require('gulp-angular-templatecache');

var config        = require('./config').templates;

gulp.task('templates', function () {
  return gulp.src(config.src)
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true
    }))
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
