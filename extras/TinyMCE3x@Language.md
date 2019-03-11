---
layout: default
title: Language
---

```js
tinyMCE.init({
   ...
   language : 'en',
   ...
});
```

Edit the html file tinymceexamplessimple.html

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Simple theme example</title>

<!-- TinyMCE -->
<script type="text/javascript" src="../jscripts/tiny_mce/tiny_mce.js"></script>
<script type="text/javascript">
tinyMCE.init({
     language : "sv", // change language here
     mode : "textareas",
     theme : "simple"
});
</script>
<!-- /TinyMCE -->
</head>
```

## Download

The language pack download is seperated from TinyMCE, you can search for a language pack [here](https://www.tiny.cloud/get-tiny/).

## Unzip

After you have downloaded the package, unzip and upload it into the tinymce folder, make sure that the paths match up from the zip to the structure on your TinyMCE install.

## Upload

```
/tinymce/jscripts/tiny_mce/langs/
/tinymce/jscripts/tiny_mce/themes/advanced/langs/
/tinymce/jscripts/tiny_mce/plugins/<pluginname>/langs/
```

Tip To Synchronization Use Meld, Kdiff on linux or WinMerge on win32.

Synchronisation on Mac OS X See [http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/ditto.1.html](http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/ditto.1.html) for information on using ditto to merge directories.
