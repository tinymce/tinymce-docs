---
layout: default
title: remove_instance_callback
---

This option should contain a function name to be executed each time an editor instance is removed. The format of this function is: `removeInstance(inst)` where `inst` is the editor instance object reference.

## Example of usage of the remove_instance_callback option:

```js
function myCustomRemoveInstance(inst) {
  alert("Editor: " + inst.editorId + " is now removed.");
}

tinyMCE.init({
  ...
  remove_instance_callback : "myCustomRemoveInstance"
});

```
