var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        exclude: [],

        files: [
            { pattern: './config/spec-bundle.js', watched: false }
        ],

        preprocessors: {
            './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
        },

        webpack: webpackConfig,
        
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'json'},
                {type: 'html'}
            ]
        },

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['mocha', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};