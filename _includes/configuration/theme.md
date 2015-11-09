## theme

This option allows you to specify the theme that TinyMCE should use. The default theme included with TinyMCE is named "modern".

The name of the theme should match the name of the folder within the themes directory of TinyMCE. If the specified theme is not found, TinyMCE will not load.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  theme: "modern"
});
```
