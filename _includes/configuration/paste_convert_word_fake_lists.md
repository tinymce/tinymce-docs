### `paste_convert_word_fake_lists`

{% include DEPRECATED/generic-5_10.md %}

This option lets you disable the logic that converts list like paragraph structures into real semantic HTML lists.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `paste_convert_word_fake_lists`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'edit',
  toolbar: 'paste',
  paste_convert_word_fake_lists: false
});
```

