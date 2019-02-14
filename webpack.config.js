const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path =  require('path');

module.exports = {
  entry: {
    app: ['./src']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        loader: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          }
        ],
        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([
      { from: 'src/icons', to: 'icons' },
      { from: 'src/manifest.json', to: './' },
    ]),
  ],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
};