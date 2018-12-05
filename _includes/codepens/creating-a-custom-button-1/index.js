tinymce.init({
  selector: '#creating-a-custom-button-1',
  plugins: 'code wordcount',
  toolbar: 'undo redo | currentdate',
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'],

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
