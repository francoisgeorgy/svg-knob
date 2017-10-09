const path = require('path');

module.exports = {
    entry: './src/svg-knob.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'svg-knob.min.js',
        library: 'svgKnob',
        libraryTarget: 'umd'
    }
};
