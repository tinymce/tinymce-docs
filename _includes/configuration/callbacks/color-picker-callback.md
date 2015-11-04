## color_picker_callback

This option enables you to provide your own color picker.

**Example:**

```js
tinymce.init({
    color_picker_callback: function(callback, value) {
        callback('#FF00FF');
    }
});
```
