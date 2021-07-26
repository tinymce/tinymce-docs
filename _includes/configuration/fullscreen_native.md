## `fullscreen_native`

{{ site.requires_5_5v }}

{% if pluginname != "fullscreen" %}
> **Note**: The `fullscreen_native` option requires the Fullscreen plugin.
{% endif %}

The `fullscreen_native` option allows the editor to use the browser full screen mode, rather than only filling the [browser window](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts#What_is_a_viewport) when full screen mode is enabled. This functionality is the same as full screen mode for online videos.

**Type:** `Boolean`

**Default Value:** `false`

**Possible values:** `true`, `false`

### Example: Using `fullscreen_native`

To use the browser-native full screen mode for the {{site.productname}} editor, set `fullscreen_native` to `true`. For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'fullscreen',
  fullscreen_native: true
});
```

### Limitations of the `fullscreen_native` option

The `fullscreen_native` option has the following limitations. When `fullscreen_native` is enabled:

- The Escape keyboard key (Esc) will exit full screen mode. Default editor behavior of the Esc key will be overridden by browser and the Esc key will exit full screen mode instead of closing dialogs, menus, or moving focus from the editor UI to the editor content. This may lead to accessibility issues.
- Firefox users - The full screen keyboard shortcut (Ctrl+Shift+F) cannot be used to repeatedly toggle the browser-native full screen mode on and off without interacting with the editor between on toggles. If the user does not interact with the editor between off and on toggles, the plugin will fall-back to filling the browser window.
- Microsoft Internet Explorer 11 users - The full screen keyboard shortcut (Ctrl+Shift+F) will not activate the browser-native full screen. If the full screen shortcut is used, the plugin will fall-back to filling the browser window.
- If the editor is initialized inside an iframe element, full screen mode will only fill the iframe on Firefox and Microsoft Internet Explorer 11.