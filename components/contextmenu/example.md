---
layout: draft
title: Example
title_nav: Example
description: Context Menu Example
keywords: contextmenu context menu contextmenuapi
---

### Example usage

Link [context menu]({{site.baseurl}}/components/contextmenu/overview/) section:

```js
return [
  {
    text: 'Edit Link',
    onAction: () => editDialog(element)
  },
  {
    text: 'Open Link',
    onAction: () => browseTo(element)
  },
  {
    text: 'Remove Link',
    onAction: () => removeLink(element)
  }
];
```