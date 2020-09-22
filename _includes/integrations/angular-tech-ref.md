## TinyMCE Angular technical reference

**Covered in this section:**

- [Installing the TinyMCE Angular integration using NPM](#installingthetinymceangularintegrationusingnpm)
- [Configuring the editor](#configuringtheeditor)
- [Using the TinyMCE Angular integration](#usingthetinymceangularintegration)

  - [`apiKey`](#apikey)
  - [`cloudChannel`](#cloudchannel)
  - [`disabled`](#disabled)
  - [`id`](#id)
  - [`init`](#init)
  - [`initialValue`](#initialvalue)
  - [`inline`](#inline)
  - [`outputFormat`](#outputformat)
  - [`plugins`](#plugins)
  - [`tagName`](#tagname)
  - [`toolbar`](#toolbar)

- [Using the `ngModel` directive](#usingthengmodeldirective)
- [Using with reactive forms](#usingwithreactiveforms)
- [Event binding](#eventbinding)

### Installing the TinyMCE Angular integration using NPM

To install the `tinymce-angular` package and save it to your `package.json`.

```sh
$ npm install --save @tinymce/tinymce-angular
```

This package is for Angular 5+. For Angular 4, use `@tinymce/tinymce-angular-legacy`

### Using the TinyMCE Angular integration

1. Import the `EditorModule` from the npm package using:

    ```js
    import { EditorModule } from '@tinymce/tinymce-angular';
    ```
    Add the `EditorModule` to `@NgModule({imports})`:

    ```js
    // This might look different depending on how you have set up your app
    // but the important part is the imports array
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        EditorModule // <- Important part
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    ```

2. Add the editor to the Angular application template, such as:

    ```html
    <editor apiKey="test" [init]="{plugins: 'link'}"></editor>
    ```

### Configuring the editor

The editor accepts the following properties:

```html
<editor
  apiKey="no-api-key"
  cloudChannel="{{site.productmajorversion}}"
  [disabled]="false"
  id=""
  [init]="{% raw %}{{% endraw %}  {% raw %}}{% endraw %}"
  initialValue=""
  [inline]="false"
  plugins=""
  tagName="div"
  toolbar=""
></editor>
```

None of the configuration properties are **required** for `tinymce-angular` to work. Specify a {{site.cloudname}} API key using `apiKey` to remove the `This domain is not registered...` warning message.

#### `apiKey`
{{site.cloudname}} API key. Required for deployments using the {{site.cloudname}} to provide the {{site.productname}} editor.

To register for a {{site.cloudname}} API key, visit the [sign-up page]({{site.accountsignup}}).

**Default value:** `no-api-key`

**Type:** String

##### Example: `apiKey`

```html
<editor
  apiKey="your-api-key"
></editor>
```

#### `cloudChannel`

**Default value:** `{{site.productmajorversion}}`

**Possible values:**  `{{site.productmajorversion}}-stable`, `{{site.productmajorversion}}-testing`, `{{site.productmajorversion}}-dev`

Changes the {{site.productname}} build used for the editor to one of the following {{site.cloudname}} channels:

- `{{site.productmajorversion}}-stable` (**Default**): The current enterprise release of {{site.productname}}.
- `{{site.productmajorversion}}-testing`: The current release candidate for the next enterprise release of {{site.productname}}.
- `{{site.productmajorversion}}-dev`: The nightly-build version of {{site.productname}}.

Such as:

```html
<editor
  apiKey="your-api-key"
  cloudChannel="{{site.productmajorversion}}-dev"
></editor>
```
For information {{site.productname}} development channels, see: [Specifying the {{site.productname}} editor version deployed from Cloud - dev, testing, and stable releases]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/#devtestingandstablereleases).


#### `disabled`
The `disabled` property can dynamically switch the editor between a "disabled" (read-only) mode (`true`) and the standard editable mode (`false`).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: `disabled`

```html
<editor
  [disabled]="true"
></editor>
```

#### `id`
An id for the editor. Used for retrieving the editor instance using the `tinymce.get('ID')` method. Defaults to an automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Default value:** Automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Type:** String

##### Example: `id`

```html
<editor
  id="uuid"
></editor>
```

#### `init`
Object sent to the `tinymce.init` method used to initialize the editor.

For information on the {{site.productname}} selector (`tinymce.init`), see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).

**Default value:** `{% raw %}{{% endraw %} {% raw %}}{% endraw %}`

**Type:** Object

##### Example: `init`

```html
<editor
  [init]="{% raw %}{{% endraw %}
    plugins: [
     'lists link image paste help wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'
  {% raw %}}{% endraw %}"
></editor>
```

#### `initialValue`
Initial content of the editor when the editor is initialized.

**Default value:** `' '`

**Type:** String

##### Example: `initialValue`

```html
<editor
  initialValue="Once upon a time..."
></editor>
```

#### `inline`
Used to set the editor to inline mode. Using `<editor [inline]="true"></editor>` is the same as setting `{inline: true}` in the {{site.productname}} selector (`tinymce.init`).

For information on inline mode, see: [User interface options - `inline`]({{site.baseurl}}/configure/editor-appearance/#inline) and [Setup inline editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: `inline`

```html
<editor
  [inline]="true"
></editor>
```

#### `plugins`
Used to include plugins for the editor. Using `<editor plugins="lists code"></editor>` is the same as setting `{plugins: 'lists code'}` in the {{site.productname}} selector (`tinymce.init`).

For information on adding plugins to {{site.productname}}, see: [Add plugins to {{site.productname}}]({{site.baseurl}}/plugins/).

**Type:** String or Array

##### Example: `plugins`

```html
<editor
  plugins="lists code"
></editor>
```

#### `outputFormat`

Used to specify the format of the content emitted by the tinymce-angular component when used in conjunction with forms or plain data bindings.

**Type:** String

**Default value:** `html`

**Possible values:** `html`, `text`

##### Example: `outputFormat`

```html
<editor
  outputFormat="text"
></editor>
```

#### `tagName`
Only valid when [`<editor [inline]="true"></editor>`](#inline). Used to define the HTML element for the editor in inline mode.

**Default value:** `div`

**Type:** String

##### Example: `tagName`

```html
<editor
  [inline]="true"
  tagName="my-custom-tag"
></editor>
```

#### `toolbar`
Used to set the toolbar for the editor. Using `<editor toolbar="bold italic"></editor>` is the same as setting `{toolbar: 'bold italic'}` in the {{site.productname}} selector (`tinymce.init`).

For information setting the toolbar for {{site.productname}}, see: [User interface options - toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar).

**Possible values:**  See [Editor control identifiers - Toolbar controls]({{site.baseurl}}/advanced/editor-control-identifiers/).

**Type:** String

##### Example: `toolbar`

```html
<editor
  plugins="code"
  toolbar="bold italic underline code"
></editor>
```

#### `modelEvents` (since v4.0.0)
Used to specify the events that trigger the NgModelChange to emit. By default the wrapper uses `change input undo redo`.

**Possible value:** A space separated list of TinyMCE editor events.

**Type** String

##### Example: `modelEvents`

```html
<editor
  modelEvents="change input nodechange undo redo"
></editor>
```

#### `allowedEvents` (since v4.2.0)
Used to whitelist valid events to trigger from the editor to the Angular wrapper. By default, the wrapper will emit all the events in the [Event binding section]().

**Possible values:** A comma separated list of events to allow.

**Type** String

##### Example: `allowedEvents`

```html
<editor
  allowedEvents="onMouseDown,onKeyDown"
></editor>
```

#### `ignoreEvents` (since v4.2.0)
Used to blacklist events from triggering by the Angular wrapper.

**Possible values:** A comma separated list of events to ignore.

**Type** String

##### Example: `ignoreEvents`

```html
<editor
  ignoreEvents="onMouseEnter,onMouseLeave,onMouseOut,onMouseMove"
></editor>
```

### Using the `ngModel` directive

The `ngModel` directive can be added to use the editor in a form:

```html
<editor [(ngModel)]="dataModel"></editor>
```

For information on using `NgModel`, see: [Angular documentation - NgModel](https://angular.io/api/forms/NgModel).

### Using with reactive forms

To use {{site.productname}} Angular component with reactive forms:
1. Include the `<editor>` configuration within the `formGroup`.
2. Add the `formControlName` directive to the editor configuration. For example:

    ```html
    <editor [formControlName]="schema.key" [init]="{plugins: 'link'}"></editor>
    ```

For information on using reactive forms, see: [Angular documentation - Reactive Forms](https://angular.io/guide/reactive-forms).

### Event binding

Functions can be bound to editor events, such as:

```html
<editor (onSelectionChange)="handleEvent($event)"></editor>
```

When the handler is called (`handleEvent` in this example), it is called with an event containing two properties:

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

By default, all the available events will trigger from the editor to the Angular wrapper. In order to limit the events triggering in the component, you can whitelist or blacklist events using the `allowedEvents` and `ignoreEvents` properties.