## plugins

This option allows you to specify which plugins TinyMCE will attempt to load when starting up.

By default, TinyMCE will not load any plugins.

[Check this documentation page for a list of available plugins]({{ site.baseurl }}/plugins/).

This should be a space separated string.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    plugins : 'advlist autolink link image lists charmap print preview'
    ...
});
```
