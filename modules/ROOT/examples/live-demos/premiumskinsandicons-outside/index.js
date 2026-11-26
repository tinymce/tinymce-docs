tinymce.init({
  selector: 'textarea#premiumskinsandicons-outside',
  height: 320,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'blocks | bold italic underline strikethrough | image blockquote bullist link',
  skin: 'outside',
  icons: 'small',
  menubar: false,
  statusbar: false
});
