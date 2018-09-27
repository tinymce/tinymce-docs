var dfreeHeaderConfig = {
    selector: '.dfree-header',
    menubar: false,
    inline: true,
    theme: 'inlite',
    insert_toolbar: 'undo redo',
    selection_toolbar: 'italic underline'
  };

  var dfreeBodyConfig = {
    selector: '.dfree-body',
    menubar: false,
    inline: true,
    theme: 'inlite',
    plugins: [
      'autolink',
      'codesample',
      'contextmenu',
      'link',
      'linkchecker',
      'lists',
      'mediaembed',
      'powerpaste',
      'table',
      'textcolor',
      'image'
    ],
    toolbar: [
      'undo redo | bold italic underline | fontselect fontsizeselect',
      'forecolor backcolor | alignleft aligncenter alignright alignfull | link unlink | numlist bullist outdent indent'
    ],
    insert_toolbar: 'quicktable image',
    selection_toolbar: 'bold italic | h2 h3 | blockquote quicklink',
    contextmenu: 'inserttable | cell row column deletetable',
    powerpaste_word_import: 'clean',
    powerpaste_html_import: 'clean'
  };

tinymce.init(dfreeHeaderConfig);
tinymce.init(dfreeBodyConfig);