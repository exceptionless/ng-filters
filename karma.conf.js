module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ["jasmine"],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/angular-filters.js',
      'src/**/*.js'
    ],

    exclude: [],
    reporters: ['mocha'],
    port: 9876,
    runnerPort: 9100,
    colors: true,

    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_WARN,
    autoWatch: true,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,
    singleRun: true
  });
};
