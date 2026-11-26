tinymce.init({
  selector: 'textarea#premiumskinsandicons-naked',
  height: 300,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'bold italic underline strikethrough | bullist numlist | link',
  skin: 'naked',
  icons: 'small',
  toolbar_location: 'bottom',
  menubar: false,
  statusbar: false
});
