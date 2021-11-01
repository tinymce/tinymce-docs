### `max_image_dimension`

This option constrains the width and height of uploaded images. When specified, any images with a greater width or height than the specified amount would be proportionally resized down to the specified maximum dimension.

Type
: `Number`

#### Example: Using `max_image_dimension`

```js
tinydrive.{{apiname}}({
  max_image_dimension: 1024,
  token_provider: '/your-local/jwt-provider'{% include tinydrive/then_code_chunk.md %}
```
