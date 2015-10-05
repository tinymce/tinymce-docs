---
layout: default
title: auto_focus
---

// http://www.tinymce.com/wiki.php/Configuration:auto_focus

This option enables you to auto focus an editor instance. The value of this option should be an editor instance id. The editor instance id is the id for the original textarea or div element that got replaced.

## Example of usage of the auto_focus option:

```
tinymce.init({
        ...
        auto_focus: "elm1"
});
```
