## contextmenu

The `contextmenu` option allows you to specify which items appear on the context menu. The format of this option is a space separated list of items in a string.

The context menu option accepts three styles of item:
* Any registered menu item.
* A `"|"` pipe character to indicate a separator should be added to delineate a group of menu items.
* Context menu sections defined by a plugin (usually equal to the plugin name). Separators are automatically inserted between context menu sections.

If the same name is registered as both a context menu section and a menu item, the section takes preference.

The default configuration includes all plugins that provide a context menu; `link`, `image`, `imagetools`, `table`, and `spellchecker`.

**Type:** `String`

#### Default configuration example

```js
tinymce.init({
  selector: "textarea",
  contextmenu: "link image imagetools table spellchecker"
});
```

Further examples of the `contextmenu` option are available in the [context menu examples]({{site.baseurl}}/ui-elements/contextmenu/#exampleusage).