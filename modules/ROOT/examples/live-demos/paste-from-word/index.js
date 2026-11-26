tinymce.init({
  selector: 'textarea#paste-from-word',
  height: 720,
  plugins: [
    'powerpaste',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'pastetext | undo redo | blocks | ' +
    'bold italic underline forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  powerpaste_word_import: 'prompt',
  powerpaste_googledocs_import: 'prompt',
  powerpaste_html_import: 'prompt',
  powerpaste_allow_local_images: true,
  powerpaste_autolink_urls: true,
  powerpaste_clean_filtered_inline_elements: [ 'strong', 'em' ]
});
