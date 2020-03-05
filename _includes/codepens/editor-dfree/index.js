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

var dfreeHeaderConfig = {
  selector: '.dfree-header',
  menubar: false,
  inline: true,
  toolbar: false,
  plugins: [ 'quickbars' ],
  quickbars_insert_toolbar: 'undo redo',
  quickbars_selection_toolbar: 'italic underline',
  content_css: '//www.tiny.cloud/css/codepen.min.css',
};

var dfreeBodyConfig = {
  selector: '.dfree-body',
  menubar: false,
  inline: true,
  plugins: [
    'autolink',
    'codesample',
    'link',
    'lists',
    'media',
    'powerpaste',
    'table',
    'image',
    'quickbars',
    'codesample',
    'help'
  ],
  toolbar: false,
  quickbars_insert_toolbar: 'quicktable image media codesample',
  quickbars_selection_toolbar: 'bold italic underline | formatselect | blockquote quicklink',
  contextmenu: 'undo redo | inserttable | cell row column deletetable | help',
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
  font_formats: fontList,
  content_css: '//www.tiny.cloud/css/codepen.min.css',
};

// Initialize the TinyMCE editors
tinymce.init(dfreeHeaderConfig);
tinymce.init(dfreeBodyConfig);