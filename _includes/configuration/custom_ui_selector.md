## `custom_ui_selector`

Use the **custom_ui_selector** option to specify the elements that you want {{site.productname}} to treat as a part of the editor UI. Specifying elements enables the editor not to lose the selection even if the focus is moved to the elements matching this selector. The `editor blur` event is not fired if the focus is moved to elements matching this selector since it's treated as part of the editor UI.

**Type:** `String`

### Example: Using `custom_ui_selector`

```html
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  custom_ui_selector: '.my-custom-button'
});
...
<textarea></textarea>
<button class="my-custom-button">Button</button>
```
