## browser_spellcheck

This option configures TinyMCE to use the browser's native spell checker.

`browser_spellcheck` is not available in either Internet Explorer 8 or 9, as neither browser has native spell checker functionality. For more complete browser support, we recommend using [Spell Checker Pro](../../enterprise/check-spelling/).

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  browser_spellcheck: true
});
```

For more information about spell checking in TinyMCE, see [this page]({{ site.baseurl }}/general-configuration-guide/spell-checking/) in the General-configuration-guide/ guide.
