## entities

This option contains a comma separated list of entity names that is used instead of characters. Odd items are the character code and even items are the name of the character code.

The base entities < > & ' and " will always be entity encoded into their named equivalents. Though ' and " will only be encoded within attribute values and < > will only be encoded within text nodes. This is correct according too the HTML and XML specs.

Example of usage of the entities option:

```js
tinyMCE.init({
        ...
        entities : "160,nbsp,162,cent,8364,euro,163,pound"
});
```
