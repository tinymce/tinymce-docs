## TinyMCE Angular technical reference

**Covered in this section:**

- [Installing the TinyMCE Angular integration using the NPM](#installingthetinymceangularintegrationusingnpm)
- [Configuring the editor](#configuringtheeditor)
- [Using the TinyMCE Angular integration](#usingthetinymceangularintegration)

  - [`apiKey`](#apikey)
  - [`cloudChannel`](#cloudchannel)
  - [`disabled`](#disabled)
  - [`id`](#id)
  - [`init`](#init)
  - [`initialValue`](#initialvalue)
  - [`inline`](#inline)
  - [`plugins`](#plugins)
  - [`tagName`](#tagname)
  - [`toolbar`](#toolbar)

- [Using the `ngModel` directive](#usingthengmodeldirective)
- [Using with reactive forms](#usingwithreactiveforms)
- [Including TinyMCE within the Angular application](#includingtinymcewithintheangularapplication)
- [Event binding](#eventbinding)

### Installing the TinyMCE Angular integration using NPM

To install the `tinymce-angular` package and save it to your `package.json`.

```sh
$ npm install --save @tinymce/tinymce-angular
```

This package is for Angular 5+. For Angular 4, use `@tinymce/tinymce-angular-legacy`

### Using the TinyMCE Angular integration

1. Import the `EditorModule` from the npm package using:

    ```tsx
    import { EditorModule } from '@tinymce/tinymce-angular';
    ```
    Add the `EditorModule` to `@NgModule({imports})`:

    ```tsx
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
  cloudChannel="5"
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

None of the configuration properties are **required** for `tinymce-angular` to work. Specify a Tiny Cloud API key using `apiKey` to remove the `This domain is not registered...` warning message.

#### `apiKey`
Tiny API key. Required for deployments using the Tiny Cloud to provide the TinyMCE editor.

To register for a Tiny Cloud API key, visit the [sign-up page](https://www.tiny.cloud/signup/).

**Default value:** `no-api-key`

**Type:** String

##### Example: `apiKey`

```xml
<Editor
  apiKey="your-api-key"
/>
```

#### `cloudChannel`

**Default value:** `5`

**Possible values:**  `5-stable`, `5-testing`, `5-dev`

Changes the TinyMCE build used for the editor to one of the following cloud channels:

- `5-stable` (**Default**): The current enterprise release of TinyMCE.
- `5-testing`: The current release candidate for the next enterprise release of TinyMCE.
- `5-dev`: The nightly-build version of TinyMCE.

Such as:

```js
<Editor apiKey="your-api-key" cloudChannel="5-dev" [init]={% raw %}{{% endraw %} /* your other settings */ {% raw %}}{% endraw %} />
```
For information TinyMCE development channels, see: [Specifying the TinyMCE editor version deployed from Cloud - dev, testing, and stable releases]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/#devtestingandstablereleases).


#### `disabled`
The `disabled` property can dynamically switch the editor between a "disabled" (read-only) mode (`true`) and the standard editable mode (`false`).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: `disabled`

```html
<Editor
  [disabled]=true
/>
```

#### `id`
An id for the editor. Used for retrieving the editor instance using the `tinymce.get('ID')` method. Defaults to an automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Default value:** Automatically generated [UUID](https://tools.ietf.org/html/rfc4122).

**Type:** String

##### Example: `id`

```xml
<Editor
  id="uuid"
/>
```

#### `init`
Object sent to the `tinymce.init` method used to initialize the editor.

For information on the TinyMCE selector (`tinymce.init`), see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).

**Default value:** `{% raw %}{{% endraw %} {% raw %}}{% endraw %}`

**Type:** Object

##### Example: `init`

```html
<Editor
  [init]="{% raw %}{{% endraw %}
    plugins: [
     'lists link image paste help wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'
  {% raw %}}{% endraw %}"
/>
```

#### `initialValue`
Initial content of the editor when the editor is initialized.

**Default value:** `' '`

**Type:** String

##### Example: `initialValue`

```xml
<Editor
  initialValue='Once upon a time...'
/>
```

#### `inline`
Used to set the editor to inline mode. Using `<editor [inline]="true"></editor>` is the same as setting `{inline: true}` in the TinyMCE selector (`tinymce.init`).

For information on inline mode, see: [User interface options - `inline`]({{site.baseurl}}/configure/editor-appearance/#inline) and [Setup inline editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/).

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example: `inline`

```html
<Editor
  [inline]="true"
/>
```

#### `plugins`
Used to include plugins for the editor. Using `<editor plugins="lists code"></editor>` is the same as setting `{plugins: 'lists code'}` in the TinyMCE selector (`tinymce.init`).

For information on adding plugins to TinyMCE, see: [Add plugins to TinyMCE]({{site.baseurl}}/plugins/).

**Type:** String or Array

##### Example: `plugins`

```xml
<Editor
  plugins="lists code"
/>
```

#### `tagName`
Only valid when [`<editor [inline]="true"></editor>`](#inline). Used to define the HTML element for the editor in inline mode.

**Default value:** `div`

**Type:** String

##### Example: `tagName`

```html
<Editor
  [inline]="true"
  tagName="myTextArea"
/>
```

#### `toolbar`
Used to set the toolbar for the editor. Using `<editor toolbar="bold italic"></editor>` is the same as setting `{toolbar: 'bold italic'}` in the TinyMCE selector (`tinymce.init`).

For information setting the toolbar for TinyMCE, see: [User interface options - toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar).

**Default value:** `' '`

**Possible values:**  See [Editor control identifiers - Toolbar controls]({{site.baseurl}}/advanced/editor-control-identifiers/).

**Type:** String

##### Example: `toolbar`

```xml
<Editor
  plugins="code"
  toolbar="bold italic underline code"
/>
```

### Using the `ngModel` directive

The `ngModel` directive can be added to use the editor in a form:

```html
<editor [(ngModel)]="dataModel"></editor>
```

For information on using `NgModel`, see: [Angular documentation - NgModel](https://angular.io/api/forms/NgModel).

### Using with reactive forms

To use TinyMCE Angular component with reactive forms:
1. Include the `<editor>` configuration within the `formGroup`.
2. Add the `formControlName` directive to the editor configuration. For example:

    ```html
    <editor [formControlName]="schema.key" [init]="{plugins: 'link'}"></editor>
    ```

For information on using reactive forms, see: [Angular documentation - Reactive Forms](https://angular.io/guide/reactive-forms).

### Including TinyMCE within the Angular application

To load TinyMCE and TinyMCE-Angular in a project managed by the [Angular CLI Tool](https://angular.io/cli):

1. Install the `tinymce-angular` package and save it to your `package.json` with `--save`.

    ```
    $ npm install --save tinymce
    ```
2. Using a text editor, open `angular.json` and add TinyMCE to the *global scripts* tag.

    For example:

    ```json
    "scripts": [
      "node_modules/tinymce/tinymce.min.js"
    ]
    ```
3. Using a text editor; open `angular.json` and add the TinyMCE skins, themes, and plugins to the `assets` property.

    ```json
    "assets": [
      { "glob": "**/*", "input": "node_modules/tinymce/skins", "output": "/tinymce/skins/" },
      { "glob": "**/*", "input": "node_modules/tinymce/themes", "output": "/tinymce/themes/" },
      { "glob": "**/*", "input": "node_modules/tinymce/plugins", "output": "/tinymce/plugins/" }
    ]
    ```
4. Update the editor configuration to include the `base_url` and `suffix` options.

    ```html
    <editor [init]="{
      base_url: '/tinymce', // Root for resources
      suffix: '.min',       // Suffix to use when loading resources
      plugins: 'lists advlist',
      toolbar: 'undo redo | bold italic | bullist numlist outdent indent'
    }"></editor>
    ```

### Event binding

Functions can be bound to editor events, such as:

```xml
<editor (onSelectionChange)="handleEvent($event)"></editor>
```

When the handler is called (`handleEvent` in this example), it returns an object containing two properties:

* `event` - The event object.
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