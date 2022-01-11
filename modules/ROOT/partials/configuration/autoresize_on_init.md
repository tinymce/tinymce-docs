### `autoresize_on_init`

{% include DEPRECATED/generic-5_10.md %}

This option allows you to set whether the editor will attempt to resize itself upon initialization. By default this option is set to `true`.

Type
: `Boolean`

Default Value
: `true`

Possible Values
: `true`, `false`

#### Example: `autoresize_on_init`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autoresize',
  autoresize_on_init: false
});
```
