### Choice menu items

Choice menu items are a special type of menu item used for split toolbar button menu items. For information on split buttons, see: [Split toolbar buttons]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton).

#### Config options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| value | any | required | A value that is passed to `onItemAction` when the choice menu item is clicked. |
| text | string | optional | Text to display. |
| icon | string | optional | {{site.predefinedIconsOnly}} |
| disabled | boolean | optional | default: false - Represents the menu item's state. When true, the menu item is unclickable. Toggled by the menu item's API. |
| shortcut | string | optional | Text to display in the shortcut label. To register a shortcut, see: [Add custom shortcuts to TinyMCE]({{site.baseurl}}/advanced/keyboard-shortcuts/#addcustomshortcutstotinymce). |

> **Note**: The `icon` option for choice menu items was added in {{site.productname}} 5.3.

For an example of how choice menu items are used in split toolbar buttons, see: [Split button example and explanation]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbuttonexampleandexplanation).