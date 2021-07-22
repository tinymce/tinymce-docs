1. Update the project Webpack configuration to load the {{site.productname}} CSS and to optimize the {{site.productname}} assets.

    Example `webpack.config.js`

    ```js
    const path = require('path');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
      mode: 'development',
      entry: './src/index.js',
      resolve: {
        extensions: ['.js']
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          title: 'TinyMCE Webpack Demo',
          meta: {viewport: 'width=device-width, initial-scale=1'}
        }),
      ],
      devtool: 'inline-source-map',
      devServer: {
        contentBase: './public',
      },
      module: {
        rules: [
          {
            test: /skin\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /content\.css$/i,
            use: ['css-loader'],
          },
        ],
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            tinymceVendor: {
              test: /[\\/](tinymce)[\\/](.*js|.*skin.css)|[\\/]plugins[\\/]/,
              name: 'tinymce'
            },
          },
        }
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
      },
    };
    ```