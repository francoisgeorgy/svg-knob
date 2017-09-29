const path = require('path');

module.exports = {
    entry: [
        './src/svg-knob.js'
    ],
    output: {
        filename: './svg-knob.js',
        path: path.resolve(__dirname, 'dist')
    }
};
