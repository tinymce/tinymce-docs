---
layout: default
title: Image Tools Plugin
title_nav: Image Tools
description: Image editing features for TinyMCE.
keywords: imagetools, rotate, rotateleft, rotateright, flip, flipv, fliph, editimage, imageoptions
---

The Image Tools (`imagetools`) plugin adds a contextual image editing toolbar to images inserted into the editable area. This works on modern browsers that let you edit images inline.

Note that this feature requires at least Internet Explorer 10 as it uses the `HTML5 File API`. Also note that if the `imagetools` inline toolbar isn't appearing you may need to enable `imagetools_cors_hosts` or `imagetools_proxy`.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  toolbar: "image",
  plugins: "image imagetools"
});
```

### Options

These settings affect the execution of the Image Tools plugin. This plugin's cross-origin resource sharing, proxy and toolbar settings can be modified here.

### `imagetools_cors_hosts`

This option lets you specify an array of domains that allow cors. If cors headers are enabled remote image editing is possible.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  toolbar: "image",
  plugins: "image imagetools",
  imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com']
});
```

### `imagetools_proxy`

This option lets you specify a local proxy script to use when loading images from remote domains.

**Type:** `String`

**Example**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
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

This option lets select which toolbar items you want to display in the `imagetools` contextual toolbar.

**Type:** `String`

**Default Value:** `"rotateleft rotateright | flipv fliph | editimage imageoptions"`

**Possible Values:**

* `rotateleft`
* `rotateright`
* `flipv`
* `fliph`
* `editimage`
* `imageoptions`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  toolbar: "image",
  plugins: "image imagetools",
  imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions"
});
```
