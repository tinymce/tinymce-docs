## `end_container_on_empty_block`

This option allows you to to split the current container block element if the enter key is pressed inside an empty inner block element.

**Type:** `Boolean`

**Default Value:** `false`  // confirmation required

**Possible Values:** `true`, `false`

### Example: Using `end_container_on_empty_block`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  end_container_on_empty_block: true
});
```
