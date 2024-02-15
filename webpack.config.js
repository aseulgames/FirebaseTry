const path = require('path')

module.exports = {
    mode: 'development', // production | development
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.js'
    }
}