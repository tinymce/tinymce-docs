### `image_list`

This option lets you specify a predefined list of sources for images. `image_list` takes the form of an array containing items to add to a list with a corresponding image. Each item has a `title` and a `value`.

**Type:** `String`

#### Example: Using `image_list`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_list: [
    {title: 'Cat', value: 'cat.png'},
    {title: 'Dog', value: 'dog.jpg'}
  ]
});
```

#### Example of a nested list of images



To create a nested list, replace `value` with `menu` to add the top level of the list, then provide an array of items.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_list: [
    {title: 'Cat', value: 'cat.png'},
    {title: 'Dogs',
      menu: [
        {title: 'Alaskan Husky', value: 'husky.jpg'},
        {title: 'Dingo', value: 'dingo.png'},
        {title: 'Swedish Lapphund', value: 'swedish_lapphund.gif'}
      ]
    }
  ]
});
```

#### Example of an external script that returns an JSON array of images

You can also configure a URL with JSON data. The format of that list is the same as above.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_list: '/mylist.php'
});
```

#### Example of a custom async function

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'image',
  menubar: 'insert',
  toolbar: 'image',
  image_list: function(success) {
    success([
      {title: 'Dog', value: 'mydog.jpg'},
      {title: 'Cat', value: 'mycat.gif'}
    ]);
  }
});
```

