---
layout: default
title: Autocompleter
title_nav: Autocompleter
description: Add a custom autocompleter to TinyMCE 6.
keywords: autocomplete
---

## Overview

An autocompleter displays suggestions while the user is typing. Suggestions are shown when the trigger character is entered after a space or at the start of a new line (such as '` :`'). Pressing the Escape key will close the autocompleter.

## How to create custom autocompleters

The method for adding a custom autocompleter is in the **UI Registry** part of the editor API `editor.ui.registry`:

* `editor.ui.registry.addAutocompleter(name, configuration)`

The two arguments this method take are:

* `name` - A unique name for the autocompleter.
* `configuration` - An object containing the user's configuration.

## Configuration options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| ch | string (of one character) | Required | The character to trigger the autocompleter. |
| fetch | `(pattern: string, maxResults: number, fetchOptions: Record<string, any>) => Promise<AutocompleteItem[] | CardMenuItem[]>` | Required | A function that is passed the current matched text pattern, the maximum number of expected results and any additional fetch options. The function should return a Promise containing matching results. |
| onAction | `(api, rng: Range, value: string) => void` | Required | A function invoked when a fetched item is selected. |
| columns | number or 'auto' | Optional | default: auto - The number of columns to show. If set to `1` column, then icons and text are displayed, otherwise only icons are displayed. |
| matches | `(rng: Range, text: string, pattern: string) => boolean` | Optional | default: `isStartOfWord` - A condition (predicate) function that takes a range, the current text node content and the matched text content and returns a boolean indicating if the autocompleter should trigger. |
| maxResults | number | Optional | default: 10 - The maximum number of results that should be fetched. |
| minChars | number | Optional | default: 1 - The minimum number of characters that must be typed before the autocompleter will trigger (excluding the trigger char). |
| highlight | array | Optional | When using [CardMenuItems](#cardmenuitem), use the highlight option to specify which [CardText](#cardtext) items to highlight the matched text pattern on. |

> **Note**: If two or more autocompleters use the same trigger character, then the fetched results will be merged together before being displayed.

### Usage of fetch

The `fetch` function is called when the trigger `char` is pressed and the `matches` predicate (condition function) returns `true`. The `fetch` function is passed the matched text pattern and returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) containing matching results, specified as either [AutocompleteItems](#autocompleteitem) or [CardMenuItems](#cardmenuitem). This allows for asynchronous fetching of the items. The `fetchOptions` parameter passed to the `fetch` function is by default an empty object, however using the [reload](#api) API, additional options can be passed to fetch a different set of results.

There are two types of items:

* [AutocompleteItem](#autocompleteitem)
* [CardMenuItem](#cardmenuitem)

#### AutocompleteItem

This is the standard item for the autocompleter. If no type is specified, autocompleter items are assumed to be of type `AutocompleteItem`.

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| value | string | optional | Value of the item. This will be passed to the `onAction` callback when selected. |
| text | string | optional | Text to display for the item. |
| icon | string | optional | Name of the icon to be displayed. Must be a either single unicode character or an icon from: the [icon pack]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/editor-icon-identifiers/), a [custom icon pack]({{site.baseurl}}/how-to-guides/customizing-the-editor-appearance/creating-an-icon-pack/), or an icon added using the [`addIcon` API]({{site.baseurl}}/apis/tinymce.editor.ui/tinymce.editor.ui.registry/#addicon). |

```js
{
  type: 'autocompleteitem',
  value: 'John Doe',
  text: 'John Doe',
  icon: 'my_icon'
}
```

{% comment %} TODO: DOC-719 and TINY-6593: Move CardMenuItem/subitems specification to menuitems.md {% endcomment %}

#### CardMenuItem

The `CardMenuItem` allows customization of layout and content. This is done by constructing an array of subcomponent specifications which will determine the structure of the final item. A classical example of this would be the need to display a "user" item containing a profile picture, a user name, and a description.

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| items | array | required | An array of [CardItems](#carditems) |
| value | string | optional | Value of the item. This will be passed to the `onAction` callback when selected. |
| label | string | optional | Label of the item. Will be used for [accessibility purposes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA). |

```js
{
  type: 'cardmenuitem',
  value: 'John Doe',
  label: 'John Doe',
  items: [ ] // array of card items
}
```

#### CardItems

`CardItems` are subcomponents for the `CardMenuItem`. Use these to construct your custom item and display relevant information to the user.

There are three types of card items:
* [CardContainer](#cardcontainer)
* [CardText](#cardtext)
* [CardImage](#cardimage)

##### CardContainer

A `CardContainer` is a layout component used to apply a layout to an array of card items.

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| items | array | required | An array of [CardItems](#carditems) |
| direction | `'vertical'` or `'horizontal'` | optional | default: `horizontal` - directionality of subitems |
| align | `'left'` or `'right'` | optional | default: `left` - horizontal alignment of subitems |
| valign | `'top'`, `'middle'` or `'bottom'` | optional | default: `middle` - vertical alignment of subitems |

```js
{
  type: 'cardcontainer',
  direction: 'horizontal',
  align: 'left',
  valign: 'middle',
  items: [ ... ]
}
```

##### CardText

`CardText` is a component for displaying text.

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | required | Text to display |
| name | string | optional | Identifier used to reference specific CardText items. The autocompleter will use this for the text-highlight functionality. |
| classes | array | optional | Array of classes to apply. Note: restrict usage to styles that won't affect the layout, such as `font-style`. |

```js
{
  type: 'cardtext',
  text: 'John Doe',
  name: 'my_autocompleter_cardtext',
  classes: ['my-cardtext-class']
}
```

##### CardImage

`CardImage` is a component for displaying an image.

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| src | string | required | Image source to use |
| alt | string | required | Image alt text |
| classes | array | optional | Array of classes to apply. Note: restrict usage to styles that won't affect the layout, such as `border-radius`. |

```js
{
  type: 'cardimage',
  src: 'profile-picture.jpeg',
  alt: 'My alt text',
  classes: ['my-cardimage-class']
}
```

## API

| Name | Value | Description |
| ---- | ----- | ----------- |
| hide | `() => void` | Hides the autocompleter menu. |
| reload | `(fetchOptions: Record<string, any>) => void` | Hides the autocompleter menu and fetches new menu items. The  `fetchOptions` will be passed to the autocompleter `fetch` callback. |

## Interactive examples

The following examples show how to create a special characters autocompleters.

### Example: Standard Autocompleter

This example uses the standard autocompleter item and will show when user types the colon (`:`) character and at least one additional character.

{% include live-demo.html id="autocompleter-autocompleteitem" height="300" tab="js" %}

### Example: Using `CardMenuItems` in the Autocompleter

This example uses [CardMenuItems](#cardmenuitem) and will show when a user types a hyphen (`-`) character and at least one additional character.

{% include live-demo.html id="autocompleter-cardmenuitem" height="300" tab="js" %}
