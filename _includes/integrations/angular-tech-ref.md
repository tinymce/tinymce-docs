## TinyMCE Angular technical reference

**Covered in this section:**

- [Supported Angular versions](#supportedangularversions)
- [Installing the TinyMCE Angular integration using NPM](#installingthetinymceangularintegrationusingnpm)
- [Using the TinyMCE Angular integration](#usingthetinymceangularintegration)
- [Configuring the editor](#configuringtheeditor)

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

  - [`modelEvents`](#modelevents)

- [Using with reactive forms](#usingwithreactiveforms)
- [Event binding](#eventbinding)

  - [Supported browser events](#supportedbrowserevents)
  - [Supported TinyMCE events](#supportedtinymceevents)
  - [`allowedEvents`](#allowedevents)
  - [`ignoreEvents`](#ignoreevents)

### Supported Angular versions

The following table shows the supported versions of Angular and the required version of the `tinymce-angular` integration package.

| Angular Version | `tinymce-angular` version |
|:---:|:---:|
| 9+ | 4.x |
| 5 to 8 | 3.x |
| 4 or older | Not Supported |

### Installing the TinyMCE Angular integration using NPM

To install the `tinymce-angular` package and save it to your `package.json`.

```sh
$ npm install --save @tinymce/tinymce-angular
```

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

{% include misc/get-an-api-key.md %}

**Default value:** `no-api-key`

**Type:** String

##### Example: Using `apiKey`

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
For information {{site.productname}} development channels, see: [Specifying the {{site.productname}} editor version deployed from Cloud - dev, testing, and stable releases]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/#55-testingand5-devreleasechannels).


#### `disabled`
The `disabled` property can dynamically switch the editor between a "disabled" (read-only) mode (`true`) and the standard editable mode (`false`).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: Using `disabled`

```html
<editor
  [disabled]="true"
></editor>
```

#### `id`
An id for the editor. Used for retrieving the editor instance using the `tinymce.get('ID')` method. Defaults to an automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Default value:** Automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Type:** String

##### Example: Using `id`

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

##### Example: Using `init`

```html
<editor
  [init]="{% raw %}{{% endraw %}
    plugins: [
     'lists link image help wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'
  {% raw %}}{% endraw %}"
></editor>
```

#### `initialValue`
Initial content of the editor when the editor is initialized.

**Default value:** `' '`

**Type:** String

##### Example: Using `initialValue`

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

##### Example: Using `inline`

```html
<editor
  [inline]="true"
></editor>
```

#### `plugins`
Used to include plugins for the editor. Using `<editor plugins="lists code"></editor>` is the same as setting `{plugins: 'lists code'}` in the {{site.productname}} selector (`tinymce.init`).

For information on adding plugins to {{site.productname}}, see: [Add plugins to {{site.productname}}]({{site.baseurl}}/plugins/).

**Type:** String or Array

##### Example: Using `plugins`

```html
<editor
  plugins="lists code"
></editor>
```

#### `outputFormat`

Used to specify the format of the content emitted by the `tinymce-angular` component when used in conjunction with forms or plain data bindings.

**Type:** String

**Default value:** `html`

**Possible values:** `html`, `text`

##### Example: Using `outputFormat`

```html
<editor
  outputFormat="text"
></editor>
```

#### `tagName`
Only valid when [`<editor [inline]="true"></editor>`](#inline). Used to define the HTML element for the editor in inline mode.

**Default value:** `div`

**Type:** String

##### Example: Using `tagName`

```html
<editor
  [inline]="true"
  tagName="my-custom-tag"
></editor>
```

#### `toolbar`
Used to set the toolbar for the editor. Using `<editor toolbar="bold italic"></editor>` is the same as setting `{toolbar: 'bold italic'}` in the {{site.productname}} selector (`tinymce.init`).

For information setting the toolbar for {{site.productname}}, see: [User interface options - toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar).

**Possible values:**  See [Toolbar Buttons Available for {{site.productname}}]({{site.baseurl}}/advanced/available-toolbar-buttons/).

**Type:** String

##### Example: Using `toolbar`

```html
<editor
  plugins="code"
  toolbar="bold italic underline code"
></editor>
```

### Using the `ngModel` directive

The `ngModel` directive can be added to use the editor in a form:

```html
<editor [(ngModel)]="dataModel"></editor>
```

For information on using `NgModel`, see: [Angular documentation - NgModel](https://angular.io/api/forms/NgModel).

#### `modelEvents`

> **Note**: This property requires `tinymce-angular` 4.0.0 or newer

Used to specify the events that trigger the `NgModelChange` to emit.

**Default value:** `"change input undo redo"`.

**Possible value:** A space separated list of TinyMCE editor events.

**Type** String

##### Example: Using `modelEvents`

```html
<editor
  modelEvents="change input nodechange undo redo"
></editor>
```

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

#### Supported browser events

* `onBeforePaste`
* `onBlur`
* `onClick`
* `onContextMenu`
* `onCopy`
* `onCut`
* `onDblclick`
* `onDrag`
* `onDragDrop`
* `onDragEnd`
* `onDragGesture`
* `onDragOver`
* `onDrop`
* `onFocus`
* `onFocusIn`
* `onFocusOut`
* `onKeyDown`
* `onKeyPress`
* `onKeyUp`
* `onMouseDown`
* `onMouseEnter`
* `onMouseLeave`
* `onMouseMove`
* `onMouseOut`
* `onMouseOver`
* `onMouseUp`
* `onPaste`
* `onSelectionChange`

#### Supported TinyMCE events

* `onActivate`
* `onAddUndo`
* `onBeforeAddUndo`
* `onBeforeExecCommand`
* `onBeforeGetContent`
* `onBeforeRenderUI`
* `onBeforeSetContent`
* `onChange`
* `onClearUndos`
* `onDeactivate`
* `onDirty`
* `onExecCommand`
* `onGetContent`
* `onHide`
* `onInit`
* `onInitNgModel`
* `onLoadContent`
* `onNodeChange`
* `onPostProcess`
* `onPostRender`
* `onPreInit`
* `onPreProcess`
* `onProgressState`
* `onRedo`
* `onRemove`
* `onReset`
* `onSaveContent`
* `onSetAttrib`
* `onObjectResizeStart`
* `onObjectResized`
* `onObjectSelected`
* `onSetContent`
* `onShow`
* `onSubmit`
* `onUndo`
* `onVisualAid`

By default, all the available events will trigger from the editor to the `tinymce-angular` component. To limit the events triggering in the component, use the `allowedEvents` and `ignoreEvents` properties.

#### `allowedEvents`

> **Note**: This property requires `tinymce-angular` 4.2.0 or newer

Used to provide an allow-list of valid events to trigger from the editor to the `tinymce-angular` component. By default, the component will emit all the events listed in the [Event binding section](#eventbinding).

**Possible values:** A comma separated list of events to allow.

**Type** String

##### Example: Using `allowedEvents`

```html
<editor
  allowedEvents="onMouseDown,onKeyDown"
></editor>
```

#### `ignoreEvents`

> **Note**: This property requires `tinymce-angular` 4.2.0 or newer

Used to block a list of events from the `tinymce-angular` component.

**Possible values:** A comma separated list of events to ignore.

**Type** String

##### Example: Using `ignoreEvents`

```html
<editor
  ignoreEvents="onMouseEnter,onMouseLeave,onMouseOut,onMouseMove"
></editor>
```
