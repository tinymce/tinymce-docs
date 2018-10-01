---
layout: default
title: Usage with module loaders
title_nav: Usage with module loaders
description_short: How to include TinyMCE in a project using CommonJS modules.
description: How to use TinyMCE in a project using a module bundler like Webpack or Browserify
keywords: webpack browserify commonjs modules tinymce
---

TinyMCE can easily be installed with `npm` and used with module loaders such as [Webpack](https://webpack.github.io/) and [Browserify](http://browserify.org/) with just a few cautions to keep in mind.

The first thing you have to decide is how to load your modules.

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

If you are using CommonJS modules, the example looks pretty much the same, only using the different `require` function to import the dependencies.

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

TinyMCE will not work without a **skin**, which consists of some fonts and CSS files used by the editor. By default TinyMCE looks for these files in a `/skins` directory located in your root directory, although this can  be [configured in the init object]({{ site.baseurl }}/configure/editor-appearance/#skin_url).

No matter where you choose to put it you need a skin, and the quickest way to get started is to copy the skin that comes packaged with TinyMCE, located in `node_modules/tinymce/skins` - either manually copying the files in the finder/file explorer, or using the terminal with a command something like this:

**MacOS and Linux**

```
cp -r node_modules/tinymce/skins skins
``` 
**Windows**

```
xcopy /I /E node_modules/tinymce/skins skins
```

### Webpack file-loader

If you are using Webpack, another option is to use the [file loader](https://github.com/webpack/file-loader) together with the [require.context](https://github.com/webpack/docs/wiki/context) function to copy the skins directory by adding these lines before your call to the TinyMCE `init` function:

```javascript
require.context(
  'file?name=[path][name].[ext]&context=node_modules/tinymce!tinymce/skins',
  true,
  /.*/
);
```

What this does is more or less the same thing as the command line stuff above - it copies the skins directory from `node_modules/tinymce` to your output directory as defined in your Webpack configuration. This is handy because you can easily move the output directory of your build without having to copy over the skins folder manually - webpack will take care of it for you.

Unfortunately, we haven't found any equivalently easy-to-use way to handle this for Browserify builds, but please use the "Contribute to this page"-link at the top of this page and make a pull request if you have any ideas.

### Minification with UglifyJS2

[UglifyJS2](https://github.com/mishoo/UglifyJS2), one of the most popular JS minification tools, will corrupt TinyMCE unless `ascii-only` is set.

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
