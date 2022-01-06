## Tab order

The tab order of the elements in a page, including {{site.productname}}, should be configured by setting the [`tabindex` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) on the relevant HTML elements. The browser will then natively handle the tab order.

To configure `tabindex` for the {{site.productname}} editor, set the attribute on the target element for the editor.

In iframe (classic editor) mode, {{site.productname}} will copy the `tabindex` attribute from the target element to the editor's iframe, to allow this to work correctly. 

### Example: Configuring tab order

```html
tinymce.init({
  selector: 'textarea'
});
...
<input tabindex="1">
<textarea tabindex="2"></textarea>
<input tabindex="3">
```
