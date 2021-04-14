---
layout: default
title: Tiny Drive configuration
title_nav: Configuration options
description: List of all available Tiny Drive configuration options.
keywords: tinydrive configuration
---

{% assign pluginname = "Tiny Drive" %}
{% assign plugincode = "tinydrive" %}

## Configuring with TinyMCE

### `tinydrive_token_provider`

This setting could take one of the following two forms:

* A URL to a page that takes an HTTP JSON POST request and produces a JSON structure with a valid JWT. It uses a POST request to avoid caching by browsers and proxies.
* A function that provides the same token through a callback. This allows making an HTTP request in any desired format. The provider function is a function that has a success and failure callback where the success takes an object with a token property containing the JWT, and the failure callback takes a string to present as an error message if the token could not be produced.

For more information on how to create these tokens, refer to the [JWT authentication guide]({{site.baseurl}}/tinydrive/jwt-authentication/) or try one of the [starter projects]({{site.baseurl}}/tinydrive/getting-started/#starterprojects).

**Type:** `String` or `Function`

**Required:** yes

#### Example Using a JWT Provider URL

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_token_provider: '/jwt' // this can be a page or endpoint like this
});
```

#### Example Using a JWT Provider Callback

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_token_provider: function (success, failure) {
     success({ token: 'jwt-token' });
     // failure('Could not create a jwt token')
  }
});
```

### `tinydrive_upload_path`

This setting enables changing the default upload path for files that get uploaded when pasted into the editor, uploaded directly through the Image dialog, or when an image is dragged-and-dropped into the editor. It will produce a date-based structure within this path like this `/uploads/{year}{month}{day}`. This is to avoid having thousands of files in the same directory.

**Type:** `String`

**Default Value:** `"/uploads"`

#### Example: Using `tinydrive_upload_path`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_upload_path: '/some/other/path'
});
```

### `tinydrive_max_image_dimension`

This setting enables constraining the width/height of uploaded images. When this is enabled any images with a higher width or height than the specified amount would be proportionally resized down to the specified maximum dimension.

**Type:** `Number`

#### Example: Using `tinydrive_max_image_dimension`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_max_image_dimension: 1024
});
```

## Configuring the Tiny Drive UI

### tinydrive_skin

This option allows you to specify the skin that {{site.cloudfilemanager}} should use. The default skin included with {{site.cloudfilemanager}} is named "oxide".

**Type:** `String`

**Default Value:** `oxide`

**Possible Values:** `oxide`, `oxide-dark`

If the `tinydrive_skin` setting is not specified, {{site.cloudfilemanager}} will try and use the skin specified by the [skin]({{ site.baseurl }}/configure/editor-appearance/#skin) setting before falling back to the default "oxide" skin.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_skin: 'oxide-dark'
});
```

### Configuring the Insert File toolbar button

{{site.cloudfilemanager}} will automatically integrate into the Image, Link, and Media dialogs as a file picker. It can also be configured to insert files directly into any content using the `insertfile` button. To enable this button, add it to the toolbar editor setting.

The Insert File toolbar button will insert images as `img` elements or other files as links to that file.

#### Example: Adding the `insertfile` toolbar button

This is an example of configuring the 'insertfile' toolbar button.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  toolbar: 'insertfile'
});
```

## Configuring with Dropbox

### `tinydrive_dropbox_app_key`

This setting enables specifying the Dropbox API key for integrating dropbox into {{site.cloudfilemanager}}. For more information on how you obtain this key, refer to the [Dropbox integration guide]({{site.baseurl}}/tinydrive/integrations/dropbox-integration/).

**Type:** `string`

#### Example: Using `tinydrive_dropbox_app_key`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_dropbox_app_key: '<your dropbox app key>'
});
```

## Configuring with Google Drive

### `tinydrive_google_drive_key`

This setting enables specifying the Google Drive API key for integrating Google Drive into {{site.cloudfilemanager}}. For more information on how you obtain this key, refer to the [Google Drive integration guide]({{site.baseurl}}/tinydrive/integrations/googledrive-integration/).

**Type:** `string`

#### Example: Using `tinydrive_google_drive_key`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_google_drive_key: '<your google drive api key>'
});
```

### `tinydrive_google_drive_client_id`

This setting enables specifying the Google Drive client ID for integrating Google Drive into {{site.cloudfilemanager}}. For more information on how you obtain this ID, refer to the [Google Drive integration guide]({{site.baseurl}}/tinydrive/integrations/googledrive-integration/).

**Type:** `string`

#### Example: Using `tinydrive_google_drive_client_id`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_google_drive_client_id: '<your google drive client id>'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Need help?

{{site.companyname}} is striving to make {{site.cloudfilemanager}} as useful and simple as possible. For support related issues such as problems with JWT authentication and implementing {{site.cloudfilemanager}}, check the [help page]({{site.baseurl}}/tinydrive/get-help/) or please contact [{{site.supportname}}]({{site.supporturl}}).
