
## inline

This option allows you to specify whether TinyMCE should work in inline mode.

TinyMCE has two main integration modes - a "traditional" forms based mode and an inline editing mode. The inline editing mode is useful when creating user experiences where you want the editing view of the page to be merged with the reading view of the page. This creates a seamless editing experience and true WYSIWYG behavior. From a technical perspective, in inline mode, the editor does not replace the selected element with it's own iframe, but instead edits the element's content in place instead.

This option is set through a boolean value, which by default is false.

An example of this setting is as follows:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  inline: true
});
```

For more information on the differences between regular and inline editing modes please see this page [here]({{ site.baseurl }}/getting-started/using-tinymce-inline/).
