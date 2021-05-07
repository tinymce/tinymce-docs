---
layout: default
title: extended_valid_elements
---

This option is very similar to [valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@valid_elements/). The only difference between this option and [valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@valid_elements) is that this one gets added to the existing rule set. This can be very useful if the existing rule set is fine but you want to add some specific elements that also should be valid.

When adding a new attribute by specifying an existing element rule (e.g. img), the entire rule for that element is over-ridden so be sure to include all valid attributes not just the one you wish to add. See [valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@valid_elements/) for default rules.

## Example of usage of the extended_valid_elements option:

The below example replaces the current img rule (including the global element rules)

```js
tinyMCE.init({
  ...
  extended_valid_elements : "img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]"
});
```

Also see [valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@valid_elements/) and [invalid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@invalid_elements/) for more configuration options.
