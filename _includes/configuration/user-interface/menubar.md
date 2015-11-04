## menubar

This option allows you to specify which menus should appear and the order that they appear in the menu bar at the top of TinyMCE.

To specify the menus that should appear on TinyMCE's menu bar, the menubar option should be provided with a space separated list of menus.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    menubar: "file edit insert view format table tools",
    ...
});
```

To disable the menu bar, the menubar option should be provided a boolean value of false.

An example of a disabled menubar is as follows:

```js
tinymce.init({
    ...
    menubar: false,
    ...
});
```

If you need more control over the contents of the menus, see the [menu parameter](#menu).
