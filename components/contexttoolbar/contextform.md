---
layout: default
title: Context Forms
title_nav: Context Forms
description: Context Toolbar Components
keywords: contexttoolbar context toolbar contexttoolbarapi contextform
---

## Context Forms

A ContextForm consists of an input field, and a series of related buttons. Context forms can be shown wherever a context toolbar can be shown. Also, when a context form is registered containing a `launch` configuration, a special context toolbar button with name `form:${name}` is registered which will launch that particular context form.
ContextForms are a generalisation of the `Insert Link` form that existed in the original `inlite` plugin from [TinyMCE 4](https://www.tiny.cloud/docs/themes/inlite/#quicklink).

### Registering a Context Form

A ContextForm is registered by calling the `addContextForm` API in the registry. The specification of a ContextForm is separated into two parts:

#### Launch

The Launch specification. This relates to what the button that launches this form will look like.

| Name | Details |
| ---- | ------- |
| `launch` | This is the specification for the launching button that can appear in a ContextToolbar only. It will be either type: `contextformbutton` or `contextformtogglebutton`, and will be identical to those definitions below except it will **not** have an `onAction`. |


#### Form

The Form specification: This relates to the form itself.

| Name | Details |
| ---- | ------- |
| `launch` | This is the specification for the launching button that can appear in a ContextToolbar only. It will be either type: `contextformbutton` or `contextformtogglebutton`, and will be identical to those definitions below except it will **not** have an `onAction`. |
| `label` | This is the label that will appear in the form. |
| `initValue` | This is the initial value the input will have in the form. |
| `predicate` | This controls when the context toolbar will appear. |
| `position` | This controls where the context toolbar will appear with regards to the current cursor. |
| `scope` | This controls whether the predicate is a `node`-based predicate, or an `editor`-based predicate. See Context Toolbar Proirity for more details. |
| `commands` | This is a list of the items to show in the ContextForm. They can be either `contextformbutton` or `contextformtogglebutton`. |

### Context Form buttons

Unlike normal context toolbar buttons, Context form buttons are not registered beforehand. Instead, you need to define each button completely in the `commands` section.


#### ContextForm Button

The definition of a ContextFormButton is very similar to the definition of a normal ToolbarButton. The main difference is that the action is slightly different (as it will relate to the form), and the type is `contextformbutton` instead of `button`. In full, the options are:

##### type: 'contextformtoggleutton';

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| primary | boolean; | Optional | This will activate the button on <enter> in the input form. |
| onAction | (formApi, togglebuttonApi) => void; | Required | This decides what happens when the user clicks the button. |
| active | boolean; | Optional | default:false |
| disabled | boolean; | Optional | default: false - Represents button state. Is toggled by the button's API |
| tooltip | string; | Optional | Text for button tooltip. |
| text | string; | Optional | Text to display if no icon is found. |
| icon | string; | Optional | It displays the icon corresponding to the icon name that has been defined in the icon pack. |
| onSetup | (togglebuttonApi) => (togglebuttonApi) => void; | Optional | default: () => () => {} - Function that's invoked when the button is rendered. |

Where the `buttonApi` is the same as a regular toolbar button and `FormApi` has (getValue: () => string, hide: () => void)

#### ContextFormToggleButton

The definition of a `ContextFormToggleButton` is very similar to the definition of a normal `ToolbarToggleButton`. The main difference is that the action is slightly different (as it will relate to the form), and the type is `contextformtogglebutton`, instead of `togglebutton`. In full, the options are:

##### type: 'contextformtoggleutton';

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| primary | boolean; | Optional | This will activate the button on <enter> in the input form. |
| onAction | (formApi, togglebuttonApi) => void; | Required | This decides what happens when the user clicks the button. |
| active | boolean; | Optional | default:false |
| disabled | boolean; | Optional | default: false - Represents button state. Is toggled by the button's API |
| tooltip | string; | Optional | Text for button tooltip. |
| text | string; | Optional | Text to display if no icon is found. |
| icon | string; | Optional | It displays the icon corresponding to the icon name that has been defined in the icon pack. |
| onSetup | (togglebuttonApi) => (togglebuttonApi) => void; | Optional | default: () => () => {} - Function that's invoked when the button is rendered. |

Where the `toggleButtonApi` is the same as a regular toolbar toggle button.

#### FormApi

Both `contextformbutton` and `contextformtogglebutton` are passed `formApi` in their `onAction` callback. The `formApi` has two functions:

| Functions | Description |
| --------- | ----------- |
|`hide` | This will hide the form. By default, no button hides the form. It is the responsibility of the developer to hide the form in the `onAction` handler of buttons that require that the ContextForm close after the action. |
| `getValue` | This will retrieve the value current typed in the input field. |
