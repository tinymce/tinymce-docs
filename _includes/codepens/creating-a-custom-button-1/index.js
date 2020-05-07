tinymce.init({
  selector: 'textarea#creating-a-custom-button-1',
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  plugins: 'code wordcount',
  toolbar: 'undo redo | currentdate',

  setup: function (editor) {

    function toTimeHtml(date) {
      return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>';
    }

    function insertDate() {
      var html = toTimeHtml(new Date());
      editor.insertContent(html);
    }

    editor.ui.registry.addButton('currentdate', {
      icon: 'insertdatetime',
      tooltip: "Insert Current Date",
      onAction: insertDate
    });
  }
});
