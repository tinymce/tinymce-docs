## TinyMCE web-component technical reference

**Covered in this section:**

- [Installing the web-component integration](#installingthetinymcewebcomponentintegration)
- [Loading TinyMCE](#loadingtinymce)
- [Configuring the editor](#configuringtheeditor)

  - [Setting the initial content](#settingtheinitialcontent)
  - [Setting the toolbar](#settingthetoolbar)
  - [Setting the menubar](#settingthemenubar)

- [Event binding](#eventbinding)

### Installing the TinyMCE web-component integration

1. Download the web-component integration
2. Link it in your page
3. Insert `<tinymce-editor></tinymce-editor>` into the page.

### Loading TinyMCE
The integration depends on TinyMCE. When trying to create a web component for
TinyMCE it will try the following:

1. If the global `tinymce` is available:
    1. Use the global `tinymce` to initialize the editor.
2. Otherwise, if the attribute `src` is available:
    1. Add a script tag for the URL provided in `src` to load TinyMCE;
    2. Wait for the script to load and create the global `tinymce`;
    3. Use the global `tinymce` to initialize the editor.
3. Otherwise:
    1. Add a script tag for the cloud version of TinyMCE using the attributes `api-key` (default "no-api-key") and `channel` (default "5-stable");
    2. Wait for the script to load and create the global `tinymce`;
    3. Use the global `tinymce` to initialize the editor.

### Configuring the editor
The editor is configured by setting attributes on the tinymce-editor custom element.
Note that as all attributes must be represented as strings each attribute may be
interpreted differently - depending on context they may be understood as booleans, 
numbers or even global functions.

#### Setting the initial content
```html
<tinymce-editor>
&lt;p&gt;This will be the initial content of the editor.&lt;/p&gt;
</tinymce-editor>
```
The editor will load the text content in the tinymce-editor element as the initial HTML.

**Note**: it is important that the HTML be encoded to text so that injected 
javascript will not run and so it does not break the surrounding document.

#### Loading plugins
```html
<tinymce-editor plugins="advlist autolink link image lists charmap print preview"></tinymce-editor>
```
Setting the attribute `plugins` allows configuring the
[plugins](https://www.tiny.cloud/docs/configure/integration-and-setup/#plugins)
by passing the value as a string.

#### Setting width
```html
<tinymce-editor width="300"></tinymce-editor>
```
Setting the attribute `width` allows configuring the
[width](https://www.tiny.cloud/docs/configure/editor-appearance/#width)
by passing the value as a string or a number if the value contains only digits.

#### Setting height
```html
<tinymce-editor height="300"></tinymce-editor>
```
Setting the attribute `height` allows configuring the
[height](https://www.tiny.cloud/docs/configure/editor-appearance/#height)
by passing the value as a string or a number if the value contains only digits.

#### Setting the toolbar
```html
<tinymce-editor toolbar="undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent"></tinymce-editor>
```
Setting the attribute `toolbar` allows configuring the 
[tool bar](https://www.tiny.cloud/docs/configure/editor-appearance/#toolbar)
by passing the value as a string or the boolean `false` if the value is `"false"`.

#### Setting toolbar mode
```html
<tinymce-editor toolbar_mode="floating"></tinymce-editor>
```
Setting the attribute `toolbar_mode` allows configuring the
[toolbar mode](https://www.tiny.cloud/docs/configure/editor-appearance/#toolbar_mode)
by passing the value as a string.

#### Setting the menubar
```html
<tinymce-editor menubar="file edit insert view format table tools help"></tinymce-editor>
```
Setting the attribute `menubar` allows configuring the editor
[menu bar](https://www.tiny.cloud/docs/configure/editor-appearance/#menubar)
by passing the value as a string or the boolean `false` if the value is `"false"`.


#### Setting context menu
```html
<tinymce-editor plugins="link image table" contextmenu="link image table"></tinymce-editor>
```
Setting the attribute `contextmenu` allows configuring the editor
[context menu](https://www.tiny.cloud/docs/configure/editor-appearance/#contextmenu)
by passing the value as a string or the boolean `false` if the value is `"false"`.

#### Setting the quick-bar insert toolbar
```html
<tinymce-editor plugins="quickbars hr pagebreak" quickbars_insert_toolbar="quickimage quicktable | hr pagebreak"></tinymce-editor>
```
Setting the attribute `quickbars_insert_toolbar` allows configuring the editor
[quick-bar insert toolbar](https://www.tiny.cloud/docs/plugins/quickbars/#quickbars_insert_toolbar)
by passing the value as a string unless the value is the text `"false"` in which case it will be passed as the boolean `false`.

#### Setting the quick-bar selection toolbar
```html
<tinymce-editor plugins="quickbars" quickbars_selection_toolbar="bold italic | formatselect | quicklink blockquote"></tinymce-editor>
```
Setting the attribute `quickbars_selection_toolbar` allows configuring the editor
[context menu](https://www.tiny.cloud/docs/plugins/quickbars/#quickbars_selection_toolbar)
by passing the value as a string or the boolean `false` if the value is `"false"`.


#### Setting content stylesheets
```html
<tinymce-editor content_css="writer"></tinymce-editor>
```
Setting the attribute `content_css` allows configuring the editor
[content stylesheets](https://www.tiny.cloud/docs/plugins/quickbars/#quickbars_selection_toolbar)
by passing the value as a string.

#### Setting content styling
```html
<tinymce-editor content_style="div { margin: 10px; border: 5px solid red; padding: 3px; }"></tinymce-editor>
```
Setting the attribute `content_style` allows configuring the editor
[content styling](https://www.tiny.cloud/docs/configure/content-appearance/#content_style)
by passing the value as a string.

#### Setting Power Paste's word import method
```html
<tinymce-editor powerpaste_word_import="merge"></tinymce-editor>
```
Setting the attribute `powerpaste_word_import` allows configuring the editor
[behaviour when pasting word documents](https://www.tiny.cloud/docs/plugins/powerpaste/#powerpaste_word_import)
by passing the value as a string.

#### Setting Power Paste's html import method
```html
<tinymce-editor powerpaste_html_import="prompt"></tinymce-editor>
```
Setting the attribute `powerpaste_html_import` allows configuring the editor
[behaviour when pasting HTML documents](https://www.tiny.cloud/docs/plugins/powerpaste/#powerpaste_html_import)
by passing the attribute value as a string.

#### Setting Power Paste to allow local images
```html
<tinymce-editor powerpaste_html_import="prompt"></tinymce-editor>
```
Setting the attribute `powerpaste_allow_local_images` allows configuring the editor to
[include pasted local images](https://www.tiny.cloud/docs/plugins/powerpaste/#powerpaste_allow_local_images)
by passing the attribute value with the text `"false"` and `"true"` as a the boolean values `false` and `true` respectively.

#### Showing resize handles
```html
<tinymce-editor resize="false"></tinymce-editor>
```
Setting the attribute `resize` allows configuring the editor
[resize handles](https://www.tiny.cloud/docs/configure/editor-appearance/#resize)
by passing the attribute value with the text `"false"` and `"true"` as a the boolean values `false` and `true` respectively or any other value as a string.

#### Setting the editor setup function
```html
<script>
function setupEditor(editor) {
  // setup
}
</script>
<tinymce-editor setup="setupEditor"></tinymce-editor>
```

Setting the attribute `setup` allows configuring the editor
[setup callback](https://www.tiny.cloud/docs/configure/integration-and-setup/#setup)
by passing the function with the same name in the global scope.

#### Setting the editor skin
```html
<tinymce-editor skin="oxide"></tinymce-editor>
```

Setting the attribute `skin` allows configuring the editor
[skin](https://www.tiny.cloud/docs/configure/editor-appearance/#skin)
by passing the attribute value as a string.

#### Setting the images upload URL
```html
<tinymce-editor images_upload_url="postAcceptor.php"></tinymce-editor>
```

Setting the attribute `images_upload_url` allows configuring the editor
[image upload URL](https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
by passing the attribute value as a string.

#### Setting the images upload handler
```html
<tinymce-editor images_upload_handler=""></tinymce-editor>
```

Setting the attribute `images_upload_handler` allows configuring the editor
[image upload handler](https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler)
by passing the function with the same name in the global scope.

#### Setting the images upload base path
```html
<tinymce-editor images_upload_base_path="/some/basepath"></tinymce-editor>
```

Setting the attribute `images_upload_base_path` allows configuring the editor
[image upload base path](https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_base_path)
by passing the attribute value as a string.

#### Setting the images upload to have credentials
```html
<tinymce-editor images_upload_credentials="false"></tinymce-editor>
```

Setting the attribute `images_upload_credentials` allows configuring the editor
[image upload credentials](https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_credentials)
by passing the attribute value with the text `"false"` and `"true"` as a the boolean values `false` and `true` respectively.

#### Setting the images upload to reuse filenames
```html
<tinymce-editor images_reuse_filename="true"></tinymce-editor>
```

Setting the attribute `images_reuse_filename` allows configuring the editor
[image filename reuse](https://www.tiny.cloud/docs/configure/file-image-upload/#images_reuse_filename)
by passing the attribute value with the text `"false"` and `"true"` as a the boolean values `false` and `true` respectively.

#### Setting the icon pack
```html
<tinymce-editor icons="material"></tinymce-editor>
```

Setting the attribute `icons` allows configuring the editor
[icons](https://www.tiny.cloud/docs/configure/editor-appearance/#icons)
by passing the attribute value as a string.

#### Setting the icon pack URL
```html
<tinymce-editor icons_url="https://www.example.com/icons/material/icons.js"></tinymce-editor>
```

Setting the attribute `icons_url` allows configuring the editor
[icons URL](https://www.tiny.cloud/docs/configure/editor-appearance/#icons_url)
by passing the attribute value as a string.

#### Configuring additional settings
```html
<script>
window.myConfig = {
  // any additional settings would go here
};
</script>
<tinymce-editor config='myConfig'></tinymce-editor>
```
Any configuration settings not supported by an attribute can be set using the
 `config` attribute which references a global javascript object that contains
 additional settings.

### Event binding
There are two methods to bind events. The first is to use the setup attribute to
register a function that should be called when the editor is setup. This is the
normal way events are added to TinyMCE.
```html
<script>
function setupEditor(editor) {
  editor.on('nodeChange', function(evt) {
    // use event
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