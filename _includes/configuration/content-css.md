
## content_css
It is usually desirable that {{site.productname}}'s editable area has the same styling as the surrounding content. Consistent styling is achieved with the `content_css` option, which enables you to extend external CSS into the editable area.

{% include configuration/shipped-content-css.md %}

> **Note**: If you specify a relative path, it is resolved in relation to the URL of the (HTML) file that includes {{site.productname}}, not relative to {{site.productname}} itself.

**Type:** `String`, `Array`

### Absolute path example

```js
// File: http://domain.mine/mysite/index.html

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css : '/myLayout.css'  // resolved to http://domain.mine/myLayout.css
});
```

### Relative path example

```js
// File: http://domain.mine/mysite/index.html

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css : 'mycontent.css'  // resolved to http://domain.mine/mysite/mycontent.css
});
```

### Using multiple stylesheets example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css : 'mycontent.css,mycontent2.css'  // includes both CSS files in header
});
```

### Using multiple stylesheets as array example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css: ['mycontent.css', 'mycontent2.css']  // includes both CSS files in header, ability to have CSS with `,` in URL
});
```

### Browser caching

Browser caching might cause {{site.productname}} to not read the contents of a changed CSS file. You'll see "old" colors & styles.

One solution is to manually clear the browser cache when the file for `content_css` or `editor_css` has changed. Another solution is to use an old hack which adds a bogus parameter to the URL containing a present time stamp like "myFile.css?bogus=10023561235". Possible solutions could look like this:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css: 'path/myfile.css?' + new Date().getTime()
});
```

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css: 'path/myscript.php?myParam=myValue&bogus=' + new Date().getTime()
});
```
