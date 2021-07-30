{% if editorcomponent.size < 1 %}
{% assign editorcomponent = "component" %}
{% endif %}

## Overview

This section shows the files required for each {{site.productname}} {{editorcomponent}}. The file paths shown are relative to the root {{site.productname}} package directory, where `tinymce.min.js` is stored. For example:

```
./
├── icons/
├── jquery.tinymce.min.js
├── langs/
├── license.txt
├── plugins/
├── readme.txt
├── skins/
├── themes/
├── tinymce.d.ts
├── tinymce.js
├── tinymce.min.js
└── version.txt
```
