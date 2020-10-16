## `contextmenu`

The `contextmenu` option allows you to specify which items appear on the context menu. The format of this option is a space separated list of items in a string.

The context menu option accepts three styles of item:
* Any registered menu item.
* A `"|"` pipe character to indicate a separator should be added to delineate a group of menu items.
* Context menu sections defined by a plugin (usually equal to the plugin name). Separators are automatically inserted between context menu sections.

If the same name is registered as both a context menu section and a menu item, the context menu section takes preference.

The default configuration includes the context menu sections for the following plugins: `link`, `linkchecker` , `image`, `imagetools`, `permanentpen`, `table`, and `spellchecker`.

To disable the editor's context menu, set this option to `false`.

**Type:** `String` or `false`

**Default Value:** `'link linkchecker image imagetools table spellchecker configurepermanentpen'`

{{site.ctrl_right_click}}

### Example: Using `contextmenu`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'link image table',
  contextmenu: 'link image table'
});
```

{%if page.title != "Context menu" %}
For information on configuring the `contextmenu` option and creating custom context menu items [context menu examples]({{site.baseurl}}/ui-components/contextmenu/).
{% endif %}