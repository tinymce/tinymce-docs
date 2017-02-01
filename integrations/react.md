---
layout: default
title: React Integration
title_nav: React
description: React TinyMCE component.
keywords: integration integrate react reactjs create-react-app
---

Integration with React is currently done through [react-tinymce](https://github.com/instructure-react/react-tinymce) a third party module maintained by [Matt Zabriskie](https://github.com/mzabriskie). This how-to shows you how to setup a project using [react](https://facebook.github.io/react/), [tinymce](/docs/demo/basic-example/) and [Create React App](https://github.com/facebookincubator/create-react-app).

## 1. Installing `create-react-app`

We will use the [Create React App](https://github.com/facebookincubator/create-react-app) to quickly and easily get our project up and running.

Simply run the following.

```
$ npm install -g create-react-app
```

## 2. Create a new project

Use `create-react-app` to create a new project named `tinymce-react-demo`.

```
$ create-react-app tinymce-react-demo
```
When all of the installs have finished, cd into the directory.

```
$ cd tinymce-react-demo
```

## 3. Setup `react-tinymce`

Install the npm package and save it to your `package.json` with `--save`.

```
$ npm install --save react-tinymce
```

`react-tinymce` requires `tinymce` to be globally accessible, so add the necessary script tag with the TinyMCE Cloud link to the head of the `index.html` file located in the `public` folder.

```html
<script src="{{site.cdnurl}}"></script>
```

## 4. Replace the App.js file

Open up the provided `App.js` file located in the `src` directory and replace its content with the code below.

```js
import React from 'react';
import TinyMCE from 'react-tinymce';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

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
}

export default App;
```

## 5. Start the development server

Start up the development server provided with `create-react-app`.

```
$ npm start
```

## 6. Keep on hacking

This was just a simple guide how to get started, the rest is up to you.

#### A note about integrations

> We are pleased to reference third-party integrations/code to help you build great products with TinyMCE. If you have queries about this integration, please contact the developer directly.
