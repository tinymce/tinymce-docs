---
layout: default
title: Template plugin
title_nav: Template
description: Custom templates for your content.
keywords: insert template_cdate_classes template_cdate_format template_mdate_classes template_mdate_format  template_replace_values template_selected_content_classes template_preview_replace_values
controls: toolbar button, menu item
---

The `template` plugin adds support for custom templates. It also adds a menu item `Insert template` under the `Insert` menu and a toolbar button.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  menubar: "insert",
  toolbar: "template"
});
```

There are two types of files the `template` plugin supports: *templates* and *snippets*. We will first review the plugin options before moving on to some examples.

### Options

These settings affect the execution of the `template` plugin. Predefined templates for items such as created dates and modified dates can be set here.

### `templates`

This option lets you specify a predefined list of templates to be inserted by the user into the editable area. It is structured as an array with each item having a `title`, `description` and `content`/`url`.

If this option is a string then it will be requested as a URL that should produce a JSON output in the same format the option accepts.

Each item in the list can either be inline using a `content` property or a whole file using the `url` property.

**Example using templates object:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  menubar: "insert",
  toolbar: "template",
  templates: [
    {title: 'Some title 1', description: 'Some desc 1', content: 'My content'},
    {title: 'Some title 2', description: 'Some desc 2', url: 'development.html'}
  ]
});
```

**Example using templates URL**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  menubar: "insert",
  toolbar: "template",
  templates: "/dir/templates.php"
});
```

**Example JSON output of templates.php**

```json
[
  {"title": "Some title 1", "description": "Some desc 1", "content": "My content"},
  {"title": "Some title 2", "description": "Some desc 2", "url": "development.html"}
]
```

### `template_cdate_classes`

This option allows you to provide a list of class names (separated by spaces) whereby any template element with one of the classes will have its content replaced by the 'creation' date (`creationdate`), formatted according to the `template_cdate_format` option.

A creation date is one that is set if no previous date existed within the element. Once set, the original date is stored inside the element in a HTML comment and is designed not to change even with a template change.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  menubar: "insert",
  toolbar: "template",
  template_cdate_classes: "cdate creationdate"
});
```

### `template_cdate_format`

This option allows you to provide a date format that all 'creation' date templates will be replaced by.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  menubar: "insert",
  toolbar: "template",
  template_cdate_format: "%m/%d/%Y : %H:%M:%S"
});
```

### `template_mdate_classes`

This option allows you to provide TinyMCE with a list of class names (separated by spaces) whereby any template element with one of the classes will have its content replaced by the 'modified' date (`modifieddate`), formatted according to the `template_mdate_format` option.

A modified date is one that is updated with each edit.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  menubar: "insert",
  toolbar: "template",
  template_mdate_classes: "mdate modifieddate"
});
```

### `template_mdate_format`

This option allows you to provide TinyMCE with a date/time format that all 'modified' date templates will be replaced with.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  menubar: "insert",
  toolbar: "template",
  template_mdate_format: "%m/%d/%Y : %H:%M:%S"
});
```

### `template_replace_values`

This is an array of items that controls content replacement in the inserted templates. 

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  menubar: "insert",
  toolbar: "template",
  template_replace_values: {
    username: "Jack Black",
    staffid: "991234"
  }
});
```

This can then be used in a template or snippet that looks like this:

```html
<p>Name: {$username}, StaffID: {$staffid}</p>
``` 

And that will be changed to: 

```html
<p>Name: Jack Black, StaffID: 991234</p>
```

### `template_selected_content_classes`

This option allows you to provide a list of class names (separated by spaces) whereby any template element with one of the classes will have its content replaced by the selected editor content when first inserted.


##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  template_selected_content_classes: "selcontent selectedcontent"
});
```

### Template Plugin Examples

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "template",
  menubar: "insert",
  toolbar: "template",
  template_cdate_classes: "cdate creationdate",
  template_mdate_classes: "mdate modifieddate",
  template_selected_content_classes: "selcontent",
  template_cdate_format: "%m/%d/%Y : %H:%M:%S",
  template_mdate_format: "%m/%d/%Y : %H:%M:%S",
  template_replace_values: {
    username : "Jack Black",
    staffid : "991234"
  },
  template_popup_height: "400",
  template_popup_width: "320",
  templates : [
    {
      title: "Editor Details",
      url: "editor_details.htm",
      description: "Adds Editor Name and Staff ID"
    },
      {
        title: "Timestamp",
        url: "time.htm",
        description: "Adds an editing timestamp."
      }
  ]
});
```

**Templates example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  templates : [
    {
      title: "Editor Details",
      url: "editor_details.htm",
      description: "Adds Editors Name and Staff ID"
    }
  ]
});
```

**Example of an external list:**

This is the contents your backend page should return if you specify a URL in the templates option. A simple array containing each template to present. This URL can be a backend page, for example a PHP file.

```json
[
  {"title": "Some title 1", "description": "Some desc 1", "content": "My content"},
  {"title": "Some title 2", "description": "Some desc 2", "url": "development.html"}
]
```

### Making Templates

A template is a file with a `div` containing the template data. All `html` outside the `div` will simply be presented to the user in the preview frame.

A template has more capabilities than a simple snippet, for example, a template can have dynamic content/smart content that gets updated by functions located in the `template_replace_values` key. These functions will continue to be executed each time a cleanup procedure is performed.

Each template needs to be inside of a div with the `mceTmpl` class, like this example:

```html
<!-- This will not be inserted -->
<div class="mceTmpl">
  <table width="98%%"  border="0" cellspacing="0" cellpadding="0">
    <tr>
      <th scope="col"> </th>
      <th scope="col"> </th>
    </tr>
    <tr>
      <td> </td>
      <td> </td>
    </tr>
  </table>
</div>
```

### Making Snippets

Snippets are `html` code chunks that can be inserted. Replace variables will only be executed upon insert, without being wrapped in a template `div` element. So if you define `somevar1` in `template_replace_values` array it will be replaced on preview and insert.

```html
This is a simple <strong>snippet</strong>. Will be replaced: {$somevar1}.
```
