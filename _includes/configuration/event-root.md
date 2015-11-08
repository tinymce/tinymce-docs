## event_root

Use this option enables you to specify a CSS selector for an element to be used as the event root in inline mode by default all events gets bound to the editable area but in some implementations where the DOM gets modified you want to bind these events to a container then delegate the events down to the right editor based on the element ID.

Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  inline: true,
  event_root: "#root"
});
```
