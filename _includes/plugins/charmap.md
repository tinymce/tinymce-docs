
## charmap

// adds menu control (under Insert menu)

// adds toolbar control

This plugin adds a `charmap` button that enables users to insert special characters into their text. It also adds the menu item `Special character` under the `Insert` menu.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "charmap",
    toolbar: "charmap",
    menubar: "insert"
});
```
