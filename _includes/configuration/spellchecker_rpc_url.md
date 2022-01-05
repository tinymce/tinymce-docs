### `spellchecker_rpc_url`

This option specifies the URL of the server-side `ephox-spelling` service. For instructions on how to set up a Spell Checker Pro server-side component, see: the [server-side component installation guide]({{site.baseurl}}/how-to-guides/premium-server-side-guide/).

> **Note:** `spellchecker_rpc_url` is **not** required when enabling this plugin via [{{site.cloudname}}]({{site.baseurl}}/how-to-guides/cloud-deployment-guide/editor-and-features/)

Type
: `String`

#### Example: Using `spellchecker_rpc_url`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_rpc_url: 'localhost/ephox-spelling'
});
```
