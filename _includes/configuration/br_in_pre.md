## `br_in_pre`

This option allows you to disable {{site.productname}}'s default behavior when pressing the enter key within a `pre` tag. By default, pressing enter within a `pre` tag produces a `br` tag at the insertion point. For example:

`<pre>This is inside` `<br>` `a pre tag.</pre>`

However, when `br_in_pre` is set to `false`, rather than inserting a `br` tag {{site.productname}} will split the `pre` tag. For example:

`<pre>This is inside </pre>`
`<pre>a pre tag.</pre>`

> **Note**: when set to `false`, `shift+enter` will insert a `br` tag.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

### Example: Using `br_in_pre`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  br_in_pre: false
});
```
