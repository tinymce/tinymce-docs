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
  selector: 'textarea#custom-toolbar-listbox',
  height: 500,
  toolbar: 'mybutton',
  plugins: 'wordcount',
  menubar: false,
  font_formats: fontList,
  content_css: '//www.tiny.cloud/css/codepen.min.css',

  setup: function (editor) {
    editor.addButton('mybutton', {
      type: 'listbox',
      text: 'My listbox',
      icon: false,
      onselect: function (e) {
        editor.insertContent(this.value());
      },
      values: [
        { text: 'Menu item 1', value: '&nbsp;<strong>Some bold text!</strong>' },
        { text: 'Menu item 2', value: '&nbsp;<em>Some italic text!</em>' },
        { text: 'Menu item 3', value: '&nbsp;Some plain text ...' }
      ],
      onPostRender: function () {
        /* Select the second item by default */
        this.value('&nbsp;<em>Some italic text!</em>');
      }
    });
  }
});