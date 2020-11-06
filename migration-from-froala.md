---
layout: default
title: Migrating from Froala to TinyMCE
title_nav: Migrating from Froala
description: Upgrading your rich text editor from Froala Editor v3 to TinyMCE 5.
keywords: migration considerations premigration pre-migration froala
---

This page covers the basic steps for migrating from Froala Editor 3 to {{site.productname}} {{site.productmajorversion}}.
Procedures and links to our documentation have been included to assist with your migration to {{site.productname}}.

**Covered in this section:**
* [Migrating a Basic Froala Configuration to {{site.productname}}]({{site.baseurl}}/migration-from-froala/#migratingabasicfroalaconfigurationtotinymce)
* [Updating the list of Plugins]({{site.baseurl}}/migration-from-froala/#updatingthelistofplugins)
* [Migrating a Custom Toolbar Layout]({{site.baseurl}}/migration-from-froala/#migratingacustomtoolbarlayout)
* [Configuring Inline Mode]({{site.baseurl}}/migration-from-froala/#configuringinlinemode)
* [Migrating Custom Buttons]({{site.baseurl}}/migration-from-froala/#migratingcustombuttons)
* [Migrating Custom Drop-down Toolbar Buttons]({{site.baseurl}}/migration-from-froala/#migratingcustomdrop-downtoolbarbuttons)

## Migrating a Basic Froala Configuration to TinyMCE

To migrate from a basic Froala 3 configuration to a basic {{site.productname}} {{site.productmajorversion}} configuration, you need to:

1. Replace the Froala links and source scripts with a {{site.productname}} source script.
2. Replace the Froala editor variable assignment with the `tinymce.init` function.

### Replace Froala links and source script with a TinyMCE source script

1. Remove the Froala links and source script, located in the `<head>` of the target HTML page.
For example:
    ```html
    <link href='/path/to/froala-editor/base/directory/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
    <script type='text/javascript' src='/path/to/froala-editor/base/directory/js/froala_editor.pkgd.min.js'></script>
    <link href='/path/to/froala-editor/base/directory/css/froala_style.min.css' rel='stylesheet' type='text/css' />
    ```

2. Insert a {{site.productname}} source script into the `<head>` of the page.
  * For {{site.cloudname}} deployments:
    ```html
    <script src='https://cdn.tiny.cloud/1/your-api-key/tinymce/5/tinymce.min.js' referrerpolicy='origin'></script>
    ```
    Replace `your-api-key` with your [{{site.cloudname}} API key]({{site.accountpageurl}}).

  * For Self-hosted {{site.productname}} deployments:
    ```html
    <script src='/path/to/tinymce/base/directory/tinymce.min.js'></script>
    ```
    Replace `/path/to/tinymce/base/directory` with the relative path of the `tinymce/` directory containing `tinymce.min.js`.

For information on {{site.productname}} deployment types, see: [Installing {{ site.productname }}]({{site.baseurl}}/general-configuration-guide/advanced-install/).

### Replace the Froala editor variable assignment with the tinymce.init function
To insert an editor in the body of the page for a `<textarea>` element such as:
```html
<form method='post'>
  <textarea id='myeditor'>Enter your comment here!</textarea>
</form>
```

1. Remove the Froala editor variable assignment script.
    ```html
    <script>
      var editor = new FroalaEditor('textarea#myeditor')
    </script>
    ```
2. Add a `tinymce.init` function.
    ```html
    <script>
      tinymce.init({ selector: '#myeditor' });
    </script>
    ```

For information on configuring the `selector` setting, see: [Basic Setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).

### Examples: Basic Configuration

The following examples show an initial Froala configuration and the migrated {{site.productname}} configuration.

#### Froala 3 - A Basic Configuration

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <link href='/path/to/froala-editor/base/directory/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
    <script type='text/javascript' src='/path/to/froala-editor/base/directory/js/froala_editor.pkgd.min.js'></script>
    <link href='/path/to/froala-editor/base/directory/css/froala_style.min.css' rel='stylesheet' type='text/css' />
  </head>
  <body>
    <form method='post'>
      <textarea id='basic_froala'>Hello, World! I'm a froala editor!</textarea>
    </form>
    <script>
      var editor = new FroalaEditor('textarea#basic_froala')
    </script>
  </body>
</html>
```

#### TinyMCE 5 - A Basic Configuration

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <script src='https://cdn.tiny.cloud/1/my-api-key/tinymce/5/tinymce.min.js' referrerpolicy='origin'></script>
  </head>
  <body>
    <form method='post'>
      <textarea id='tiny_basic'>Hello, World! I'm a tiny editor!</textarea>
    </form>
    <script>
      tinymce.init({ selector: 'textarea#tiny_basic' });
    </script>
  </body>
</html>
```

### Additional Information

For information on:
* Getting started with {{site.productname}}, see: [{{site.productname}} Quick Start]({{site.baseurl}}/quick-start).
* Installing {{site.productname}}, see: [Installing {{ site.productname }}]({{site.baseurl}}/general-configuration-guide/advanced-install/).

## Updating the list of Plugins

Some _Froala core functionality_ is implemented by [plugins for {{site.productname}}]({{site.baseurl}}/plugins/); and some _Froala plugin-provided functionality_ is {{site.productname}} core functionality.

For Example:
* Froala includes ordered lists as part of the core functionality, but the `lists` plugin provides ordered lists for {{site.productname}}.
* Adding a font size option in Froala requires a plugin, but `fontsize` is core functionality for {{site.productname}}.

To include a plugin for a {{site.productname}} editor, add a `plugins` option and provide a [space-delimited list of the plugins to include]({{site.baseurl}}/configure/integration-and-setup/#plugins), as shown below. You should delete any Froala sourcing scripts and Froala links from the page.

### Examples: Enabling Plugins

The following examples show how plugins are included or enabled in the Froala and {{site.productname}} editors.

#### Froala 3 - Enabling Plugins
```html
<head>
  <meta charset='utf-8'>
  <link href='/path/to/froala-editor/base/directory/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
  <script type='text/javascript' src='/path/to/froala-editor/base/directory/js/froala_editor.pkgd.min.js'></script>
  <link href='/path/to/froala-editor/base/directory/css/froala_style.min.css' rel='stylesheet' type='text/css' />
  <!-- Examples of Froala Plugin scripts -->
  <!-- Colors plugin -->
  <script type='text/javascript' src='/path/to/froala-editor/base/directory/js/plugins/colors.min.js'></script>
  <link href='/path/to/froala-editor/base/directory/css/plugins/colors.min.css' rel='stylesheet' type='text/css' />
  <!-- Emoticons plugin -->
  <script type='text/javascript' src='/path/to/froala-editor/base/directory/js/plugins/emoticons.min.js'></script>
  <link href='../css/plugins/emoticons.min.css' rel='stylesheet' type='text/css' />
  <!-- Font Family plugin -->
  <script type='text/javascript' src='/path/to/froala-editor/base/directory/js/plugins/font_family.min.js'></script>
  <!-- Font Size plugin -->
  <script type='text/javascript' src='/path/to/froala-editor/base/directory/js/plugins/font_size.min.js'></script>
  <!-- Help plugin -->
  <script type='text/javascript' src='/path/to/froala-editor/base/directory/js/plugins/help.min.js'></script>
  <link href='/path/to/froala-editor/base/directory/css/plugins/help.min.css ' rel='stylesheet' type='text/css' />
</head>
```

#### TinyMCE 5 - Enabling Plugins

```html
<script>
  tinymce.init({
    selector: '#tiny_editor',
    plugins: 'emoticons wordcount help code lists'
  });
</script>
```

### Additional Information on Plugins
* For information on enabling plugins for {{site.productname}}, see: [Integration and setup options: plugins]({{site.baseurl}}/configure/integration-and-setup/#plugins).
* For a list of {{site.productname}} plugins, see: [Add plugins to {{site.productname}}]({{site.baseurl}}/plugins/).

## Migrating a Custom Toolbar Layout

To migrate a Custom Toolbar Layout from Froala to {{site.productname}}:
* Change the `toolbarButtons` option to `toolbar`.
* Update the toolbar item listing.
* Update the `plugin` option as required.

### Change the `toolbarButtons` option to `toolbar`
Rename the Froala option `toolbarButtons` to `toolbar`.
### Update the toolbar item listing
Froala and {{site.productname}} use different formats for listing toolbar items.

Froala accepts the list of toolbar buttons as a two-dimensional array of strings, with each array defining a group of toolbar items. For example:
```js
toolbarButtons: [['undo', 'redo'], ['paragraphFormat'], ['bold', 'italic'],
['alignLeft', 'alignCenter', 'alignRight', 'alignJustify'],
['formatOL', 'formatUL'], ['indent', 'outdent']]
```
{{site.productname}} accepts a space-delimited string with horizontal bars (` | `) for grouping items.
For example:
```js
toolbar: 'undo redo | formatselect | bold italic
| alignleft aligncenter alignright alignjustify
| numlist bullist | outdent indent'
```

Replace the names of toolbar items with the {{site.productname}} names. For example:

Toolbar Button | Froala | {{site.productname}}
---|---|---
Format/Style Selector | `paragraphFormat` | `formatselect`
Ordered list | `formatOl` | `numlist`
Unordered list | `formatUL` | `bullist`

### Update the `plugin` option as required

The list of plugins may need updating, as indicated in [Updating the list of Plugins]({{site.baseurl}}/migration-from-froala/#updatingthelistofplugins). For example, the {{site.productname}} toolbar items; `numlist` and `bullist`, require the `lists` plugin.

For a list of toolbar items with the required plugins, see: [Toolbar Buttons Available for {{site.productname}}]({{site.baseurl}}/advanced/available-toolbar-buttons/).

### Examples: Custom Toolbar Layouts

The following examples show a custom toolbar layout in Froala and the same layout migrated to {{site.productname}}.

#### Froala 3 - Creating a Custom Toolbar Layout

```html
<h2>Froala Custom Toolbar</h2>
  <form method='post'>
    <textarea id=froala_custom_toolbar>Hello, World! I'm a froala editor!</textarea>
  </form>
<script>
  var editor = new FroalaEditor('textarea#froala_custom_toolbar', {
    paragraphFormatSelection: true ,
    toolbarButtons: [['undo', 'redo'], ['paragraphFormat'], ['bold', 'italic'],
    ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify'],
    ['formatOL', 'formatUL'], ['indent', 'outdent']]
  })
</script>
```

#### TinyMCE 5 - Creating a Custom Toolbar Layout

```html
<h2>{{site.productname}} Custom Toolbar</h2>
  <form method='post'>
    <textarea id='tiny_custom_toolbar'>Hello, World! I'm a tiny editor!</textarea>
  </form>
<script>
  tinymce.init({
    selector: '#tiny_custom_toolbar',
    plugins: 'lists',
    toolbar: 'undo redo | formatselect | bold italic
      | alignleft aligncenter alignright alignjustify
      | numlist bullist | outdent indent',
  });
</script>
```

### Additional Information on Customizing Toolbars

* For information on customizing the {{site.productname}} Toolbar, see: [User interface options: Toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar).
* For a list of toolbar items, see: [Toolbar Buttons Available for {{site.productname}}]({{site.baseurl}}/advanced/available-toolbar-buttons/).

## Configuring Inline Mode

When migrating from Froala to {{site.productname}}, the `toolbarInline` option changes to `inline`. Some additional settings you should consider include:

* [The Quick Toolbar plugin]({{site.baseurl}}/plugins/opensource/quickbars/).
* [Context Toolbars]({{site.baseurl}}/ui-components/contexttoolbar/).
* [Context Menus]({{site.baseurl}}/ui-components/contextmenu/).
* [Disabling the {{site.productname}} menubar]({{site.baseurl}}/configure/editor-appearance/#menubar).

### Examples: Enabling Inline Mode

The following examples show Froala and {{site.productname}} configured for inline mode.

#### Froala 3 - Configuring Inline Mode

```html
<h3>Froala Inline Mode</h3>
  <form method='post'>
    <div id=froala_custom_inline_toolbar>Hello, World! I'm a froala editor!</div>
  </form>
<script>
  var editor = new FroalaEditor('div#froala_custom_inline_toolbar', {
    toolbarInline: true,
    charCounterCount: false
  })
</script>
```

#### TinyMCE 5 - Configuring Inline Mode

```html
<h3>TinyMCE Inline Mode</h3>
  <form method='post'>
    <div id='tiny_custom_inline_toolbar'>Hello, World! I'm a tiny editor!</div>
  </form>
<script>
  tinymce.init({
    selector: '#tiny_custom_inline_toolbar',
    inline: true
  });
</script>
```

### Additional Information for Inline Mode

For information on:
* The inline editing mode, see: [Setup inline editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/).
* Configuring a Quick Toolbar, see: [Quick Toolbar plugin]({{site.baseurl}}/plugins/opensource/quickbars/).
* Configuring a contextual toolbar, see: [Context Toolbar]({{site.baseurl}}/ui-components/contexttoolbar/).
* Configuring a contextual menu, see: [Context Menu]({{site.baseurl}}/ui-components/contextmenu/).
* Disabling the {{site.productname}} menubar, see: [User interface options: Menubar]({{site.baseurl}}/configure/editor-appearance/#menubar).
* The {{site.productname}} distraction-free editing mode, see: [{{site.productname}} distraction-free editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-distraction-free/).

## Migrating Custom Buttons

The {{site.productname}} `addButton` option is used in place of the Froala `RegisterCommand` option.

For information on getting started with the `addButton` option, see: [Toolbar buttons]({{site.baseurl}}/ui-components/toolbarbuttons/#howtocreatecustomtoolbarbuttons).

### Examples: Custom Toolbar Buttons

The following examples show a Froala editor and a {{site.productname}} editor with a basic configuration and two custom toolbar buttons.

#### Froala 3 - Creating a Custom Toolbar Button

```html
<h2>Froala Custom Button</h2>
  <form method='post'>
    <textarea id=froala_custom_button>Hello, World! I'm a froala editor!</textarea>
  </form>
<script>
  FroalaEditor.DefineIcon('mybutton1', {NAME: 'star', SVG_KEY: 'star'});
  FroalaEditor.RegisterCommand('mybutton1', {
    title: 'My Button',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      this.html.insert('&nbsp;<strong>It\'s my button!</strong>&nbsp;');
    }
  });

  FroalaEditor.RegisterCommand('My&#160;Button', {
    title: 'My Button',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      this.html.insert('&nbsp;<strong>It\'s my other button!</strong>&nbsp;');
    }
  });

  var editor = new FroalaEditor('textarea#froala_custom_button',{
    toolbarButtons: [['mybutton1'],['My&#160;Button']]
  })
</script>
```

#### TinyMCE 5 - Creating a Custom Toolbar Button

```html
<h2>{{site.productname}} Custom Button</h2>
  <form method='post'>
    <textarea id='tiny_custom_button'>Hello, World! I'm a tiny editor!</textarea>
  </form>
<script>
  tinymce.init({
    selector: '#tiny_custom_button',
    toolbar: 'myButton1 | myButton2',
    setup: function (editor) {
      editor.ui.registry.addButton('myButton1', {
        icon: 'user',
        onAction: function (_) {
          editor.insertContent('&nbsp;<strong>It\'s my icon button!</strong>&nbsp;');
        }
      });

      editor.ui.registry.addButton('myButton2', {
        text: 'My Button',
        onAction: function (_) {
          editor.insertContent('&nbsp;<strong>It\'s my text button!</strong>&nbsp;');
        }
      });
    }
  });
</script>
```

### Additional Information on Custom Toolbar Buttons

* For an overview on creating custom toolbar buttons, see: [Toolbar buttons]({{site.baseurl}}/ui-components/toolbarbuttons/#howtocreatecustomtoolbarbuttons).
* For information on the available types of toolbar buttons and examples of custom toolbar buttons, see: [Types of toolbar buttons]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/).

## Migrating Custom Drop-down Toolbar Buttons

The {{site.productname}} `addMenuButton` option is used in place of the Froala `RegisterCommand` `type: dropdown` option.

For information on getting started with the `addMenuButton` option, see: [Toolbar buttons]({{site.baseurl}}/ui-components/toolbarbuttons/#howtocreatecustomtoolbarbuttons) and [Types of toolbar buttons: Menu button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menubutton).

### Examples: Custom Drop-down Buttons

The following examples show a Froala editor and a {{site.productname}} editor with a basic configuration and a custom drop-down toolbar button.

#### Froala 3 - Creating a Custom Drop-down Button

```html
<h2>Froala Custom Drop-down Button</h2>
  <form method='post'>
    <textarea id='froala_custom_button_menu'>Hello, World! I'm a froala editor!</textarea>
  </form>
<script>
  var option_values = {
    'Opt1': '<strong>You clicked menu item 1!</strong>',
    'Opt2': '<em>You clicked menu item 2!</em>'
  };
  FroalaEditor.DefineIcon('mybuttonmenu', {NAME: 'plus', SVG_KEY: 'add'});
  FroalaEditor.RegisterCommand('mybuttonmenu', {
    title: 'My Other Button Menu',
    type: 'dropdown',
    focus: false,
    undo: false,
    refreshAfterCallback: true,
    options: {
      'Opt1': 'Menu item 1',
      'Opt2': 'Menu item 2'
    },
    callback: function (cmd, val) {
      this.html.insert(option_values[val]);
    }
  });
  var editor = new FroalaEditor('textarea#froala_custom_button_menu', {
    toolbarButtons: [['mybuttonmenu']]
  })
</script>
```

#### TinyMCE 5 - Creating a Custom Drop-down Button

```html
<h2>{{site.productname}} Custom Drop-down Button</h2>
  <form method='post'>
    <textarea id='tiny_custom_button_menu'>Hello, World! I'm a tiny editor!</textarea>
  </form>
<script>
  tinymce.init({
    selector: '#tiny_custom_button_menu',
    toolbar: 'my_button',

    setup: function (editor) {
      editor.ui.registry.addMenuButton('my_button', {
        text: 'My button menu',
        icon: 'gamma',
        fetch: function (callback) {
          var items = [
            {
              type: 'menuitem',
              text: 'Menu item 1',
              onAction: function () {
                editor.insertContent('&nbsp;<strong>You clicked menu item 1!</strong>');
              }
            },
            {
              type: 'menuitem',
              text: 'Menu item 2',
              icon: 'user',
              onAction: function () {
                editor.insertContent('&nbsp;<em>You clicked menu item 2!</em>');
              }
            }
          ];
          callback(items);
        }
      });
    }
  });
</script>
```

### Additional Information on Drop-down Buttons

For information on creating drop-down buttons, see: [Types of toolbar buttons: Menu button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menubutton).


