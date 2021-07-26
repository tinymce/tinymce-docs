### `target_list`

The `target_list` option lets you specify a list of named targets for the `link` dialog. These targets will appear in a dropdown menu in the link dialog. Each target must be defined as an object with a `title` and a `value`. For example: `{title: 'Same page', value: '_self'}`. When the dialog is submitted, the `value` of the selected target item will be set as the link's `target` attribute.

If [`default_link_target`](#default_link_target) is also configured and its value matches a value specified by `target_list`, that item will be set as the default item for the targets dropdown in the link dialog.

**Default Value:**

```js
[
  { text: 'Current window', value: '' },
  { text: 'New window', value: '_blank' }
]
```

#### Example: Adding a `_parent` target to the dropdown list

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  target_list: [
    {title: 'None', value: ''},
    {title: 'Same page', value: '_self'},
    {title: 'New page', value: '_blank'},
    {title: 'Parent frame', value: '_parent'}
  ]
});
```

To disable the option dialog, set `target_list` to `false`.

#### Example: Turning off the target list dialog

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  target_list: false
});
```
