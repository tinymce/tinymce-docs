---
layout: default
title: Plugins & Toolbar/Menu Controls
---

TinyMCE is an incredibly powerful and flexible rich text editor. This section will help you customize and extend your editor instance. We'll first look at the default core toolbar and menubar control before moving on to TinyMCE's real power: plugins.

# Core Controls

TinyMCE contains a set of core toolbar and menubar controls, things such as bold, italic, underline and so on. Basically the core settings you would typically find in any WYSIWYG editor.

Here is the complete list of available core **Toolbar Controls**, in space separated format.

```
newdocument bold italic underline strikethrough alignleft aligncenter alignright alignjustify styleselect formatselect fontselect fontsizeselect cut copy paste bullist numlist outdent indent blockquote undo redo removeformat subscript superscript
```

And here are the **Menubar Controls**, again in space separated format.

```
newdocument undo redo visualaid cut copy paste selectall bold italic underline strikethrough subscript superscript removeformat formats
```

> Important! If a toolbar or menubar control is associated with plugin functionality, we highlight that relationship under its respective plugin entry below. Look for the icons.

A note for first time users: TinyMCE instantiates a set of default toolbar and menubar controls if no controls are declared. See the example in the [Quick Start](/quick-start).

If you wish to exclude either of these controls the value of `menubar` and/or `toolbar` should be `"none"`. To remove the toolbar and menu bar completely:

```js
tinymce.init({
    menubar: "none",
    toolbar: "none"
});
```



# Plugins
The real power of TinyMCE's functionality is in its (so-called) plugins. The plugins listed below are included in the standard TinyMCE package, such as the one served via the CDN.

It's important to note that some plugins have advanced options requiring a little more configuration than simply including the plugin name as a value in the `plugins` key. An example of this is the Advanced List plugin `advlist` below. So let's get to it.



## advlist

The `advlist` plugin adds CSS `list-style-type` style number formats and bullet types to the editor's default list controls.

By default all list options within the plugin are included. If you want to include specific list values (and exclude the default values) use the `advlist_bullet_styles` and `advlist_number_styles` options.

**Default Value**: `"default,circle,disc,square"` and `"default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman"`

**Example**

```js
tinymce.init({
    selector: "textarea", // change this value according to your html
    plugins: "advlist"
});
```

### Options

These settings affect the execution of the Advlist Plugin by providing more granular control of `advlist` default settings.

### `advlist_bullet_styles`

This option allows you to specify the style of unordered list item markers.

**Type**: `String`

**Default Value**: `"default,circle,disc,square"`

**Possible Values**:

  * `circle`: a filled circle
  * `disc`: a hollow circle
  * `square`: a filled square

**Example**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "advlist",
    advlist_bullet_styles: "square"  // your list will only include a square bullet option
});
```

### `advlist_number_styles`

This option allows you to specify the style of ordered list item markers.

**Type**: `String`

**Default Value**: `"default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman"`

**Possible Values**:

  * `lower-alpha`: lowercase ASCII letters, e.g. a, b, c, ... z
  * `lower-greek`: lowercase classical Greek (alpha, beta, gamma), e.g. α, β, γ ...
  * `lower-roman`: lowercase roman numerals, e.g. i, ii, iii, iv, v ...
  * `upper-alpha`: uppercase ASCII letters, e.g. A, B, C, ... Z
  * `upper-roman`: uppercase roman numerals, e.g. I, II, III, IV, V ...

**Example**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "advlist",
    advlist_number_styles: "lower-alpha"  // your list will only include a lower alpha letter option
});
```



# anchor

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds an anchor/bookmark button and menu.

Initialization Example

```js
tinymce.init({
    plugins: "anchor",
    toolbar: "anchor"
});
```



# autolink

Normalizes behaviour with IE that produces links when you simply type links in the content window.

Initialization Example

```js
tinymce.init({
    plugins: "autolink"
});
```



# autoresize

This is a plugin which automatically resizes the editor to the content inside it.

To activate this plugin, just add "autoresize" to TinyMCE plugin option list.

Initialization Example

```js
tinymce.init({
    plugins: "autoresize"
});
```

## autoresize Options

These settings affect the execution of the autoresize plugin. The minimum width, height and other settings related to autoresizing the editor are available here.

### autoresize_bottom_margin

This option allows you to specify the size of the padding at the bottom of the editor's body that TinyMCE sets on initialization.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "autoresize",
    autoresize_bottom_margin: "50"
});
```

### autoresize_min_height

This option enables you to specify the minimum height for the editor when it's resized by the user.

Example

```js
tinymce.init({
    autoresize_min_height: 500
});
```

### autoresize_max_height

This option enables you to specify the maximum height for the editor when it's resized by the user.

Example

```js
tinymce.init({
    autoresize_max_height: 500
});
```

### autoresize_on_init

This option allows you to set whether the editor will attempt to resize itself upon initialization. By default this option is set to true.

An example of disabling this setting is as follows:

```js
tinymce.init({
    plugins: "autoresize",
    autoresize_on_init: false
});
```

### autoresize_overflow_padding

This option allows you to specify the size of the padding at the sides of the editor's body that TinyMCE sets on initialization.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "autoresize",
    autoresize_overflow_padding: "50"
});
```



# autosave

This plugin gives the user a warning if they made modifications to a editor instance but didn't submit them. This plugin will most likely be extended in the future to provide AJAX auto save support.

Initialization Example

```js
tinymce.init({
    plugins: "autosave"
});
```

# autosave Options

These settings affect the execution of the AutoSave plugin. The settings here will affect the interval, duration and behaviour of locally stored drafts of the current editor instance.

### autosave_ask_before_unload

This option allows you to set whether the editor should prompt the user that they have unsaved changes when attempting to close the current window. By default this option is enabled.

An example of disabling this setting is as follows:

```js
tinymce.init({
    plugins: "autosave",
    autosave_ask_before_unload: false
});
```

### autosave_interval

This option enables you to specify the time it should wait between making snapshots of the current contents and store it into local storage. This defaults to "30s" for 30 secounds.

Example

```js
tinymce.init({
    autosave_interval: "20s"
});
```

### autosave_prefix

This option allows you to set the prefix that is used for local storage keys.

An example showing the default value for this setting is as follows:

```js
tinymce.init({
    plugins: "autosave",
    autosave_prefix: "tinymce-autosave-{path}{query}-{id}-"
});
```

### autosave_restore_when_empty

This option enables you to specify if TinyMCE should automatically restore the contents stored in local storage when the editor is empty on initialization. This can be useful for more novice users that don't know that they can press the restore draft button/menu item to restore lost work if the browser crashed. This option is enabled by default but can be disabled.

Example

