<a class="anchorable" href="#text_color"></a>

## Text color options

These options affect the color selector shown when using the `forecolor` (text color) and `backcolor` (text background) toolbar buttons or menu items. The dimensions and mapping of the grid of text colors can be set here.

### `color_cols`

This option allows for specifying the number of columns for text color grids. The number of rows is calculated based on the number of text colors supplied divided by the specified number of columns.

By default, the number of rows and columns is dependent of the number of colors specified using [`color_map`](#color_map). The dimensions of the grid will be calculated by {{site.productname}} to keep the grid a square or a rectangle with a minimum of 5 columns.

> **Note**: The `textcolor_cols` and `textcolor_rows` properties have been removed in {{site.productname}}{{site.nbsp}}5.

**Type:** `Integer`

#### Example: Using `color_cols`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'forecolor backcolor',
  color_cols: 5
});
```

### `color_map`

This option allows specifying a map of the text colors that will appear in the grid.

**Type:** `Array`

#### Example: Using `color_map`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'forecolor backcolor',
  color_map: [
    '000000', 'Black',
    '808080', 'Gray',
    'FFFFFF', 'White',
    'FF0000', 'Red',
    'FFFF00', 'Yellow',
    '008000', 'Green',
    '0000FF', 'Blue'
  ]
});
```

#### The default color_map

```js
color_map: [
  '#BFEDD2', 'Light Green',
  '#FBEEB8', 'Light Yellow',
  '#F8CAC6', 'Light Red',
  '#ECCAFA', 'Light Purple',
  '#C2E0F4', 'Light Blue',

  '#2DC26B', 'Green',
  '#F1C40F', 'Yellow',
  '#E03E2D', 'Red',
  '#B96AD9', 'Purple',
  '#3598DB', 'Blue',

  '#169179', 'Dark Turquoise',
  '#E67E23', 'Orange',
  '#BA372A', 'Dark Red',
  '#843FA1', 'Dark Purple',
  '#236FA1', 'Dark Blue',

  '#ECF0F1', 'Light Gray',
  '#CED4D9', 'Medium Gray',
  '#95A5A6', 'Gray',
  '#7E8C8D', 'Dark Gray',
  '#34495E', 'Navy Blue',

  '#000000', 'Black',
  '#ffffff', 'White'
]
```

### `custom_colors`

This option allows disabling the custom color picker in all color swatches of the editor.

**Type:** `Boolean`

**Default Value:** `true`

#### Example: Using `custom_colors`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: 'forecolor backcolor',
  custom_colors: false
});
```
