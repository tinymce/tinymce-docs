---
layout: default
title: Plugins & Toolbar/Menu Controls
---




TinyMCE is an incredibly powerful, flexible and customizable rich text editor. This section will help you configure and extend your editor instance. We'll first look at the default core toolbar and menu controls before moving on to TinyMCE's real power: [**plugins**](#plugins).

# Core Controls

TinyMCE contains a set of core toolbar and menu controls; things such as bold, italic and text alignment. Basically, the type of settings you would expect to find in any WYSIWYG editor.

Here is the complete list of **core** **Menu Controls**, in space separated format.

```
newdocument undo redo visualaid cut copy paste selectall bold italic underline strikethrough subscript superscript removeformat formats
```

And here are the **core** **Toolbar Controls**, again in space separated format.

```
newdocument bold italic underline strikethrough alignleft aligncenter alignright alignjustify styleselect formatselect fontselect fontsizeselect cut copy paste bullist numlist outdent indent blockquote undo redo removeformat subscript superscript
```

To create groups of toolbar controls, add a `"|"` pipe character between the items you would like grouped together. For example:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    menubar: "file edit view",
    toolbar: "bold italic | alignleft aligncenter alignright"
});
```

If you wish to exclude `menubar` and/or `toolbar` controls set their value to `"none"`. To remove the toolbar and menu completely you would do this:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    menubar: "none",  // removes the menubar
    toolbar: "none"  // removes the toolbar
});
```

> Important! If a menu or toolbar control is associated with plugin functionality, we highlight that relationship under its respective plugin entry. Look for the icons.

Two notes for first time users:

1. If controls are not expressly declared, TinyMCE instantiates its default, **core** menu and toolbar controls. See the code example in the [Quick Start](/quick-start).
2. The `key` passed to the `.init` method for menu functionality is `menubar`, not menu.


# Plugins

The real power of TinyMCE's functionality is in its (so-called) plugins. Plugins typically extend the default editor functionality or add new functionality. For example, `advlist` add extra options to the toolbar's existing list controls, while `code` adds an entirely new control.

The plugins listed below are included in the standard TinyMCE package, such as the one served via the CDN, but they are not activated.

It's important to note that some plugins have advanced configuration requirements, in addition to including the plugin name as a value in the `plugins` key. A good example of this is the Advanced List plugin `advlist` below, so let's get to it.


{% include plugins/advlist.md %}
{% include plugins/anchor.md %}
{% include plugins/autolink.md %}






## autoresize

`autoresize` automatically resizes the editor to the content inside it.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autoresize"
});
```

### Options

These settings affect the execution of the `autoresize` plugin, including changes to the minimum width, height, bottom margin and default initialization state.

### `autoresize_bottom_margin`

This option allows you to specify the size of the `padding` at the bottom of the editor's `body` set on initialization.

**Type:** `Integer`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autoresize",
    autoresize_bottom_margin: "50"
});
```

### `autoresize_max_height`

This option enables you to specify the **maximum** `height` that the editor will automatically resize to when a user enters text into the editor. In other words, the editor will stop automatically resizing when the set value is reached.

**Type:** `Integer`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    autoresize_max_height: "500"
});
```

### `autoresize_min_height`

This option enables you to specify the **minimum** `height` of the editor when it's initialized.

**Type:** `Integer`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    autoresize_min_height: "350"
});
```

### `autoresize_on_init`

This option allows you to set whether the editor will attempt to resize itself upon initialization. By default this option is set to `true`.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autoresize",
    autoresize_on_init: false
});
```

### `autoresize_overflow_padding`

This option allows you to specify the size of the `padding` at the sides of the editor's `body` set on initialization.

**Type:** `Integer`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autoresize",
    autoresize_overflow_padding: "50"
});
```



## autosave

// adds menu control (under File menu)

This plugin gives the user a warning if they made modifications to a editor instance but didn't submit them. (This plugin will most likely be extended in the future to provide AJAX auto save support.) It also adds a menu item `Restore last draft` under the `File` menu.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave"
});
```

### Options

These settings affect the execution of the `autoSave` plugin. The settings here will affect the interval, duration and behavior of locally stored drafts of the current editor instance.

### `autosave_ask_before_unload`

This option allows you to set whether the editor should prompt the user to advise them that they have unsaved changes when attempting to close the current window. By default this option is enabled and an example of disabling this setting is included below.

**Type**: `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave",
    autosave_ask_before_unload: false
});
```

### `autosave_interval`

This option enables you to specify the time it should wait between making snapshots of the current contents and store it into local storage. The syntax is to append the letter `s` to the end of a number value. For example, "30s" for 30 seconds.

**Type**: `String`

**Default Value:** `"30s"`

**Example**:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    autosave_interval: "20s"
});
```

### `autosave_prefix`

This option allows you to set the prefix that is used for local storage keys.

**Type**: `String`

**Default Value**: `"tinymce-autosave-{path}{query}-{id}-"`

**Example**:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave",
    autosave_prefix: "tinymce-autosave-{path}{query}-{id}-"
});
```

### `autosave_restore_when_empty`

This option enables you to specify if TinyMCE should automatically restore the contents stored in local storage when the editor is empty on initialization. This can be useful for users who don't know that they can restore lost work if the browser crashed by selecting `Restore last draft` from the `File` menu.

**Type**: `Boolean`

**Default Value**: `true`

**Possible Values**: `true`, `false`

**Example**:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave",
    autosave_restore_when_empty: false
});
```

### `autosave_retention`

This option lets you to specify the duration editor content should remain in local storage. Content older than the set time it will be ignored. The syntax is to append the letter `m` to the end of a number value. For example, "20m" for 20 minutes.

**Type**: `String`

**Default Value**: "20m"

**Example**:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave",
    autosave_retention: "30m"
});
```



## bbcode

This plugin adds basic BBCode input/output to TinyMCE.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "bbcode"
});
```

### Options

### `bbcode_dialect`

This option allows you to specify the BBCode dialect. We only support [PunBB](http://punbb.informer.com/) at the moment but hope to add more dialects in the future. When using the PunBB dialect `codeStyle` and `quoteStyle` will be converted into `[code]` and `[quote]` items.

**Type:** `String`

**Default Value:** `"punbb"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "bbcode",
    bbcode_dialect: "punbb"
});
```



## charmap

// adds menu control (under Insert menu)

// adds toolbar control

This plugin adds a `charmap` button that enables users to insert special characters into their text. It also adds the menu item `Special character` under the `Insert` menu.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "charmap",
    toolbar: "charmap",
    menubar: "insert"
});
```



## code

// adds menu control (under Tools menu)

// adds toolbar control

This plugin adds a toolbar button that allows a user to edit the HTML code hidden by the WYSIWYG view. It also adds the menu item `Source code` under the `Tools` menu.

**Type:** `String`

**Default Value:**

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "code",
    toolbar: "code",
    menubar: "tools"
});
```

### Options

### `code_dialog_height`

This configuration option sets the *internal, editable area* height of the `code` dialog box.

Note that the external dimensions of the actual modal will be slightly larger than the value set.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "code",
    toolbar: "code",
    menubar: "tools",
    code_dialog_height: "200"
});
```

### `code_dialog_width`

This configuration option sets the *internal, editable area* width of the `code` dialog box.

Note that the external dimensions of the actual modal will be slightly larger than the value set.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "code",
    toolbar: "code",
    menubar: "tools",
    code_dialog_width: "300"
});
```



## colorpicker

The `colorpicker` plugin adds a full-blown color picker to the editor by setting the [`color_picker_callback`](./configuration-reference/callbacks/#color_picker_callback).

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "colorpicker"
});
```

### `color_picker_callback`

This option enables you to provide your own color picker.

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "colorpicker",
    color_picker_callback: function(callback, value) {
        callback('#FF00FF');
    }
});
```



