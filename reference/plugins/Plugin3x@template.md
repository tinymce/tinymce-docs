---
layout: default
title: template
---

This plugin adds support for custom templates. There are two types of files this plugin supports: templates and snippets.

## Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "template".
2.  Add the template button name to button list, example: theme_advanced_buttons3_add : "template".
3.  Setup your template files (see below)
4.  Setup your template options (see below)

## Plugin options

| Name | Summary |
| --- | --- |
| template_external_list_url | JavaScript file containing an array of template files. This can be a backend page such as a PHP page. |
| template_cdate_classes | A list of class names separated by spaces. Any template element with one of the classes will have its content replaced by the 'creation' date, formatted according to the 'template_cdate_format' option. A creation date is one that is set if no previous date existed within the element. Once set the original date is stored inside the element in a HTML comment and is designed not to change even with a template change. |
| template_mdate_classes | A list of class names separated by spaces. Any template element with one of the classes will have its content replaced by the 'modified' date, formatted according to the 'template_mdate_format' option. A modified date is one that is updated with each edit. |
| template_cdate_format | A date format string for the creation date see below for options. |
| template_mdate_format | A date format string for the modified date see below for options. |
| template_selected_content_classes | A list of class names separated by spaces. Any template element with one of the classes will have its content replaced by the selected editor content when first inserted. |
| template_replace_values | This is an array of items that control content replacement in the inserted templates. The array keys equal the classnames used in the template. If a template element has a classname matching any in this array its contents will be replaced by the array value. See examples below. |
| template_templates | An array of template objects. Each object specifies the template title, source URL and description. If the source URL is relative it must be relative to the requested page. |
| template_popup_width | Template dialog width, defaults to 700. |
| template_popup_height | Template dialog height, defaults to 600. |

## Replace values example

Class names are used for templates and variable names are used for snippets.

```js
template_replace_values : {
  className : "Replace with this content",
  anotherClassName: "Replacement content"
}

```

## Replace values (functions) example

Replace content array values can also be functions. If a template element has a classname matching and the value is a fuction the function is called and the element passed as an argument.

```js
template_replace_values : {
  className : function(element) {
    // do something and then:
    // element.innerHTML = something
  }
}
```

## Templates example

```js
template_templates : [
  {
    title : "Editor Details",
    src : "editor_details.htm",
    description : "Adds Editors Name and Staff ID"
  }
]
```

## Example of an external list

This is the contents your backend page should return if you specify a URL using the template_external_list_url option. A simple array containing each template to present. This URL can be a backend page, for example a PHP file.

```js
var tinyMCETemplateList = [
  // Name, URL, Description
  ["Simple snippet", "templates/snippet1.htm", "Simple HTML snippet."],
  ["Layout", "templates/layout1.htm", "HTML Layout."]
];
```

## Making Snippets

Snippets are HTML code chunks that can be inserted. Replace variables will only be executed upon insert, without being wrapped in a template DIV element. So if you define somevar1 in template_replace_values array it will be replaced on preview and insert.

```
This is a simple <strong>snippet</strong>. Will be replaced: {$somevar1}.

```

## Making Templates

A template is a file with DIV containing the template data. All HTML outside the DIV will simply be presented to the user in the preview frame. A template has more capabilities than a simple snippet, a template can have dynamic content/smart content that gets updated by functions located in the template_replace_values. These functions will continue to be executed each time a cleanup procedure is performed.

##### Each template needs to use the following base HTML:

```html
<!-- This will not be inserted -->
<div class="mceTmpl">
<table width="98%%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <th scope="col"> </th>
    <th scope="col"> </th>
  </tr>
  <tr>
    <td> </td>
    <td> </td>
  </tr>
</table></div>

```

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "template",
  theme_advanced_buttons3_add : "template",
  template_cdate_classes : "cdate creationdate",
  template_mdate_classes : "mdate modifieddate",
  template_selected_content_classes : "selcontent",
  template_cdate_format : "%m/%d/%Y : %H:%M:%S",
  template_mdate_format : "%m/%d/%Y : %H:%M:%S",
  template_replace_values : {
    username : "Jack Black",
    staffid : "991234"
  },
  template_templates : [
    {
      title : "Editor Details",
      src : "editor_details.htm",
      description : "Adds Editor Name and Staff ID"
    },
    {
      title : "Timestamp",
      src : "time.htm",
      description : "Adds an editing timestamp."
    }
  ]
});
```
