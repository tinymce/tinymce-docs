## forced_root_block

This option enables you to make sure that any non block elements or text nodes are wrapped in block elements. For example `<strong>something</strong>` will result in output like: `<p><strong>something</strong></p>`. This option is enabled by default as of 3.0a1.

**If you set this option to false it will never produce P tags on enter or automatically it will instead produce BR elements and Shift+Enter will produce a P.**

**Note that not using P elements as root block can severly cripple the functionality of the editor.**

```js
tinymce.init({
        ...
        forced_root_block : 'p'
});
```