```js
tinymce.init({
    autosave_restore_when_empty: false
});
```

### autosave_retention

This option enables you to specify the time contents should remain in local storage. When contents is older than this time it will be ignored. This defaults to "20m" making it ignore contents older than 20 minutes.

Example

```js
tinymce.init({
    autosave_retention: "30m"
});
```



# bbcode

This plugin adds basic BBCode input/output to TinyMCE.

Initialization Example

```js
tinymce.init({
    plugins: "bbcode"
});
```

## bbcode Options

This setting affects the execution of the BBCode plugin. You may set the bbcode dialect here.

### bbcode_dialect

This option allows you to specify the BBCode dialect. We only support PunBB at the moment but hope to add more dialects in the future. When using the PunBB dialect codeStyle and quoteStyle will be converted into [code] and [quote] items.

An example showing the default value for this setting is as follows:

```js
tinymce.init({
    plugins: "bbcode",
    bbcode_dialect: "punbb"
});
```



# charmap

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds a charmap menu item and button that enables you to insert special characters.

Initialization Example

```js
tinymce.init({
    plugins: "charmap"
});
```



# code

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds a core menu item or button that allows you to edit the HTML code.

Initialization Example

```js
tinymce.init({
    plugins: "code"
});
```

## code Options

### code_dialog_width

// YOU DON'T HAVE PERMISSIONS TO EDIT THIS PAGE

// You need to be an Wiki Member to be able to edit the wiki. Send a mail to info@moxiecode.com to request access.

### code_dialog_height

// YOU DON'T HAVE PERMISSIONS TO EDIT THIS PAGE

// You need to be an Wiki Member to be able to edit the wiki. Send a mail to info@moxiecode.com to request access.



# colorpicker Plugin

This plugin adds a full blown colorpicker to the editor by setting the color_picker_callback.

Initialization Example

```js
tinymce.init({
    plugins: "colorpicker"
});
```



# compat3x

This plugin contains a few compatibility files for the old 3.x branch. This enables you to run most old 3.x plugins with out any modifications. You need to take a few steps to enable this plugin:

## Installation

Download the tinymce development package.
Copy the compat3x plugin to your site.
Copy utils and tiny_mce_popup.js to the root directory if tinymce where the tinymce.min.js file is located.
Add the compat3x plugin as your first plugin in the plugins init option or load it after the TinyMCE core.
(Optional) rename the old plugins editor_plugin.js file to plugin.min.js then you can load it as a normal plugin.

#### Example of usage in tinymce.init

```js
tinymce.init({
    plugins: "compat3x",
    external_plugins: {
        "myoldplugin": "/tinymce/plugins/myoldplugin/editor_plugin.js"
    }
});
```

#### Example of loading the compat3x before tinymce.init

```js
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



# contextmenu

This plugin adds a configurable context menu.

Initialization Example

```js
tinymce.init({
    plugins: "contextmenu",
    contextmenu: "link image inserttable | cell row column deletetable"
});
```

## contextmenu Options

These settings affect the execution of the Contextmenu plugin. The settings in this section allow direct control over how the contextmenu appears and what is included inside the contextmenu.

### contextmenu

This option allows you to specify which items should appear on TinyMCE's context menu.

To specify the menu items that should appear on TinyMCE's context menu, the contextmenu option should be provided with a space separated list of menu items. To create groups within this listing, please add "|" pipe characters between the groups of menu items that you would like to create.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    plugins: "contextmenu",
    contextmenu: "link image inserttable | cell row column deletetable",
    ...
});
```

### contextmenu_never_use_native

This option allows you to disable the browser's native context menu from appearing within the editor.

An example of this setting is as follows:

```js
tinymce.init({
    contextmenu_never_use_native: true
});
```



# directionality

// This plugin adds the following controls:

// toolbar controls

This plugin adds directionality icons to TinyMCE that enables TinyMCE to better handle languages that written from right to left.

## Installation Instructions

Add plugin to TinyMCE plugin option list example: plugins: "directionality".
Add the ltr, rtl button names to button list, example: toolbar: "ltr rtl".

Initialization Example

```js
tinymce.init({
    plugins: "directionality",
    toolbar: "ltr rtl"
});
```



# emoticons

// This plugin adds the following controls:

// toolbar controls

The emoticons plugin is able to insert smiley images into the TinyMCE editable area.

Initialization Example

```js
tinymce.init({
    plugins: "emoticons",
    toolbar: "emoticons"
});
```



# example

This plugin is an example plugin that you can use as a template for your custom plugin.

Initialization Example

```js
tinymce.init({
    plugins: "example"
});
```



# example_dependency

This plugin is an example plugin with a dependecy on another plugin.

Initialization Example

tinymce.init({
    plugins: "example_dependency"
});



# fullpage

This plugin adds fullpage editing support. This enables you to edit whole documents with both head and body.

Initialization Example

```js
tinymce.init({
    plugins: "fullpage",
    toolbar: "fullpage"
});
```

## fullpage Options

These settings affect the execution of the Fullpage plugin. Many of the settings here allow you to specify default values for the full page editing process.


### fullpage_default_langcode

This option enables you to specify the default langcode for the output HTML.

// Is there content for this option? Search site!

### fullpage_default_doctype

This option enables you to specify the default doctype for the output HTML.

Example of usage of the fullpage_default_doctype option

```js
tinymce.init({
    ...
    plugins: "fullpage",
    fullpage_default_doctype: "<!DOCTYPE html>"
});
```

### fullpage_default_encoding

This option enables you to specify the default encoding for the output HTML.

Example of usage of the fullpage_default_encoding option

```js
tinymce.init({
    ...
    plugins: "fullpage",
    fullpage_default_encoding: "UTF-8"
});
```

### fullpage_default_title

This option enables you to specify the default title for the output HTML.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "fullpage",
    fullpage_default_title: "TinyMCE - Configuration:fullpage_default_title"
});
```

### fullpage_default_fontsize

This option enables you to specify the default font size for body element.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "fullpage",
    fullpage_default_fontsize: "14px"
});
```

### fullpage_default_font_family

This option enables you to specify the default font family for body element.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "fullpage",
    fullpage_default_font_family: "'Times New Roman', Georgia, Serif;"
});
```

### fullpage_default_text_color

This option enables you to specify the default text color for body element.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "fullpage",
    fullpage_default_text_color: "blue"
});
```

### fullpage_default_xml_pi

This option enables you to specify if a XML declaration should be added or not true/false option.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "fullpage",
    fullpage_default_xml_pi: true
});
```

### fullpage_hide_in_source_view

This option allows you to specify whether TinyMCE should hide the non body content from source view.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "fullpage",
    fullpage_hide_in_source_view: true
});
```



