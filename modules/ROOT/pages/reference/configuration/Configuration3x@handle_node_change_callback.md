---
layout: default
title: handle_node_change_callback
---

Gets called once the cursor/selection in a TinyMCE instance changes. This is useful to enable/disable button controls depending on where the users are and what they have selected. This method gets executed a lot and should be as performance tuned as possible.

## Callback arguments

| Name | Summary |
| --- | --- |
| editor_id (string) | TinyMCE editor instance id that was changed. |
| node (HTMLNode) | Current node location, where the cursor is in the DOM tree. |
| undo_index (int) | The current undo index, if this is -1 custom undo/redo is disabled. |
| undo_levels (int) | The current undo levels, if this is -1 custom undo/redo is disabled. |
| visual_aid (boolean) | Is visual aids enabled/disabled ex: dotted lines on tables. |
| any_selection (boolean) | Is there any selection at all or is there only a cursor. |

## Example of usage of the handle_node_change_callback option

```js
tinyMCE.init({
  ...
  handle_node_change_callback : "nodeChangeHandler"
});

function nodeChangeHandler(editor_id, node, undo_index, undo_levels, visual_aid, any_selection) {
   // Debug to Firebug in FF
   console.debug(node.nodeName);
}
```
