## `event_root`

This option enables you to specify a CSS selector for an element to be used as the event root when the editor is in `inline` mode.

By default all events gets bound to the editable area. But in some implementations where the DOM gets modified you want to bind these events to a container and then delegate the events down to the right editor, based on the element ID.

**Type:** `String`

### Example: Using `event_root`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  inline: true,
  event_root: '#root'
});
```
