## toolbar_mode
{% if site.productminorversion < 6.1 %}
<a class="anchor" id="toolbar_drawer"></a>
> **Note**: The `toolbar_drawer` option was deprecated with the release of {{site.productname}} 5.2. The `toolbar_drawer` option was renamed `toolbar_mode`. This change was made to reflect the range of settings available for this option.
{% endif %}

The `toolbar_mode` option is used to add an additional toolbar to accommodate the overflowing toolbar buttons. This option is useful while using a smaller screen or a contracted editor window. The toolbar overflow is initially hidden, and can be shown by pressing the toolbar overflow icon ![**Drawer**]({{site.baseurl}}/images/icons/more-drawer.svg). The button is shown when the editor window cannot display all the configured toolbar buttons.

The toolbar drawer is not available when using [multiple toolbars]({{site.baseurl}}/configure/editor-appearance/#usingmultipletoolbars) or the [toolbar(n)]({{site.baseurl}}/configure/editor-appearance/#toolbarn) option.

**Type:** `String`

**Default Value:** `'wrap'`

**Possible Values:** `wrap`, `'floating'`, `'sliding'`, or `scrolling`

{{site.differs_for_mobile}}

### Settings

The drawer settings have to be specified in the `tinymce.init` at the time of configuring the `toolbar_mode` option. There are two types of drawer settings - _floating_ and _sliding_.

#### Floating

If the `toolbar_mode` is configured to `floating`, the toolbar appears under the toolbar overflow icon in a floating shelf format when the toolbar overflow icon ![**Drawer**]({{site.baseurl}}/images/icons/more-drawer.svg) is clicked.

![**Floating**]({{site.baseurl}}/images/floating_drawer.png)

##### Configuring a Floating drawer

Use the following settings to configure a Floating drawer:

```js
tinymce.init({
    selector: "textarea",
    toolbar_mode: 'floating'
});
```

#### Sliding

If the `toolbar_mode` is configured to `sliding`, the toolbar appears as a fixed toolbar under the first toolbar when the toolbar overflow icon ![**Drawer**]({{site.baseurl}}/images/icons/more-drawer.svg) is clicked.

![**Sliding**]({{site.baseurl}}/images/sliding_drawer.png)

##### Configuring a Sliding drawer

Use the following settings to configure a Sliding drawer:

```js
tinymce.init({
    selector: "textarea",
    toolbar_mode: 'sliding'
});
```

#### Scrolling

If the `toolbar_mode` is configured to `scrolling`, the toolbar appears as a fixed toolbar under the first toolbar when the toolbar overflow icon ![**Drawer**]({{site.baseurl}}/images/icons/more-drawer.svg) is clicked.

![**Sliding**]({{site.baseurl}}/images/sliding_drawer.png)

##### Configuring a Scrolling drawer

Use the following settings to configure a Scrolling drawer:

```js
tinymce.init({
    selector: "textarea",
    toolbar_mode: 'scrolling'
});
```
