## `statusbar`

This option allows you to specify whether {{site.productname}} should display the status bar at the bottom of the editor.

The statusbar includes the [`elementpath`](#elementpath), [`wordcount`]({{site.baseurl}}/plugins/opensource/wordcount/) and editor [`resize`](#resize).

To disable the status bar, the `statusbar` option should be provided with a boolean `false` value.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

### Example: Using `statusbar`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  statusbar: false
});
```
