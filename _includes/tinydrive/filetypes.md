### `filetypes`

This option restricts the files displayed based on the following file type categories:

{% include tinydrive/filetypeslist.md %}

For example: If the application is using {{site.cloudfilemanager}} to insert images, then set `['image']` in the file types array.

Type
: `Array<string>`

#### Example: Using `filetypes` to restrict {{site.cloudfilemanager}} to image formats

```js
tinydrive.{{apiname}}({
  filetypes: ['image'],
  token_provider: '/your-local/jwt-provider'{% include tinydrive/then_code_chunk.md %}
```
