## TinyMCE Web Component technical reference

**Covered in this section:**

- [Installing the Web Component integration](#installingthetinymcewebcomponentintegration)
- [Loading TinyMCE](#loadingtinymce)
- [Configuring the editor](#configuringtheeditor)

  - [Setting the initial content](#settingtheinitialcontent)
  - [Loading plugins](#loadingplugins)
  - [Setting width](#settingwidth)
  - [Setting height](#settingheight)
  - [Setting the toolbar](#settingthetoolbar)
  - [Setting toolbar mode](#settingtoolbarmode)
  - [Setting the menubar](#settingthemenubar)
  - [Setting context menu](#settingcontextmenu)
  - [Setting the quick-bar insert toolbar](#settingthequick-barinserttoolbar)
  - [Setting the quick-bar selection toolbar](#settingthequick-barselectiontoolbar)
  - [Setting content stylesheets](#settingcontentstylesheets)
  - [Setting content styling](#settingcontentstyling)
  - [Setting PowerPaste's word import method](#settingpowerpasteswordimportmethod)
  - [Setting PowerPaste's html import method](#settingpowerpasteshtmlimportmethod)
  - [Setting PowerPaste to allow local images](#settingpowerpastetoallowlocalimages)
  - [Showing resize handles](#showingresizehandles)
  - [Setting the editor setup function](#settingtheeditorsetupfunction)
  - [Setting the editor skin](#settingtheeditorskin)
  - [Setting the images upload URL](#settingtheimagesuploadurl)
  - [Setting the images upload handler](#settingtheimagesuploadhandler)
  - [Setting the images upload base path](#settingtheimagesuploadbasepath)
  - [Setting the images upload to have credentials](#settingtheimagesuploadtohavecredentials)
  - [Setting the images upload to reuse filenames](#settingtheimagesuploadtoreusefilenames)
  - [Setting the icon pack](#settingtheiconpack)
  - [Setting the icon pack URL](#settingtheiconpackurl)
  - [Configuring additional settings](#configuringadditionalsettings)

- [Event binding](#eventbinding)

### Installing the TinyMCE Web Component integration

1. Link `@tinymce/tinymce-webcomponent` into your page, either using a script tag linking to a CDN like

```html
<script src="https://cdn.jsdelivr.net/npm/@tinymce/tinymce-webcomponent@1/dist/tinymce-webcomponent.js"></script>
```

or using a bundler like webpack to put the npm package into the page.
2. Optionally include a script tag to load {{site.productname}} into the page (see below for details).
3. Insert `<tinymce-editor></tinymce-editor>` into the page.

### Loading TinyMCE

The integration depends on {{site.productname}}. When trying to create a web component for {{site.productname}} it will try the following:

1. If the global `tinymce` is available:
    1. Use the global `tinymce` to initialize the editor.
2. Otherwise, if the attribute `src` is available:
    1. Add a script tag for the URL provided in `src` to load {{site.productname}};
    2. Wait for the script to load and create the global `tinymce`;
    3. Use the global `tinymce` to initialize the editor.
3. Otherwise:
    1. Add a script tag for the cloud version of {{site.productname}} using the attributes `api-key` (default "no-api-key") and `channel` (default "5-stable");
    2. Wait for the script to load and create the global `tinymce`;
    3. Use the global `tinymce` to initialize the editor.

### Configuring the editor

The editor is configured by setting attributes on the `tinymce-editor` custom element.
All attributes must be represented as strings each attribute may be interpreted differently - depending on context they may be understood as booleans, numbers or even global functions.

#### Setting the initial content

To set the initial editor content, add encoded HTML to the `tinymce-editor` element as content, such as:

```html
<tinymce-editor>
  &lt;p&gt;This will be the initial content of the editor.&lt;/p&gt;
</tinymce-editor>
```

The editor will load the text content in the `tinymce-editor` element as the initial HTML.

> **Important**: The HTML must be encoded as text to prevent injected javascript from running, which may have an unintended impact on the surrounding document.

#### Loading plugins

To add plugins and extend the functionality of the editor, add a string of plugin identifiers using the `plugins` attribute, such as:

```html
<tinymce-editor plugins="advlist autolink link image lists charmap print preview"></tinymce-editor>
```

For a list of available plugins, see: [Add plugins to TinyMCE]({{site.baseurl}}/plugins/).

#### Setting the editor width

To set the width of the editor (content area and user interface), use the `width` attribute. For pixel-based widths, provide a number; otherwise provide a string. For example:

##### Setting a pixel-based editor width

```html
<tinymce-editor width=300></tinymce-editor>
```

##### Setting a CSS unit based editor width

```html
<tinymce-editor width="50%"></tinymce-editor>
```

#### Setting the editor height

To set the height of the editor (content area and user interface), use the `height` attribute. For pixel-based height, provide a number; otherwise provide a string. For example:

##### Setting a pixel-based editor height

```html
<tinymce-editor height=300></tinymce-editor>
```

##### Setting a CSS unit based height

```html
<tinymce-editor height="15em"></tinymce-editor>
```

#### Setting the toolbar

To set the editor toolbar buttons, use the `toolbar` attribute. For example:

```html
<tinymce-editor toolbar="undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent"></tinymce-editor>
```

The `toolbar` attribute accepts a space-separated string of toolbar buttons with pipe characters (`|`) for grouping buttons. For a list of available toolbar buttons, see: [Editor control identifiers - Toolbar controls]({{site.baseurl}}/advanced/editor-control-identifiers/#toolbarcontrols).

##### Disabling the toolbar

To disable the toolbar, set the `toolbar` attribute to `false`. For example:

```html
<tinymce-editor toolbar=false></tinymce-editor>
```

#### Setting the toolbar mode

To control the behavior of the toolbar, set the `toolbar_drawer` attribute. For example:

```html
<tinymce-editor toolbar_mode="floating"></tinymce-editor>
```

For information on the available toolbar modes, see: [User interface options - `toolbar_mode`]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode).

#### Setting the menu bar

To set the menus shown on the editor menu bar, add the `menubar` attribute. For example:

```html
<tinymce-editor menubar="file edit insert view format table tools help"></tinymce-editor>
```

To disable or remove the menu bar, set the `menubar` attribute to `false`. For example:

```html
<tinymce-editor menubar=false></tinymce-editor>
```

To change the menu items shown in the menus, or define custom menus, set the `menu` configuration option using the `config` attribute.

For information on:

- The `menubar` configuration option, see: [User interface options - `menubar`]({{site.baseurl}}/configure/editor-appearance/#menubar).
- The `menu` configuration option, see: [User interface options - `menu`]({{site.baseurl}}/configure/editor-appearance/#menu).
- The `config` attribute, see: [Setting additional configuration options](#settingadditionalconfigurationoptions).

#### Setting context menu

To change the context menu sections that can be shown in the editor context menu, use the `contextmenu` attribute. Such as:

```html
<tinymce-editor plugins="link image table" contextmenu="link image table"></tinymce-editor>
```

To disable the context menu, set the `contextmenu` attribute to `false`. For example:

```html
<tinymce-editor contextmenu=false></tinymce-editor>
```

For a list of available context menu sections, see: [Available context menu sections]({{site.baseurl}}/advanced/editor-context-menu-identifiers/).
For information on context menus, see: [User interface options - `contextmenu`]({{site.baseurl}}/configure/editor-appearance/#contextmenu).

#### Setting the quick-insert toolbar

The quick-insert toolbar is shown when a new line is added, providing buttons for inserting objects such as tables and images.

To add a quick-insert toolbar, add `"quickbars"` to the `plugins` attribute. To change the quick-insert toolbar, set the `quickbars_insert_toolbar` attribute, such as:

```html
<tinymce-editor plugins="quickbars hr pagebreak" quickbars_insert_toolbar="quickimage quicktable quicklink | hr pagebreak"></tinymce-editor>
```

The `quickbars_insert_toolbar` attribute accepts a space-separated string of toolbar buttons with pipe characters (`|`) for grouping buttons. For a list of available toolbar buttons, see: [Editor control identifiers - Toolbar controls]({{site.baseurl}}/advanced/editor-control-identifiers/#toolbarcontrols).

To disable the quick-insert toolbar, set the `quickbars_insert_toolbar` attribute to `false`. For example:

```html
<tinymce-editor plugins="quickbars" quickbars_insert_toolbar=false></tinymce-editor>
```

#### Setting the quick-selection toolbar

The quick-selection toolbar is shown when text is selected, providing formatting buttons such as: `bold`, `italic`, and `link`.

To add a quick-selection toolbar, add `"quickbars"` to the `plugins` attribute. To change the quick-selection toolbar, set the `quickbars_selection_toolbar` attribute, such as:

```html
<tinymce-editor plugins="quickbars" quickbars_selection_toolbar="bold italic | formatselect | quicklink blockquote"></tinymce-editor>
```

The `quickbars_selection_toolbar` attribute accepts a space-separated string of toolbar buttons with pipe characters (`|`) for grouping buttons. For a list of available toolbar buttons, see: [Editor control identifiers - Toolbar controls]({{site.baseurl}}/advanced/editor-control-identifiers/#toolbarcontrols).

To disable the quick-selection toolbar, set the `quickbars_selection_toolbar` attribute to `false`. For example:

```html
<tinymce-editor plugins="quickbars" quickbars_selection_toolbar=false></tinymce-editor>
```

#### Setting content stylesheets

```html
<tinymce-editor content_css="writer"></tinymce-editor>
```

```html
<tinymce-editor content_css="path/to/mycontent.css"></tinymce-editor>
```

Setting the attribute `content_css` allows configuring the editor
[content stylesheets]({{site.baseurl}}/configure/content-appearance/#content_css)
by passing the value as a string.

#### Setting content styling

```html
<tinymce-editor content_style="div { margin: 10px; border: 5px solid red; padding: 3px; }"></tinymce-editor>
```

Setting the attribute `content_style` allows configuring the editor
[content styling]({{site.baseurl}}/configure/content-appearance/#content_style)
by passing the value as a string.

#### Setting PowerPaste's word import method

```html
<tinymce-editor powerpaste_word_import="merge"></tinymce-editor>
```

Setting the attribute `powerpaste_word_import` allows configuring the editor
[behaviour when pasting word documents]({{site.baseurl}}/plugins/powerpaste/#powerpaste_word_import)
by passing the value as a string.

#### Setting PowerPaste's html import method

```html
<tinymce-editor powerpaste_html_import="prompt"></tinymce-editor>
```

Setting the attribute `powerpaste_html_import` allows configuring the editor
[behaviour when pasting HTML documents]({{site.baseurl}}/plugins/powerpaste/#powerpaste_html_import)
by passing the attribute value as a string.

#### Setting PowerPaste to allow local images

```html
<tinymce-editor powerpaste_html_import="prompt"></tinymce-editor>
```

Setting the attribute `powerpaste_allow_local_images` allows configuring the editor to
[include pasted local images]({{site.baseurl}}/plugins/powerpaste/#powerpaste_allow_local_images)
by passing the attribute value with the text `"false"` and `"true"` as a the boolean values `false` and `true` respectively.

#### Showing resize handles

```html
<tinymce-editor resize="false"></tinymce-editor>
```

Setting the attribute `resize` allows configuring the editor
[resize handles]({{site.baseurl}}/configure/editor-appearance/#resize)
by passing the attribute value with the text `"false"` and `"true"` as a the boolean values `false` and `true` respectively or any other value as a string. boolean or 'both'

#### Setting the editor setup function

```html
<script>
function setupEditor(editor) {
  editor.on('click', function () {
    console.log('Editor was clicked');
  });
}
</script>
<tinymce-editor setup="setupEditor"></tinymce-editor>
```

Setting the attribute `setup` allows configuring the editor
[setup callback]({{site.baseurl}}/configure/integration-and-setup/#setup)
by passing the function with the same name in the global scope.

#### Setting the editor skin

```html
<tinymce-editor skin="oxide"></tinymce-editor>
```

Setting the attribute `skin` allows configuring the editor
[skin]({{site.baseurl}}/configure/editor-appearance/#skin)
by passing the attribute value as a string.

#### Setting the images upload URL

```html
<tinymce-editor images_upload_url="postAcceptor.php"></tinymce-editor>
```

Setting the attribute `images_upload_url` allows configuring the editor
[image upload URL]({{site.baseurl}}/configure/file-image-upload/#images_upload_url)
by passing the attribute value as a string.

#### Setting the images upload handler

```html
<script>
{% include misc/images-upload-handler-function.md %}
</script>
<tinymce-editor images_upload_handler="example_image_upload_handler"></tinymce-editor>
```

Setting the attribute `images_upload_handler` allows configuring the editor
[image upload handler]({{site.baseurl}}/configure/file-image-upload/#images_upload_handler)
by passing the function with the same name in the global scope.

#### Setting the images upload base path

```html
<tinymce-editor images_upload_base_path="/some/basepath"></tinymce-editor>
```

Setting the attribute `images_upload_base_path` allows configuring the editor
[image upload base path]({{site.baseurl}}/configure/file-image-upload/#images_upload_base_path)
by passing the attribute value as a string.

#### Setting the images upload to have credentials

```html
<tinymce-editor images_upload_credentials="false"></tinymce-editor>
```

Setting the attribute `images_upload_credentials` allows configuring the editor
[image upload credentials]({{site.baseurl}}/configure/file-image-upload/#images_upload_credentials)
by passing the attribute value with the text `"false"` and `"true"` as a the boolean values `false` and `true` respectively.

#### Setting the images upload to reuse filenames

```html
<tinymce-editor images_reuse_filename="true"></tinymce-editor>
```

Setting the attribute `images_reuse_filename` allows configuring the editor
[image filename reuse]({{site.baseurl}}/configure/file-image-upload/#images_reuse_filename)
by passing the attribute value with the text `"false"` and `"true"` as a the boolean values `false` and `true` respectively.

#### Setting the icon pack

```html
<tinymce-editor icons="material"></tinymce-editor>
```

Setting the attribute `icons` allows configuring the editor
[icons]({{site.baseurl}}/configure/editor-appearance/#icons)
by passing the attribute value as a string.

#### Setting the icon pack URL

```html
<tinymce-editor icons_url="https://www.example.com/icons/material/icons.js"></tinymce-editor>
```

Setting the attribute `icons_url` allows configuring the editor
[icons URL]({{site.baseurl}}/configure/editor-appearance/#icons_url)
by passing the attribute value as a string.

#### Setting additional configuration options

```html
<script>
window.myConfig = {
  // any additional configuration options would go here
};
</script>
<tinymce-editor config="myConfig"></tinymce-editor>
```

Any configuration settings not supported by an attribute can be set using the
 `config` attribute which references a global javascript object that contains
 additional settings.

### Event binding

There are two methods to bind events. The first is to use the setup attribute to
register a function that should be called when the editor is setup. This is the
normal way events are added to {{site.productname}}.

```html
<script>
function setupEditor(editor) {
  editor.on('click', function () {
    console.log('Editor was clicked');
  });
}
</script>
<tinymce-editor setup="setupEditor"/>
```

The second technique uses any attributes that start with `on-`, for example `on-NodeChange`.

```html
<script>
function nodeChangeHandler(evt) {
  // use event
}
</script>
<tinymce-editor on-NodeChange="nodeChangeHandler"/>
```

If these attributes are later removed then the event will be automatically unbound.

#### Supported browser events

Bind the following browser events using the corresponding {{site.productname}} Web Component attribute.

| Browser event     | Attribute            |
|-------------------|----------------------|
| `BeforePaste`     | `on-BeforePaste`     |
| `Blur`            | `on-Blur`            |
| `Click`           | `on-Click`           |
| `ContextMenu`     | `on-ContextMenu`     |
| `Copy`            | `on-Copy`            |
| `Cut`             | `on-Cut`             |
| `Dblclick`        | `on-Dblclick`        |
| `Drag`            | `on-Drag`            |
| `DragDrop`        | `on-DragDrop`        |
| `DragEnd`         | `on-DragEnd`         |
| `DragGesture`     | `on-DragGesture`     |
| `DragOver`        | `on-DragOver`        |
| `Drop`            | `on-Drop`            |
| `Focus`           | `on-Focus`           |
| `FocusIn`         | `on-FocusIn`         |
| `FocusOut`        | `on-FocusOut`        |
| `KeyDown`         | `on-KeyDown`         |
| `KeyPress`        | `on-KeyPress`        |
| `KeyUp`           | `on-KeyUp`           |
| `MouseDown`       | `on-MouseDown`       |
| `MouseEnter`      | `on-MouseEnter`      |
| `MouseLeave`      | `on-MouseLeave`      |
| `MouseMove`       | `on-MouseMove`       |
| `MouseOut`        | `on-MouseOut`        |
| `MouseOver`       | `on-MouseOver`       |
| `MouseUp`         | `on-MouseUp`         |
| `Paste`           | `on-Paste`           |
| `SelectionChange` | `on-SelectionChange` |

#### Supported TinyMCE events

Bind the following {{site.productname}} events using the corresponding {{site.productname}} Web Component attribute.

| {{site.productname}} event       | Attribute              |
|---------------------|------------------------|
| `Activate`          | `on-Activate`          |
| `AddUndo`           | `on-AddUndo`           |
| `BeforeAddUndo`     | `on-BeforeAddUndo`     |
| `BeforeExecCommand` | `on-BeforeExecCommand` |
| `BeforeGetContent`  | `on-BeforeGetContent`  |
| `BeforeRenderUI`    | `on-BeforeRenderUI`    |
| `BeforeSetContent`  | `on-BeforeSetContent`  |
| `Change`            | `on-Change`            |
| `ClearUndos`        | `on-ClearUndos`        |
| `Deactivate`        | `on-Deactivate`        |
| `Dirty`             | `on-Dirty`             |
| `ExecCommand`       | `on-ExecCommand`       |
| `GetContent`        | `on-GetContent`        |
| `Hide`              | `on-Hide`              |
| `Init`              | `on-Init`              |
| `LoadContent`       | `on-LoadContent`       |
| `NodeChange`        | `on-NodeChange`        |
| `PostProcess`       | `on-PostProcess`       |
| `PostRender`        | `on-PostRender`        |
| `PreProcess`        | `on-PreProcess`        |
| `ProgressState`     | `on-ProgressState`     |
| `Redo`              | `on-Redo`              |
| `Remove`            | `on-Remove`            |
| `Reset`             | `on-Reset`             |
| `SaveContent`       | `on-SaveContent`       |
| `SetAttrib`         | `on-SetAttrib`         |
| `ObjectResizeStart` | `on-ObjectResizeStart` |
| `ObjectResized`     | `on-ObjectResized`     |
| `ObjectSelected`    | `on-ObjectSelected`    |
| `SetContent`        | `on-SetContent`        |
| `Show`              | `on-Show`              |
| `Submit`            | `on-Submit`            |
| `Undo`              | `on-Undo`              |
| `VisualAid`         | `on-VisualAid`         |
