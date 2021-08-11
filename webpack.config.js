const path = require('path');

module.exports = {
  entry: './frontend/src/index.js',
  output: {
      path: path.resolve(__dirname, './backend/public/dist'),
      filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|svg|otf|mp3)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  }
};