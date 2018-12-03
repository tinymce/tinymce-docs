---
layout: default
title: React integration
title_nav: React
description: React TinyMCE component.
keywords: integration integrate react reactjs create-react-app
---

Integration with React is easily done with our [@tinymce/tinymce-react](https://github.com/tinymce/tinymce-react) package. This how-to shows you how to setup a project using [react](https://facebook.github.io/react/), [tinymce](/docs/demo/basic-example/) and [Create React App](https://github.com/facebookincubator/create-react-app).

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
$ npm install --save @tinymce/tinymce-react
```

### 3.1 Loading TinyMCE
#### Auto-loading from TinyMCE Cloud
`@tinymce/tinymce-react` requires `tinymce` to be globally available to work, but to make it as easy as possible it will automatically load [TinyMCE Cloud](https://www.tinymce.com/docs/cloud-deployment-guide/editor-and-features/) if it can't find TinyMCE available when the component is mounting. To get rid of the `This domain is not registered...` warning, sign up for the cloud and enter the api key like this:

```js
<Editor apiKey='YOUR_API_KEY' init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %} />
```

You can also define what cloud channel you want to use out these three:

* `stable` **Default**. The most stable and well-tested version that has passed the Tiny quality assurance process.
* `testing` This channel will deploy the current candidate for release to the `stable` channel.
* `dev` The cutting edge version of TinyMCE updated daily for the daring users.

So using the `dev` channel would look like this:

```js
<Editor apiKey='YOUR_API_KEY' cloudChannel='dev' init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %} />
```

For more info on the different channels see the [documentation](https://www.tinymce.com/docs/cloud-deployment-guide/editor-and-features/editor-plugin-version/#devtestingandstablereleases).

#### Loading TinyMCE by yourself

To opt out of using TinyMCE cloud, you have to make TinyMCE globally available yourself. This can be done either by hosting the `tinymce.min.js` file by yourself and adding a script tag to your HTML or, if you are using a module loader, installing TinyMCE with npm. For info on how to get TinyMCE working with module loaders check out [this page in the documentation](https://www.tinymce.com/docs/advanced/usage-with-module-loaders/).

```html
<script src="{{site.cdnurl}}"></script>
```

## 4. Replace the App.js file

Open up the provided `App.js` file located in the `src` directory and replace its content with the code below.

```js
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={% raw %}{{{% endraw %}
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

This was just a simple guide on how to get started. For more complex configuration information, see the React documentation.