## compat3x

This plugin contains a few compatibility files for the old 3.x branch. This enables you to run most old 3.x plugins with out any modifications. You need to take a few steps to enable this plugin:

**Installation Instructions**

1. Download the tinymce development package.
2. Copy the `compat3x` plugin to your site.
3. Copy `utils` and `tiny_mce_popup.js` to the root directory, if `tinymce` where the `tinymce.min.js` file is located.
4. Add the `compat3x` plugin as your first plugin in the plugins `init` option or load it after the TinyMCE core.
5. (Optional) Rename the old plugins `editor_plugin.js` file to `plugin.min.js` then you can load it as a normal plugin.

**Type:** `String`

**Example:**

Example of usage **in** `tinymce.init`:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "compat3x",
    external_plugins: {
        "myoldplugin": "/tinymce/plugins/myoldplugin/editor_plugin.js"
    }
});
```

Example of loading the compat3x **before** `tinymce.init`:

```html
<script src="/tinymce/tinymce.min.js"></script>
<script src="/tinymce/plugins/compat3x/plugin.min.js"></script>
<script>
tinymce.init({
    external_plugins: {
        "myoldplugin": "/tinymce/plugins/myoldplugin/editor_plugin.js"
    }
});
</script>
```



## contextmenu

This plugin adds a configurable context menu that appears when a user (typically) right clicks in the editable area.

Note that by default `contextmenu` does not disable the operating system's native context menu.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "contextmenu",
    contextmenu: "link image inserttable | cell row column deletetable"
});
```

### Options

These settings affect the execution of the `contextmenu` plugin. The settings in this section allow direct control over how the `contextmenu` appears and what is included inside the `contextmenu`.

### `contextmenu`

This option allows you to specify which items should appear on TinyMCE's context menu.

To specify the menu items that should appear on TinyMCE's context menu, the `contextmenu` option should be provided with a space separated list of menu items. To create groups within this listing, add `"|"` pipe characters between the groups of menu items that you would like to create.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "contextmenu",
    contextmenu: "link image inserttable | cell row column deletetable"
});
```

### `contextmenu_never_use_native`

This option allows you to disable the browser's native context menu from appearing within the editor.

We advise you give some thought about whether you really want to do this. Many users expect certain behavior when right clicking in text areas and changes may be unwelcome. But hey, you're the boss.

**Type:** `Boolean`

**Default Value:** `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "contextmenu",
    contextmenu_never_use_native: true
});
```



## directionality

// adds toolbar control

This plugin adds directionality controls to the toolbar, enabling TinyMCE to better handle languages written from right to left.

**Type:** `String`

**Possible Values:** `ltr`, `rtl`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "directionality",
    toolbar: "ltr rtl"
});
```



## emoticons

// adds toolbar control

The `emoticons` plugin adds a toolbar control that let's users insert smiley images into TinyMCE's editable area.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "emoticons",
    toolbar: "emoticons"
});
```



## example

The `example` plugin is an example plugin that you can use as a template for your custom plugins.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "example"
});
```



## example_dependency

The `example_dependency` plugin is an example plugin with a dependency on another plugin.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "example_dependency"
});
```



## fullpage

// adds menu control (under File menu)

// adds toolbar control

This plugin allows a user to edit certain document properties (such as `title`, `keywords`, `description`) via a dialog box after pressing a control added to the toolbar. If the `code` plugin is enabled `fullpage` exposes `<head>`, `<body>` and various `meta` tags in source code view. It also adds a `Document properties` menu under the File menu and button to the toolbar.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    menubar: "file",
    toolbar: "fullpage"
});
```

### Options

These settings affect the execution of the `fullpage` plugin. Many of the settings allow you to specify default values for the full page editing process.

### `fullpage_default_doctype`

This option enables you to specify the default `doctype` for the output HTML.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_doctype: "<!DOCTYPE html>"
});
```

### `fullpage_default_encoding`

This option enables you to specify the default encoding for the output HTML.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_encoding: "UTF-8"
});
```

### `fullpage_default_fontsize`

This option enables you to specify the default font **size** for the `body` element.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_fontsize: "14px"
});
```

### `fullpage_default_font_family`

This option enables you to specify the default font **family** for the `body` element.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_font_family: "'Times New Roman', Georgia, Serif;"
});
```

### `fullpage_default_langcode`

This option enables you to specify the default language codes for the output HTML.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_langcode: "en-US"
});
```

### `fullpage_default_title`

This option enables you to specify the default `title` for the output HTML.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_title: "TinyMCE - Configuration:fullpage_default_title"
});
```

### `fullpage_default_text_color`

This option enables you to specify the default text color for the `body` element.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_text_color: "blue"
});
```

### `fullpage_default_xml_pi`

This option enables you to specify if a XML declaration should be added or not true/false option.

**Type:** `Boolean`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_default_xml_pi: true
});
```

### `fullpage_hide_in_source_view`

This option allows you to specify whether TinyMCE should hide the non `body` content from source view.

**Type:** `Boolean`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullpage",
    fullpage_hide_in_source_view: true
});
```



## fullscreen

// adds menu control (under View menu)

// adds toolbar control

This plugin adds full screen editing capabilities to TinyMCE. When the toolbar control is pressed the editable area will fill the browser's viewport.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "fullscreen",
    menubar: "view",
    toolbar: "fullscreen"
});
```



## hr

// adds menu control (under Insert menu)

// adds toolbar control

The `hr` plugin allows a user to insert a horizontal rule on the page at the cursor insertion point. It also adds a toolbar control and a menu item `Horizontal line` under the `Insert` menu.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "hr"
});
```



## image

// adds menu control (under Insert menu)

// adds toolbar control

This plugin enables the user to insert an image into TinyMCE's editable area.

Note that this is not drag-drop functionality and the user is required to enter the path to the image, the image description, dimensions and whether image proportions should be constrained (via a checkbox). Some of these settings can be preset using the plugin's configuration options.

The `image` plugin also adds a toolbar control and an `Insert/edit image` menu item under the `Insert` menu.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "image",
    menubar: "insert",
    toolbar: "image",
    image_list: [
        {title: 'My image 1', value: 'http://www.tinymce.com/my1.gif'},
        {title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif'}
    ]
});

```

### Options

These configuration options affect the execution of the `image` plugin. Many of the settings here will disable dialog box features used to insert or edit images. A predefined list of images can also be provided to enable quick insertion of those images.

### `image_list`

This option lets you specify a predefined list of sources for images. `image_list` takes the form of an array containing items to add to a list with a corresponding image. Each item has a `title` and a `value`.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "image",
    toolbar: "image",
    image_list: [
        {title: 'Dog', value: 'mydog.jpg'},
        {title: 'Cat', value: 'mycat.gif'}
    ]
});
```

**Example of JSON url with images**

You can also configure a URL with JSON data. The format of that list is the same as above.

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "image",
    toolbar: "image",
    image_list: "/mylist.php"
});
```

**Example of a custom async function**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "image",
  toolbar: "image",
    image_list: function(success) {
      success([
        {title: 'Dog', value: 'mydog.jpg'},
        {title: 'Cat', value: 'mycat.gif'}
      ]);
  }
});
```

### `image_advtab`

This option adds an "Advanced" tab to the image dialog allowing you to add custom styles, spacing and borders to images.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "image",
    toolbar: "image",
    image_advtab: true
});
```

### `image_class_list`

This option lets you specify a predefined list of classes to add to an image. It takes the form of an array with items to set classes on links.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "image",
    toolbar: "image",
    image_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### `image_description`

This options allows you disable the image description input field in the image dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "image",
    toolbar: "image",
    image_description: false
});
```

### `image_dimensions`

This options allows you disable the image dimensions input field in the image dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "image",
    toolbar: "image",
    image_dimensions: false
});
```

