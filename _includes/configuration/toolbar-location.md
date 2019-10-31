## toolbar_location

The `toolbar_location` option is used to position the [toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar) and [menubar]({{site.baseurl}}/configure/editor-appearance/#menubar). The default behavior is to position them above the content area but by configuring this option with `bottom`, the toolbar and menubar will be positioned below the content area. This option works in both Iframe and inline mode.

**Type:** `String`

**Default Value:** `top`

**Possible values:** `top`, `bottom`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  toolbar_location: 'bottom'
});
```