# fullscreen

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds fullscreen editing mode to TinyMCE.

Initialization Example

```js
tinymce.init({
    plugins: "fullscreen",
    toolbar: "fullscreen"
});
```



# hr

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds a menu item and button control that allows you to insert a horizontal ruler on page.

Initialization Example

```js
tinymce.init({
    plugins: "hr"
});
```



# image

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds a insert image button and menu item.

Initialization Example

```js
tinymce.init({
    plugins: "image",
    image_list: [
        {title: 'My image 1', value: 'http://www.tinymce.com/my1.gif'},
        {title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif'}
    ]
});

```

## image Options

These settings affect the execution of the Image plugin. Many of the settings here will disable features of the dialog box used to insert or edit images. A predefined list of images can also be provided to enable quick insertion of these images.

### image_list

Array with items to add to a list with images. Each item having "title" and "value".

This option lets you specify a predefined list of sources for images.

#### Example

```js
tinymce.init({
    plugins: "image",
    image_list: [
        {title: 'Dog', value: 'mydog.jpg'},
        {title: 'Cat', value: 'mycat.gif'}
    ]
});
```

#### Example of JSON url with images

You can also configure an URL with JSON data the format of that list is the same as above:

```js
tinymce.init({
    plugins: "image",
    image_list: "/mylist.php"
});
```

#### Example of a custom async function

```js
tinymce.init({
  plugins: "image",
    image_list: function(success) {
      success([
        {title: 'Dog', value: 'mydog.jpg'},
        {title: 'Cat', value: 'mycat.gif'}
      ]);
  }
});
```

### image_advtab

True/false option if the advanced tab should be displayed or not.

This option enables the advanced tab the image dialog allowing you to add custom styles to images.

Example

```js
tinymce.init({
    plugins: "image",
    image_advtab: true
});
```

### image_class_list

Array with items to set classes on links.

This option lets you specify a predefined list of classes to add to an image.

Example

```js
tinymce.init({
    plugins: "image",
    image_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### image_description

This options allows you disable the image description input field in the image dialog.

Example of usage

```js
tinymce.init({
    ...
    plugins: "image"
    image_description: false
});
```

### image_dimensions

This options allows you disable the image dimesions input fields in the image dialog.

Example of usage

```js
tinymce.init({
    ...
    plugins: "image"
    image_dimensions: false
});
```

### image_title

This options allows you enable the image title input field in the image dialog.

Example of usage

```js
tinymce.init({
    ...
    plugins: "image"
    image_title: true
});
```

## image_prepend_url

This option allows you to specify a URL prefix that will be applied to images when appropriate.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "image",
    image_prepend_url: "http://www.tinymce.com/images/"
});
```



# imagetools

This plugin adds a contextual image editing toolbar on modern browsers that lets you edit images inline. Notice this feature at least requires IE 10 since it uses the HTML5 File API.

Initialization Example

```js
tinymce.init({
    plugins: "imagetools"
});
```

## imagetools Options

These settings affect the execution of the Imagetools plugin. This plugin's cross-origin resource sharing, proxy and toolbar settings can be modified here.

### imagetools_cors_hosts

This option lets you specify an array of domains that allow cors. If cors headers are enabled remote image editing is possible.

Example of usage of the imagetools_cors_hosts option:

```js
tinymce.init({
    ...
    imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com']
});
```

### imagetools_proxy

This option lets you specify a local proxy script to use when loading images from remote domains.

Example of usage of the imagetools_proxy option:

```js
tinymce.init({
    ...
    imagetools_proxy: 'proxy.php'
});
```

Example of a proxy.php script

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

### imagetools_toolbar

This option lets change what toolbar items you want to display in the imagetools contextual toolbar.

Available tools from the imagetools plugin:

* rotateleft
* rotateright
* flipv
* fliph
* editimage
* imageoptions

Example of usage of the imagetools_toolbar option:

```js
tinymce.init({
    ...
    imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions'
});
```



# importcss

This plugin adds the ability to automatically import CSS classes from the CSS file specified in content_css. By default selectors like ".my-class", ".my-class1.my-class2" and "p.my-class" gets imported as format rules.

Initialization Example

```js
tinymce.init({
    plugins: "importcss"
});
```

## importcss Options

These settings affect the execution of the ImportCSS plugin. This plugin adds the ability to import CSS classes from the file specified in the content_css configuration setting. The settings below affect the way that these operations are handled.

### importcss_append

If this option is set to true it will append the imported styles to the end of the "Formats" menu by default it will replace the default formats.

Example

```js
tinymce.init({
    importcss_append: true
});
```

### importcss_file_filter

This option enables you to add the CSS files that should be used for populating the styles drop down. This will go though any `@import` rules and only target the specified file. This option can be either a string, RegExp or a function. This also allows you to import styles form existing files on the currently editable page in inline mode.

Example of usage

```js
tinymce.init({
        ...
        importcss_file_filter: "my-styles.css"
});
```

### importcss_selector_filter

This option enables you to only import classes from selectors matching the filter. The filter can be a string, regexp or a function see the examples below.

Example of usage with string filter

```js
tinymce.init({
    ...
    importcss_selector_filter: ".my-prefix-"
});
```

Example of usage with RegExp filter

```js
tinymce.init({
    ...
    importcss_selector_filter: /\.prefix|\.otherprefix/
});
```

Example of usage with function filter

```js
tinymce.init({
    ...
    importcss_selector_filter: function(selector) {
        return selector.indexOf('myprefix') !== -1;
    }
});
```

### importcss_groups

This option enables group matching selectors into submenus in the formats dropdown. You can use a string, regexp or a function to filter selectors. You can also omit the filter to get all non matching ones into a specific group.

Example of usage with string filter

```js
tinymce.init({
    ...
    importcss_groups: [
        {title: 'Table styles', filter: /^(td|tr)\./}, // td.class and tr.class
        {title: 'Block styles', filter: /^(div|p)\./}, // div.class and p.class
        {title: 'Other styles'} // The rest
    ]
});
```

### importcss_merge_classes

This option allows to control if the class attribute should be replaced or merged. For example if you have multiple classes you can apply all of them to the same element. If this option is set to false it will always replace the contents of the class attribute.

Example

```js
tinymce.init({
    importcss_merge_classes: false
});
```

### importcss_selector_converter

This option allows you to override the default selector to format converter function. This allows you to parse the CSS selectors manually and produce format objects out of them. If the converter returns falsy value the selector is ignored from import.

Example

```js
tinymce.init({
    importcss_selector_converter: function(selector) {
        // Custom logic
    }
});
```

Example filtering compressed stylesheet using plugin callback

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



# insertdatetime

// This plugin adds the following controls:

// toolbar controls

// menu controls

Initialization Example

