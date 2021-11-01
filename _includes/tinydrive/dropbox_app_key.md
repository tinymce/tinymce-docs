### `dropbox_app_key`

This option is used to specify the Dropbox API key for integrating Dropbox into {{site.cloudfilemanager}}. For information on how to generate a Dropbox API key, refer to the [Dropbox integration guide]({{site.baseurl}}/tinydrive/integrations/dropbox-integration/).

Type
: `string`

#### Example: Using `dropbox_app_key`

```js
tinydrive.{{apiname}}({
  dropbox_app_key: '<your dropbox app key>',
  token_provider: '/your-local/jwt-provider'{% include tinydrive/then_code_chunk.md %}
```