### `image_title`

This options allows you enable the image title input field in the image dialog.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "image",
    toolbar: "image",
    image_title: true
});
```

## `image_prepend_url`

This option allows you to specify a URL prefix that will be applied to images when appropriate.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "image",
    toolbar: "image",
    image_prepend_url: "http://www.tinymce.com/images/"
});
```



## imagetools

The `imagetools` plugin adds a contextual image editing toolbar to images inserted into the editable area. This works on modern browsers that let you edit images inline.

Note that this feature requires at least IE10 since it uses the `HTML5 File API`. Also note that if the `imagetools` inline toolbar isn't appearing you may need to enable `imagetools_cors_hosts` or `imagetools_proxy`.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    toolbar: "image",
    plugins: "image imagetools"
});
```

### Options

These settings affect the execution of the Imagetools plugin. This plugin's cross-origin resource sharing, proxy and toolbar settings can be modified here.

### `imagetools_cors_hosts`

This option lets you specify an array of domains that allow cors. If cors headers are enabled remote image editing is possible.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    toolbar: "image",
    plugins: "image imagetools",
    imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com']
});
```

### `imagetools_proxy`

This option lets you specify a local proxy script to use when loading images from remote domains.

**Type:** `String`

**Example**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    toolbar: "image",
    plugins: "image imagetools",
    imagetools_proxy: 'proxy.php'
});
```

**Example of a proxy.php script**

```php
<?php
// We recommend to extend this script with authentication logic
// so it can be used only by an authorized user
$validMimeTypes = array("image/gif", "image/jpeg", "image/png");

if (!isset($_GET["url"]) || !trim($_GET["url"])) {
    header("HTTP/1.0 500 Url parameter missing or empty.");
    return;
}

$scheme = parse_url($_GET["url"], PHP_URL_SCHEME);
if ($scheme === false || in_array($scheme, array("http", "https")) === false) {
    header("HTTP/1.0 500 Invalid protocol.");
    return;
}

$content = file_get_contents($_GET["url"]);
$info = getimagesizefromstring($content);

if ($info === false || in_array($info["mime"], $validMimeTypes) === false) {
    header("HTTP/1.0 500 Url doesn't seem to be a valid image.");
    return;
}

header('Content-Type:' . $info["mime"]);
echo $content;
?>
```

### `imagetools_toolbar`

This option lets select which toolbar items you want to display in the `imagetools` contextual toolbar.

**Type:** `String`

**Default Value:** `"rotateleft rotateright | flipv fliph | editimage imageoptions"`

**Possible Values:**

* `rotateleft`
* `rotateright`
* `flipv`
* `fliph`
* `editimage`
* `imageoptions`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    toolbar: "image",
    plugins: "image imagetools",
    imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions"
});
```



## importcss

The `importcss` plugin adds the ability to automatically import CSS classes from the CSS file specified in the [`content_css`](./configuration-reference/content-style/#content_css) configuration setting.

By default selectors like `".my-class"`, `".my-class1.my-class2"` and `"p.my-class"` get imported as format rules.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "importcss",
    menubar: "format"
});
```

### Options

These settings affect the execution of the `importcss` plugin, specifically the way that these operations are handled.

### `importcss_append`

If set to `true` this option will append the imported styles to the end of the `Format` menu and will replace the default formats.

**Type:** `Boolean`

**Default Value:** `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "importcss",
    menubar: "format",
    importcss_append: true
});
```

### `importcss_file_filter`

This option enables you to add the CSS files that should be used for populating the styles drop down. This will go though any `@import` rules and only target the specified file. This option can be either a `string`, `regexp` or a `function`. This also allows you to import styles form existing files on the currently editable page in inline mode.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "importcss",
    menubar: "format",
    importcss_file_filter: "my-styles.css"
});
```

### `importcss_selector_filter`

This option enables you to only import classes from selectors matching the filter. The filter can be a `string`, `regexp` or a `function`. See the examples below.

**Type:** `String`

**Example of usage with string filter:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "importcss",
    menubar: "format",
    importcss_selector_filter: ".my-prefix-"
});
```

**Example of usage with RegExp filter**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "importcss",
    menubar: "format",
    importcss_selector_filter: /\.prefix|\.otherprefix/
});
```

**Example of usage with function filter**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "importcss"
    menubar: "format",
    importcss_selector_filter: function(selector) {
        return selector.indexOf('myprefix') !== -1;
    }
});
```

### `importcss_groups`

This option enables group matching selectors into submenus in the `Formats` menu dropdown. You can use a `string`, `regexp` or a `function` to filter selectors. You can also omit the filter to get all non-matching ones into a specific group.

**Example of usage with string filter**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "importcss"
    menubar: "format",
    importcss_groups: [
        {title: 'Table styles', filter: /^(td|tr)\./}, // td.class and tr.class
        {title: 'Block styles', filter: /^(div|p)\./}, // div.class and p.class
        {title: 'Other styles'} // The rest
    ]
});
```

### `importcss_merge_classes`

This option is used in cases where the class attribute should be replaced or merged. For example, if you have multiple classes you can apply all of them to the same element. If this option is set to `false` it will always replace the contents of the class attribute.

**Type:** `Boolean`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "importcss"
    menubar: "format",
    importcss_merge_classes: false
});
```

### `importcss_selector_converter`

This option allows you to override the default selector to format converter function. This allows you to parse the CSS selectors manually and produce format objects out of them. If the converter returns falsy value the selector is ignored from import.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "importcss"
    menubar: "format",
    importcss_selector_converter: function(selector) {
        // Custom logic
    }
});
```

**Example filtering compressed stylesheet using plugin callback**

```
// Sample compressed stylesheet:
/* Normalize */
article, aside, footer, header, main, nav, section {display: block;}
/* jQueryUI */
.ui-helper-hidden { display: none; }
/* Custom Styles */
.myCustomStyleStart {display:none;}
       INCLUDE ALL MY CLASSES HERE IN THE Formats menu!
.myCustomStyleEnd {display:none;}
/* Any other possible styles afterward ... */
```

```js
var keepSelector = false;
tinymce.init({
    importcss_selector_converter: function(selector) {
        if (selector == '.myCustomStyleStart') {
            keepSelector = true;
            return false;
        } else if (selector == '.myCustomStyleEnd') {
            keepSelector = false;
        }
        if (!keepSelector ) {
            return false;
        }
        return this.convertSelectorToFormat(selector);
    }
});
```



## insertdatetime

// adds menu control (under Insert menu)

// adds toolbar control

The `insertdatetime` plugin provides a toolbar control and menu item `Insert date/time` (under the `Insert` menu) that lets a user easily insert the current date and/or time into the editable area at the cursors insertion point.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "insertdatetime",
    menubar: "insert",
    toolbar: "insertdatetime"
});
```

### Options

These settings affect the execution of the `insertdatetime` plugin. Formats for both dates and times can be set in these configuration options.

### `insertdatetime_dateformat`

This option allows you to override the default formatting rule for date formats inserted by the `mceInsertDate` command. This defaults to `%Y-%m-%d` and where the different `%` variables get replaced with various [date format options](#dateformats).

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "insertdatetime",
    menubar: "insert",
    toolbar: "insertdatetime"
    insertdatetime_dateformat: "%Y-%m-%d"
});
```

### `insertdatetime_formats`

Allows you to specify a list of date/time formats to be used in the date menu or date select box. A complete list of formats is available under [date formats](#dateformats) below.

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "insertdatetime",
    menubar: "insert",
    toolbar: "insertdatetime"
    insertdatetime_formats: ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"]
});
```

### `insertdatetime_timeformat`

This option allows you to override the default formatting rule for times inserted by the `mceInsertTime` command. This defaults to `%H:%M:%S` and where the different `%` variables get replaced with various [date format options](#dateformats).

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "insertdatetime",
    menubar: "insert",
    toolbar: "insertdatetime"
    insertdatetime_timeformat: "%H:%M:%S"
});
```