```js
tinymce.init({
    plugins: "insertdatetime",
    toolbar: "insertdatetime",
    insertdatetime_formats: ["%Y.%m.%d", "%H:%M"]
});
```

## insertdatetime Options

These settings affect the execution of the Insertdatetime plugin. Formats for both dates and times can be set here.

### insertdatetime_dateformat

This option allows you to override the default formatting rule for date formats inserted by the mceInsertDate command. This defaults to: %Y-%m-%d the different % variables gets replaced with various [format options](http://www.tinymce.com/wiki.php/Configuration:dateformats).

Example

```js
tinymce.init({
    insertdatetime_dateformat: "%Y-%m-%d"
});
```

### insertdatetime_formats

Allows you to specify a list of date/time formats to be used in the date menu or date select box. A complete list of formats is available in the [date formats](http://www.tinymce.com/wiki.php/Configuration:dateformats) page.

Example

```js
tinymce.init({
    insertdatetime_formats: ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"]
});
```

### insertdatetime_timeformat

This option allows you to override the default formatting rule for times inserted by the mceInsertTime command. This defaults to: %H:%M:%S the different % variables gets replaced with various [format options](http://www.tinymce.com/wiki.php/Configuration:dateformats).

Example

```js
tinymce.init({
    insertdatetime_timeformat: "%H:%M:%S"
});
```

### insertdatetime_element

When this option is enabled HTML5 time elements gets generated when you insert dates/times.

Example of usage

```js
tinymce.init({
    insertdatetime_element: true
});
```

#### Replacement variables

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



# layer

This plugin adds some layer controls. Only works on some browsers. Will probably be removed in the future.

Initialization Example

```js
tinymce.init({
    plugins: "layer"
});
```



# legacyoutput

This plugin will change the output for TinyMCE to produce legacy elements such as font, b, i, u, strike and use align attributes. This plugin can be useful if you want to use TinyMCE as a HTML mail client or to render contents to Flash.

This is NOT intended to be used for producing normal web contents in for example a CMS. These elements should no longer be used for such purposes since they are deprecated in the later XHTML and HTML5 specifications.

Initialization Example

```js
tinymce.init({
    plugins: "legacyoutput"
});
```



# link

// This plugin adds the following controls:

// toolbar controls

// menu controls

These settings affect the execution of the Link plugin. Predefined links, targets and more can be specified here.

## link Options

### default_link_target

This option allows you to set a default target for links when inserting/editing a link.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "link",
    default_link_target: "_blank"
});
```

### link_assume_external_targets

This option allows you to set whether TinyMCE will prompt the user to prepend a `http://` prefix if the supplied link does not already contain a protocol prefix.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "link",
    link_assume_external_targets: true
});
```

### link_class_list

Example of how to use link class list.

```js
tinymce.init({
    plugins: "link",
    link_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### link_list

This option lets you specify a predefined list of links for the link dialog.

#### Example of an array with links

```js
tinymce.init({
    plugins: "link",
    link_list: [
        {title: 'My page 1', value: 'http://www.tinymce.com'},
        {title: 'My page 2', value: 'http://www.moxiecode.com'}
    ]
});
```

#### Example of an array with links and sub-menu

Since [TinyMCE 4.0.27](http://www.tinymce.com/develop/changelog/?ctrl=version&act=view&pr_id=1&vr_id=867) it is now possible to have sub-menus within the link list. A TinyMCE Fiddle [example of nested sub-menus](http://fiddle.tinymce.com/wleaab) is available.

```js
tinymce.init({
    plugins: "link",
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

#### Example of a JSON URL with links

You can also configure an URL with JSON data the format of that list is the same as above:

```js
tinymce.init({
    plugins: "link",
    link_list: "/mylist.php"
});
```

#### Example of a custom async function

```js
tinymce.init({
    plugins: "link",
    link_list: function(success) {
        success([
             {title: 'My page 1', value: 'http://www.tinymce.com'},
             {title: 'My page 2', value: 'http://www.moxiecode.com'}
        ]);
    }
});
```

### target_list

Specify a predefined list of targets for the link dialog.

This defaults to a dialog containing the options `_self` and `_blank`

To disable the option dialog set target_list to **false**.

Examples:

Minimal default

```js
tinymce.init({
    plugins: "link"
});
```

Disable the target list option dialog

```js
tinymce.init({
    plugins: "link",
    target_list: false
  ]
});
```

Add a `_lightbox` target to the dropdown list

```js
tinymce.init({
    plugins: "link",
    target_list: [
        {title: 'None', value: ''},
        {title: 'Same page', value: '_self'},
        {title: 'New page', value: '_blank'},
        {title: 'LIghtbox', value: '_lightbox'}
  ]
});
```

### rel_list

This option lets you specify a predefined list of values for the link dialog. These values gets applied to the rel attribute.

Example

```js
tinymce.init({
    plugins: "link",
    rel_list: [
        {title: 'Lightbox', value: 'lightbox'},
        {title: 'Table of contents', value: 'toc'}
    ]
});
```

### link_title

This options allows you disable the link title input field in the link dialog.

Example of usage

```js
tinymce.init({
    ...
    plugins: "link"
    link_title: false
});
```



# media

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds the ability to add HTML5 video and audio elements to TinyMCE.

Initialization Example

```js
tinymce.init({
    plugins: "media"
});
```

## media Options

These settings affect the execution of the Media plugin. You may disable parts of the media dialog box when inserting/editing media items through these settings. In addition, the user may disable the cross-site scripting sanitation filter for video/object elements here.

### audio_template_callback

This option allows you to specify the function that will return the html embed code of the audio media that you are attempting to insert into tinymce.

An example of such a function is as follows:

```js
tinymce.init({
    plugins: "media",
    audio_template_callback: function(data) {
       return '<audio controls>' +
            '\n<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' +
       '</audio>';
   }
});
```

### media_alt_source

This options allows you disable alternative source input field in the media dialog.

Example of usage

```js
tinymce.init({
    ...
    plugins: "media"
    media_alt_source: false
});
```

### media_poster

This options allows you disable poster input field in the media dialog.

Example of usage

```js
tinymce.init({
    ...
    plugins: "media"
    media_poster: false
});
```

### media_dimensions

This options allows you disable dimensions input fields in the media dialog.

Example of usage

```js
tinymce.init({
    ...
    plugins: "media"
    media_dimensions: false
});
```

### media_filter_html

This options allows you disable the XSS sanitation filter for video/object elements. Scripts, conditional comments etc can't be used within these elements by default for security reasons. If you wan't to have that in there and have server side sanitizers or you trust your users then you can disable this feature.

Example of usage

```js
tinymce.init({
    ...
    plugins: "media"
    media_filter_html: false
});
```

### media_scripts

This option allows you to embed videos using script elements.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "media",
    media_scripts: [
       {filter: 'http://media1.tinymce.com'},
       {filter: 'http://media2.tinymce.com', width: 100, height: 200}
   ]
});
```

### video_template_callback

This option allows you to specify the function that will return the html embed code of the video media that you are attempting to insert into tinymce.

An example of such a function is as follows:

```js
tinymce.init({
    plugins: "media",
    video_template_callback: function(data) {
       return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' +
            '<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' +
            (data.source2 ? '<source src="' + data.source2 + '"' + (data.source2mime ? ' type="' + data.source2mime + '"' : '') + ' />\n' : '') +
         '</video>';
   }
});
```



# moxiemanager Control

The moxiemanager Control enables users to insert files located externally to the editor (e.g. on their client desktop) into their document.

Important note: moxiemanager is an application separate from TinyMCE and not a "plugin". However, being built by the team behind TinyMCE it has tight integration with TinyMCE as a toolbar control.

moxiemanager is a paid addition to TinyMCE. You can learn more at [http://www.moxiemanager.com/](http://www.moxiemanager.com/)



# nonbreaking

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds a button for inserting nonbreaking space entities `&nbsp;` at the current caret location.

Initialization Example

```js
tinymce.init({
    plugins: "nonbreaking",
    toolbar: "nonbreaking",
    nonbreaking_force_tab: true
});
```

## nonbreaking Options

This setting affects the execution of the Nonbreaking plugin. You may choose whether to force the editor to insert three `&nbsp;` entities when the user presses the tab key here.

Initialization Example

```js
tinymce.init({
    plugins: "nonbreaking",
    toolbar: "nonbreaking",
    nonbreaking_force_tab: true
});
```

### nonbreaking_force_tab

This option allows you to force TinyMCE to insert three `&nbsp;` entities when the user presses the tab key.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "nonbreaking",
    nonbreaking_force_tab: true
});
```



# noneditable

Adds non editable elements support for any element with the "mceNonEditable" class. These elements with be wont be editable by the user. This class name is configurable using the "noneditable_noneditable_class".

Initialization Example

```js
tinymce.init({
    plugins: "noneditable"
});
```

HTML contents example:

When you have existing classes that cannot be removed, you may combine MCE classes with the existing class in the following manner:

Non editable div example:

```html
<div class="myclass mceNonEditable">Contents</div>
```

Editable div example:

```html
<div class="myclass mceEditable">Contents</div>
```

Nested editable elements are not currently supported. You would not be able to edit the cell contents in the following table:

```html
<table class="mceNonEditable">
<tr>
<td class="mceEditable">
  Contents
</td>
</tr>
</table>
```

## noneditable Options

These settings affect the execution of the Noneditable plugin. These settings help determine which areas of the editor's editable area will remain editable and which will be converted to non-editable status.

### noneditable_editable_class

Class name to be used for editable elements, this would be the the same as contenteditable=true, forcing a element to be editable. This option defaults to: "mceEditable". Notice that classes with the mceItem prefix is invisible within TinyMCE.

This option allows you to specify the class that TinyMCE will use to determine which areas of content are editable when using the noneditable plugin.

An example showing the default for this setting is as follows:

```js
tinymce.init({
    plugins: "noneditable",
    noneditable_editable_class: "mceEditable"
});
```

### noneditable_noneditable_class

Class name to be used for non editable elements, this would be the same as contenteditable=false. This option defaults to: "mceNonEditable". Notice that classes with the mceItem prefix is invisible within TinyMCE.

This option allows you to specify the class that TinyMCE will use to determine which areas of content are editable when using the noneditable plugin.

An example showing the default for this setting is as follows:

```js
tinymce.init({
    plugins: "noneditable",
    noneditable_editable_class: "mceEditable"
});
```

### noneditable_regexp

Array or regexps to matching content to be converted into non edtiable placeholder items.

This option allows you to specify a regular expression or array of regular expressions that TinyMCE will use to determine which areas of content are noneditable when using the noneditable plugin.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "noneditable",
    noneditable_regexp: "<a href=\"(.*?)\"></a>"
});
```



# pagebreak

// This plugin adds the following controls:

// toolbar controls

// menu controls

Adds pagebreak support, some CMS systems uses a special separator to break the contents into pages. This plugin enables you to insert such page breaks in the editor.

Initialization Example

```js
tinymce.init({
    plugins: "pagebreak",
    pagebreak_separator: "<!-- my page break -->"
});
```

## pagebreak Options

These settings affect the execution of the Pagebreak plugin. These will allow you to specify the HTML to use as a page separator and determine whether the page break element(s) should be wrapped in <p> tags.</p>

### pagebreak_separator

Enables you to specify how the page break should be generated in the HTML source code.

Example of usage of the pagebreak_separator option

```js
tinymce.init({
    ...
    plugins: "pagebreak",
    pagebreak_separator: "<!-- pagebreak -->"
});
```

### pagebreak_split_block

This option, when enabled, makes it easier to split block elements with a page break.

An example of this setting is a follows:

```js
tinymce.init({
    plugins: "pagebreak",
    pagebreak_split_block: true
});
```



# paste

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin will filter/cleanup contents pasted from Word.

Initialization Example

```js
tinymce.init({
    plugins: "paste"
});
```

## paste Options

These settings affect the execution of the Paste plugin. These settings affect the way content is eliminated or preserved when being pasted. In addition, callbacks are available prior to and after content filtration.

### paste_data_images

This option specifies whether data:url images (inline images) should be removed or not from the pasted contents. Setting this to "true" will allow the pasted images, and setting this to "false" will disallow pasted images.  For example, Firefox enables you to paste images directly into any contentEditable field. This is normally not something people want, so this option is "false" by default since say a 600kb embedded image blocks page loads and prevents it form being cached on multiple pages.

Example of usage of the paste_data_images option

```js
tinymce.init({
    ...
    paste_data_images: true
});
```

### paste_as_text

This option enables you to set the default state of the "paste as text" edit menu option. It's disabled by default but can be forced on by default.

Example of usage

```js
tinymce.init({
    paste_as_text: true
});
```

### paste_enable_default_filters

This option allows you to disable TinyMCE's default paste filters when set to false.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "paste",
    paste_enable_default_filters: false
});
```

### paste_filter_drop

// YOU DON'T HAVE PERMISSIONS TO EDIT THIS PAGE

// You need to be an Wiki Member to be able to edit the wiki. Send a mail to info@moxiecode.com to request access.

### paste_preprocess

This option enables you to modify the pasted content before it gets inserted into the editor.

Example of usage

```js
tinymce.init({
    paste_preprocess: function(plugin, args) {
        console.log(args.content);
        args.content += ' preprocess';
    }
});
```

### paste_postprocess

This option enables you to modify the pasted content before it gets inserted into the editor but after it's been parsed into a DOM structure.

Example of usage

```js
tinymce.init({
    paste_postprocess: function(plugin, args) {
        console.log(args.node);
        args.node.setAttribute('id', '42');
    }
});
```

### paste_word_valid_elements

This option enables you to configure the valid_elements specific to MS Office. Word produces a lot of junk HTML so when users paste things from Word we do extra restrictive filtering on it to remove as much of this as possible. This option enables you to specify what elements and attributes you want to include when Word contents intercepted.

Example of usage

```js
tinymce.init({
    paste_word_valid_elements: "b,strong,i,em,h1,h2"
});
```

### paste_webkit_styles

This option enables you to configure the valid_elements specific to MS Office. Word produces a lot of junk HTML so when users paste things from Word we do extra restrictive filtering on it to remove as much of this as possible. This option enables you to specify what elements and attributes you want to include when Word contents intercepted.

Example of usage

```js
tinymce.init({
    paste_word_valid_elements: "b,strong,i,em,h1,h2"
});
```

### paste_retain_style_properties

This options allows you to specify styles you want to keep when pasting in WebKit. WebKit has a nasty bug where it will take all the computed CSS properties for an element and add them to spans within the editor since most users don't want to have a bunch of random spans added all over the document we need to manually clean that mess up until this bug is fixed. This option defaults to "none" but can be set to "all" or a specific list of styles to retain.

Example of usage

```js
tinymce.init({
    ...
    plugins: "paste"
    paste_webkit_styles: "color font-size"
});
```

### paste_merge_formats

This option enables the merge format feature of the paste plugin. This merges similar text formats to reduce the number of HTML elements produced. For example this "`<b>abc <b>bold</b> 123</b>`" becomes "`<b>abc bold 123</b>`" since the inner format is basically redundant. This option is enabled by default but can be disabled it the retaining of nesting of similar formats is important.

Example of usage

```js
tinymce.init({
        ...
        paste_merge_formats: false
});
```

### paste_convert_word_fake_lists

This option lets you disable the logic that converts list like paragraph structures into real semantic HTML lists.

Example of usage

```js
tinymce.init({
    ...
    paste_convert_word_fake_lists: false
});
```

### paste_remove_styles_if_webkit

This option allows you to disable TinyMCE's default paste filters for webkit styles.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "paste",
    paste_remove_styles_if_webkit: false
});
```



