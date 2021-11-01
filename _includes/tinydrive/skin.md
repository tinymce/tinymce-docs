### `skin`

This option sets the skin applied to {{site.cloudfilemanager}}. The default skin included with {{site.cloudfilemanager}} is named "oxide".

Type
: `String`

Default Value
: `'oxide'`

Possible Values
: `'oxide'`, `'oxide-dark'`

#### Example: Changing the {{site.cloudfilemanager}} skin

```js
tinydrive.{{apiname}}({
  skin: 'dark',
  token_provider: '/your-local/jwt-provider'{% include tinydrive/then_code_chunk.md %}
```
