## `menubar`

This option allows you to specify which menus should appear and the order that they appear in the menu bar at the top of {{site.productname}}.

To specify the menus that should appear on {{site.productname}}'s menu bar, the menubar option should be provided with a space separated list of menus.

**Type:** `String` _or_ `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`, or `string` of menus

{{site.differs_for_mobile}}

### Example: Customizing the menu bar

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'file edit insert view format table tools help'
});
```

### Example: Disabling/removing the menu bar

To disable the menu bar, the menubar option should be provided a boolean value of `false`.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: false
});
```

If you need more control over the contents of the menus, see the [menu parameter](#menu).
