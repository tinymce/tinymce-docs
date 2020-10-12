## `language_url`

When using the [`language`](#language) option to set the user interface language you may choose to place any language pack(s) in a directory other than the default. If you do this you need to provide a simple URL to where the language file is located. We recommend using a site absolute URL.

**Type:** `String`

### Example: Using `language_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  language_url : '/languages/fi.js'  // site absolute URL
});
```

You can find and download languages [here]({{site.gettiny}}/language-packages/).
