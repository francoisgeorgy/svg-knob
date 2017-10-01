const merge = require('webpack-merge');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    plugins: [
        new MinifyPlugin(/*minifyOpts*/ {
            removeConsole: true,
            removeDebugger: true
        }, /*pluginOpts*/ {})
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './svg-knob.min.js'
    }
});