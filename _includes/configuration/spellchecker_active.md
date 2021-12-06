### `spellchecker_active`

This option enables or disables the spell checker when the editor is loaded. When set to `false`, the spellchecker will not be active when the editor is initialized. The toolbar button or the menu item will have to be selected by the user to start the spell checker.

Type
: `Boolean`

Default Value
: `true`

Possible Values
: `true`, `false`

#### Example: Using `spellchecker_active`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_active: true
});
```

