### `tinydrive_google_drive_client_id`

This option sets the Google Drive client ID for integrating Google Drive into {{site.cloudfilemanager}}. For information on how to generate this ID, refer to the [Google Drive integration guide]({{site.baseurl}}/plugins/premium/tinydrive/integrations/googledrive-integration/).

Type
: `string`

#### Example: Using `tinydrive_google_drive_client_id`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_google_drive_client_id: '<your google drive client id>'
});
```
