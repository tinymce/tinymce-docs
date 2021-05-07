---
layout: default
title: theme_advanced_link_targets
---

This option should contain a semicolon separated list of link target names and target titles linked by an equal sign. The titles are the ones that get presented to the user in the link target drop down list and the target names are the targets that get inserted as a 'target' attribute.

## Example of usage of the theme_advanced_link_targets option:

```js
tinyMCE.init({
  ...
  theme_advanced_link_targets : "someframe=Some frame,otherframe=Some other frame"
});
```
