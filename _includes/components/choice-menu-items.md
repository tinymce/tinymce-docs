#### Choice menu items

Choice menu items are available as split toolbar button menu items. For a description of how choice menu items are, see: [Split toolbar buttons]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton).

##### Config options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display. |
| icon | string | optional | Name of the icon to be displayed. Must correspond to an icon in the [icon pack]({{site.baseurl}}/advanced/editor-icon-identifiers/) or an icon in a [custom icon pack]({{site.baseurl}}/advanced/creating-an-icon-pack/). |
| value | string | required | A value to associate with the menu item. |
| disabled | boolean | optional | default: false - Represents the menu item's state. When true, the menu item is unclickable. Toggled by the menu item's API. |
| shortcut | string | optional | Sets a keyboard shortcut for activating the menu item, such as: `shortcut: 'Ctrl+Alt+Delete'`. For information on available shortcut modifiers, see: [Shortcut modifier key mappings](#shortcutmodifierkeymappings). |

> **Note**: The `icon` option for choice menu items was added in {{site.productname}} 5.3.

####{% include misc/shortcut-os-mappings.md %}

##### API

| Name | Value | Description |
| ---- | ----- | ----------- |
| isActive | () => boolean | Checks if the menu item is active. |
| setActive | (state: boolean) => void | Sets the menu item's active state. |
| isDisabled | () => boolean | Checks if the menu item is disabled. |
| setDisabled | (state: boolean) => void | Sets the menu item's disabled state. |

For an example of how choice menu items are used in Split toolbar buttons, see: [Split button example and explanation]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbuttonexampleandexplanation).