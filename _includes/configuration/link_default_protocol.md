### `link_default_protocol`

This option allows you to set a default protocol for links when inserting/editing a link via the link dialog. The protocol will apply to any links where the protocol has not been specified and the prefix prompt has been accepted.

> **Note**: This option also applies to the [autolink]({{site.baseurl}}/plugins/opensource/autolink) plugin.

Type
: `String`

Default Value
: `'http'`

#### Example: Using `link_default_protocol`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_default_protocol: 'https'
});
```

