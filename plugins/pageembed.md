---
layout: default
title: Page Embed plugin
title_nav: Page Embed
description: Easily inserts iframe into the content.
keywords: view Page Embed insert iframe
controls: toolbar button, menu item
---

{{site.premiumplugin}}

The **Page Embed** plugin embeds a page in the content using an iframe (Inline frames). The size of these iframes can be configured to be responsive or another user-defined dimension. The ability to use iframes helps create visually engaging content which is very useful for online courses and learning materials.

### Creating a Page Embed toolbar button

Use the following script to create a Page Embed toolbar button:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "pageembed",
  menubar: "view",
  toolbar: "pageembed"
});
```

**Result**: The ![**Page Embed**]({{site.baseurl}}/images/pageembed.png)(**Page Embed**) button appears in the toolbar menu.

### Using Page Embed

Use the following procedure for embedding an iframe into the content:

1. Click on the ![**Page Embed**]({{site.baseurl}}/images/pageembed.png)(**Page Embed**) toolbar button.
2. The **InsertEdit Iframe** dialog box appears.
![InsertEdit Iframe]({{site.baseurl}}/images/insert-iframes.png)
3. In the **General** tab, enter the url in the **Source** field, or click on the ![Source]({{site.baseurl}}/images/source.png)(**Source**) icon to upload a file.
4. For setting the iframe size, select the preferred option from the **Size** drop-down menu.
* **Inline Value** is used to insert an iframe within a line. To set the dimensions of an inline iframe, provide the values in pixels in the **Width** and **Height** input box.
        * The default values are **Width** `350px` and **Height** `260px`. Click the ![Constrain Proportions]({{site.baseurl}}/images/constrainprop.png)(**Constrain Proportions**) lock icon to change the default values.
> Note: The **Width** and **Height** fields are only available if the **Inline Value** value option is selected.
* **Responsive** is used to make embedded content responsive using CSS, so that content such as video and calendars resize with the browser’s viewport. There are four options provided to set the responsive iframe size.

        * **Responsive-21X9**
        * **Responsive-16X9**
        * **Responsive-4X3**
        * **Responsive-1X1**
> Note: The **Responsive** option has pre-defined width and height values. The **Width** and **Height** fields are not available if one of the **Responsive** values are selected.
5. In the **Advanced** tab, provide a name and title for the iframe in the **Name** and **Title** fields.
6. The **Long description URL** field can be used to describe an iframe by including text in a separate resource when a short text alternative does not adequately convey the function or information provided in the iframe.
* Click on the ![Source]({{site.baseurl}}/images/source.png)(**Long description URL**) icon to upload a description file.
7. Click on the **Show iframe border** radio button to display iframe borders.
8. Click on the **Scrollbar** radio button to add scrollbars to the iframe.
9. Click **Save** to save and exit or **Cancel** to dismiss and exit.

**Result**: An iframe of the configured size is inserted in the desired location within the content.

> Note: Not all pages allow embedding, as the X-Frame-Options header can be set to block embedding. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) for more information.

### Options to configure the Page Embed properties

### Create custom classes

The `tiny_pageembed_classes` takes an array of objects with `text` and `value` properties that will populate the size selection fields in the plugin dialog. Use the following script to create custom classes using the `tiny_pageembed_classes` option:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "pageembed",
  menubar: "view",
  toolbar: "pageembed",
  tiny_pageembed_classes: [
    { text: 'Big embed', value: 'my-big-class' },
    { text: 'Small embed', value: 'my-small-class' }
  ]
});
```

### Disable select

When the `tiny_pageembed_classes` value is set to an empty array, the size selection fields are not available and only exact sizes can be set. Use the following script to disable `select` using the `tiny_pageembed_classes` option:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "pageembed",
  menubar: "view",
  toolbar: "pageembed",
  tiny_pageembed_classes: [ ]
});
```

### Inline styles for page embeds

The `tiny_pageembed_inline_styles` setting will inline all styles, while also keeping CSS classes, when rendering the embed content. This is useful when the additional CSS classes can't be added to your site. Defaults to `false`.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: tiny_pageembed_inline_styles

To inline page embed styles:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pageembed',
  tiny_pageembed_inline_styles: true
});
```

### Default CSS

If the `tiny_pageembed_classes` setting is left undefined, the default classes will be used. As a result, a responsive size option can be selected.

> The following CSS script must be added to the webpage for the default CSS to work correctly.

```css
{% include css-codeblock/pageembed-plugin-css.md %}
```
For more information on configuring CSS, refer to the [content_css]({{site.baseurl}}/configure/content-appearance/#content_css) section.

Check out the [Page Embed demo]({{site.baseurl}}/demo/pageembed/) to try out this new feature.
