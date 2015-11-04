## convert_fonts_to_spans

If you set this option to true, TinyMCE will convert all font elements to span elements and generate span elements instead of font elements. This option should be used in order to get more W3C compatible code, since font elements are deprecated.

```js
tinymce.init({
        ...
        convert_fonts_to_spans : false
});
```

This is set to **true** by default.
