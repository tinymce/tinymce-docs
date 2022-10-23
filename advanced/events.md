---
layout: default
title: Events Available for TinyMCE
title_nav: Available Events
description_short: List of common editor events
description: List of common editor events
keywords: Click DblClick MouseDown MouseUp MouseMove MouseOver MouseOut MouseEnter MouseLeave KeyDown KeyPress KeyUp ContextMenu Paste Init Focus Blur BeforeSetContent SetContent GetContent PreProcess PostProcess NodeChange Undo Redo Change Dirty Remove ExecCommand PastePreProcess PastePostProcess
---

{{ site.productname }} supports some browser-native events, and provides additional events for working with the editor and plugins.

## Handling Editor events

The following examples illustrate how to use supported native events, editor core events, and plugin events with {{ site.productname }}.

The following example uses a function to create a console log entry when the editor has initialized. This is also an example of handling an event which does not return any data.

```js
tinymce.init({
  selector: 'textarea',
  setup: function(editor) {
    editor.on('init', function(e) {
      console.log('The Editor has initialized.');
    });
  }
});
```

The following example uses a function to create a console log entry when a command is executed in the editor. This is also an example of handling an event that returns data.

```js
tinymce.init({
  selector: 'textarea',
  init_instance_callback: function(editor) {
    editor.on('ExecCommand', function(e) {
      console.log('The ' + e.command + ' command was fired.');
    });
  }
});
```

## Supported browser-native events

