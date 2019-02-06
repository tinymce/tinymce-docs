## icons

The **icons** option allows you to add additional icon packs.

On setup TinyMCE will attempt to load any icon pack specified by the **icons** option. The set of icons from the icon pack will be merged with TinyMCE's default icons where the icons from the icon pack takes higher precedence. This means that an icon pack may choose to simply replace a few of the default icons and/or extend the total set.

TinyMCE will attempt to load the icon pack from the path "*baseURL*/*icons*/icons.js" on initialization where baseURL refers to the root directory of TinyMCE. This is similar to how TinyMCE would load a plugin.

**Type:**  `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  icons: 'material'      // baseURL/material/icons.js
});
```
