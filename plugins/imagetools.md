---
layout: default
title: Image Tools plugin
title_nav: Image Tools
description: Image editing features for TinyMCE.
keywords: imagetools rotate rotateleft rotateright flip flipv fliph editimage imageoptions
---

Image Tools (`imagetools`) plugin adds a contextual editing toolbar to the images in the editor. If toolbar is not appearing on image click, it might be that you need to enable `imagetools_cors_hosts` or `imagetools_proxy` (see below).

{{site.svgsNotSupported}}

## Cloud Installation
The Image Tools plugin is provided with all subscriptions to [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/), including an automatically configured image proxy.
Simply add `image` to the `toolbar` list and `image imagetools` to the `plugins` list.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  toolbar: "image",
  plugins: "image imagetools"
});
```

## Self-hosted Installation
To enable the {{site.productname}} Image Tools plugin:

1. Add 'image' to the 'toolbar' list and 'image imagetools' to the 'plugins' list
2. Enable `imagetools_cors_hosts` and `imagetools_proxy` options as needed

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  toolbar: "image",
  plugins: "image imagetools",
  imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com'],
  imagetools_proxy: 'proxy.php'
});
```

## Options

### `imagetools_cors_hosts`

Image Tools cannot work with images from another domains due to security measures imposed by browsers on so called cross-origin HTTP requests. To overcome these constraints, Cross-Origin Resource Sharing (CORS) must be explicitly enabled on the specified domain(s) (for more information check [HTTP access control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)).

An array of supported domains for the images (with CORS enabled on them) can be supplied to {{site.productname}} via `imagetools_cors_hosts` option.

> Note: Each string in the array *must* be in the format of `mydomain.com`. Do not include protocols (`http://, https://`) or any trailing slashes in your domains.

> Note: `imagetools_cors_hosts` is **not** required when enabling this plugin via [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/).

**Type:** `String[]`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  toolbar: "image",
  plugins: "image imagetools",
  imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com']
});
```

### `imagetools_credentials_hosts`

This option can be used together with the `imagetools_cors_hosts` option to allow credentials to be sent to the CORS host. This is not enabled by default since the server needs to have proper CORS headers to support this.

**Type:** `String[]`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  toolbar: "image",
  plugins: "image imagetools",
  imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com'],
  imagetools_credentials_hosts: ['mydomain.com', 'otherdomain.com']
});
```

### `imagetools_fetch_image`

This option can be used to define a custom fetch function, which provides another way to access images in complex situations. The function will be passed the HTML element of the image to be fetched and should return a `Promise` containing a `Blob` representation of the image.

**Type:** `Function`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  toolbar: "image",
  plugins: "image imagetools",
  imagetools_fetch_image: function (img) {
    return new tinymce.util.Promise(function (resolve) {
      // Fetch the image and return a blob containing the image content
      ...
      resolve(new Blob(...));
    });
  }
});
```

### `imagetools_proxy`

Another way of getting images across domains is using local server-side proxy. Proxy is basically a script, that will retrieve remote image and pipe it back to {{site.productname}}, as if it was local. Example of such proxy (written in PHP) can be found below.

[{{site.cloudname}}]({{site.pricingpage}}) subscription also includes proxy service written in Java. Check [Install Server-side Components]({{ site.baseurl }}/enterprise/server/) guide for details.

> Note: `imagetools_proxy` is **not** required when enabling this plugin via [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/)

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  toolbar: "image",
  plugins: "image imagetools",
  imagetools_proxy: 'proxy.php'
});
```

**Example of a proxy.php script**

```php
<?php
// We recommend to extend this script with authentication logic
// so it can be used only by an authorized user
$validMimeTypes = array("image/gif", "image/jpeg", "image/png");

if (!isset($_GET["url"]) || !trim($_GET["url"])) {
    header("HTTP/1.0 500 Url parameter missing or empty.");
    return;
}

$scheme = parse_url($_GET["url"], PHP_URL_SCHEME);
if ($scheme === false || in_array($scheme, array("http", "https")) === false) {
    header("HTTP/1.0 500 Invalid protocol.");
    return;
}

$content = file_get_contents($_GET["url"]);
$info = getimagesizefromstring($content);

if ($info === false || in_array($info["mime"], $validMimeTypes) === false) {
    header("HTTP/1.0 500 Url doesn't seem to be a valid image.");
    return;
}

header('Content-Type:' . $info["mime"]);
echo $content;
?>
```

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

**Default Value:** `"rotateleft rotateright | flipv fliph | editimage imageoptions"`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  toolbar: "image",
  plugins: "image imagetools",
  imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions"
});
```

## Commands

The Image Tools plugin provides the following JavaScript commands.

{% include commands/imagetools-cmds.md %}
