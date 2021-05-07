---
layout: default
title: doctype
---

This option enables you to specify the doctype that is used while editing content within TinyMCE.

The default value is set to:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
```

This option does not affect the format of tags: "<br>" versus "<br />". See [element_format](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@element_format/) option instead.

Note however that there is no need to change the doctype to XHTML because TinyMCE will produce XHTML in any case. Read the [comments here](http://archive.tinymce.com/forum/viewtopic.php?id=15069).

On the other hand, if you set it to XHTML your IE7 users will have problem selecting the edit area.

If unsure, don't specify the doctype.

## Example of usage of the doctype option:

```js
tinyMCE.init({
  ...
  doctype : '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
});
```
