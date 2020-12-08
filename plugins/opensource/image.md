---
layout: default
title: Image plugin
title_nav: Image
description: Insert an image into TinyMCE.
keywords: photo insert edit style format image_caption image_list image_advtab image_title image_class_list image_prepend_url image_description image_dimensions image_title image_prepend_url
---

{% assign pluginname = "Image" %}
{% assign plugincode = "image" %}

This plugin enables the user to insert an image into {{site.productname}}'s editable area. The plugin also adds a toolbar button and an `Insert/edit image` menu item under the `Insert` menu.

**Type:** `String`

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_list: [
    {title: 'My image 1', value: 'https://www.example.com/my1.gif'},
    {title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif'}
  ]
});

```

> **Note**: This is not drag-drop functionality and the user is required to enter the path to the image. Optionally the user can also enter the image description, dimensions, and whether image proportions should be constrained (selected via a checkbox). Some of these settings can be preset using the plugin's configuration options.

{{site.svgsNotSupported}}

## Options

These configuration options affect the execution of the `image` plugin. Many of the settings here will disable dialog box features used to insert or edit images. A predefined list of images can also be provided to enable quick insertion of those images.

If you wish to align the image, you can also use the text align buttons while images are selected.

{% assign includedSection = 'imagePlugin' %}
#{% include configuration/a11y_advanced_options.md %}
{% assign includedSection = false %}
#{% include configuration/file-picker-callback.md %}

#{% include configuration/file-picker-types.md %}

### `image_caption`

This option lets users enable captions for images. When this option is enabled the image dialog will have an extra checkbox called "Caption". When a user checks the checkbox the image will get wrapped in an HTML5 `figure` element with a `figcaption` inside it. The user will then be able to type caption content inside the editor.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `image_caption`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_caption: true
});
```

Below is an example of the HTML created when a user selects the caption checkbox.

```html
<figure class="image">
<img src="url" alt="" />
<figcaption>Caption</figcaption>
</figure>
```

Note that the `figure` element needs some custom CSS added to render properly. This is what we use in the internal `content.css` within {{site.productname}}, and can be overridden with your own custom [`content_css`]({{ site.baseurl }}/configure/content-appearance/#content_css) stylesheet.

```css
{% include css-codeblock/image-plugin-css.md %}
```

### `image_list`

This option lets you specify a predefined list of sources for images. `image_list` takes the form of an array containing items to add to a list with a corresponding image. Each item has a `title` and a `value`.

**Type:** `String`

#### Example: Using `image_list`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_list: [
    {title: 'Cat', value: 'cat.png'},
    {title: 'Dog', value: 'dog.jpg'}
  ]
});
```

#### Example of a nested list of images

{{site.requires_5_5v}}

To create a nested list, replace `value` with `menu` to add the top level of the list, then provide an array of items.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_list: [
    {title: 'Cat', value: 'cat.png'},
    {title: 'Dogs',
      menu: [
        {title: 'Alaskan Husky', value: 'husky.jpg'},
        {title: 'Dingo', value: 'dingo.png'},
        {title: 'Swedish Lapphund', value: 'swedish_lapphund.gif'}
      ]
    }
  ]
});
```

#### Example of an external script that returns an JSON array of images

You can also configure a URL with JSON data. The format of that list is the same as above.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_list: '/mylist.php'
});
```

#### Example of a custom async function

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
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

#### Example: Using `image_advtab`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_advtab: true
});
```

### `image_class_list`

This option lets you specify a predefined list of classes to add to an image. It takes the form of an array with items to set classes on links.

**Type:** `String`

#### Example: Using `image_class_list`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_class_list: [
    {title: 'None', value: ''},
    {title: 'No border', value: 'img_no_border'},
    {title: 'Green border', value: 'img_green_border'},
    {title: 'Blue border', value: 'img_blue_border'},
    {title: 'Red border', value: 'img_red_border'}
  ]
});
```

#### Example of a nested list of image classes

{{site.requires_5_5v}}

To create a nested list, replace `value` with `menu` to add the top level of the list, then provide an array of items.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_class_list: [
    {title: 'None', value: ''},
    {title: 'No border', value: 'img_no_border'},
    {title: 'Borders',
      menu: [
        {title: 'Green border', value: 'img_green_border'},
        {title: 'Blue border', value: 'img_blue_border'},
        {title: 'Red border', value: 'img_red_border'}
      ]
    }
  ]
});
```

### `image_description`

This options allows you disable the image description input field in the image dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `image_description`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_description: false
});
```

### `image_dimensions`

This options allows you disable the image dimensions input field in the image dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `image_dimensions`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_dimensions: false
});
```

### `image_prepend_url`

This option allows you to specify a URL prefix that will be applied to images when appropriate.

**Type:** `String`

#### Example: Using `image_prepend_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_prepend_url: 'https://www.example.com/images/'
});
```

### `image_title`

This options allows you enable the image title input field in the image dialog.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `image_title`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_title: true
});
```

### `image_uploadtab`

This option adds an "Upload" tab to the image dialog allowing you to upload local images, when the [`images_upload_url`]({{site.baseurl}}/configure/file-image-upload/#images_upload_url) is also configured.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `image_uploadtab`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_uploadtab: false
});
```

#{% include configuration/images-file-types.md %}

#{% include configuration/images-upload-base-path.md %}

#{% include configuration/images-upload-credentials.md %}

#{% include configuration/images-upload-handler.md %}

#{% include configuration/images-uploads-url.md %}

#{% include configuration/type-ahead-urls.md %}


## Q: Where are the advanced image options?

Use the `Style Formats` option instead, which is much more powerful.

```js
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

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Image plugin provides the following JavaScript command.

{% include commands/image-cmds.md %}
