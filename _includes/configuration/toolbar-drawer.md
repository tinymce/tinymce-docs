## toolbar_drawer

The `toolbar_drawer` option is used to add an additional toolbar to accommodate the overflowing toolbar buttons. This option is very useful while using a smaller screen or a contracted editor window. The toolbar drawer is initially hidden, and can be shown by pressing the `toolbar_drawer` icon ![**Drawer**]({{site.baseurl}}/images/icons/more-drawer.svg). The button only appears if the toolbar buttons do not fit horizontally. This feature is configured using the `toolbar_drawer` configuration setting. Even when this option is configured, it only appears when the editor window cannot display all the configured toolbar buttons.

Use the [toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar) option to specify the buttons and the order that they will appear in the extended toolbars. To create groups within this list, please add `|` pipe characters between the configured groups of controls.

> **Note:** The toolbar drawer is not available when using [multiple toolbars]({{site.baseurl}}/configure/editor-appearance/#usingmultipletoolbars) or the [toolbar(n)]({{site.baseurl}}/configure/editor-appearance/#toolbarn) option.

**Type:** `String`

**Default Value:** `floating`

**Possible Values:** `false`, `'floating'`, or `'sliding'`

{{site.differs_for_mobile}}

## Settings

The drawer settings have to be specified in the `tinymce.init` at the time of configuring the  `toolbar_drawer` option. There are two types of drawer settings - _floating_ and _sliding_.

### Floating

If the `toolbar_drawer` is configured to `floating`, the toolbar appears under the `toolbar_drawer` icon in a floating shelf format when the `toolbar_drawer` icon ![**Drawer**]({{site.baseurl}}/images/icons/more-drawer.svg) is clicked.

![**Floating**]({{site.baseurl}}/images/floating_drawer.png)

#### Configuring a Floating drawer

Use the following settings to configure a Floating drawer:

```js
tinymce.init({
    selector: "textarea",
    toolbar_drawer: 'floating'
});
```

### Sliding

If the `toolbar_drawer` is configured to `sliding`, the toolbar appears as a fixed toolbar under the first toolbar when the `toolbar_drawer` icon ![**Drawer**]({{site.baseurl}}/images/icons/more-drawer.svg) is clicked.

![**Sliding**]({{site.baseurl}}/images/sliding_drawer.png)

#### Configuring a Sliding drawer

Use the following settings to configure a Sliding drawer:

```js
tinymce.init({
    selector: "textarea",
    toolbar_drawer: 'sliding'
});
```
