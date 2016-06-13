var helpers = require('./helpers');

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
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
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
                exclude: [/node_modules/]
            }
        ]
    },
};