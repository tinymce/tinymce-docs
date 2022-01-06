Custom paste filtering can also be configured at runtime using event listeners.

- `PastePreProcess` is equivalent to `paste_preprocess`
- `PastePostProcess` is equivalent to `paste_postprocess`

The event listeners are passed the same data objects as their equivalent configuration options. The event listener callbacks can be configured or changed at any time as long as you have a reference to the Editor API.

Example {{site.productname}} configuration:

```js
const yourCustomFilter = function(content) {
  // Implement your custom filtering and return the filtered content
  return content;
};

tinymce.init({
  selector: 'textarea',
  plugins: 'powerpaste',
  setup: function(editor) {
    editor.on('PastePreProcess', function(data) {
      console.log(data.content, data.mode, data.source);
      // Apply custom filtering by mutating data.content
      const content = data.content;
      const newContent = yourCustomFilter(content);
      data.content = newContent;
    });

    editor.on('PastePostProcess', function(data) {
      console.log(data.node, data.mode, data.source);
      // Apply custom filtering by mutating data.node
      // For example:
      const additionalNode = document.createElement('div');
      additionalNode.innerHTML = '<p>This will go before the pasted content.</p>';
      data.node.insertBefore(additionalNode, data.node.firstElementChild);
    });
  }
});
```