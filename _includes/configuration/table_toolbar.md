### `table_toolbar`

This option allows you to specify the toolbar buttons shown on the contextual toolbar for tables. Provide a space-separated list of toolbar buttons in the order they should be shown. To create groups on the toolbar, use the `|` pipe character to add a separator between toolbar buttons.

To disable the table toolbar, set the value to an empty string.

Type
: `String`

Default Value
: `'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol'`

Possible Values
: Any toolbar button. For a list of predefined toolbar buttons, see: [Toolbar Buttons Available for {{site.productname}}]({{site.baseurl}}/advanced/available-toolbar-buttons/).

#### Example: Default table_toolbar configuration

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol'
});
```

#### Example: Disable the table toolbar

To disable or remove the contextual table toolbar, set `table_toolbar` to an empty string.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  table_toolbar: ''
});
```

