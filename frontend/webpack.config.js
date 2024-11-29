const path = require('path');

module.exports = {
    entry: './src/App.js', // Adjust based on your project structure
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: [/node_modules\/@react-three\/drei\/node_modules\/@mediapipe\/tasks-vision/],
            },
        ],
    },
};
