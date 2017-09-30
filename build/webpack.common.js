const path = require('path');

module.exports = {
    entry: './src/client.js',
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, 
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};