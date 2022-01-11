## `indentation`

The **indentation** option allows specification of the indentation level for indent/outdent buttons in the UI.

The **indentation** option defaults to 30px but can be any value.

Type
: `String`

Default Value
: `'30px'`

### Example: Using `indentation`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  indentation : '20pt'
});
```

{% include configuration/indent_use_margin.md %}
