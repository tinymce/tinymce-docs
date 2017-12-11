## formats

This option enables you to override and add custom "formats" to the editor.

A format is the style that gets applied to text when you press, for example, the bold button inside the editor. TinyMCE is equipped with a text formatter engine that enables you to specify exactly what it should produce when the user clicks (in this example) the bold button.

Check out the [custom formats example]({{ site.baseurl }}/demo/format-custom/) for a demonstration of this option.

### Style merging

Similar elements and styles will be merged by default to reduce the output HTML size. So for example, if you select a word and select a font size and font face for it, it will merge these two styles into one `span` element instead of one `span` for **each format type**.

### Built in formats

TinyMCE has some built in formats that you can override. These are:

* alignleft
* aligncenter
* alignright
* alignjustify
* bold
* italic
* underline
* strikethrough
* forecolor
* hilitecolor
* fontname
* fontsize
* blockquote
* removeformat
* p
* h1, h2, h3, h4, h5, h6
* div
* address
* pre
* div
* code
* dt, dd
* samp

Some built in formats `fontsize`, `fontname`, `forecolor`, `hilitecolor` uses a variable in their definition named `%value`. This one gets replaced with the user selected item such as a color value. Check the variable substitution section below for details.

### Format parameters

For each format you can specify some additional parameters:

| Name       | Summary          |
|------------|------------------|
| inline     | Tag name of the inline element to use as a wrapper, for example "span". Will be used to wrap the current selection.
| block      | Tag name of the block element to use as a wrapper, for example "h1". Existing block elements within the selection will be replaced with this block element. |
| selector   | CSS3 selector pattern that will be used to find elements within the selection. It can be used to apply classes to specific elements only, for example only to odd rows in a table. |
| classes    | Space separated list of classes that will be applied to the selected or newly created inline/block element. |
| styles     | Key/value object with CSS styles to apply to the selected or newly created inline/block element (e.g. color, backgroundColor, textDecoration, etc). |
| attributes | Key/value object with attributes to apply to the selected or newly created inline/block element. |
| exact      | Makes sure that the format won't be merged with other wrappers having the same format. We use it to avoid conflicts between text-decorations for underline and strikethough formats. |
| wrapper    | States that the format is a container format for block elements. For example a div wrapper or blockquote. |

### Example of usage of the formats option

This example overrides some of the built in formats and tells TinyMCE to apply classes instead of inline styles. It also includes a custom format that produced `h1` elements with a title attribute and a `red` CSS style.

**Type:** `Object`

##### Example

```js
// Output elements in HTML style
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  formats: {
    alignleft: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'left'},
    aligncenter: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'center'},
    alignright: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'right'},
    alignjustify: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'full'},
    bold: {inline : 'span', 'classes' : 'bold'},
    italic: {inline : 'span', 'classes' : 'italic'},
    underline: {inline : 'span', 'classes' : 'underline', exact : true},
    strikethrough: {inline : 'del'},
    forecolor: {inline : 'span', classes : 'forecolor', styles : {color : '%value'}},
    hilitecolor: {inline : 'span', classes : 'hilitecolor', styles : {backgroundColor : '%value'}},
    custom_format: {block : 'h1', attributes : {title : 'Header'}, styles : {color : 'red'}}
  }
});
```

### Using custom formats

Custom formats can be handled though the TinyMCE API. Here is a basic example of usage for the custom format defined above.

```js
// Applying the specified format
tinymce.activeEditor.formatter.apply('custom_format');

// Removing the specified format
tinymce.activeEditor.formatter.remove('custom_format');
```

### Variable substitution

You can use variables in your format definition these variables are then replaced with ones specified the specified in the call to the apply function. Here is an example how to use variables within formats.

```js
// Registering the special format with a variable
tinymce.activeEditor.formatter.register('custom_format', {inline : 'span', styles : {color : '%value'}});

// Applying the specified format with the variable specified
tinymce.activeEditor.formatter.apply('custom_format', {value : 'red'});
```

### Removing a format

It is possible to remove formats via the `removeformat` option.

**Type:** `Array`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  formats: {
    removeformat: [
      {selector: 'b,strong,em,i,font,u,strike', remove : 'all', split : true, expand : false, block_expand: true, deep : true},
      {selector: 'span', attributes : ['style', 'class'], remove : 'empty', split : true, expand : false, deep : true},
      {selector: '*', attributes : ['style', 'class'], split : false, expand : false, deep : true}
    ]
  }
});
```
