## `indent_use_margin`

The **indent_use_margin** option is set if the editor should use margin instead of padding when indenting content.

Type
: `Boolean`

Default Value
: `false`

### Example: Using `indent_use_margin`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  indentation : '20pt',
  indent_use_margin: true
});
```
