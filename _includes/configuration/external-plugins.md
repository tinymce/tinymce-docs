## `external_plugins`

This option allows you to specify a URL based location of plugins outside of the normal {{site.productname}} plugins directory.

{{site.productname}} will attempt to load these as per regular plugins when starting up. This option is useful when loading {{site.productname}} from a CDN or when you want to have the {{site.productname}} directory separate from your custom plugins.

This value should be set as a JavaScript object that contains a property for each {{site.productname}} plugin to be loaded. This property should be named after the plugin and should have a value that contains the location that the plugin that will be loaded from.

The URLs provided can be:

- **Absolute URLs**: Including the protocol, such as `https://www.example.com/plugin.min.js`.
- **Relative to the root directory of the web-server**: Including the leading "`/`" to indicate that it is relative to the web-server root, such as `/plugin.min.js`.
- **Relative to the {{site.productname}} `base_url`**: A relative path without the leading "`/`", such as `../../myplugins/plugin.min.js`. By default, the `base_url` is the directory containing {{site.productname}} javascript file (such as `tinymce.min.js`). For information on the `base_url` option, see: [Integration and setup options - `base_url`](https://www.tiny.cloud/docs/configure/integration-and-setup/#base_url).

**Type:** `Object`

### Example: Using `external_plugins`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  external_plugins: {
    'testing': 'http://www.testing.com/plugin.min.js',
    'maths': 'http://www.maths.com/plugin.min.js'
  }
});
```