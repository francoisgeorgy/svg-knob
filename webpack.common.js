// const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: [
        './src/svg-knob.js'
    ],
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery",
    //         "window.jQuery": "jquery'",
    //         "window.$": "jquery"
    //     }),
    // ],
    output: {
        filename: './svg-knob.js',
        path: path.resolve(__dirname, 'dist')
    }
};
