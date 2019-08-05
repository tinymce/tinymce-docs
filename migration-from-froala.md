---
layout: default
title: Migrating from Froala Editor to TinyMCE Editor
title_nav: Migrating from Froala
description: Instructions for migrating from Froala Editor v3 to TinyMCE 5.
keywords: migration considerations premigration pre-migration froala
---

## Migrating a Basic Froala Configuration to TinyMCE

### Procedure

#### Replace Froala source and link scripts with a TinyMCE source script

Such as:
```html
<link href='/lib/node_modules/froala-editor/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
<script type='text/javascript' src='/lib/node_modules/froala-editor/js/froala_editor.pkgd.min.js'></script>
<link href='/lib/node_modules/froala-editor/css/froala_style.min.css' rel='stylesheet' type='text/css' />
```

Tiny Cloud:
```html
<script src="https://cdn.tiny.cloud/1/my-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
```
Replace `my-api-key` with your Tiny Cloud API key.

Self-hosted TinyMCE:
```html
<script src='/path/to/tinymce/base/directory/tinymce.min.js'></script>
```
Replace `/path/to/tinymce/base/directory` with the relative path of the `tinymce/` directory containing `tinymce.min.js`.

#### Replace the Froala editor variable assignment with the tinymce.init function
For:
```html
<form method='post'>
  <textarea id='myeditor'>Enter your comment here!</textarea>
</form>
```

```html
<script>
  var editor = new FroalaEditor('textarea#myeditor')
</script>
```

```html
<script>
  tinymce.init({ selector: '#myeditor' });
</script>
```

### Froala 3 Example: Basic Configuration

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <link href='/lib/node_modules/froala-editor/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
    <script type='text/javascript' src='/lib/node_modules/froala-editor/js/froala_editor.pkgd.min.js'></script>
    <link href='/lib/node_modules/froala-editor/css/froala_style.min.css' rel='stylesheet' type='text/css' />
  </head>
  <body>
    <form method='post'>
      <textarea id=basic_froala>Hello, World! I'm a froala editor!</textarea>
    </form>
    <script>
      var editor = new FroalaEditor('textarea#basic_froala')
    </script>
  </body>
</html>
```

### TinyMCE 5 Example: Basic Configuration

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <script src='/lib/node_modules/tinymce/tinymce.min.js'></script>
  </head>
  <body>
    <form method='post'>
      <textarea id='tiny_basic'>Hello, World! I'm a tiny editor!</textarea>
    </form>
    <script>
      tinymce.init({ selector: '#tiny_basic' });
    </script>
  </body>
</html>
```

## Custom Toolbar

### Froala 3 Example: Custom Toolbar

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

### TinyMCE 5 Example: Custom Toolbar

```html
<h2>TinyMCE Custom Toolbar</h2>
  <form method='post'>
    <textarea id='tiny_custom_toolbar'>Hello, World! I'm a tiny editor!</textarea>
  </form>
<script>
  tinymce.init({
    selector: '#tiny_custom_toolbar',
    plugins: 'lists',
    toolbar: 'undo redo | formatselect | bold italic \
      | alignleft aligncenter alignright alignjustify | numlist bullist | \
      outdent indent',
  });
</script>
```

## Inline Mode

### Froala 3 Example: Inline Mode

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

### TinyMCE 5 Example: Inline Mode

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

## Custom Button

### Froala 3 Example: Custom Toolbar Button

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

### TinyMCE 5 Example: Custom Toolbar Button

```html
<h2>TinyMCE Custom Button</h2>
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
          editor.insertContent('&nbsp;<strong>It\'s my text icon button!</strong>&nbsp;');
        }
      });
    }
  });
</script>
```


## Custom Drop-down Toolbar Buttons

### Froala 3 Example: Custom Drop-down Button

```html
<h2>Froala Custom Drop-down Button</h2>
  <form method='post'>
    <textarea id=froala_custom_button_menu>Hello, World! I'm a froala editor!</textarea>
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

### TinyMCE 5 Example: Custom Drop-down Button

```html
<h2>TinyMCE Custom Drop-down Button</h2>
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

### TinyMCE 5 Example: Custom Nested Drop-down Button

```html
<h2>TinyMCE Custom Nested Drop-down Button</h2>
  <form method='post'>
    <textarea id='tiny_custom_button_menu'>Hello, World! I'm a tiny editor!</textarea>
  </form>
<script>
  tinymce.init({
    selector: '#tiny_custom_button_menu',
    toolbar: 'mybutton',

    setup: function (editor) {
      editor.ui.registry.addMenuButton('mybutton', {
        text: 'My nested button menu',
        fetch: function (callback) {
          var items = [
            {
              type: 'menuitem',
              text: 'Menu item 1',
              onAction: function () {
                editor.insertContent('&nbsp;<em>You clicked menu item 1!</em>');
              }
            },
            {
              type: 'nestedmenuitem',
              text: 'Menu item 2',
              icon: 'user',
              getSubmenuItems: function () {
                return [
                  {
                    type: 'menuitem',
                    text: 'Sub menu item 1',
                    icon: 'unlock',
                    onAction: function () {
                      editor.insertContent('&nbsp;<strong>You clicked Sub menu item 1!</strong>');
                    }
                  },
                  {
                    type: 'menuitem',
                    text: 'Sub menu item 2',
                    icon: 'lock',
                    onAction: function () {
                      editor.insertContent('&nbsp;<em>You clicked Sub menu item 2!</em>');
                    }
                  }
                ];
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



