## `toolbar`

This option allows you to specify the [buttons]({{ site.baseurl }}/advanced/available-toolbar-buttons/) and the order that they will appear on {{site.productname}}'s toolbar.

### Grouping toolbar buttons

To specify the buttons that should appear on {{site.productname}}'s toolbar, the `toolbar` option should be provided with a space separated list of [toolbar buttons]({{ site.baseurl }}/advanced/available-toolbar-buttons/). To create groups within this list, please add `|` pipe characters between the groups of buttons that you would like to create.

**Type:** `String`

#### Example grouped toolbar

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'undo redo | styleselect | bold italic | link image'
});
```

> **Note**: The size of toolbar groups affects the behavior of the toolbar drawer when the `toolbar_mode` is set to `'floating'` (default value) or `'sliding'`. For more information, see: [the `toolbar_mode` setting]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode).

#### Adding toolbar group labels

To specify labels to the grouped buttons that appear on {{site.productname}}'s toolbar, the `toolbar` option should be provided with an array of objects with `name` and `items` as object properties. The `name` should be a string value that will be set as the `title` attribute on the `div` containing the toolbar group. The `items` should be an array of strings that indicate the buttons that should appear within the particular toolbar group.

**Type:** `Array`

##### Example: Adding toolbar group labels

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: [
    {
      name: 'history', items: [ 'undo', 'redo' ]
    },
    {
      name: 'styles', items: [ 'styleselect' ]
    },
    {
      name: 'formatting', items: [ 'bold', 'italic']
    },
    {
      name: 'alignment', items: [ 'alignleft', 'aligncenter', 'alignright', 'alignjustify' ]
    },
    {
      name: 'indentation', items: [ 'outdent', 'indent' ]
    }
  ]
});
```

### Disabling the toolbar

To disable the toolbar, the toolbar option should be provided a boolean value of `false`.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Disabling the toolbar

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
    toolbar: false
});
```

### Using multiple toolbars

To specify multiple toolbars, the toolbar option should be provided with an array of space separated strings.

**Type:** `Array`

#### Example: Adding multiple toolbars

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: [
    'undo redo | styleselect | bold italic | link image',
    'alignleft aligncenter alignright'
  ]
});
```

Alternatively, you may specify multiple toolbars through the use of the [toolbar(n)](#toolbarn) option.
