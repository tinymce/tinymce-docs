## TinyMCE React technical reference

**Covered in this section:**

- [Installing the TinyMCE React integration using NPM or Yarn](#installingthetinymcereactintegrationusingnpmoryarn)
- [Configuring the editor](#configuringtheeditor)

  - [`apiKey`](#apikey)
  - [`cloudChannel`](#cloudchannel)
  - [`disabled`](#disabled)
  - [`id`](#id)
  - [`init`](#init)
  - [`initialValue`](#initialvalue)
  - [`inline`](#inline)
  - [`onEditorChange`](#oneditorchange)
  - [`outputFormat` (*deprecated*)](#outputformat)
  - [`plugins`](#plugins)
  - [`scriptLoading`](#scriptloading)
  - [`tagName`](#tagname)
  - [`textareaName`](#textareaname)
  - [`toolbar`](#toolbar)
  - [`tinymceScriptSrc`](#tinymcescriptsrc)
  - [`value`](#value)

- [Using the TinyMCE React component as a uncontrolled component](#usingthetinymcereactcomponentasauncontrolledcomponent)
- [Using the TinyMCE React component as a controlled component](#usingthetinymcereactcomponentasacontrolledcomponent)
- [Event binding](#eventbinding)

### Installing the TinyMCE React integration using NPM or Yarn

To install the `tinymce-react` package and save it to your `package.json`.

```sh
$ npm install --save @tinymce/tinymce-react
```

or with Yarn

```sh
$ yarn add @tinymce/tinymce-react
```

### Configuring the editor

The following are the most common properties grouped by category.

#### Configuring editor source

The integration will load {{site.productname}} from these sources in this priority:
1. If the global `tinymce` is present on the page nothing additional will be loaded and it will be used.
2. If the `tinymceScriptSrc` property is provided, then a script tag will be added to load {{site.productname}} from the given URL.
3. Finally if none of the above conditions apply then a script tag will be added to load {{site.productname}} from {{site.cloudname}}.

These settings are used to configure this behavior further:

<dl>
<dt><a href="#apikey"><code>apiKey</code></a></dt>
<dd>The {{site.cloudname}} API key. When loading from {{site.cloudname}} specify this to remove the &quot;This domain is not registered...&quot; warning message.</dd>
<dt><a href="#cloudchannel"><code>cloudChannel</code></a></dt>
<dd>The build of {{site.productname}} used when loading from {{site.cloudname}}.</dd>
<dt><a href="#scriptloading"><code>scriptLoading</code></a></dt>
<dd>The script loading behavior settings. Allows setting the async and defer attributes as well as adding an additional delay in milliseconds.</dd>
<dt><a href="#tinymcescriptsrc"><code>tinymceScriptSrc</code></a></dt>
<dd>The URL to load {{site.productname}}, normally used when loading a self hosted version of {{site.productname}}.</dd>
</dl>

#### Configuring page elements

These settings provide some control over the page elements that the integration creates:.
<dl>
<dt><a href="#id"><code>id</code></a></dt>
<dd>The id attribute for the element that the editor is initialized on.</dd>
<dt><a href="#inline"><code>inline</code></a></dt>
<dd>Load the editor as part of the page sharing the page styling and selection.</dd>
<dt><a href="#tagname"><code>tagName</code></a></dt>
<dd>The tag used for creating an inline editor. Ignored for an iframe editor.</dd>
<dt><a href="#textareaname"><code>textareaName</code></a></dt>
<dd>The name attribute on the textarea tag used for creating the iframe editor. Ignored for an inline editor.</dd>
</dl>

#### Configuring editor settings

These settings are read once when the editor is initialized. Changes after the editor has launched are ignored.
<dl>
<dt><a href="#init"><code>init</code></a></dt>
<dd>Additional settings passed to {{site.productname}} when it is initialized.</dd>
<dt><a href="#plugins"><code>plugins</code></a></dt>
<dd>Specify the editor plugins. This will be combined with <code>plugins</code> in the <code>init</code> property.</dd>
<dt><a href="#toolbar"><code>toolbar</code></a></dt>
<dd>Specify the editor toolbar. This will override the <code>toolbar</code> in the <code>init</code> property.</dd>
</dl>

#### Managing the editor

These settings can be updated once the editor is initialized. Note that there are [other events](#eventbinding) not mentioned here.
<dl>
<dt><a href="#disabled"><code>disabled</code></a></dt>
<dd>Should the editor be in read-only mode.</dd>
<dt><a href="#initialvalue"><code>initialValue</code></a></dt>
<dd>The starting value of the editor which should only be set once as any change will reset the editor.</dd>
<dt><a href="#eventbinding"><code>onBeforeAddUndo</code></a></dt>
<dd>An event handler for notifying when the editor is about to create an undo level and preventing it if required. This is important for controlled components that restrict the allowed values of the editor.</dd>
<dt><a href="#oneditorchange"><code>onEditorChange</code></a></dt>
<dd>An event handler for detecting editor changes normally used when implementing a controlled component.</dd>
<dt><a href="#eventbinding"><code>onInit</code></a></dt>
<dd>An event handler for notifying when the editor has initialized. Useful for getting the initial value of the editor or obtaining a reference to the editor that can be used for a uncontrolled component.</dd>
<dt><a href="#value"><code>value</code></a></dt>
<dd>Sets and enforces the value of the editor. Only used for a controlled component.</dd>
</dl>

None of the configuration properties are **required** for the {{site.productname}} React component to work, however as previously noted that when loading from {{site.cloudname}} a warning message
will display if the `apiKey` is not configured correctly.

#### `apiKey`

{{site.cloudname}} API key. 

Needed for deployments using the {{site.cloudname}} to provide the {{site.productname}} editor without the warning message "This domain is not registered...".

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

Changes the {{site.productname}} build used for the editor to either a specific version or a channel indicating a stability level.

**Default value:** `{{site.productmajorversion}}-stable`

**Possible values:**  `{{site.productmajorversion}}-stable`, `{{site.productmajorversion}}-testing`, `{{site.productmajorversion}}-dev`, `{{site.productminorversion}}`

Changes the {{site.productname}} build used for the editor to one of the following {{site.cloudname}} channels:

- `{{site.productmajorversion}}-stable` (**Default**): The current enterprise release of {{site.productname}}.
- `{{site.productmajorversion}}-testing`: The current release candidate for the next enterprise release of {{site.productname}}.
- `{{site.productmajorversion}}-dev`: The nightly-build version of {{site.productname}}.
- A version number such as `{{site.productminorversion}}`: The specific enterprise release version of {{site.productname}}.

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

An id for the editor. Used for retrieving the editor instance using the `tinymce.get('ID')` method.

**Default value:** Automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Type:** String

##### Example: Using `id`

```jsx
<Editor
  id='your-id'
/>
```

#### `init`

Additional settings passed to the `tinymce.init({...})` method used to initialize the editor.

For information on the {{site.productname}} method `tinymce.init({...})`, see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).

Note that unlike the {{site.productname}} method `tinymce.init()` the `selector`, 
`target` and `readonly` properties should not be specified as they will be overridden
by the integration.

**Default value:** `{ }`

**Type:** Object

##### Example: Using `init`

```jsx
<Editor
  init={% raw %}{{{% endraw %}
    plugins: [
     'lists link image paste help wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'
  {% raw %}}}{% endraw %}
/>
```

#### `initialValue`

The initial HTML content of the editor. This will reset the editor undo state and cursor when changed.

This may be set either before the editor loads, or soon afterwards by an asynchronous
process.

Ensure that this is **not** updated by the editor value or the editor will be unusable.

**Default value:** `''`

**Type:** String

##### Example: Using static `initialValue`

```jsx
<Editor
  initialValue='<p>Once upon a time...</p>'
/>
```

##### Example: Using asynchronous `initialValue`

```jsx
const [initialValue, setInitialValue] = useState(undefined);
useEffect(() => {
  // a real application might do a fetch request here to get the content
  setTimeout(() => setInitialValue('<p>Once upon a time...</p>'), 500);
}, []);

return (
  <Editor
    initialValue={initialValue}
  />
);
```

#### `inline`

Used to set the editor to inline mode. Using `<Editor inline={true} />` is the same as setting `{inline: true}` in the {{site.productname}} method `tinymce.init({...})`.

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

Used to store the state of the editor outside the {{site.productname}} React component. 
This property is commonly used when using the {{site.productname}} React component as a controlled component.

It is called with two arguments:
<dl>
<dt><code>value</code></dt>
<dd>The current value of the editor. This is normally HTML but can be text if the deprecated <a href="#outputformat"><code>outputFormat</code></a> property is used.</dd>
<dt><code>editor</code></dt>
<dd>A reference to the editor.</dd>
</dl>

For more information, see: [Using the {{site.productname}} React component as a controlled component](#usingthetinymcereactcomponentasacontrolledcomponent).

**Type:** EventHandler

#### `outputFormat`

> **Important**: This option was deprecated with the release of the {{site.productname}} 
React component 3.11.0. The `outputFormat` option will be removed in a future 
release of the {{site.productname}} React component.

Used to specify the format of the content emitted via the [`onEditorChange`](#oneditorchange) event.

This does not change the input format, so the editor must still be supplied HTML 
in the `value` or `initialValue` which makes this option much harder to use 
correctly than it initially seems.

**Type:** String

**Default value:** `html`

**Possible values:** `html`, `text`

##### Example: Using `outputFormat`

```jsx
const textToHtml = (text) => {
  const elem = document.createElement('div');
  return text.split(/\n\n+/).map((paragraph) => {
    return '<p>' + paragraph.split(/\n+/).map((line) => {
      elem.textContent = line;
      return elem.innerHTML;
    }).join('<br/>') + '</p>';
  }).join('');
};
const initialText = 'The quick brown fox jumps over the lazy dog';
const [text, setText] = useState(initialText);
return (
  <>
    <Editor
      initialValue={textToHtml(initialText)}
      outputFormat='text'
      onEditorChange={(newText) => setText(newText)}
    />
    <pre>{text}</pre>
  </>
);
```

##### Example: Replacing usage of `outputFormat`

```jsx
const [value, setValue] = useState('<p>The quick brown fox jumps over the lazy dog</p>');
const [text, setText] = useState('');

return (
  <>
    <Editor
      value={value}
      onInit={(evt, editor) => {
        setText(editor.getContent({format: 'text'}));
      }}
      onEditorChange={(newValue, editor) => {
        setValue(newValue);
        setText(editor.getContent({format: 'text'}));
      }}
    />
    <pre>{text}</pre>
  </>
);
```

#### `plugins`

Used to include plugins for the editor. Using `<Editor plugins='lists' />` is the same as setting `{plugins: 'lists'}` in the {{site.productname}} method `tinymce.init({...})`.

For information on adding plugins to {{site.productname}}, see: [Add plugins to {{site.productname}}]({{site.baseurl}}/plugins/).

**Type:** String or Array

##### Example: Using `plugins`

```jsx
<Editor
  plugins='lists code'
/>
```

#### `scriptLoading`

Used to configure the script tag created to load {{site.productname}}.

Contains 3 settings:
<dl>
<dt><code>async</code></dt>
<dd>Sets the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async"><code>async</code></a> attribute on the script tag created to load {{site.productname}}. 
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async">For classic scripts, if the async attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.</blockquote>
<b>Default value:</b> <code>false</code>
</dd>
<dt><code>defer</code></dt>
<dd>Sets the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer"><code>defer</code></a> attribute on the script tag created to load {{site.productname}}. 
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer">This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.</blockquote>
<b>Default value:</b> <code>false</code>
</dd>
<dt><code>delay</code></dt>
<dd>The script tag to load {{site.productname}} will not be added to the document for the number of milliseconds indicated.<br/>
<b>Default value:</b> <code>0</code>
</dd>
</dl>

**Type:** Object
```ts
{
  async?: boolean;
  defer?: boolean;
  delay?: number;
}
```

##### Example: Loading {{site.productname}} asynchronously

```jsx
<Editor scriptLoading={% raw %}{{{% endraw %} async: true {% raw %}}}{% endraw %}>
```

##### Example: Delaying load of {{site.productname}} for 500 milliseconds

```jsx
<Editor scriptLoading={% raw %}{{{% endraw %} delay: 500 {% raw %}}}{% endraw %}>
```

#### `tagName`

Only valid when [`<Editor inline={true} />`](#inline). Used to define the HTML element for the editor in inline mode.

**Default value:** `div`

**Type:** String

##### Example: Using `tagName`

```jsx
<Editor
  inline={true}
  tagName='section'
/>
```

#### `textareaName`

Only valid when the editor is in iframe mode. Sets the `name` attribute for the `textarea` element used for the editor in forms.

**Default value:** `undefined`

**Type:** String

##### Example: Using `textareaName`

```jsx
<form method="post">
  <Editor
    textareaName='description'
  />
  <button type="submit">Submit</button>
</form>
```

#### `toolbar`

Used to set the toolbar for the editor. Using `<Editor toolbar='bold' />` is the same as setting `{toolbar: 'bold'}` in the {{site.productname}} method `tinymce.init({...})`.

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

The HTML content of the editor when operating as a controlled component. 

When this property is different to the current editor content, the editor content
will be changed to match (within 200 milliseconds) and an undo level will be created.
When the editor content changes by this mechanism an attempt will be made to
retain the selection, however if the previous selection does not exist in the new
content the cursor will be returned to the start of the document.

This property allows the editor to be used as a controlled component by setting 
the `value` property and using the `onEditorChange` event to update the `value`.

For more information, see: [Using the {{site.productname}} React component as a controlled component](#usingthetinymcereactcomponentasacontrolledcomponent).

**Type:** String

### Using the {{site.productname}} React component as a uncontrolled component

The {{site.productname}} React component is best used as a uncontrolled component
as it allows the editor to perform well on larger documents.

When using the editor in the uncontrolled mode you must avoid using the `value`
and `onEditorChange` props. Instead, get the content of the editor directly
when it is needed. This is easiest done by storing the editor reference when the
`onInit` event handler is called.

If you need to provide visual feedback to the user when there is content ready 
to be saved you can use the `onDirty` event handler combined with clearing
the dirty state when saving the editor content.

##### Example: Functional uncontrolled component with save button and dirty state

```jsx
function MyComponent({initialValue}) {
  const edRef = useRef(null);
  const [dirty, setDirty] = useState(false);
  useEffect(() => setDirty(false), [initialValue]);
  const save = () => {
    if (edRef.current) {
      const content = edRef.current.getContent();
      setDirty(false);
      edRef.current.setDirty(false);
      // an application would save the editor content to the server here
      console.log(content);
    }
  };
  return (
    <>
      <Editor
        initialValue={initialValue}
        onInit={(evt, editor) => edRef.current = editor}
        onDirty={() => setDirty(true)}
      />
      <button onClick={save} disabled={!dirty}>Save</button>
      {dirty && <p>You have unsaved content!</p>}
    </>
  );
}
```

### Using the {{site.productname}} React component as a controlled component

> **Warning**: The controlled component can have performance problems on large
documents as it requires converting the entire document to a string on each
keystroke or modification.

To use the editor as a [controlled component](https://reactjs.org/docs/forms.html#controlled-components)
both the `value` and `onEditorChange` props should be used.

The `value` prop enforces the given value so if it is provided on its own then the
editor will rollback any changes. 

The `onEditorChange` prop allows providing an event handler that will be run
on any change to the editor value. Changes to the editor must be applied to the
`value` prop within 200 milliseconds to avoid them being rolled back.

##### Example: Functional controlled component

```jsx
function MyComponent({initialValue}) {
  const [value, setValue] = useState(initialValue ?? '');
  useEffect(() => setValue(initialValue ?? ''), [initialValue]);
  return (
    <Editor
      initialValue={initialValue}
      value={value}
      onEditorChange={(newValue, editor) => setValue(newValue)}
    />
  );
}
```

##### Example: Class controlled component

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.initialValue ?? '' };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.initialValue !== prevProps.initialValue) {
      this.setState({ value: this.props.initialValue ?? '' })
    }
  }

  handleEditorChange(value, editor) {
    this.setState({ value });
  }

  render() {
    return (
      <Editor
        initialValue={this.props.initialValue}
        value={this.state.value}
        onEditorChange={this.handleEditorChange}
      />
    )
  }
}
```

When the editor must be restricted to avoid invalid states, such as exceeding a maximum length,
then a handler for `onBeforeAddUndo` must be added to avoid those states in the undo history.

##### Example: Limited length controlled component

```jsx
function MyComponent({initialValue, limit}) {
  const sizeLimit = limit ?? 50;
  const [ value, setValue ] = React.useState(initialValue ?? '');
  const [ length, setLength ] = React.useState(0);

  const handleInit = (evt, editor) => {
    setLength(editor.getContent({ format: 'text' }).length);
  };

  const handleUpdate = (value, editor) => {
    const length = editor.getContent({ format: 'text' }).length;
    if (length <= sizeLimit) {
      setValue(value);
      setLength(length);
    }
  };

  const handleBeforeAddUndo = (evt, editor) => {
    const length = editor.getContent({ format: 'text' }).length;
    // note that this is the opposite test as in handleUpdate
    // because we are determining when to deny adding an undo level
    if (length > sizeLimit) {
      evt.preventDefault();
    }
  };

  return (
    <>
      <Editor
        initialValue={initialValue}
        value={value}
        onInit={handleInit}
        onEditorChange={handleUpdate}
        onBeforeAddUndo={handleBeforeAddUndo}
      />
      <p>Remaining: {sizeLimit - length}</p>
    </>
  );
};
```

For information on controlled components in React, see: [React Docs - Controlled Components](https://reactjs.org/docs/forms.html#controlled-components).

### Event binding

Functions can be bound to editor events, such as:

```jsx
<Editor onSelectionChange={this.handlerFunction} />
```

When the handler is called (**handlerFunction** in this example), it is called with two arguments:
<dl>
<dt><code>event</code></dt>
<dd>The TinyMCE event object.</dd>
<dt><code>editor</code></dt>
<dd>A reference to the editor.</dd>
</dl>

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