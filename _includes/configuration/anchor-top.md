## anchor_top

Lets you specify a custom name for the top anchor in the url type ahead drop down. To disable the to anchor from the drop down set it `false`.

**Type:** `String`

**Default:** #top

### Example of custom value

```js
tinymce.init({
  selector: 'textarea',
  anchor_top: '#mytop'
});
```

### Example of disabling

```js
tinymce.init({
  selector: 'textarea',
  anchor_top: false
});
```