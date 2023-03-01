{% if page.title == "Paste plugin" %}
  {% assign plugin = "paste" %}
{% else %}
  {% assign plugin = "powerpaste" %}
{% endif %}
### `paste_as_text`

This option enables you to set the default state of the `Paste as text` menu item, which is added by the `{{plugin}}` plugin under the `Edit` menu dropdown. It's disabled by default.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `paste_as_text`

{% if plugin == "powerpaste" %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugin}}',
  menubar: 'edit',
  toolbar: 'paste',
  paste_as_text: true
});
```
{% else %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'edit',
  toolbar: 'paste',
  paste_as_text: true
});
```
{% endif %}

