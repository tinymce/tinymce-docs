## contextmenu

The `contextmenu` option allows you to specify which items appear on the context menu. The format of this option is a space separated list of items in a string.

The context menu option accepts three styles of item:
* Any registered menu item.
* A `"|"` pipe character to indicate a separator should be added to delineate a group of menu items.
* Context menu sections defined by a plugin (usually equal to the plugin name). Separators are automatically inserted between context menu sections.

If the same name is registered as both a context menu section and a menu item, the context menu section takes preference.

The default configuration includes the context menu items for all plugins that provide a context menu; `link`, `image`, `imagetools`, `table`, and `spellchecker`.

Alternatively, the editor's context menu can be disabled by setting this option to `false`.

**Type:** `String` or `false`

> **Note**: The browsers native context menu can still be accessed by holding the `Ctrl` key while right clicking with the mouse.
> However if the `contextmenu_never_use_native` option is enabled, holding the `Ctrl` key will have no effect.

#### Default configuration example

```js
tinymce.init({
  selector: "textarea",
  contextmenu: "link image imagetools table spellchecker"
});
```

For information on configuring the `contextmenu` option and creating custom context menu items [context menu examples]({{site.baseurl}}/ui-components/contextmenu/).