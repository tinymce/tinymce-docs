---
layout: default
title: React integration
title_nav: React
description: React TinyMCE component.
keywords: integration integrate react reactjs create-react-app
---

The TinyMCE [@tinymce/tinymce-react](https://github.com/tinymce/tinymce-react) package integrates TinyMCE into React projects.
This procedure creates a [basic react application](https://github.com/facebook/create-react-app) containing a TinyMCE editor based on our [Basic example]({{site.baseurl}}/docs/demo/basic-example/).

## Prerequisites

This procedure requires:
* [Node.js (and npm)](https://nodejs.org/).
* Access to `tinymce.min.js` on:

    * [Tiny Cloud]({{site.baseurl}}/cloud-deployment-guide/editor-and-features/).
    * TinyMCE Self-hosted. See [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/) for installation options.

## Procedure

1. On a command line or command prompt, install the [Create React App](https://github.com/facebook/create-react-app) package, such as:

    ```
    $ npm install -g create-react-app
    ```
2. Create a new react project named `tinymce-react-demo`.

    ```
    $ create-react-app tinymce-react-demo
    ```
3. Change into the newly created directory.

    ```
    $ cd tinymce-react-demo
    ```
4. Install the `react-tinymce` package and save it to your `package.json` with `--save`.

    ```
    $ npm install --save @tinymce/tinymce-react
    ```
5. Using a text editor, open `/path/to/tinymce-react-demo/src/App.js` and replace the contents with:

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
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
            {% raw %}}}{% endraw %}
            onChange={this.handleEditorChange}
          />
        );
      }
    }

    export default App;
    ```
    This javascript file will create the class `App` containing a TinyMCE editor configured to replicate the example on the [Basic example page]({{site.baseurl}}/docs/demo/basic-example/).
6. Provide access to TinyMCE using Tiny Cloud or TinyMCE Self-hosted.
    * **Tiny Cloud**

        Include the `apiKey` option in the editor element and include your [TinyMCE API key]({{site.baseurl}}/signup/).

        Such as:

        ```js
        <Editor apiKey='your-api-key' init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %} />
        ```
        _(Optional)_ The `cloudChannel` option can be used to connect to one of the following cloud channels:

        - `5-stable` (**Default**): The current enterprise release of TinyMCE.
        - `5-testing`: The current release candidate for next enterprise release of TinyMCE.
        - `5-dev`: The nightly-build version of TinyMCE.

        Such as:

        ```js
        <Editor apiKey='your-api-key' cloudChannel='5-dev' init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %} />
        ```
        For information TinyMCE development channels, see: [Specifying the TinyMCE editor version deployed from Cloud - dev, testing, and stable releases]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/#devtestingandstablereleases).

    * **TinyMCE Self-hosted**

To opt out of using TinyMCE cloud, you have to make TinyMCE globally available yourself. This can be done either by hosting the `tinymce.min.js` file by yourself and adding a script tag to your HTML or, if you are using a module loader, installing TinyMCE with npm. For info on how to get TinyMCE working with module loaders check out [this page in the documentation]({{site.baseurl}}/advanced/usage-with-module-loaders/).

```html
<script src="/path/to/tinymce.min.js"></script>
```


## 5. Start the development server

Start up the development server provided with `create-react-app`.

```
$ npm start
```

## deploy to a http server

npm run build

copy contents of build folder to the root directory of the web server

## 6. Next Steps

https://create-react-app.dev/docs/deployment

https://reactjs.org/docs/getting-started.html

This was just a simple guide on how to get started. For configuration information, see: [the React documentation](https://reactjs.org/docs/getting-started.html).
