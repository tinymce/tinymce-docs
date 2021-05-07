## block_formats

The enables you to specify a list of block formats for the block listbox. The format is `'title=block;'`.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  block_formats: 'Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3'
});
```
