## icons

The **icons** option allows replacing and extending icons through an icon pack. Documentation on how to create an icon pack will be added shortly.

On setup, TinyMCE will attempt to load any icon pack specified by the **icons** option. The set of icons from the icon pack will be merged with TinyMCE's default icons where the icons from the icon pack takes higher precedence. This means that an icon pack may choose to simply replace a few of the default icons and/or extend the total set.

TinyMCE will attempt to load the icon pack from the path _**baseURL**/icons/${iconPackName}/icons.js_ on initialization where baseURL refers to the root directory of TinyMCE. This is similar to how TinyMCE would load a plugin.

**Type:**  `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  icons: 'material'      // baseURL/icons/material/icons.js
});
```
