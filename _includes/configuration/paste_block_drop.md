{% if page.title == "Paste plugin" %}
  {% assign plugin = "paste" %}
### paste_block_drop
{% else %}
  {% assign plugin = "powerpaste" %}
### powerpaste_block_drop
{% endif %}

Due to browser limitations, it is not possible to filter content that is dragged and dropped into the editor. When `{{plugin}}_block_drop` is set to true the plugin will disable drag and dropping content into the editor. This prevents the unfiltered content from being introduced. Copy and paste is still enabled.

**Default value:** `false`

**Possible values:**  `true`, `false`

{% if page.title == "Paste plugin" %}
#### Example: Using `paste_block_drop`
{% else %}
#### Example: Using `powerpaste_block_drop`
{% endif %}

{% if plugin == "powerpaste" %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugin}}',
  {{plugin}}_block_drop: false
});
```
{% else %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  {{plugin}}_block_drop: false
});
```
{% endif %}
