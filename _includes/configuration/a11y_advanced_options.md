## `a11y_advanced_options`

This option affects the functionality of:

- The Accessibility Checker plugin (`a11ychecker`).
- The Image plugin (`image`).

Setting `a11y_advanced_options` to `true`:

- Adds the **Image is decorative** option to the _Insert/Edit Image_ dialog, allowing users to specify that an image is decorative and does not require alternative text for accessibility purposes.
- Adds the **Image is decorative** option to the _Accessibility Checker error_ dialog for images without alternative text or the `role="presentation"` attribute.

> **Important**: When `a11y_advanced_options` is set to `true`, [`a11ychecker_allow_decorative_images`]({{site.baseurl}}/plugins/premium/a11ychecker/#a11ychecker_allow_decorative_images) will default to `true`.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

### Example: Using `a11y_advanced_options`

{% if includedSection == 'imagePlugin' %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  a11y_advanced_options: true
});
```
{% elsif includedSection == 'a11yPlugin' %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'a11ychecker',
  a11y_advanced_options: true
});
```
{% else %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  a11y_advanced_options: true
});
```
{% endif %}