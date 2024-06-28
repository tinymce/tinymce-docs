const emailHeaderConfig = {
  selector: '.tinymce-heading',
  menubar: false,
  inline: true,
  toolbar_sticky: true,
  toolbar_sticky_offset: 110,
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
};

const emailBodyConfig = {
  selector: '.tinymce-body',
  menubar: false,
  inline: true,
  toolbar_sticky: true,
  toolbar_sticky_offset: 110,
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
};

tinymce.init(emailHeaderConfig);
tinymce.init(emailBodyConfig);