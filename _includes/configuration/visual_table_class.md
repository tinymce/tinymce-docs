## `visual_table_class`

This option enables you to configure a custom class to be added to tables that have a border set to `0`. This class is used to add dotted borders to tables that would otherwise be invisible for the user.

**Type:** `String`

### Example: Using `visual_table_class`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  visual_table_class: 'my-custom-class'
});
```