### `insertdatetime_element`

When this option is enabled HTML5 time elements gets generated when you insert dates/times.

**Type:** `Boolean`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "insertdatetime",
    menubar: "insert",
    toolbar: "insertdatetime"
    insertdatetime_element: true
});
```

### `dateformats`

**Replacement variables**

| Name | Summary         |
|------|-----------------|
| %D   | mm/dd/yy (same as %m/%d/%y) |
| %r   | 12-hour clock time hh:mm:ss with AM or PM (same as %I:%M:%S %p) |
| %y   | year as a decimal number without a century (range 00 to 99) |
| %Y   | year as a decimal number including the century |
| %m   | month as a decimal number (range 01 to 12) |
| %B   | full localised month name (e.g. "January") |
| %b   | abbreviated localised month name (e.g. "Jan") |
| %d   | day of the month as a decimal number (range 01 to 31) |
| %A   | full localised weekday name (e.g. "Monday") |
| %a   | abbreviated localised weekday name (e.g. "Mon") |
| %H   | hour as a decimal number using a 24-hour clock (range 00 to 23) |
| %I   | hour as a decimal number using a 12-hour clock (range 01 to 12) |
| %M   | minute as a decimal number (range 00-59) |
| %S   | second as a decimal number (range 00-59) |
| %p   | either "am" or "pm" according to the given time value |
| %%   | a literal "%" character |



## layer

This plugin adds some layer controls. It only works on some browsers and will probably be removed in the future.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "layer"
});
```



## legacyoutput

The `legacyoutput` plugin changes TinyMCE's output, producing legacy elements such as `font`, `b`, `i`, `u`, `strike` and use `align` attributes.

This plugin can be useful if you want to use TinyMCE in an HTML mail client or to render contents to Flash.

However, this is **not** intended for use in producing normal web content such as in a CMS. These elements should no longer be used for such purposes since they are deprecated in later XHTML and HTML5 specifications.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "legacyoutput"
});
```



## link

// adds menu control (under Insert menu)

// adds toolbar control

The `link` plugin allows a user to link external resources, such as website URLs, to selected text in their document.

It also adds a toolbar control and a menu item `Insert/edit link` under the `Insert` menu dropdown.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link"
});
```

## Options

These settings affect the execution of the `link` plugin. Predefined links, targets and more can be specified here.

### `default_link_target`

This option allows you to set a default target for links when inserting/editing a link.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link"
    default_link_target: "_blank"
});
```

### `link_assume_external_targets`

This option allows you to set whether TinyMCE will prompt the user to prepend a `http://` prefix if the supplied link does not already contain a protocol prefix.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link"
    link_assume_external_targets: true
});
```

### `link_class_list`

The `link_class_list` plugin adds a predefined `class` dropdown to the `link` dialog box.

**Type:** `String`

**Example**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    link_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### `link_list`

This option lets you specify a predefined list of links for the link dialog. This is very useful if your users need to regularly link to the same sources.

**Example of an array with links**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    link_list: [
        {title: 'My page 1', value: 'http://www.tinymce.com'},
        {title: 'My page 2', value: 'http://www.moxiecode.com'}
    ]
});
```

**Example of an array with links and sub-menu**

Since [TinyMCE 4.0.27](http://www.tinymce.com/develop/changelog/?ctrl=version&act=view&pr_id=1&vr_id=867) it is now possible to have sub-menus within the link list. A TinyMCE Fiddle [example of nested sub-menus](http://fiddle.tinymce.com/wleaab) is available.

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    link_list: [
        {title: 'TinyMCE', value: 'http://www.tinymce.com'},
        {title: 'Moxiecode', value: 'http://www.moxiecode.com'},
        {title: 'TinyMCE resources', menu: [
            {title: 'TinyMCE documentation', value: 'http://www.tinymce.com/wiki.php'},
            {title: 'TinyMCE forum', value: 'http://www.tinymce.com/forum/index.php'}
        ]}
    ]
});
```

**Example of a JSON URL with links**

You can also configure a URL with JSON data. The format of that list is the same as above:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    link_list: "/mylist.php"
});
```

**Example of a custom async function**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    link_list: function(success) {
        success([
             {title: 'My page 1', value: 'http://www.tinymce.com'},
             {title: 'My page 2', value: 'http://www.moxiecode.com'}
        ]);
    }
});
```

### `target_list`

The `target_list` lets you specify a predefined list of targets for the `link` dialog. This defaults to a dialog containing the options `_self` and `_blank`.

**Type:** `String`

**Example, adding a `_lightbox` target to the dropdown list**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    target_list: [
        {title: 'None', value: ''},
        {title: 'Same page', value: '_self'},
        {title: 'New page', value: '_blank'},
        {title: 'LIghtbox', value: '_lightbox'}
  ]
});
```

To disable the option dialog set `target_list` to `false`.

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    target_list: false
  ]
});
```

### `rel_list`

This option lets you specify a predefined list of values for the `link` dialog. These values gets applied to the `rel` attribute.

**Type:** `String`

**Example**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    rel_list: [
        {title: 'Lightbox', value: 'lightbox'},
        {title: 'Table of contents', value: 'toc'}
    ]
});
```

### `link_title`

This options allows you disable the link `title` input field in the `link` dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    link_title: false
});
```



## media

// adds menu control (under Insert menu)

// toolbar control

The `media` plugin adds the ability for users to be able to add HTML5 video and audio elements to the editable area. It also adds the menu item `Insert/edit video` under the `Insert` menu as well as a toolbar control.

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "media",
    menubar: "insert",
    toolbar: "media"
});
```

### Options

These settings affect the execution of the `media` plugin, namely the ability to disable parts of the media dialog box when inserting/editing media items. In addition, the user may disable the cross-site scripting sanitation filter for video/object elements here.

### `audio_template_callback`

This option allows you to specify the function that will return the html embed code of the audio media that you are attempting to insert into tinymce.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "media",
    menubar: "insert",
    toolbar: "media",
    audio_template_callback: function(data) {
       return '<audio controls>' +
            '\n<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' +
       '</audio>';
   }
});
```

### `media_alt_source`

This options allows you disable the `Alternative source` input field in the media dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "media",
    menubar: "insert",
    toolbar: "media",
    media_alt_source: false
});
```

### `media_poster`

This options allows you disable the `Poster` input field in the media dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "media",
    menubar: "insert",
    toolbar: "media",
    media_poster: false
});
```

### `media_dimensions`

This options allows you disable the `Dimensions` input fields in the media dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "media",
    menubar: "insert",
    toolbar: "media",
    media_dimensions: false
});
```

### `media_filter_html`

This option allows you disable the XSS sanitation filter for video/object elements. Scripts, conditional comments, etc, can't be used within these elements by default for security reasons. If you want to include that and have server side sanitizers, or you trust your users, then you can disable this feature.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "media",
    menubar: "insert",
    toolbar: "media",
    media_filter_html: false
});
```
### `media_scripts`

This option allows you to embed videos using script elements.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "media",
    menubar: "insert",
    toolbar: "media",
    media_scripts: [
       {filter: 'http://media1.tinymce.com'},
       {filter: 'http://media2.tinymce.com', width: 100, height: 200}
   ]
});
```

### `video_template_callback`

