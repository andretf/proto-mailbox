module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './src/assets/javascripts/vendor/jquery.min.js',
      './src/assets/javascripts/vendor/angular.min.js',
      './src/assets/javascripts/vendor/angular-ui-router.min.js',
      './src/assets/javascripts/vendor/bootstrap.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './dist/app/templates.js',
      './src/app/**/*.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
};
