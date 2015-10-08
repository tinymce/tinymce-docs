---
layout: default
title: Cleanup/Output
---

These settings change the way the editor handles the input and output of content. They will help you to create clean, maintainable and readable content by removing extraneous HTML elements and styles.

## allow_conditional_comments

This option allows you to specify whether the editor should parse and keep conditional comments.

An example of this setting is as follows:

```js
tinymce.init({
    allow_conditional_comments: false
});
```

## allow_html_in_named_anchor

This option allows you to specify whether the editor should parse and keep html within named anchor tags.

An example of this setting is as follows:

```js
tinymce.init({
    allow_html_in_named_anchor: true
});
```

## convert_fonts_to_spans

If you set this option to true, TinyMCE will convert all font elements to span elements and generate span elements instead of font elements. This option should be used in order to get more W3C compatible code, since font elements are deprecated.

```js
tinymce.init({
        ...
        convert_fonts_to_spans : false
});
```

This is set to **true** by default.

## custom_elements

This option enables you to specify non-HTML elements for the editor.

This way you can handle non-HTML elements inside an HTML editor. You can prefix the element names with a ~ if you want the element to behave as a span element and not a div element.

The default behavior is to behave like div elements.

```js
tinyMCE.init({
        ...
        extended_valid_elements : 'mycustomblock[id],mycustominline',
        custom_elements : 'mycustomblock,~mycustominline' // Notice the ~ prefix to force a span element for the element
});
```

## doctype

Set the doctype for the editing area.

This should not be used unless you know what you are doing, changing the doctype can have different effects on different browsers and may introduce quirks.

## element_format

This option controls whether elements are output in the HTML or XHTML mode. "**xhtml**" is the default state for this option. This means that for example `<br />` will be `<br>` if you set this option to "**html**".

```js
// Output elements in HTML style
tinymce.init({
        ...
        element_format : "html"
});
```

## encoding

This option allows you to get XML escaped content out of TinyMCE. By setting this option to "xml", posted content will be converted to an XML string escaping characters such as <, >, ", and & to <, >, ", and &. This option is disabled by default.

An example of this setting is as follows:

```js
tinymce.init({
    encoding: 'xml'
});
```

## entities

This option contains a comma separated list of entity names that is used instead of characters. Odd items are the character code and even items are the name of the character code.

The base entities < > & ' and " will always be entity encoded into their named equivalents. Though ' and " will only be encoded within attribute values and < > will only be encoded within text nodes. This is correct according too the HTML and XML specs.

Example of usage of the entities option:

```js
tinyMCE.init({
        ...
        entities : "160,nbsp,162,cent,8364,euro,163,pound"
});
```

## entity_encoding

This option controls how entities/characters get processed by TinyMCE. The value can be set as shown in Encoding Types below. You can also mix named and numeric by setting this to "named+numeric" this way it will produce entity names of the ones found in the configured entities and numeric entities for other entities.

The base entities < > & ' and " will always be entity encoded into their named equivalents. Though ' and " will only be encoded within attribute values and < > will only be encoded within text nodes. This is correct according too the HTML and XML specs.

#### Encoding Types

| Name     | Summary          |
|----------|------------------|
| named    |Characters will be converted into named entities based on the entities option. For example, a non-breaking space could be encoded as &nbsp;. This value is default. |
| numeric  | Characters will be converted into numeric entities. For example, a non-breaking space would be encoded as &#160;. |
| raw      |All characters will be stored in non-entity form except these XML default entities: &amp; &lt; &gt; &quot; |

```js
tinymce.init({
        ...
        entity_encoding : "raw"
});
```

## extended_valid_elements

