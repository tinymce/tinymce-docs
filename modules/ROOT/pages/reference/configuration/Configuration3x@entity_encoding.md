---
layout: default
title: entity_encoding
---

This option controls how entities/characters get processed by TinyMCE. The value can be set as shown in Encoding Types below.

The base entities `<` `>` `&` `'` and `"` will always be entity encoded into their named equivalents. Though `'` and `"` will only be encoded within attribute values and `<` `>` will only be encoded within text nodes. This is correct according too the HTML and XML specs.

## Encoding Types

| Name | Summary |
| --- | --- |
| named | Characters will be converted into named entities based on the [entities](https://www.tiny.cloud/docs-3x/api/configuration/Configuration3x@entities) option. For example, a non-breaking space could be encoded as &nbsp;. |
| numeric | Characters will be converted into numeric entities. For example, a non-breaking space would be encoded as &#160;. |
| raw | All characters will be stored in non-entity form except these XML default entities: &amp; &lt; &gt; &quot; |

## Example of usage of the entity_encoding option:

```js
tinyMCE.init({
  ...
  entity_encoding : "raw"
});
```
