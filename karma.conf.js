'use strict';

module.exports = config => {

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [{
            pattern: './karma-test-shim.js',
            watched: false
        }],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // coverage runs first, then web pack, then the source map generation
        preprocessors: {
            './karma-test-shim.js': ['coverage', 'webpack', 'sourcemap'],
        },

        // specifies the webpack configuration file for use by the webpack preprocessor above
        webpack: require('./webpack.karma'),

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],

        // configuration for junit reporter, useful for Jenkins
        junitReporter: {
            outputDir: './reports/junit',
            outputFile: 'test-results.xml'
        },

        // configuation for coverage reporter
        // output can be used by Jenkins or viewed in a web browser per the instructions in the project readme
        coverageReporter: {
            dir: './reports/coverage',
            reporters: [
                { type: 'text-summary' },
                { type: 'json' },
                { type: 'html' }
            ],
        },


        // maximum start time for the web browser before trying to capture it
        captureTimeout: 120000,


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // // start these browsers
        // // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        customLaunchers: {
            'Local_Phantom': {
                base: 'PhantomJS'
            }
        },


        // assign the configured browsers from custom launchers
        browsers: [ 'Local_Phantom' ],


        // configuration for PhantomJS browser
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,


        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // plugins: [
        //     'karma-phantomjs-launcher',
        //     'karma-jasmine',
        //     'karma-webpack',
        //     'karma-coverage',
        //     'karma-sourcemap-loader',
        //     'karma-junit-reporter',
        // ],                        
    });

};
