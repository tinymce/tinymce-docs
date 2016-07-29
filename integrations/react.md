---
layout: default
title: React Integration
title_nav: React
description: React TinyMCE component.
keywords: integration integrate react reactjs webpack react
---

Integration with React is currently done through [react-tinymce](https://github.com/instructure-react/react-tinymce) a third party module maintained by [Matt Zabriskie](https://github.com/mzabriskie). This how-to shows you how to setup a project using [react](https://facebook.github.io/react/), [tinymce](/docs/demo/basic-example/) and [webpack](https://webpack.github.io/).

## 1. Setting up the project directory

First we create a directory for the project called "tinymce-react-demo". After that we run "npm init" inside the new directory, this will setup a new empty npm project.

```
$ mkdir tinymce-react-demo
$ cd tinymce-react-demo
$ npm init
```

## 2. Installation of react and webpack modules

Then we install webpack globally since this is a generic tool for bundling projects.

```
$ npm install -g webpack
```

After that we install [react](https://facebook.github.io/react/), [react-tinymce](https://github.com/instructure-react/react-tinymce) and various [webpack](https://webpack.github.io/) components we need to work with [es2015](https://babeljs.io/docs/learn-es2015/) and [jsx](https://facebook.github.io/react/docs/jsx-in-depth.html) files.

```
$ npm install react-tinymce react react-dom webpack babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev
```

## 3. Creating the main.jsx file

We now create the **main.jsx** file this is the main entry point for this react application. The main entry renders the tinymce react component inside the specified container element.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import TinyMCE from 'react-tinymce';

const App = React.createClass({
  handleEditorChange(e) {
    console.log('Content was updated:', e.target.getContent());
  },

  render() {
    return (
      <TinyMCE
        content="<p>This is the initial content of the editor</p>"
        config={% raw %}{{{% endraw %}
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        {% raw %}}}{% endraw %}
        onChange={this.handleEditorChange}
      />
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
```

## 4. Creating the demo.html file

This **demo.html** file has the container element where the react component will be rendered and loads tinymce from the cdn. It also includes the **bundle.js** file that gets created by webpack in a later step.

```html
<!DOCTYPE html>
<body>
  <div id="container"></div>
  <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
  <script src="bundle.js"></script>
</body>
```

## 5. Creating the webpack.config.js file

Now when all source files have been created we can setup the **webpack.config.js** file that creates a **bundle.js** file out of **main.jsx** file and it's dependencies.

```js
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.jsx',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
```

## 6. Building the project

You are now ready to build the project. Just run "webpack" inside the tinymce-react-demo page and it will load the webpack.config.js file and it's dependencies and bundle that up into the **bundle.js** file.

```
$ webpack
```

## 7. Testing the application

Now that the project is built you can open the "tinymce-react-demo/demo.html" file in your favorite browser.
