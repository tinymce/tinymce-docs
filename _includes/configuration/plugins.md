## `plugins`

This option allows you to specify which plugins {{site.productname}} will attempt to load when starting up. By default, {{site.productname}} will not load any plugins.

Type
: `String`

### Example: Using `plugins`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins : 'advlist autolink link image lists charmap print preview'
});
```

> **Note**: Each plugin entry should be separated by a blank space.

[Check this documentation page for a list of available plugins]({{ site.baseurl }}/plugins/).
