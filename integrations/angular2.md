---
layout: default
title: Angular2 Integration
title_nav: Angular2
description: Using TinyMCE together with Angular2 with the help of angular-cli.
keywords: integration integrate angular2 angularjs
---

The absolutely easiest way to get started using TinyMCE with Angular2 is with the marvelous [angular-cli](https://github.com/angular/angular-cli). This guide will show you how to set up a simple project. Let's get started!

## Please note!
**The following is not _production ready code_, but only a simple guide on how to get started using TinyMCE together with Angular2.**

#### Generate new project
Use `angular-cli` to generate a new project and cd into it (see [`angular-cli` docs](https://github.com/angular/angular-cli#usage) for details).

```
$ ng new PROJECT_NAME
$ cd PROJECT_NAME
```
#### Install TinyMCE with npm
Simply run:

```
$ npm install --save tinymce
```
#### Setup TinyMCE globals
TinyMCE needs to be globally accessible to work - something that usually can be a little tricky to get working with module loaders like Webpack (which `angular-cli` uses under the hood) - but is done extremely easily thanks to the `angular-cli.json` configuration file located in your project's root directory.

Simply add the path to TinyMCE, along with the path to the theme and any plugins you want to use, to `apps[0].scripts` in `angular-cli.json`. For example, if you want to use the `modern` theme and the `link`, `paste` and `table` plugin you would put this in your `angular-cli.json`:

```json
"scripts": [
  "../node_modules/tinymce/tinymce.js",
  "../node_modules/tinymce/themes/modern/theme.js",
  "../node_modules/tinymce/plugins/link/plugin.js",
  "../node_modules/tinymce/plugins/paste/plugin.js",
  "../node_modules/tinymce/plugins/table/plugin.js"
],
```

And that's it, TinyMCE is globally available in your project. For more see [`angular-cli` docs](https://github.com/angular/angular-cli#global-library-installation).

#### Add typing

Even though the setup above will make the `tinymce` global available TypeScript will complain that it "cannot find name 'tinymce'", so you will have to add something like this either directly into the file that calls on tinymce or to the `typings.d.ts` file located in the `src` directory:

```ts
declare var tinymce: any;
```

#### Getting the skin

TinyMCE will not work without a **skin**, which simply consists of some fonts and CSS files used by the editor. The easiest way to get this working in a `angular-cli` project is just to copy the `skins` directory from TinyMCE to the `src/assets` directory, either by manually copying the files in the finder/file explorer, or using the terminal with a command something like this:

**Macos and Linux**

```
cp -r node_modules/tinymce/skins src/assets/skins
```
**Windows**

```
xcopy /I /E node_modules\tinymce\skins src\assets\skins
```

Then, when initializing a TinyMCE instance, just add the `skin_url` setting with the correct url like this:

```js
tinymce.init({
  skin_url: 'assets/skins/lightgray'
  // other settings
});
```


`angular-cli` will be smart enough to copy along the assets both while developing with the dev server using `ng serve`, but also when you build your project with `ng build`.

## Sample component implementation

The following is a simple sample implementation of a component showing the TinyMCE editor.

```ts
import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{% raw %}{{{% endraw %}elementId{% raw %}}}{% endraw %}"></textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;
  
  constructor() {
  this.elementId = `editor-${Math.floor(Math.random() * 10000)}`;
  console.log(this.elementId);
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
```

It would be used in a parent component template like this:

```ts
<simple-tiny
  [elementId]="'my-editor-id'"
  (onEditorKeyup)="keyupHandlerFunction($event)"
  >
</simple-tiny>
```

Things worth noting are

1. All plugins that you want to use has to be added to your `angular-cli.json` configuration file.
2. TinyMCE needs a unique id to be able to show more than one editor at a time, so we send in an id string through an input from the parent component.
3. To clean up and remove the editor when the `SimpleTinyComponent` is destroyed we first save a reference to the editor in the `setup` method when we initialize the editor and then, in the `ngOnDestroy` lifecycle hook, we run the `tinymce.remove()` function passing in this reference.

### Wrapping up

This was just a simple run-through to show how to get started but hopefully it has inspired you to start using TinyMCE in your future Angular2 projects. Have fun!

#### A note about integrations

> We are pleased to provide integrations/code guidance to help you build great products with TinyMCE. If you have queries about this integration, please join the [TinyMCE Community](https://community.tinymce.com).
