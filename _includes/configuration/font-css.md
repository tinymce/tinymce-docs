## font_css
The `font_css` option loads the specified font CSS files into both the editable area and the webpage {{site.productname}} is rendered in.

Font CSS files should only contain CSS for specifying custom fonts using the `@font-face` and related CSS rules. 

> **Note:** 
> 
> - This option is intended for use with {{site.productname}}'s classic mode, as the editable area is sandboxed within an iframe. For inline mode editors, relevant font CSS files should be loaded as part of the webpage {{site.productname}} is rendered in, not using the `content_css` option.
> - If you specify a relative path, it will be resolved in relation to the URL of the webpage {{site.productname}} is rendered in.

**Type:** `String`, `Array`

### Absolute path example

```js
// File: http://domain.mine/mysite/index.html

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  font_css : '/myFont.css'  // resolved to http://domain.mine/myFont.css
});
```

### Relative path example

```js
// File: http://domain.mine/mysite/index.html

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  font_css : 'myFont.css'  // resolved to http://domain.mine/mysite/myFont.css
});
```

### Using multiple stylesheets example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  font_css : 'myFont.css,myFont2.css'  // includes both font CSS files in header
});
```

### Using multiple stylesheets as array example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  font_css: ['myFont.css', 'myFont2.css']  // includes both font CSS files in header, ability to have CSS with `,` in URL
});
```