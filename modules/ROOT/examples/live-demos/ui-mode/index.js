tinymce.init({
    selector: 'textarea#iframe',
    plugins: 'quickbars table image link lists media autoresize help',
    toolbar: 'undo redo | blocks | bold italic | alignleft aligncentre alignright alignjustify | indent outdent | bullist numlist',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
    ui_mode: 'split',
    min_height: 500
  });
  
const emailHeaderConfig = {
  selector: '.tinymce-heading',
  menubar: false,
  inline: true,
  plugins: [
    'lists',
    'powerpaste',
    'autolink'
  ],
  toolbar: 'undo redo | bold italic underline',
  valid_elements: 'strong,em,span[style],a[href]',
  valid_styles: {
    '*': 'font-size,font-family,color,text-decoration,text-align'
  },
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
  ui_mode: 'split'
};

const emailBodyConfig = {
  selector: '.tinymce-body',
  menubar: false,
  inline: true,
  plugins: [
    'link', 'lists', 'powerpaste',
    'autolink', 'tinymcespellchecker'
  ],
  toolbar: [
    'undo redo | bold italic underline | fontfamily fontsize',
    'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
  ],
  valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
  valid_styles: {
    '*': 'font-size,font-family,color,text-decoration,text-align'
  },
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
  ui_mode: 'split'
};

tinymce.init(emailHeaderConfig);
tinymce.init(emailBodyConfig);