{{ site.productname }} supports the following browser-native events. Click the event name for details (links open [MDN Web Docs](https://developer.mozilla.org/)).

- [beforeinput](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event)
- [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
- [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
- [compositionend](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event)
- [compositionstart](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event)
- [compositionupdate](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event)
- [contextmenu](https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event)
- [copy](https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event)
- [cut](https://developer.mozilla.org/en-US/docs/Web/API/Element/cut_event)
- [dblclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)
- [drag](https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event)
- [dragdrop](https://developer.mozilla.org/en-US/docs/Web/Events#Non-standard_events)
- [dragend](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragend_event)
- [draggesture](https://developer.mozilla.org/en-US/docs/Web/Events#Non-standard_events)
- [dragover](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event)
- [dragstart](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event)
- [drop](https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event)
- [focus](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
- [focusin](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
- [focusout](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
- [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)
- [keypress](https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event)
- [keyup](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event)
- [mousedown](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event)
- [mouseenter](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
- [mouseleave](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
- [mousemove](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)
- [mouseout](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event)
- [mouseover](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)
- [mouseup](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event)
- [paste](https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event)
- [reset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event)
- [submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
- [touchcancel](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchcancel_event)
- [touchend](https://developer.mozilla.org/en-US/docs/Web/API/Document/touchend_event)
- [touchmove](https://developer.mozilla.org/en-US/docs/Web/API/Document/touchmove_event)
- [touchstart](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event)
- [wheel](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event)

## Editor core events

The following events are provided by the {{ site.productname }} editor.

| Name                   | Data                                                                                                                    | Description                                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| activate               | `{ relatedTarget: Editor }`                                                                                             | Fired when the editor is activated.                                                                                                                                        |
| deactivate             | `{ relatedTarget: Editor }`                                                                                             | Fired when the editor is deactivated.                                                                                                                                      |
| remove                 | N/A                                                                                                                     | Fired before the editor is removed/destroyed.                                                                                                                    |
| detach                 | N/A                                                                                                                     | Fired after the remove event, before the editor container is detached from the DOM.                                                                                             |
| init                   | N/A                                                                                                                     | Fired when the editor is fully initialized.                                                                                                                                |
| ScrollIntoView         | `{ elm: HTMLElement, alignToTop: boolean }`                                                                             | Fired when an element is about to be scrolled into view.                                                                                                                   |
| AfterScrollIntoView          | `{ elm: HTMLElement, alignToTop: boolean }`                                                                             | Fired when an element has been scrolled into view. {{site.requires_5_2v}}                                                                                                                  |
| ObjectResized          | `{ target: HTMLElement, width: number, height: number, origin: string }`                                                                | Fired when an object (such as an image) has finished being resized.                                                                                                                |
| ObjectResizeStart      | `{ target: HTMLElement, width: number, height: number, origin: string }`                                                                | Fired when an object (such as an image) is about to be resized.                                                                                                                    |
| SwitchMode             | `{ mode: string }`                                                                                                      | Fired when the editor mode is changed. The available modes are "design" and "readonly". Additional modes can be registered using {{ site.productname }} API ['tinymce.activeEditor.mode.register()']({{ site.baseurl }}/api/tinymce/tinymce.editormode/#register). |
| ScrollWindow           | (Same data as the native [scroll event](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event))         | Fired when the window has scrolled.                                                                                                                                   |
| ResizeWindow           | (Same data as the native [resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event))          | Fired when the window is resized.                                                                                                                                          |
| BeforeExecCommand      | `{ command: string, ui?: boolean, value?: any }`                                                                        | Fired before a command is executed.                                                                                                                                        |
| ExecCommand            | `{ command: string, ui?: boolean, value?: any }`                                                                        | Fired after a command has executed.                                                                                                                                   |
| NodeChange             | `{ element: Element, parents: Node[], selectionChange?: boolean }`                                                      | Fired when the selected node inside the editor content has changed.                                                                                                   |
| FormatApply            | `{ format: string; vars?: FormatVars; node?: Node | RangeLikeObject }`                                                  | Fired after a format is applied. {{site.requires_5_9v}}                                                                                                                                          |
| FormatRemove           | `{ format: string; vars?: FormatVars; node?: Node | RangeLikeObject }`                                                  | Fired after a format is removed. {{site.requires_5_9v}}                                                                                                                                          |
| ShowCaret              | `{ target: Node, direction: number, before: boolean }`                                                                  | Fired before a fake caret element is shown in the editor. The fake caret will appear where the cursor is normally not shown, such as at the start or end of tables and non-editable content. |
| SelectionChange        | N/A                                                                                                                     | Fired when the content selection in the editor changes.                                                                                                                    |
| ObjectSelected         | `{ target: Node, targetClone?: Node }`                                                                                  | Fired when an object (such as an image) is selected in the editor and the selection elements have rendered.                                                         |
| BeforeObjectSelected   | `{ target: Node, targetClone?: Node }`                                                                                  | Fired when an object (such as an image) is selected in the editor, before it is rendered as selected.                                                                     |
| GetSelectionRange      | `{ range: Range }`                                                                                                      | Fired when the selection range is being fetched from the editor.                                                                                                           |
| SetSelectionRange      | `{ range: Range, forward: boolean }`                                                                                    | Fired before the selection range is set in the editor.                                                                                                                     |
| AfterSetSelectionRange | `{ range: Range, forward: boolean }`                                                                                    | Fired after the selection range is set in the editor.                                                                                                                      |
| BeforeGetContent       | `{ format: string, source_view?: boolean, selection?: boolean, save?: boolean }`                                        | Fired before the content is serialized from the editor.                                                                                                                    |
| GetContent             | `{ content: string, format: string, source_view?: boolean, selection?: boolean, save?: boolean }`                       | Fired after the content is serialized from the editor.                                                                                                                     |
| BeforeSetContent       | `{ content: string, format?: string, paste?: boolean, selection?: boolean }`                                            | Fired before the content is parsed and rendered in the editor.                                                                                                             |
| SetContent             | `{ content: string, format?: string, paste?: boolean, selection?: boolean }`                                            | Fired after the content is parsed and rendered in the editor.                                                                                                              |
| LoadContent            | N/A                                                                                                                     | Fired after the initial content has loaded into the editor.                                                                                                           |
| PreviewFormats         | N/A                                                                                                                     | Fired before a formats CSS is generated when the format is being previewed in the editor.                                                                                  |
| AfterPreviewFormats    | N/A                                                                                                                     | Fired after a formats CSS is generated when the format is being previewed in the editor.                                                                                   |
| ScriptsLoaded          | N/A                                                                                                                     | Fired when all the scripts required for the editor to run (such as plugins and theme) have loaded.                                                                    |
| PreInit                | N/A                                                                                                                     | Fired after loading the editor and before starting to load the editor content.                                                                               |
| PostRender             | N/A                                                                                                                     | Fired after the theme has rendered.                                                                                                                              |
| NewBlock               | `{ newBlock: Element }`                                                                                                 | Fired when a new block is created in the editor, such as when the user presses the enter key.                                                                                                  |
| ClearUndos             | N/A                                                                                                                     | Fired when the undo levels have been cleared.                                                                                                                              |
| TypingUndo             | N/A                                                                                                                     | Fired when a new undo level is created by typing content into the editor.                                                                                                |
| Change                 | `{ level: UndoLevel }`                                                                                                  | Fired when the editor content changes have been committed, such as when moving focus away from the editor.                                                                         |
| Redo                   | `{ level: UndoLevel }`                                                                                                  | Fired when a change is been re-applied.                                                                                                                                    |
| Undo                   | `{ level: UndoLevel }`                                                                                                  | Fired when a change has been undone.                                                                                                                                       |
| BeforeAddUndo          | `{ level: UndoLevel, lastLevel: UndoLevel, originalEvent: Event }`                                                      | Fired before a new undo level is created.                                                                                                                                  |
| AddUndo                | `{ level: UndoLevel, lastLevel: UndoLevel, originalEvent: Event }`                                                      | Fired after a new undo level has been created.                                                                                                                             |
| Dirty                  | N/A                                                                                                                     | Fired when the editor transitions from a "pristine" state to a "dirty" state. The editor is "dirty" when [an undo level]({{site.baseurl}}/api/tinymce/tinymce.undomanager/) has been _created_ since initialization or the last saved state. To check if the editor is "dirty", use the [`editor.isDirty` API]({{site.baseurl}}/api/tinymce/tinymce.editor/#isdirty).                                                                                                |
| CloseWindow            | `{ dialog: DialogApi }`                                                                                                 | Fired when a dialog has been closed.                                                                                                                                       |
| OpenWindow             | `{ dialog: DialogApi }`                                                                                                 | Fired when a dialog has been opened.                                                                                                                                       |
| ProgressState          | `{ state: boolean, time?: number }`                                                                                     | Fired when a change to the editor progress state is scheduled using the {{ site.productname }} API [`tinymce.activeEditor.setProgressState()`]({{ site.baseurl }}/api/tinymce/tinymce.editor/#setprogressstate).                                                                                              |
| AfterProgressState     | `{ state: boolean }`                                                                                                    | Fired after the editor progress state is changed, and the new progress state is in effect.<br>{{ site.requires_5_7v}}                                                         |
| PreProcess             | `{ node: Element, format: string }`                                                                                     | Fired before serializing a DOM node to HTML content.                                                                                                                       |
| PostProcess            | `{ node: Element, format: string }`                                                                                     | Fired after serializing a DOM node to HTML content.                                                                                                                        |
| SetAttrib              | `{ attrElm: Element, attrName: string, attrValue: string }`                                                             | Fired when an attribute is updated using the editor [DOMUtils API]({{ site.baseurl }}/api/tinymce.dom/tinymce.dom.domutils/).                                                                                                          |
| ResizeEditor           | N/A                                                                                                                     | Fired when the editor is resized, either by the resize handles or the auto-resize plugin. As of {{site.productname}} 5.10.6, this event is also fired fullscreen mode is toggled. Toggling fullscreen mode requires the `fullscreen` plugin to be enabled.                                                                                 |
| SkinLoaded             | N/A                                                                                                                     | Fired when the editor skin has been loaded.                                                                                                                                |
| SkinLoadError          | `{ message: string }`                                                                                                   | Fired when the editor skin fails to load. {{site.requires_5_2v}}                                                                                                           |
| PluginLoadError        | `{ message: string }`                                                                                                   | Fired when an editor plugin fails to load. {{site.requires_5_2v}}                                                                                                          |
| IconsLoadError         | `{ message: string }`                                                                                                   | Fired when the editor icon pack fails to load. {{site.requires_5_2v}}                                                                                                     |
| LanguageLoadError      | `{ message: string }`                                                                                                   | Fired when the editor language pack fails to load. {{site.requires_5_2v}}                                                                                                  |
| BeforeRenderUI         | N/A                                                                                                                     | Fired before the theme UI is rendered.                                                                                                                                     |
| ToggleSidebar          | N/A                                                                                                                     | Fired when a sidebar is toggled opened/closed.                                                                                                                             |
| longpress              | (Same data as the native [touchstart event](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event)) | Fired when a long press occurs on a touch device inside the editor. <br/>{{ site.requires_5_1v }}                                                                          |
| tap                    | (Same data as the native [touchend event](https://developer.mozilla.org/en-US/docs/Web/API/Document/touchend_event))    | Fired when a tap occurs on a touch device inside the editor (simulated event similar to click). <br/>{{ site.requires_5_1v }}                                             |
| ScrollContent          | (Same data as the native [scroll event](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event))         | (iframe mode only) Fired when the content inside an iframe window has been scrolled.                                                                                       |
| ResizeContent          | (Same data as the native [resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event))          | (iframe mode only) Fired when the iframe window is resized.                                                                                                                |
| Load                   | N/A                                                                                                                     | (iframe mode only) Fired when the editor iframe content has finished loading.                                                                                              |
| ResolveName            | `{ name: string, target: Element }`                                                                                     | (iframe mode only) Fired when the editor tries to resolve the name of an element to render the status bar path.                                                            |
| BeforeOpenNotification | `{ notification: NotificationSpec }`                                                                                    | Fired before a notification is displayed. For information on the Notifications Specification (`NotificationSpec`), see: [Create custom notifications]({{site.baseurl}}/advanced/creating-custom-notifications/). {{site.requires_5_6v}}                       |
| OpenNotification       | `{ notification: NotificationApi }`                                                                                    | Fired after a notification is displayed. For information on the Notifications API (`NotificationApi`), see: [Create custom notifications]({{site.baseurl}}/advanced/creating-custom-notifications/). {{site.requires_5_6v}}                        |

## Plugin events

The following plugins provide events.

  - [Advanced Tables events](#advancedtablesevents)
  - [Autosave events](#autosaveevents)
  - [Character Map events](#charactermapevents)
  - [Comments events](#commentsevents)
  - [Export events](#exportevents)
  - [Format Painter events](#formatpainterevents)
  - [Fullscreen events](#fullscreenevents)
  - [Import CSS events](#importcssevents)
  - [Link checker events](#linkcheckerevents)
  - [Lists events](#listsevents)
  - [Media Embed events](#mediaembedevents)
  - [Paste events](#pasteevents)
  - [Permanent Pen events](#permanentpenevents)
  - [PowerPaste events](#powerpasteevents)
  - [Spell Checker events](#spellcheckerevents)
  - [Spell Checker Pro events](#spellcheckerproevents)
  - [Table events](#tableevents)
  - [Visual Blocks events](#visualblocksevents)
  - [Visual Characters events](#visualcharactersevents)
  - [Word Count events](#wordcountevents)

### Advanced Tables events

For events applicable to the Advanced Tables plugin, see: [Table events](#tableevents).

### Autosave events

The following events are provided by the [Autosave plugin]({{site.baseurl}}/plugins/opensource/autosave/).

| Name         | Data | Description                                      |
| ------------ | ---- | ------------------------------------------------ |
| RestoreDraft | N/A  | Fired when a draft has been restored.            |
| StoreDraft   | N/A  | Fired when a draft is saved.                     |
| RemoveDraft  | N/A  | Fired when a draft has been removed from memory. |

### Character Map events

The following event is provided by the [Character Map plugin]({{site.baseurl}}/plugins/opensource/charmap/).

| Name             | Data              | Description                                                   |
| ---------------- | ----------------- | ------------------------------------------------------------- |
| InsertCustomChar | `{ chr: string }` | Fired before a special character is inserted into the editor. |

### Comments events

The following event is provided by the [Comments plugin]({{site.baseurl}}/plugins/premium/comments/).

| Name                    | Data | Description                      |
| ----------------------- | ---- | -------------------------------- |
| mce-tinycomments-update | N/A  | Fired when the comments sidebar is opened or closed. |

### Export events

{% include events/export-events.md %}

### Format Painter events

The following event is provided by the [Format Painter plugin]({{site.baseurl}}/plugins/premium/formatpainter/).

| Name                | Data                 | Description                                  |
| ------------------- | -------------------- | -------------------------------------------- |
| FormatPainterToggle | `{ state: boolean }` | Fired when the format painter state changes. |

### Fullscreen events

The following event is provided by the [Fullscreen plugin]({{site.baseurl}}/plugins/opensource/fullscreen/).

| Name                   | Data                 | Description                              |
| ---------------------- | -------------------- | ---------------------------------------- |
| FullscreenStateChanged | `{ state: boolean }` | Fired when the fullscreen state changes. |

### Import CSS events

The following event is provided by the [Import CSS plugin]({{site.baseurl}}/plugins/opensource/importcss/).

| Name                  | Data                                       | Description                                                        |
| --------------------- | ------------------------------------------ | ------------------------------------------------------------------ |
| AddStyleModifications | `{ items: StyleItem[], replace: boolean }` | Fired during editor initialization when the style modifications are parsed from the CSS. |

### Link checker events

The following event is provided by the [Link Checker plugin]({{site.baseurl}}/plugins/premium/linkchecker/).

| Name             | Data                  | Description                                                                    |
| ---------------- | --------------------- | ------------------------------------------------------------------------------ |
| LinkCheckerError | `{ message: string }` | Fired when a link checker error occurs, such as the Link Checker service can't be reached. |

### Lists events

The following event is provided by the [Lists plugin]({{site.baseurl}}/plugins/opensource/lists/).

| Name         | Data                                   | Description                          |
| ------------ | -------------------------------------- | ------------------------------------ |
| ListMutation | `{ action: string, element: Element }` | Fired when a list is toggled on/off. |

### Media Embed events

The following event is provided by the [Media Embed plugin]({{site.baseurl}}/plugins/premium/mediaembed/).

| Name            | Data                  | Description                                                                   |
| --------------- | --------------------- | ----------------------------------------------------------------------------- |
| MediaEmbedError | `{ message: string }` | Fired when a media embed error occurs, such as the Media Embed service can't be reached. |

### Paste events

The following events are provided by the [Paste plugin]({{site.baseurl}}/plugins/opensource/paste/).

| Name                 | Data                                        | Description                                                                                      |
| -------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| PastePreProcess      | `{ content: string, wordContent: boolean }` | Fired before the content is parsed from the clipboard.                                           |
| PastePostProcess     | `{ node: Element, wordContent: boolean }`   | Fired after the content has been parsed from the clipboard, but before it's added to the editor. |
| PastePlainTextToggle | `{ state: boolean }`                        | Fired when the plain text paste mode state changes.                                              |

### Permanent Pen events

The following events are provided by the [Permanent Pen plugin]({{site.baseurl}}/plugins/premium/permanentpen/).

| Name                   | Data                                                                                                                                                         | Description                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| PermanentPenToggle     | `{ state: boolean }`                                                                                                                                         | Fired when the permanent pen state changes.          |
| PermanentPenProperties | `{ fontname: string, fontcolor: string, fontsize: string, hilitecolor: string, bold: boolean, italic: boolean, underline: boolean, strikethrough: boolean }` | Fired when the permanent pen properties are changed. |

### PowerPaste events

The following events are provided by the [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

| Name                 | Data                                                | Description                                                                                      |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| PastePreProcess      | `{ content: string, mode: string, source: string }` | Fired before the content is parsed from the clipboard.                                           |
| PastePostProcess     | `{ node: Element, mode: string, source: string }`   | Fired after the content has been parsed from the clipboard, but before it's added to the editor. |
| PastePlainTextToggle | `{ state: boolean }`                                | Fired when the plain text paste mode state changes.                                              |

### Spell Checker events

The following events are provided by the [Spell Checker plugin]({{site.baseurl}}/plugins/opensource/spellchecker/).

{% include DEPRECATED/spellchecker.md %}

| Name            | Data | Description                           |
| --------------- | ---- | ------------------------------------- |
| SpellcheckStart | N/A  | Fired when spellchecking is enabled.  |
| SpellcheckEnd   | N/A  | Fired when spellchecking is disabled. |

### Spell Checker Pro events

{% include events/tinymcespellchecker-events.md %}

### Table events

{% include events/table-events.md %}

### Visual Blocks events

The following event is provided by the [Visual Blocks plugin]({{site.baseurl}}/plugins/opensource/visualblocks/).

| Name         | Data                 | Description                                 |
| ------------ | -------------------- | ------------------------------------------- |
| VisualBlocks | `{ state: boolean }` | Fired when the Visual Blocks state changes. |

### Visual Characters events

The following event is provided by the [Visual Characters plugin]({{site.baseurl}}/plugins/opensource/visualchars/).

| Name        | Data                 | Description                                |
| ----------- | -------------------- | ------------------------------------------ |
| VisualChars | `{ state: boolean }` | Fired when the Visual Characters state changes. |

### Word Count events

The following event is provided by the [Word Count plugin]({{site.baseurl}}/plugins/opensource/wordcount/).

| Name            | Data                                                                                    | Description                                  |
| --------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| WordCountUpdate | `{ wordCount: { words: number, characters: number, charactersWithoutSpaces: number } }` | Fired when the editor word count is updated. |


## Editor Manager events

The following events are used for editor management. These events are handled using `tinymce.on`, rather than `editor.on` or `editor.fire`, as shown in [Examples: Handling Editor Manager events](#exampleshandlingeditormanagerevents).

| Name         | Data                | Description                                                                                                                                            |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AddEditor    | `{ editor: Editor}` | Fired when a new editor is created.                                                                                                                    |
| RemoveEditor | `{ editor: Editor}` | Fired when an editor is removed/destroyed.                                                                                                             |
| BeforeUnload | N/A                 | Fired before the browser window is closed (same as native [`beforeunload` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event)). |

### Examples: Handling Editor Manager events

**AddEditor**

```js
tinymce.on('AddEditor', function(e) {
  console.log('Added editor with id: ' + e.editor.id);
});
```

**RemoveEditor**

```js
tinymce.on('RemoveEditor', function(e) {
  console.log('Removed editor with id: ' + e.editor.id);
});
```
