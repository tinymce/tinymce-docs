---
layout: default
title: Link plugin
title_nav: Link
description: Add hyperlinks to content.
keywords: url urls insert edit default_link_target link_assume_external_targets link_class_list link_list target_list rel_list link_title
controls: toolbar button, menu item
---

The `link` plugin allows a user to link external resources such as website URLs, to selected text in their document.

It also adds a toolbar button and a menu item `Insert/edit link` under the `Insert` menu dropdown.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "link",
  menubar: "insert",
  toolbar: "link"
});
```

## Options

These settings affect the execution of the `link` plugin. Predefined links, targets, and more can be specified here.

### `default_link_target`

This option allows you to set a default target for links when inserting/editing a link.

**Type:** `String`

##### Example

```js
tinymce.init({
    selector: "textarea",  // change this value according to your HTML
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    default_link_target: "_blank"
});
```

### `link_context_toolbar`

By default links are defunct in TinyMCE, it is not possible to open them directly from the editor. Setting `link_context_toolbar` to *true* will enable context toolbar on every link, with shortcut functions to open the link, modify it or - remove. External links will be opened in a separate tab, while relative ones will cause scroll to a target within the editor (if the target is found).

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "link",
  menubar: "insert",
  toolbar: "link",
  link_context_toolbar: true
});
```

### `link_assume_external_targets`

This option allows you to set whether TinyMCE should prompt the user to prepend a `http://` prefix if the supplied link does not already contain a protocol prefix.

With the default setting the user will only be prompted to prepend `http://` if the url entered starts with `www`, all other urls without a protocol will be added without prompt. With the setting set to `true` all urls will be assumed to be external and the user will be prompted on all urls.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "link",
  menubar: "insert",
  toolbar: "link",
  link_assume_external_targets: true
});
```

### `link_class_list`

The `link_class_list` plugin adds a predefined `class` dropdown to the `link` dialog box.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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
  selector: "textarea",  // change this value according to your HTML
  plugins: "link",
  menubar: "insert",
  toolbar: "link",
  link_list: [
    {title: 'My page 1', value: 'https://www.tiny.cloud'},
    {title: 'My page 2', value: 'https://about.tiny.cloud'}
  ]
});
```

**Example of an array with links and sub-menu**

Since TinyMCE 4.0.27 it is now possible to have sub-menus within the link list. A TinyMCE Fiddle [example of nested sub-menus](http://fiddle.tinymce.com/wleaab) is available.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "link",
  menubar: "insert",
  toolbar: "link",
  link_list: [
    {title: 'TinyMCE', value: 'https://www.tiny.cloud'},
    {title: 'Moxiecode', value: 'https://about.tiny.cloud'},
    {title: 'TinyMCE resources', menu: [
    {title: 'TinyMCE documentation', value: 'https://www.tiny.cloud/docs/'},
    {title: 'TinyMCE forum', value: 'https://community.tinymce.com/'}
    ]}
  ]
});
```

**Example of a JSON URL with links**

You can also configure a URL with JSON data. The format of that list is the same as above:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "link",
  menubar: "insert",
  toolbar: "link",
  link_list: "/mylist.php"
});
```

**Example of a custom asynchronous function**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "link",
  menubar: "insert",
  toolbar: "link",
  link_list: function(success) {
    success([
       {title: 'My page 1', value: 'https://www.tiny.cloud'},
       {title: 'My page 2', value: 'https://about.tiny.cloud'}
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
  selector: "textarea",  // change this value according to your HTML
  plugins: "link",
  menubar: "insert",
  toolbar: "link",
  target_list: [
    {title: 'None', value: ''},
    {title: 'Same page', value: '_self'},
    {title: 'New page', value: '_blank'},
    {title: 'Lightbox', value: '_lightbox'}
  ]
});
```

To disable the option dialog set `target_list` to `false`.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "link",
  menubar: "insert",
  toolbar: "link",
  target_list: false
});
```

### `rel_list`

This option lets you specify a predefined list of values for the `link` dialog. These values gets applied to the `rel` attribute.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "link",
  menubar: "insert",
  toolbar: "link",
  link_title: false
});
```
