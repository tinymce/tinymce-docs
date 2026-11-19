tinymce.init({
  selector: 'textarea#accordion',
  height: 680,
  plugins: 'accordion lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'accordion | undo redo | blocks | bold italic | bullist numlist | link | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: 'details.mce-accordion { margin: 0 0 12px; padding: 10px 14px; border: 1px solid #d9deef; border-radius: 8px; } details.mce-accordion summary { font-weight: 600; } .mce-accordion-body { margin-top: 8px; }'
});
