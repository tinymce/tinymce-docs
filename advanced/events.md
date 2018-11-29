---
layout: default
title: Editor events
title_nav: Editor events
description_short: List of common editor events
description: List of common editor events
keywords: Click DblClick MouseDown MouseUp MouseMove MouseOver MouseOut MouseEnter MouseLeave KeyDown KeyPress KeyUp ContextMenu Paste Init Focus Blur BeforeSetContent SetContent GetContent PreProcess PostProcess NodeChange Undo Redo Change Dirty Remove ExecCommand PastePreProcess PastePostProcess
---

## Editor Events

The following example uses a function to bind a handler to the click event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('click', function (e) {
      console.log('Element clicked:', e.target.nodeName);
    });
  }
});
```

| Event       | Native/Core/Plugin    |  Description   |
|-------------|-----------------------|----------------|
| [Click](https://developer.mozilla.org/en/docs/Web/Events/click) | native | Fires when the editor is clicked. |
| [DblClick](https://developer.mozilla.org/en/docs/Web/Events/dblclick) | native | Fires when the editor is double-clicked. |
| [MouseDown](https://developer.mozilla.org/en/docs/Web/Events/mousedown) | native | Fires when the mouse button is pressed down inside the editor. |
| [MouseUp](https://developer.mozilla.org/en/docs/Web/Events/mouseup) | native | Fires when a mouse button is released inside the editor. |
| [MouseMove](https://developer.mozilla.org/en/docs/Web/Events/mousemove) | native | Fires when the mouse is moved within the editor. |
| [MouseOver](https://developer.mozilla.org/en/docs/Web/Events/mouseover) | native | Fires when a new element is being hovered within the editor. |
| [MouseOut](https://developer.mozilla.org/en/docs/Web/Events/mouseout) | native | Fires when an element is no longer being hovered within the editor. |
| [MouseEnter](https://developer.mozilla.org/en/docs/Web/Events/mouseenter) | native | Fires when the mouse enters the editor. |
| [MouseLeave](https://developer.mozilla.org/en/docs/Web/Events/mouseleave) | native | Fires when the mouse leaves the editor. |
| [KeyDown](https://developer.mozilla.org/en/docs/Web/Events/keydown) | native | Fires when a key is pressed within the editor. |
| [KeyPress](https://developer.mozilla.org/en/docs/Web/Events/keypress) | native | Fires when a key is pressed within the editor. |
| [KeyUp](https://developer.mozilla.org/en/docs/Web/Events/keyup) | native | Fires when a key is released within the editor. |
| [ContextMenu](https://developer.mozilla.org/en/docs/Web/Events/contextmenu) | native | Fires when the context menu is invoked within the editor. |
| [Paste](https://developer.mozilla.org/en/docs/Web/Events/paste) | native | Fires when a paste is done within the editor. |
| [Init](#init) | core | Fires when the editor is initialized. |
| [Focus](#focus) | core | Fires when the editor is focused. |
| [Blur](#blur) | core | Fires when the editor is blurred. |
| [BeforeSetContent](#beforesetcontent) | core | Fires before the content is set to the editor. |
| [SetContent](#setcontent) | core | Fires after the content is set to the editor. |
| [GetContent](#getcontent) | core | Fires after the content is extracted from the editor. |
| [PreProcess](#preprocess) | core | Fires when the contents in the editor are being serialized. |
| [PostProcess](#postprocess) | core | Fires when the contents in the editor are being serialized. |
| [NodeChange](#nodechange) | core | Fires when selection inside the editor is changed. |
| [Undo](#undo) | core | Fires when the contents have been reverted to a previous state. |
| [Redo](#redo) | core | Fires to revert the effects of an Undo event. |
| [Change](#change) | core | Fires when undo level is added to the editor. |
| [Dirty](#dirty) | core | Fires when editor contents are being considered dirty. |
| [Remove](#remove) | core | Fires when the editor is removed. |
| [ExecCommand](#execcommand) | core | Fires after a command has been executed. |
| [PastePreProcess](#pastepreprocess) | [paste]({{ site.baseurl }}/plugins/paste/) | Fires when contents are pasted into the editor. |
| [PastePostProcess](#pastepostprocess) | [paste]({{ site.baseurl }}/plugins/paste/) | Fires when contents are pasted into the editor. |
> Native means that it's just a wrapped native browser event.
> Core means that it's a core specific event provided by the editor.

### Init

The following example binds a function to the `init` event. This event fires when the editor is first initialized.

```js
tinymce.init({
  selector: 'textarea',
  setup: function (editor) {
    editor.on('init', function (e) {
      console.log('Editor was initialized.');
    });
  }
});
```

### Focus

This event fires when the editor is focused.

The following example listens for a focus event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('focus', function (e) {
      console.log('Editor got focus!');
    });
  }
});
```

### Blur

This event fires when the editor is blurred but **not** when the focus is moved to the editor's UI components.

