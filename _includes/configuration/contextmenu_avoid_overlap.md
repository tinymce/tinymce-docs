## `contextmenu_avoid_overlap`

{{site.requires_5_5v}}

The `contextmenu_avoid_overlap` option prevents the context menu from covering (or overlapping) specific nodes within the editor. This option accepts a [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). When the context menu is opened on a node that matches the specified selector, the context menu will render below the node, instead of where the click occurred. If there is not enough room in the browser window below the node, the context menu will be shown above the node.

**Type**: `String`

**Default Value**: `''`

#### Example

```js
tinymce.init({
  selector: 'textarea',
  contextmenu_avoid_overlap: '.mce-spelling-word'
});
```