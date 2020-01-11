const path = require('path');
module.exports = {
  entry: [
    './src/app.js',
  ],
  output: {
    filename: 'bundle.js',
  },

  devtool: 'source-map',
  
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'dist'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: 'env',
        },
      },

    },
    ],
  },
  plugins: [
  ],
};