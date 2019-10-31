## toolbar_location

The `toolbar_location` option is used to position the [toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar) and [menubar]({{site.baseurl}}/configure/editor-appearance/#menubar). The default behavior is to position them above the content area but by settings this option to `bottom`, the toolbar and menubar will be positioned below it. This option works in both Iframe and inline mode.

**Type:** `String`

**Default Value:** `top`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  toolbar_location: 'bottom'
});
```