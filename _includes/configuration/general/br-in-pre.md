## br_in_pre

This option allows you to disable TinyMCE's default behavior when pressing the enter key within a `pre` tag. By default, pressing enter within a `pre` tag produces a `br` tag at the insertion point.

For example:

`<pre>This is inside` `<br>` `a pre tag.</pre>`

When `br_in_pre` is set to `false`, rather than inserting a `br` tag TinyMCE will split the `pre` tag.

For example:

`<pre>This is inside </pre>`
`<pre>a pre tag.</pre>`

When set to `false` the user would need to press `shift+enter` to insert a `br` tag.

**Type:** `Boolean`



An example that disables this setting is as follows:

```js
tinymce.init({
	...
    br_in_pre: false,
    ...
});
```
