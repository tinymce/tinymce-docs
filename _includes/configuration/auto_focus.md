## `auto_focus`

Automatically set the focus to an editor instance. The value of this option should be an editor instance `id`. The editor instance id is the id for the original `textarea` or `div` element that got replaced.

**Type:** `String`

### Example: Using `auto_focus`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  auto_focus: 'element1'
});
```
