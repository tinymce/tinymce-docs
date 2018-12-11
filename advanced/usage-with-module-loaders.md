---
layout: default
title: Usage with module loaders
title_nav: Usage with module loaders
description_short: How to include TinyMCE in a project using CommonJS modules.
description: How to use TinyMCE in a project using a module bundler like Webpack or Browserify
keywords: webpack browserify commonjs modules tinymce
---

TinyMCE can easily be installed with `npm` and used with module loaders such as [Webpack](https://webpack.github.io/) and [Browserify](http://browserify.org/).

First decide how to load your modules.

### ES2015 modules

If you are using ES2015 modules, a simple example could look something like this.

```javascript
// Import TinyMCE
import tinymce from 'tinymce/tinymce';

// A theme is also required
import 'tinymce/themes/modern/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';

// Initialize the app
tinymce.init({
  selector: '#tiny',
  plugins: ['paste', 'link']
});
```

### CommonJS modules

The example is nearly the same if you are using CommonJS modules. However, a different `require` function is used to import the dependencies.

```javascript
// Import TinyMCE
var tinymce = require('tinymce/tinymce');

// A theme is also required
require('tinymce/themes/modern/theme');

// Any plugins you want to use has to be imported
require('tinymce/plugins/paste');
require('tinymce/plugins/link');

// Initialize the app
tinymce.init({
  selector: '#tiny',
  plugins: ['paste', 'link']
});
```

## Getting the skin

A **skin** consists of some fonts and CSS files used by the editor and TinyMCE will not work without them. By default TinyMCE looks for these files in a `/skins` directory located in your root directory. This can  be [configured in the init object]({{ site.baseurl }}/configure/editor-appearance/#skin_url).

The quickest way to get started is to copy the skin that comes packaged with TinyMCE. This skin is located in `node_modules/tinymce/skins` - either manually copy the files in finder/file explorer or use the terminal:

**MacOS and Linux**

```
cp -r node_modules/tinymce/skins skins
``` 
**Windows**

```
xcopy /I /E node_modules/tinymce/skins skins
```

### Webpack file-loader

Another option when using Webpack is to use the [file loader](https://github.com/webpack/file-loader) together with the [require.context](https://github.com/webpack/docs/wiki/context) function to copy the skins directory by adding these lines before the call to the TinyMCE `init` function:

```javascript
require.context(
  'file?name=[path][name].[ext]&context=node_modules/tinymce!tinymce/skins',
  true,
  /.*/
);
```

This copies the skins directory from `node_modules/tinymce` to your output directory as defined in your Webpack configuration. This is useful as you can easily move the output directory of your build without having to copy over the skins folder manually - webpack will take care of it for you.

### Minification with UglifyJS2

Another popular JS minification tool, [UglifyJS2](https://github.com/mishoo/UglifyJS2), will corrupt TinyMCE unless `ascii-only` is set.

This can happen when it is used directly or through module bundler. In [Webpack](https://webpack.github.io/), `-p` CLI option cannot be used to bundle TinyMCE, and instead, you'll need to configure minification explicitly:

```javascript
plugins: [
  new webpack.optimize.UglifyJsPlugin({
      /*...*/
      output: {
        "ascii_only": true
      }
  })
]
```
