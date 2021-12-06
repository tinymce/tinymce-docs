## anchor_bottom

Lets you specify a custom name for the bottom anchor in the url type ahead drop down. To disable the bottom anchor from the drop down set it `false`.

Type
: `String`

Default
: #bottom

### Example of custom value

```js
tinymce.init({
  selector: 'textarea',
  anchor_bottom: '#mybottom'
});
```

### Example of disabling

```js
tinymce.init({
  selector: 'textarea',
  anchor_bottom: false
});
```