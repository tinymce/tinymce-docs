tinymce.init({
  selector: 'textarea#iframe',
  plugins: 'quickbars table image link lists media autoresize help',
  toolbar: 'undo redo | formatselect | bold italic | alignleft aligncentre alignright alignjustify | indent outdent | bullist numlist',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});

tinymce.init({
  selector: 'div#inline-distraction-free',
  menubar: false,
  inline: true,
  plugins: [
    'autolink', 'autoresize', 'codesample', 'link', 'lists', 'media',
    'powerpaste', 'table', 'image', 'quickbars', 'codesample', 'help'
  ],
  toolbar: false,
  quickbars_insert_toolbar: 'quicktable image media codesample',
  quickbars_selection_toolbar: 'bold italic underline | formatselect | bullist numlist | blockquote quicklink',
  contextmenu: 'undo redo | inserttable | cell row column deletetable | help',
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
});