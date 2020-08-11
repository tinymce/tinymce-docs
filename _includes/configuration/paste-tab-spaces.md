{% if page.title == "Paste plugin" %}
  {% assign plugin = "paste" %}
  {% assign pluginname = "Paste" %}
{% else %}
  {% assign plugin = "powerpaste" %}
  {% assign pluginname = "PowerPaste" %}
{% endif %}
### `paste_tab_spaces`

This option controls how many spaces are used to represent a tab character in HTML when pasting plain text content. This option by default will cause the {{pluginname}} plugin to convert each tab character into 4 sequential spaces.

{{site.requires_5_4v}}

**Type:** `Number`

**Default Value:** `4`

##### Example: `paste_tab_spaces`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugin}}',
  paste_tab_spaces: 2
});
```
