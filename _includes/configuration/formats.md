## formats

The format options are used to override and add custom **formats** to the editor.

For example, a format is a style that gets applied to text when the bold button is enabled inside the editor. TinyMCE is equipped with a text formatting engine that allows specifying what it should produce when the user clicks (in this example) the bold button.

Check out the [custom formats example]({{ site.baseurl }}/demo/format-custom/) for a demonstration of this option.

Formats are objects where the value is either an object with format options or an array of format variants. 

When a format is applied the first item, the formats array will be applied. However, when trying to match the format to remove or update the UI, the other formats in the array is considered as well. So the first format is a kind of primary format, and the rest are secondary formats.

The following is an example of an array of format variants:

```js
bold: [
     { inline: 'strong', remove: 'all' },
     { inline: 'span', styles: { fontWeight: 'bold' } },
     { inline: 'b', remove: 'all' }
   ],
```

### Style merging

Similar elements and styles are merged by default to reduce the output HTML size. So for example, if a font size and font face are selected for a word, it merges these two styles into one `span` element instead of one `span` for **each format type**.

### Built-in formats

TinyMCE has some built in formats that can be overridden. These are:

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

Some built-in formats `fontsize`, `fontname`, `forecolor`, `hilitecolor` uses a variable in their definition named `%value`. This one gets replaced with the user selected item such as a `color` value. Check the variable substitution section below for details.



### Format Type 

There are three format types that the default classes can be applied to:

* Block format
* Inline format
* Selector format


#### block

Tag name of the block element to use as a wrapper, for example, `h1`. Existing block elements within the selection are replaced with this block element.

Type: string
Example

tinymce.init({
  selector: 'textarea',
  formats: {
    // Changes the default format for h1 to have a class of heading
    h1: { block: 'h1', classes: 'heading' }
  },
  style_formats: [
    // Adds a h1 format to the formats select dropdown
    { title: 'My heading', block: 'h1', classes: 'heading' }
  ]
});

#### inline

Tag name of the inline element to use as a wrapper, for example, `span` is used to wrap the current selection.

Type: string
Example

tinymce.init({
  selector: 'textarea',
  formats: {
    // Changes the default format for the bold button to produce a span with a bold class
    bold: { inline: 'span', classes: 'bold' }
  },
  style_formats: [
    // Adds a my bold format to the formats select dropdown
    { title: 'My bold', inline: 'span', classes: 'bold' }
  ]
});

#### selector

CSS3 selector pattern that is used to find elements within the selection. It can be used to apply classes to specific elements only, for example only to odd rows in a table.

Type: string
Example

tinymce.init({
  selector: 'textarea',
  formats: {
    // Changes the alignment buttons to add a class to each of the matching selector elements
    alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'left' },
    aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'center' },
    alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'right' },
    alignjustify: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'full' }
  },
  style_formats: [
    // Adds alignment formats to the formats dropdown
    { title: 'Align left', selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'left' },
    { title: 'Align center', selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'center' },
    { title: 'Align right', selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'right' },
    { title: 'Align justify', selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'full' }
  ]
});


### Format parameters

For each format some additional parameters can be specified: 

#### classes

Space-separated list of classes that are applied to the selected or newly created inline/block element.

**Type:** `string`

##### Example

```js
tinymce.init({
  selector: 'textarea',
  formats: {
    // Changes the default format for the bold button to produce a span with a bold class
    bold: { inline: 'span', classes: 'bold' }
  },
  style_formats: [
    // Adds bold format to the formats dropdown
    { title: 'My bold', inline: 'span', classes: 'bold' }
  ]
});
```

#### styles

Key/value object with CSS styles to apply to the selected or newly created inline/block element (e.g. `color`, `backgroundColor`, `textDecoration`, etc).

**Type:** `Object`

##### Example

```js
tinymce.init({
  selector: 'textarea',
  formats: {
    // Changes the default format for the bold button to produce a span with style with font-width: bold
    bold: { inline: 'span', styles: { 'font-weight': 'bold' } }
  },
  style_formats: [
    // Adds bold format to the formats dropdown
    { title: 'My bold', inline: 'span', styles: { 'font-weight': 'bold' } }
  ]
});
```


#### attributes

Key/value object with attributes to apply to the selected or newly created inline/block element.

**Type:** `Object`

##### Example

```js
tinymce.init({
  selector: 'textarea',
  formats: {
    // Changes the default format for the bold button to produce a strong with data-style attribute
    bold: { inline: 'strong', attributes: { 'data-style': 'bold' } }
  },
  style_formats: [
    // Adds bold format to the formats dropdown
    { title: 'My bold', inline: 'strong', attributes: { 'data-style': 'bold' } }
  ]
});
```

#### exact

Makes sure that the format is not merged with other wrappers having the same format. We use it to avoid conflicts between text-decorations for `underline` and `strikethrough` formats.


**Type:** `boolean`

**Default:** `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',
  formats: {
    // Changes the default format for the underline button to produce a span with a class and not merge that underline into parent spans
    underline: { inline: 'span', styles: { 'text-decoration': 'underline' }, exact: true },
    strikethrough: { inline: 'span', styles: { 'text-decoration': 'line-through' }, exact: true }
  }
});
```


#### wrapper

