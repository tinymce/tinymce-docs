---
layout: default
title: Link plugin
title_nav: Link
description: Add hyperlinks to content.
keywords: url urls insert edit default_link_target link_assume_external_targets link_class_list link_list target_list rel_list link_title
controls: toolbar button, menu item
---

{% assign pluginname = "Link" %}
{% assign plugincode = "link" %}

The **link** plugin allows a user to link external resources such as website URLs, to selected text in their document.

It adds two toolbar buttons called `link` and `unlink` and three menu items called `link`, `unlink` and `openlink`. The toolbar button and menu item called `link` are included in {{site.productname}}'s default configuration. The `link` menu item can be found in the `Insert` menu.

The **link** plugin also includes a context menu and context toolbar. The context toolbar can be configured using the [`link_context_toolbar`](#link_context_toolbar) and [`link_quicklink`](#link_quicklink) options documented below.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link'
});
```

## Options

These settings affect the execution of the `link` plugin. Predefined links, targets, and more can be specified here.

### `default_link_target`

This option allows you to set a default `target` value for links when inserting/editing a link via the link dialog. If the value of `default_link_target` matches a value specified by the [`target_list`](#target_list) option, that item will be set as the default item for the targets dropdown in the link dialog.

> **Note**: This option also applies to the [autolink]({{site.baseurl}}/plugins/opensource/autolink) plugin.

**Type:** `String`

#### Example: Using `default_link_target`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  default_link_target: '_blank'
});
```

### `link_assume_external_targets`

Set whether {{site.productname}} should prepend a `http://` prefix if the supplied URL does not contain a protocol prefix.

- `false`: users are prompted to prepend `http://` when the URL entered starts with `www` and does not have a protocol. Other URLs are added without prompt.
- `true`: URLs are assumed to be external. Users are prompted to prepend a `http://` prefix when the protocol is not specified.
- `'http'`: URLs are assumed to be external. URLs without a protocol prefix are prepended a `http://` prefix.
- `'https'`: URLs are assumed to be external. URLs without a protocol prefix are prepended a `https://` prefix.

**Default Value:** `false`

**Possible Values:** `true`, `false`, `'http'`, `'https'`

#### Example: Using `link_assume_external_targets`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_assume_external_targets: true
});
```

### `link_class_list`

The `link_class_list` option allows you to specify a list of classes for the link dialog. These classes will appear in a dropdown menu in the link dialog. Each class must be defined as an object with a `title` and a `value`. For example: `{title: 'Cat', value: 'cat'}`. When the dialog is submitted, the `value` of the selected class item from the dropdown will be set as the link's `class`.

#### Example: Using `link_class_list`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_class_list: [
    {title: 'None', value: ''},
    {title: 'External Link', value: 'ext_link'},
    {title: 'Internal Support Link', value: 'int_sup_link'},
    {title: 'Internal Marketing Link', value: 'int_mark_link'},
    {title: 'Other Internal Link', value: 'int_other_link'}
  ]
});
```

#### Example of a nested list of link classes

{{site.requires_5_5v}}

To create a nested list, replace `value` with `menu` to add the top level of the list, then provide an array of items.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_class_list: [
    {title: 'None', value: ''},
    {title: 'External Link', value: 'ext_link'},
    {title: 'Internal Links',
      menu: [
        {title: 'Internal Support Link', value: 'int_sup_link'},
        {title: 'Internal Marketing Link', value: 'int_mark_link'},
        {title: 'Other Internal Link', value: 'int_other_link'}
      ]
    }
  ]
});
```

### `link_context_toolbar`

By default it is not possible to open links directly from the editor. Setting `link_context_toolbar` to `true` will enable a context toolbar that will appear when the user's cursor is within a link. This context toolbar contains fields to modify, remove and open the selected link. External links will be opened in a separate tab, while relative links scroll to a target within the editor (if the target is found).

> **Note**: This context toolbar is the same as the context toolbar mentioned in the [`link_quicklink`](#link_quicklink) documentation below.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `link_context_toolbar`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_context_toolbar: true
});
```

### `link_default_protocol`

This option allows you to set a default protocol for links when inserting/editing a link via the link dialog. The protocol will apply to any links where the protocol has not been specified and the prefix prompt has been accepted.

> **Note**: This option also applies to the [autolink]({{site.baseurl}}/plugins/opensource/autolink) plugin.

**Type:** `String`

**Default Value:** `'http'`

