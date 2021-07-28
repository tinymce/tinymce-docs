### `default_link_target`

This option allows you to set a default `target` value for links when inserting/editing a link via the link dialog. If the value of `default_link_target` matches a value specified by the [`target_list`](#target_list) option, that item will be set as the default item for the targets dropdown in the link dialog.

> **Note**: This option also applies to the [autolink]({{site.baseurl}}/plugins/opensource/autolink) plugin.

**Type:** `String`

#### Example: Using `default_link_target`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  default_link_target: '_blank'
});
```

