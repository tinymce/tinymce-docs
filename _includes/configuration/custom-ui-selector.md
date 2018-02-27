## custom_ui_selector

Use this option to specify elements that you want tinymce to treat as part of the editor ui this means that it won't lose the selection if focus is moved elements matching this selector. The editor blur event won't be fired if focus is moved to elements matching this selector since it's treated as part of the editor UI.

**Type:** `String`

##### Example

```html
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  custom_ui_selector: '.my-custom-button'
});
...
<textarea></textarea>
<button class="my-custom-button">Button</button>
```
