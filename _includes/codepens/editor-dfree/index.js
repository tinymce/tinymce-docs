var dfreeHeaderConfig = {
  selector: '.dfree-header',
  menubar: false,
  inline: true,
  toolbar: false,
  plugins: [ 'quickbars' ],
  quickbars_insert_toolbar: 'undo redo',
  quickbars_selection_toolbar: 'italic underline'
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
    'textcolor',
    'image',
    'quickbars'
  ],
  toolbar: false,
  quickbars_insert_toolbar: 'quicktable image',
  quickbars_selection_toolbar: 'bold italic | h2 h3 | blockquote quicklink',
  contextmenu: 'inserttable | cell row column deletetable',
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean'
};

tinymce.init(dfreeHeaderConfig);
tinymce.init(dfreeBodyConfig);