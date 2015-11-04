
## nonbreaking

// adds menu control (under Insert menu)

// adds toolbar control

This plugin adds a button for inserting nonbreaking space entities `&nbsp;` at the current caret location (cursor insert point). It also adds a menu item `Nonbreaking space` under the Insert menu dropdown and a toolbar control.

**Type:** `String`

**Example:**

```js
tinymce.init({
	...
    selector: "textarea",  // change this value according to your html
    plugins: "nonbreaking",
    menubar: "insert",
    toolbar: "nonbreaking",
    ...
});
```

### Options

### `nonbreaking_force_tab`

This option allows you to force TinyMCE to insert three `&nbsp;` entities when the user presses the keyboard `tab` key.

It's important to note that this does not change the behavior of the menu and toolbar controls, which will continue to insert a single `&nbsp` entity when `nonbreaking_force_tab` value is `true`.

However, the `true` condition does capture the tab key and contain it within the editable area, whereas when set to its default state of `false` a tab keypress will move the cursor to the next editable area (e.g. a browser url bar or form field on the current page).

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

**Example**

```js
tinymce.init({
	...
    selector: "textarea",  // change this value according to your html
    plugins: "nonbreaking",
    mewnubar: "insert",
    toolbar: "nonbreaking",
    nonbreaking_force_tab: true,
    ...
});
```

