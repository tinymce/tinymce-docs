## TinyMCE React technical reference

**Covered in this section:**

- [Installing the TinyMCE React integration using the NPM](#installingthetinymcereactintegrationusingnpm)
- [Configuring the editor](#configuringtheeditor)

  - [`apiKey`](#apikey)
  - [`cloudChannel`](#cloudchannel)
  - [`disabled`](#disabled)
  - [`id`](#id)
  - [`init`](#init)
  - [`initialValue`](#initialvalue)
  - [`inline`](#inline)
  - [`onEditorChange`](#oneditorchange)
  - [`outputFormat`](#outputformat)
  - [`plugins`](#plugins)
  - [`tagName`](#tagname)
  - [`textareaName`](#textareaname)
  - [`toolbar`](#toolbar)
  - [`tinymceScriptSrc`](#tinymcescriptsrc)
  - [`value`](#value)

- [Using the TinyMCE React component as a controlled component](#usingthetinymcereactcomponentasacontrolledcomponent)
- [Event binding](#eventbinding)

### Installing the TinyMCE React integration using NPM

To install the `tinymce-react` package and save it to your `package.json`.

```sh
$ npm install --save @tinymce/tinymce-react
```

### Configuring the editor

The editor accepts the following properties:

```jsx
<Editor
  apiKey='your-api-key'
  cloudChannel='{{site.productmajorversion}}-stable'
  disabled={false}
  id='uuid'
  init= {% raw %}{{{% endraw %}  {% raw %}}}{% endraw %}
  initialValue=''
  inline={false}
  onEditorChange={}
  plugins=''
  tagName='div'
  textareaName=''
  toolbar=''
  value=''
/>
```

None of the configuration properties are **required** for `tinymce-react` to work. Specify a {{site.cloudname}} API key using `apiKey` to remove the `This domain is not registered...` warning message.

#### `apiKey`
{{site.cloudname}} API key. Required for deployments using the {{site.cloudname}} to provide the {{site.productname}} editor.

To register for a {{site.cloudname}} API key, visit the [sign-up page]({{site.accountsignup}}).

**Default value:** `no-api-key`

**Type:** String

##### Example: Using `apiKey`

```jsx
<Editor
  apiKey='your-api-key'
/>
```

#### `cloudChannel`

**Default value:** `{{site.productmajorversion}}-stable`

**Possible values:**  `{{site.productmajorversion}}-stable`, `{{site.productmajorversion}}-testing`, `{{site.productmajorversion}}-dev`

Changes the {{site.productname}} build used for the editor to one of the following {{site.cloudname}} channels:

- `{{site.productmajorversion}}-stable` (**Default**): The current enterprise release of {{site.productname}}.
- `{{site.productmajorversion}}-testing`: The current release candidate for the next enterprise release of {{site.productname}}.
- `{{site.productmajorversion}}-dev`: The nightly-build version of {{site.productname}}.

Such as:

```jsx
<Editor
  apiKey='your-api-key'
  cloudChannel='{{site.productmajorversion}}-dev'
  init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %}
/>
```
For information {{site.productname}} development channels, see: [Specifying the {{site.productname}} editor version deployed from Cloud - dev, testing, and stable releases]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/#devtestingandstablereleases).

#### `disabled`
The `disabled` property can dynamically switch the editor between a "disabled" (read-only) mode (`true`) and the standard editable mode (`false`).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: Using `disabled`

```jsx
<Editor
  disabled={true}
/>
```

#### `id`
An id for the editor. Used for retrieving the editor instance using the `tinymce.get('ID')` method. Defaults to an automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Default value:** Automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Type:** String

##### Example: Using `id`

```jsx
<Editor
  id='uuid'
/>
```

#### `init`
Object sent to the `tinymce.init` method used to initialize the editor.

For information on the {{site.productname}} selector (`tinymce.init`), see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).

**Default value:** `{% raw %}{{{% endraw %} {% raw %}}}{% endraw %}`

**Type:** Object

##### Example: Using `init`

```jsx
<Editor
  init={% raw %}{{{% endraw %}
    selector: 'textarea#myTextArea',
    plugins: [
     'lists link image paste help wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'
  {% raw %}}}{% endraw %}
/>
```

#### `initialValue`
Initial content of the editor when the editor is initialized.

**Default value:** `' '`

**Type:** String

##### Example: Using `initialValue`

```jsx
<Editor
  initialValue='Once upon a time...'
/>
```

#### `inline`
Used to set the editor to inline mode. Using `<Editor inline={true} />` is the same as setting `{inline: true}` in the {{site.productname}} selector (`tinymce.init`).

For information on inline mode, see: [User interface options - `inline`]({{site.baseurl}}/configure/editor-appearance/#inline) and [Setup inline editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: Using `inline`

```jsx
<Editor
  inline={true}
/>
```

#### `onEditorChange`
Used to store the state of the editor outside the editor React component. This property is commonly used when using the {{site.productname}} React component as a controlled component. Use the [`outputFormat`](#outputformat) prop to specify the format of the content emitted.

For more information, see: [Using the {{site.productname}} React component as a controlled component](#usingthetinymcereactcomponentasacontrolledcomponent).

**Type:** EventHandler

#### `outputFormat`

Used to specify the format of the content emitted via the [`onEditorChange`](#oneditorchange) event.

**Type:** String

**Default value:** `html`

**Possible values:** `html`, `text`

##### Example: Using `outputFormat`

```jsx
<Editor
  outputFormat='text'
/>
```

#### `plugins`
Used to include plugins for the editor. Using `<Editor plugins='lists' />` is the same as setting `{plugins: 'lists'}` in the {{site.productname}} selector (`tinymce.init`).

For information on adding plugins to {{site.productname}}, see: [Add plugins to {{site.productname}}]({{site.baseurl}}/plugins/).

**Type:** String or Array

##### Example: Using `plugins`

```jsx
<Editor
  plugins='lists code'
/>
```

#### `tagName`
Only valid when [`<Editor inline={true} />`](#inline). Used to define the HTML element for the editor in inline mode.

**Default value:** `div`

**Type:** String

##### Example: Using `tagName`

```jsx
<Editor
  inline={true}
  tagName='my-custom-tag'
/>
```

#### `textareaName`
Sets the `name` attribute for the `textarea` element used for the editor in forms.

**Default value:** `' '`

**Type:** String

##### Example: Using `textareaName`

```jsx
<Editor
  textareaName='myTextArea'
/>
```

#### `toolbar`
Used to set the toolbar for the editor. Using `<Editor toolbar='bold' />` is the same as setting `{toolbar: 'bold'}` in the {{site.productname}} selector (`tinymce.init`).

For information setting the toolbar for {{site.productname}}, see: [User interface options - toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar).

**Possible values:**  See [Toolbar Buttons Available for {{site.productname}}]({{site.baseurl}}/advanced/available-toolbar-buttons/).

**Type:** String

##### Example: Using `toolbar`

```jsx
<Editor
  plugins='code'
  toolbar='bold italic underline code'
/>
```

#### `tinymceScriptSrc`
Use the `tinymceScriptSrc` prop to specify an external version of TinyMCE to lazy load.

**Type:** String

##### Example: Using `tinymceScriptSrc`

```jsx
<Editor
  tinymceScriptSrc='/path/to/tinymce.min.js'
/>
```

#### `value`
This property allows the editor to be used as a controlled component by setting the `value` property and using the `onEditorChange` event.

For more information, see: [Using the {{site.productname}} React component as a controlled component](#usingthetinymcereactcomponentasacontrolledcomponent).

**Type:** String

### Using the TinyMCE React component as a controlled component

To use the editor as a [controlled component](https://reactjs.org/docs/forms.html#controlled-components), use the `onEditorChange` event instead of the `onChange` event, such as:

```jsx
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
      <Editor
        value={this.state.content}
        onEditorChange={this.handleEditorChange}
      />
    )
  }
}
```

For information on controlled components in React, see: [React Docs - Controlled Components](https://reactjs.org/docs/forms.html#controlled-components).

### Event binding

Functions can be bound to editor events, such as:

```jsx
<Editor onSelectionChange={this.handlerFunction} />
```

When the handler is called (**handlerFunction** in this example), it is called with two arguments:

* `event` - The TinyMCE event object.
* `editor` - A reference to the editor.

The following events are available:

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