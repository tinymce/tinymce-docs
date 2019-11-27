## external_plugins

This option allows you to specify a URL based location of plugins outside of the normal {{site.productname}} plugins directory.

{{site.productname}} will attempt to load these as per regular plugins when starting up. This option is useful when loading {{site.productname}} from a CDN or when you want to have the {{site.productname}} directory separate from your custom plugins.

This value should be set as a JavaScript object that contains a property for each {{site.productname}} plugin to be loaded. This property should be named after the plugin and should have a value that contains the location that the plugin that will be loaded from.

**Type:** `Object`

##### Example: external_plugins

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  external_plugins: {
    'testing': 'http://www.testing.com/plugin.min.js',
    'maths': 'http://www.maths.com/plugin.min.js'
  }
});
```
