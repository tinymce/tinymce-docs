---
layout: default
title: React integration
title_nav: React
description: React TinyMCE component.
keywords: integration integrate react reactjs create-react-app tinymce-react
---

The [Official TinyMCE React component](https://github.com/tinymce/tinymce-react) integrates TinyMCE into React projects.
This procedure creates a [basic react application](https://github.com/facebook/create-react-app) containing a TinyMCE editor based on our [Basic example]({{site.baseurl}}/docs/demo/basic-example/).

For examples of the TinyMCE integration, visit [the tinymce-react storybook](https://tinymce.github.io/tinymce-react/).

## Prerequisites

This procedure requires:
* [Node.js (and npm)](https://nodejs.org/).
* Access to `tinymce.min.js` on either:

    * [Tiny Cloud]({{site.baseurl}}/cloud-deployment-guide/editor-and-features/).
    * TinyMCE Self-hosted. See [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/) for details on self-hosting TinyMCE.

## Procedure

1. On a command line or command prompt, install the [Create React App](https://github.com/facebook/create-react-app) package.

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
4. Install the `tinymce-react` package and save it to your `package.json` with `--save`.

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
    This JavaScript file will create the class `App` containing a TinyMCE editor configured to replicate the example on the [Basic example page]({{site.baseurl}}/docs/demo/basic-example/).
6. Provide access to TinyMCE using Tiny Cloud, TinyMCE Self-hosted or by bundling TinyMCE using a module loader.

    * **Tiny Cloud**

        Include the `apiKey` option in the editor element and include your [TinyMCE API key]({{site.baseurl}}/signup/).

        Such as:

        ```js
        <Editor apiKey='your-api-key' init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %} />
        ```

    * **TinyMCE Self-hosted**

        To load a self-hosted deployment of TinyMCE, add a script to either the `<head>` or the end of the `<body>` of the HTML file, such as:
        ```html
        <script src="/path/to/tinymce.min.js"></script>
        ```

        To use a self-hosted deployment of TinyMCE with this React application, add the script to `/path/to/tinymce-react-demo/public/index.html`.

        For information on self-hosting TinyMCE, see: [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/).

    * **Bundling TinyMCE using a module loader**

        To learn about bundling TinyMCE using a module loader (such as Webpack and Browserify), see: [Usage with module loaders]({{site.baseurl}}/advanced/usage-with-module-loaders/).

7. Test the application using the Node.js development server.
    * To start the development server, navigate to the `tinymce-react-demo` directory and run:

        ```
        $ npm run start
        ```

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

## Deploying the application to a HTTP server.
The application will require further configuration before it can be deployed to a production environment. For information on configuring the application for deployment, see: [Create React App - Deployment](https://create-react-app.dev/docs/deployment).

To deploy the application to a local HTTP Server:

1. Navigate to the `tinymce-react-demo` directory and run:

    ```
    $ npm run build
    ```

2. Copy the contents of the `tinymce-react-demo/build` directory to the root directory of the web server.

The application has now been deployed on the web server.

> **Note:** Additional configuration is required to deploy the application outside the web server root directory, such as http://localhost:<port>/my_react_application.

## Next Steps

* For examples of the TinyMCE integration, see: [the tinymce-react storybook](https://tinymce.github.io/tinymce-react/).
* For information on customizing:

    * TinyMCE, see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).
    * The React application, see: [Create React App](https://create-react-app.dev/docs/getting-started) or [the React documentation](https://reactjs.org/docs/getting-started.html).


## Technical Reference

### Configuring the editor

None of the configuration props are **required** for the component to work - other than if you are using TinyMCE Cloud you will have to specify the `apiKey` to get rid of the `This domain is not registered...` warning message.

The editor accepts the following props:

```html
<Editor
  apiKey: 'your-api-key';
  cloudChannel: '5-stable';
  disabled: false;
  id: 'uuid';
  init: {% raw %}{{{% endraw %}  {% raw %}}}{% endraw %};
  initialValue: '';
  inline: false;
  plugins: '';
  tagName: 'div';
  textareaName: '';
  toolbar: '';
  value: '';
/>
```

#### `apiKey`
TinyMCE API key. Required for deployments using TinyMCE cloud.

To register for a TinyMCE cloud API Key, visit the [sign-up page](https://www.tiny.cloud/signup/).

**Default value:** `no-api-key`

**Type:** String

##### Example: `apiKey`

```html
<Editor
  apiKey: 'your-api-key';
/>
```

#### `cloudChannel`

**Default value:** `5-stable`

**Possible values:**  `5-stable`, `5-testing`, `5-dev`

Changes the TinyMCE build used for the editor to one of the following cloud channels:

- `5-stable` (**Default**): The current enterprise release of TinyMCE.
- `5-testing`: The current release candidate for the next enterprise release of TinyMCE.
- `5-dev`: The nightly-build version of TinyMCE.

Such as:

```js
<Editor apiKey='your-api-key' cloudChannel='5-dev' init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %} />
```
For information TinyMCE development channels, see: [Specifying the TinyMCE editor version deployed from Cloud - dev, testing, and stable releases]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/#devtestingandstablereleases).

#### `disabled`
The `disabled` prop can dynamically set the editor into a "disabled" (read-only) mode (`true`) or into the normal editable mode (`false`).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: `disabled`

```html
<Editor
  disabled: true;
/>
```

#### `id`
An id for the editor. so you can later grab the instance by using the `tinymce.get('ID')` method on tinymce, defaults to an automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Default value:** Automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Type:** String

##### Example: `id`

```html
<Editor
  id: 'uuid';
/>
```

#### `init`
Object sent to the `tinymce.init` method used to initialize the editor.

**Default value:** `{% raw %}{{{% endraw %} {% raw %}}}{% endraw %}`

**Type:** Object

##### Example: `init`

```html
<Editor
  init: {% raw %}{{{% endraw %}  {% raw %}}}{% endraw %};
/>
```

#### `initialValue`
Initial value that the editor will be initialized with.

**Default value:** `' '`

**Type:** String

##### Example: `initialValue`

```html
<Editor
  initialValue: '';
/>
```

#### `inline`
Shorthand for setting that the editor should be inline, `<Editor inline />` is the same as setting `{inline: true}` in the init.

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: `inline`

```html
<Editor
  inline: false;
/>
```

#### `plugins`
Shorthand for setting what plugins you want to use, `<Editor plugins="foo bar" />` is the same as setting `{plugins: 'foo bar'}` in the init.  [Add plugins to TinyMCE](https://www.tiny.cloud/docs/plugins/)

**Type:** String or Array

##### Example: `plugins`

```html
<Editor
  plugins: '';
/>
```

#### `tagName`
Only used if the editor is inline, decides what element to initialize the editor on, defaults to `div`.

**Default value:** `div`

**Type:** String

##### Example: ``

```html
<Editor
  tagName: 'div';
/>
```

#### `textareaName`
Sets the name attribute on the textarea that the editor is initialized on for use in forms.

**Default value:** `' '`

**Type:** String

##### Example: `textareaName`

```html
<Editor
  textareaName: '';
/>
```

#### `toolbar`
Shorthand for setting what toolbar items you want to show, `<Editor toolbar="foo bar" />` is the same as setting `{toolbar: 'foo bar'}` in the init.

**Default value:** `' '`

**Possible values:**  See [Editor control identifiers - Toolbar controls]({{site.baseurl}}/advanced/editor-control-identifiers/).

**Type:** String

##### Example: `toolbar`

```html
<Editor
  plugins: 'code';
  toolbar: 'bold italic underline code';
/>
```

#### `value`
Added functionality so you can use the editor as a controlled component by setting the `value` prop and using the `onEditorChange` event

See [Using as a controlled component](#usingasacontrolledcomponent).

**Type:** String

##### Example: `value`

```html
<Editor
  value: '';
/>
```

### Event binding

You can bind editor events via a shorthand prop on the editor, for example:

```html
<Editor onSelectionChange="this.handlerFunction" />
```

Where the handler function will be called with the event and a reference to the editor.

Here is a full list of the events available:

* `onActivate`
* `onAddUndo`
* `onBeforeAddUndo`
* `onBeforeExecCommand`
* `onBeforeGetContent`
* `onBeforeRenderUI`
* `onBeforeSetContent`
* `onBeforePaste`
* `onBlur`
* `onChange`
* `onClearUndos`
* `onClick`
* `onContextMenu`
* `onCopy`
* `onCut`
* `onDblclick`
* `onDeactivate`
* `onDirty`
* `onDrag`
* `onDragDrop`
* `onDragEnd`
* `onDragGesture`
* `onDragOver`
* `onDrop`
* `onExecCommand`
* `onFocus`
* `onFocusIn`
* `onFocusOut`
* `onGetContent`
* `onHide`
* `onInit`
* `onKeyDown`
* `onKeyPress`
* `onKeyUp`
* `onLoadContent`
* `onMouseDown`
* `onMouseEnter`
* `onMouseLeave`
* `onMouseMove`
* `onMouseOut`
* `onMouseOver`
* `onMouseUp`
* `onNodeChange`
* `onObjectResizeStart`
* `onObjectResized`
* `onObjectSelected`
* `onPaste`
* `onPostProcess`
* `onPostRender`
* `onPreProcess`
* `onProgressState`
* `onRedo`
* `onRemove`
* `onReset`
* `onSaveContent`
* `onSelectionChange`
* `onSetAttrib`
* `onSetContent`
* `onShow`
* `onSubmit`
* `onUndo`
* `onVisualAid`


## Using as a controlled component

If you want to use the component as a [controlled component](https://reactjs.org/docs/forms.html#controlled-components) you should use the `onEditorChange` instead of the `onChange` event, like this:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(content, editor) {
    this.setState({ content });
  }

  render() {
    return (
      <Editor value={this.state.content} onEditorChange={this.handleEditorChange} />
    )
  }
}
```