This option allows you to specify the function that will return the html embed code of the video media that you are attempting to insert into tinymce.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "media",
    menubar: "insert",
    toolbar: "media",
    video_template_callback: function(data) {
       return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' +
            '<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' +
            (data.source2 ? '<source src="' + data.source2 + '"' + (data.source2mime ? ' type="' + data.source2mime + '"' : '') + ' />\n' : '') +
         '</video>';
   }
});
```



## moxiemanager Control

The moxiemanager Control enables users to insert files located externally to the editor (e.g. on their client desktop) into their document.

Note: **moxiemanager** is an application separate from TinyMCE and not a "plugin". However, being built by the team behind TinyMCE it has tight integration with the editor via a toolbar control.

**moxiemanager** is a paid addition to TinyMCE. Learn more at [http://www.moxiemanager.com/](http://www.moxiemanager.com/)



## nonbreaking

// adds menu control (under Insert menu)

// adds toolbar control

This plugin adds a button for inserting nonbreaking space entities `&nbsp;` at the current caret location (cursor insert point). It also adds a menu item `Nonbreaking space` under the Insert menu dropdown and a toolbar control.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "nonbreaking",
    menubar: "insert",
    toolbar: "nonbreaking"
});
```

### Options

### `nonbreaking_force_tab`

This option allows you to force TinyMCE to insert three `&nbsp;` entities when the user presses the keyboard `tab` key.

It's important to note that this does not change the behavior of the menu and toolbar controls, which will continue to insert a single `&nbsp` entity when `nonbreaking_force_tab` value is `true`.

However, the `true` condition does capture the tab key and contain it within the editable area, whereas when set to its default state of `false` a tab keypress will move the cursor to the next editable area (e.g. a browser url bar or form field on the current page).

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

**Example**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "nonbreaking",
    mewnubar: "insert",
    toolbar: "nonbreaking",
    nonbreaking_force_tab: true
});
```



## noneditable

This plugin enables you to prevent users from being able to change (i.e. edit) content within elements assigned the `mceNonEditable` class.

**Type:** `String`

**Example**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "noneditable"
});
```

When you have existing classes that cannot be removed, you may combine MCE classes with the existing class in the following manner:

**Non-editable div example:**

```html
<div class="myclass mceNonEditable">Contents</div>
```

**Editable div example:**

```html
<div class="myclass mceEditable">Contents</div>
```

Nested editable elements are not currently supported. For example, you would not be able to edit the cell contents in the following table:

```html
<table class="mceNonEditable">
  <tr>
    <td class="mceEditable">
        Contents
    </td>
  </tr>
</table>
```

### Options

These settings affect the execution of the `noneditable` plugin. These settings help determine which areas of the editor's editable area will remain editable and which will be converted to non-editable status.

### `noneditable_editable_class`

This option allows you to specify the class name that TinyMCE will use to determine which areas of content are editable when using the `noneditable` plugin. This would be the the same as `contenteditable=true`, forcing an element to be editable.

Note that classes with the `mceItem` prefix are invisible within TinyMCE.

**Type:** `String`

**Default Value:** `"mceEditable"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "noneditable",
    noneditable_editable_class: "mceEditable"
});
```

### `noneditable_noneditable_class`

This option allows you to specify the class name that TinyMCE will use to determine which areas of content are editable when using the `noneditable` plugin. This would be the same as `contenteditable=false`.

Note that classes with the `mceItem` prefix is invisible within TinyMCE.

**Type:** `String`

**Default Value:** `"mceNonEditable"`

**Example**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "noneditable",
    noneditable_editable_class: "mceEditable"
});
```

### `noneditable_regexp`

This option allows you to specify a regular expression or array of regular expressions that TinyMCE will use to determine which areas of content are noneditable when using the `noneditable` plugin.

**Type:** `String`

**Eexample:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "noneditable",
    noneditable_regexp: "<a href=\"(.*?)\"></a>"
});
```



## pagebreak

// adds menu control (under Insert menu)

// adds toolbar control

This plugin adds page break support and enables a user to insert page breaks in the editable area. This is useful where a CMS uses a special separator to break content into pages.

It also adds a toolbar control and a menu item `Page break` under the `Insert` menu dropdown.

**Type:** `String`

**Default Value:** `"<!-- pagebreak -->"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "pagebreak",
    menubar: "insert",
    toolbar: "pagebreak"
});
```

### Options

These settings affect the execution of the `pagebreak` plugin. They enable you to specify how the page break should be generated in the HTML source code and determine whether the page break element(s) should be wrapped in `<p>`tags`</p>`.

### `pagebreak_separator`

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "pagebreak",
    menubar: "insert",
    toolbar: "pagebreak"
    pagebreak_separator: "<!-- my page break -->"
});
```

### `pagebreak_split_block`

When enabled this option makes it easier to split block elements with a page break.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "pagebreak",
    menubar: "insert",
    toolbar: "pagebreak"
    pagebreak_split_block: true
});
```



## paste

// adds menu control (under Edit menu)

// adds toolbar controls

This plugin will filter/cleanup content pasted from Microsoft Word. The power of the plugin is in its options, so please take the time to learn more about these below.

Note that the toolbar button won't work in browsers that don't support direct access to the clipboard. In such cases the user will be presented with a modal advising them of this along with a reminder of standard keyboard shortcuts.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste"
});
```

### Options

These settings affect the way content is eliminated or preserved when being pasted. In addition, callbacks are available prior to and after content filtration.

### `paste_data_images`

This option specifies whether `data:url` images (inline images) should be removed or not from the pasted contents.

Setting `paste_data_images` to `"true"` will allow the pasted images, while setting it to `"false"` will disallow pasted images.

For example, Firefox enables you to paste images directly into any `contentEditable` field. This is normally not something people want, so this option is `"false"` by default since, say, a 600kb embedded image blocks page loads and prevents it form being cached on multiple pages.

**Type:** `Boolean`

**Default Value:** `false`

**Possbile Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste"
    paste_data_images: true
});
```

### `paste_as_text`

This option enables you to set the default state of the `Paste as text` menu item, which is added by the `paste` plugin under the `Edit` menu dropdown. It's disabled by default.

**Type:** `Boolean`

**Default Value:** `false`

**Possbile Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste"
    paste_as_text: true
});
```

### `paste_enable_default_filters`

This option allows you to disable TinyMCE's default paste filters when set to false.

**Type:** `Boolean`

**Default Value:** `true`

**Possbile Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste",
    paste_enable_default_filters: false
});
```

### `paste_filter_drop`

// From current Wiki: "You don't have permissions to edit this page. You need to be an Wiki Member to be able to edit the wiki. Send a mail to info@moxiecode.com to request access."

### `paste_preprocess`

This option enables you to modify the pasted content before it gets inserted into the editor.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste",
    paste_preprocess: function(plugin, args) {
        console.log(args.content);
        args.content += ' preprocess';
    }
});
```

### `paste_postprocess`

This option enables you to modify the pasted content before it gets inserted into the editor but after it's been parsed into a DOM structure.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste",
    paste_postprocess: function(plugin, args) {
        console.log(args.node);
        args.node.setAttribute('id', '42');
    }
});
```

### `paste_word_valid_elements`

This option enables you to configure the `valid_elements` specific to MS Office. Word produces a lot of junk HTML so when users paste things from Word we do extra restrictive filtering on it to remove as much of this as possible. This option enables you to specify which elements and attributes you want to include when Word contents are intercepted.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste",
    paste_word_valid_elements: "b,strong,i,em,h1,h2"
});
```

### `paste_webkit_styles`

This options allows you to specify styles you want to keep when pasting in WebKit. WebKit has a (nasty) bug where it will take all the computed CSS properties for an element and add them to spans within the editor. Since most users don't want random spans added all over their document, we need to manually clean that up until the bug is fixed. This option defaults to `"none"` but can be set to `"all"` or a specific list of styles to retain.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste",
    paste_webkit_styles: "color font-size"
});
```

### `paste_retain_style_properties`

