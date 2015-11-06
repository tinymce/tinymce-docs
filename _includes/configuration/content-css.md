
## content_css

This option enables you to specify a custom CSS file that extends the theme content CSS. This CSS file is the one used within the editor (the editable area). This option can also be a comma separated list of URLs.

If you specify a relative path, it is resolved in relation to the URL of the (HTML) file that includes TinyMCE, NOT relative to TinyMCE itself.

Absolute path:

```js
// File: http://domain.mine/mysite/index.html

tinyMCE.init({
    ...
    content_css : "/mycontent.css"  // resolved to http://domain.mine/mycontent.css
});
```

Relative path:

```js
// File: http://domain.mine/mysite/index.html

tinyMCE.init({
    ...
    content_css : "mycontent.css"  // resolved to http://domain.mine/mysite/mycontent.css
});
```

Using multiple stylesheets:

```js
tinyMCE.init({
        ...
    content_css : "mycontent.css,mycontent2.css"  // includes both css files in header
});
```

Using multiple stylesheets as array:

```js
tinyMCE.init({
    ...
          content_css : ["mycontent.css","mycontent2.css"]  // includes both css files in header, ability to have CSS with , in URL
});
```

Note:

Browser caching might cause TinyMCE to not read the contents of a changed CSS file. You'll see "old" colors & styles.

One solution is to manually clear the browser cache when the file for content_css or editor_css has changed. Another solution is to use an old hack which adds a bogus parameter to the URL containing a present timestamp like "myFile.css?bogus=10023561235". Possible solutions could look like this:

```js
content_css : "path/myfile.css?" + new Date().getTime(),
```

```js
content_css : "path/myscript.php?myParam=myValue&bogus=" + new Date().getTime(),
```

What is this good for?

The CSS file in this setting should be the very CSS file that controls the looks (or "layout") of all your pages! So, let's say you include a file "myLayout.css" in all your pages in order to control your site's global looks then this file must be set as your content_css option, because then the contents in the editor will also have the looks of your site.
