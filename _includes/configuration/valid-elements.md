
## valid_elements

The valid_elements option defines which elements will remain in the edited text when the editor saves. You can use this to limit the returned HTML to a subset.

This option contains a comma separated list of element conversion chunks. Each chunk contains information about how one element and its attributes should be treated. The default rule set for this option is a mixture of the full [HTML5](https://html.spec.whatwg.org/) and [HTML4](http://www.w3.org/TR/REC-html40/) specification or the HTML5 or HTML4 specification depending on the configured [schema]({{ site.baseurl }}/configure/content-filtering/#schema).

If you just want to add or change some behavior for a few items, use the [extended_valid_elements]({{ site.baseurl }}/configure/content-filtering/#extended_valid_elements) option

### Control characters:

| Name     | Summary          |
|----------|------------------|
| @        | Rules with this name will be applied to all elements defined after this rule. So `@[attr1&#124;attr2]` will enable `attr1` and `attr2` for all elements, but `element1,@[attr1&#124;attr2],element2,element3` will enable `attr1` and `attr2` only for `element2` and `element3`. If applied in [extended_valid_elements]({{ site.baseurl }}/configure/content-filtering/#extended_valid_elements), it is only effective for the elements in the extended_valid_elements list. |
| ,   | Separates element chunk definitions. |
| /   | Separates element synonyms. The first element is the one that will be output. |
| &#124; | Separates attribute definitions. |
| [   | Starts a new attribute list for an element definition. |
| ]   | Ends an attribute list for an element definition. |
| !   | Makes attributes required. If none of the required attributes are set, the element will be removed. For example, `'!href'`. |
| =   | Makes the attribute default to the specified value. For example, `'target=_blank'` |
| :   | Forces the attribute to the specified value. For example, `'border:0'` |
| <   | Verifies the value of an attribute (only the listed values are allowed). For example, `'target<_blank?_self'` |
| ?   | Separates attribute verification values. See above. |
| +   | Makes the element open if no child nodes exists. For example, `'+a'`. |
| -   | Enables removal of empty elements such as `<strong />`. For example, `'-strong'`. |
| #   | Enables padding of empty elements. This will pad with `&nbsp;` if they are empty. For example, `'#p'`. |
| !   | Enables removal of elements with no attributes such as `<span>`. They can still have content though. |

Wildcards such as `*`,`+`,`?` may be used in element or attribute name matching.

### Special variables

| Name     |Summary          |
|----------|-----------------|
| {$uid}   |Results in a unique ID. For example, `'p[id:{$uid}]'`. |

Use `*[*]` to include all elements and all attributes. This can be very useful when used with the [invalid_elements]({{ site.baseurl }}/configure/content-filtering/#invalid_elements) option.

**Type:** `String`

##### Example

```js
tinyMCE.init({
  selector: 'textarea',  // change this value according to your HTML
  valid_elements : 'a[href|target=_blank],strong/b,div[align],br'
});
```

This example string tells TinyMCE to remove all elements that are not a `'a, strong, div or br'` element, convert `'b'` elements to `'strong'` elements, default '`target`' to '`_blank`' and keep the '`href`', '`target`' and '`align`' attributes of the elements.

### Duplicate attribute warning

Be careful not to duplicate attributes in the definitions as this may cause TinyMCE to render duplicate attributes in the output. For example, if you have:

> ```js
 //bad code: dir and style listed twice
 'blockquote[dir|style|cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick'
  +'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
  +'|onmouseover|onmouseup|style|title]'
 ```

then if you happen to have a `<blockquote>` element in your code with `style=` or `dir=` attributes, the editor will cause each of those attributes to be duplicated in the output, which will result in invalid XHTML.