This options allows you to specify which styles you want to retain when pasting contents from MS Word and similar Office suite products. This option can be set to a space separated list of css style names, or `"all"` if you want all styles to be retained.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste",
    paste_retain_style_properties: "color font-size"
});
```

### `paste_merge_formats`

This option enables the merge format feature of the paste plugin. This merges similar text formats to reduce the number of HTML elements produced. For example this `<b>abc <b>bold</b> 123</b>` becomes `<b>abc bold 123</b>` since the inner format is basically redundant. This option is enabled by default but can be disabled if retaining nesting or similar formats is important.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste",
    paste_merge_formats: false
});
```

### `paste_convert_word_fake_lists`

This option lets you disable the logic that converts list like paragraph structures into real semantic HTML lists.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste",
    paste_convert_word_fake_lists: false
});
```

### `paste_remove_styles_if_webkit`

This option allows you to disable TinyMCE's default paste filters for webkit styles.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "paste",
    menubar: "edit",
    toolbar: "paste",
    paste_remove_styles_if_webkit: false
});
```



## preview

// adds menu control (under View menu)

// adds toolbar control

This plugin adds a preview button to TinyMCE. Pressing the button opens a popup showing the current content.

**Type:** `String`

**Default Value:**

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "preview",
    menubar: "view",
    toolbar: "preview"
});
```

### Options

These settings affect the execution of the `preview` plugin. The height and width of the preview dialog box may be set here.

### `plugin_preview_height`

This option allows you to set the height of the preview window that appears when using the `preview` plugin.

**Type:** `Integer`

**Default Value:** `"500"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "preview",
    menubar: "view",
    toolbar: "preview",
    plugin_preview_height: "500"
});
```

### `plugin_preview_width`

This option allows you to set the width of the preview window that appears when using the `preview` plugin.

**Type:** `Integer`

**Default Value:** `"650"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "preview",
    menubar: "view",
    toolbar: "preview",
    plugin_preview_width: "650"
});
```



## print

// adds menu control (under File menu)

// adds toolbar control

This plugin adds a print button to TinyMCE's toolbar. It also adds a `Print` item to the File menu dropdown.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "print",
    menubar: "file",
    toolbar: "print"
});
```



## save

// adds toolbar control

This plugin adds a save button to the TinyMCE toolbar, which will submit the form that the editor is within.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "save",
    toolbar: "save"
});
```

**Error messages**

The `"Error: Form submit field collision."` error message will appear if you call the submit button of your form "submit", which causes a collision with the JS form `submit` function and makes it impossible to submit the form using code. This can easily be avoided by naming the submit button `"submitbtn"` or similar.

So replace this:

```html
<form><button name="submit"></button></form>
```

With this:

```html
<form><button name="submitbtn"></button></form>
```

### Options

These settings affect the execution of the `save` plugin. Callbacks that will execute after saving the content or cancelling saving the content are included in this section. In addition, a setting that will disable the save button when no modifications have been made to the content is available here.

### `save_enablewhendirty`

This option allows you to disable the save button until modifications have been made to the content of the editor. This option is enabled by default.

**Type:** `Boolean`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "save",
    toolbar: "save",
    save_enablewhendirty: true
});
```

### `save_oncancelcallback`

This option allows you to specify the function that will be executed when the cancel button/command is invoked.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "save",
    toolbar: "save",
    save_oncancelcallback: function () { console.log('Save cancelled'); }
});
```

### `save_onsavecallback`

This option allows you to specify the function that will be executed when the save button/command is invoked.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "save",
    toolbar: "save",
    save_onsavecallback: function () { console.log('Saved'); }
});
```



## searchreplace

// adds menu control (under Edit menu)

// adds toolbar control

This plugin adds search/replace dialogs to TinyMCE. It also adds a toolbar control and the menu item `Find and replace` under the `Edit` menu dropdown.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "searchreplace",
    menubar: "edit",
    toolbar: "searchreplace"
});
```



## spellchecker

// adds menu control (under Tools menu)

// adds toolbar control

This plugin enables TinyMCE's spell check functionality. It also adds a toolbar control and the menu item `Spellcheck` under the `Tools` menu dropdown.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "spellchecker",
    menubar: "tools",
    toolbar: "spellchecker"
});
```

## Options

These settings affect the execution of the `spellchecker` plugin by modifying how spellchecking is handled.

### `spellchecker_callback`

This option lets you override the default server side request/communication logic for the spellchecker.

**Example of a basic override without using a server**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "spellchecker",
    menubar: "tools",
    toolbar: "spellchecker",
    spellchecker_callback: function(method, text, success, failure) {
      var words = text.match(this.getWordCharPattern());
      if (method == "spellcheck") {
        var suggestions = {};
        for (var i = 0; i < words.length; i++) {
        suggestions[words[i]] = ["First", "Second"];
      }
      success(suggestions);
      }
 }
```

**Example of fallback for the older JSON-RPC based format**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "spellchecker",
    menubar: "tools",
    toolbar: "spellchecker",
      spellchecker_callback: function(method, text, success, failure) {
        tinymce.util.JSONRequest.sendRPC({
            url: "/tinymce/spellchecker.php",
            method: "spellcheck",
            params: {
              lang: this.getLanguage(),
              words: text.match(this.getWordCharPattern())
            },
            success: function(result) {
              success(result);
            },
            error: function(error, xhr) {
              failure("Spellcheck error:" + xhr.status);
            }
      });
    }
});
```

### `spellchecker_language`

This configuration option lets you set the default language code for the spellchecker. This defaults to "en".

**Type:** `String`

**Default Value:**  `en`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "spellchecker",
    menubar: "tools",
    toolbar: "spellchecker",
    spellchecker_language: 'sv_SE'
});
```

### `spellchecker_languages`

This option lets you specify a list of languages for the user to select from. The list is added to the spell check toolbar icon. The format is based on the 3.x `spellchecker` format.

**Type:** `String`

**Default Value:** `'English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,' +
    'German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv'`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "spellchecker",
    menubar: "tools",
    toolbar: "spellchecker",
    spellchecker_language: 'English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,' +
        'German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv'
});
```

### `spellchecker_rpc_url`

This options enables you to specify a custom URL to be used for the spell checker. This can be the `spellchecker` url provided by the TinyMCE `spellchecker` packages or a url to a page that you have in your system. The URL is **relative** to the `spellchecker` plugin.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "spellchecker",
    menubar: "tools",
    toolbar: "spellchecker",
    spellchecker_rpc_url: 'spellchecker.php'
});
```

### Spellchecker request format

The request is a HTTP POST with URL encoded parameters described below.

| Parameter | Description |
|-----------|-------------|
| method    | Default to "spellcheck" might be other things in the future for storing custom dictionaries etc. |
| text      | Text to spellcheck this will contain a plain text version of the current editor contents. |
| lang      | The currently selected language code for example "en" or "sv_SE". |

### Spellchecker response format

The response of a successful spellcheck request should like this:

```js
{
    "words": {
         "misspelled1": ["suggestion1", "suggestion2"],
         "misspelled2": ["suggestion1", "suggestion2"]
    }
}
```

And if there was an error:

```js
{
    "error": "Error message"
}
```

### `spellchecker_wordchar_pattern`

This option enables you to override the matching of characters that are parts of words. By default it will treat anything that isn't a space, comma, dot, dash, quote, etc, as parts of a word. For some languages or environments it might be useful to override this behavior.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "spellchecker",
    menubar: "tools",
    toolbar: "spellchecker",
    spellchecker_wordchar_pattern: /[^\s,\.]+/g
});
```



## tabfocus

