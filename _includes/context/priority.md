<a class="anchor" id="contexttoolbarpriority"></a><a class="anchor" id="positioningcontexttoolbars"></a><a class="anchor" id="positioningcontextforms"></a><a class="anchor" id="contextformpriority"></a>

## Determining the display priority of context toolbars and context forms

There are three settings that determine the priority of context toolbars and context forms: `scope`, `predicate`, and `position`.

- `scope` - Sets the context toolbar or form as visible of certain content (`node`) or a general (or global) toolbar or form (`editor`).
- `predicate` - Sets a function that tests in the current context position against one or more conditions, returning a boolean value.
- `position` - Sets where the context toolbar or form is rendered, relative to the current section (`selection`, `node`, or `line`).

The whole priority process works as follows:

<!--1. The current cursor position is stored to use as the first current context position.
2. For this current context position, each predicate with `scope: node` in the registered ContextForm is called. Currently, the order they are checked-in cannot be specified. The first predicate that passes will `win` and that ContextForm will be shown.
3. If no predicates (`scope: node`) match the current context position, then all of the `scope: editor` predicates are tried. The first one that matches the editor context wins. -->

1. find nope-scoped things with predicates that match
2. are there any contextforms? if yes, return the first one. if no, continue
3. find editor-scoped things with predicates that match
4. are there any contextforms? if yes, return the first one. if no, continue
5. grab context toolbars from both node and editor scope matches, and prioritise by position
6. search the list of context toolbars for ones with position ‘selection’ - if any are found, return then. if not, search for ‘node’ and if found, return them. if not, search for ‘line’ and if found, return them.
7. if nothing by this point, go up the DOM tree a step (i.e. parentnode) and try to find a matching contextform. if none, try to find matching context toolbars (it’s not prioritising them by position????). if none still, keeping going up the tree and repeating this step until you either find something to display or hit the editor root. this is only node scoped things

4. If no `scope: editor` predicates match, then the new context position is calculated by going up the tree one level to the parent node. All `scope: node` predicates are then checked again. As soon as one matches, it *wins* and that ContextForm is shown. If nothing matches, it goes up the tree and tries again.

> Note: Only `scope: node` predicates are checked at this stage. The `scope: editor` predicate is only checked once and that check only happens in (2).

> Caution: Since the order in which the ContextForms and ContextToolbars are checked is not specified, try not to have their predicates overlap.

position.
There are two options for positioning: `selection` or `line`.

* A `selection` position will place the context form above or below the current selection, centred if possible.

* A `node` position will place the context form relative to the bounds of a node (e.g. a table or image). It applies to a selected node that does not match the selection due to CSS properties (like float).

* A `line` position will place the context form to the right (or left in Right-to-Left languages) of the current selection.


> note is that toolbar buttons can appear multiple times, if multiple context toolbars have a button and they concat - should only occur with custom context toolbars