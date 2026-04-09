const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');

const { ModuleFederationPlugin } = container;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, '../../dist/apps/mfe5'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'auto',
    clean: true,
    uniqueName: 'mfe5'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: false
  },
  devServer: {
    port: 4900,
    historyApiFallback: true,
    hot: false,
    liveReload: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe5',
      filename: 'remoteEntry.js',
      exposes: {
        './web-components': path.resolve(__dirname, 'src/bootstrap.js')
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
};
