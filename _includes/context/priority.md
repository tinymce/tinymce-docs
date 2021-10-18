## Troubleshooting context toolbar and context form conflicts

There are situations where custom context toolbars or custom context forms may conflict with:

  - Context toolbars or context forms provided by the editor,
  - Context toolbars or context forms provided by the [Quick Toolbars (`quickbars`) plugin]({{site.baseurl}}/plugins/opensource/quickbars/),
  - Other custom context toolbars or custom context forms.

### Determining the display priority of context toolbars and context forms

There are three settings that determine the priority of context toolbars and context forms: `scope`, `predicate`, and `position`.

- `scope` - Sets the context toolbar or form as either: specific to certain types of content (`node`), or a general (global) toolbar or form (`editor`).
- `predicate` - A function for determining if the context menu or form applies to the current selection or cursor position. This function should return a boolean value.
- `position` - Sets where the context toolbar or form is rendered, relative to the current context (`selection`, `node`, or `line`).

Generally:

- Context _forms_ are prioritized over context _toolbars_.
- Context _forms_ with `scope: 'node'` are prioritized over `scope: 'editor'`.
- Only one context _form_ can be shown for a selection or cursor position, they cannot be concatenated to another context _form_ or a context _toolbar_.
- Context _toolbars_ with `position: 'selection'` are prioritized over `position: 'node'`, and `position: 'line'` is given the lowest priority.
- The editor concatenates context _toolbars_ when there is more than one context _toolbar_ to display with:

    - A matching predicate,
    - The same `scope` and `position` values.

  Concatenated toolbars may contain duplicate toolbar items.

- If no matching context toolbars or context forms are found for the selection or cursor position, then editor will recursively search for matches on the parent node of the current node, until it reaches the root node of the editor content.

#### Description of how context toolbars and context forms are prioritized

The following description can be used for troubleshooting the behavior of context toolbars and context forms.

The editor will determine which context toolbars or context form will be shown using following process:

1. Find all **context forms** with both:

    - `scope: 'node'`
    - A predicate matching the current selection or cursor position.

    If there are any matching **context forms**, the first one found will be displayed in the editor and the process will end.

2. Find all **context forms** with both:

    - `scope: 'editor'`
    - A predicate matching the current selection or cursor position.

    If there are any matching **context forms**, the first one found will be displayed in the editor and the process will end.

3. Find all **context toolbars** with both:

    - Any `scope`
    - A predicate matching the current selection or cursor position.

    If there are any matching **context toolbars**, the editor will prioritize the context toolbars based on the `position` value.

    - All context toolbars with `position: 'selection'` or `position: 'node'` will be concatenated, the concatenated toolbar will be displayed, and the process will end.
    - Otherwise, all context toolbars with `position: line` will be concatenated, the concatenated toolbar will be displayed, and the process will end.

4. Find all **context forms** with both:

    - Any `scope`
    - A predicate matching the **parent node** of the current node, selection, or cursor position.

    If there are any **context forms** found, the first one found will be displayed in the editor and the process will end.

5. Find all **context toolbars** with both:

    - Any `scope`
    - A predicate matching the **parent node** of the current node, selection, or cursor position.

    If there are any matching **context toolbars**, the editor will prioritize the context toolbars based on the `position` value.

    - If there are context toolbars with `position: 'selection'`, they will be concatenated, the concatenated toolbar will be displayed, and the process will end.
    - If there are context toolbars with `position: 'node'`, they will be concatenated, the concatenated toolbar will be displayed, and the process will end.
    - Otherwise, all context toolbars with `position: line` will be concatenated, the concatenated toolbar will be displayed, and the process will end.

6. Repeat step 4 and 5 for each successive parent node in the DOM for context toolbars and context forms with `scope: node` until either:

    - A matching context form or context toolbars are found and displayed,
    - The root node of the editor is reached.
