## toolbar_groups

{{ site.requires_5_2v }}

The `toolbar_groups` option is used to create a collection of toolbar buttons that should be displayed in a popup when clicked. The way the groups are displayed will depend on the current [toolbar mode](#toolbarmode). As an example, if `toolbar_mode` is configured to use a `floating` toolbar drawer, then the groups will also appear in a floating shelf.

> **Note:** Currently the `toolbar_groups` feature is only supported when using the `floating` toolbar mode. If used with any other toolbar modes, then the button will not be displayed and a warning message will be printed in the console.

This option should contain an object mapping the button name to the group configuration. See the [`group toolbar button configuration`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#groupbutton) for more information on the required group configuration.

**Type:** `Object`

##### Example: toolbar_groups

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