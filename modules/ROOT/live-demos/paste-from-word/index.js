tinymce.init({
  selector: 'textarea#paste-from-word',
  height: 400,
  menubar: true,
  plugins: [
    'advlist autolink lists link image charmap preview anchor',
    'searchreplace visualblocks advcode fullscreen',
    'insertdatetime media table powerpaste code'
  ],
  toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image code',
  powerpaste_allow_local_images: true,
  powerpaste_word_import: 'prompt',
  powerpaste_html_import: 'prompt',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});