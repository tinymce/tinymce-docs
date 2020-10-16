## valid_classes

This option enables you to restrict the classes that are valid for specific elements. This option takes two formats: one string format that is a simple list of allowed global classes, and a more complex object format where you can specify classes for individual elements.

**Type:** `String`, `Object`

### Example simple global classes

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  valid_classes: 'class1 class2 class3'
});
```

### Example element specific classes

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  valid_classes: {
    '*': 'class1 class2 class3', // Global classes
    'a': 'class4 class5' // Link specific classes
  }
});
```