This option is very similar to [valid_elements](http://www.tinymce.com/wiki.php/Configuration:valid_elements). The only difference between this option and [valid_elements](http://www.tinymce.com/wiki.php/Configuration:valid_elements) is that this one gets added to the existing rule set. This can be very useful if the existing rule set is fine but you want to add some specific elements that also should be valid. The default rule set is controlled by the [schema](http://www.tinymce.com/wiki.php/Configuration:schema) option.

When adding a new attribute by specifying an existing element rule (e.g. img), the entire rule for that element is over-ridden so be sure to include all valid attributes not just the one you wish to add. See [valid_elements](http://www.tinymce.com/wiki.php/Configuration:valid_elements) for default rules.

The below example replaces the current img rule (including the global element rules)

```js
tinymce.init({
        ...
        extended_valid_elements : "img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]"
});
```

Also see [valid_elements](http://www.tinymce.com/wiki.php/Configuration:valid_elements) and [invalid_elements](http://www.tinymce.com/wiki.php/Configuration:invalid_elements) for more configuration options.

## fix_list_elements

This option enables you to specify that list elements UL/OL is to be converted to valid XHTML. This option is disabled by default since it causes some glitches with a few browsers.

This invalid list:

```html
<ol>
  <li>a</li>
    <ol>
      <li>b</li>
      <li>c</li>
   </ol>
    <li>e</li>
</ol>
```

Gets converted into this valid list:

```html
<ol>
  <li>a
    <ol>
      <li>b</li>
      <li>c</li>
    </ol>
  </li>
  <li>e</li>
</ol>
```

Example of usage of the fix_list_elements option:

```js
tinymce.init({
        ...
        fix_list_elements : true
});
```

## font_formats

This option should contain a semicolon separated list of font titles and font families separated by =. The titles are the ones that get presented to the user in the fonts drop down list and the font family name is the string that gets inserted into the font face or fontFamily CSS style.

Example of usage of the font_formats option:

```js
tinymce.init({
    ...
    font_formats: "Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n"
});
```

The default value is:

```js
tinymce.init({
    ...
    font_formats: "Andale Mono=andale mono,times;"+
        "Arial=arial,helvetica,sans-serif;"+
        "Arial Black=arial black,avant garde;"+
        "Book Antiqua=book antiqua,palatino;"+
        "Comic Sans MS=comic sans ms,sans-serif;"+
        "Courier New=courier new,courier;"+
        "Georgia=georgia,palatino;"+
        "Helvetica=helvetica;"+
        "Impact=impact,chicago;"+
        "Symbol=symbol;"+
        "Tahoma=tahoma,arial,helvetica,sans-serif;"+
        "Terminal=terminal,monaco;"+
        "Times New Roman=times new roman,times;"+
        "Trebuchet MS=trebuchet ms,geneva;"+
        "Verdana=verdana,geneva;"+
        "Webdings=webdings;"+
        "Wingdings=wingdings,zapf dingbats"
});
```

## fontsize_formats

This option allows you to override the font sizes displayed in the font size select box. It's a space/comma separated list of font sizes and defaults to "8pt 10pt 12pt 14pt 18pt 24pt 36pt".

Example:

```js
tinymce.init({
    fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt"
});
```

## force_p_newlines (deprecated)

**This option is deprecated as of 3.5 use `forced_root_block: false` instead to control p vs br behavior.**

This option enables you to disable/enable the creation of paragraphs on return/enter in Mozilla/Firefox. The default value of this option is true.

```js
tinymce.init({
        ...
        force_p_newlines : true
});
```

## force_hex_style_colors

This option enables you to control TinyMCE to force the color format to use hexadecimal instead of rgb strings. It converts for example "color: rgb(255, 255, 0)" to "#FFFF00". This option is set to true by default since otherwise IE and Firefox would differ in this behavior.

```js
tinymce.init({
        ...
        force_hex_style_colors : false
});
```

## forced_root_block

This option enables you to make sure that any non block elements or text nodes are wrapped in block elements. For example `<strong>something</strong>` will result in output like: `<p><strong>something</strong></p>`. This option is enabled by default as of 3.0a1.

**If you set this option to false it will never produce P tags on enter or automatically it will instead produce BR elements and Shift+Enter will produce a P.**

**Note that not using P elements as root block can severly cripple the functionality of the editor.**

```js
tinymce.init({
        ...
        forced_root_block : 'p'
});
```

## forced_root_block_attrs

This option enables you specify attributes for the [forced_root_block](#forced_root_block).

```js
tinymce.init({
    ...
    forced_root_block_attrs: {
         "class": "myclass",
         "data-something": "my data"
    }
});
```

## formats

This option enables you to override and add custom formats. A format is the style that get applied when you press the bold button inside the editor. TinyMCE is equipped with a text formatter engine that enables you to specify exactly what it should produce when the user clicks the bold button.

Check out the [custom formats example](http://www.tinymce.com/tryit/custom_formats.php) for a demonstration of this option.

#### Style merging

Similar elements and styles will be merged by default to reduce the output HTML size. So for example if you select a word and select a font size and font face for it. It will merge these to styles into one span element instead of one span for each format type.

#### Built in formats

TinyMCE has some built in formats that you can override.

These are:

* alignleft
* aligncenter
* alignright
* alignfull
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

Some built in formats fontsize, fontname, forecolor, hilitecolor uses a variable in their definition named %value. This one gets replaced with the user selected item such as a color value. Check the variable substitution section below for details.

#### Format parameters

Each format has a set of parameters that you can specify.

| Name       | Summary          |
|------------|------------------|
| inline     | Name of the inline element to produce for example "span". The current text selection will be wrapped in this inline element.
| block      | Name of the block element to produce for example "h1". Existing block elements within the selection gets replaced with the new block element. |
| selector   | CSS 3 selector pattern to find elements within the selection by. This can be used to apply classes to specific elements or complex things like odd rows in a table. |
| classes    | Space separated list of classes to apply the the selected elements or the new inline/block element. |
| styles     | Name/value object with CSS style items to apply such as color etc. |
| attributes | Name/value object with attributes to apply to the selected elements or the new inline/block element. |
| exact      | Disables the merge similar styles feature when used. This is needed for some CSS inheritance issues such as text-decoration for underline/strikethough. |
| wrapper    | State that tells that the current format is a container format for block elements. For example a div wrapper or blockquote. |

#### Example of usage of the formats option

This example overrides some of the built in formats and tells TinyMCE to apply classes instead of inline styles. It also includes a custom format that produced h1 elements with a title attribute and a red css style.

```js
// Output elements in HTML style
tinymce.init({
        ...
        formats : {
                alignleft : {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'left'},
                aligncenter : {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'center'},
                alignright : {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'right'},
                alignfull : {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'full'},
                bold : {inline : 'span', 'classes' : 'bold'},
                italic : {inline : 'span', 'classes' : 'italic'},
                underline : {inline : 'span', 'classes' : 'underline', exact : true},
                strikethrough : {inline : 'del'},
                forecolor : {inline : 'span', classes : 'forecolor', styles : {color : '%value'}},
                hilitecolor : {inline : 'span', classes : 'hilitecolor', styles : {backgroundColor : '%value'}},
                custom_format : {block : 'h1', attributes : {title : "Header"}, styles : {color : red}}
        }
});
```

#### Using custom formats

Custom formats can be handled though the TinyMCE API. Here is a basic example of usage for the custom format defined above.

```js
// Applying the specified format
tinymce.activeEditor.formatter.apply('custom_format');

// Removing the specified format
tinymce.activeEditor.formatter.remove('custom_format');
```

#### Variable substitution

You can use variables in your format definition these variables are then replaced with ones specified the specified in the call to the apply function. Here is an example how to use variables within formats.

```js
// Registering the special format with a variable
tinymce.activeEditor.formatter.register('custom_format', {inline : 'span', styles : {color : '%value'}});

// Applying the specified format with the variable specified
tinymce.activeEditor.formatter.apply('custom_format', {value : 'red'});
```

#### Remove format

The remove format behavior can be modifed by setting the removeformat see the example below:

```js
removeformat : [
    {selector : 'b,strong,em,i,font,u,strike', remove : 'all', split : true, expand : false, block_expand : true, deep : true},
    {selector : 'span', attributes : ['style', 'class'], remove : 'empty', split : true, expand : false, deep : true},
    {selector : '*', attributes : ['style', 'class'], split : false, expand : false, deep : true}
]
```

## indentation

This option allows specification of the indentation level for indent/outdent buttons in the UI.

This defaults to 30px but can be any value.

```js
tinymce.init({
        ...
        indentation : '20pt'
});
```

## invalid_elements

This option should contain a comma separated list of element names to exclude from the content.

Elements in this list will be removed when TinyMCE executes a cleanup.

```js
tinymce.init({
        ...
        invalid_elements : "strong,em"
});
```

Caution: This option doesn't accept attributes in the list, only elements

Also see [valid_elements](#valid_elements) and [extended_valid_elements](#extended_valid_elements) for more configuration options.

## invalid_styles

This option enables you to restrict the styles that are valid for specific elements. This option takes two formats one string format that is a simple list of global styles to disallow and a more complex object format where you can specify invalid styles for individual elements.

Example simple global classes

```js
tinymce.init({
    invalid_styles: 'color font-size'
});
```

Example of element specific classes

```js
tinymce.init({
    invalid_styles: {
        '*': 'color font-size', // Global invalid styles
        'a': 'background' // Link specific invalid styles
    }
});
```

## keep_styles

This option enables keeping the current text style when you press enter/return. This feature is enabled by default but can be disabled by setting the value to false.

Example of usage of the keep_styles option

```js
tinymce.init({
    ...
    keep_styles: false
});
```

## protect

This configuration option enables you to control what contents should be protected from editing while it gets passed into the editor. This could for example be control codes in the HTML. It's recommended not to use inline control contents since it breaks the wisiwyg editing concept but sometimes they can't be avoided.

The option takes an array of regexps that it will match the contents against and these will be invisible while editing.

Example of usage:

```js
tinymce.init({
    protect: [
        /\<\/?(if|endif)\>/g, // Protect <if> & </endif>
        /\<xsl\:[^>]+\>/g, // Protect <xsl:...>
        /<\?php.*?\?>/g // Protect php code
    ]
});
```

## schema

The schema option enables you to switch between the HTML4 and HTML5 schema. This controls the valid elements and attributes that can be placed in the HTML.

This value can either be the default html5, html4 or html5-strict. The html5 schema is the full HTML5 specification including the of the older HTML4 elements for compatibility. The html5-strict will only allow the elements that are in the current HTML5 specification excluding things that where removed. The html4 schema includes the full html4 transitional specification.

Also note that all event attributes are excluded by default since it's a bad practice to use inline script handles like "onclick". You can manually add extra elements and attributes using the [extended_valid_elements](#extended_valid_elements) option.

Example of usage

```js
tinymce.init({
   ...
   schema: "html5"
});
```

## style_formats

This option enables you to add more advanced style formats for text and other elements to the editor. The value of this option will be rendered as styles in the Formats dropdown.

The format of the option is very similar to the formats option the only difference is the title name that is used for presentation in the drop list.

```js
tinymce.init({
    ...
    style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Example 2', inline: 'span', classes: 'example2'},
        {title: 'Table styles'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
    ]
});
```

Another example, this will add two options to the Formats dropdown, one for aligning an image left and adding a margin, one for putting it on the right side and setting a margin.

```js
style_formats: [
    {
        title: 'Image Left',
        selector: 'img',
        styles: {
            'float': 'left',
            'margin': '0 10px 0 10px'
        }
     },
     {
         title: 'Image Right',
         selector: 'img',
         styles: {
             'float': 'right',
             'margin': '0 0 10px 10px'
         }
     }
]
```

A live demo of this option can be found in the [Custom formats](#custom_formats) example.

If you want to merge your styles to the default styles_format, you can use the style_formats_merge settings:

```js
style_formats_merge: true,
style_formats: [
    // Your format as described on this page
]
```

The default is very similar to the following:

```js
style_formats: [
    {title: "Headers", items: [
        {title: "Header 1", format: "h1"},
        {title: "Header 2", format: "h2"},
        {title: "Header 3", format: "h3"},
        {title: "Header 4", format: "h4"},
        {title: "Header 5", format: "h5"},
        {title: "Header 6", format: "h6"}
    ]},
    {title: "Inline", items: [
        {title: "Bold", icon: "bold", format: "bold"},
        {title: "Italic", icon: "italic", format: "italic"},
        {title: "Underline", icon: "underline", format: "underline"},
        {title: "Strikethrough", icon: "strikethrough", format: "strikethrough"},
        {title: "Superscript", icon: "superscript", format: "superscript"},
        {title: "Subscript", icon: "subscript", format: "subscript"},
        {title: "Code", icon: "code", format: "code"}
    ]},
    {title: "Blocks", items: [
        {title: "Paragraph", format: "p"},
        {title: "Blockquote", format: "blockquote"},
        {title: "Div", format: "div"},
        {title: "Pre", format: "pre"}
    ]},
    {title: "Alignment", items: [
        {title: "Left", icon: "alignleft", format: "alignleft"},
        {title: "Center", icon: "aligncenter", format: "aligncenter"},
        {title: "Right", icon: "alignright", format: "alignright"},
        {title: "Justify", icon: "alignjustify", format: "alignjustify"}
    ]}
]
```

Hopefully we'll have an [exact replica of the defaults](http://www.tinymce.com/forum/viewtopic.php?id=33648) soon.

## style_formats_merge

This option allows you to set whether TinyMCE should append the styles in the style_formats setting to the default style formats or completely replace them.

An example of this setting is as follows:

```js
tinymce.init({
    style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}}
    ],
    style_formats_merge: true
});
```

## block_formats

The enables you to specify a list of block formats for the block listbox. The format is "title=block;...".

Example of usage

```js
tinymce.init({
   selector: "textarea",
   block_formats: "Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3"
});
```

## valid_children

The valid_children enables you to control what child elements can exists within what parent elements. TinyMCE will remove/split any non HTML5 or HTML transitional contents by default. So for example a P can't be a child of another P element. The default value for this option is controlled by the current [schema](http://www.tinymce.com/wiki.php/Configuration:schema).

The syntax for this option is a comma separated list of parents with elements that should be added/removed as valid children for that element. So for example "+body[style]" would add style as a valid child of body.

Control characters:

| Name   | Summary          |
|--------|------------------|
| +      | Adds children to the list of valid elements for the specified parent. |
| -      |Removes children from the list of valid children for the specified parent. |

This example shows you how to add style as a valid child of body and remove div as a valid child. It also forces only strong and a and text contents to be valid children of P.

```js
tinymce.init({
        ...
        valid_children : "+body[style],-body[div],p[strong|a|#text]"
});
```

This is an option you shouldn't have to fiddle with, the default ruleset for this follows the HTML5 specification and some legacy elements from HTML4 you can switch between these defaults by configuring the schema option.

## valid_elements

The valid_elements option defines which elements will remain in the edited text when the editor saves. You can use this to limit the returned HTML to a subset.

This option contains a comma separated list of element conversion chunks. Each chunk contains information about how one element and its attributes should be treated. The default rule set for this option is a mixture of the full [HTML5](http://www.w3.org/html/wg/drafts/html/master/) and [HTML4](http://www.w3.org/TR/REC-html40/) specification or the HTML5 or HTML4 specification depending on the configured [schema](http://www.tinymce.com/wiki.php/Configuration:schema).

If you just want to add or change some behaviour for a few items, use the [extended_valid_elements](#extended_valid_elements) option

#### Control characters:

| Name     | Summary          |
|----------|------------------|
| @        | Rules with this name will be applied to all elements defined after this rule. So @[attr1&#124;attr2] will enable attr1 and attr2 for all elements, but element1,@[attr1&#124;attr2],element2,element3 will enable attr1 and attr2 only for element2 and element3. If applied in extended_valid_elements, it is only effective for the elements in the extended_valid_elements list. |
| ,   | Separates element chunk definitions. |
| /   | Separates element synonymous. The first element is the one that will be output. |
| &#124;   | Separates attribute definitions. |
| [   | Starts a new attribute list for an element definition. |
| ]   | Ends an attribute list for an element definition. |
| !   | Makes attributes required. If none of the required attributes are set, the element will be removed. For example, "!href". |
| =   | Makes the attribute default to the specified value. For example, "target=_blank" |
| :   | Forces the attribute to the specified value. For example, "border:0" |
| <   | Verifies the value of an attribute (only the listed values are allowed). For example, "target<_blank?_self" |
| ?   | Separates attribute verification values. See above. |
| +   | Makes the element open if no child nodes exists. For example, "+a". |
| -   | Enables removal of empty elements such as <strong />. For example, "-strong". |
| #   | Enables padding of empty elements. This will pad with &nbsp; if they are empty. For example, "#p". |
| !   | Enables removal of elements with no attributes such as <span>. They can still have content though. |

Wildcards such as `*,+,?` may be used in element or attribute name matching.

#### Special variables:

| Name     |Summary          |
|----------|-----------------|
| {$uid}   |Results in a unique ID. For example, "p[id:{$uid}]". |

Use `*[*]` to include all elements and all attributes. This can be very useful when used with the invalid_elements option. Example of usage of the valid_elements option:

This example string tells TinyMCE to remove all elements that are not a "a, strong, div or br" element, convert "b" elements to "strong" elements, default "`target`" to "`_blank`" and keep the "`href`", "`target`" and "`align`" attributes of the elements.

```js
tinyMCE.init({
        ...
        valid_elements : "a[href|target=_blank],strong/b,div[align],br"
});
```

#### Duplicate Attribute Warning

Be careful not to duplicate attributes in the definitions as this may cause tinyMCE to render duplicate attributes in the output. For example, if you have

```js
 ... //bad code: dir and style listed twice
 "blockquote[dir|style|cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick"
  +"|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout"
  +"|onmouseover|onmouseup|style|title]"
 ...
 ```

then if you happen to have a `<blockquote>` element in your code with style= or dir= attributes, the editor will cause each of those attributes to be duplicated in the output, which will result in invalid XHTML.

## valid_styles

This option enables you specify the available styles for each element. This means you can force ordering and only specific styles to be valid within style attribute values. Specify the element name, then it's styles or * for all elements.

Example of usage of the auto_focus option:

```js
tinymce.init({
    ...
    valid_styles: {
        "*": "border,font-size",
        "div": "width,height"
    }
});
```

## valid_classes

This option enables you specify the available styles for each element. This means you can force ordering and only specific styles to be valid within style attribute values. Specify the element name, then it's styles or * for all elements.

Example of usage of the auto_focus option:

```js
tinymce.init({
    ...
    valid_styles: {
        "*": "border,font-size",
        "div": "width,height"
    }
});
```

## remove_trailing_brs

This option allows you to disable TinyMCE's default behaviour of removing <br> tags at the end of block elements. Gecko and WebKit browsers inject these elements to make it possible to place the caret in empty blocks. This logic attempts to remove these elements while also keeping tags that were intentionally placed by the user.

An example of this setting is as follows:

```js
tinymce.init({
    remove_trailing_brs: false
});
```
