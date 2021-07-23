### `tabfocus_elements`

This option enables you to specify an element `ID` to focus when the user presses the tab key inside the editor. You can also use the special `":prev"` and `":next"` values. It will then place the focus on either the previous or next input element placed before/after the {{site.productname}} instance in the DOM.

**Type:** `String`

#### Example: Using `tabfocus_elements`

```js
// Move focus to specific element
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  tabfocus_elements: 'somebutton'
});
```

```js
// Move focus to next element in DOM
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  tabfocus_elements: ':prev,:next'
});
```