# preview

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds a preview button to TinyMCE, pressing the button opens a popup showing the current content. Installation Instructions

Initialization Example

```js
tinymce.init({
    plugins: "preview",
    toolbar: "preview",
});
```

## preview Options

These settings affect the execution of the Preview plugin. The height and width of the preview dialog box may be set here.

### plugin_preview_height

This option allows you to set the height of the preview window that appears when using the preview plugin.

An example of the default setting is as follows:

```js
tinymce.init({
    plugins: "preview",
    plugin_preview_height: "500"
});
```

### plugin_preview_width

This option allows you to set the width of the preview window that appears when using the preview plugin.

An example of the default setting is as follows:

```js
tinymce.init({
    plugins: "preview",
    plugin_preview_width: "650"
});
```



# print

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds a print button to TinyMCE. Installation Instructions

Initialization Example

```js
tinymce.init({
    plugins: "print",
    toolbar: "print"
});
```



# save

// This plugin adds the following controls:

// toolbar controls

This plugin adds a save button to TinyMCE this save button will submit the form that the editor is within.

Initialization Example

```js
tinymce.init({
    plugins: "save",
    toolbar: "save",
    save_enablewhendirty: true,
    save_onsavecallback: function() {console.log("Save");}
});
```

#### Error messages

The "Error: Form submit field collision." error message will appear if you call the submit button of your form "submit" this causes a collision with the JS form submit function and makes it impossible to submit the form using code. This can easily be avoided by naming the submit button "submitbtn" or similar.

