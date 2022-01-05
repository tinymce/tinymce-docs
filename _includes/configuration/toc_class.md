### `toc_class`

With `toc_class` you can change the class name that gets assigned to the wrapper `div`. Please note that you will have to alter [Boilerplate Content CSS]({{ site.baseurl }}/how-to-guides/learn-the-basics/editor-content-css/) accordingly.

Type
: `String`

Default Value
: `'mce-toc'`

#### Example: Using `toc_class`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'toc',
  toolbar: 'toc',
  toc_class: 'our-toc'
});
```

