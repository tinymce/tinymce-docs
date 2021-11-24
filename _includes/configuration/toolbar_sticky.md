## toolbar_sticky

A Sticky Toolbar (or Docking Toolbar), docks the toolbar and the menu to the top of the screen when scrolling down a web page until the editor is no longer visible.

To enable Sticky Toolbars, set `toolbar_sticky` as `true` in the `tinymce.init` script. To disable Sticky Toolbars, set `toolbar_sticky` as `false`

 To see a demo of sticky toolbar, see the [{{site.productname}} Sticky Toolbar Demo](https://codepen.io/tinymce/full/qBWLLMP).

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

{{site.differs_for_mobile}}

### Example: toolbar_sticky

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar_sticky: true
});
```