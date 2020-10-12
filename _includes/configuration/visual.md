## `visual`

This true/false option gives you the ability to enable or disable the `visual` aid.

This setting also allows `visual` aid to override the `Menu` settings. For instance, you can enable or disable `visual` aid even if the `Menu` is set to `False`.

If the border of a table is set to `0`, then {{site.productname}} adds a dotted line around the table by default.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

### Example: Using `visual`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HRML
  visual: false
});
```