This plugin adds the possibility to tab in/out of TinyMCE.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "tabfocus"
});
```

### Options

This setting affects the execution of the `tabfocus` plugin. This setting can be used to change the focus behaviour of the editor when the tab key has been pressed inside the editable area.

### `tabfocus_elements`

This option enables you to specify an element `ID` to focus, when the user pressed the tab key inside the editor. You can also use the special `":prev"` and `":next"` values. It will then place the focus on either the previous or next input element placed before/after the TinyMCE instance in the DOM.

**Type:** `String`

**Example:**

```js
// Move focus to specific element
tinymce.init({
        ...
        tabfocus_elements: "somebutton"
});
```

```js
// Move focus to next element in DOM
tinymce.init({
        ...
        tabfocus_elements: ":prev,:next"
});
```



## table

// adds menu control (new Table menu)

// adds toolbar control

The `table` plugin adds table management functionality to TinyMCE. It also adds a toolbar control and a new menu item `Table`.

**Type:** `String`

**Example:**

```js
tinymce.init({
    plugins: "table",
    menubar: "table",
    toolbar: "table"
    // tools: "inserttable"
});
```

### Options

These settings affect the execution of the `table` plugin and let you modify the default styles and attributes for tables, preset class lists and table behavior.

### `table_appearance_options`

// From current Wiki: "You don't have permissions to edit this page. You need to be an Wiki Member to be able to edit the wiki. Send a mail to info@moxiecode.com to request access."

### `table_clone_elements`

This option enables you to specify which elements should be cloned as empty children when inserting rows/columns to a table. By default it will clone these "`strong` `em` `b` `i` `span` `font` `h1` `h2` `h3` `h4` `h5` `h6` `p` `div`" into new cells.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    table_clone_elements: "strong em a"
});
```

### `table_grid`

This option allows you disable the table grid feature of the table menu. The grid feature (which is enabled by default) consists of a dragable matrix that a user can interact with to automatically create a table of x-rows by x-columns based upon their input.

However, if you set this option to `false` the dragable matrix will be replaced with a table dialog box into which a user can enter various parameters to create a table (e.g. cols, rows, width, height, cell spacing, cell padding, border, caption and alignment). There are also advanced style options available in the dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:**  `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_grid: false
});
```

### `table_tab_navigation`

This option enables you to disable the default tab between table cells feature. By default, when a user presses tab the cursor will move between cells within the table. By setting the `table_tab_navigation` value to `false` the cursor will tab between browser elements (such as the url bar or form fields, etc).

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_tab_navigation: false
});
```

### `table_default_attributes`

This option enables you to specify default attributes for inserted tables.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_default_attributes: {
        title: 'My table'
    }
});
```

### `table_default_styles`

This option enables you to specify default styles for inserted tables.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_default_styles: {
        fontWeight: 'bold'
    }
});
```

### `table_class_list`

This option enables you to specify a list of classes to present in the table options dialog box. This is useful if you want users to assign predefined classes to table elements.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### `table_cell_class_list`

This option enables you to specify a list of classes to present in the table cell options dialog box. This is useful if you want users to assign predefined classes to table cells.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_cell_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### `table_row_class_list`

This option enables you to specify a list of classes to present in the table row options dialog. This is useful if you want users to assign predefined classes to table rows.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_row_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### `table_advtab`

This option makes it possible to disable the advanced tab in the table dialog box. The advanced tab allows a user to input `style`, `border color` and `background color` values.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_advtab: false
});
```

### `table_cell_advtab`

This option makes it possible to disable the advanced tab in the table cell dialog box. The advanced tab allows a user to input `style`, `border color` and `background color` values.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_cell_advtab: false
});
```

### `table_row_advtab`

This option makes it possible to disable the advanced tab in the table row dialog box. The advanced tab allows a user to input `style`, `border color` and `background color` values.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "table",
    menubar: "table",
    toolbar: "table",
    table_row_advtab: false
});
```



## template

// adds menu control (under Insert menu)

// adds toolbar control

The `template` plugin adds support for custom templates. It also adds a menu item `Insert template` under the `Insert` menu and a toolbar control.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
});
```

There are two types of files the `template` plugin supports: *templates* and *snippets*. We will first review the plugin options before moving on to some examples.

### Options

These settings affect the execution of the `template` plugin. Predefined templates for items such as created dates and modified dates can be set here.

### `templates`

This option lets you specify a predefined list of templates to be inserted by the user into the editable area. It is structured as an array with each item having a `title`, `description` and `content`/`url`.

If this option is a string then it will be requested as a URL that should produce a JSON output in the same format the option accepts.

Each item in the list can either be inline using a `content` property or a whole file using the `url` property.

**Example using templates object:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
    templates: [
        {title: 'Some title 1', description: 'Some desc 1', content: 'My content'},
        {title: 'Some title 2', description: 'Some desc 2', url: 'development.html'}
    ]
});
```

**Example using templates url**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
    templates: "/dir/templates.php"
});
```

**Example JSON output of templates.php**

```json
[
    {"title": "Some title 1", "description": "Some desc 1", "content": "My content"},
    {"title": "Some title 2", "description": "Some desc 2", "url": "development.html"}
]
```

### `template_cdate_classes`

This option allows you to provide a list of class names (separated by spaces) whereby any template element with one of the classes will have its content replaced by the 'creation' date (`creationdate`), formatted according to the `template_cdate_format` option.

A creation date is one that is set if no previous date existed within the element. Once set, the original date is stored inside the element in a HTML comment and is designed not to change even with a template change.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
    template_cdate_classes: "cdate creationdate"
});
```

### `template_cdate_format`

This option allows you to provide a date format that all 'creation' date templates will be replaced by.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
    template_cdate_format: "%m/%d/%Y : %H:%M:%S"
});
```

### `template_mdate_classes`

This option allows you to provide TinyMCE with a list of class names (separated by spaces) whereby any template element with one of the classes will have its content replaced by the 'modified' date (`modifieddate`), formatted according to the `template_mdate_format` option.

A modified date is one that is updated with each edit.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
    template_mdate_classes: "mdate modifieddate"
});
```

### `template_mdate_format`

This option allows you to provide TinyMCE with a date/time format that all 'modified' date templates will be replaced with.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
    template_mdate_format: "%m/%d/%Y : %H:%M:%S"
});
```

### `template_popup_height`

This option allows you to specify the height of the template dialog box.

**Type:** `String`

**Default Value:** `"500"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
    template_popup_height: "400"
});
```

### `template_popup_width`

This option allows you to specify the width of the template dialog box.

**Type:** `String`

**Default Value:** `"600"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
    template_popup_width: "300"
});
```

### `template_replace_values`

This is an array of items that controls content replacement in the inserted templates. The array keys equal the classnames used in the template. If a template element matches a classname in this array its contents will be replaced by the array value.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template"
    template_replace_values: {
        username: "Jack Black",
        staffid: "991234"
    }
```

**Replace values example**

Class names are used for *templates* and variable names are used for *snippets*.

```js
template_replace_values : {
    className : "Replace with this content",
    anotherClassName: "Replacement content"
}
```

**Replace values (functions) example**

`template_replace_values` array values can also be functions. If a template element has a classname matching and where the value is a fuction, the function is called and the element passed as an argument.

```js
template_replace_values : {
    className : function(element) {
      // do something and then:
      // element.innerHTML = something
  }
}
```

### `template_selected_content_classes`

This option allows you to provide a list of class names (separated by spaces) whereby any template element with one of the classes will have its content replaced by the selected editor content when first inserted.


**Example:**

```js
tinymce.init({
    plugins: "template",
    template_selected_content_classes: "selcontent selectedcontent"
});
```

### `template_preview_replace_values`

// This key is not linked in the source docs, i.e. no content.


