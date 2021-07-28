### `spellchecker_on_load`

> **Note**: Removed in Spell Checker Pro 2.0 (TinyMCE 5.2). Spell Checker Pro will now always run on editor initialization. To disable Spell Checker Pro on load, use [`spellchecker_active`](#spellchecker_active).

This option runs the spellchecker when the contents of the editor is loaded.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `spellchecker_on_load`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_on_load: true
});
```

