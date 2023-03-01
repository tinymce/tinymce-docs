## TinyMCE Vue.js technical reference

**Covered in this section:**

- [Installing the TinyMCE Vue.js integration using NPM](#installingthetinymcevuejsintegrationusingnpm)
- [Using the TinyMCE Vue.js integration](#usingthetinymcevuejsintegration)
- [Configuring the editor](#configuringtheeditor)

    - [`api-key`](#api-key)
    - [`cloud-channel`](#cloud-channel)
    - [`disabled`](#disabled)
    - [`id`](#id)
    - [`init`](#init)
    - [`initial-value`](#initial-value)
    - [`inline`](#inline)
    - [`model-events`](#model-events)
    - [`output-format`](#output-format)
    - [`plugins`](#plugins)
    - [`tag-name`](#tag-name)
    - [`toolbar`](#toolbar)
    - [`tinymce-script-src`](#tinymce-script-src)

- [Form Input Bindings: `v-model`](#forminputbindingsv-model)
- [Event binding](#eventbinding)

### Installing the TinyMCE Vue.js integration using NPM

To install the `tinymce-vue` package and save it to your `package.json`.

* For Vue.js 3.x users:

  ```sh
  $ npm install --save "@tinymce/tinymce-vue@^4"
  ```

* For Vue.js 2.x users:

  ```sh
  $ npm install --save "@tinymce/tinymce-vue@^3"
  ```

### Using the TinyMCE Vue.js integration

1. Load the component.
    * For bundle loader users (such as `webpack`, `rollup`, or `browserify`):

        ```js
        // es modules
        import Editor from '@tinymce/tinymce-vue';
        // commonjs require
        // NOTE: default needed after require
        var Editor = require('@tinymce/tinymce-vue').default;
        ```
    * To load `tinymce-vue` in a HTML file:

        ```html
        <script src="/path/to/tinymce-vue.min.js"></script>
        ```
2. Add the editor to the `components` property of the app:

    ```js
    // This might look different depending on how you have set up your app
    // but the important part is the components property
    var app = new Vue({
      el: '#app',
      data: { /* Your data */ },
      components: {
        'editor': Editor // <- Important part
      },
      methods: { /* Your methods */}
    })
    ```
3. Add the `<editor>` tag to the `template`

    ```html
    <editor api-key="API_KEY" :init="{plugins: 'wordcount'}" />
    ```

### Configuring the editor

The editor accepts the following properties:

```html
<editor
  api-key="your-api-key"
  cloud-channel="{{site.productmajorversion}}"
  :disabled=false
  id="uuid"
  :init= "{% raw %}{{% endraw %}  {% raw %}}{% endraw %}"
  initial-value=""
  :inline=true
  model-events= ""
  plugins=""
  tag-name="div"
  toolbar=""
  value=""
/>
```

None of the configuration properties are **required** for `tinymce-vue` to work. Specify a {{site.cloudname}} API key using `api-key` to remove the `This domain is not registered...` warning message.

#### `api-key`
{{site.cloudname}} API key. Required for deployments using the {{site.cloudname}} to provide the {{site.productname}} editor.

{% include misc/get-an-api-key.md %}

**Default value:** `no-api-key`

**Type:** String

##### Example: Using `api-key`

```html
<editor
  api-key="your-api-key"
/>
```

#### `cloud-channel`

**Default value:** `{{site.productmajorversion}}`

**Possible values:**  `{{site.productmajorversion}}-stable`, `{{site.productmajorversion}}-testing`, `{{site.productmajorversion}}-dev`

Changes the {{site.productname}} build used for the editor to one of the following {{site.cloudname}} channels:

- `{{site.productmajorversion}}`, `{{site.productmajorversion}}-stable` (**Default**): The current enterprise release of {{site.productname}}.
- `{{site.productmajorversion}}-testing`: The current release candidate for the next enterprise release of {{site.productname}}.
- `{{site.productmajorversion}}-dev`: The nightly-build version of {{site.productname}}.

Such as:

```html
<editor
  api-key="your-api-key"
  cloud-channel="{{site.productmajorversion}}-dev"
  :init="{% raw %}{{% endraw %} /* your other settings */ {% raw %}}{% endraw %}"
/>
```
For information {{site.productname}} development channels, see: [Specifying the {{site.productname}} editor version deployed from Cloud - dev, testing, and stable releases]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/#55-testingand5-devreleasechannels).

#### `disabled`
The `disabled` property can dynamically switch the editor between a "disabled" (read-only) mode (`true`) and the standard editable mode (`false`).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: Using `disabled`

```html
<editor
  :disabled=true
/>
```

#### `id`
An id for the editor. Used for retrieving the editor instance using the `tinymce.get('ID')` method. Defaults to an automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Default value:** Automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Type:** String

##### Example: Using `id`

```html
<editor
  id="uuid"
/>
```

#### `init`
Object sent to the `tinymce.init` method used to initialize the editor.

For information on the {{site.productname}} selector (`tinymce.init`), see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).

**Default value:** `"{% raw %}{{% endraw %} {% raw %}}{% endraw %}"`

**Type:** Object

##### Example: Using `init`

```html
<editor
  :init="{% raw %}{{% endraw %}
    plugins: [
     'lists link image help wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'
  {% raw %}}{% endraw %}"
/>
```

#### `initial-value`
Initial content of the editor when the editor is initialized.

**Default value:** `" "`

**Type:** String

##### Example: Using `initial-value`

```html
<editor
  initial-value="Once upon a time..."
/>
```

#### `inline`
Used to set the editor to inline mode. Using `<editor :inline=true />` is the same as setting `{inline: true}` in the {{site.productname}} selector (`tinymce.init`).

For information on inline mode, see: [User interface options - `inline`]({{site.baseurl}}/configure/editor-appearance/#inline) and [Setup inline editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: Using `inline`

```html
<editor
  :inline=true
/>
```

#### `model-events`

Sets the trigger events for [v-model events](#forminputbindingsv-model).

For a list of available {{site.productname}} events, see: [Available Events - Editor events]({{site.baseurl}}/advanced/events/#editorcoreevents).

**Default value:** `"change keyup undo redo"`.

**Type:** String

##### Example: Using `model-events`

```html
<editor
  model-events="change keydown blur focus paste"
/>
```

#### `output-format`

Used to specify the format of the content emitted via the `input` event. This affects the format of the content used in conjunction with data binding.

**Type:** String

**Default value:** `html`

**Possible values:** `html`, `text`

##### Example: Using `output-format`

```html
<editor
  output-format="text"
/>
```

#### `plugins`
Used to include plugins for the editor. Using `<editor plugins="lists code" />` is the same as setting `{plugins: 'lists code'}` in the {{site.productname}} selector (`tinymce.init`).

For information on adding plugins to {{site.productname}}, see: [Add plugins to {{site.productname}}]({{site.baseurl}}/plugins/).

**Type:** String or Array

##### Example: Using `plugins`

```html
<editor
  plugins="lists code"
/>
```

#### `tag-name`
Only valid when [`<editor :inline=true />`](#inline). Used to define the HTML element for the editor in inline mode.

**Default value:** `div`

**Type:** String

##### Example: Using `tag-name`

```html
<editor
  :inline=true
  tag-name="my-custom-tag"
/>
```

#### `toolbar`
Used to set the toolbar for the editor. Using `<editor toolbar="bold italic" />` is the same as setting `{toolbar: 'bold italic'}` in the {{site.productname}} selector (`tinymce.init`).

For information setting the toolbar for {{site.productname}}, see: [User interface options - toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar).

**Possible values:**  See [Toolbar Buttons Available for {{site.productname}}]({{site.baseurl}}/advanced/available-toolbar-buttons/).

**Type:** String

##### Example: Using `toolbar`

```html
<editor
  plugins="code"
  toolbar="bold italic underline code"
/>
```

#### `tinymce-script-src`
Use the `tinymce-script-src` prop to specify an external version of TinyMCE to lazy load.

**Type:** String

##### Example: Using `tinymce-script-src`

```html
<editor
  tinymce-script-src="/path/to/tinymce.min.js"
/>
```

### Form Input Bindings: `v-model`

The `v-model` directive can be used to create a two-way data binding. For example:

```html
<editor v-model="content" />
```

For information on `v-model` and form input bindings, see: [Vue.js documentation - Form Input Bindings](https://vuejs.org/v2/guide/forms.html).

### Event binding

Functions can be bound to editor events, such as:

```html
<editor @selectionChange="handlerFunction" />
```

When the handler is called (**handlerFunction** in this example), it is called with two arguments:

* `event` - The TinyMCE event object.
* `editor` - A reference to the editor.

The following events are available:

* `activate`
* `addUndo`
* `beforeAddUndo`
* `beforeExecCommand`
* `beforeGetContent`
* `beforeRenderUI`
* `beforeSetContent`
* `beforePaste`
* `blur`
* `change`
* `clearUndos`
* `click`
* `contextMenu`
* `copy`
* `cut`
* `dblclick`
* `deactivate`
* `dirty`
* `drag`
* `dragDrop`
* `dragEnd`
* `dragGesture`
* `dragOver`
* `drop`
* `execCommand`
* `focus`
* `focusIn`
* `focusOut`
* `getContent`
* `hide`
* `init`
* `keyDown`
* `keyPress`
* `keyUp`
* `loadContent`
* `mouseDown`
* `mouseEnter`
* `mouseLeave`
* `mouseMove`
* `mouseOut`
* `mouseOver`
* `mouseUp`
* `nodeChange`
* `objectResizeStart`
* `objectResized`
* `objectSelected`
* `paste`
* `postProcess`
* `postRender`
* `preProcess`
* `progressState`
* `redo`
* `remove`
* `reset`
* `saveContent`
* `selectionChange`
* `setAttrib`
* `setContent`
* `show`
* `submit`
* `undo`
* `visualAid`