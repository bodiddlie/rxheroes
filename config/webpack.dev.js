var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers.js');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig.metadata, {
    host: 'localhost',
    port: 8080,
    ENV: ENV,
    HMR: HMR
});

module.exports = webpackMerge(commonConfig, {
    metadata: METADATA,
    debug: true,
    devtool: 'cheap-module-source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'HMR': METADATA.HMR,
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV),
                'HMR': METADATA.HMR
            }
        }),
        new ExtractTextPlugin('[name].css')
    ],

    tslint: {
        emitErrors: false,
        failOnHint: false,
        resourcePath: 'app'
    },

    devServer: {
        historyApiFallback: true,
        port: METADATA.port,
        host: METADATA.host,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        stats: 'minimal',
        outputPath: helpers.root('dist'),
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
});