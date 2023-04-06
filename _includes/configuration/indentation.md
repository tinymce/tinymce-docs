## `indentation`

The **indentation** option allows specification of the indentation level for indent/outdent buttons in the UI.

The **indentation** option defaults to 30px but can be any value.

**Type:** `String`

**Default Value:** `40px`

### Example: Using `indentation`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  indentation : '20pt'
});
```

## `indent_use_margin`

The **indent_use_margin** option is set if the editor should use margin instead of padding when indenting content.

**Type:** `Boolean`

**Default Value:** `false`

### Example: Using `indent_use_margin`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  indentation : '20pt',
  indent_use_margin: true
});
```
