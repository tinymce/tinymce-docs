{% if page.title == "Paste plugin" %}
  {% assign plugin = "paste" %}
  {% assign pluginname = "Paste" %}
{% else %}
  {% assign plugin = "powerpaste" %}
  {% assign pluginname = "PowerPaste" %}
{% endif %}
### `paste_merge_formats`

This option enables the merge format feature of the {{pluginname}} plugin. This merges identical text format elements to reduce the number of HTML elements produced. For example: `<b>abc <b>bold</b> 123</b>` becomes `<b>abc bold 123</b>` since the inner format is redundant. This option is enabled by default but can be disabled if retaining nested or identical format elements is important.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `paste_merge_formats`

{% if plugin == "powerpaste" %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugin}}',
  paste_merge_formats: false
});
```
{% else %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  paste_merge_formats: false
});
```
{% endif %}


