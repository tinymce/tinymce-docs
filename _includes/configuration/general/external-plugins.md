## external_plugins

This option allows you to specify a URL based location of plugins outside of the normal TinyMCE plugins directory.

TinyMCE will attempt to load these as per regular plugins when starting up.  This option is useful when loading TinyMCE from a CDN or when you want to have the TinyMCE directory separate from your custom plugins.

This value should be set as a javascript object that contains a property for each TinyMCE plugin to be loaded. This property should be named after the plugin and should have a value that contains the location that the plugin that will be loaded from.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    external_plugins: {
        "testing": "http://www.testing.com/plugin.min.js",
        "maths": "http://www.maths.com/plugin.min.js"
    },
    ...
});
```