The following example listens for blur events.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('blur', function (e) {
      console.log('Editor was blurred!');
    });
  }
});
```

### BeforeSetContent

This event fires before content is inserted into the editor.

#### Parameters

* **content** `String` - The HTML content inserted into the editor.
* **selection** `Boolean` - True or False if the content was inserted at selection or replaced all content.

The following example alters the content before inserting into the editor.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('BeforeSetContent', function (e) {
      e.content += 'My custom content!';
    });
  }
});
```

### SetContent

This event fires after content is inserted into the editor.

#### Parameters

* **content** `String` - The HTML content inserted into the editor.
* **selection** `Boolean` - True or False if the content was inserted at selection or replaced all content.

The following example uses the `SetContent` event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('SetContent', function (e) {
      console.log(e.content);
    });
  }
});
```

### GetContent

This event fires when content is extracted from the editor.

#### Parameters

* **content** `String` - The HTML content extracted from the editor.

The following example uses the `GetContent` event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('GetContent', function (e) {
      e.content += 'My custom content!';
    });
  }
});
```

### PreProcess

This event fires when the content inside the editor is serialized to an HTML string.

#### Parameters

* **node** `DOMElement` - A clone of the HTML element being serialized.

The following example uses the `PreProcess` event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('PreProcess', function (e) {
      console.log(e.node);
    });
  }
});
```

### PostProcess

This event fires when the content inside the editor have been serialized to an HTML string.

#### Parameters

* **content** `String` - The HTML content extracted from the editor.

The following example uses the `PostProcess` event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('PostProcess', function (e) {
      e.content += 'My custom content!';
    });
  }
});
```

### NodeChange

This event fires when the selection inside the editor is changed.

#### Parameters

* **element** `DOMElement` - HTML Element of selection.
* **parents** `[DOMElement]` - Array with parents of the element.

The following example binds the `NodeChange` event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('NodeChange', function (e) {
      console.log('Node changed');
    });
  }
});
```

### Undo

This event fires when a request to undo is made.

#### Parameters

* **level** `Object` - Undo level object containing content.

The following example binds the `Undo` event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('Undo', function (e) {
      console.log('User has pressed undo');
    });
  }
});
```

### Redo

This event fires when a request to redo is made.

#### Parameters

* **level** `Object` - Undo level object containing content.

The following example binds the `Redo` event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('Redo', function (e) {
      console.log('User has pressed redo');
    });
  }
});
```

### Change

This event fires when changes are made inside the editor that cause an undo level to be added.

The following example listens for editor changes using the `Change` event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('Change', function (e) {
      console.log('Editor contents was changed.');
    });
  }
});
```

### Dirty

This event fires when the editor is considered dirty. This state is toggled by using: `editor.setDirty(false)`.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('Dirty', function (e) {
      console.log('Editor is dirty!');
    });
  }
});
```

### Remove

This event fires when the editor is removed from a textarea/div.

The following example detects when the `editor.remove()` event is called.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('Remove', function (e) {
      console.log('The editor has been removed');
    });
  }
});
```

### ExecCommand

This event fires when a command like Bold/Italic etc is made by the editor.

#### Parameters

* **command** `String` - The name of the command that was executed.

The following example detects the execution of the _bold_ feature.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('ExecCommand', function (e) {
      if (e.command === 'mceToggleFormat' && e.value === 'bold') {
        console.log('Bold was executed')
      }
    });
  }
});
```

### PastePreProcess

This event fires when content from the clipboard is processed by the paste process.

#### Parameters

* **content** `String` - The HTML content pasted into the editor.

The following example detects the beginning of the paste event.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('PastePreProcess', function (e) {
      e.content = e.content + ' foo';
      console.log('The modified pasted content was: ', e.content);
    });
  }
});
```

### PastePostProcess

This event fires when content from the clipboard is processed by the paste operation.

#### Parameters

* **node** `DOMElement` - Node element being pasted.

The following example logs the pasted node.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function (editor) {
    editor.on('PastePostProcess', function (e) {
      console.log(e.node);
    });
  }
});
```

| Event       |  Description   |
|-------------|----------------|
| [AddEditor](#addeditor) | Fires when a new editor instance is added. |
| [RemoveEditor](#removeeditor) | Fires when an editor instance is removed. |

### AddEditor

This event fires when an editor instance is created and added to the `EditorManager` collection.

#### Parameters

* **editor** `tinymce.Editor` - Editor instance being added.

The following example listens for editor instances being created.

```js
tinymce.on('AddEditor', function (e) {
  console.log('Added editor with id: ' + e.editor.id);
});
```

### RemoveEditor

This event fires when editor instances are removed from the target textarea/div.

#### Parameters

* **editor** `tinymce.Editor` - Editor instance being removed.

The following example listens for editor instances being removed.

```js
tinymce.on('RemoveEditor', function (e) {
  console.log('Removed editor with id: ' + e.editor.id);
});
```
