tinymce.init({
  selector: 'textarea#importword',
  height: 720,
  plugins: 'importword lists table link image advlist autolink charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'importword | undo redo | blocks | bold italic underline | ' +
    'alignleft aligncenter alignright | bullist numlist | table link image | ' +
    'backcolor | alignjustify | outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  // Keep Word styles, Word default formatting and Word-to-HTML resets as inline styles (the plugin default).
  // Set a value to 'none' to drop that formatting so the editor content styles apply instead.
  importword_converter_options: {
    formatting: {
      styles: 'inline',
      defaults: 'inline',
      resets: 'inline'
    }
  }
});
