var settings = {
  browserSync: {
    baseDir: './dist/'
  },
  sass: {
    src: './src/assets/stylesheets/**/*.sass',
    vendorSrc: './src/assets/stylesheets/vendor/*.*',
    dest: './dist/assets/stylesheets/',
    options: {
      outputStyle: 'compressed',
      indentedSyntax: false
    }
  },
  js: {
    src: './src/assets/javascripts/*.js',
    vendorSrc: [
      './src/assets/javascripts/vendor/jquery.min.js',
      './src/assets/javascripts/vendor/angular.min.js',
      './src/assets/javascripts/vendor/angular-ui-router.min.js',
      './src/assets/javascripts/vendor/bootstrap.min.js'
    ],
    dest: './dist/assets/javascripts/'
  },
  appJs: {
    src: ['./src/app/**/*.js', '!./src/app/**/*.spec.js'],
    dest: './dist/app/'
  },
  templates: {
    src: './src/app/**/*.html',
    dest: './dist/app'
  },
  html: {
    src: './src/*.html',
    dest: './dist/'
  },
  data: {
    src: './src/data/*',
    dest: './dist/data/'
  }
};

module.exports = settings;