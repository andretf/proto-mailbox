module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './dist/assets/javascripts/vendor.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './dist/app/templates.js',
      './src/app/**/*.js'
    ],
    exclude: [
      './src/app/**/*.view.spec.js'
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
};
