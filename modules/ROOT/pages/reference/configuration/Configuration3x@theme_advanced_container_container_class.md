---
layout: default
title: theme_advanced_container_container_class
---

This option is used to set the class of a specific container. The `<container>` part of this option should be replaced with a name within the theme_advanced_containers list. This option can only be used when theme is set to advanced and when the theme_advanced_layout_manager option is set to the value of "RowLayout".

## Example of usage of the `theme_advanced_container_<container>_class` option:

```html
tinyMCE.init({
  ...
  theme_advanced_container_somecontainer1_class : "someclass",
  theme_advanced_container_somecontainer2_class : "someotherclass"
});
```
