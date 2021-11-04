### `tinydrive_dropbox_app_key`

This option is used to specify the Dropbox API key for integrating Dropbox into {{site.cloudfilemanager}}. For information on how to generate a Dropbox API key, refer to the [Dropbox integration guide]({{site.baseurl}}/plugins/premium/tinydrive/integrations/dropbox-integration/).

Type
: `string`

#### Example: Using `tinydrive_dropbox_app_key`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_dropbox_app_key: '<your dropbox app key>'
});
```