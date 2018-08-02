
## inline

The **inline** option allows you to specify whether TinyMCE should work in inline mode.

TinyMCE has three main integration modes - a "classic" form-based mode, an inline editing mode, and a distraction-free mode. The inline editing mode is useful when creating user experiences where you want the editing view of the page to be merged with the reading view of the page. This creates a seamless editing experience and true WYSIWYG behavior. 

> Note: When in inline mode, the editor does not replace the selected element with it's own iframe, but instead edits the element's content in-place instead. Inline mode only operates against block elements.  

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: '#myeditablediv',  // change this value according to your HTML
  inline: true
});
```

For more information on the differences between the editing modes, please see this page [here]({{ site.baseurl }}/general-configuration-guide/use-tinymce-inline/).
