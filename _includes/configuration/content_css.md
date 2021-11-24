## content_css

The `content_css` option loads the specified CSS files into the editable area.

**Type:** `String`, `Array`

> **Note:** This option is intended for use with {{site.productname}}'s classic mode, as the editable area is sandboxed within an iframe. For inline mode editors, relevant CSS stylesheets should be loaded as part of the webpage {{site.productname}} is rendered in, not using the `content_css` option.

{% include misc/shipped-content-css.md %}

If a relative path is specified, it will be resolved in relation to the URL of the webpage {{site.productname}} is rendered in.

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

To load multiple stylesheets, provide the paths as either a array of strings or a comma-separated string.

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

> **TIP**: To remove the margins between paragraphs (sometimes requested for using {{site.productname}} in email clients), add the following style to the content CSS:
>
> ```css
> /*
>  Removes margins on paragraphs,
>  might be useful for mail clients
> */
> p { margin: 0 }
> ```