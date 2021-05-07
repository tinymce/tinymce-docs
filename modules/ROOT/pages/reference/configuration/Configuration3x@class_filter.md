---
layout: default
title: class_filter
---

(Requires: 3.0)

This option enables you specify a function that all classes will be passed through when the auto import classes feature is used with TinyMCE.

## Example of usage of the class_filter option:

```js
tinyMCE.init({
    ...
    class_filter : function(cls, rule) {
        // Block the someClass
        if (cls == 'someClass')
            return false;

        // Swap the otherClass
        if (cls == 'otherClass')
            return 'someOtherClass';

        // Skip classes that are inside id like #id .myclass
        if (/^#.*/.test(rule))
            return false;

        // Pass though the rest
        return cls;
    }
});
```
