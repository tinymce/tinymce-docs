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
  selector: 'textarea#context-form',
  height: 300,
  font_formats: fontList,
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  setup: function (editor) {
    var isAnchorElement = function (node) {
      return node.nodeName.toLowerCase() === 'a' && node.href;
    };

    var getAnchorElement = function () {
      var node = editor.selection.getNode();
      return isAnchorElement(node) ? node : null;
    };

    editor.ui.registry.addContextForm('link-form', {
      launch: {
        type: 'contextformtogglebutton',
        icon: 'link'
      },
      label: 'Link',
      predicate: isAnchorElement,
      initValue: function () {
        var elm = getAnchorElement();
        return !!elm ? elm.href : '';
      },
      commands: [
        {
          type: 'contextformtogglebutton',
          icon: 'link',
          tooltip: 'Link',
          primary: true,
          onSetup: function (buttonApi) {
            buttonApi.setActive(!!getAnchorElement());
            var nodeChangeHandler = function () {
              buttonApi.setActive(!editor.readonly && !!getAnchorElement());
            };
            editor.on('nodechange', nodeChangeHandler);
            return function () {
              editor.off('nodechange', nodeChangeHandler);
            }
          },
          onAction: function (formApi) {
            var value = formApi.getValue();
            console.log('Save link clicked with value: ' + value);
            formApi.hide();
          }
        },
        {
          type: 'contextformtogglebutton',
          icon: 'unlink',
          tooltip: 'Remove link',
          active: false,
          onAction: function (formApi) {
            console.log('Remove link clicked');
            formApi.hide();
          }
        }
      ]
    });
  }
});