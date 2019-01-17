---
layout: default
title: Image plugin
title_nav: Image
description: Insert an image into TinyMCE.
keywords: photo insert edit style format image_caption image_list image_advtab image_title image_class_list image_prepend_url image_description image_dimensions image_title image_prepend_url
---

{% include pardot-px-moxiemanager.html %}

This plugin enables the user to insert an image into TinyMCE's editable area. The plugin also adds a toolbar button and an `Insert/edit image` menu item under the `Insert` menu.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
  toolbar: "image",
  image_list: [
    {title: 'My image 1', value: 'https://www.tinymce.com/my1.gif'},
    {title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif'}
  ]
});

```

> Note that this is not drag-drop functionality and the user is required to enter the path to the image. Optionally the user can also enter the image description, dimensions, and whether image proportions should be constrained (selected via a checkbox). Some of these settings can be preset using the plugin's configuration options.

### Options

These configuration options affect the execution of the `image` plugin. Many of the settings here will disable dialog box features used to insert or edit images. A predefined list of images can also be provided to enable quick insertion of those images.

If you wish to align the image, you can also use the text align buttons while images are selected.

### `image_caption`

> New in TinyMCE version 4.3!

This option lets users enable captions for images. When this option is enabled the image dialog will have an extra checkbox called "Caption". When a user checks the checkbox the image will get wrapped in an HTML5 `figure` element with a `figcaption` inside it. The user will then be able to type caption content inside the editor.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
  toolbar: "image",
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

Note that the `figure` element needs some custom CSS added to render properly. This is what we use in the internal `content.css` within TinyMCE, and can be overridden with your own custom [`content_css`]({{ site.baseurl }}/configure/content-appearance/#content_css) stylesheet.

```css
figure.image {
	display: inline-block;
	border: 1px solid gray;
	margin: 0 2px 0 1px;
	background: #f5f2f0;
}

figure.align-left {
	float: left;
}

figure.align-right {
	float: right;
}

figure.image img {
	margin: 8px 8px 0 8px;
}

figure.image figcaption {
	margin: 6px 8px 6px 8px;
	text-align: center;
}
```

### `image_list`

This option lets you specify a predefined list of sources for images. `image_list` takes the form of an array containing items to add to a list with a corresponding image. Each item has a `title` and a `value`.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
  toolbar: "image",
  image_list: [
    {title: 'Dog', value: 'mydog.jpg'},
    {title: 'Cat', value: 'mycat.gif'}
  ]
});
```

**Example of JSON URL with images**

You can also configure a URL with JSON data. The format of that list is the same as above.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
  toolbar: "image",
  image_list: "/mylist.php"
});
```

**Example of a custom async function**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
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

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
  toolbar: "image",
  image_advtab: true
});
```

### `image_class_list`

This option lets you specify a predefined list of classes to add to an image. It takes the form of an array with items to set classes on links.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
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

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
  toolbar: "image",
  image_description: false
});
```

### `image_dimensions`

This options allows you disable the image dimensions input field in the image dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
  toolbar: "image",
  image_dimensions: false
});
```

### `image_title`

This options allows you enable the image title input field in the image dialog.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
  toolbar: "image",
  image_title: true
});
```

## `image_prepend_url`

This option allows you to specify a URL prefix that will be applied to images when appropriate.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "image",
  menubar: "insert",
  toolbar: "image",
  image_prepend_url: "https://www.tinymce.com/images/"
});
```

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
