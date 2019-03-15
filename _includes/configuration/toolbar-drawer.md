## toolbar_drawer

The `toolbar_drawer` option is used to add an additional toolbar panel to accommodate the overflowing toolbar icons. This option is very useful while using a smaller screen or in case of using a contracted editor window. Even when this option is configured, it only appears when the editor window cannot display all the configured toolbar menu items.

Use the [toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar) and [toolbar(n)]({{site.baseurl}}/configure/editor-appearance/#toolbarn) options to specify the buttons and the order that they will appear in the extended toolbar panels. To create groups within this list, please add `|` pipe characters between the configured groups of controls.

### Settings

The drawer settings have to be specified in the `tinymce.init` at the time of configuring the  `toolbar_drawer` option. There are two types of drawer settings - _floating_ and _sliding_.

* **Floating** - If the `toolbar_drawer` is configured to `floating`, the toolbar panel appears under the `toolbar_drawer` icon in a floating shelf format when the `toolbar_drawer` icon ![**Drawer**]({{site.baseurl}}/images/drawer.png) is clicked.

![**Floating**]({{site.baseurl}}/images/floating.png)

* **Sliding** - If the `toolbar_drawer` is configured to `sliding`, the toolbar panel appears as a fixed panel under the first toolbar panel when the `toolbar_drawer` icon ![**Drawer**]({{site.baseurl}}/images/drawer.png) is clicked.

![**Sliding**]({{site.baseurl}}/images/sliding.png)

### Configuring a drawer

Use the following settings to configure a drawer:

#### Floating drawer:
```js
tinymce.init({
    selector: "textarea",
    plugins: [
      'autosave advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker toc',
      'searchreplace wordcount visualblocks visualchars code fullscreen fullpage insertdatetime media nonbreaking',
      'save table directionality emoticons template paste textcolor importcss colorpicker textpattern',
      'codesample help noneditable print'
    ],
    toolbar: 'undo redo sidebar1 align fontsizeselect fontselect formatselect styleselect insertfile | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons table codesample code | ltr rtl',
	toolbar_drawer: 'floating'
});
```

#### Sliding:
```js
tinymce.init({
    selector: "textarea",
    plugins: [
      'autosave advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker toc',
      'searchreplace wordcount visualblocks visualchars code fullscreen fullpage insertdatetime media nonbreaking',
      'save table directionality emoticons template paste textcolor importcss colorpicker textpattern',
      'codesample help noneditable print'
    ],
    toolbar: 'undo redo sidebar1 align fontsizeselect fontselect formatselect styleselect insertfile | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons table codesample code | ltr rtl',
	toolbar_drawer: 'sliding'
});
```