#### Example: Using `link_default_protocol`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_default_protocol: 'https'
});
```

### `link_list`

This option lets you specify a predefined list of links for the link dialog. These links are added to a drop-down list in the link dialog. When a list item is selected, the dialog will be populated with the relevant data. This is useful if your users need to regularly link to the same sources.

There are multiple ways to specify how to get the data for the link list, but all methods rely on the returned data containing an array of link items. A link item is an object with a `title` and a `value`. For example: `{title: 'My page 1', value: 'https://www.tiny.cloud'}`.

**Type:** `String` or `Array` or `Function`

#### Example of an array of link items

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_list: [
    {title: '{{site.companyname}} Home Page', value: '{{site.url}}'},
    {title: '{{site.companyname}} Blog', value: '{{site.url}}/blog'},
    {title: '{{site.productname}} Documentation', value: '{{site.url}}/docs/'},
    {title: '{{site.productname}} on Stack Overflow', value: '{{site.communitysupporturl}}'},
    {title: '{{site.productname}} GitHub', value: 'https://github.com/tinymce/'}
  ]
});
```

#### Example of a nested list of link items

{{site.requires_5_5v}}

To create a nested list, replace `value` with `menu` to add the top level of the list, then provide an array of items.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_list: [
    {title: '{{site.companyname}} Home Page', value: '{{site.url}}'},
    {title: '{{site.companyname}} Blog', value: '{{site.url}}/blog'},
    {title: '{{site.productname}} Support resources',
      menu: [
        {title: '{{site.productname}} Documentation', value: '{{site.url}}/docs/'},
        {title: '{{site.productname}} on Stack Overflow', value: '{{site.communitysupporturl}}'},
        {title: '{{site.productname}} GitHub', value: 'https://github.com/tinymce/'}
      ]
    }
  ]
});
```

#### Example of an external script that returns a JSON array of link items

You can also configure a URL with JSON data. The JSON data must use the same format as above.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_list: '/mylist.php'
});
```

#### Example of a custom asynchronous callback function

`link_list` can also take a function that is called when the link dialog is opened. {{site.productname}} passes this function a `success` callback function, which should be passed an array of link items. This allows for asynchronous and dynamic generation of the list of links.

The following is an example of how `link_list` can be used with a callback function. `fetchLinkLists` could be replaced with any function that returns an array of link items. It can be used to generate a list of link items based on:

* Data retrieved from a database.
* The current editor content.
* The current user.

```js
var fetchLinkLists = function() {
  return [
    {title: 'My page 1', value: 'https://www.tiny.cloud'},
    {title: 'My page 2', value: 'https://about.tiny.cloud'}
  ]
};

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_list: function(success) { // called on link dialog open
    var links = fetchLinkList(); // get link_list data
    success(links); // pass link_list data to {{site.productname}}
  }
});
```

### `link_title`

This options allows you disable the link `title` input field in the `link` dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `link_title`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_title: false
});
```

### `link_quicklink`

This option changes the behaviour of the `CTRL + K` shortcut. By default, pressing `CTRL + K` will open the link dialog. If `link_quicklink` is set to `true`, pressing `CTRL + K` will instead open the link context toolbar. If the cursor is within an existing link, this context toolbar will contain fields for modifying, removing and opening the selected link. If not, the context toolbar allows for the quick insertion of a link.

> **Note**: This context toolbar is the same as the context toolbar mentioned in the [`link_context_toolbar`](#link_context_toolbar) documentation above.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `link_quicklink`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_quicklink: true
});
```

### `rel_list`

This option lets you specify a list of `rel` values for the `link` dialog. These values gets applied to the `rel` attribute. Each `rel` item must be defined as an object with a `title` and a `value`. For example: `{title: 'No Referrer', value: 'noreferrer'}`. When the dialog is submitted, the `value` of the selected `rel` item will be set as the link's `rel` attribute.

#### Example: Using `rel_list`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  rel_list: [
    {title: 'No Referrer', value: 'noreferrer'},
    {title: 'External Link', value: 'external'}
  ]
});
```

### `target_list`

The `target_list` option lets you specify a list of named targets for the `link` dialog. These targets will appear in a dropdown menu in the link dialog. Each target must be defined as an object with a `title` and a `value`. For example: `{title: 'Same page', value: '_self'}`. When the dialog is submitted, the `value` of the selected target item will be set as the link's `target` attribute.

If [`default_link_target`](#default_link_target) is also configured and its value matches a value specified by `target_list`, that item will be set as the default item for the targets dropdown in the link dialog.

**Default:**

```js
[
  { text: 'Current window', value: '' },
  { text: 'New window', value: '_blank' }
]
```

#### Example: Adding a `_parent` target to the dropdown list

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  target_list: [
    {title: 'None', value: ''},
    {title: 'Same page', value: '_self'},
    {title: 'New page', value: '_blank'},
    {title: 'Parent frame', value: '_parent'}
  ]
});
```

To disable the option dialog, set `target_list` to `false`.

#### Example: Turning off the target list dialog

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  target_list: false
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Link plugin provides the following JavaScript command.

{% include commands/link-cmds.md %}
