const settings = {
  plugins: 'lists help',
  toolbar: 'undo redo | blocks | bold italic | bullist numlist',
  ui_mode: 'split',
  min_height: 500
};

tinymce.init({
  ...settings,
  selector: 'textarea#iframe'
});

tinymce.init({
  ...settings,
  inline: true,
  selector: '.tinymce-heading',
  inline: true,
  toolbar: 'undo redo | bold italic underline'
});

tinymce.init({
  ...settings,
  selector: '.tinymce-body',
  inline: true
});