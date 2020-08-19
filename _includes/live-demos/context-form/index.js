tinymce.init({
  selector: 'textarea#context-form',
  height: 300,
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
  },
  content_style: {{site.liveDemoCSSStyles}}
});