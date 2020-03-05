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
  selector: 'textarea#creating-a-custom-button-1',
  plugins: 'code wordcount',
  toolbar: 'undo redo | currentdate',
  content_css: '//www.tiny.cloud/css/codepen.min.css',

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
