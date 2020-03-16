tinymce.init({
  selector: 'textarea#creating-a-custom-button-2',
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  height: 300,
  plugins: 'code',
  toolbar: 'undo redo | currentdate',

  setup: function (editor) {

    function toTimeHtml(date) {
      return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>';
    }

    function insertDate() {
      var html = toTimeHtml(new Date());
      editor.insertContent(html);
    }

    function monitorNodeChange(btnApi) {
      var disable = function (e) {
         btnApi.setDisabled(e.element.nodeName.toLowerCase() === 'time');
      };
      editor.on('nodechange', disable);
      return function () {
        editor.off('NodeChange', disable);
      };
    }

    editor.ui.registry.addButton('currentdate', {
      icon: 'insert-time',
      tooltip: "Insert Current Date",
      onAction: insertDate,
      onSetup: function (btnApi) {
        return monitorNodeChange(btnApi)
      }
    });
  }
});
