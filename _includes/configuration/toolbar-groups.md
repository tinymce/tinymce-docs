## toolbar_groups

{{ site.requires_5_2v }}

The `toolbar_groups` option creates a toolbar button that displays a collection of other toolbar buttons as a pop-up toolbar. The style of toolbar shown is based on the current [toolbar mode](#toolbarmode). For example, if `toolbar_mode` is set to `floating`, the toolbar group pop-up will appear in a floating shelf.

> **Note:** The `toolbar_groups` feature is _only_ supported when using the `floating` toolbar mode. If the `toolbar_groups` option is used with other toolbar modes, the toolbar group button will not be displayed and a warning message will be printed in the console.

This option accepts an object, mapping the button name to the group configuration. For details on configuring toolbar groups, see: [`group toolbar button configuration`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#grouptoolbarbutton).

**Type:** `Object`

### Example: toolbar_groups

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'formatting | alignleft aligncenter alignright',
  toolbar_groups: {
    formatting: {
      icon: 'bold',
      tooltip: 'Formatting',
      items: 'bold italic underline | superscript subscript'
    }
  }
});
```
