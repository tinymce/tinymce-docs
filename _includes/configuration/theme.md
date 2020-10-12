## `theme`

This option allows you to specify the theme that {{site.productname}} should use. The default theme included with {{site.productname}} is called **Silver**.

The name of the theme should match the name of the folder within the themes directory of {{site.productname}}. If the specified theme is not found, {{site.productname}} will not load.

**Type:** `String`

### Example: Using `theme`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  theme: 'silver'
});
```
