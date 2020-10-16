## menu

This option allows you to specify which menus should appear on {{site.productname}}'s menu bar and the [items]({{ site.baseurl }}/advanced/available-menu-items/) that should appear within the menus themselves.

To specify the menus that should appear on {{site.productname}}'s menu bar, the menu option should be provided with a JavaScript object containing a property for each menu. These properties should contain a JavaScript object themselves with properties `title` and `items`.

The `title` property should contain a string with the name of the `menu`. The `items` field should contain a space separated list of the controls that should populate the `menu`.

If you would like to group these menu items, please insert a `|` pipe character between the menu items.

**Type:** `Object`

### Example: The TinyMCE Default Menu Items

{% include configuration/defaultmenuitems.md %}

{{site.differs_for_mobile}}

If all you need is to control which menus are available and/or in what order, see the [menubar parameter](#menubar).
