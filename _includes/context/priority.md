
There are two settings that determine determine the priority: `predicate` and `scope`. The priority system mirrors the old [inlite]({{site.url}}/docs-4x/themes/inlite/#quicklink) theme from TinyMCE 4. The `predicate` is a function that takes in the current context position and returns a boolean. The `scope` is either `node` or `editor`. The whole priority process works as follows:

1. The current cursor position is stored to use as the first current context position.
2. For this current context position, each predicate with `scope: node` in the registered ContextForm is called. Currently, the order they are checked-in cannot be specified. The first predicate that passes will `win` and that ContextForm will be shown.
3. If no predicates (`scope: node`) match the current context position, then all of the `scope: editor` predicates are tried. The first one that matches the editor context wins.
4. If no `scope: editor` predicates match, then the new context position is calculated by going up the tree one level to the parent node. All `scope: node` predicates are then checked again. As soon as one matches, it *wins* and that ContextForm is shown. If nothing matches, it goes up the tree and tries again.

> Note: Only `scope: node` predicates are checked at this stage. The `scope: editor` predicate is only checked once and that check only happens in (2).

> Caution: Since the order in which the ContextForms and ContextToolbars are checked is not specified, try not to have their predicates overlap.