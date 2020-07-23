## toolbar_mode
{% if site.productminorversion < 6.1 %}
<a class="anchor" id="toolbar_drawer"></a>
> **Note**: The `toolbar_drawer` option was deprecated with the release of {{site.productname}} 5.2. The `toolbar_drawer` option was renamed to `toolbar_mode`. This change was made to reflect the range of settings available for this option.
{% endif %}

The `toolbar_mode` option is used to extend the toolbar to accommodate the overflowing toolbar buttons. This option is useful for small screens or small editor frames.

When the toolbar_mode is set to `'floating'` or `sliding`, the editor will move toolbar buttons to the toolbar drawer based on:

- The defined toolbar groups.
- The width of the editor.

For example. If the following toolbar configuration is wider than the editor, the items before the separator (`|`) will appear in the main toolbar and the rest will be moved to the toolbar drawer.

```js
tinymce.init({
    selector: 'textarea',
    toolbar: 'undo redo styleselect bold italic alignleft aligncenter alignright alignjustify | bullist numlist outdent indent'
});
```

Two situations to consider when organising the toolbar:

- When there are two or more toolbar button groups, the main toolbar will show as many complete, sequential toolbar groups as possible within the width of the editor. Any remaining toolbar button groups will be moved to the toolbar drawer.
- If the first toolbar button group is wider than the editor, the whole toolbar will be shown in the toolbar drawer.

The toolbar modes are not available when using [multiple toolbars]({{site.baseurl}}/configure/editor-appearance/#usingmultipletoolbars) or the [toolbar(n)]({{site.baseurl}}/configure/editor-appearance/#toolbarn) option.

**Type:** `String`

**Default Value:** `'floating'`

**Possible Values:** `'floating'`, `'sliding'`, `'scrolling'`, or `'wrap'`

{{site.differs_for_mobile}}

### Settings

The toolbar mode is specified in the `tinymce.init`. There are four toolbar modes:

- [Floating](#floating)
- [Sliding](#sliding)
- [Scrolling](#scrolling)
- [Wrap](#wrap)

#### Floating

If the `toolbar_mode` is configured to `floating`, the toolbar appears under the toolbar overflow icon in a floating shelf format when the toolbar overflow icon ![Drawer]({{site.baseurl}}/images/icons/more-drawer.svg) is clicked.

![Floating Toolbar]({{site.baseurl}}/images/floating_toolbar.png)

##### Configuring a Floating toolbar

Use the following settings to configure a Floating toolbar:

```js
tinymce.init({
    selector: "textarea",
    toolbar_mode: 'floating'
});
```

#### Sliding

If the `toolbar_mode` is configured to `sliding`, the toolbar appears as a fixed toolbar under the first toolbar when the toolbar overflow icon ![Drawer]({{site.baseurl}}/images/icons/more-drawer.svg) is clicked.

![Sliding Toolbar]({{site.baseurl}}/images/sliding_toolbar.png)

##### Configuring a Sliding toolbar

Use the following settings to configure a Sliding toolbar:

```js
tinymce.init({
    selector: "textarea",
    toolbar_mode: 'sliding'
});
```

#### Scrolling

The scrolling toolbar mode is intended for touch screen devices.

If the `toolbar_mode` is configured to `scrolling`, the overflow toolbar buttons will remain on the toolbar, but will be hidden from view. To access the overflow toolbar buttons, scroll the toolbar. To scroll the toolbar on a touch screen, use a swiping action. To scroll on a desktop device, hold shift and scroll with a mouse.

A scrollbar will be shown on the toolbar on desktop devices and hybrid devices in desktop mode.

![Scrolling Toolbar]({{site.baseurl}}/images/scrolling_toolbar.png)

##### Configuring a Scrolling toolbar

Use the following settings to configure a Scrolling toolbar:

```js
tinymce.init({
  selector: "textarea",
  toolbar_mode: 'scrolling'
});
```

#### Wrap

If the `toolbar_mode` is configured to `wrap`, the overflow toolbar buttons will be shown on one or more toolbars below the primary toolbar.

![Wrapped Toolbar]({{site.baseurl}}/images/wrapped_toolbar.png)

##### Configuring a Wrapped toolbar

Use the following settings to configure a wrapped toolbar:

```js
tinymce.init({
  selector: "textarea",
  toolbar_mode: 'wrap'
});
```