var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

console.log(process.env.NODE_ENV);

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "sourcemaps" : false,
  entry: "./js/client.js",
  devServer: {
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test: /\.(css)$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
     path: path.join(__dirname, "src"),
    filename: "../../social-betting-be/src/main/resources/static/built/client.min.js",
    publicPath: '/'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
