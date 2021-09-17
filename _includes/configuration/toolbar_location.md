## `toolbar_location`

The `toolbar_location` option is used to position the [toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar) and [menubar]({{site.baseurl}}/configure/editor-appearance/#menubar). The default behavior is to position the toolbar and menu bar above the content area. Setting this option to `bottom` positions the toolbar and menu bar below the content area. This option works in [classic editor]({{site.baseurl}}/general-configuration-guide/use-tinymce-classic/) (Iframe) mode and inline mode.

Setting this option to `auto`, positions the toolbar and menu bar either:

* Above the content area by default.
* Below the content area if there is not enough space to display the toolbar and menu bar above.

**Type:** `String`

**Default Value:** `auto`

**Possible values:** `auto`, `top`, `bottom`

### Example: Using `toolbar_location`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  toolbar_location: 'bottom'
});
```
