---
layout: draft
title: Toolbar Buttons Overview
title_nav: Toolbar Buttons Overview
description: This section shows you how to add a custom button to the Tiny 5.0 toolbar.
keywords: toolbar toolbarbuttons buttons toolbarbuttonsapi
---

## Introduction

Working off this, to have something to go by: https://www.tiny.cloud/docs/advanced/creating-a-custom-button/

Basic button example is now: (check with mike if we might yet switch `editor.ui.registry.addButton` back to `editor.addButton`
```editor.ui.registry.addButton('myButton', {
  text: 'My Button',
  onAction: (eventApi) => {
    alert('My Button clicked!');
  }
});```
note:
 - onclick is now onAction (part of standardising across UI components), and has an `eventApi` argument which has some helpful functions depending on the type of button.
 - pretty sure buttons must *also* have an `onAction`, even if it's just `onAction: () => {}` which is an empty function.
 - tooltip, icon and text are still optionals fields
 - cmd is deprecated, and commands should be called in onAction. e.g. `cmd: mceSave' is now` onAction: (_) => { editor.execCommand('mceSave') }` - *I haven't checked that exactly, execCommand might take more args*. And an example with `mceInsertLink` or such might be better, but I have no idea how to pass args to the old cmd property >_>
 - onPostRender is now onSetup, and has some changes. Old onPostRender example function:
```onpostrender: function monitorNodeChange() {
  var btn = this;
  editor.on('NodeChange', function(e) {
    btn.disabled(e.element.nodeName.toLowerCase() == 'time');
  });
}```

new version:
        ```onSetup: (api) => {
          const editorEventCallback = (e) => {
            api.setDisabled(e.element.nodeName.toLowerCase() === 'time');
          };
          ed.on('NodeChange', editorEventCallback);
          return (api) => ed.off('NodeChange', editorEventCallback);
        }```
notes:
 - also has an `api` argument with some helpful functions - in this case, `isDisabled` and `setDisabled`.
 - onSetup can be called multiple times, whereas onPostRender only ever got called once, so there is now a teardown function (check wording with Morgan). So if any events were listened to in the onSetup code (the `ed.on('eventName', callback)` part), the callback function must also be returned as `(api) => ed.off('eventName', callback)`. The teardown will be automatically dealt with by Tiny - nothing further needs to be done regarding teardown.
   - check with Morgan and Mike - not only did I maybe not explain that too well, there may yet be minor changes to onSetup you'd need to be aware of (edited)

Millie Macdonald [3:36 PM]
we also now have a couple more button types, accessed by `editor.ui.registry.<function>`. the full list is:
- addButton - basic button
- addToggleButton - toggle button, similar to old one. also can have a `active` parameter in it's config, and the `api` object passed as an argument to onSetup and onAction also includes `isActive()` and `setActive()` helper functions. So rather than:

```var btn = this;
btn.active(false)```
   or such in an `onAction` function, you'd do

```api.setActive(false)```
   no more need for the `btn = this` part in this case
- addSplitButton - new, I don't know it at all. I can look for more details later. I think it kept changing until recently.
- addMenuButton - new, still in development? Definitely still changing
So, summary for migration guide:
- onclick is now onAction, which has `api` as an argument to give the user some helper functions
- onpostrender is now onSetup, and if it listens to any events, the user should *probably* return a `editor.off` callback for teardown, since onSetup potentially runs multiple times, whereas onpostrender only ever ran once (details in custom toolbar button page?). onSetup also has some helper functions passed in through the `api` parameter
- two new types of toolbar buttons that can be easily added via `editor.ui.registry.<function>` (these may have already been possible but I'm not sure how, and it should be easier now anyway)