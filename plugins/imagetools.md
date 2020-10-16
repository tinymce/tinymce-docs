---
layout: default
title: Image Tools plugin
title_nav: Image Tools
description: Image editing features for TinyMCE.
keywords: imagetools rotate rotateleft rotateright flip flipv fliph editimage imageoptions
---

{% assign pluginname = "Image Tools" %}
{% assign plugincode = "imagetools" %}

Image Tools (`imagetools`) plugin adds a contextual editing toolbar to the images in the editor. If toolbar is not appearing on image click, it might be that you need to enable `imagetools_cors_hosts` or `imagetools_proxy` (see below).

## Interactive example

{% include live-demo.html id="image-tools" %}

{{site.svgsNotSupported}}

## Cloud Installation

The Image Tools plugin is provided with all subscriptions to [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/), including an automatically configured image proxy.
Simply add `image` to the `toolbar` list and `image imagetools` to the `plugins` list.

### Basic setup using Tiny Cloud

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'image',
  plugins: 'image imagetools'
});
```

## Self-hosted Installation

To enable the {{site.productname}} Image Tools plugin:

1. Add 'image' to the 'toolbar' list and 'image imagetools' to the 'plugins' list
2. Enable `imagetools_cors_hosts` and `imagetools_proxy` options as needed

### Basic self-hosted setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'image',
  plugins: 'image imagetools',
  imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com'],
  imagetools_proxy: 'proxy.php'
});
```

## Options

{% include configuration/image-cors-hosts.md %}

### `imagetools_credentials_hosts`

This option can be used together with the `imagetools_cors_hosts` option to allow credentials to be sent to the CORS host. This is not enabled by default since the server needs to have proper CORS headers to support this.

**Type:** `String[]`

#### Example: Using `imagetools_credentials_hosts`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'image',
  plugins: 'image imagetools',
  imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com'],
  imagetools_credentials_hosts: ['mydomain.com', 'otherdomain.com']
});
```

### `imagetools_fetch_image`

This option can be used to define a custom fetch function, which provides another way to access images in complex situations. The function will be passed the HTML element of the image to be fetched and should return a `Promise` containing a `Blob` representation of the image.

**Type:** `Function`

#### Example: Using `imagetools_fetch_image`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'image',
  plugins: 'image imagetools',
  imagetools_fetch_image: function (img) {
    return new tinymce.util.Promise(function (resolve) {
      // Fetch the image and return a blob containing the image content
      ...
      resolve(new Blob(...));
    });
  }
});
```

{% include configuration/image-proxy.md %}

### `imagetools_toolbar`

The exact selection of buttons that will appear on the contextual toolbar can be controlled via `imagetools_toolbar` option.

**Possible Values:**

* `rotateleft`
* `rotateright`
* `flipv`
* `fliph`
* `editimage`
* `imageoptions`

**Type:** `String`

**Default Value:** `'rotateleft rotateright | flipv fliph | editimage imageoptions'`

#### Example: Using `imagetools_toolbar`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'image',
  plugins: 'image imagetools',
  imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

## Commands

The Image Tools plugin provides the following JavaScript commands.

{% include commands/imagetools-cmds.md %}
