### `google_drive_key`

This option sets the Google Drive API key for integrating Google Drive into {{site.cloudfilemanager}}. For information on how to generate this key, refer to the [Google Drive integration guide]({{site.baseurl}}/tinydrive/integrations/googledrive-integration/).

Type
: `string`

#### Example: Using `google_drive_key`

```js
tinydrive.{{apiname}}({
  google_drive_key: '<your google drive api key>',
  token_provider: '/your-local/jwt-provider'{% include tinydrive/then_code_chunk.md %}
```