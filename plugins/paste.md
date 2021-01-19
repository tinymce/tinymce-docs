---
layout: default
title: Paste Plugin
title_nav: Paste
description: Standard version of features for copying-and-pasting content from Microsoft Word.
keywords: microsoft word excel cut copy paste_data_images paste_as_text paste_enable_default_filters paste_filter_drop paste_preprocess paste_postprocess paste_word_valid_elements paste_webkit_styles paste_retain_style_properties paste_merge_formats paste_convert_word_fake_lists paste_remove_styles_if_webkit
controls: toolbar button, menu item
---

> Looking for more advanced Microsoft Word importing and pasting? Try the [PowerPaste](../powerpaste/) plugin.

This plugin will filter/cleanup content pasted from Microsoft Word. The power of the plugin is in its options, so please take the time to learn more about them below.

The plugin also adds a menu item `Paste as text` under the `Edit` menu dropdown and a toolbar button.

> **Note:** The toolbar button won't work in browsers that don't support direct access to the clipboard. In such cases the user will be presented with a modal/dialog box advising them of this along with a reminder of standard keyboard shortcuts.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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

For example, Firefox enables you to paste images directly into any `contentEditable` field. This is normally not something people want, so this option is `"false"` by default. For example, a 600kb embedded image would block page loads and prevents it form being cached on multiple pages.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "paste",
  menubar: "edit",
  toolbar: "paste",
  paste_data_images: true
});
```

### `paste_as_text`

This option enables you to set the default state of the `Paste as text` menu item, which is added by the `paste` plugin under the `Edit` menu dropdown. It's disabled by default.

**Type:** `Boolean`

**Default Value:** `false`

**Possbile Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "paste",
  menubar: "edit",
  toolbar: "paste",
  paste_as_text: true
});
```

### `paste_enable_default_filters`

This option allows you to disable TinyMCE's default paste filters when set to false.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

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

This option allows developers to disable the default drop filters when set to `false`.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:**  `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "paste",
  paste_filter_drop: false
});
```

### `paste_preprocess`

This option enables you to modify the pasted content before it gets inserted into the editor.

**Type:** `Function`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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

**Type:** `Function`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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

This option enables you to configure the `valid_elements` specific to MS Office. Word produces a lot of junk HTML, so when users paste things from Word we do extra restrictive filtering on it to remove as much of this as possible. This option enables you to specify which elements and attributes you want to include when Word contents are intercepted.

>**Note:** To access this feature, you need to set the value of [paste_enable_default_filters]({{site.baseurl}}plugins/paste/#paste_enable_default_filters) to `"false"` in your configuration.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "paste",
  menubar: "edit",
  toolbar: "paste",
  paste_word_valid_elements: "b,strong,i,em,h1,h2"
});
```

### `paste_webkit_styles`

This option allows you to specify styles you want to keep when pasting in WebKit. WebKit has a (nasty) bug where it will take all the computed CSS properties for an element and add them to spans within the editor. Since most users don't want random spans added all over their document, we need to manually clean that up until the bug is fixed. This option defaults to `"none"` but can be set to `"all"` or a specific list of styles to retain.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "paste",
  menubar: "edit",
  toolbar: "paste",
  paste_webkit_styles: "color font-size"
});
```

### `paste_retain_style_properties`

This option allows you to specify which styles you want to retain when pasting contents from MS Word and similar Office suite products. This option can be set to a space-separated list of CSS style names, or `"all"` if you want all styles to be retained.

**Type:** `String`

##### Example

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

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "paste",
  menubar: "edit",
  toolbar: "paste",
  paste_remove_styles_if_webkit: false
});
```
