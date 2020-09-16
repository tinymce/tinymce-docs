## toolbar_persist

{{site.requires_5_5v}}

This option disables the automatic show and hide behavior of the toolbar and menu bar for inline editors. Enable this option to always show the toolbar and menu bar, and not hide them whenever focus is lost. Use this option to make the toolbar and menu bar persistent for inline editors.

**Type:** `Boolean`

**Default Value:** `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  inline: true,
  toolbar_persist: true
});
```
