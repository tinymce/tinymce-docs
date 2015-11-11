## browser_spellcheck

One of the several spellchecking options developers have available is to use the browser's native spellchecker. `browser_spellcheck` handles this behavior.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  browser_spellcheck: true
});
```

For more information about spellchecking in TinyMCE see [this page]({{ site.baseurl }}/get-started/spell-checking/) in the Getting Started guide.
