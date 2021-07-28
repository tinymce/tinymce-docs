## `valid_children`

The valid_children enables you to control what child elements can exists within specified parent elements.

{{site.productname}} will remove/split any non HTML5 or HTML transitional contents by default. So for example a `p` can't be a child of another `p` element. The default value for this option is controlled by the current [schema]({{ site.baseurl }}/configure/content-filtering/#schema).

The syntax for this option is a comma separated list of parents with elements that should be added/removed as valid children for that element. So for example `'+body[style]'` would add style as a valid child of body.

### Control characters

| Name | Summary          |
|------|------------------|
| +    | Adds children to the list of valid elements for the specified parent. |
| -    | Removes children from the list of valid children for the specified parent. |

This example shows you how to add `style` as a valid child of `body` and remove `div` as a valid child. It also forces only `strong`, `a`, and `text` contents to be valid children of `p`.

**Type:** `String`

### Example: Using `valid_children`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  valid_children : '+body[style],-body[div],p[strong|a|#text]'
});
```

This is an option you shouldn't have to fiddle with. The default rule set for this follows the HTML5 specification and some legacy elements from HTML4. You can switch between these defaults by configuring the [`schema`](#scheme) option.
