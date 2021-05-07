---
layout: default
title: setup
---

(Requires: 3.0)

This option enables you to add [events](/) to editor instances before they get rendered.

## Example of usage of the setup option:

```js
tinyMCE.init({
   ...
   setup : function(ed) {
      ed.onClick.add(function(ed, evt) {
          ed.selection.select(evt.target);
      });
   }
});
```
