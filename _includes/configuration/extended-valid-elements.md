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
