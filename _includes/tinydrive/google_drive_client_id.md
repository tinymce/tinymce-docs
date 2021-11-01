### `google_drive_client_id`

This option sets the Google Drive client ID for integrating Google Drive into {{site.cloudfilemanager}}. For information on how to generate this ID, refer to the [Google Drive integration guide]({{site.baseurl}}/tinydrive/integrations/googledrive-integration/).

Type
: `string`

#### Example: Using `google_drive_client_id`

```js
tinydrive.{{apiname}}({
  google_drive_client_id: '<your google drive client id>',
  token_provider: '/your-local/jwt-provider'{% include tinydrive/then_code_chunk.md %}
```