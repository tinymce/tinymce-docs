## entity_encoding

This option controls how entities/characters get processed by TinyMCE. The value can be set as shown in _Encoding types_ below. You can also mix named and numeric by setting this to "named+numeric" this way it will produce entity names of the ones found in the configured entities and numeric entities for other entities.

The base entities `<`, `>`, `&`, `'`, and `"` will always be entity encoded into their named equivalents. Though, `'` and `"` will only be encoded within attribute values and `<` and `>` will only be encoded within text nodes. This is correct according too the HTML and XML specs.

### Encoding types

| Name     | Summary          |
|----------|------------------|
| named    |Characters will be converted into named entities based on the entities option. For example, a non-breaking space could be encoded as `&nbsp;`. This value is default. |
| numeric  | Characters will be converted into numeric entities. For example, a non-breaking space would be encoded as `&#160;`. |
| raw      |All characters will be stored in non-entity form except these XML default entities: ```&```, ```<```, ```>```, and ```"``` |

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  entity_encoding : "raw"
});
```
