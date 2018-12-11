tinymce.init({
  selector: 'textarea.tinymce',
  height: 300,
  plugins: 'code',
  toolbar: 'undo redo | currentdate',
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ],

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
