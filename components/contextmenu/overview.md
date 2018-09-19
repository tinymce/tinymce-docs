---
layout: draft
title: Overview
title_nav: Overview
description: Context Menu Overview
keywords: contextmenu context menu contextmenuapi
---

## Introduction

### Adding a context menu.

If a feature wants to provide a context menu, then it needs to implement three functions: assign, situation, and handle. In addition, you need to register that feature with the context menu. Currently, this is done in Instance.js

In this example, we are going to step through the process of adding a Context Menu to new feature called: "ephox.polish.feature.Alpha"

Firstly, let's create the Alpha in Instance.js

`var alpha = Alpha(....);`

And later in the file:

engine.contextmenu().register('alpha', alpha);

Now, in the feature itself, we have to define assign, situation, and handle.

#### assign :: Option [Element] -> ()

The purpose of the assign method is to 'remember' where the context menu was launched. Sometimes, this requires descending down to a lower text node (because higher nodes might change), or ascending to a higher containing cell (because that is what is important).

```js
var target = Option.none(); // storing the most recently remembered element
...


var assign = function (marker) {
  target = marker; // remember this currently clicked on element. Importantly, marker is an Option.
};
```
>  Note: Assign does not return anything.

#### situation:  Element -> Struct(primary: List[Entry], secondary: List[Submenus], structure: Obj)

The situation method is used to identify what this particular feature wants to add to the context menu at the location assigned. Its result is broken up into three parts:

primary: this is a list of the the entries to add to the primary context menu. An entry is of the type: Struct(value: String, text: String, attrs: {})

secondary: this is a list of the submenus to add to the current context menu system. The secondary menus will not be visible initially until their triggering item is selected. The type of a submenu is: Struct(value: String, items: List[Entry]). Note, if there are no submenus, this should be an empty list.

structure: this is an object mapping between the primary values and the submenu values. It is used to identify which item in the main context menu should trigger each submenu. Note, if there are no submenus, this should be an empty object.

```js
var situation = function (element) {
  var entry = Struct.immutable('value', 'text', 'attrs');
  var submenu = Struct.immutable('value', 'textkey', 'items');

  // The alpha feature only has two entries: print alpha and print Alpha
  var primary = [
    entry('alpha-lower', 'Print "alpha"', {}),
    entry('alpha-upper', 'Print "Alpha"', {})
  ];
  var secondary = [];
  var submenus = {};
  return {
    primary: Fun.constant(primary),
    secondary: Fun.constant(secondary),
    submenus: Fun.constant(submenus)
  };
};
```
#### handle :: Element -> ()

The purpose of handle is to perform the appropriate action based on whatever item was clicked in the context menu. For this example, we will want to just log to the console different things.

```js
var logger = function (message) {
  return function () {
    console.log('message', message);
  };
};

var handlers = {
  'alpha-lower': logger('alpha'),
  'alpha-upper': logger('Alpha')
};

var handle = function (item) {
  // retrieve the value from the item
  var value = Attr.get(item, 'data-ephox-gopher-item-value');
  if (handlers[value] !== undefined) handlers[value]();
};
```
