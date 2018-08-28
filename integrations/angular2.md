---
layout: default
title: Angular Integration
title_nav: Angular
description: Using TinyMCE together with Angular 2+ with the @tinymce/tinymce-angular component
keywords: integration integrate angular2 angular4 angular6 angular3 angular5 angularjs
---

The easiest way to get started using TinyMCE with Angular 2+ is with our official [@tinymce/tinymce-angular](https://github.com/tinymce/tinymce-angular) component!

## Installation

```sh
$ npm install @tinymce/tinymce-angular
```

## Usage
### Loading the component

Import the `EditorModule` from the npm package like this:

```js
import { EditorModule } from '@tinymce/tinymce-angular';
```
And add it to your application module:

```js
// This might look different depending on how you have set up your app
// but the important part is the imports array
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorModule // <- Important part
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

### Using the component in your templates

Use the editor in your templates like this:

```tsx
<editor apiKey="test" [init]="{plugins: 'link'}"></editor>
```

### Configuring the editor

The editor accepts the following inputs:

* `id`: An id for the editor so you can later grab the instance by using the `tinymce.get('ID')` method on tinymce, defaults to an automatically generated uuid.
* `init`: Object sent to the `tinymce.init` the method used to initialize the editor.
* `initialValue`: The Initial value that the editor will be initialized with.
* `inline`: Shorthand for setting that the editor should be inline, `<editor [inline]="true"></editor>` is the same as setting `{inline: true}` in the init.
* `tagName`: Only used if the editor is inline, decides what element to initialize the editor on, defaults to `div`.
* `plugins`: Shorthand for setting what plugins you want to use, `<editor plugins="foo bar"></editor>` is the same as setting `{plugins: 'foo bar'}` in the init.
* `toolbar`: Shorthand for setting what toolbar items you want to show, `<editor toolbar="foo bar"></editor>` is the same as setting `{toolbar: 'foo bar'}` in the init.
* `apiKey`: Api key for TinyMCE cloud, more info below.
* `cloudChannel`: Cloud channel for TinyMCE Cloud, more info below.

### `ngModel`

You can also use the `ngModel` directive (more info in the [Angular documentation](https://angular.io/api/forms/NgModel)) on the editor to simplify using it in a form:

```tsx
<editor [(ngModel)]="dataModel"></editor>
```

### Event binding

You can also bind editor events via a shorthand prop on the editor, for example:
```js
<editor (onSelectionChange)="handleEvent($eventObj)"></editor>
```
Where the handler gets called with an object containing the properties `event`, which is the event object, and `editor`, which is a reference to the editor.

Here is a full list of the events available:
<details>
<summary>All available events</summary>

* `onActivate`
* `onAddUndo`
* `onBeforeAddUndo`
* `onBeforeExecCommand`
* `onBeforeGetContent`
* `onBeforeRenderUI`
* `onBeforeSetContent`
* `onBeforePaste`
* `onBlur`
* `onChange`
* `onClearUndos`
* `onClick`
* `onContextMenu`
* `onCopy`
* `onCut`
* `onDblclick`
* `onDeactivate`
* `onDirty`
* `onDrag`
* `onDragDrop`
* `onDragEnd`
* `onDragGesture`
* `onDragOver`
* `onDrop`
* `onExecCommand`
* `onFocus`
* `onFocusIn`
* `onFocusOut`
* `onGetContent`
* `onHide`
* `onInit`
* `onKeyDown`
* `onKeyPress`
* `onKeyUp`
* `onLoadContent`
* `onMouseDown`
* `onMouseEnter`
* `onMouseLeave`
* `onMouseMove`
* `onMouseOut`
* `onMouseOver`
* `onMouseUp`
* `onNodeChange`
* `onObjectResizeStart`
* `onObjectResized`
* `onObjectSelected`
* `onPaste`
* `onPostProcess`
* `onPostRender`
* `onPreInit`
* `onPreProcess`
* `onProgressState`
* `onRedo`
* `onRemove`
* `onReset`
* `onSaveContent`
* `onSelectionChange`
* `onSetAttrib`
* `onSetContent`
* `onShow`
* `onSubmit`
* `onUndo`
* `onVisualAid`
</details>

## Loading TinyMCE
### Auto-loading from TinyMCE Cloud
The `Editor` component needs TinyMCE to be globally available to work, but to make it as easy as possible it will automatically load [TinyMCE Cloud](https://www.tinymce.com/docs/cloud-deployment-guide/) if it can't find TinyMCE available when the component has mounted. To get rid of the `This domain is not registered...` warning, sign up for the cloud and enter the api key like this:

```tsx
<editor apiKey="test" [init]="{/* your settings */}"></editor>
```

You can also define what cloud channel you want to use out these three
* `stable` **Default**. The most stable and well-tested version that has passed the Tiny quality assurance process.
* `testing` This channel will deploy the current candidate for release to the `stable` channel.
* `dev` The cutting edge version of TinyMCE updated daily for the daring users.

So using the `dev` channel would look like this:

```tsx
<editor
  apiKey="YOUR_API_KEY"
  cloudChannel="dev"
  [init]="{/* your settings */}"
  >
</editor>
```

For more info on the different versions see the [documentation](https://www.tinymce.com/docs/cloud-deployment-guide/editor-plugin-version/#devtestingandstablereleases).

### Loading TinyMCE by yourself

To opt out of using TinyMCE cloud, you have to make TinyMCE globally available yourself. This can be done either by hosting the `tinymce.min.js` file by yourself and adding a script tag to your HTML or, if you are using a module loader, installing TinyMCE with npm. For info on how to get TinyMCE working with module loaders check out [this page in the documentation](https://www.tinymce.com/docs/advanced/usage-with-module-loaders/).


#### A note about integrations

> Note:  We are pleased to provide integrations/code guidance to help you build great products with TinyMCE. If you have queries about this integration, please join the [TinyMCE Community](https://community.tinymce.com).
