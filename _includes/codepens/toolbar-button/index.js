tinymce.init({
  selector: 'textarea',
  toolbar: 'basicDateButton selectiveDateButton toggleDateButton splitDateButton menuDateButton',
  setup: function (editor) {

    /* Helper functions */
    var toDateHtml = function (date) {
      return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>';
    };
    var toGmtHtml = function (date) {
      return '<time datetime="' + date.toString() + '">' + date.toGMTString() + '</time>';
    };
    var toIsoHtml = function (date) {
      return '<time datetime="' + date.toString() + '">' + date.toISOString() + '</time>';
    };

    /* Basic button that just inserts the date */
    editor.ui.registry.addButton('basicDateButton', {
      text: 'Insert Date',
      tooltip: 'Insert Current Date',
      onAction: function (_) {
        editor.insertContent(toDateHtml(new Date()));
      }
    });

    /* Basic button that inserts the date, but only if the cursor isn't currently in a "time" element */
    editor.ui.registry.addButton('selectiveDateButton', {
      icon: 'insert-time',
      tooltip: 'Insert Current Date',
      disabled: true,
      onAction: function (_) {
        editor.insertContent(toDateHtml(new Date()));
      },
      onSetup: function (buttonApi) {
        var editorEventCallback = function (eventApi) {
          buttonApi.setDisabled(eventApi.element.nodeName.toLowerCase() === 'time');
        };
        editor.on('NodeChange', editorEventCallback);
        return function (buttonApi) {
          editor.off('NodeChange', editorEventCallback);
        }
      }
    });

    /* Toggle button that inserts the date, but becomes inactive when the cursor is in a "time" element */
    /* so you can't insert a "time" element inside another one. Also gives visual feedback. */
    editor.ui.registry.addToggleButton('toggleDateButton', {
      icon: 'insert-time',
      tooltip: 'Insert Current Date',
      onAction: function (_) {
        editor.insertContent(toDateHtml(new Date()));
      },
      onSetup: function (buttonApi) {
        var editorEventCallback = function (eventApi) {
          buttonApi.setActive(eventApi.element.nodeName.toLowerCase() === 'time');
        };
        editor.on('NodeChange', editorEventCallback);
        return function (buttonApi) {
          editor.off('NodeChange', editorEventCallback);
        }
      }
    });

    /* Split button that lists 3 formats, and inserts the date in the selected format when clicked */
    editor.ui.registry.addSplitButton('splitDateButton', {
      text: 'Insert Date',
      onAction: function (_) {
        editor.insertContent('<p>Its Friday!</p>')
      },
      onItemAction: function (buttonApi, value) {
        editor.insertContent(value);
      },
      fetch: function (callback) {
        var items = [
          {
            type: 'choiceitem',
            text: 'Insert Date',
            value: toDateHtml(new Date())
          },
          {
            type: 'choiceitem',
            text: 'Insert GMT Date',
            value: toGmtHtml(new Date())
          },
          {
            type: 'choiceitem',
            text: 'Insert ISO Date',
            value: toIsoHtml(new Date())
          }
        ];
        callback(items);
      }
    });

    /* Menu button that has a simple "insert date" menu item, and a submenu containing other formats. */
    /* Clicking the first menu item or one of the submenu items inserts the date in the selected format. */
    editor.ui.registry.addMenuButton('menuDateButton', {
      text: 'Date',
      fetch: function (callback) {
        var items = [
          {
            type: 'menuitem',
            text: 'Insert Date',
            onAction: function (_) {
              editor.insertContent(toDateHtml(new Date()));
            }
          },
          {
            type: 'nestedmenuitem',
            text: 'Other formats',
            getSubmenuItems: function () {
              return [
                {
                  type: 'menuitem',
                  text: 'GMT',
                  onAction: function (_) {
                    editor.insertContent(toGmtHtml(new Date()));
                  }
                },
                {
                  type: 'menuitem',
                  text: 'ISO',
                  onAction: function (_) {
                    editor.insertContent(toIsoHtml(new Date()));
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
