## `entities`

This option contains a comma-separated list of entity names that are used instead of characters. Odd items are the character code, and even items are the names of the character code.

The base entities `<`, `>`, `&`, `'`, and `"` will always be entity encoded into their named equivalents. Though, `'` and `"` will only be encoded within attribute values and `<` and `>` will only be encoded within text nodes. This is correct according to the HTML and XML specifications.

*This setting will only encode characters higher than \u007E (126 in unicode).*

**Type:** `String`

### Example: Using `entities`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  entities : '160,nbsp,162,cent,8364,euro,163,pound'
});
```
