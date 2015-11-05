---
layout: default
title: Link plugin
---

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

