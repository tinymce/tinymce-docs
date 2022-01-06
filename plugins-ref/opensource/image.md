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

{% include /misc/admon_svg_not_supported.md %}

## Options

These configuration options affect the execution of the `image` plugin. Many of the settings here will disable dialog box features used to insert or edit images. A predefined list of images can also be provided to enable quick insertion of those images.

If you wish to align the image, you can also use the text align buttons while images are selected.

{% assign includedSection = 'imagePlugin' %}
#{% include configuration/a11y_advanced_options.md %}
{% assign includedSection = false %}
#{% include configuration/file_picker_callback.md %}

#{% include configuration/file_picker_types.md %}

{% include configuration/image_caption.md %}

{% include configuration/image_list.md %}

{% include configuration/image_advtab.md %}

{% include configuration/image_class_list.md %}

{% include configuration/image_description.md %}

{% include configuration/image_dimensions.md %}

{% include configuration/image_prepend_url.md %}

{% include configuration/image_title.md %}

{% include configuration/image_uploadtab.md %}

#{% include configuration/images_file_types.md %}

#{% include configuration/images_upload_base_path.md %}

#{% include configuration/images_upload_credentials.md %}

#{% include configuration/images_upload_handler.md %}

#{% include configuration/images_upload_url.md %}

#{% include configuration/object_resizing.md %}

#{% include configuration/resize_img_proportional.md %}

#{% include configuration/object_resizing.md %}

#{% include configuration/resize_img_proportional.md %}

#{% include configuration/type_ahead_urls.md %}

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

The Image plugin provides the following {{site.productname}} command.

{% include commands/image-cmds.md %}
