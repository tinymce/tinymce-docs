/*
** Adding some additional fonts to the TinyMCE fonts list
** to allow the editor content to match the surrounding content.
*/
const fontList = 'Andale Mono=andale mono,monospace;' +
  'Aileron=aileron,sans-serif;' +
  'Arial=arial,helvetica,sans-serif;' +
  'Arial Black=arial black,sans-serif;' +
  'Avenir=Avenir W01,sans-serif;' +
  'Book Antiqua=book antiqua,palatino,serif;' +
  'Comic Sans MS=comic sans ms,sans-serif;' +
  'Courier New=courier new,courier,monospace;' +
  'Georgia=georgia,palatino,serif;' +
  'Helvetica=helvetica,arial,sans-serif;' +
  'Impact=impact,sans-serif;' +
  'Symbol=symbol;' +
  'Tahoma=tahoma,arial,helvetica,sans-serif;' +
  'Terminal=terminal,monaco,monospace;' +
  'Times New Roman=times new roman,times,serif;' +
  'Trebuchet MS=trebuchet ms,geneva,sans-serif;' +
  'Verdana=verdana,geneva,sans-serif;' +
  'Webdings=webdings;' +
  'Wingdings=wingdings,zapf dingbats';

// Initialize the TinyMCE editor
tinymce.init({
  selector: "textarea#custom-menu-item",
  height: 500,
  toolbar: false,
  menubar: "custom",
  menu: {
    custom: { title: "Custom menu", items: "basicitem nesteditem toggleitem" }
  },
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  font_formats: fontList,
  setup: function (editor) {
    var toggleState = false;

    editor.ui.registry.addMenuItem('basicitem', {
      text: 'My basic menu item',
      onAction: function () {
        editor.insertContent('<p>Here\'s some content inserted from a basic menu!</p>');
      }
    });

    editor.ui.registry.addNestedMenuItem('nesteditem', {
      text: 'My nested menu item',
      getSubmenuItems: function () {
        return [
          {
            type: 'menuitem',
            text: 'My submenu item',
            onAction: function () {
              editor.insertContent('<p>Here\'s some content inserted from a submenu item!</p>');
            }
          }
        ];
      }
    });

    editor.ui.registry.addToggleMenuItem('toggleitem', {
      text: 'My toggle menu item',
      onAction: function () {
        toggleState = !toggleState;
        editor.insertContent('<p class="toggle-item">Here\'s some content inserted from a toggle menu!</p>');
      },
      onSetup: function (api) {
        api.setActive(toggleState);
        return function () {};
      }
    });
  }
});