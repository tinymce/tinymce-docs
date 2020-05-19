## Available context menu sections

The following table shows all context menu sections, including sections provided by plugins.
Any menu item can also be added to the context menu.
To retrieve a list from the editor, run the following command from the browser console:

```js
tinymce.activeEditor.ui.registry.getAll().contextMenus
```

The identifier below will add a context menu _section_ containing one or more items. It is not possible to add individual items from the following context menu sections.

| identifier  | Core/Plugin  | Description  |
| ----------- | ------------ | ------------ |
| image | [Image]({{site.baseurl}}/plugins/image/) | Adds the _Image..._ item for opening the **Insert/Edit Image** dialog. |
| imagetools | [Image Tools]({{site.baseurl}}/plugins/imagetools/) | Adds the _Edit image_ item for opening the **Edit Image** dialog. |
| link | [Link]({{site.baseurl}}/plugins/link/) | Adds the _Link..._ item for opening the **Insert/Edit Link** dialog. |
| linkchecker | [Link Checker]({{site.baseurl}}/plugins/linkchecker/) | Adds the _Ignore_ item on links marked as broken, allowing the user to instruct linkchecker to ignore the link. |
| lists | [Lists]({{site.baseurl}}/plugins/lists/) | Adds the _List properties..._ item for opening the **List Properties** dialog. |
| configurepermanentpen | [Permanent Pen]({{site.baseurl}}/plugins/permanentpen/) | Adds the _Permanent pen properties..._ item for opening the **Permanent Pen Properties** dialog when the permanent pen is in use. |
| spellchecker | [Spell Checker]({{site.baseurl}}/plugins/spellchecker/) | Adds a list suggested corrections, an _Ignore_ item, and an _Ignore all_ item. |
| table | [Table]({{site.baseurl}}/plugins/table/) | Adds table related context menu items, including Advanced Tables context menu items (if the Advanced Tables plugin is enabled). |

For a list of available menu items that can be added to the context menu, see: [Editor control identifiers - Menu controls]({{site.baseurl}}/advanced/editor-control-identifiers/#menucontrols).