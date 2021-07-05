---
layout: default
title: Bundling TinyMCE with Webpack and npm
title_nav: Webpack and npm
description_short: How to include TinyMCE in a project using CommonJS modules.
description: How to use TinyMCE in a project using a module bundler like Webpack or Browserify
keywords: webpack browserify commonjs modules tinymce
---

{{site.productname}} can bundled with `npm` (or `yarn`) and [Webpack](https://webpack.github.io/).

```sh
npm install tinymce@^5
```

```sh
yarn add tinymce@^5
```

## ES2015 modules

If you are using ES2015 modules, a simple example could look something like this.

`editor.js`
```js
// Import TinyMCE
import tinymce from 'tinymce';

// Default icons are required for TinyMCE 5.3 or above. Also import custom icons if applicable
import 'tinymce/icons/default';

// A editor theme (required) - customize the editor appearance by creating a 'skin'
import 'tinymce/themes/silver';

// Import the editor skin - replace with a custom skin if applicable.
import 'tinymce/skins/ui/oxide/skin.css';

// Import plugins - include the relevant plugin in the 'plugins' option.
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/code';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';

// Import content CSS
import contentUiCss from 'tinymce/skins/ui/oxide/content.css';

// Import the default content CSS, replace with the CSS for the editor content.
import contentCss from 'tinymce/skins/content/default/content.css';

// Initialize TinyMCE
export function render () {
  tinymce.init({
    selector: 'textarea#editor',
    /* All plugins need to be imported and added to the plugins option. */
    plugins: 'advlist code emoticons link lists table',
    toolbar: 'checklist',
    skin: false,
    content_css: false,
    content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
  });
};
```

### Import premium plugins

Download separately and add these to /src/plugins

```js
import './plugins/checklist/plugin';
import './plugins/powerpaste/plugin';
import './plugins/powerpaste/js/wordimport';
```

```js
import './skins/..../skin.css';
```

`index.js`
```js
import * as editor from './editor.js';
/* Create a parent element for the textarea */
const parent = document.createElement('p');
/* Create a textarea with id="editor" for the TinyMCE `selector` option */
function editorArea() {
  const element = document.createElement('textarea');
  element.id = 'editor';
  return element
}
/* Add elements to page */
parent.appendChild(editorArea());
document.body.appendChild(parent);
/* Initialize TinyMCE */
editor.render();
```

`webpack.config.js`
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
          test: /[\\/]node_modules[\\/](tinymce)[\\/](.*js|.*skin.css)|[\\/]plugins[\\/]/,
          name: 'tinymce'
        },
      },
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
```


## CommonJS modules

The example is nearly the same if you are using CommonJS modules. However, a different `require` function is used to import the dependencies.

`editor.js`
```js
// Import TinyMCE
var tinymce = require('tinymce/tinymce');

// Default icons are required for TinyMCE 5.3 or above. Also import custom icons if applicable
require('tinymce/icons/default');

// A editor theme (required) - customize the editor appearance by creating a 'skin'
require('tinymce/themes/silver');

// Import the editor skin - replace with a custom skin if applicable.
require('tinymce/skins/ui/oxide/skin.css');

// Import plugins - include the relevant plugin in the 'plugins' option.
require('tinymce/plugins/advlist');
require('tinymce/plugins/code');
require('tinymce/plugins/emoticons');
require('tinymce/plugins/emoticons/js/emojis');
require('tinymce/plugins/link');
require('tinymce/plugins/lists');
require('tinymce/plugins/table');

// Import content CSS
var contentUiCss = require('tinymce/skins/ui/oxide/content.css');

// Import the default content CSS, replace with the CSS for the editor content.
var contentCss = require('tinymce/skins/content/default/content.css');

// Initialize TinyMCE
function render () {
  tinymce.init({
    selector: 'textarea#editor',
    /* All plugins need to be imported and added to the plugins option. */
    plugins: 'advlist code emoticons link lists table',
    toolbar: 'checklist',
    skin: false,
    content_css: false,
    content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
  });
};

module.exports = render;
```

### Import premium plugins

Download separately and add these to /src/plugins

```js
require('./plugins/checklist/plugin');
require('./plugins/powerpaste/plugin');
require('./plugins/powerpaste/js/wordimport');
```

```js
require('./skins/..../skin.css');
```

`index.js`
```js
const render = require('./editor.js');
/* Create a parent element for the textarea */
const parent = document.createElement('p');
/* Create a textarea with id="editor" for the TinyMCE `selector` option */
function editorArea() {
  const element = document.createElement('textarea');
  element.id = 'editor';
  return element
}
/* Add elements to page */
parent.appendChild(editorArea());
document.body.appendChild(parent);
/* Initialize TinyMCE */
render();
```

`webpack.config.js`
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
          test: /[\\/]node_modules[\\/](tinymce)[\\/](.*js|.*skin.css)|[\\/]plugins[\\/]/,
          name: 'tinymce'
        },
      },
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
```

## Getting the skin

A **skin** consists of some fonts and CSS files used by the editor and {{site.productname}} will not work without them. By default {{site.productname}} looks for these files in a `/skins` directory located in your root directory. This can  be [configured in the init object]({{ site.baseurl }}/configure/editor-appearance/#skin_url).

The quickest way to get started is to copy the skin that comes packaged with {{site.productname}}. This skin is located in `node_modules/tinymce/skins` - either manually copy the files in finder/file explorer or use the terminal:

**macOS and Linux**

```sh
cp -r node_modules/tinymce/skins skins
```

**Windows**

```sh
xcopy /I /E node_modules/tinymce/skins skins
```

### Webpack file-loader

Another option when using Webpack is to use the [file loader](https://github.com/webpack/file-loader) together with the [require.context](https://github.com/webpack/docs/wiki/context) function to copy the skins directory by adding these lines before the call to the {{site.productname}} `init` function:

```js
require.context(
  'file-loader?name=[path][name].[ext]&context=node_modules/tinymce!tinymce/skins',
  true,
  /.*/
);
```

This copies the skins directory from `node_modules/tinymce` to your output directory as defined in your Webpack configuration. This is useful as you can easily move the output directory of your build without having to copy over the skins folder manually - webpack will take care of it for you.

### Minification with UglifyJS2

Another popular JS minification tool, [UglifyJS2](https://github.com/mishoo/UglifyJS2), will corrupt {{site.productname}} unless `ascii-only` is set.

This can happen when it is used directly or through module bundler. In [Webpack](https://webpack.github.io/), `-p` CLI option cannot be used to bundle {{site.productname}}, and instead, you'll need to configure minification explicitly:

```js
plugins: [
  new webpack.optimize.UglifyJsPlugin({
      /*...*/
      output: {
        "ascii_only": true
      }
  })
]
```
