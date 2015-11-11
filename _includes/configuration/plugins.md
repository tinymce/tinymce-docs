## plugins

This option allows you to specify which plugins TinyMCE will attempt to load when starting up. By default, TinyMCE will not load any plugins.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins : 'advlist autolink link image lists charmap print preview'
});
```

> This should be a space separated string.

[Check this documentation page for a list of available plugins]({{ site.baseurl }}/plugins/).
