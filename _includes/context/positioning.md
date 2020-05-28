{% case page.title %}
  {% when "Context toolbar" %}
    {% assign contextItemType = "toolbar" %}
  {% when "Context forms" %}
    {% assign contextItemType = "form" %}
{% endcase %}
<a class="anchor" id="positioningcontexttoolbars"></a><a class="anchor" id="positioningcontextforms"></a>

### Positioning of context {{contextItemType}}

There are three options for positioning context {{contextItemType}}s: `selection`, `node`, or `line`.

* A `selection` position will place the context {{contextItemType}} above or below the current selection, centered if possible.

* A `node` position will place the context {{contextItemType}} relative to the bounds of a node (e.g. a table or image). It applies to a selected node that does not match the selection due to CSS properties (like float).

* A `line` position will place the context {{contextItemType}} to the right (or left in Right-to-Left languages) of the current selection.