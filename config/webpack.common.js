var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var helpers = require('./helpers');

const METADATA = {
    title: 'City of Goodyear ITS Project Closeout Survey',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};

module.exports = {
    metadata: METADATA,

    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'main': './app/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts'],
        root: helpers.root('app'),
        modulesDirectories: ['node_modules']
    },

    module: {
        preLoaders: [
            {test: /\.ts$/, loader: 'tslint-loader', exclude: [helpers.root('node_modules')]},
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    helpers.root('node_modules/rxjs'),
                    helpers.root('node_modules/@angular'),
                    helpers.root('node_modules/@ngrx/router'),
                    helpers.root('node_modules/@ngrx/core'),
                    helpers.root('node_modules/@ngrx/effects'),
                    helpers.root('node_modules/@ngrx/store')
                ]
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?\S*)?$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('app'),
                loader: 'raw'
            }
        ]
    },

    plugins: [
        new ForkCheckerPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
        }),

        new CopyWebpackPlugin([{
            from: 'assets',
            to: 'assets',
            ignore: [
                '*.css'
            ]
        }]),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            chunksSortMode: 'dependency'
        })
    ]
};