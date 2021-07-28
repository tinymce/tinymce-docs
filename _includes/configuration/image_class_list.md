### `image_class_list`

This option lets you specify a predefined list of classes to add to an image. It takes the form of an array with items to set classes on links.

**Type:** `String`

#### Example: Using `image_class_list`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_class_list: [
    {title: 'None', value: ''},
    {title: 'No border', value: 'img_no_border'},
    {title: 'Green border', value: 'img_green_border'},
    {title: 'Blue border', value: 'img_blue_border'},
    {title: 'Red border', value: 'img_red_border'}
  ]
});
```

#### Example of a nested list of image classes

{{site.requires_5_5v}}

To create a nested list, replace `value` with `menu` to add the top level of the list, then provide an array of items.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_class_list: [
    {title: 'None', value: ''},
    {title: 'No border', value: 'img_no_border'},
    {title: 'Borders',
      menu: [
        {title: 'Green border', value: 'img_green_border'},
        {title: 'Blue border', value: 'img_blue_border'},
        {title: 'Red border', value: 'img_red_border'}
      ]
    }
  ]
});
```

