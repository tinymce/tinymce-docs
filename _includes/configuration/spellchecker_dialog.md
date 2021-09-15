### `spellchecker_dialog`

This option specifies the primary spell checking mode.

- When set to `true`, the [`spellcheck` toolbar button](#toolbarbuttons) will open a dialog that will step the user through each potential spelling error in the document.
- When set to `false`, the [`spellcheck` toolbar button](#toolbarbuttons) will enable or disable as-you-type spell checking and the [`spellcheckdialog` toolbar button](#toolbarbuttons) will open the spell checker dialog.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `spellchecker_dialog`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'spellchecker',
  spellchecker_dialog: true
});
```

