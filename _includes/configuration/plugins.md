## plugins

This option allows you to specify which plugins TinyMCE will attempt to load when starting up. By default, TinyMCE will not load any plugins.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins : 'advlist autolink link image lists charmap print preview'
});
```

> Note that the plugin entries should be separated by a blank space.

[Check this documentation page for a list of available plugins]({{ site.baseurl }}/plugins/).
