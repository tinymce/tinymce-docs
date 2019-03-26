---
layout: default
title: Tiny Drive Configuration
title_nav: Configuration
description: List of all available Tiny Drive configuration options.
keywords: tinydrive configuration
---

### `tinydrive_token_provider`

This setting could take one of the following two forms:

* A URL to a page that takes an HTTP JSON POST request and produces a JSON structure with a valid JWT. It uses a POST request to avoid caching by browsers and proxies.
* A function that provides the same token through a callback. This allows you to make your own HTTP request in any format you like. The provider function is a function that has a success and failure callback where the success takes an object with a token property containing the JWT, and the failure callback takes a string to present as an error message if the token could not be produced.

You can read more about how to create these tokens in the [JWT authentication]({{site.baseurl}}/configure/jwt-authentication/) guide.

**Type:** `String` or `Function`

**Required:** yes

#### Example Using a JWT Provider URL

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_token_provider: '/jwt'
});
```

#### Example Using a JWT Provider Callback

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "tinydrive",
  tinydrive_token_provider: function (success, failure) {
     success({ token: 'jwt-token' });
     // failure('Could not create a jwt token')
  }
});
```

### `tinydrive_upload_path`

This setting enables you to change the default upload path for files that get uploaded when pasted into the editor, uploaded directly through the Image dialog, or when you drag-and-drop images into the editor. It will produce a date-based structure within this path like this `/uploads/{year}{month}{day}`. This is to avoid having thousands of files in the same directory.

**Type:** `String`

**Default Value:** `"/uploads"`

#### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "tinydrive",
  tinydrive_upload_path: '/some/other/path'
});
```

### `tinydrive_max_image_dimension`

This setting enables you to constrain the width/height of uploaded images. When this is enabled any images with a higher width or height than the specified amount would be proportionally resized down to the specified max dimension.

**Type:** `Number`

#### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "tinydrive",
  tinydrive_max_image_dimension: 1024
});
```

## Insert File toolbar button

Drive will automatically integrate into the Image, Link, and Media dialogs as a file picker. You can also configure it to insert files directly into your content using the `insertfile` button. To enable this button, add it to your toolbar editor setting.

The Insert File toolbar button will insert images as `img` elements or other files as links to that file.

### Example of toolbar button

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  toolbar: 'insertfile'
});
```

## Insert File menu item

Drive will automatically integrate into the Image, Link, and Media dialogs as a file picker. You can also configure it to insert files directly into your content using the `insertfile` menu item. To enable this menu item, add it to your menus editor setting or the insert_button_items setting.

The Insert File menu item will insert images as `img` elements or other files as links to that file.

### Example of menu item

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  toolbar: 'insert',
  menu: {
    insert: { title: 'Insert', items: 'insertfile' }
  },
  insert_button_items: 'insertfile'
});
```