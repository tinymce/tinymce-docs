{% if page.title == "Paste plugin" %}
  {% assign plugin = "paste" %}
{% else %}
  {% assign plugin = "powerpaste" %}
{% endif %}
### `smart_paste`

The `smart_paste` function will:

- Detect text that resembles a URL and change the text to a hyperlink.
- Detect text that resembles the URL for an image and will try to replace the text with the image.

To disable the `smart_paste` functionality, set `smart_paste` to `false`.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example: `smart_paste`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugin}}',
  menubar: 'edit',
  toolbar: 'paste',
  smart_paste: false
});
```
