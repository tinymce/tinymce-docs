---
layout: default
title: General
---

## auto_focus

// http://www.tinymce.com/wiki.php/Configuration:auto_focus

> This option enables you to auto focus an editor instance. The value of this option should be an editor instance id. The editor instance id is the id for the original textarea or div element that got replaced.

Example of usage of the auto_focus option:

```js
tinymce.init({
  ...
  auto_focus: "elm1"
});
```

## br_in_pre

// http://www.tinymce.com/wiki.php/Configuration:br_in_pre

This option allows you to disable TinyMCE's default behaviour when pressing enter within a PRE tag. Pressing enter within a PRE tag will produce a BR tag and will only split PRE tags upon pressing shift+enter when this setting is enabled.

An example that disables this setting is as follows:

```js
tinymce.init({
    br_in_pre: false
});
```


## directionality

// http://www.tinymce.com/wiki.php/Configuration:directionality

> This option allows you to set the base direction of directionally neutral text (i.e., text that doesn't have inherent directionality as defined in Unicode) within the editor. This is similar to the use of the "dir" attribute when using content editable elements by themself.

The allowed values for this configuration option are:

* "ltr"
* "rtl"

An example of this setting is as follows:

```js
tinymce.init({
    ...
    directionality : 'ltr',
    ...
});
```

## browser_spellcheck

// http://www.tinymce.com/wiki.php/Configuration:browser_spellcheck

This is a true/false value if the usage of the browsers internal spellchecker should be used.

```js
tinymce.init({
  ...
  browser_spellcheck : true
});
```

Default value is false.


## content_style

// http://www.tinymce.com/wiki.php/Configuration:content_style

> This option allows you to set custom CSS styles as a string that will be injected into the editor's iframe.

> These styles are useful for previewing content as it will appear outside the editor. Since these styles are not saved with the content, it is important that they match the styles in the location that the content will appear.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    content_style: "div {margin: 10px; border: 5px solid red; padding: 3px}",
    ...
});
```
