tinymce.init({
  selector: 'textarea#accordion',
  height: 700,
  plugins: [
    'accordion',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'accordion | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table code | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.mce-content-body details.mce-accordion { margin: 0 0 12px; padding: 10px 14px; border: 1px solid #c6ccdc; border-radius: 8px; } ' +
    '.mce-content-body summary.mce-accordion-summary { color: #17224f; font-weight: 600; } ' +
    '.mce-content-body .mce-accordion-body { margin-top: 8px; }',
  details_initial_state: 'collapsed'
});