### Template Plugin Examples

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "template",
    menubar: "insert",
    toolbar: "template",
    template_cdate_classes: "cdate creationdate",
    template_mdate_classes: "mdate modifieddate",
    template_selected_content_classes: "selcontent",
    template_cdate_format: "%m/%d/%Y : %H:%M:%S",
    template_mdate_format: "%m/%d/%Y : %H:%M:%S",
    template_replace_values: {
        username : "Jack Black",
        staffid : "991234"
    },
    template_popup_height: "400",
    template_popup_width: "320",
    templates : [
        {
            title: "Editor Details",
            url: "editor_details.htm",
            description: "Adds Editor Name and Staff ID"
        },
        {
            title: "Timestamp",
            url: "time.htm",
            description: "Adds an editing timestamp."
        }
    ]
});
```

**Templates example:**

```js
    templates : [
      {
        title: "Editor Details",
        url: "editor_details.htm",
        description: "Adds Editors Name and Staff ID"
      }
    ]
```

**Example of an external list:**

This is the contents your backend page should return if you specify a URL in the templates option. A simple array containing each template to present. This URL can be a backend page, for example a PHP file.

```json
[
  {"title": "Some title 1", "description": "Some desc 1", "content": "My content"},
  {"title": "Some title 2", "description": "Some desc 2", "url": "development.html"}
]
```

### Making Templates

A template is a file with a `div` containing the template data. All `html` outside the `div` will simply be presented to the user in the preview frame.

A template has more capabilities than a simple snippet, for example, a template can have dynamic content/smart content that gets updated by functions located in the `template_replace_values` key. These functions will continue to be executed each time a cleanup procedure is performed.

Each template needs to use the following base HTML:

```html
<!-- This will not be inserted -->
<div class="mceTmpl">
    <table width="98%%"  border="0" cellspacing="0" cellpadding="0">
        <tr>
            <th scope="col"> </th>
            <th scope="col"> </th>
        </tr>
        <tr>
            <td> </td>
            <td> </td>
        </tr>
    </table>
</div>
```

### Making Snippets

Snippets are `html` code chunks that can be inserted. Replace variables will only be executed upon insert, without being wrapped in a template `div` element. So if you define `somevar1` in `template_replace_values` array it will be replaced on preview and insert.

```html
This is a simple <strong>snippet</strong>. Will be replaced: {$somevar1}.
```



## textcolor

// adds toolbar control

This plugin adds the forecolor/backcolor button controls that enable you to pick colors from a color picker and apply these to text.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "textcolor",
    toolbar: "forecolor backcolor"
});
```

### Options

These settings affect the execution of the `textcolor` plugin. The dimensions and mapping of the grid of text colors may be set here.

### `textcolor_cols`

This option allows you to specify how many columns appear on the grid of text colors.

**Type:** `String`

**Default Value:** `"8"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "textcolor",
    toolbar: "forecolor backcolor",
    textcolor_cols: "5"
});
```

### `textcolor_rows`

This option allows you to specify how many rows appear on the grid of text colors.

**Type:** `String`

**Default Value:** `"5"`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "textcolor",
    toolbar: "forecolor backcolor",
    textcolor_rows: "4"
});
```

### `textcolor_map`

This option allows you to specify a map of the text colors that will appear in the grid.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "textcolor",
    toolbar: "forecolor backcolor",
    textcolor_map: [
    "000000", "Black",
    "993300", "Burnt orange",
    "333300", "Dark olive",
    "003300", "Dark green",
    "003366", "Dark azure",
    "000080", "Navy Blue",
    "333399", "Indigo",
    "333333", "Very dark gray",
    "800000", "Maroon",
    "FF6600", "Orange",
    "808000", "Olive",
    "008000", "Green",
    "008080", "Teal",
    "0000FF", "Blue",
    "666699", "Grayish blue",
    "808080", "Gray",
    "FF0000", "Red",
    "FF9900", "Amber",
    "99CC00", "Yellow green",
    "339966", "Sea green",
    "33CCCC", "Turquoise",
    "3366FF", "Royal blue",
    "800080", "Purple",
    "999999", "Medium gray",
    "FF00FF", "Magenta",
    "FFCC00", "Gold",
    "FFFF00", "Yellow",
    "00FF00", "Lime",
    "00FFFF", "Aqua",
    "00CCFF", "Sky blue",
    "993366", "Red violet",
    "FFFFFF", "White",
    "FF99CC", "Pink",
    "FFCC99", "Peach",
    "FFFF99", "Light yellow",
    "CCFFCC", "Pale green",
    "CCFFFF", "Pale cyan",
    "99CCFF", "Light sky blue",
    "CC99FF", "Plum"
  ]
});
```



## textpattern

This plugin matches special patterns in the text and applies formats or executed commands on these patterns.

The default pattern is similar to markdown syntax, so you can type `# text` to produce a header or `**text**` to make text **bold**.

**Type:** `String`

**Example:**

```js
tinymce.init({
    plugins: "textpattern"
});
```

### Options

This setting affects the execution of the `textpattern` plugin. Text patterns that are matched by the editor can be changed here.

### `textpattern_patterns`

This option lets you configure the text patterns that get matched by the `textpattern` plugin. By default it has basic markdown patterns.

There are two types of patterns: inline and block patterns. Inline patterns have a start and end whereas the block-based patterns only have a start. You can specify formats to be applied to the selection or commands to be executed.

**Example:**

```js
tinymce.init({
     plugin: 'textpattern',
     textpattern_patterns: [
         {start: '*', end: '*', format: 'italic'},
         {start: '**', end: '**', format: 'bold'},
         {start: '#', format: 'h1'},
         {start: '##', format: 'h2'},
         {start: '###', format: 'h3'},
         {start: '####', format: 'h4'},
         {start: '#####', format: 'h5'},
         {start: '######', format: 'h6'},
         {start: '1. ', cmd: 'InsertOrderedList'},
         {start: '* ', cmd: 'InsertUnorderedList'},
         {start: '- ', cmd: 'InsertUnorderedList'}
    ]
});
```



## visualblocks

// adds menu control (under View menu)

// adds toolbar control

This plugin allows a user to see block level elements in the editable area. It is similar to WYSIWYG hidden character functionality but, of course, at block level. It also adds a toolbar control and a menu item `Show blocks` under the `View` menu.

It's worth noting that at present the toolbar button icon is the same for both `visualblocks` and `visualchars`.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "visualblocks",
    menubar: "view",
    toolbar: "visualblocks"
});
```

### Options

This setting affects the execution of the `visualblocks` plugin. You may specify whether blocks are visible by default here.

### `visualblocks_default_state`

This option enables you to specify the default state of the visualblocks plugin.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "visualblocks",
    menubar: "view",
    toolbar: "visualblocks"
    visualblocks_default_state: true
});
```



## visualchars

// adds menu control (under View menu)

// adds toolbar control

This plugin adds the ability for users to see invisible characters like `&nbsp;` displayed in the editable area. It also adds a toolbar control and a menu item `Show invisible characters` under the `View` menu.

It's worth noting that at present the toolbar button icon is the same for both `visualblocks` and `visualchars`.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "visualchars",
    menubar: "view",
    toolbar: "visualchars"
});
```



## wordcount

This plugin adds word count functionality to TinyMCE, placing a counter in the bottom right of the editor instance (outside the editable area).

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "wordcount"
});
```

### Options

These settings affect the execution of the `wordcount` plugin. The regex values that determine how words are cleaned and counted may be set here.

### `wordcount_cleanregex`

This option allows you to specify the regex that will be used to *strip punctuation and numbers* from the word count.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "wordcount",
    wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g
});
```

### `wordcount_countregex`

This option allows you to specify the regex that will be used to *count the words* for the word count.

**Type:** `String`

**Example:**

```js
tinymce.init({
    plugins: "wordcount",
    wordcount_countregex: /[\w\u2019\x27\-\u00C0-\u1FFF]+/g
});
```
