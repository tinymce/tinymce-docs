## TinyMCE Web Component technical reference

**Covered in this section:**

- [Use a cloud version of the TinyMCE Web Component integration](#useacloudversionofthetinymcewebcomponentintegration)
- [Installing the TinyMCE Web Component integration](#installingthetinymcewebcomponentintegration)
- [Loading TinyMCE](#loadingtinymce)
- [Configuring the editor](#configuringtheeditor)

  - [Setting the initial content](#settingtheinitialcontent)
  - [Loading plugins](#loadingplugins)
  - [Setting the editor width](#settingtheeditorwidth)
  - [Setting the editor height](#settingtheeditorheight)
  - [Setting the toolbar](#settingthetoolbar)
  - [Setting the toolbar mode](#settingthetoolbarmode)
  - [Setting the menu bar](#settingthemenubar)
  - [Setting context menu](#settingcontextmenu)
  - [Setting the quick-insert toolbar](#settingthequick-inserttoolbar)
  - [Setting the quick-selection toolbar](#settingthequick-selectiontoolbar)
  - [Setting content stylesheets](#settingcontentstylesheets)
  - [Setting content styling](#settingcontentstyling)
  - [Setting PowerPaste’s word import method](#settingpowerpasteswordimportmethod)
  - [Setting PowerPaste’s html import method](#settingpowerpasteshtmlimportmethod)
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
  - [Setting additional configuration options](#settingadditionalconfigurationoptions)

- [Event binding](#eventbinding)

  - [Supported browser events](#supportedbrowserevents)
  - [Supported TinyMCE events](#supportedtinymceevents)

### Use a cloud version of the TinyMCE Web Component integration

To use a cloud version of Web Component, the integration is accessible from [JSDelivr](https://www.jsdelivr.com/package/npm/@tinymce/tinymce-webcomponent).

For example:

```html
<script src="{{site.webcomponent_url}}"></script>
```

### Installing the TinyMCE Web Component integration

To add the {{site.productname}} Web Component integration to a JavaScript project, on command line or command prompt, run the following:

- NPM users:

    ```sh
    npm i --save @tinymce/tinymce-webcomponent
    ```

- Yarn users:

    ```sh
    yarn add @tinymce/tinymce-webcomponent
    ```

### Loading TinyMCE

The integration requires both the {{site.productname}} Web Component (`tinymce-webcomponent.min.js`) and {{site.productname}} (`tinymce.min.js`).

If {{site.productname}} is not available for {{site.productname}} Web Component, the latest version of {{site.productname}} will be automatically loaded from the {{site.cloudname}}.

To use {{site.productname}} Web Component with a self-hosted copy of {{site.productname}}, ensure that the self-hosted copy of {{site.productname}} can be loaded in the same location as the {{site.productname}} Web Component (such as the same web page).

To use {{site.productname}} from the {{site.cloudname}}, add the `api-key` attribute to the `tinymce-editor` element with an API from [{{site.accountpage}}]({{site.accountpageurl}}).

### Configuring the editor

The editor is configured by setting attributes on the `tinymce-editor` custom element.
All attributes may be represented as strings, however some attributes will accept boolean or number inputs. Where an array, object, or function is a valid input; examples have been provided.

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
<tinymce-editor plugins="advlist autolink link image lists charmap preview"></tinymce-editor>
```

For a list of available plugins, see: [Add plugins to {{site.productname}}]({{site.baseurl}}/plugins/).

#### Setting the editor width

To set the width of the editor (content area and user interface), use the `width` attribute. For example:

##### Setting a pixel-based editor width

```html
<tinymce-editor width="300"></tinymce-editor>
```

##### Setting a CSS unit based editor width

```html
<tinymce-editor width="50%"></tinymce-editor>
```

#### Setting the editor height

To set the height of the editor (content area and user interface), use the `height` attribute. For example:

##### Setting a pixel-based editor height

```html
<tinymce-editor height="300"></tinymce-editor>
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

The `toolbar` attribute accepts a space-separated string of toolbar buttons with pipe characters (`|`) for grouping buttons. For a list of available toolbar buttons, see: [Toolbar Buttons Available for TinyMCE]({{site.baseurl}}/advanced/available-toolbar-buttons/).

##### Disabling the toolbar

To disable the toolbar, set the `toolbar` attribute to `"false"`. For example:

```html
<tinymce-editor toolbar="false"></tinymce-editor>
```

#### Setting the toolbar mode

To control the behavior of the toolbar, set the `toolbar_mode` attribute. For example:

```html
<tinymce-editor toolbar_mode="floating"></tinymce-editor>
```

For information on the available toolbar modes, see: [User interface options - `toolbar_mode`]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode).

#### Setting the menu bar

To set the menus shown on the editor menu bar, add the `menubar` attribute. For example:

```html
<tinymce-editor menubar="file edit insert view format table tools help"></tinymce-editor>
```

To disable or remove the menu bar, set the `menubar` attribute to `"false"`. For example:

```html
<tinymce-editor menubar="false"></tinymce-editor>
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

To disable the context menu, set the `contextmenu` attribute to `"false"`. For example:

```html
<tinymce-editor contextmenu="false"></tinymce-editor>
```

For a list of available context menu sections, see: [Available context menu sections]({{site.baseurl}}/advanced/editor-context-menu-identifiers/).
For information on context menus, see: [User interface options - `contextmenu`]({{site.baseurl}}/configure/editor-appearance/#contextmenu).

#### Setting the quick-insert toolbar

The quick-insert toolbar is shown when a new line is added, providing buttons for inserting objects such as tables and images.

To add a quick-insert toolbar, add `"quickbars"` to the `plugins` attribute. To change the quick-insert toolbar, set the `quickbars_insert_toolbar` attribute, such as:

```html
<tinymce-editor plugins="quickbars pagebreak" quickbars_insert_toolbar="quickimage quicktable quicklink | hr pagebreak"></tinymce-editor>
```

The `quickbars_insert_toolbar` attribute accepts a space-separated string of toolbar buttons with pipe characters (`|`) for grouping buttons. For a list of available toolbar buttons, see: [Toolbar Buttons Available for TinyMCE]({{site.baseurl}}/advanced/available-toolbar-buttons/).

To disable the quick-insert toolbar, set the `quickbars_insert_toolbar` attribute to `"false"`. For example:

```html
<tinymce-editor plugins="quickbars" quickbars_insert_toolbar="false"></tinymce-editor>
```

#### Setting the quick-selection toolbar

The quick-selection toolbar is shown when text is selected, providing formatting buttons such as: `bold`, `italic`, and `link`.

To add a quick-selection toolbar, add `"quickbars"` to the `plugins` attribute. To change the quick-selection toolbar, set the `quickbars_selection_toolbar` attribute, such as:

```html
<tinymce-editor plugins="quickbars" quickbars_selection_toolbar="bold italic | formatselect | quicklink blockquote"></tinymce-editor>
```

The `quickbars_selection_toolbar` attribute accepts a space-separated string of toolbar buttons with pipe characters (`|`) for grouping buttons. For a list of available toolbar buttons, see: [Toolbar Buttons Available for TinyMCE]({{site.baseurl}}/advanced/available-toolbar-buttons/).

To disable the quick-selection toolbar, set the `quickbars_selection_toolbar` attribute to `"false"`. For example:

```html
<tinymce-editor plugins="quickbars" quickbars_selection_toolbar="false"></tinymce-editor>
```

#### Setting content stylesheets

To set the CSS for the content area of the editor, use the `content_css` attribute.

For example, to use one of the {{site.productname}} CSS configurations:

```html
<tinymce-editor content_css="writer"></tinymce-editor>
```

To use a custom CSS file, provide a relative or abolute path to the css file, such as:

```html
<tinymce-editor content_css="path/to/mycontent.css"></tinymce-editor>
```

{{site.companyname}} recommends using:

- The `content_style` option to apply a small set of CSS styles.
- The `content_css` option for applying large or complex CSS configurations.

For information on the `content_css` option, see: [Content appearance options - `content_css`]({{site.baseurl}}/configure/content-appearance/#content_css).

#### Setting content styling

To apply a small set of CSS styles to the editor, use the `content_style` attribute. For example:

```html
<tinymce-editor content_style="div { margin: 10px; border: 5px solid red; padding: 3px; }"></tinymce-editor>
```

{{site.companyname}} recommends using:

- The `content_style` option to apply a small set of CSS styles.
- The `content_css` option for applying large or complex CSS configurations.

For information on the `content_style` option, see: [Content appearance options - `content_style`]({{site.baseurl}}/configure/content-appearance/#content_style).

#### Setting PowerPaste's word import method

This setting only applies if the PowerPaste plugin (`powerpaste`) is enabled.

To control how content pasted from Microsoft Word is filtered, use the `powerpaste_word_import` attribute. For example:

```html
<tinymce-editor powerpaste_word_import="merge"></tinymce-editor>
```

For information on the `powerpaste_word_import` option, including supported values, see: [The PowerPaste plugin - `powerpaste_word_import`]({{site.baseurl}}/plugins/premium/powerpaste/#powerpaste_word_import).

#### Setting PowerPaste's html import method

This setting only applies if the PowerPaste plugin (`powerpaste`) is enabled.

To control how content pasted from sources other than Microsoft Word is filtered, use the `powerpaste_html_import` attribute. For example:

```html
<tinymce-editor powerpaste_html_import="prompt"></tinymce-editor>
```

For information on the `powerpaste_html_import` option, including supported values, see: [The PowerPaste plugin - `powerpaste_html_import`]({{site.baseurl}}/plugins/premium/powerpaste/#powerpaste_html_import).

#### Setting PowerPaste to allow local images

This setting only applies if the PowerPaste plugin (`powerpaste`) is enabled.

To prevent Base64 encoded images with a data URI from being pasted into the editor, set `powerpaste_allow_local_images` to `"false"`. For example:

```html
<tinymce-editor powerpaste_allow_local_images="false"></tinymce-editor>
```

For information on the `powerpaste_allow_local_images` option, including supported values, see: [The PowerPaste plugin - `powerpaste_allow_local_images`]({{site.baseurl}}/plugins/premium/powerpaste/#powerpaste_allow_local_images).

#### Showing resize handles

The `resize` attribute gives you the ability to disable the resize handle or set it to resize the editor both horizontal and vertically. By default the editor will resize vertically (`resize="true"`).

To remove the resize handle and disable resizing of the editor, set the `resize` attribute to `"false"`. Such as:

```html
<tinymce-editor resize="false"></tinymce-editor>
```

To allow the user to resize the editor both horizontally and vertically, set the `resize` attribute to `"both"`. For example:

```html
<tinymce-editor resize="both"></tinymce-editor>
```

For information on the `resize` option, see: [User interface options - `resize`]({{site.baseurl}}/configure/editor-appearance/#resize).

#### Setting the editor setup function

To execute a javascript callback before the editor instance is rendered, use the `setup` attribute. For example:

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

For information on the `setup` option, see: [Integration and setup options - `setup`]({{site.baseurl}}/configure/integration-and-setup/#setup).

#### Setting the editor skin

To apply a custom skin to the editor, use the `skin` attribute. For example:

```html
<tinymce-editor skin="borderless"></tinymce-editor>
```

For information on:

- Using the `skin` option, see: [User interface options - `skin`]({{site.baseurl}}/configure/editor-appearance/#skin).
- {{site.companyname}} premium skins, see: [Tiny Skins and Icon Packs]({{site.baseurl}}/interface/editor-appearance/premium-skins-and-icons/).
- Creating a custom skin for {{site.productname}}, see: [Create a skin for {{site.productname}}]({{site.baseurl}}/advanced/creating-a-skin/).

#### Setting the images upload URL

To specify the location of a server-side upload handler, use the `images_upload_url` attribute. For example:

```html
<tinymce-editor images_upload_url="postAcceptor.php"></tinymce-editor>
```

The upload handler should return the location of the uploaded file in the following format:

```json
{ "location": "folder/sub-folder/new-location.png" }
```

For information on using the `images_upload_url`, see: [Image & file options - `images_upload_url`]({{site.baseurl}}/configure/file-image-upload/#images_upload_url).

#### Setting the images upload handler

To specify custom image upload handler callback function, use the `images_upload_handler` attribute.

```html
<script>
{% include misc/images-upload-handler-function.md %}
</script>
<tinymce-editor images_upload_handler="example_image_upload_handler"></tinymce-editor>
```

For information on using the `images_upload_handler` option, see: [Image & file options - `images_upload_handler`]({{site.baseurl}}/configure/file-image-upload/#images_upload_handler).

#### Setting the images upload base path

To specify the basepath to prepend to URLs returned from the configured `images_upload_url` script, use the `images_upload_base_path` attribute. For example:

```html
<tinymce-editor images_upload_url="postAcceptor.php" images_upload_base_path="/some/basepath"></tinymce-editor>
```

For information on using the `images_upload_base_path` option, see: [Image & file options - `images_upload_base_path`]({{site.baseurl}}/configure/file-image-upload/#images_upload_base_path).

#### Setting the images upload to have credentials

To receive credentials (such as cookies, authorization headers, or TLS client certificates) for cross-domain image uploads, set the `images_upload_credentials` attribute to `"true"`.

```html
<tinymce-editor images_upload_url="postAcceptor.php" images_upload_credentials="true"></tinymce-editor>
```

For information on using the `images_upload_credentials` option, see: [Image & file options - `images_upload_credentials`]({{site.baseurl}}/configure/file-image-upload/#images_upload_credentials).

#### Setting the images upload to reuse filenames

To force the editor to use the same filename for a given image, regardless of the number of times it is uploaded within a given instance, set the `images_reuse_filename` attribute to `"true"`.

```html
<tinymce-editor images_upload_url="postAcceptor.php" images_reuse_filename="true"></tinymce-editor>
```

For information on using the `images_reuse_filename` option, see: [Image & file options - `images_reuse_filename`]({{site.baseurl}}/configure/file-image-upload/#images_reuse_filename).

#### Setting the icon pack

To apply a bundled set of custom or premium icons to the editor, use the `icons` attribute. For example:

```html
<tinymce-editor icons="material"></tinymce-editor>
```

Use this attribute if the icon pack is bundled with {{site.productname}} (including custom icon packs). If the icon pack is hosted on a web site, use the [`icons_url` attribute](#settingtheiconpackurl).

For information on:

- Using the `icons` option, see: [User interface options - `icons`]({{site.baseurl}}/configure/editor-appearance/#icons).
- {{site.companyname}} premium icon packs, see: [Tiny Skins and Icon Packs]({{site.baseurl}}/interface/editor-appearance/premium-skins-and-icons/).
- Creating a custom icon pack for {{site.productname}}, see: [Create an icon pack for {{site.productname}}]({{site.baseurl}}/advanced/creating-an-icon-pack/).

#### Setting the icon pack URL

To apply a hosted set of custom or premium icons to the editor, use the `icons_url` attribute. For example:

```html
<tinymce-editor icons_url="https://www.example.com/icons/material/icons.js"></tinymce-editor>
```

Use this attribute if the icon pack is hosted on a web site. If the icon pack is bundled with {{site.productname}} (including custom icon packs), use the [`icons` attribute](#settingtheiconpack).

For information on:

- Using the `icons_url` option, see: [User interface options - `icons_url`]({{site.baseurl}}/configure/editor-appearance/#icons_url).
- {{site.companyname}} premium icon packs, see: [Tiny Skins and Icon Packs]({{site.baseurl}}/interface/editor-appearance/premium-skins-and-icons/).
- Creating a custom icon pack for {{site.productname}}, see: [Create an icon pack for {{site.productname}}]({{site.baseurl}}/advanced/creating-an-icon-pack/).

#### Setting additional configuration options

To configure any {{site.productname}} option that does not have a corresponding attribute, use the `config` attribute. For example:

```html
<script>
window.myConfig = {
  height: 500,
  template_selected_content_classes: 'selcontent',
  templates: [
    {
      title: 'My Template',
      description: 'This is my template.',
      content: '<p>Hello, <span class="selcontent">this statement will be replaced.</span></p>'
    }
  ],
  spellchecker_dialog: true,
  spellchecker_ignore_list: ['Ephox', 'Moxiecode']
};
</script>
<tinymce-editor
  config="myConfig"
  width="50%"
  toolbar="undo redo | bold italic | forecolor backcolor | template | alignleft aligncenter alignright alignjustify | bullist numlist | link | spellchecker"
  plugins="lists link noneditable searchreplace table template tinymcespellchecker wordcount"
></tinymce-editor>
```

Configuration options that have an attribute can also be passed to the `config` attribute.

### Event binding

There are two methods to bind events for the TinyMCE Web Component.

- The `setup` attribute, as described in [Setting the editor setup function](#settingtheeditorsetupfunction). For example:

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

- The `on-` attributes, such as the `on-NodeChange` attribute. For example:

    ```html
    <script>
    function changeHandler(evt) {
      console.log('The ' + evt['type'] + ' event was fired.');
    }
    </script>
    <tinymce-editor on-Change="changeHandler"/>
    ```

    If these attributes are later removed, the event will be automatically unbound. For the full list of supported `on-` attributes, see: [Supported browser events](#supportedbrowserevents) and [Supported TinyMCE events](#supportedtinymceevents).

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

| {{site.productname}} event | Attribute              |
|----------------------------|------------------------|
| `Activate`                 | `on-Activate`          |
| `AddUndo`                  | `on-AddUndo`           |
| `BeforeAddUndo`            | `on-BeforeAddUndo`     |
| `BeforeExecCommand`        | `on-BeforeExecCommand` |
| `BeforeGetContent`         | `on-BeforeGetContent`  |
| `BeforeRenderUI`           | `on-BeforeRenderUI`    |
| `BeforeSetContent`         | `on-BeforeSetContent`  |
| `Change`                   | `on-Change`            |
| `ClearUndos`               | `on-ClearUndos`        |
| `Deactivate`               | `on-Deactivate`        |
| `Dirty`                    | `on-Dirty`             |
| `ExecCommand`              | `on-ExecCommand`       |
| `GetContent`               | `on-GetContent`        |
| `Hide`                     | `on-Hide`              |
| `Init`                     | `on-Init`              |
| `LoadContent`              | `on-LoadContent`       |
| `NodeChange`               | `on-NodeChange`        |
| `PostProcess`              | `on-PostProcess`       |
| `PostRender`               | `on-PostRender`        |
| `PreProcess`               | `on-PreProcess`        |
| `ProgressState`            | `on-ProgressState`     |
| `Redo`                     | `on-Redo`              |
| `Remove`                   | `on-Remove`            |
| `Reset`                    | `on-Reset`             |
| `SaveContent`              | `on-SaveContent`       |
| `SetAttrib`                | `on-SetAttrib`         |
| `ObjectResizeStart`        | `on-ObjectResizeStart` |
| `ObjectResized`            | `on-ObjectResized`     |
| `ObjectSelected`           | `on-ObjectSelected`    |
| `SetContent`               | `on-SetContent`        |
| `Show`                     | `on-Show`              |
| `Submit`                   | `on-Submit`            |
| `Undo`                     | `on-Undo`              |
| `VisualAid`                | `on-VisualAid`         |
