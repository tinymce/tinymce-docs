tinymce.init({
  selector: 'textarea#paste-from-word',
  height: 620,
  plugins: 'powerpaste lists table link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'pastetext | undo redo | blocks | bold italic underline | ' +
    'alignleft aligncenter alignright | bullist numlist | table link | ' +
    'backcolor | alignjustify | outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  // Ask whether to keep or remove formatting for Word, Excel, Google Docs and web page content.
  powerpaste_word_import: 'prompt',
  powerpaste_googledocs_import: 'prompt',
  powerpaste_html_import: 'prompt',
  // Import images pasted or dropped from the computer as Base64-encoded images.
  powerpaste_allow_local_images: true
});
