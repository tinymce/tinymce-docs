## toolbar_drawer

The `toolbar_drawer` option is used to add an additional toolbar panel to accommodate the overflowing toolbar buttons. This option is very useful while using a smaller screen or a contracted editor window. Even when this option is configured, it only appears when the editor window cannot display all the configured toolbar buttons.

Use the [toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar) option to specify the buttons and the order that they will appear in the extended toolbar panels. To create groups within this list, please add `|` pipe characters between the configured groups of controls.

### Type: String

### Settings

The drawer settings have to be specified in the `tinymce.init` at the time of configuring the  `toolbar_drawer` option. There are two types of drawer settings - _floating_ and _sliding_.

* **Floating** - If the `toolbar_drawer` is configured to `floating`, the toolbar panel appears under the `toolbar_drawer` icon in a floating shelf format when the `toolbar_drawer` icon ![**Drawer**]({{site.baseurl}}/images/drawer.png) is clicked.

![**Floating**]({{site.baseurl}}/images/floating.png)

* **Sliding** - If the `toolbar_drawer` is configured to `sliding`, the toolbar panel appears as a fixed panel under the first toolbar panel when the `toolbar_drawer` icon ![**Drawer**]({{site.baseurl}}/images/drawer.png) is clicked.

![**Sliding**]({{site.baseurl}}/images/sliding.png)

### Configuring a drawer

Use the following settings to configure a drawer:

#### Floating drawer
```js
tinymce.init({
    selector: "textarea",
    toolbar_drawer: 'floating'
});
```

#### Sliding drawer
```js
tinymce.init({
    selector: "textarea",
   	toolbar_drawer: 'sliding'
});
```