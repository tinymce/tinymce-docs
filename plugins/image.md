---
layout: default
title: Image Plugin
description: Insert an image into TinyMCE.
keywords: photo
---





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


#### Q: Where are the advanced image options?

Use the Style Formats option instead, which is much more powerful.

```
style_formats: [
  {title: 'Image Left', selector: 'img', styles: {
    'float' : 'left',
    'margin': '0 10px 0 10px'
  }},
  {title: 'Image Right', selector: 'img', styles: {
    'float' : 'right',
    'margin': '0 10px 0 10px'
  }}
]
```

If you wish to align the image, you can also just use the text align buttons when having images selected.

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