So replace this:

```html
<form><button name="submit"></button></form>
```

With this:

```html
<form><button name="submitbtn"></button></form>
```

## save Plugin Options

These settings affect the execution of the Save plugin. Callbacks that will execute after saving the content, or cancelling saving the content are included in this section. In addition, a setting that will disable the save button when no modifications have been made to the content is available here.

### save_enablewhendirty

This option allows you to disable the save button until modifications have been made to the content of the editor. This option is enabled by default.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "save",
    save_enablewhendirty: true
});
```

### save_oncancelcallback

This option allows you to specify the function that will be executed when the cancel button/command is invoked.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "save",
    save_oncancelcallback: function () { console.log('Save cancelled'); }
});
```

### save_onsavecallback

This option allows you to specify the function that will be executed when the save button/command is invoked.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "save",
    save_onsavecallback: function () { console.log('Saved'); }
});
```



# searchreplace

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds search/replace dialogs to TinyMCE.

Initialization Example

```js
tinymce.init({
    plugins: "searchreplace",
    toolbar: "searchreplace"
});
```



# spellchecker

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds a spellchecker icon and menu item.

Initialization Example

```js
tinymce.init({
  plugins: "spellchecker",
  toolbar: "spellchecker"
});
```

## spellchecker Options

These settings affect the execution of the Wordcount plugin. You may modify how spellchecking is handled here.

### spellchecker_callback

Lets you override the server request logic for the spellchecker.

This option lets you override the default server side communication logic.

#### Example of a basic override without using a server

```js
tinymce.init({
  ...
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

#### Example of fallback for the older JSON-RPC based format

```js
tinymce.init({
  ...
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

### spellchecker_language

This config option lets you set the default language code for the spellchecker. This defaults to "en".

```js
tinymce.init({
    ...
    spellchecker_language: 'sv_SE'
});
```

### spellchecker_languages

This option lets you specify a list of languages for the user to select from. The format is based on the 3.x spellchecker format.

```js
tinymce.init({
    ...
    spellchecker_language: 'English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,' +
        'German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv'
});
```

### spellchecker_rpc_url

This options enables you to specify a custom URL to be used for the spellchecker. This can be the spellchecker url provided by the TinyMCE spellchecker packages or an url to a page that you have in your system. The URL is relative to the spellchecker plugin.

Example of configuration

```js
tinymce.init({
    ...
    spellchecker_rpc_url: 'spellchecker.php'
});
```

#### Spellchecker request format

The request is a HTTP POST with URL encoded parameters described below.

| Parameter | Description |
|-----------|-------------|
| method    | Default to "spellcheck" might be other things in the future for storing custom dictionaries etc. |
| text      | Text to spellcheck this will contain a plain text version of the current editor contents. |
| lang      | The currently selected language code for example "en" or "sv_SE". |

#### Spellchecker response format

The response of a successful spellcheck request should like this:

```
{
    "words": {
         "misspelled1": ["suggestion1", "suggestion2"],
         "misspelled2": ["suggestion1", "suggestion2"]
    }
}
```

And if there was an error:

```
{
    "error": "Error message"
}
```

### spellchecker_wordchar_pattern

This option enables you to override the matching of characters that are parts of words. By default it will treat anything that isn't a space, comma, dot, dash, quote etc etc as parts of a word. For some languages or environments it might be useful to override this behavior.

Example of usage

```js
tinymce.init({
    spellchecker_wordchar_pattern: /[^\s,\.]+/g
});
```



# tabfocus

This plugin adds the possibility to tab in/out of TinyMCE.

Initialization Example

```js
tinymce.init({
    plugins: "tabfocus"
});
```

## tabfocus Options

This setting affects the execution of the Tabfocus plugin. This setting can be used to change the focus behaviour of the editor when the tab key has been pressed inside the editable area.

### tabfocus_elements

This option enables you to specify an element ID to focus, when the user pressed the tab key inside the editor. You can also use the special ":prev" and ":next" values. It will then places the focus on either the previous or next input element placed before/after the TinyMCE instance in the DOM.

Example of usage of the tab_focus option

```js
// Move focus to specific element
tinymce.init({
        ...
        tabfocus_elements: "somebutton"
});

// Move focus to next element in DOM
tinymce.init({
        ...
        tabfocus_elements: ":prev,:next"
});
```



# table

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds table management functionality to TinyMCE.

Initialization Example

```js
tinymce.init({
    plugins: "table",
    tools: "inserttable"
});
```

## table Options

These settings affect the execution of the Table plugin. Default styles and attributes for tables, preset class lists and table behaviour can be modified here.

### table_appearance_options

// YOU DON'T HAVE PERMISSIONS TO EDIT THIS PAGE

// You need to be an Wiki Member to be able to edit the wiki. Send a mail to info@moxiecode.com to request access.

### table_clone_elements

This option enables you to specify what elements should be cloned as empty children when inserting rows/columns to a table. By default it will clone these "strong em b i span font h1 h2 h3 h4 h5 h6 p div" into new cells.

Example

```js
tinymce.init({
    ...
    table_clone_elements: "strong em a"
});
```

### table_grid

This options allows you disable the table grid feature of the table menu. This feature is enabled by default but if you set this option to false a table dialog will appear letting you enter the table size you want to insert.

Example of usage

```js
tinymce.init({
    ...
    plugins: "table"
    table_grid: false
});
```

### table_tab_navigation

This option enables you to disable the default tab between table cells feature.

Example of usage

```js
tinymce.init({
    plugins: "table",
    table_tab_navigation: false
});
```

### table_default_attributes

This option enables you to specify default attributes for inserted tables.

Example of usage

```js
tinymce.init({
    plugins: "table",
    table_default_attributes: {
        title: 'My table'
    }
});
```

### table_default_styles

This option enables you to specify default styles for inserted tables.

Example of usage

```js
tinymce.init({
    plugins: "table",
    table_default_styles: {
        fontWeight: 'bold'
    }
});
```

### table_class_list

This option enables you to specify a list of classes to present in the table options dialog.

Example of usage

```js
tinymce.init({
    plugins: "table",
    table_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### table_cell_class_list

This option enables you to specify a list of classes to present in the table cell options dialog.

Example of usage

```js
tinymce.init({
    plugins: "table",
    table_cell_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### table_row_class_list

This option enables you to specify a list of classes to present in the table row options dialog.

Example of usage

```js
tinymce.init({
    plugins: "table",
    table_row_class_list: [
        {title: 'None', value: ''},
        {title: 'Dog', value: 'dog'},
        {title: 'Cat', value: 'cat'}
    ]
});
```

### table_advtab

This option makes it possible to disable the table dialog advanced tab.

Example of usage

```js
tinymce.init({
    table_advtab: false
});
```

### table_cell_advtab

This option makes it possible to disable the table cell dialog advanced tab.

Example of usage

```js
tinymce.init({
    table_cell_advtab: false
});
```

### table_row_advtab

This option makes it possible to disable the table row dialog advanced tab.

Example of usage

```js
tinymce.init({
    table_row_advtab: false
});
```



# template

This plugin adds support for custom templates. There are two types of files this plugin supports: *templates* and *snippets*.

Initialization Example

```js
tinymce.init({
    plugins: "template",
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

## Templates example

```js
templates : [
  {
    title: "Editor Details",
      url: "editor_details.htm",
      description: "Adds Editors Name and Staff ID"
  }
]
```

## Example of an external list

This is the contents your backend page should return if you specify a URL in the templates option. A simple array containing each template to present. This URL can be a backend page, for example a PHP file.

```js
[
  {"title": "Some title 1", "description": "Some desc 1", "content": "My content"},
  {"title": "Some title 2", "description": "Some desc 2", "url": "development.html"}
]
```

## Making Templates

A template is a file with DIV containing the template data. All HTML outside the DIV will simply be presented to the user in the preview frame. A template has more capabilities than a simple snippet, a template can have dynamic content/smart content that gets updated by functions located in the template_replace_values. These functions will continue to be executed each time a cleanup procedure is performed.

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
</table></div>
```

## Making Snippets

Snippets are HTML code chunks that can be inserted. Replace variables will only be executed upon insert, without being wrapped in a template DIV element. So if you define somevar1 in template_replace_values array it will be replaced on preview and insert.

```html
This is a simple <strong>snippet</strong>. Will be replaced: {$somevar1}.
```

## template Plugin Options

These settings affect the execution of the Template plugin. Predefined templates for items such as created dates and modified dates can be set here.

### templates

Array with template items each having a title, description and content/url. If this option is a string then it will be requested as an URL that should produce a JSON output in the same format as the option accepts.

This option lets you specify a predefined list of templates to be inserted. Each item in the list can either be inline using a content property or a whole file using the url property see the example below for details.

Example using templates object

```js
tinymce.init({
    plugins: "template",
    templates: [
        {title: 'Some title 1', description: 'Some desc 1', content: 'My content'},
        {title: 'Some title 2', description: 'Some desc 2', url: 'development.html'}
    ]
});
```

Example using templates url

```js
tinymce.init({
    plugins: "template",
    templates: "/dir/templates.php"
});
```
Example JSON output of templates.php

```javascript
[
    {"title": "Some title 1", "description": "Some desc 1", "content": "My content"},
    {"title": "Some title 2", "description": "Some desc 2", "url": "development.html"}
```

### template_cdate_classes

A list of class names separated by spaces. Any template element with one of the classes will have its content replaced by the 'creation' date, formatted according to the 'template_cdate_format' option. A creation date is one that is set if no previous date existed within the element. Once set the original date is stored inside the element in a HTML comment and is designed not to change even with a template change.

This option allows you to provide TinyMCE with a list of class names separated by spaces. Any template element with one of the classes will have its content replaced by the 'creation' date, formatted according to the 'template_cdate_format' option. A creation date is one that is set if no previous date existed within the element. Once set the original date is stored inside the element in a HTML comment and is designed not to change even with a template change.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "template",
    template_cdate_classes: "cdate creationdate"
});
```

### template_cdate_format

A date format string for the creation date see below for options.

This option allows you to provide TinyMCE with a format that all 'creation' date templates will be replaced by. An example of this setting is as follows:

```js
tinymce.init({
    plugins: "template",
    template_cdate_format: "%m/%d/%Y : %H:%M:%S"
});
```

### template_mdate_classes

A list of class names separated by spaces. Any template element with one of the classes will have its content replaced by the 'modified' date, formatted according to the 'template_mdate_format' option. A modified date is one that is updated with each edit.

This option allows you to provide TinyMCE with a list of class names separated by spaces. Any template element with one of the classes will have its content replaced by the 'modified' date, formatted according to the 'template_mdate_format' option. A modified date is one that is updated with each edit.

An example of this setting is a follows:

```js
tinymce.init({
    plugins: "template",
    template_mdate_classes: "mdate modifieddate"
});
```

### template_mdate_format

A date format string for the modified date see below for options.

This option allows you to provide TinyMCE with a format that all 'modified' date templates will be replaced by.

An example of this setting is a follows:

```js
tinymce.init({
    plugins: "template",
    template_mdate_format: "%m/%d/%Y : %H:%M:%S"
});
```

### template_popup_height

This option allows you to specify the height of the template dialog.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "template",
    template_popup_height: 500
});
```

### template_popup_width

This option allows you to specify the width of the template dialog.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "template",
    template_popup_width: 600
});
```

### template_replace_values

This is an array of items that control content replacement in the inserted templates. The array keys equal the classnames used in the template. If a template element has a classname matching any in this array its contents will be replaced by the array value. See examples below.

This option allows you to provide TinyMCE with an array of items that control content replacement in the inserted templates. The array keys equal the classnames used in the template. If a template element has a classname matching any in this array its contents will be replaced by the array value.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "template",
    template_replace_values: {
        username : "Jack Black",
        staffid : "991234"
    }
```

#### Replace values example

Class names are used for templates and variable names are used for snippets.

```js
template_replace_values : {
  className : "Replace with this content",
  anotherClassName: "Replacement content"
}
```

#### Replace values (functions) example

Replace content array values can also be functions. If a template element has a classname matching and the value is a fuction the function is called and the element passed as an argument.

```js
template_replace_values : {
  className : function(element) {
    // do something and then:
    // element.innerHTML = something
  }
}
```

### template_selected_content_classes

A list of class names separated by spaces. Any template element with one of the classes will have its content replaced by the selected editor content when first inserted.

This option allows you to provide tinymce with a list of class names separated by spaces. Any template element with one of the classes will have its content replaced by the selected editor content when first inserted.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "template",
    template_selected_content_classes: "selcontent selectedcontent"
});
```

### template_popup_width

Template dialog width, defaults to 600.

### template_popup_height

Template dialog height, defaults to 500.

### template_preview_replace_values

// This is not linked in the source



# textcolor

// This plugin adds the following controls:

// toolbar controls

This plugin adds the forecolor/backcolor button controls that enable you to pick colors from a color picker and apply these to text.

Initialization Example

```js
tinymce.init({
    plugins: "textcolor",
    toolbar: "forecolor backcolor"
});
```

## textcolor Options

These settings affect the execution of the Textcolor plugin. The dimensions and mapping of the grid of textcolors may be set here.

### textcolor_cols

This option allows you to specify how many columns appear on the grid of text colors.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "textcolor",
    textcolor_cols: 8
});
```

### textcolor_map

This option allows you to specify a map of the text colors that will appear in the grid.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "textcolor",
    textcolor_map: [
        "000000", "Black",
        "993300", "Burnt orange",
        "333300", "Dark olive",
        "003300", "Dark green",
        "003366", "Dark azure"
    ]
});
```

### textcolor_rows

This option allows you to specify how many rows appear on the grid of text colors.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "textcolor",
    textcolor_rows: 5
});
```



# textpattern

This plugin matches special patterns in the text and applies formats or executed commands on these text patterns. The default patterns is similar to markdown syntax so you can type "# text" to produce a header or "**text** to make something bold.

Initialization Example

```js
tinymce.init({
    plugins: "textpattern"
});
```

## textpattern Options

This setting affects the execution of the Textpattern plugin. Text patterns that are matched by the editor can be changed here.

### textpattern_patterns

This option lets you configure the text patterns that gets matched by the textpattern plugin. By default it has basic markdown patterns. There are two types of patterns inline and block patterns. Inline patterns have a start and end where the block based patterns only have a start. You can specify formats to be applied to the selection or commands to be executed.

Example of usage

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



# visualblocks

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds a button and menu item that allows you to see block elements in the editor.

Initialization Example

```js
tinymce.init({
    plugins: "visualblocks"
});
```

## visualblocks Options

This setting affects the execution of the Visualblocks plugin. You may specify whether blocks are visible by default here.

### visualblocks_default_state

This option enables you to specify the default state of the visualblocks plugin.

Example of usage of the visualblocks option

```js
tinymce.init({
    ...
    plugins: "visualblocks",
    visualblocks_default_state: true
});
```



# visualchars

// This plugin adds the following controls:

// toolbar controls

// menu controls

This plugin adds the possibility to see invisible characters like `&nbsp;`.

Initialization Example

```js
tinymce.init({
    plugins: "visualchars",
    toolbar: "visualchars"
});
```



# wordcount

This plugin adds word count functionality to TinyMCE.

Initialization Example

```js
tinymce.init({
    plugins: "wordcount"
});
```

## wordcount Options

These settings affect the execution of the Wordcount plugin. The regex values that determine how words are cleaned and counted may be set here.

### wordcount_cleanregex

This option allows you to specify the regex that will be used to strip punctuation and numbers from the word count.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "wordcount",
    wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g
});
```

### wordcount_countregex

This option allows you to specify the regex that will be used to count the words for the word count.

An example of this setting is as follows:

```js
tinymce.init({
    plugins: "wordcount",
    wordcount_countregex: /[\w\u2019\x27\-\u00C0-\u1FFF]+/g
});
```
