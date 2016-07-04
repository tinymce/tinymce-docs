---
layout: default
title: mode
---

This option specifies how elements are converted into TinyMCE WYSIWYG editor instances. This option can be set to any of the values below.

| Name | Summary |
| --- | --- |
| textareas | Converts all textarea elements to editors when the page loads. |
| specific_textareas | Converts all textarea elements that match the [editor_selector](../configuration/Configuration3x@editor_selector) setting or don't match the [editor_deselector](../configuration/Configuration3x@editor_deselector) setting. |
| exact | Converts elements of the specified names, as listed in the [elements](../configuration/Configuration3x@elements) option. These elements can be any kind -- for example, textareas or divs. |
| none | Does not convert any elements. Later, your page can call the [tinyMCE.execCommand](/wiki.php/API3:method.tinymce.execCommand)("[mceAddControl](/wiki.php/TinyMCE3x:Command_identifiers)", true, "id"); function. |

Note: The textarea_trigger option is deprecated. We strongly recommend you to use the [editor_selector](../configuration/Configuration3x@editor_selector)/[editor_deselector](../configuration/Configuration3x@editor_deselector) options instead since they validate with W3C specifications.

## Example of usage of the mode option:

```html
tinyMCE.init({
	...
	mode : "exact",
	elements : "elm1,elm2"
});

...

<textarea id="elm1" ...
```