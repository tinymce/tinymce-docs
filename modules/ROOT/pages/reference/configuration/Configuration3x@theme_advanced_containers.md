---
layout: default
title: theme_advanced_containers
---

This option should contain a comma separated list of container names. Each container contains a specified list of tool bar controls (buttons, separators, selection lists). The controls for each container are specified in settings named "theme_advanced_container_<container_name>". This option can only be used when theme is set to "advanced" and when [theme_advanced_layout_manager](https://www.tiny.cloud/docs-3x/api/configuration/Configuration3x@theme_advanced_layout_manager) is set to the value "RowLayout".

## Example of usage of the theme_advanced_containers option:

```js
tinyMCE.init({
  ...
  theme_advanced_containers : "mycontainer1,mycontainer2"
});
```