States that the format is a container format for block elements. For example, a `div` wrapper or `blockquote`.

**Type:** `boolean`

**Default:** `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',
  style_formats: [
    // A custom format that wraps blocks into a div with the specified wrapper class
    { title: 'My custom format', block: 'div', classes: 'wrapper', wrapper: true }
  ]
});

#### remove

Specifies what the remove behavior of the element should be when the format is removed.

**Type:** `string`

**Default:** `none` for `selector` formats `empty` for all other format types.

This can be set to three different modes:

* **none**: Only styles, classes or attributes are removed from the element the element is never removed.
* **empty**: If the element has no styles, classes, or attributes then the element is removed.
* **all**: Removes the element regardless of its styles, classes, and or attributes.

##### Example

```js
tinymce.init({
  selector: 'textarea',
  extended_valid_elements: 'span[*]', // Needed to retain spans without attributes these are removed by default
  formats: {
    removeformat: [
      // Configures `clear formatting` to remove specified elements regardless of it's attributes
      { selector: 'b,strong,em,i,font,u,strike', remove: 'all' },

      // Configures `clear formatting` to remove the class red from spans and if the element then becomes empty i.e has no attributes it gets removed
      { selector: 'span', classes: 'red', remove: 'empty' },

      // Configures `clear formatting` to remove the class green from spans and if the element then becomes empty it's left intact
      { selector: 'span', classes: 'green', remove: 'none' }
    ]
  }
});
```

#### block_expand

This option controls if the selection should expand upwards to the closest matching block element. This can be useful when configuring `removeformat` to remove block elements. So if the selection start is at the beginning of a matching block, then that matching block will be included as well. If the end of the selection is at the end of a matching block element then that parent element will be included as well.

So if the selection is from _a_ to _b_ in this html contents `<h1><b>[a</b></h1><p>b]</p>` then the _h1_ will be removed even if it's not part of the actual selection.

**Type:** `boolean`

##### Example

```js
tinymce.init({
  selector: 'textarea',
  formats: {
    removeformat: [
      {
        selector: 'h1,h2,h3,h4,h5,h6',
        remove: 'all',
        split: false,
        expand: false,
        block_expand: true,
        deep: true
      },
      {
        selector: 'a,b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins',
        remove: 'all',
        split: true,
        expand: false,
        deep: true
      },
      { selector: 'span', attributes: ['style', 'class'], remove: 'empty', split: true, expand: false, deep: true },
      { selector: '*', attributes: ['style', 'class'], split: false, expand: false, deep: true }
    ]
  }
});
```

#### deep

Enables control for removing the child elements of the matching format. This is set to `false`  by default on selector formats. As a result, when a class is removed from a selected table class, disabling `deep` retains the class in the child elements within the other nested tables.

**Type:** `boolean`

**Default:** `false` for `selector` formats

##### Example

```js
tinymce.init({
  selector: 'textarea',
  style_formats: [
    // A custom format that wraps blocks into a div with the specified wrapper class
    { title: 'My custom format', inline: 'span', classes: 'myclass', deep: false }
  ]
});
```

### Example of usage of the formats option

This example overrides some of the built-in formats and tells TinyMCE to apply classes instead of inline styles. It also includes a custom format that produced `h1` elements with a title attribute and a `red` CSS style.

**Type:** `Object`

##### Example

```js
// Output elements in HTML style
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  formats: {
    alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'left' },
    aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'center' },
    alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'right' },
    alignjustify: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'full' },
    bold: { inline: 'span', classes: 'bold' },
    italic: { inline: 'span', classes: 'italic' },
    underline: { inline: 'span', classes: 'underline', exact: true },
    strikethrough: { inline: 'del' },
    forecolor: { inline: 'span', classes: 'forecolor', styles: { color: '%value' } },
    hilitecolor: { inline: 'span', classes: 'hilitecolor', styles: { backgroundColor: '%value' } },
    custom_format: { block: 'h1', attributes: { title: 'Header' }, styles: { color: 'red' } }
  }
});
```

### Using custom formats

Custom formats can be handled through the TinyMCE API. Here is a basic example of usage for the custom format defined above.

```js
// Applying the specified format
tinymce.activeEditor.formatter.apply('custom_format');

// Removing the specified format
tinymce.activeEditor.formatter.remove('custom_format');
```

### Variable substitution

Variables can be used in the format definition. These variables are then replaced with the ones specified in the call to the apply function. Here is an example of how to use variables within formats.

```js
// Registering the special format with a variable
tinymce.activeEditor.formatter.register('custom_format', { inline: 'span', styles: { color: '%value' } });

// Applying the specified format with the variable specified
tinymce.activeEditor.formatter.apply('custom_format', { value: 'red' });
```

### Removing a format

Use the `removeformat` option specify how the `clear formatting` feature should work in the editor.

**Type:** `Array`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  formats: {
    removeformat: [
      {
        selector: 'b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins',
        remove: 'all',
        split: true,
        block_expand: true,
        expand: false,
        deep: true
      },
      { selector: 'span', attributes: ['style', 'class'], remove: 'empty', split: true, expand: false, deep: true },
      { selector: '*', attributes: ['style', 'class'], split: false, expand: false, deep: true }
    ]
  }
});
```
