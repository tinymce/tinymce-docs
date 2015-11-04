## auto_focus

This option enables you to auto focus an editor instance. The value of this option should be an editor instance `id`. The editor instance id is the id for the original `textarea` or `div` element that got replaced.

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  auto_focus: "elm1"
});
```
