---
layout: default
title: Autocompleter
title_nav: Autocompleter
description: Add a custom autocompleter to TinyMCE 5.
keywords: autcomplete
---

## Overview

An `autocompleter` enables users to quickly find and select from a pre-populated list of values as they type, leveraging searching and filtering. It provides suggestions to insert while the user is typing into the content. For example, with the [charmap]({{site.baseurl}}/plugins/charmap/) plugin enabled, typing **:amp** should show the ampersand item in the menu. Pressing `esc` should close the autocomplete menu.

## How to create custom autocompleters

The method for adding a custom autocompleter is in the **UI Registry** part of the editor API `editor.ui.registry`:

* `editor.ui.registry.addAutocompleter(name, configuration)`

The two arguments this method take are:

* `name` - A unique name for the autocompleter.
* `configuration` - An object containing the user's configuration.

## Configuration options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| ch | string | Required | The character to trigger the autocompleter. |
| fetch | `(pattern: string, maxResults: number, fetchOptions: Record<string, any>) => Promise<AutocompleterItem[]>` | Required | A function that is passed the current matched text pattern, the maximum number of expected results and any additional fetch options. The function should return a promise containing matching results. |
| onAction | `(api, rng: Range, value: string) => void` | Required | A function invoked when a fetched item is selected. |
| columns | number or 'auto' | Optional | default: auto - The number of columns to show. If set to `1` column, then icons and text are displayed, otherwise only icons are displayed. |
| matches | `(rng: Range, text: string, pattern: string) => boolean` | Optional | default: `isStartOfWord` - A predicate function that takes a range, the current text node content and the matched text content and returns a boolean indicating if the autocompleter should trigger. |
| maxResults | number | Optional | default: 10 - The maximum number of results that should be fetched. |
| minChars | number | Optional | default: 1 - The minimum number of characters that must be typed before the autocompleter will trigger (excluding the trigger char). |

The `fetch` function is called whenever the trigger `char` is pressed and the `matches` predicate returns `true`. It is a function that takes the matched text pattern and returns a promise containing matching results. This allows for asynchronous fetching of the autocompleter items. The `fetchOptions` passed to the `fetch` function is by default an empty object, however using the [reload](#api) API additional options can be passed to fetch a different set of results.

The `fetch` results should be a list of objects with the following details:
* `value`: Value of the item. This will be passed to the `onAction` callback when selected.
* `text`: Text to display for the item.
* `icon`: Name of the icon to be displayed. Must be a single unicode character or correspond to an icon in the icon pack.

> **Note**: If two or more autocompleters use the same trigger character, then the fetched results will be merged together before being displayed.

## API

| Name | Value | Description |
| ---- | ----- | ----------- |
| hide | `() => void` | Hides the autocompleter menu. |
| reload | `(fetchOptions: Record<string, any>) => void` | Hides the autocompleter menu and fetches new menu items. The  `fetchOptions` will be passed to the autocompleter `fetch` callback. |

## Interactive example

This example shows how the charmap plugin adds the standard autocompleter. The autocompleter will show whenever a `:` character is typed plus at least one additional character.

{% include live-demo.html id="autocompleter" height="300" tab="js" %}

