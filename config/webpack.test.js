var helpers = require('./helpers');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

var ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js'],
        root: helpers.root('app'),
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint',
                exclude: [helpers.root('node_modules')]
            },
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
                query: {
                    compilerOptions: {
                        removeComments: true
                    }
                },
                exclude: [/\.e2e\.ts$/]
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                loader: 'null'
            }
        ],
        postLoaders: [
            {
                test: /\.ts$/, loader: 'istanbul-instrumenter-loader',
                include: helpers.root('app'),
                exclude: [/node_modules/, /\.(e2e|spec)\.ts$/]
            }
        ]
    },

    plugins: [
        new DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'HMR': false,
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV),
                'HMR': false
            }
        }),
    ],

    tslint: {
        emitErrors: false,
        failOnHint: false,
        resourcePath: 'app'
    }
};