## `style_formats_autohide`

This option enables auto hiding of styles that can't be applied to the current context. For example: if a style applies only to tables, it wouldn't be visible in the styles drop down when the caret isn't inside a table. By default, irrelevant menu items are disabled

**Type:** `Boolean`
**Default:** `false`

### Example: Using `style_formats_autohide`

```js
tinymce.init({
  selector: 'textarea',
  style_formats: [
    {title: 'Red cell', selector: 'td', classes: 'red'},
    {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}}
  ],
  style_formats_autohide: true
});
```
