---
layout: default
title: body_class
---

(Requires: 3.0.2)

This option enables you to specify a class for the body of each editor instance. This class can then be used to do TinyMCE specific overrides in your [content_css](https://www.tiny.cloud/docs-3x/api/configuration/Configuration3x@content_css). There is also a specific mceForceColors class that can be used to override the text and background colors to be black and white.

## Examples of usage of the body_class option

This will add the same class to all editors that gets created by the init call.

```js
tinyMCE.init({
  ...
  body_class : "my_class"
});
```

This will set specific classes on the bodies of specific editors.

```js
tinyMCE.init({
  ...
  body_class : "elm1=my_class,elm2=my_class"
});
```
